import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");

const svg = await readFile(join(root, "public/favicon.svg"));

const sizes = [
  { size: 32, name: "favicon-32.png" },
  { size: 192, name: "icon-192.png" },
  { size: 512, name: "icon-512.png" },
  { size: 180, name: "apple-touch-icon.png" },
];

for (const { size, name } of sizes) {
  const out = join(root, "public", name);
  await sharp(svg).resize(size, size).png().toFile(out);
  console.log("wrote", out);
}
