const execSync = require("child_process").execSync;

console.log("Deploying to GitHub Pages...");

const remoteURL = "https://github.com/Popov1027/canvas-game.git";
const branch = "gh-pages";

try {
  execSync(`git checkout --orphan ${branch}`);
  execSync("git add -A");
  execSync('git commit -m "Deploy to GitHub Pages"');
  execSync(`git push --force ${remoteURL} ${branch}`);
  execSync(`git branch -D ${branch}`);
  console.log("Successfully deployed to GitHub Pages.");
} catch (error) {
  console.error("Failed to deploy to GitHub Pages:", error);
}
