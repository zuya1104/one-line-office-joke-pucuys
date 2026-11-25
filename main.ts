const fs = require("fs");
const path = require("path");

const line = "Our office plant died, so facilities replaced it with a laminated photo of a plant, and now Karen from HR waters it every Tuesday at 9 a.m. and files a growth report.";

if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error("entry line must be a single line of 1-200 chars, got " + line.length);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(path.join("/output", "entry.txt"), line + "\n");
