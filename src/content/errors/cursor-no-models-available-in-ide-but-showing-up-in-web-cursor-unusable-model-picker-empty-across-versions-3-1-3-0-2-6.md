---
title: "Cursor IDE Model Picker Completely Empty — No Models Available Despite Active Subscription"
description: "Fix Cursor IDE suddenly showing zero available models while web version still displays them correctly Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "No models available in IDE but showing up in web — Cursor unusable, model picker empty across versions 3.1/3.0/2.6"
common_causes:
  - "Multiple reports from forum.cursor.com (April 15, 2026). Affects PRO subscribers. Confirmed on Windows and Mac. Known bug in v3.1.14 with workaround via rollback. Clear enterprise paid-user impact. Category mapping: direct Cursor-specific subscription/tool error."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cursor"
updated: "2026-06-01"
published_at: "2026-06-01T17:44:27.461Z"
updated_at: "2026-06-01T17:44:27.461Z"
---

## What this error means

`No models available in IDE but showing up in web — Cursor unusable, model picker empty across versions 3.1/3.0/2.6` is a Cursor failure pattern reported for developers trying to fix cursor ide suddenly showing zero available models while web version still displays them correctly. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple reports from forum.cursor.com (April 15, 2026). Affects PRO subscribers. Confirmed on Windows and Mac. Known bug in v3.1.14 with workaround via rollback. Clear enterprise paid-user impact. Category mapping: direct Cursor-specific subscription/tool error.

## Common causes

- Multiple reports from forum.cursor.com (April 15, 2026). Affects PRO subscribers. Confirmed on Windows and Mac. Known bug in v3.1.14 with workaround via rollback. Clear enterprise paid-user impact. Category mapping: direct Cursor-specific subscription/tool error.

## Quick fixes

1. Confirm the exact error signature matches `No models available in IDE but showing up in web — Cursor unusable, model picker empty across versions 3.1/3.0/2.6`.
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

- https://forum.cursor.com/t/cursor-v3-1-no-models-available-in-ide-but-showing-up-in-web/157780
- https://forum.cursor.com/t/no-models-available-at-all/157722

Evidence note: Multiple reports from forum.cursor.com (April 15, 2026). Affects PRO subscribers. Confirmed on Windows and Mac. Known bug in v3.1.14 with workaround via rollback. Clear enterprise paid-user impact. Category mapping: direct Cursor-specific subscription/tool error.

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `No models available in IDE but showing up in web — Cursor unusable, model picker empty across versions 3.1/3.0/2.6` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `No models available in IDE but showing up in web — Cursor unusable, model picker empty across versions 3.1/3.0/2.6`.
