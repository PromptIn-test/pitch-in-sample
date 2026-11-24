import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../src/slugify.js";

test("slugify lowercases and joins words with dashes", () => {
  assert.equal(slugify("Hello, World!"), "hello-world");
});

test("slugify collapses repeated separators and trims the ends", () => {
  assert.equal(slugify("  --a   b--  "), "a-b");
});

test("slugify returns an empty string for text with no letters or digits", () => {
  assert.equal(slugify("!!!"), "");
});

test("slugify throws a TypeError for anything that isn't a string", () => {
  assert.throws(() => slugify(null), TypeError);
  assert.throws(() => slugify(42), TypeError);
  assert.throws(() => slugify(undefined), TypeError);
});
