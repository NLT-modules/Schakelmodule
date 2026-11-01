import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const localEditorPath = path.resolve("editor");
const localOptionsPath = path.resolve("editor", "options.js");
const localEditorMdPath = path.resolve("editor.md");
const htmlDest = path.resolve("_build", "html", "editor");
const tempArchive = path.resolve(
  "_build",
  `editor-release-${process.pid}.tar.gz`,
);
// The editor build, straight from myst-editor's package registry (project 28652),
// not through the COMBINE assets template. Pinned rather than "latest": a fixed
// version makes every build reproducible, and a book never changes editor without
// a commit. Published versions:
//   https://gitlab.tudelft.nl/api/v4/projects/28652/packages?package_name=editor-dist
const downloadUrl =
   "../myst-editor.tar.gz";
  // "https://gitlab.tudelft.nl/api/v4/projects/28652/packages/generic/editor-dist/1.10.0-dev/myst-editor.tar.gz";

let downloadTask = null;

function overlayDirectory(sourceDir, targetDir) {
  fs.mkdirSync(targetDir, { recursive: true });
  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const s = path.resolve(sourceDir, entry.name),
      t = path.resolve(targetDir, entry.name);
    entry.isDirectory() ? overlayDirectory(s, t) : fs.copyFileSync(s, t);
  }
}

export const plugin = {
  name: "editor-plugin",
  directives: [],
  roles: [],
  transforms: [
    {
      name: "editor-dir",
      stage: "project",
      plugin: () => async () => {
        if (fs.existsSync(localEditorMdPath)) {
          throw new Error(
            `\n[Editor Plugin] FATAL ERROR: '${localEditorMdPath}' is not allowed as mystmd page with the Editor Plugin.\n`,
          );
        }
        if (!fs.existsSync(localOptionsPath)) {
          throw new Error(
            `\n[Editor Plugin] FATAL ERROR: '${localOptionsPath}' was not found!\nThe Myst build has been aborted because the editor requires this configuration file to run.\n`,
          );
        }
        if (downloadTask) {
          await downloadTask;
          return;
        }
        downloadTask = (async () => {
          try {
            fs.mkdirSync(htmlDest, { recursive: true });
            const res = await fetch(downloadUrl, {
              mode: "same-origin",
              headers: { "User-Agent": "Mozilla/5.0 (Node.js)", Accept: "*/*" },
            });
            if (!res.ok)
              throw new Error(
                `[Editor Plugin] Failed to fetch release: ${res.status} ${res.statusText}`,
              );
            if ((res.headers.get("content-type") || "").includes("text/html"))
              throw new Error(
                "[Editor Plugin] Downloaded HTML — the package is probably private / needs a token.",
              );
            fs.writeFileSync(tempArchive, Buffer.from(await res.arrayBuffer()));
            execSync(
              `tar -xzf "${tempArchive}" -C "${htmlDest}" --strip-components=1`,
            );
            if (fs.existsSync(localEditorPath))
              overlayDirectory(localEditorPath, htmlDest);
          } catch (err) {
            console.error(`[Editor Plugin] ${err.message}`);
          } finally {
            if (fs.existsSync(tempArchive)) fs.rmSync(tempArchive);
          }
        })();
        await downloadTask;
      },
    },
  ],
};
