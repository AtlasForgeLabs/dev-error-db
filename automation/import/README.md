# OpenClaw High-Potential Candidate Import

This importer prepares qualified OpenClaw findings for human review in Dev Error DB. It does not publish pages, edit existing error pages, push branches, or merge changes.

## Input

Expected real input:

```text
automation/import/input/high-potential-candidates.json
```

OpenClaw should write a JSON array of candidates using this shape:

```json
[
  {
    "error_signature": "",
    "title": "",
    "technology": "",
    "recommended_category": "",
    "search_intent": "",
    "why_developers_search_it": "",
    "commercial_value_score": 1,
    "ranking_difficulty_score": 1,
    "priority_score": 1,
    "duplicate_risk": false,
    "source_urls": [],
    "evidence_summary": "",
    "suggested_related_errors": [],
    "notes": ""
  }
]
```

Use the example file as a template only:

```text
automation/import/input/high-potential-candidates.example.json
```

## Validation Rules

The importer rejects candidates with:

- missing `error_signature`
- missing `search_intent`
- missing `evidence_summary`
- missing or empty `source_urls`
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

## Output

The importer writes:

```text
automation/import/output/imported-candidates.json
```

Output includes a summary plus `accepted_candidates` and `rejected_candidates`. Each record includes import metadata:

- `imported_at`
- `imported_from: "openclaw"`
- `quality_gate_version`
- `import_status`
- `rejection_reasons`

Accepted records are discovery-compatible candidate objects with fields such as `status`, `score`, `slug`, `title`, `category`, `technology`, `error_signature`, `search_intent`, `observed_causes`, `related_terms`, `source`, and `collection_method`.

## Flow

```text
OpenClaw Skill
-> high-potential-candidates.json
-> npm run import:candidates
-> imported-candidates.json
-> human review
-> future expansion pipeline
```

The importer stops at review-ready candidate preparation. Publication remains a separate future step so AtlasForge can keep quality checks, duplication review, and human approval between discovery and page generation.
