// Installs the MyST editor into the built site at <site>/editor/, like the COMBINE assets plugin
// (assets/plugins/editor.mjs), but from the package in editor-dist/ instead of a published release.
// editor-dist/ is filled by ./update-editor.sh from a local myst-editor checkout, so this book can run
// an unreleased build. The book's own editor/ folder (options.js) is laid over it last.
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const archive = path.resolve("editor-dist", "myst-editor.tar.gz");
const localEditorPath = path.resolve("editor");
const htmlDest = path.resolve("_build", "html", "editor");

let installTask = null;

function overlayDirectory(sourceDir, targetDir) {
  fs.mkdirSync(targetDir, { recursive: true });
  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const s = path.resolve(sourceDir, entry.name),
      t = path.resolve(targetDir, entry.name);
    entry.isDirectory() ? overlayDirectory(s, t) : fs.copyFileSync(s, t);
  }
}

export const plugin = {
  name: "editor-local",
  directives: [],
  roles: [],
  transforms: [
    {
      name: "editor-local-dir",
      stage: "project",
      plugin: () => async () => {
        if (!fs.existsSync(path.resolve(localEditorPath, "options.js"))) {
          throw new Error("[Editor Plugin] editor/options.js was not found; the editor needs it to run.");
        }
        if (!fs.existsSync(archive)) {
          throw new Error("[Editor Plugin] editor-dist/myst-editor.tar.gz was not found; run ./update-editor.sh first.");
        }
        installTask ??= (async () => {
          fs.mkdirSync(htmlDest, { recursive: true });
          execSync(`tar -xzf "${archive}" -C "${htmlDest}" --strip-components=1`);
          overlayDirectory(localEditorPath, htmlDest);
          const version = fs.existsSync("editor-dist/VERSION") ? fs.readFileSync("editor-dist/VERSION", "utf8").trim() : "unknown";
          console.log(`[Editor Plugin] Installed the local editor build (${version}).`);
        })();
        await installTask;
      },
    },
  ],
};