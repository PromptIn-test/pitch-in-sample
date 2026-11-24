import { wordCount } from "./wordCount.js";

/**
 * Whole minutes to read text at 200 words a minute, rounded up.
 * readingTime("") -> 0, 201 words -> 2
 */
export function readingTime(text) {
  return Math.ceil(wordCount(text) / 200);
}
