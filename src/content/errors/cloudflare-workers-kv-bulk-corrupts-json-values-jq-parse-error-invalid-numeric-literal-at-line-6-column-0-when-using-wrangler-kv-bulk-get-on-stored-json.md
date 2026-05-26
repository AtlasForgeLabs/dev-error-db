---
title: "Cloudflare Workers KV bulk get corrupts JSON values returning parse errors"
description: "Fix corrupted JSON output from Cloudflare Workers KV bulk get command causing parse errors in downstream processing Includes evidence for Cloudflare Workers troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare Workers"
error_signature: "kv bulk corrupts json values — jq: parse error Invalid numeric literal at line 6 column 0 when using wrangler kv bulk get on stored JSON"
common_causes:
  - "GitHub issue #14046 on cloudflare/workers-sdk, created 2026-05-25. User confirms kv key get works correctly but kv bulk get returns corrupted output. Environment: Fedora Linux, Node 24, npm 11, wrangler 4.92.0. Affects production data retrieval workflows using Wrangler CLI. Not in covered-errors.md."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-26"
published_at: "2026-05-26T08:43:16.345Z"
updated_at: "2026-05-26T08:43:16.345Z"
---

## What this error means

`kv bulk corrupts json values — jq: parse error Invalid numeric literal at line 6 column 0 when using wrangler kv bulk get on stored JSON` is a Cloudflare Workers failure pattern reported for developers trying to fix corrupted json output from cloudflare workers kv bulk get command causing parse errors in downstream processing. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #14046 on cloudflare/workers-sdk, created 2026-05-25. User confirms kv key get works correctly but kv bulk get returns corrupted output. Environment: Fedora Linux, Node 24, npm 11, wrangler 4.92.0. Affects production data retrieval workflows using Wrangler CLI. Not in covered-errors.md.

## Common causes

- GitHub issue #14046 on cloudflare/workers-sdk, created 2026-05-25. User confirms kv key get works correctly but kv bulk get returns corrupted output. Environment: Fedora Linux, Node 24, npm 11, wrangler 4.92.0. Affects production data retrieval workflows using Wrangler CLI. Not in covered-errors.md.

## Quick fixes

1. Confirm the exact error signature matches `kv bulk corrupts json values — jq: parse error Invalid numeric literal at line 6 column 0 when using wrangler kv bulk get on stored JSON`.
2. Check the Cloudflare Workers account, local tool state, and provider configuration involved in the failing workflow.
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

Evidence note: GitHub issue #14046 on cloudflare/workers-sdk, created 2026-05-25. User confirms kv key get works correctly but kv bulk get returns corrupted output. Environment: Fedora Linux, Node 24, npm 11, wrangler 4.92.0. Affects production data retrieval workflows using Wrangler CLI. Not in covered-errors.md.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `kv bulk corrupts json values — jq: parse error Invalid numeric literal at line 6 column 0 when using wrangler kv bulk get on stored JSON` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare Workers workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `kv bulk corrupts json values — jq: parse error Invalid numeric literal at line 6 column 0 when using wrangler kv bulk get on stored JSON`.
