---
title: "Cursor v3.1.14 Models Disappear from IDE Picker — Works on Web But Not Desktop"
description: "Cursor users see all AI models vanish from IDE dropdown despite being available on cursor.com website; tool becomes unusable. Needs model restore workaround. Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "The AI model you selected isn't available. Please choose a different model from the dropdown menu."
common_causes:
  - "Multiple forum threads report Cursor v3.1.14 model picker broken — models show fine on web dashboard but disappear from IDE. Affects both Mac and Windows. Confirmed known issue; workaround is rolling back to v2.6. High commercial value because Cursor Pro subscription users lose paid tool functionality. Category: Cursor (exact match)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cursor"
updated: "2026-06-02"
published_at: "2026-06-02T06:44:29.120Z"
updated_at: "2026-06-02T06:44:29.120Z"
---

## What this error means

`The AI model you selected isn't available. Please choose a different model from the dropdown menu.` is a Cursor failure pattern reported for developers trying to cursor users see all ai models vanish from ide dropdown despite being available on cursor.com website; tool becomes unusable. needs model restore workaround.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple forum threads report Cursor v3.1.14 model picker broken — models show fine on web dashboard but disappear from IDE. Affects both Mac and Windows. Confirmed known issue; workaround is rolling back to v2.6. High commercial value because Cursor Pro subscription users lose paid tool functionality. Category: Cursor (exact match).

## Common causes

- Multiple forum threads report Cursor v3.1.14 model picker broken — models show fine on web dashboard but disappear from IDE. Affects both Mac and Windows. Confirmed known issue; workaround is rolling back to v2.6. High commercial value because Cursor Pro subscription users lose paid tool functionality. Category: Cursor (exact match).

## Quick fixes

1. Confirm the exact error signature matches `The AI model you selected isn't available. Please choose a different model from the dropdown menu.`.
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
- https://forum.cursor.com/t/the-ai-model-you-selected-isnt-available/157321

Evidence note: Multiple forum threads report Cursor v3.1.14 model picker broken — models show fine on web dashboard but disappear from IDE. Affects both Mac and Windows. Confirmed known issue; workaround is rolling back to v2.6. High commercial value because Cursor Pro subscription users lose paid tool functionality. Category: Cursor (exact match).

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `The AI model you selected isn't available. Please choose a different model from the dropdown menu.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `The AI model you selected isn't available. Please choose a different model from the dropdown menu.`.
