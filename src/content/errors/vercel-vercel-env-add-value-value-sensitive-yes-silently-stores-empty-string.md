---
title: "Vercel CLI 'env add' Silently Stores Empty String with --sensitive Flag"
description: "Fix Vercel CLI env add storing empty values instead of provided --value Includes evidence for Vercel troubleshooting demand."
category: "Deployment"
technology: "Vercel"
error_signature: "vercel env add --value <value> --sensitive --yes silently stores empty string"
common_causes:
  - "The vercel env add command reports success but silently stores an empty string as the value when using --sensitive. Deployments fail or use wrong secrets because environment variables appear set but contain no value."
  - "CLI v50.5.0+ with --sensitive flag silently discards the --value. CLI 53.x affects all --value writes regardless of --sensitive. Success message shown but value stored as empty string."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Vercel environment variable not working"
  - "Vercel deployment missing env vars"
updated: "2026-05-15"
published_at: "2026-05-15T05:13:21.766Z"
updated_at: "2026-05-15T05:13:21.766Z"
---

## What this error means

`vercel env add --value <value> --sensitive --yes silently stores empty string` is a Vercel failure pattern reported for developers trying to fix vercel cli env add storing empty values instead of provided --value. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

CLI v50.5.0+ with --sensitive flag silently discards the --value. CLI 53.x affects all --value writes regardless of --sensitive. Success message shown but value stored as empty string.

## Common causes

- The vercel env add command reports success but silently stores an empty string as the value when using --sensitive. Deployments fail or use wrong secrets because environment variables appear set but contain no value.
- CLI v50.5.0+ with --sensitive flag silently discards the --value. CLI 53.x affects all --value writes regardless of --sensitive. Success message shown but value stored as empty string.

## Quick fixes

1. Confirm the exact error signature matches `vercel env add --value <value> --sensitive --yes silently stores empty string`.
2. Check the Vercel account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/vercel/vercel/issues/16160
- https://github.com/vercel/vercel/issues/16232

Evidence note: CLI v50.5.0+ with --sensitive flag silently discards the --value. CLI 53.x affects all --value writes regardless of --sensitive. Success message shown but value stored as empty string.

## Related errors

- Vercel environment variable not working
- Vercel deployment missing env vars

## FAQ

### What should I check first?

Start with the exact `vercel env add --value <value> --sensitive --yes silently stores empty string` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `vercel env add --value <value> --sensitive --yes silently stores empty string`.
