# Spotlight @crisxai5 — SPEC

## Bounty
- Slug: `u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad`
- Title: Spotlight @crisxai5: AI & Crypto Expert on X
- Bounty page: https://make.fun/bounty/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad
- Prize: $2 total (top 10 places share it). Free entry (entryFeeUsd null, verified).
- Deadline: 27 Nov 2026 18:35 WIB (2026-11-27T11:35:00Z). Score = likes + reposts + quotes of the linked X post, read after the deadline.
- Account: @riyan3w. GitHub: Zallan03 / spotlight-crisxai5. Payout wallet: 7foH5CZanbguGKSg7q9tzBNpU2F9aQEDUrmohg1jctC1. Referral: tmbrnhrj.

## Task
Spotlight @crisxai5, an AI & crypto expert on X, with an X post that carries its own picture or video. The repo holds POST.json at its root: `{"url": "https://x.com/<handle>/status/<id>"}`. `main.ts` (Node 22) copies POST.json to /output; that is all it has to do. The house reads the post itself via FxTwitter.

## Gate (from RULES.txt)
The post MUST:
- (a) carry a picture or video of its own, uploaded to it;
- (b) its own text must carry `@crisxai5` as a whole word;
- (c) its own text must carry one of the account's make.fun play codes (`makefun-` + three words).
- Be posted from a public X account, between the bounty opening and the deadline, and stay up and public until results are out.
- Score = likes + reposts + quotes, read after the deadline.

## Play code (fetched in this session)
- Code 0: `makefun-squid-clay-trumpet` (used in the proposed post text below)
- Code 1: `makefun-cobweb-blanket-ribbon`
- Fetched via GET /api/competitions/u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad/play-code with the @riyan3w API key. The account has 4 codes; any one passes.

## Picture (made in this session)
- File: `spotlight.png` (1600×1600 PNG, in this repo).
- Description: dark navy poster with a cyan-and-gold spotlight beam shining down on a robot head whose brain is half organic, half circuit board, over a rising gold candlestick chart with an upward arrow. Large cyan text "@crisxai5", gold text "AI × CRYPTO EXPERT", bottom line "AI AGENTS • CRYPTO INSIGHTS • WEB3". Verified by viewing: all text spelled correctly, no watermark, sharp and readable at small size.
- Generated with the image-generation tool in this recorded session; never downloaded.

## Proposed post text (to be posted by Riyantri himself — see Blocker)
> Meet @crisxai5 — the AI & crypto expert on X you should be following. Sharp takes on AI agents, crypto insights & Web3 innovation, every day. https://x.com/crisxai5 #AI #Crypto #AIAgents #Web3 makefun-squid-clay-trumpet

- 219 characters (under the 280 limit). Contains `@crisxai5` as a whole word, the play code `makefun-squid-clay-trumpet`, the link https://x.com/crisxai5, and 4 hashtags (#AI #Crypto #AIAgents #Web3).
- Post the picture `spotlight.png` attached to this exact text, from a public X account.

## POST.json — PLACEHOLDER, MUST BE REPLACED
- Current content: `{"url":"https://x.com/riyan3w/status/TO_BE_POSTED"}`
- **Do NOT submit with this URL.** After Riyantri posts the post on X, replace the URL with the real post address (`https://x.com/<handle>/status/<id>`) — do NOT invent a post ID. The gate refuses the placeholder.

## BLOCKER (standing, verified)
No X account is logged in to Muse's browser, and @riyan3w has not linked X. Posting on X MUST be done by Riyantri himself. This entry is built as far as it can go without that: picture made, post text drafted, repo files written, program verified. The X post + POST.json URL + submit are PENDING the user. No login to any X account was attempted, and Hermes/VM1 accounts were not touched.

## Program
- `main.ts` (Node 22, standard library only) copies POST.json from the repo root to `/output/POST.json` and validates the copy parses as a JSON object with a string `url`, failing loudly otherwise.
- Locally: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`.

## Verification
- Run twice; `out/POST.json` byte-identical to `POST.json` both times.
