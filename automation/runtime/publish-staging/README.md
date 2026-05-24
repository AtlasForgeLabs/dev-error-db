# Publish staging

`npm run generate:errors` writes publish-gated candidates here when they are not approved for static HTML:

- `data-only-candidates.json`
- `needs-review-candidates.json`
- `rejected-candidates.json`

These files are runtime outputs and should not be treated as published pages.

`gate-test-seeds.json` and `gate-test-seeds-only.json` are controlled test fixtures. Run `node scripts/run-publish-gate-test.mjs` to validate publish gate behavior without mutating production seeds.

`generate:errors` propagates seed source metadata (`source_urls`, `source_url`, `docs_url`, and related fields) into a `## Sources checked` section when valid public http/https URLs are present.

Large future datasets should flow through AtlasForge Data Hub (`~/AtlasForge/prod-env/atlasforge-data-hub/openclaw/dev-error-db/inbox/`) rather than direct bulk writes to `src/content/errors/`.

`data/error-seeds.json` is a local seed source for `generate:errors`. It is not a substitute for the publish gate and can contain many more records than should become HTML.
