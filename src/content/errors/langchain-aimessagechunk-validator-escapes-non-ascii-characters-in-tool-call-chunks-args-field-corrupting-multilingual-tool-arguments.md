---
title: "LangChain core AIMessageChunk validator escapes non-ASCII in tool_call_chunks[].args"
description: "Fix LangChain-core validator that mangles non-ASCII tool call arguments (Chinese, emoji, etc.), breaking multilingual AI agent workflows and international tool calling Includes evidence for LangChain troubleshooting demand."
category: "AI Coding Tools"
technology: "LangChain"
error_signature: "AIMessageChunk validator escapes non-ASCII characters in tool_call_chunks[].args field, corrupting multilingual tool arguments"
common_causes:
  - "Source: github.com/langchain-ai/langchain/issues/37686. Same class of bug as #34005 (closed earlier, different site). langchain-core package validator escapes non-ASCII bytes in tool_call_chunks args, corrupting content when tools receive text containing Unicode beyond ASCII range. High relevance for AI coding assistants using tool calls."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-25"
published_at: "2026-05-25T22:43:15.060Z"
updated_at: "2026-05-25T22:43:15.060Z"
---

## What this error means

`AIMessageChunk validator escapes non-ASCII characters in tool_call_chunks[].args field, corrupting multilingual tool arguments` is a LangChain failure pattern reported for developers trying to fix langchain-core validator that mangles non-ascii tool call arguments (chinese, emoji, etc.), breaking multilingual ai agent workflows and international tool calling. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: github.com/langchain-ai/langchain/issues/37686. Same class of bug as #34005 (closed earlier, different site). langchain-core package validator escapes non-ASCII bytes in tool_call_chunks args, corrupting content when tools receive text containing Unicode beyond ASCII range. High relevance for AI coding assistants using tool calls.

## Common causes

- Source: github.com/langchain-ai/langchain/issues/37686. Same class of bug as #34005 (closed earlier, different site). langchain-core package validator escapes non-ASCII bytes in tool_call_chunks args, corrupting content when tools receive text containing Unicode beyond ASCII range. High relevance for AI coding assistants using tool calls.

## Quick fixes

1. Confirm the exact error signature matches `AIMessageChunk validator escapes non-ASCII characters in tool_call_chunks[].args field, corrupting multilingual tool arguments`.
2. Check the LangChain account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/langchain-ai/langchain/issues/37686

Evidence note: Source: github.com/langchain-ai/langchain/issues/37686. Same class of bug as #34005 (closed earlier, different site). langchain-core package validator escapes non-ASCII bytes in tool_call_chunks args, corrupting content when tools receive text containing Unicode beyond ASCII range. High relevance for AI coding assistants using tool calls.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `AIMessageChunk validator escapes non-ASCII characters in tool_call_chunks[].args field, corrupting multilingual tool arguments` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LangChain workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `AIMessageChunk validator escapes non-ASCII characters in tool_call_chunks[].args field, corrupting multilingual tool arguments`.
