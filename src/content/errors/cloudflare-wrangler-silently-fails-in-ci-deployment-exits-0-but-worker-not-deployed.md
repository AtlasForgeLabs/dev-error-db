---
title: "Wrangler Silently Fails in CI/CD — Worker Not Deployed Despite Exit Code 0"
description: "Fix Cloudflare wrangler silently failing in CI/CD pipelines with no error output Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "wrangler silently fails in CI — deployment exits 0 but worker not deployed"
common_causes:
  - "Wrangler 4.90.1 in CI (Woodpecker, Docker) exits with code 0 but worker is never deployed — no error messages, no stack trace, completely silent failure"
  - "wrangler 4.90.1 on Ubuntu Bun Docker image silently fails deployment in CI — exits 0, no error output, worker never deployed. Critical for CI/CD reliability on paid Cloudflare Workers plans."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Wrangler deployment failed silently"
  - "Cloudflare Workers CI deployment error"
updated: "2026-05-13"
published_at: "2026-05-13T21:13:17.831Z"
updated_at: "2026-05-13T21:13:17.831Z"
---

## What this error means

`wrangler silently fails in CI — deployment exits 0 but worker not deployed` is a Cloudflare failure pattern reported for developers trying to fix cloudflare wrangler silently failing in ci/cd pipelines with no error output. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

wrangler 4.90.1 on Ubuntu Bun Docker image silently fails deployment in CI — exits 0, no error output, worker never deployed. Critical for CI/CD reliability on paid Cloudflare Workers plans.

## Common causes

- Wrangler 4.90.1 in CI (Woodpecker, Docker) exits with code 0 but worker is never deployed — no error messages, no stack trace, completely silent failure
- wrangler 4.90.1 on Ubuntu Bun Docker image silently fails deployment in CI — exits 0, no error output, worker never deployed. Critical for CI/CD reliability on paid Cloudflare Workers plans.

## Quick fixes

1. Confirm the exact error signature matches `wrangler silently fails in CI — deployment exits 0 but worker not deployed`.
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

- https://github.com/cloudflare/workers-sdk/issues/13906

Evidence note: wrangler 4.90.1 on Ubuntu Bun Docker image silently fails deployment in CI — exits 0, no error output, worker never deployed. Critical for CI/CD reliability on paid Cloudflare Workers plans.

## Related errors

- Wrangler deployment failed silently
- Cloudflare Workers CI deployment error

## FAQ

### What should I check first?

Start with the exact `wrangler silently fails in CI — deployment exits 0 but worker not deployed` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `wrangler silently fails in CI — deployment exits 0 but worker not deployed`.
