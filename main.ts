// u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722 — Worst Fix Ever.
// One line of commit message for a bug fix that made everything worse.
// The repair deletes the thing that reported the problem — the specific
// irony of a fix that broke more than it mended, in a tired engineer's voice.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: stop the leak by deleting the bucket, the floor, and the user who reported it";

const MAX_CHARS = 100;
if (ENTRY.trim().length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-${MAX_CHARS}`);
}

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, ENTRY);

console.log(`wrote ${OUT_DIR}/entry.txt (${ENTRY.length} chars)`);
