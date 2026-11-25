// Spotlight @crisxai5 — entry program (Node 22, standard library only).
// Copies POST.json from the repository root to /output/POST.json, where the
// gate reads it. That is all the program has to do: the entry is the X post
// itself, and the house reads the post's counts from X directly.
//
// The POST.json shipped here holds a placeholder address, so the gate refuses
// it as it stands. Replace it with the real post's address after Riyantri
// posts it on X, before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, 'POST.json');
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), outPath);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
// Validate what was copied: it must be a JSON object naming a post address.
let post: unknown;
try {
  post = JSON.parse(readFileSync(outPath, 'utf8'));
} catch (err) {
  console.error(`copied POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post !== 'object' || post === null || typeof (post as { url?: unknown }).url !== 'string') {
  console.error('copied POST.json must be a JSON object with a string "url"');
  process.exit(1);
}
console.log(`copied POST.json to ${outPath}`);
