---
title: "Cursor Gemini 3.x BYOK API Key Stopped Working After v3.1 Update: Backend Slug Resolution Bug"
description: "Fix Cursor IDE where Gemini API keys (BYOK) stopped working after upgrading to Cursor v3.1 — backend slug resolution bug for Gemini 3.x models affecting all BYOK users Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "PROVIDER_ERROR: Provider Error — We're having trouble finding the resource you requested. Gemini 3.x models stop working for BYOK users after Cursor v3.1 update"
common_causes:
  - "Source: Cursor Community Forum (April 2026). Confirmed server-side bug: model name resolved incorrectly on Cursor backend when request goes through BYOK for Gemini 3.x. Cursor team acknowledged and tracking. Workaround: downgrade to v3.0 or use Gemini 2.5 Flash. Blocks paying Cursor Pro users who relied on Gemini models via their own API keys."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cursor"
updated: "2026-06-01"
published_at: "2026-06-01T15:44:27.260Z"
updated_at: "2026-06-01T15:44:27.260Z"
---

## What this error means

`PROVIDER_ERROR: Provider Error — We're having trouble finding the resource you requested. Gemini 3.x models stop working for BYOK users after Cursor v3.1 update` is a Cursor failure pattern reported for developers trying to fix cursor ide where gemini api keys (byok) stopped working after upgrading to cursor v3.1 — backend slug resolution bug for gemini 3.x models affecting all byok users. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: Cursor Community Forum (April 2026). Confirmed server-side bug: model name resolved incorrectly on Cursor backend when request goes through BYOK for Gemini 3.x. Cursor team acknowledged and tracking. Workaround: downgrade to v3.0 or use Gemini 2.5 Flash. Blocks paying Cursor Pro users who relied on Gemini models via their own API keys.

## Common causes

- Source: Cursor Community Forum (April 2026). Confirmed server-side bug: model name resolved incorrectly on Cursor backend when request goes through BYOK for Gemini 3.x. Cursor team acknowledged and tracking. Workaround: downgrade to v3.0 or use Gemini 2.5 Flash. Blocks paying Cursor Pro users who relied on Gemini models via their own API keys.

## Quick fixes

1. Confirm the exact error signature matches `PROVIDER_ERROR: Provider Error — We're having trouble finding the resource you requested. Gemini 3.x models stop working for BYOK users after Cursor v3.1 update`.
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

- https://forum.cursor.com/t/gemini-api-key-not-working-in-cursor-getting-provider-error/157546

Evidence note: Source: Cursor Community Forum (April 2026). Confirmed server-side bug: model name resolved incorrectly on Cursor backend when request goes through BYOK for Gemini 3.x. Cursor team acknowledged and tracking. Workaround: downgrade to v3.0 or use Gemini 2.5 Flash. Blocks paying Cursor Pro users who relied on Gemini models via their own API keys.

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `PROVIDER_ERROR: Provider Error — We're having trouble finding the resource you requested. Gemini 3.x models stop working for BYOK users after Cursor v3.1 update` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `PROVIDER_ERROR: Provider Error — We're having trouble finding the resource you requested. Gemini 3.x models stop working for BYOK users after Cursor v3.1 update`.
