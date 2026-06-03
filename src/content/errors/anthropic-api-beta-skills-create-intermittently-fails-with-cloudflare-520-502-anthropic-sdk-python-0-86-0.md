---
title: "Anthropic SDK: beta.skills.create intermittently fails with Cloudflare 520/502"
description: "Resolve intermittent Cloudflare 520 (Server Error) / 502 (Bad Gateway) responses when calling beta.skills.create via Anthropic Python SDK Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "beta.skills.create intermittently fails with Cloudflare 520/502 (anthropic SDK python 0.86.0)"
common_causes:
  - "Anthropic SDK Python Issue #1294 — Open issue (#1294) by drewparo, opened Mar 25 2026 and updated Mar 27 2026. Specifically involves Cloudflare proxy layer returning 520/502 for beta.skills.create endpoint. High commercial value: affects paid Anthropic API calls intermittently. Category mapped to Anthropic API as direct API-layer error."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API"
updated: "2026-06-03"
published_at: "2026-06-03T10:44:32.520Z"
updated_at: "2026-06-03T10:44:32.520Z"
---

## What this error means

`beta.skills.create intermittently fails with Cloudflare 520/502 (anthropic SDK python 0.86.0)` is a Anthropic API failure pattern reported for developers trying to resolve intermittent cloudflare 520 (server error) / 502 (bad gateway) responses when calling beta.skills.create via anthropic python sdk. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Anthropic SDK Python Issue #1294 — Open issue (#1294) by drewparo, opened Mar 25 2026 and updated Mar 27 2026. Specifically involves Cloudflare proxy layer returning 520/502 for beta.skills.create endpoint. High commercial value: affects paid Anthropic API calls intermittently. Category mapped to Anthropic API as direct API-layer error.

## Common causes

- Anthropic SDK Python Issue #1294 — Open issue (#1294) by drewparo, opened Mar 25 2026 and updated Mar 27 2026. Specifically involves Cloudflare proxy layer returning 520/502 for beta.skills.create endpoint. High commercial value: affects paid Anthropic API calls intermittently. Category mapped to Anthropic API as direct API-layer error.

## Quick fixes

1. Confirm the exact error signature matches `beta.skills.create intermittently fails with Cloudflare 520/502 (anthropic SDK python 0.86.0)`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/anthropic-sdk-python/issues/1294

Evidence note: Anthropic SDK Python Issue #1294 — Open issue (#1294) by drewparo, opened Mar 25 2026 and updated Mar 27 2026. Specifically involves Cloudflare proxy layer returning 520/502 for beta.skills.create endpoint. High commercial value: affects paid Anthropic API calls intermittently. Category mapped to Anthropic API as direct API-layer error.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `beta.skills.create intermittently fails with Cloudflare 520/502 (anthropic SDK python 0.86.0)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `beta.skills.create intermittently fails with Cloudflare 520/502 (anthropic SDK python 0.86.0)`.
