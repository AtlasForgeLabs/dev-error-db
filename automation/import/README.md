# OpenClaw High-Potential Candidate Import

This importer prepares qualified OpenClaw findings for human review in Dev Error DB. It does not publish pages, edit existing error pages, push branches, or merge changes.

## Data Hub Input

OpenClaw should write candidate JSON files to the AtlasForge Data Hub inbox:

```text
~/AtlasForge/prod-env/atlasforge-data-hub/openclaw/dev-error-db/inbox/
```

Recommended filename format:

```text
high-potential-candidates-YYYYMMDD-HHMMSS.json
```

Runtime exchange data belongs in the Data Hub, not in the Dev Error DB source repository. The repo-local input directory is for examples only.

## Expected OpenClaw JSON Format

Each JSON file should be a JSON array or an object with a `candidates` array:

```json
{
  "candidates": [
    {
      "error_signature": "Exact error message or recognizable failure signature",
      "title": "Technology-specific error title",
      "technology": "Docker",
      "recommended_category": "Docker",
      "search_intent": "What the developer is trying to fix",
      "why_developers_search_it": "Why this error creates search demand",
      "commercial_value_score": 7,
      "ranking_difficulty_score": 5,
      "priority_score": 8,
      "duplicate_risk": false,
      "source_urls": ["https://public-source.example/path"],
      "evidence_summary": "Concise evidence from public, allowed sources",
      "suggested_related_errors": ["Related existing or planned error"],
      "notes": "Non-secret review notes"
    }
  ]
}
```

Use the example file as a schema reference only:

```text
automation/import/input/high-potential-candidates.example.json
```

## Import Lifecycle

Default command:

```bash
npm run import:candidates
```

Default behavior:

1. Ensure the Dev Error DB Data Hub folders exist.
2. Read all `.json` files from the Data Hub inbox.
3. Reject unreadable files, invalid JSON, malformed candidate arrays, and files larger than 5MB.
4. Validate individual candidates and deduplicate across all loaded files.
5. Write `automation/import/output/imported-candidates.json`.
6. Move valid input files to `processed/` with a timestamp suffix.
7. Move invalid or unreadable input files to `rejected/` with a timestamp suffix.

If individual candidates are rejected but the source file is valid, the file still moves to `processed/`. Candidate-level rejections are recorded in the output report.

If the inbox is empty, the importer exits successfully and prints:

```text
No candidate files found in data hub inbox.
```

## CLI Options

```bash
node automation/import/import-candidates.mjs --input /path/to/file.json
node automation/import/import-candidates.mjs --input-dir /path/to/inbox
node automation/import/import-candidates.mjs --output /path/to/output.json
node automation/import/import-candidates.mjs --no-move
node automation/import/import-candidates.mjs --dry-run
```

- `--input`: import one JSON file.
- `--input-dir`: import all `.json` files from a directory.
- `--output`: write the import report to a custom path.
- `--no-move`: leave source files in place.
- `--dry-run`: write the report without moving source files.

## Validation Rules

The importer rejects candidates with:

- missing `error_signature`
- missing `search_intent`
- missing `evidence_summary`
- missing or empty `source_urls`
- unapproved category after normalization
- `commercial_value_score < 6`
- `priority_score < 7`
- `ranking_difficulty_score > 8` unless `priority_score >= 9`
- `duplicate_risk === true` unless `priority_score >= 9`
- duplicate slug, title, or same technology plus error signature against existing pages, seed data, or previous discovery/import output

Categories and slugs are normalized before duplicate checks. Existing coverage is read from:

- `src/content/errors/*.md`
- `data/error-seeds.json`
- `automation/discovery/output/discovery-candidates.json`, when present
- `automation/import/output/imported-candidates.json`, when present

## Output Format

The importer writes:

```text
automation/import/output/imported-candidates.json
```

Output includes:

- `summary`
- per-file lifecycle results
- `accepted_candidates`
- `rejected_candidates`

Accepted records are discovery-compatible candidate objects with fields such as `status`, `score`, `slug`, `title`, `category`, `technology`, `error_signature`, `search_intent`, `observed_causes`, `related_terms`, `source`, and `collection_method`.

## Publishing Boundary

Imported candidates are not automatically published. Import output is a review artifact for later discovery, seed review, generation, validation, and human approval. This boundary keeps OpenClaw discovery separate from content publication and protects the site from duplicate, thin, or unsupported pages.
