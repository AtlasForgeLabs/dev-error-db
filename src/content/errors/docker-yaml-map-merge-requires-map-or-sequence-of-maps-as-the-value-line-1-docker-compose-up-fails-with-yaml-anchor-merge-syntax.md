---
title: "Docker Compose v5.1.4 YAML map merge regression — 'map merge requires map or sequence of maps'"
description: "Fix Docker Compose v5.1.4 regression breaking existing compose files that use YAML anchors and merge keys Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "yaml: map merge requires map or sequence of maps as the value (line 1) — docker-compose-up fails with YAML anchor merge syntax"
common_causes:
  - "Issue #13812 on docker/compose (labels: kind/bug, status/0-triage). New version-specific regression; working in v5.1.2, broken in v5.1.4. Affects Docker Desktop users with existing compose projects. Tier 0 API fetched. Category: Docker (exact match). Note: Docker daemon/connection errors are already covered but this is a distinct YAML parsing regression."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-26"
published_at: "2026-05-26T04:43:15.855Z"
updated_at: "2026-05-26T04:43:15.855Z"
---

## What this error means

`yaml: map merge requires map or sequence of maps as the value (line 1) — docker-compose-up fails with YAML anchor merge syntax` is a Docker failure pattern reported for developers trying to fix docker compose v5.1.4 regression breaking existing compose files that use yaml anchors and merge keys. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #13812 on docker/compose (labels: kind/bug, status/0-triage). New version-specific regression; working in v5.1.2, broken in v5.1.4. Affects Docker Desktop users with existing compose projects. Tier 0 API fetched. Category: Docker (exact match). Note: Docker daemon/connection errors are already covered but this is a distinct YAML parsing regression.

## Common causes

- Issue #13812 on docker/compose (labels: kind/bug, status/0-triage). New version-specific regression; working in v5.1.2, broken in v5.1.4. Affects Docker Desktop users with existing compose projects. Tier 0 API fetched. Category: Docker (exact match). Note: Docker daemon/connection errors are already covered but this is a distinct YAML parsing regression.

## Quick fixes

1. Confirm the exact error signature matches `yaml: map merge requires map or sequence of maps as the value (line 1) — docker-compose-up fails with YAML anchor merge syntax`.
2. Check the Docker account, local tool state, and provider configuration involved in the failing workflow.
3. Compare the failing environment with a known working setup, then change one configuration value at a time.

## Platform/tool-specific checks

- Verify the command, editor, extension, or API client that produced the error.
- Compare local settings with CI, deployment, or editor-level settings when the error appears in only one environment.
- Avoid deleting credentials, local model data, or project settings until the failing scope is clear.

## Step-by-step troubleshooting

1. Capture the exact error message and the command, editor action, or request that triggered it.
2. Check whether the failure is account/auth, quota/rate, model/provider, local runtime, or deployment configuration.
3. Review the source evidence below and compare it with your environment.
4. Apply one change at a time and rerun the smallest failing action.
5. Keep the working fix documented for the team or deployment environment.

## How to prevent it

- Keep provider/tool configuration documented.
- Record non-secret diagnostics such as tool version, provider name, model name, and command path.
- Add a lightweight check before CI or production workflows depend on the tool.

## Sources checked

- https://github.com/docker/compose/issues/13812

Evidence note: Issue #13812 on docker/compose (labels: kind/bug, status/0-triage). New version-specific regression; working in v5.1.2, broken in v5.1.4. Affects Docker Desktop users with existing compose projects. Tier 0 API fetched. Category: Docker (exact match). Note: Docker daemon/connection errors are already covered but this is a distinct YAML parsing regression.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `yaml: map merge requires map or sequence of maps as the value (line 1) — docker-compose-up fails with YAML anchor merge syntax` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `yaml: map merge requires map or sequence of maps as the value (line 1) — docker-compose-up fails with YAML anchor merge syntax`.
