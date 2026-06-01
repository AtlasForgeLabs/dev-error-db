---
title: "Cursor Subscription Sync Bug: Pro User Downgraded to FREE After Update"
description: "Cursor shows free plan after upgrading to Pro; custom API key feature disabled after app update; user wants subscription restored Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "The model GLM-4.6 does not work with your current plan or API key; shows FREE instead of Pro after update"
common_causes:
  - "Cursor forum report Feb 2026. After updating to v2.4.0-pre.24.patch.0, Pro user suddenly shown as FREE and custom API key unavailable. Root cause appears to be subscription status sync issue. Category mapping: Cursor-specific subscription/auth bug to Cursor."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cursor"
updated: "2026-06-01"
published_at: "2026-06-01T19:44:27.672Z"
updated_at: "2026-06-01T19:44:27.672Z"
---

## What this error means

`The model GLM-4.6 does not work with your current plan or API key; shows FREE instead of Pro after update` is a Cursor failure pattern reported for developers trying to cursor shows free plan after upgrading to pro; custom api key feature disabled after app update; user wants subscription restored. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Cursor forum report Feb 2026. After updating to v2.4.0-pre.24.patch.0, Pro user suddenly shown as FREE and custom API key unavailable. Root cause appears to be subscription status sync issue. Category mapping: Cursor-specific subscription/auth bug to Cursor.

## Common causes

- Cursor forum report Feb 2026. After updating to v2.4.0-pre.24.patch.0, Pro user suddenly shown as FREE and custom API key unavailable. Root cause appears to be subscription status sync issue. Category mapping: Cursor-specific subscription/auth bug to Cursor.

## Quick fixes

1. Confirm the exact error signature matches `The model GLM-4.6 does not work with your current plan or API key; shows FREE instead of Pro after update`.
2. Check the Cursor account, local tool state, and provider configuration involved in the failing workflow.
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

- https://forum.cursor.com/t/does-not-work-with-your-current-plan-or-api-key/148745
- https://forum.cursor.com/t/persistent-connection-error/149848

Evidence note: Cursor forum report Feb 2026. After updating to v2.4.0-pre.24.patch.0, Pro user suddenly shown as FREE and custom API key unavailable. Root cause appears to be subscription status sync issue. Category mapping: Cursor-specific subscription/auth bug to Cursor.

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `The model GLM-4.6 does not work with your current plan or API key; shows FREE instead of Pro after update` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `The model GLM-4.6 does not work with your current plan or API key; shows FREE instead of Pro after update`.
