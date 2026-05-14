---
title: "Claude Code weekly cap depleting 5x faster due to cache_read_input_tokens counted at full weight vs 5h bucket discount"
description: "Understand why Claude Max weekly token cap depletes abnormally fast when using MCP tools with high cache-read volume Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Weekly all-models cap depleting abnormally fast — cache_read_input_tokens counted at full weight"
common_causes:
  - "Claude Max subscribers ($100/mo) report their weekly cap depleting 5x faster than expected. Root cause: cache_read_input_tokens from MCP tools like Serena are counted at full token weight rather than the discounted rate used in 5h session buckets. Direct billing/quota impact."
  - "Weekly all-models cap depleting ~5x faster than 5h session cap. Observed with Max 5x plan, claude-opus-4-7, and MCP tool (Serena) generating high cache-read volume. cache_read_input_tokens appear to be metered at full weight in weekly cap vs discounted in session cap."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code token counting cache_read"
  - "Claude Max quota depleting fast"
  - "Claude Code MCP cache billing"
updated: "2026-05-14"
published_at: "2026-05-14T13:13:19.978Z"
updated_at: "2026-05-14T13:13:19.978Z"
---

## What this error means

`Weekly all-models cap depleting abnormally fast — cache_read_input_tokens counted at full weight` is a Claude Code failure pattern reported for developers trying to understand why claude max weekly token cap depletes abnormally fast when using mcp tools with high cache-read volume. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Weekly all-models cap depleting ~5x faster than 5h session cap. Observed with Max 5x plan, claude-opus-4-7, and MCP tool (Serena) generating high cache-read volume. cache_read_input_tokens appear to be metered at full weight in weekly cap vs discounted in session cap.

## Common causes

- Claude Max subscribers ($100/mo) report their weekly cap depleting 5x faster than expected. Root cause: cache_read_input_tokens from MCP tools like Serena are counted at full token weight rather than the discounted rate used in 5h session buckets. Direct billing/quota impact.
- Weekly all-models cap depleting ~5x faster than 5h session cap. Observed with Max 5x plan, claude-opus-4-7, and MCP tool (Serena) generating high cache-read volume. cache_read_input_tokens appear to be metered at full weight in weekly cap vs discounted in session cap.

## Quick fixes

1. Confirm the exact error signature matches `Weekly all-models cap depleting abnormally fast — cache_read_input_tokens counted at full weight`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/58786

Evidence note: Weekly all-models cap depleting ~5x faster than 5h session cap. Observed with Max 5x plan, claude-opus-4-7, and MCP tool (Serena) generating high cache-read volume. cache_read_input_tokens appear to be metered at full weight in weekly cap vs discounted in session cap.

## Related errors

- Claude Code token counting cache_read
- Claude Max quota depleting fast
- Claude Code MCP cache billing

## FAQ

### What should I check first?

Start with the exact `Weekly all-models cap depleting abnormally fast — cache_read_input_tokens counted at full weight` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Weekly all-models cap depleting abnormally fast — cache_read_input_tokens counted at full weight`.
