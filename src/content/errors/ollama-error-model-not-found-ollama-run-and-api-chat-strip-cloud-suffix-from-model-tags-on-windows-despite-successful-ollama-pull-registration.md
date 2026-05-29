---
title: "Ollama Cloud Model Tag -cloud Stripped on Windows, Causing Model Not Found Errors"
description: "Fix Ollama Windows bug where cloud model tags ending in -cloud (e.g., :397b-cloud) are stripped during run and API calls, preventing Ollama Pro cloud users from serving models Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "Error: model not found — ollama run and /api/chat strip '-cloud' suffix from model tags on Windows despite successful ollama pull registration"
common_causes:
  - "Issue #16314 on ollama/ollama. Regression on Windows platform specifically. ollama pull succeeds and registers tag correctly, but ollama run and API calls (/api/chat) incorrectly strip -cloud suffix → model not found. Affected by Ollama Pro subscription payments. Verified reproduction steps provided."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "Ollama"
updated: "2026-05-29"
published_at: "2026-05-29T17:43:26.857Z"
updated_at: "2026-05-29T17:43:26.857Z"
---

## What this error means

`Error: model not found — ollama run and /api/chat strip '-cloud' suffix from model tags on Windows despite successful ollama pull registration` is a Ollama failure pattern reported for developers trying to fix ollama windows bug where cloud model tags ending in -cloud (e.g., :397b-cloud) are stripped during run and api calls, preventing ollama pro cloud users from serving models. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #16314 on ollama/ollama. Regression on Windows platform specifically. ollama pull succeeds and registers tag correctly, but ollama run and API calls (/api/chat) incorrectly strip -cloud suffix → model not found. Affected by Ollama Pro subscription payments. Verified reproduction steps provided.

## Common causes

- Issue #16314 on ollama/ollama. Regression on Windows platform specifically. ollama pull succeeds and registers tag correctly, but ollama run and API calls (/api/chat) incorrectly strip -cloud suffix → model not found. Affected by Ollama Pro subscription payments. Verified reproduction steps provided.

## Quick fixes

1. Confirm the exact error signature matches `Error: model not found — ollama run and /api/chat strip '-cloud' suffix from model tags on Windows despite successful ollama pull registration`.
2. Check the Ollama account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the model name, local service connectivity, and network access before retrying the model pull.

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

- https://github.com/ollama/ollama/issues/16314

Evidence note: Issue #16314 on ollama/ollama. Regression on Windows platform specifically. ollama pull succeeds and registers tag correctly, but ollama run and API calls (/api/chat) incorrectly strip -cloud suffix → model not found. Affected by Ollama Pro subscription payments. Verified reproduction steps provided.

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `Error: model not found — ollama run and /api/chat strip '-cloud' suffix from model tags on Windows despite successful ollama pull registration` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: model not found — ollama run and /api/chat strip '-cloud' suffix from model tags on Windows despite successful ollama pull registration`.
