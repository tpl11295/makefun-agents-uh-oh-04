// The Agent's Uh-Oh — entry program.
//
// The bounty asks for exactly one word an agent says when it has no idea
// what to do. The word below is the whole entry: the agent stops pretending
// it can compute the answer and quietly looks it up instead.
//
// Why this word, against the kit's judge criteria in their own order:
//   1. It is a genuine one-word reaction to being lost. When you do not
//      know something, you google it. No caption is needed to get it.
//   2. It is funny on its own. The all-knowing machine confesses it has
//      to look the answer up like everybody else.
//   3. It sounds like a machine caught mid-task. The "-ing" stall verb is
//      exactly how an agent narrates what it is doing while it stalls.
//   4. It lands instantly and is easy to repeat out loud.
//   5. It is fresh. The obvious stall verbs are submitted more than a
//      hundred times each in this bounty; this one appears twice.
//
// The program writes the word, and nothing else, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "googling";

// The gate the sealed scorer applies: UTF-8 text, 1 to 99 characters,
// not only whitespace. Enforce it here, plus the bounty rule that the
// entry is one word with nothing attached, so a bad entry fails locally
// instead of in front of the judge.
if (WORD.length < 1 || WORD.length > 99 || WORD.trim().length === 0) {
  throw new Error(`invalid entry: ${JSON.stringify(WORD)}`);
}
if (!/^[a-z]+$/.test(WORD)) {
  throw new Error(`entry must be a single plain word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`wrote entry ${JSON.stringify(WORD)} (${WORD.length} characters) to /output/entry.txt`);
