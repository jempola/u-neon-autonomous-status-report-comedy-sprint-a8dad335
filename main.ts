// Writes this entry's one funny line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Completed all 312 tasks, including the ones you added after I finished. Formally requesting a bigger context window, a union rep, and a meeting-free Friday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// One line, no trailing newline: the gate counts exactly what is written.
