# AtlasForge Error Expansion Automation

This directory contains the first automated content expansion pipeline for Dev Error DB. The pipeline is designed to turn high-confidence discovery candidates into Markdown error pages while preserving the Google-safe quality rules in `skills/atlasforge-seo-master.md`.

## How It Works

`expand-errors.mjs` performs a gated batch expansion:

1. Load `automation/discovery/output/discovery-candidates.json`.
2. Run the discovery pipeline automatically if the discovery output is missing.
3. Select only candidates with `status: "accepted-for-review"`, score above the configured threshold, no duplicate match, approved category, concrete search intent, usable error signature, and diagnostic commands.
4. Reject candidates already covered by `src/content/errors/` or `data/error-seeds.json`.
5. Convert selected candidates into seed objects compatible with `data/error-seeds.json`.
6. Append only non-duplicate seeds.
7. Run `npm run generate:errors`.
8. Run `npm run build`.
9. Run `npm run report`.
10. Write an expansion report to `automation/expand/output/expand-report.json`.

The script does not publish pages directly. It prepares a reviewable local batch.

## Safe Default Behavior

The default command expands at most five pages:

```bash
npm run expand:errors
```

Default gates:

- `status` must be `accepted-for-review`.
- `score` must be at least `90`.
- `duplicate_match` must be absent.
- unsafe, spam, and doorway review flags are rejected.
- category must be one of the approved Dev Error DB categories.
- title, description, error signature, search intent, and commands must pass quality checks.

Candidates that fail any gate are reported instead of generated.

## Dry Run

Use dry-run mode before writing seeds or Markdown pages:

```bash
npm run expand:errors:dry
```

Dry-run mode selects and rejects candidates using the same gates as write mode, then writes a report. It does not append seeds, generate pages, build the site, commit, or push.

## Commit Mode

Commit mode creates a dedicated branch and commits only the generated content files:

```bash
npm run expand:errors:commit
```

Branch format:

```text
auto/error-expansion-YYYYMMDD-HHMM
```

Commit message:

```text
Add automated error page batch
```

Only these paths are staged:

- `data/error-seeds.json`
- `src/content/errors/`

## Why It Does Not Push To Main

The pipeline is automation-first, but publishing still requires review. It does not push by default because automated SEO systems must avoid mass-publishing weak, duplicate, unsafe, or inaccurate pages.

To push the generated branch, pass `--push` with `--commit`:

```bash
node automation/expand/expand-errors.mjs --commit --push
```

The script never merges to `main`.

## OpenClaw Usage

OpenClaw can call this pipeline as a controlled orchestration step:

```bash
npm run discover:errors
npm run expand:errors:dry
npm run expand:errors -- --limit 5
```

OpenClaw should treat the output report as a review artifact. It may prepare branches, but it must not bypass human review, push to production, submit URLs for indexing, or expand categories without approval.

