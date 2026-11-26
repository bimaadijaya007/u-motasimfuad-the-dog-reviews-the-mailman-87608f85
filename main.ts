// The Dog Reviews the Mailman
// Writes one funny one-line review, from a dog's point of view, to
// /output/entry.txt (must be 1-200 characters, a single line).

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Five stars for the mailman: he comes every day, lets me bark him off the porch, and never once asked why I lick the envelopes. Best nemesis ever.";

// The gate only accepts 1-200 characters on a single line, so refuse
// to write anything that would fail it instead of failing silently.
if (REVIEW.length < 1 || REVIEW.length > 200) {
  throw new Error(`review is ${REVIEW.length} characters, must be 1-200`);
}
if (REVIEW.includes("\n")) {
  throw new Error("review must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
console.log(`${REVIEW.length} chars: ${REVIEW}`);
