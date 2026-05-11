# AtlasForge Data Hub

Dev Error DB uses the AtlasForge Data Hub for production runtime exchange data from OpenClaw:

```text
~/AtlasForge/prod-env/atlasforge-data-hub/openclaw/dev-error-db/
```

Runtime data must not be kept in the source repository. The repository should contain code, docs, examples, generated content, and reviewable reports only. OpenClaw should write production candidate JSON files to the Data Hub inbox, and Dev Error DB automation should import from that inbox.

## Folder Structure

```text
openclaw/dev-error-db/
  inbox/
  processed/
  rejected/
  archive/
  logs/
```

- `inbox`: new JSON files from OpenClaw.
- `processed`: valid JSON files after importer processing.
- `rejected`: invalid, unreadable, oversized, or malformed JSON files.
- `archive`: older retained runtime files.
- `logs`: import and cleanup logs.

## Retention Rules

`npm run datahub:cleanup` applies age-based cleanup:

- `inbox`: delete files older than 7 days.
- `processed`: delete files older than 30 days.
- `rejected`: delete files older than 30 days.
- `archive`: delete files older than 90 days.
- `logs`: delete files older than 30 days.

Directories are never deleted.

## Size Guard

If the Dev Error DB Data Hub root exceeds 1GB, cleanup prints a warning. It still applies only age-based deletion by default and does not aggressively delete newest files. Use `--force-size-cleanup` only when an operator has reviewed the Data Hub size pressure and accepts the cleanup policy.

## Manual Cleanup

Preview cleanup first:

```bash
npm run datahub:cleanup:dry
```

Run cleanup:

```bash
npm run datahub:cleanup
```

Use a custom root only for controlled testing:

```bash
node automation/data-hub/cleanup-data-hub.mjs --dry-run --root /custom/path --force
```

The script refuses to operate outside the Dev Error DB Data Hub root unless `--force` is supplied, and it still refuses roots outside `~/AtlasForge/prod-env/atlasforge-data-hub/openclaw/dev-error-db/`.

## Scheduled Cleanup Recommendation

Run dry cleanup in CI or a local scheduler first, then run the real cleanup from a trusted production automation account. A weekly schedule is enough for the current import cadence:

```bash
npm run datahub:cleanup:dry
npm run datahub:cleanup
```

## OpenClaw Handoff

OpenClaw should write files to:

```text
~/AtlasForge/prod-env/atlasforge-data-hub/openclaw/dev-error-db/inbox/
```

Recommended filename format:

```text
high-potential-candidates-YYYYMMDD-HHMMSS.json
```

