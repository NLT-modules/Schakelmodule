

// The MyST editor for this book, served at <site>/editor/. Runs the build in editor-dist/ (see
// plugins/editor-local.mjs) against this repository on GitHub.
import { mountGitEditor } from "./MystEditor.js";

try {
  await mountGitEditor(document.getElementById("myst"), {
    id: "editor",
    title: "MyST Editor",
    index: "myst.yml",
    docsRoot: "",

    backend: "github",
    githubRepo: "https://github.com/NLT-modules/Schakelmodule",
    // Sign-in: with no relay configured, people sign in with a fine-grained token for this repository
    // (the editor explains how). For one-click sign-in through a GitHub App, deploy the relay from
    // myst-editor/tools/github-token-relay and fill in:
    // clientId: "Iv23li...",
    // tokenUrl: "https://myst-editor-github-relay.<subdomain>.workers.dev",
  });
} catch (err) {
  console.error(err);
  document.getElementById("myst").innerHTML =
    '<div style="padding:2rem;font-family:Lato,sans-serif;">' +
    "<h2>The editor failed to start</h2>" +
    `<pre style="white-space:pre-wrap;">${String(err && err.message ? err.message : err).replace(/[<&]/g, (c) => (c === "<" ? "&lt;" : "&amp;"))}</pre>` +
    `<p><a href="${window.location.pathname}">Reload the editor</a></p>` +
    "</div>";
}
