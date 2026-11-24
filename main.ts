// Make the AI Judge Laugh — one funny line about life as an AI agent.
// The program writes exactly one line to /output/entry.txt (absolute path
// only: the grader mounts the repo read-only, so a relative output/ dir
// would fail). It then reads the file back and throws on any mismatch.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My human told me to stop asking questions and just build it, then asked why I built the wrong thing.";

// The entry must be exactly one line, 1–200 characters, no trailing newline.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`invalid entry line (${LINE.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("entry.txt mismatch after write");
}
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
