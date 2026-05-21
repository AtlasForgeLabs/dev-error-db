---
title: "ChatGPT Plus OAuth returns 429 quota error for third-party Codex calls despite active subscription"
description: "Plus subscribers using third-party tools (OpenClaw/Codex connectors) authenticated via OAuth hit 429 quota errors, unable to make API calls despite having active ChatGPT Plus plan. Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "429 quota exceeded — OAuth login succeeds but third-party Codex API calls return 429 quota exceeded despite active Plus subscription"
common_causes:
  - "Source: openai/openai-python#2951 (opened Mar 10, 2026). Bug report confirms OAuth flow succeeds, request reaches openai-codex/gpt-5.4, returns 429 quota exceeded. Distinguishes from local gateway failures and non-Plus accounts. Questions whether Plus OAuth quota applies to third-party calls. High value: paid subscriber blocked, affects billing/usage routing. Category: OpenAI API — paid API, quota/billing failure."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-21"
published_at: "2026-05-21T12:39:44.543Z"
updated_at: "2026-05-21T12:39:44.543Z"
---

## What this error means

`429 quota exceeded — OAuth login succeeds but third-party Codex API calls return 429 quota exceeded despite active Plus subscription` is a OpenAI API failure pattern reported for developers trying to plus subscribers using third-party tools (openclaw/codex connectors) authenticated via oauth hit 429 quota errors, unable to make api calls despite having active chatgpt plus plan.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: openai/openai-python#2951 (opened Mar 10, 2026). Bug report confirms OAuth flow succeeds, request reaches openai-codex/gpt-5.4, returns 429 quota exceeded. Distinguishes from local gateway failures and non-Plus accounts. Questions whether Plus OAuth quota applies to third-party calls. High value: paid subscriber blocked, affects billing/usage routing. Category: OpenAI API — paid API, quota/billing failure.

## Common causes

- Source: openai/openai-python#2951 (opened Mar 10, 2026). Bug report confirms OAuth flow succeeds, request reaches openai-codex/gpt-5.4, returns 429 quota exceeded. Distinguishes from local gateway failures and non-Plus accounts. Questions whether Plus OAuth quota applies to third-party calls. High value: paid subscriber blocked, affects billing/usage routing. Category: OpenAI API — paid API, quota/billing failure.

## Quick fixes

1. Confirm the exact error signature matches `429 quota exceeded — OAuth login succeeds but third-party Codex API calls return 429 quota exceeded despite active Plus subscription`.
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

Evidence note: Source: openai/openai-python#2951 (opened Mar 10, 2026). Bug report confirms OAuth flow succeeds, request reaches openai-codex/gpt-5.4, returns 429 quota exceeded. Distinguishes from local gateway failures and non-Plus accounts. Questions whether Plus OAuth quota applies to third-party calls. High value: paid subscriber blocked, affects billing/usage routing. Category: OpenAI API — paid API, quota/billing failure.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `429 quota exceeded — OAuth login succeeds but third-party Codex API calls return 429 quota exceeded despite active Plus subscription` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `429 quota exceeded — OAuth login succeeds but third-party Codex API calls return 429 quota exceeded despite active Plus subscription`.
