---
title: "Cursor v3.x Model Picker Empty — \"Timeout waiting for EverythingProvider\" After Update"
description: "Developer updates Cursor IDE to v3.0 or v3.1 and suddenly no models show up in the agent window, while web version still works. Needs to fix EverythingProvider timeout and restore model access. Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "Timeout waiting for EverythingProvider — no models appear in Cursor IDE after updating to v3.0/v3.1"
common_causes:
  - "Forum.cursor.com reports (April 2026) confirm multiple users experiencing empty model picker in v3.1, v3.0 and v2.6. Network diagnostics show 'Timeout waiting for EverythingProvider'. Related: OpenAI API key error loop requiring restart (Jan 2026), and connection stalled after v2.4.21 update. This is a recurring client-side initialization bug pattern affecting Cursor Pro users. Category mapping: Cursor IDE specific → 'Cursor'. Partially overlaps with existing 'Cursor model not available' entry but the EverythingProvider timeout is a distinct root cause with different fix path (full quit+relaunch, --disable-extensions flag, antivirus interference check)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cursor"
updated: "2026-06-02"
published_at: "2026-06-02T10:44:29.559Z"
updated_at: "2026-06-02T10:44:29.559Z"
---

## What this error means

`Timeout waiting for EverythingProvider — no models appear in Cursor IDE after updating to v3.0/v3.1` is a Cursor failure pattern reported for developers trying to developer updates cursor ide to v3.0 or v3.1 and suddenly no models show up in the agent window, while web version still works. needs to fix everythingprovider timeout and restore model access.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Forum.cursor.com reports (April 2026) confirm multiple users experiencing empty model picker in v3.1, v3.0 and v2.6. Network diagnostics show 'Timeout waiting for EverythingProvider'. Related: OpenAI API key error loop requiring restart (Jan 2026), and connection stalled after v2.4.21 update. This is a recurring client-side initialization bug pattern affecting Cursor Pro users. Category mapping: Cursor IDE specific → 'Cursor'. Partially overlaps with existing 'Cursor model not available' entry but the EverythingProvider timeout is a distinct root cause with different fix path (full quit+relaunch, --disable-extensions flag, antivirus interference check).

## Common causes

- Forum.cursor.com reports (April 2026) confirm multiple users experiencing empty model picker in v3.1, v3.0 and v2.6. Network diagnostics show 'Timeout waiting for EverythingProvider'. Related: OpenAI API key error loop requiring restart (Jan 2026), and connection stalled after v2.4.21 update. This is a recurring client-side initialization bug pattern affecting Cursor Pro users. Category mapping: Cursor IDE specific → 'Cursor'. Partially overlaps with existing 'Cursor model not available' entry but the EverythingProvider timeout is a distinct root cause with different fix path (full quit+relaunch, --disable-extensions flag, antivirus interference check).

## Quick fixes

1. Confirm the exact error signature matches `Timeout waiting for EverythingProvider — no models appear in Cursor IDE after updating to v3.0/v3.1`.
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
- https://forum.cursor.com/t/limited-model-list-for-pro-connection-issue/149895
- https://forum.cursor.com/t/openai-api-key-error-until-restart/147956

Evidence note: Forum.cursor.com reports (April 2026) confirm multiple users experiencing empty model picker in v3.1, v3.0 and v2.6. Network diagnostics show 'Timeout waiting for EverythingProvider'. Related: OpenAI API key error loop requiring restart (Jan 2026), and connection stalled after v2.4.21 update. This is a recurring client-side initialization bug pattern affecting Cursor Pro users. Category mapping: Cursor IDE specific → 'Cursor'. Partially overlaps with existing 'Cursor model not available' entry but the EverythingProvider timeout is a distinct root cause with different fix path (full quit+relaunch, --disable-extensions flag, antivirus interference check).

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `Timeout waiting for EverythingProvider — no models appear in Cursor IDE after updating to v3.0/v3.1` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Timeout waiting for EverythingProvider — no models appear in Cursor IDE after updating to v3.0/v3.1`.
