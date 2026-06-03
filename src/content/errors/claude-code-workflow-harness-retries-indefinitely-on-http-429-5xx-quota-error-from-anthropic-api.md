---
title: "Anthropic API Workflow Harness Retries Indefinitely on HTTP 429"
description: "Prevent infinite retry loops when Claude Code subagents receive 429 or 5xx responses, causing hangs rather than graceful backoff Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Workflow harness retries indefinitely on HTTP 429 / 5xx / quota error from Anthropic API"
common_causes:
  - "GitHub Issue #64328 on anthropics/claude-code (May 31 2026). When a subagent gets HTTP 429/quota error, the workflow harness does not implement bounded retry or exponential backoff, leading to indefinite retries. Distinct from rate limit itself — this is the secondary handling bug that compounds the primary rate limit problem."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-03"
published_at: "2026-06-03T19:44:33.643Z"
updated_at: "2026-06-03T19:44:33.643Z"
---

## What this error means

`Workflow harness retries indefinitely on HTTP 429 / 5xx / quota error from Anthropic API` is a Claude Code failure pattern reported for developers trying to prevent infinite retry loops when claude code subagents receive 429 or 5xx responses, causing hangs rather than graceful backoff. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #64328 on anthropics/claude-code (May 31 2026). When a subagent gets HTTP 429/quota error, the workflow harness does not implement bounded retry or exponential backoff, leading to indefinite retries. Distinct from rate limit itself — this is the secondary handling bug that compounds the primary rate limit problem.

## Common causes

- GitHub Issue #64328 on anthropics/claude-code (May 31 2026). When a subagent gets HTTP 429/quota error, the workflow harness does not implement bounded retry or exponential backoff, leading to indefinite retries. Distinct from rate limit itself — this is the secondary handling bug that compounds the primary rate limit problem.

## Quick fixes

1. Confirm the exact error signature matches `Workflow harness retries indefinitely on HTTP 429 / 5xx / quota error from Anthropic API`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/64328

Evidence note: GitHub Issue #64328 on anthropics/claude-code (May 31 2026). When a subagent gets HTTP 429/quota error, the workflow harness does not implement bounded retry or exponential backoff, leading to indefinite retries. Distinct from rate limit itself — this is the secondary handling bug that compounds the primary rate limit problem.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Workflow harness retries indefinitely on HTTP 429 / 5xx / quota error from Anthropic API` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Workflow harness retries indefinitely on HTTP 429 / 5xx / quota error from Anthropic API`.
