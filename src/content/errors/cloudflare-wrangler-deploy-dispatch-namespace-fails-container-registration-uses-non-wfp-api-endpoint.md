---
title: "Cloudflare Wrangler container app registration fails with non-WfP API endpoint"
description: "Fix Cloudflare Workers container deployment failure where wrangler targets wrong API endpoint for container app registration after successful image push Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "wrangler deploy --dispatch-namespace fails: container registration uses non-WfP API endpoint"
common_causes:
  - "GitHub issue #13936 on cloudflare/workers-sdk (2026-05-15): wrangler 4.89.1 deploys Worker with containers declaration, builds and pushes container image successfully, but fails on container app registration API call because it targets regular Workers Scripts endpoint instead of WfP endpoint. Category: Cloudflare (paid enterprise container feature)."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Cloudflare"
updated: "2026-05-16"
published_at: "2026-05-16T01:13:24.123Z"
updated_at: "2026-05-16T01:13:24.123Z"
---

## What this error means

`wrangler deploy --dispatch-namespace fails: container registration uses non-WfP API endpoint` is a Cloudflare failure pattern reported for developers trying to fix cloudflare workers container deployment failure where wrangler targets wrong api endpoint for container app registration after successful image push. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #13936 on cloudflare/workers-sdk (2026-05-15): wrangler 4.89.1 deploys Worker with containers declaration, builds and pushes container image successfully, but fails on container app registration API call because it targets regular Workers Scripts endpoint instead of WfP endpoint. Category: Cloudflare (paid enterprise container feature).

## Common causes

- GitHub issue #13936 on cloudflare/workers-sdk (2026-05-15): wrangler 4.89.1 deploys Worker with containers declaration, builds and pushes container image successfully, but fails on container app registration API call because it targets regular Workers Scripts endpoint instead of WfP endpoint. Category: Cloudflare (paid enterprise container feature).

## Quick fixes

1. Confirm the exact error signature matches `wrangler deploy --dispatch-namespace fails: container registration uses non-WfP API endpoint`.
2. Check the Cloudflare account, local tool state, and provider configuration involved in the failing workflow.
3. Check the build output, project root, and deployment platform configuration before redeploying.

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

- https://github.com/cloudflare/workers-sdk/issues/13936

Evidence note: GitHub issue #13936 on cloudflare/workers-sdk (2026-05-15): wrangler 4.89.1 deploys Worker with containers declaration, builds and pushes container image successfully, but fails on container app registration API call because it targets regular Workers Scripts endpoint instead of WfP endpoint. Category: Cloudflare (paid enterprise container feature).

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `wrangler deploy --dispatch-namespace fails: container registration uses non-WfP API endpoint` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `wrangler deploy --dispatch-namespace fails: container registration uses non-WfP API endpoint`.
