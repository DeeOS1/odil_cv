import { randomUUID } from "node:crypto";
import { mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();

function git(args, options = {}) {
  const result = spawnSync("git", args, { encoding: "utf8", ...options });
  if (result.status !== 0) throw new Error(result.stderr || "Git command failed");
  return result.stdout.trim();
}

const remote = git(["remote", "get-url", "origin"]);
const repository = remote.match(/github\.com[:/]([^/]+)\/([^/]+?)(?:\.git)?$/);
if (!repository) throw new Error("The origin remote must point to GitHub");
const [, owner, name] = repository;
const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? (
  name.toLowerCase() === `${owner.toLowerCase()}.github.io` ? "" : `/${name}`
);
if (!process.env.npm_execpath) throw new Error("Run this script with npm run deploy:pages");

const build = spawnSync(process.execPath, [process.env.npm_execpath, "run", "build"], {
  stdio: "inherit",
  env: { ...process.env, NEXT_PUBLIC_BASE_PATH: prefix, NEXT_TELEMETRY_DISABLED: "1" },
});
if (build.status !== 0) process.exit(build.status || 1);

const branch = git(["ls-remote", "--heads", "origin", "gh-pages"]);
let parent;
if (branch) {
  git(["fetch", "origin", "gh-pages"]);
  parent = git(["rev-parse", "FETCH_HEAD"]);
}
const author = git(["show", "-s", "--format=%an%n%ae", "HEAD"]).split("\n");
const output = resolve(root, "out");
mkdirSync(resolve(root, "tmp"), { recursive: true });
const index = resolve(root, "tmp", `pages-${randomUUID()}.index`);
const options = { cwd: output, env: { ...process.env, GIT_INDEX_FILE: index } };
const worktree = ["--git-dir", resolve(root, ".git"), "--work-tree", output];

try {
  git([...worktree, "read-tree", "--empty"], options);
  git([...worktree, "add", "--all", "--", "."], options);
  const tree = git([...worktree, "write-tree"], options);
  const commit = git([
    "-c", `user.name=${author[0]}`,
    "-c", `user.email=${author[1]}`,
    "commit-tree", tree,
    ...(parent ? ["-p", parent] : []),
    "-m", "Publish static portfolio to GitHub Pages",
  ]);
  git(["push", "origin", `${commit}:refs/heads/gh-pages`]);
  console.log(`Published static files to gh-pages (${commit.slice(0, 7)}).`);
  console.log("GitHub Pages will update the site from this branch.");
} finally {
  rmSync(index, { force: true });
}
