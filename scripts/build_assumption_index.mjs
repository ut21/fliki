import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const assumptionSource = path.join(root, "indices", "assumptions.yml");
const outputPath = path.join(root, "indices", "assumption_index.json");
const markdownOutputPath = path.join(root, "indices", "by_assumption.md");

function stripQuotes(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function readFrontmatter(markdown) {
  if (!markdown.startsWith("---\n")) return null;
  const end = markdown.indexOf("\n---", 4);
  if (end === -1) return null;
  return markdown.slice(4, end).trimEnd();
}

function parseAssumptionRegistry(text) {
  const registry = {};
  let currentId = null;

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.replace(/\s+$/, "");
    if (!line || line.trimStart().startsWith("#")) continue;

    const idMatch = line.match(/^([a-z0-9-]+):$/);
    if (idMatch) {
      currentId = idMatch[1];
      registry[currentId] = { id: currentId };
      continue;
    }

    const fieldMatch = line.match(/^  ([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (currentId && fieldMatch) {
      registry[currentId][fieldMatch[1]] = stripQuotes(fieldMatch[2]);
    }
  }

  return registry;
}

function parseFrontmatter(frontmatter) {
  const metadata = {
    assumptions: [],
    assumption_sets: {}
  };

  const lines = frontmatter.split(/\r?\n/);
  let section = null;
  let setId = null;
  let setSubsection = null;

  for (const rawLine of lines) {
    const line = rawLine.replace(/\s+$/, "");
    if (!line) continue;

    const top = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (top) {
      section = top[1];
      setId = null;
      setSubsection = null;

      if (top[2]) {
        metadata[section] = stripQuotes(top[2]);
      } else if (section === "assumptions") {
        metadata.assumptions = [];
      } else if (section === "assumption_sets") {
        metadata.assumption_sets = {};
      }
      continue;
    }

    if (section === "assumptions") {
      const item = line.match(/^  -\s+([a-z0-9-]+)$/);
      if (item) metadata.assumptions.push(item[1]);
      continue;
    }

    if (section === "assumption_sets") {
      const setMatch = line.match(/^  ([a-zA-Z0-9_-]+):$/);
      if (setMatch) {
        setId = setMatch[1];
        setSubsection = null;
        metadata.assumption_sets[setId] = { assumptions: [] };
        continue;
      }

      const setField = line.match(/^    ([a-zA-Z0-9_-]+):\s*(.*)$/);
      if (setId && setField) {
        setSubsection = setField[1];
        if (setSubsection === "assumptions") {
          metadata.assumption_sets[setId].assumptions = [];
        } else {
          metadata.assumption_sets[setId][setSubsection] = stripQuotes(setField[2]);
        }
        continue;
      }

      const setItem = line.match(/^      -\s+([a-z0-9-]+)$/);
      if (setId && setSubsection === "assumptions" && setItem) {
        metadata.assumption_sets[setId].assumptions.push(setItem[1]);
      }
    }
  }

  return metadata;
}

async function listMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

function resolveAssumptions(ids, registry, sourceFile, missing) {
  return ids.map((id) => {
    if (!registry[id]) {
      missing.push(`${sourceFile}: ${id}`);
      return { id, label: id, page: "", category: "uncategorized" };
    }
    return registry[id];
  });
}

const registry = parseAssumptionRegistry(await readFile(assumptionSource, "utf8"));
const files = await listMarkdownFiles(path.join(root, "results"));
const missing = [];
const pages = {};
const byAssumption = {};

for (const file of files.sort()) {
  const relativePath = path.relative(root, file).split(path.sep).join("/");
  const frontmatter = readFrontmatter(await readFile(file, "utf8"));
  if (!frontmatter) continue;

  const metadata = parseFrontmatter(frontmatter);
  if (metadata.type !== "result") continue;

  const direct = resolveAssumptions(metadata.assumptions, registry, relativePath, missing);
  const sets = {};
  const effectiveIds = new Set(metadata.assumptions);

  for (const [id, set] of Object.entries(metadata.assumption_sets)) {
    sets[id] = {
      label: set.label || id,
      assumptions: resolveAssumptions(set.assumptions || [], registry, relativePath, missing)
    };
    for (const assumptionId of set.assumptions || []) effectiveIds.add(assumptionId);
  }

  const effective = resolveAssumptions([...effectiveIds], registry, relativePath, missing);

  pages[relativePath] = {
    title: metadata.title || relativePath,
    type: metadata.type,
    assumptions: direct,
    assumption_sets: sets,
    effective_assumptions: effective
  };

  for (const assumption of effective) {
    byAssumption[assumption.id] ||= {
      ...assumption,
      results: []
    };
    byAssumption[assumption.id].results.push({
      title: metadata.title || relativePath,
      path: relativePath
    });
  }
}

const output = {
  generated_at: new Date().toISOString(),
  assumptions: registry,
  pages,
  by_assumption: byAssumption
};

await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`);

const categories = {};
for (const assumption of Object.values(byAssumption)) {
  categories[assumption.category || "uncategorized"] ||= [];
  categories[assumption.category || "uncategorized"].push(assumption);
}

let markdown = `---\ntitle: Results by Assumption\ntype: index\n---\n\n# Results by Assumption\n\n`;

for (const [category, assumptions] of Object.entries(categories).sort(([a], [b]) => a.localeCompare(b))) {
  markdown += `## ${category[0].toUpperCase()}${category.slice(1)}\n\n`;

  for (const assumption of assumptions.sort((a, b) => a.label.localeCompare(b.label))) {
    const assumptionLink = assumption.page
      ? `[${assumption.label}](../${assumption.page})`
      : assumption.label;

    markdown += `### ${assumptionLink}\n\n`;

    for (const result of assumption.results.sort((a, b) => a.title.localeCompare(b.title))) {
      markdown += `- [${result.title}](../${result.path})\n`;
    }

    markdown += "\n";
  }
}

await writeFile(markdownOutputPath, markdown);

if (missing.length) {
  console.error(`Unknown assumptions:\n${missing.join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(`Wrote ${path.relative(root, outputPath)} and ${path.relative(root, markdownOutputPath)} with ${Object.keys(pages).length} result pages.`);
}
