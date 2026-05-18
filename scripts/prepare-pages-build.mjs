import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const distDir = "dist-pages";
const sourceHtml = join(distDir, "index.static.html");
const indexHtml = join(distDir, "index.html");
const fallbackHtml = join(distDir, "404.html");

if (!existsSync(sourceHtml)) {
  throw new Error(`Expected ${sourceHtml} to exist after the static preview build.`);
}

copyFileSync(sourceHtml, indexHtml);
copyFileSync(sourceHtml, fallbackHtml);
