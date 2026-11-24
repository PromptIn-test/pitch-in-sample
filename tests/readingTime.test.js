import { test } from "node:test";
import assert from "node:assert/strict";
import { readingTime } from "../src/index.js";

test("readingTime is 0 for empty text and rounds up whole minutes", () => {
  assert.equal(readingTime(""), 0);
  assert.equal(readingTime("word ".repeat(200)), 1);
  assert.equal(readingTime("word ".repeat(201)), 2);
});
