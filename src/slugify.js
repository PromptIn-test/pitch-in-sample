/**
 * Turn any text into a lowercase, dash-separated slug.
 * slugify("Hello, World!") -> "hello-world"
 * Anything that isn't a string throws a TypeError.
 */
export function slugify(input) {
  if (typeof input !== "string") {
    throw new TypeError(`slugify expects a string, got ${input === null ? "null" : typeof input}`);
  }
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
