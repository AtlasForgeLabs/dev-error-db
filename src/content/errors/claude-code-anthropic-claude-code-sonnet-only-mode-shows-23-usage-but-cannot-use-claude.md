---
title: "Claude Code Sonnet-Only Mode Shows Low Usage But Blocks Access — Quota Not Working Correctly"
description: "fix Claude Code sonnet only mode quota not working usage blocked Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Anthropic Claude Code Sonnet only mode shows 23% usage but cannot use Claude"
common_causes:
  - "Users on Claude Code's sonnet-only mode see low usage (23%) but are blocked from using Claude, suggesting a quota tracking or billing bug in Anthropic's system"
  - "Claude Code in sonnet-only mode reports 23% usage but refuses to process requests. Bug labeled as 'area:cost' — likely a quota tracking or billing system issue. Directly impacts paying users' ability to work."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Claude Code quota error"
  - "Anthropic billing issue"
  - "Claude API rate limit"
updated: "2026-05-15"
published_at: "2026-05-15T06:13:21.857Z"
updated_at: "2026-05-15T06:13:21.857Z"
---

## What this error means

`Anthropic Claude Code Sonnet only mode shows 23% usage but cannot use Claude` is a Claude Code failure pattern reported for developers trying to fix claude code sonnet only mode quota not working usage blocked. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Claude Code in sonnet-only mode reports 23% usage but refuses to process requests. Bug labeled as 'area:cost' — likely a quota tracking or billing system issue. Directly impacts paying users' ability to work.

## Common causes

- Users on Claude Code's sonnet-only mode see low usage (23%) but are blocked from using Claude, suggesting a quota tracking or billing bug in Anthropic's system
- Claude Code in sonnet-only mode reports 23% usage but refuses to process requests. Bug labeled as 'area:cost' — likely a quota tracking or billing system issue. Directly impacts paying users' ability to work.

## Quick fixes

1. Confirm the exact error signature matches `Anthropic Claude Code Sonnet only mode shows 23% usage but cannot use Claude`.
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

- https://github.com/anthropics/claude-code/issues/59308

Evidence note: Claude Code in sonnet-only mode reports 23% usage but refuses to process requests. Bug labeled as 'area:cost' — likely a quota tracking or billing system issue. Directly impacts paying users' ability to work.

## Related errors

- Claude Code quota error
- Anthropic billing issue
- Claude API rate limit

## FAQ

### What should I check first?

Start with the exact `Anthropic Claude Code Sonnet only mode shows 23% usage but cannot use Claude` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Anthropic Claude Code Sonnet only mode shows 23% usage but cannot use Claude`.
