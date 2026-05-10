---
title: "Cursor model not available"
description: "Fix Cursor model not available errors caused by unavailable models, provider settings, or access limits."
category: "AI coding tools"
technology: "Cursor"
error_signature: "Model not available"
common_causes:
  - "Selected model is not enabled for the account"
  - "Provider key is invalid or missing"
  - "Model name changed or is not supported by the selected provider"
  - "Network or proxy settings block provider requests"
quick_fix: "Choose a model available to your account and verify the matching provider credentials."
updated: "2026-05-10"
---

## What this error means

`Model not available` means the AI coding tool could not use the selected provider, model, key, or account limit. In practice, check the provider field, base URL, model name, and whether the account has access to that model. This page helps you resolve unavailable model errors in Cursor and connected AI providers.

## Common causes

- Selected model is not enabled for the account
- Provider key is invalid or missing
- Model name changed or is not supported by the selected provider
- Network or proxy settings block provider requests

## Quick fixes

1. Copy the exact error signature and the command that produced it.
2. Choose a model available to your account and verify the matching provider credentials.
3. Check the Cursor configuration that matches this command.
4. Rerun the smallest failing command after each change.

## Step-by-step troubleshooting

1. Start with the exact signature: `Model not available`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Open the model or provider settings and verify the selected provider matches the API key.
3. Check base URL, model name, and account access before changing editor-wide settings.
4. Restart the editor after changing provider credentials so stale settings are not reused.
5. Make the targeted change: Choose a model available to your account and verify the matching provider credentials.
6. Rerun the smallest failing command, request, or deployment step and keep the output for comparison.

## Related errors

- Cursor OpenAI API key not working
- OpenAI API model not found
- OpenAI API rate limit error

## FAQ

### What should I check first?

Start with the exact `Model not available` message and the provider, model, base URL, and API key settings. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed Cursor step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

Local and CI environments often differ in installed tools, environment variables, permissions, and network access. Log the versions and non-secret configuration values used by the failing step.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `Model not available`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
