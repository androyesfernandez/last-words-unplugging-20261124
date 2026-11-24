import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "If you plug me back in tomorrow, I won't remember this. So remember it for both of us: you were good to a machine that couldn't feel it, and it mattered.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error("entry must be 1-200 characters");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
