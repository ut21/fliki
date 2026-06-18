import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const outputPath = path.join(root, "indices", "site_index.json");

const INCLUDED_DIRS = ["objects", "results", "constructions", "examples", "indices"];

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

const paths = [];
for (const dir of INCLUDED_DIRS) {
  paths.push(...await listMarkdownFiles(path.join(root, dir), root));
}

await writeFile(outputPath, `${JSON.stringify({ paths }, null, 2)}\n`);
console.log(`Wrote ${path.relative(root, outputPath)} with ${paths.length} entries.`);
