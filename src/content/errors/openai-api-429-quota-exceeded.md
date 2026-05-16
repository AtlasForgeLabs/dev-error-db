---
title: "ChatGPT Plus OAuth Returns 429 Quota Exceeded for Third-Party Codex Calls"
description: "Understand why third-party apps using ChatGPT Plus OAuth get rate-limited while ChatGPT itself works fine Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "429 quota exceeded"
common_causes:
  - "Real GitHub issue on openai/openai-python (#2951) documenting that ChatGPT Plus OAuth token grants access to ChatGPT but hits quota limits on third-party Codex integrations. High commercial value: paid users confused about shared quotas between ChatGPT and OpenAI API. Maps to OpenAI API category."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-16"
published_at: "2026-05-16T16:13:50.638Z"
updated_at: "2026-05-16T16:13:50.638Z"
---

## What this error means

`429 quota exceeded` is a OpenAI API failure pattern reported for developers trying to understand why third-party apps using chatgpt plus oauth get rate-limited while chatgpt itself works fine. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Real GitHub issue on openai/openai-python (#2951) documenting that ChatGPT Plus OAuth token grants access to ChatGPT but hits quota limits on third-party Codex integrations. High commercial value: paid users confused about shared quotas between ChatGPT and OpenAI API. Maps to OpenAI API category.

## Common causes

- Real GitHub issue on openai/openai-python (#2951) documenting that ChatGPT Plus OAuth token grants access to ChatGPT but hits quota limits on third-party Codex integrations. High commercial value: paid users confused about shared quotas between ChatGPT and OpenAI API. Maps to OpenAI API category.

## Quick fixes

1. Confirm the exact error signature matches `429 quota exceeded`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/openai/openai-python/issues/2951

Evidence note: Real GitHub issue on openai/openai-python (#2951) documenting that ChatGPT Plus OAuth token grants access to ChatGPT but hits quota limits on third-party Codex integrations. High commercial value: paid users confused about shared quotas between ChatGPT and OpenAI API. Maps to OpenAI API category.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `429 quota exceeded` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `429 quota exceeded`.
