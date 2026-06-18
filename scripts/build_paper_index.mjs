import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const outputPath = path.join(root, "indices", "by_paper.md");

const INCLUDED_DIRS = ["objects", "results", "constructions", "examples"];

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

function parseFrontmatter(frontmatter) {
  const metadata = {};
  const lines = frontmatter.split(/\r?\n/);
  let section = null;

  for (const rawLine of lines) {
    const line = rawLine.replace(/\s+$/, "");
    if (!line) continue;

    const top = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (top) {
      section = top[1];
      if (top[2]) metadata[section] = stripQuotes(top[2]);
      continue;
    }
  }

  return metadata;
}

async function listMarkdownFiles(dir, baseRoot) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  const files = [];

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listMarkdownFiles(fullPath, baseRoot));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(path.relative(baseRoot, fullPath).split(path.sep).join("/"));
    }
  }

  return files;
}

const byPaper = {};

for (const dir of INCLUDED_DIRS) {
  const files = await listMarkdownFiles(path.join(root, dir), root);

  for (const relativePath of files) {
    const content = await readFile(path.join(root, relativePath), "utf8");
    const frontmatter = readFrontmatter(content);
    if (!frontmatter) continue;

    const metadata = parseFrontmatter(frontmatter);
    if (!metadata.paper || !metadata.title || !metadata.type) continue;
    if (metadata.type === "index") continue;

    const paper = metadata.paper;
    const type = metadata.type;

    byPaper[paper] ||= {};
    byPaper[paper][type] ||= [];
    byPaper[paper][type].push({ title: metadata.title, path: relativePath });
  }
}

const TYPE_ORDER = ["model-definition", "model-assumption", "attention-assumption", "object", "construction", "result", "example"];
const TYPE_LABELS = {
  "model-definition": "Model definitions",
  "model-assumption": "Model assumptions",
  "attention-assumption": "Attention",
  "object": "Objects",
  "construction": "Constructions",
  "result": "Results",
  "example": "Examples",
};

function linkForEntry(entry) {
  const depth = entry.path.split("/").length - 1;
  const prefix = "../".repeat(depth);
  return `[${entry.title}](${prefix}${entry.path})`;
}

let markdown = `---\ntitle: Entries by Paper\ntype: index\n---\n\n# Wiki Entries by Paper\n\n`;

for (const [paper, types] of Object.entries(byPaper).sort(([a], [b]) => a.localeCompare(b))) {
  markdown += `## ${paper}\n\n`;

  for (const typeKey of TYPE_ORDER) {
    const entries = types[typeKey];
    if (!entries || entries.length === 0) continue;

    const label = TYPE_LABELS[typeKey] || typeKey;
    markdown += `### ${label}\n\n`;

    for (const entry of entries.sort((a, b) => a.title.localeCompare(b.title))) {
      markdown += `- ${linkForEntry(entry)}\n`;
    }

    markdown += "\n";
  }
}

await writeFile(outputPath, markdown);
console.log(`Wrote ${path.relative(root, outputPath)} with ${Object.keys(byPaper).length} papers.`);
