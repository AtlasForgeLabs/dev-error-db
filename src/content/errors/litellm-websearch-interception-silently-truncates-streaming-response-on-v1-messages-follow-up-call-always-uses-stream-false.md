---
title: "LiteLLM Proxy — Websearch Interception Silently Truncates Streaming Response via Claude Code /v1/messages"
description: "Fix LiteLLM websearch_interception truncating Claude Code streaming responses with no error logs Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "websearch_interception silently truncates streaming response on /v1/messages — follow-up call always uses stream=False"
common_causes:
  - "Developers using LiteLLM proxy with Claude Code via `/v1/messages` find that websearch_interception causes the final LLM output to be silently truncated mid-response with no error logs. The follow-up call defaults to stream=False, breaking Claude Code's streaming workflow entirely."
  - "Official LiteLLM issue #27721 (2026-05-12) reports websearch_interception with Tavily via Claude Code using /v1/messages with stream=True causes final LLM output to be silently truncated mid-response with no error logs. Follow-up call always uses stream=False."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM streaming response truncation"
  - "LiteLLM websearch_interception tool call failures"
updated: "2026-05-12"
published_at: "2026-05-12T09:11:33.796Z"
updated_at: "2026-05-12T09:11:33.796Z"
---

## What this error means

`websearch_interception silently truncates streaming response on /v1/messages — follow-up call always uses stream=False` is a LiteLLM failure pattern reported for developers trying to fix litellm websearch_interception truncating claude code streaming responses with no error logs. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Official LiteLLM issue #27721 (2026-05-12) reports websearch_interception with Tavily via Claude Code using /v1/messages with stream=True causes final LLM output to be silently truncated mid-response with no error logs. Follow-up call always uses stream=False.

## Common causes

- Developers using LiteLLM proxy with Claude Code via `/v1/messages` find that websearch_interception causes the final LLM output to be silently truncated mid-response with no error logs. The follow-up call defaults to stream=False, breaking Claude Code's streaming workflow entirely.
- Official LiteLLM issue #27721 (2026-05-12) reports websearch_interception with Tavily via Claude Code using /v1/messages with stream=True causes final LLM output to be silently truncated mid-response with no error logs. Follow-up call always uses stream=False.

## Quick fixes

1. Confirm the exact error signature matches `websearch_interception silently truncates streaming response on /v1/messages — follow-up call always uses stream=False`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/27721

Evidence note: Official LiteLLM issue #27721 (2026-05-12) reports websearch_interception with Tavily via Claude Code using /v1/messages with stream=True causes final LLM output to be silently truncated mid-response with no error logs. Follow-up call always uses stream=False.

## Related errors

- LiteLLM streaming response truncation
- LiteLLM websearch_interception tool call failures

## FAQ

### What should I check first?

Start with the exact `websearch_interception silently truncates streaming response on /v1/messages — follow-up call always uses stream=False` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `websearch_interception silently truncates streaming response on /v1/messages — follow-up call always uses stream=False`.
