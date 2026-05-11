---
title: "OpenRouter AI_APICallError: User not found despite valid API key"
description: "Fix OpenRouter AI_APICallError 'User not found' when API key works for direct API calls Includes evidence for OpenRouter troubleshooting demand."
category: "Cloud Platforms"
technology: "OpenRouter"
error_signature: "AI_APICallError: User not found"
common_causes:
  - "Distinct error from generic 401 — OpenCode consistently gets 'User not found' error with OpenRouter, while the same API key works for direct API calls. This suggests a tool-specific integration bug. High search intent for OpenCode + OpenRouter users."
  - "GitHub issue #2245 reports OpenCode consistently failing with AI_APICallError: User not found when using OpenRouter models, despite valid API key that works for direct API calls."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenRouter AI_APICallError"
  - "OpenCode OpenRouter integration error"
  - "OpenRouter API key works directly but not through tool"
updated: "2026-05-11"
---

## What this error means

`AI_APICallError: User not found` is a OpenRouter failure pattern reported for developers trying to fix openrouter ai_apicallerror 'user not found' when api key works for direct api calls. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #2245 reports OpenCode consistently failing with AI_APICallError: User not found when using OpenRouter models, despite valid API key that works for direct API calls.

## Common causes

- Distinct error from generic 401 — OpenCode consistently gets 'User not found' error with OpenRouter, while the same API key works for direct API calls. This suggests a tool-specific integration bug. High search intent for OpenCode + OpenRouter users.
- GitHub issue #2245 reports OpenCode consistently failing with AI_APICallError: User not found when using OpenRouter models, despite valid API key that works for direct API calls.

## Quick fixes

1. Confirm the exact error signature matches `AI_APICallError: User not found`.
2. Check the OpenRouter account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anomalyco/opencode/issues/2245

Evidence note: GitHub issue #2245 reports OpenCode consistently failing with AI_APICallError: User not found when using OpenRouter models, despite valid API key that works for direct API calls.

## Related errors

- OpenRouter AI_APICallError
- OpenCode OpenRouter integration error
- OpenRouter API key works directly but not through tool

## FAQ

### What should I check first?

Start with the exact `AI_APICallError: User not found` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenRouter workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `AI_APICallError: User not found`.
