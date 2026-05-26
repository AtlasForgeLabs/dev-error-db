---
title: "Claude Code Sub-agents cannot spawn other sub-agents: Task/Agent primitive not exposed in nested contexts"
description: "User needs Claude Code to spawn sub-agents in nested contexts but gets a primitive-not-exposed error blocking multi-step agent workflows Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Sub-agents cannot spawn other sub-agents: Task/Agent primitive not exposed in nested contexts"
common_causes:
  - "Source: GitHub Issue #61993 in anthropics/claude-code, opened May 24 2026, actively discussed (11 comments). Error occurs when using Claude Code's agent/spawn capabilities in nested task contexts — blocks advanced multi-agent automation patterns. Category mapping: Claude Code native feature error → AI Coding Tools."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-26"
published_at: "2026-05-26T00:43:15.386Z"
updated_at: "2026-05-26T00:43:15.386Z"
---

## What this error means

`Sub-agents cannot spawn other sub-agents: Task/Agent primitive not exposed in nested contexts` is a Claude Code failure pattern reported for developers trying to user needs claude code to spawn sub-agents in nested contexts but gets a primitive-not-exposed error blocking multi-step agent workflows. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: GitHub Issue #61993 in anthropics/claude-code, opened May 24 2026, actively discussed (11 comments). Error occurs when using Claude Code's agent/spawn capabilities in nested task contexts — blocks advanced multi-agent automation patterns. Category mapping: Claude Code native feature error → AI Coding Tools.

## Common causes

- Source: GitHub Issue #61993 in anthropics/claude-code, opened May 24 2026, actively discussed (11 comments). Error occurs when using Claude Code's agent/spawn capabilities in nested task contexts — blocks advanced multi-agent automation patterns. Category mapping: Claude Code native feature error → AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `Sub-agents cannot spawn other sub-agents: Task/Agent primitive not exposed in nested contexts`.
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

- https://github.com/anthropics/claude-code/issues/61993

Evidence note: Source: GitHub Issue #61993 in anthropics/claude-code, opened May 24 2026, actively discussed (11 comments). Error occurs when using Claude Code's agent/spawn capabilities in nested task contexts — blocks advanced multi-agent automation patterns. Category mapping: Claude Code native feature error → AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Sub-agents cannot spawn other sub-agents: Task/Agent primitive not exposed in nested contexts` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Sub-agents cannot spawn other sub-agents: Task/Agent primitive not exposed in nested contexts`.
