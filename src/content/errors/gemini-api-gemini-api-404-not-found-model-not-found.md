---
title: "Gemini API 404 NOT_FOUND Error — Fix Model Not Found"
description: "Fix Gemini API returning 404 NOT_FOUND when calling model endpoints Includes evidence for Gemini API troubleshooting demand."
category: "Cloud Platforms"
technology: "Gemini API"
error_signature: "Gemini API 404 NOT_FOUND — model not found"
common_causes:
  - "Developers calling the Gemini API (particularly for image generation models like gemini-2.0-flash-exp-image-generation) receive persistent 404 NOT_FOUND errors across multiple projects and API keys. The error occurs in both direct API calls and through the Gemini CLI, suggesting it may be related to model availability, regional restrictions, or API version deprecation."
  - "Multiple GitHub issues report persistent 404 NOT_FOUND errors when calling Gemini API endpoints. The error occurs across multiple projects and API keys, affecting both direct API calls and the Gemini CLI. One issue specifically mentions the gemini-2.0-flash-exp-image-generation model returning 404."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Gemini API authentication error"
  - "Gemini API quota exceeded"
  - "Gemini API rate limit error"
updated: "2026-05-13"
published_at: "2026-05-13T05:13:15.783Z"
updated_at: "2026-05-13T05:13:15.783Z"
---

## What this error means

`Gemini API 404 NOT_FOUND — model not found` is a Gemini API failure pattern reported for developers trying to fix gemini api returning 404 not_found when calling model endpoints. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple GitHub issues report persistent 404 NOT_FOUND errors when calling Gemini API endpoints. The error occurs across multiple projects and API keys, affecting both direct API calls and the Gemini CLI. One issue specifically mentions the gemini-2.0-flash-exp-image-generation model returning 404.

## Common causes

- Developers calling the Gemini API (particularly for image generation models like gemini-2.0-flash-exp-image-generation) receive persistent 404 NOT_FOUND errors across multiple projects and API keys. The error occurs in both direct API calls and through the Gemini CLI, suggesting it may be related to model availability, regional restrictions, or API version deprecation.
- Multiple GitHub issues report persistent 404 NOT_FOUND errors when calling Gemini API endpoints. The error occurs across multiple projects and API keys, affecting both direct API calls and the Gemini CLI. One issue specifically mentions the gemini-2.0-flash-exp-image-generation model returning 404.

## Quick fixes

1. Confirm the exact error signature matches `Gemini API 404 NOT_FOUND — model not found`.
2. Check the Gemini API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/google-gemini/deprecated-generative-ai-js/issues/481
- https://github.com/google-gemini/gemini-api-quickstart/issues/20

Evidence note: Multiple GitHub issues report persistent 404 NOT_FOUND errors when calling Gemini API endpoints. The error occurs across multiple projects and API keys, affecting both direct API calls and the Gemini CLI. One issue specifically mentions the gemini-2.0-flash-exp-image-generation model returning 404.

## Related errors

- Gemini API authentication error
- Gemini API quota exceeded
- Gemini API rate limit error

## FAQ

### What should I check first?

Start with the exact `Gemini API 404 NOT_FOUND — model not found` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Gemini API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Gemini API 404 NOT_FOUND — model not found`.
