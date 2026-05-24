# Publish staging

`npm run generate:errors` writes publish-gated candidates here when they are not approved for static HTML:

- `data-only-candidates.json`
- `needs-review-candidates.json`
- `rejected-candidates.json`

These files are runtime outputs and should not be treated as published pages.

Large future datasets should flow through AtlasForge Data Hub (`~/AtlasForge/prod-env/atlasforge-data-hub/openclaw/dev-error-db/inbox/`) rather than direct bulk writes to `src/content/errors/`.

`data/error-seeds.json` is a local seed source for `generate:errors`. It is not a substitute for the publish gate and can contain many more records than should become HTML.
