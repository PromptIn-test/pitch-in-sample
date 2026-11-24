# pitch-in-sample

> **Sample data.** This is a tiny throwaway library used to test a prototype called Pitch In. It is not a real project and nothing here is maintained.

`pitch-in-sample` is a few small text helpers: `slugify`, `truncate` and `wordCount`.

## Usage

```js
import { readingTime, slugify, truncate, wordCount } from "./src/index.js";

slugify("Hello, World!");               // "hello-world"
truncate("The quick brown fox", 12);    // "The quick b…"
wordCount("  one two\nthree ");         // 3
readingTime("word ".repeat(201));       // 2 (minutes, at 200 words a minute)
```

## Develop

Needs Node 20 or newer, and no dependencies.

```
npm test
```

CI runs the same command on every push to `main` and on every pull request. See `PROJECT_BRIEF.md` for the project brief that coding agents read first.

Direct push for the Pitch In unreviewed-merge alert check (sample data).
