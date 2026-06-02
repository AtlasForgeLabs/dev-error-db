---
title: "Cursor v3.1.x No Models Available in IDE — Only Shows in Web UI"
description: "Cursor Pro users cannot see any models in the IDE after upgrading to v3.1.x — even after clearing app data and downgrading versions Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "\"No models available.\" in Cursor IDE Models tab despite having Pro plan; shows up in web but not in editor Agent window"
common_causes:
  - "Forum.cursor.com thread #157692 reports known bug in v3.1.14 where model picker is broken. Users report rolling back to v2.0 temporarily fixes it. Another thread #157780 confirms reproducible across versions 2.6, 3.0, and 3.1 on Windows. This affects paying Pro users directly. Category: Cursor per SKILL.md mapping."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cursor"
updated: "2026-06-02"
published_at: "2026-06-02T03:44:28.659Z"
updated_at: "2026-06-02T03:44:28.659Z"
---

## What this error means

`"No models available." in Cursor IDE Models tab despite having Pro plan; shows up in web but not in editor Agent window` is a Cursor failure pattern reported for developers trying to cursor pro users cannot see any models in the ide after upgrading to v3.1.x — even after clearing app data and downgrading versions. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Forum.cursor.com thread #157692 reports known bug in v3.1.14 where model picker is broken. Users report rolling back to v2.0 temporarily fixes it. Another thread #157780 confirms reproducible across versions 2.6, 3.0, and 3.1 on Windows. This affects paying Pro users directly. Category: Cursor per SKILL.md mapping.

## Common causes

- Forum.cursor.com thread #157692 reports known bug in v3.1.14 where model picker is broken. Users report rolling back to v2.0 temporarily fixes it. Another thread #157780 confirms reproducible across versions 2.6, 3.0, and 3.1 on Windows. This affects paying Pro users directly. Category: Cursor per SKILL.md mapping.

## Quick fixes

1. Confirm the exact error signature matches `"No models available." in Cursor IDE Models tab despite having Pro plan; shows up in web but not in editor Agent window`.
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

- https://forum.cursor.com/t/no-way-to-select-a-model-in-new-agent-in-3-1-14/157692
- https://forum.cursor.com/t/cursor-v3-1-no-models-available-in-ide-but-showing-up-in-web/157780
- https://forum.cursor.com/t/the-ai-model-you-selected-isnt-available/157321

Evidence note: Forum.cursor.com thread #157692 reports known bug in v3.1.14 where model picker is broken. Users report rolling back to v2.0 temporarily fixes it. Another thread #157780 confirms reproducible across versions 2.6, 3.0, and 3.1 on Windows. This affects paying Pro users directly. Category: Cursor per SKILL.md mapping.

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `"No models available." in Cursor IDE Models tab despite having Pro plan; shows up in web but not in editor Agent window` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"No models available." in Cursor IDE Models tab despite having Pro plan; shows up in web but not in editor Agent window`.
