---
title: "Cloudflare Pages Wrangler Deploy Function Publish Failure and 504 Gateway Timeout"
description: "Cloudflare Pages deployment fails at function publish step or throws 504 during upload; users seeking wrangler deploy workaround Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Failed to publish your Function. Got error: An unknown error has occurred. Or 504 Gateway Time-out on POST deployments endpoint"
common_causes:
  - "Cloudflare workers-sdk issue 13259 April 2026. Wrangler 4.80.0 pages deploy fails at final function publish step with unknown error. Issue 9460: wrangler 4.18.0 gets intermittent 504 Gateway Timeout during file upload to Cloudflare Pages API. Affects production deployments with static sites."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Cloudflare"
updated: "2026-06-01"
published_at: "2026-06-01T19:44:27.672Z"
updated_at: "2026-06-01T19:44:27.672Z"
---

## What this error means

`Failed to publish your Function. Got error: An unknown error has occurred. Or 504 Gateway Time-out on POST deployments endpoint` is a Cloudflare failure pattern reported for developers trying to cloudflare pages deployment fails at function publish step or throws 504 during upload; users seeking wrangler deploy workaround. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Cloudflare workers-sdk issue 13259 April 2026. Wrangler 4.80.0 pages deploy fails at final function publish step with unknown error. Issue 9460: wrangler 4.18.0 gets intermittent 504 Gateway Timeout during file upload to Cloudflare Pages API. Affects production deployments with static sites.

## Common causes

- Cloudflare workers-sdk issue 13259 April 2026. Wrangler 4.80.0 pages deploy fails at final function publish step with unknown error. Issue 9460: wrangler 4.18.0 gets intermittent 504 Gateway Timeout during file upload to Cloudflare Pages API. Affects production deployments with static sites.

## Quick fixes

1. Confirm the exact error signature matches `Failed to publish your Function. Got error: An unknown error has occurred. Or 504 Gateway Time-out on POST deployments endpoint`.
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

- https://github.com/cloudflare/workers-sdk/issues/13259
- https://github.com/cloudflare/workers-sdk/issues/9460

Evidence note: Cloudflare workers-sdk issue 13259 April 2026. Wrangler 4.80.0 pages deploy fails at final function publish step with unknown error. Issue 9460: wrangler 4.18.0 gets intermittent 504 Gateway Timeout during file upload to Cloudflare Pages API. Affects production deployments with static sites.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Failed to publish your Function. Got error: An unknown error has occurred. Or 504 Gateway Time-out on POST deployments endpoint` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Failed to publish your Function. Got error: An unknown error has occurred. Or 504 Gateway Time-out on POST deployments endpoint`.
