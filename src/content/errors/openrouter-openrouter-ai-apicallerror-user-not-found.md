---
title: "OpenRouter AI_APICallError User Not Found — Fix API Call Failures"
description: "Fix OpenRouter returning AI_APICallError 'User not found' despite valid API key configuration Includes evidence for OpenRouter troubleshooting demand."
category: "OpenAI API"
technology: "OpenRouter"
error_signature: "OpenRouter AI_APICallError: User not found"
common_causes:
  - "Developers using OpenCode and similar AI development tools encounter this specific error when OpenRouter fails to authenticate valid API keys. The error 'User not found' is confusing because the user account exists and the API key is valid. This suggests a routing or endpoint compatibility issue on OpenRouter's side."
  - "GitHub issue reports AI_APICallError with OpenRouter returning 'User not found' despite a valid API key. The issue also references related Error #1002 about endpoints not supporting tool use, indicating multiple failure modes in OpenRouter's API handling."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenRouter 401 Unauthorized"
  - "OpenRouter 404 model not available"
  - "OpenRouter Error 1002 tool use not supported"
updated: "2026-05-13"
published_at: "2026-05-13T05:13:15.783Z"
updated_at: "2026-05-13T05:13:15.783Z"
---

## What this error means

`OpenRouter AI_APICallError: User not found` is a OpenRouter failure pattern reported for developers trying to fix openrouter returning ai_apicallerror 'user not found' despite valid api key configuration. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue reports AI_APICallError with OpenRouter returning 'User not found' despite a valid API key. The issue also references related Error #1002 about endpoints not supporting tool use, indicating multiple failure modes in OpenRouter's API handling.

## Common causes

- Developers using OpenCode and similar AI development tools encounter this specific error when OpenRouter fails to authenticate valid API keys. The error 'User not found' is confusing because the user account exists and the API key is valid. This suggests a routing or endpoint compatibility issue on OpenRouter's side.
- GitHub issue reports AI_APICallError with OpenRouter returning 'User not found' despite a valid API key. The issue also references related Error #1002 about endpoints not supporting tool use, indicating multiple failure modes in OpenRouter's API handling.

## Quick fixes

1. Confirm the exact error signature matches `OpenRouter AI_APICallError: User not found`.
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

Evidence note: GitHub issue reports AI_APICallError with OpenRouter returning 'User not found' despite a valid API key. The issue also references related Error #1002 about endpoints not supporting tool use, indicating multiple failure modes in OpenRouter's API handling.

## Related errors

- OpenRouter 401 Unauthorized
- OpenRouter 404 model not available
- OpenRouter Error 1002 tool use not supported

## FAQ

### What should I check first?

Start with the exact `OpenRouter AI_APICallError: User not found` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenRouter workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OpenRouter AI_APICallError: User not found`.
