---
title: "GitHub Actions Failed to Queue Workflow Run During codeload.github.com Download Failure"
description: "Fix GitHub Actions workflow queueing and action archive downloads failing due to codeload.github.com instability affecting CI/CD pipelines Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Failed to queue workflow run. Please try again.; gh workflow run workaround queues but fails during job setup while downloading action archive from codeload.github.com with Failed to download archive after N attempts."
common_causes:
  - "GitHub community discussion #196970 (May 26 2026) shows active incident where workflow dispatch from UI fails with 'Failed to queue workflow run' and gh CLI workaround triggers download failure at codeload.github.com. Affects both queued and dispatched workflows. Enterprise teams affected. Distinct from known actions/cache and checkout errors — platform-level infrastructure issue."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions"
updated: "2026-06-02"
published_at: "2026-06-02T00:44:28.335Z"
updated_at: "2026-06-02T00:44:28.335Z"
---

## What this error means

`Failed to queue workflow run. Please try again.; gh workflow run workaround queues but fails during job setup while downloading action archive from codeload.github.com with Failed to download archive after N attempts.` is a GitHub Actions failure pattern reported for developers trying to fix github actions workflow queueing and action archive downloads failing due to codeload.github.com instability affecting ci/cd pipelines. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub community discussion #196970 (May 26 2026) shows active incident where workflow dispatch from UI fails with 'Failed to queue workflow run' and gh CLI workaround triggers download failure at codeload.github.com. Affects both queued and dispatched workflows. Enterprise teams affected. Distinct from known actions/cache and checkout errors — platform-level infrastructure issue.

## Common causes

- GitHub community discussion #196970 (May 26 2026) shows active incident where workflow dispatch from UI fails with 'Failed to queue workflow run' and gh CLI workaround triggers download failure at codeload.github.com. Affects both queued and dispatched workflows. Enterprise teams affected. Distinct from known actions/cache and checkout errors — platform-level infrastructure issue.

## Quick fixes

1. Confirm the exact error signature matches `Failed to queue workflow run. Please try again.; gh workflow run workaround queues but fails during job setup while downloading action archive from codeload.github.com with Failed to download archive after N attempts.`.
2. Check the GitHub Actions account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/orgs/community/discussions/196970

Evidence note: GitHub community discussion #196970 (May 26 2026) shows active incident where workflow dispatch from UI fails with 'Failed to queue workflow run' and gh CLI workaround triggers download failure at codeload.github.com. Affects both queued and dispatched workflows. Enterprise teams affected. Distinct from known actions/cache and checkout errors — platform-level infrastructure issue.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `Failed to queue workflow run. Please try again.; gh workflow run workaround queues but fails during job setup while downloading action archive from codeload.github.com with Failed to download archive after N attempts.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Failed to queue workflow run. Please try again.; gh workflow run workaround queues but fails during job setup while downloading action archive from codeload.github.com with Failed to download archive after N attempts.`.
