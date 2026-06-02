---
title: "Cursor 'Unauthorized User API Key' — Applying OpenAI Key Blocks All Other Models (Claude, Gemini)"
description: "Fix Cursor bug where enabling a custom OpenAI API key incorrectly applies to Claude/Gemini models, blocking subscription models with Unauthorized errors Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "\"ERROR_BAD_USER_API_KEY\" — \"Unauthorized User API key\" applied to all models after enabling OpenAI API key"
common_causes:
  - "Confirmed bug in Cursor affecting Pro users. When OpenAI API key is enabled in Settings > Models, it gets wrongly applied to all model providers (Claude, Gemini), causing cross-model auth failures. Workaround exists (disable OpenAI key temporarily) but root cause needs official fix. Direct Forum URL evidence available, strong pain signal with multiple related threads. High commercial value as Cursor is a paid subscription tool."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Cursor"
updated: "2026-06-02"
published_at: "2026-06-02T17:44:30.392Z"
updated_at: "2026-06-02T17:44:30.392Z"
---

## What this error means

`"ERROR_BAD_USER_API_KEY" — "Unauthorized User API key" applied to all models after enabling OpenAI API key` is a Cursor failure pattern reported for developers trying to fix cursor bug where enabling a custom openai api key incorrectly applies to claude/gemini models, blocking subscription models with unauthorized errors. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Confirmed bug in Cursor affecting Pro users. When OpenAI API key is enabled in Settings > Models, it gets wrongly applied to all model providers (Claude, Gemini), causing cross-model auth failures. Workaround exists (disable OpenAI key temporarily) but root cause needs official fix. Direct Forum URL evidence available, strong pain signal with multiple related threads. High commercial value as Cursor is a paid subscription tool.

## Common causes

- Confirmed bug in Cursor affecting Pro users. When OpenAI API key is enabled in Settings > Models, it gets wrongly applied to all model providers (Claude, Gemini), causing cross-model auth failures. Workaround exists (disable OpenAI key temporarily) but root cause needs official fix. Direct Forum URL evidence available, strong pain signal with multiple related threads. High commercial value as Cursor is a paid subscription tool.

## Quick fixes

1. Confirm the exact error signature matches `"ERROR_BAD_USER_API_KEY" — "Unauthorized User API key" applied to all models after enabling OpenAI API key`.
2. Check the Cursor account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://forum.cursor.com/t/cursor-update-brakes-ai-models-with-api-keys/140751

Evidence note: Confirmed bug in Cursor affecting Pro users. When OpenAI API key is enabled in Settings > Models, it gets wrongly applied to all model providers (Claude, Gemini), causing cross-model auth failures. Workaround exists (disable OpenAI key temporarily) but root cause needs official fix. Direct Forum URL evidence available, strong pain signal with multiple related threads. High commercial value as Cursor is a paid subscription tool.

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `"ERROR_BAD_USER_API_KEY" — "Unauthorized User API key" applied to all models after enabling OpenAI API key` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"ERROR_BAD_USER_API_KEY" — "Unauthorized User API key" applied to all models after enabling OpenAI API key`.
