---
title: "Cloudflare D1/KV bulk get corrupts stored JSON values with parse errors"
description: "Debug Cloudflare Workers KV bulk get returning corrupted JSON compared to single key get — affects wrangler CLI and production data integrity Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "jq: parse error: Invalid numeric literal at line X, column Y — kv bulk get output differs from kv key get for same records"
common_causes:
  - "GitHub cloudflare/workers-sdk#14046 — wrangler 4.92.0 / vitest-pool-workers 0.16.6. Bulk get produces different/corrupt output than single key get. Production impact: batch data reads return invalid JSON. Active issue updated today."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-26"
published_at: "2026-05-26T05:43:16.009Z"
updated_at: "2026-05-26T05:43:16.009Z"
---

## What this error means

`jq: parse error: Invalid numeric literal at line X, column Y — kv bulk get output differs from kv key get for same records` is a Cloudflare failure pattern reported for developers trying to debug cloudflare workers kv bulk get returning corrupted json compared to single key get — affects wrangler cli and production data integrity. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub cloudflare/workers-sdk#14046 — wrangler 4.92.0 / vitest-pool-workers 0.16.6. Bulk get produces different/corrupt output than single key get. Production impact: batch data reads return invalid JSON. Active issue updated today.

## Common causes

- GitHub cloudflare/workers-sdk#14046 — wrangler 4.92.0 / vitest-pool-workers 0.16.6. Bulk get produces different/corrupt output than single key get. Production impact: batch data reads return invalid JSON. Active issue updated today.

## Quick fixes

1. Confirm the exact error signature matches `jq: parse error: Invalid numeric literal at line X, column Y — kv bulk get output differs from kv key get for same records`.
2. Check the Cloudflare account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/cloudflare/workers-sdk/issues/14046

Evidence note: GitHub cloudflare/workers-sdk#14046 — wrangler 4.92.0 / vitest-pool-workers 0.16.6. Bulk get produces different/corrupt output than single key get. Production impact: batch data reads return invalid JSON. Active issue updated today.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `jq: parse error: Invalid numeric literal at line X, column Y — kv bulk get output differs from kv key get for same records` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `jq: parse error: Invalid numeric literal at line X, column Y — kv bulk get output differs from kv key get for same records`.
