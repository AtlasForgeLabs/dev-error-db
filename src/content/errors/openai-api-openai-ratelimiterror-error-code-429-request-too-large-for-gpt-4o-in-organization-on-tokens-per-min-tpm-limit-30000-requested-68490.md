---
title: "GitHub MCP Server list_commits causes OpenAI 429 rate-limit via bloated context"
description: "Understand how MCP server tool outputs bloat context windows and trigger API rate limits; find workarounds to trim response fields before sending to LLM Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "openai.RateLimitError: Error code: 429 - Request too large for gpt-4o in organization on tokens per min (TPM): Limit 30000, Requested 68490"
common_causes:
  - "Source: https://github.com/github/github-mcp-server/issues/142 — When list_commits() returns 30 results, each at 5-6KB, total context exceeds 64K tokens and triggers TPM 429 errors on OpenAI. Tier-1 API user affected. Issue actively discussed, recently closed May 21 2026 after minimal response trimming was added. Strong commercial value: affects paid API users + MCP ecosystem. Category = OpenAI API (root cause is rate limit triggered by tool output size)."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-20"
published_at: "2026-05-20T22:38:30.636Z"
updated_at: "2026-05-20T22:38:30.636Z"
---

## What this error means

`openai.RateLimitError: Error code: 429 - Request too large for gpt-4o in organization on tokens per min (TPM): Limit 30000, Requested 68490` is a OpenAI API failure pattern reported for developers trying to understand how mcp server tool outputs bloat context windows and trigger api rate limits; find workarounds to trim response fields before sending to llm. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: https://github.com/github/github-mcp-server/issues/142 — When list_commits() returns 30 results, each at 5-6KB, total context exceeds 64K tokens and triggers TPM 429 errors on OpenAI. Tier-1 API user affected. Issue actively discussed, recently closed May 21 2026 after minimal response trimming was added. Strong commercial value: affects paid API users + MCP ecosystem. Category = OpenAI API (root cause is rate limit triggered by tool output size).

## Common causes

- Source: https://github.com/github/github-mcp-server/issues/142 — When list_commits() returns 30 results, each at 5-6KB, total context exceeds 64K tokens and triggers TPM 429 errors on OpenAI. Tier-1 API user affected. Issue actively discussed, recently closed May 21 2026 after minimal response trimming was added. Strong commercial value: affects paid API users + MCP ecosystem. Category = OpenAI API (root cause is rate limit triggered by tool output size).

## Quick fixes

1. Confirm the exact error signature matches `openai.RateLimitError: Error code: 429 - Request too large for gpt-4o in organization on tokens per min (TPM): Limit 30000, Requested 68490`.
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

- https://github.com/github/github-mcp-server/issues/142

Evidence note: Source: https://github.com/github/github-mcp-server/issues/142 — When list_commits() returns 30 results, each at 5-6KB, total context exceeds 64K tokens and triggers TPM 429 errors on OpenAI. Tier-1 API user affected. Issue actively discussed, recently closed May 21 2026 after minimal response trimming was added. Strong commercial value: affects paid API users + MCP ecosystem. Category = OpenAI API (root cause is rate limit triggered by tool output size).

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `openai.RateLimitError: Error code: 429 - Request too large for gpt-4o in organization on tokens per min (TPM): Limit 30000, Requested 68490` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `openai.RateLimitError: Error code: 429 - Request too large for gpt-4o in organization on tokens per min (TPM): Limit 30000, Requested 68490`.
