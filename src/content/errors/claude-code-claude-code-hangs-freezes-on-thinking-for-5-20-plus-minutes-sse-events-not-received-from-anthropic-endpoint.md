---
title: "Claude Code Hanging on Thinking Prompts After Opus 4.6"
description: "Fix Claude Code freezing or getting stuck on thinking prompts for extended periods Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code hangs/freezes on 'thinking' for 5-20+ minutes; SSE events not received from Anthropic endpoint"
common_causes:
  - "Since Opus 4.6 release, Claude Code frequently hangs for 5-20 minutes on prompts with no token usage increase. Packet inspection shows SSE events are not arriving from Anthropic. Affects large number of paid users (100+ comments)."
  - "GitHub issue #26224 (100 comments) reports Claude Code stuck 'thinking' for 5-20+ minutes with no token usage. Packet inspection confirms SSE events are not being received from Anthropic endpoint. Triggered since Opus 4.6 release."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code SSE connection timeout"
  - "Claude Code Opus 4.6 performance regression"
  - "Anthropic API streaming timeout errors"
updated: "2026-05-12"
published_at: "2026-05-12T07:10:49.577Z"
updated_at: "2026-05-12T07:10:49.577Z"
---

## What this error means

`Claude Code hangs/freezes on 'thinking' for 5-20+ minutes; SSE events not received from Anthropic endpoint` is a Claude Code failure pattern reported for developers trying to fix claude code freezing or getting stuck on thinking prompts for extended periods. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #26224 (100 comments) reports Claude Code stuck 'thinking' for 5-20+ minutes with no token usage. Packet inspection confirms SSE events are not being received from Anthropic endpoint. Triggered since Opus 4.6 release.

## Common causes

- Since Opus 4.6 release, Claude Code frequently hangs for 5-20 minutes on prompts with no token usage increase. Packet inspection shows SSE events are not arriving from Anthropic. Affects large number of paid users (100+ comments).
- GitHub issue #26224 (100 comments) reports Claude Code stuck 'thinking' for 5-20+ minutes with no token usage. Packet inspection confirms SSE events are not being received from Anthropic endpoint. Triggered since Opus 4.6 release.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code hangs/freezes on 'thinking' for 5-20+ minutes; SSE events not received from Anthropic endpoint`.
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

- https://github.com/anthropics/claude-code/issues/26224

Evidence note: GitHub issue #26224 (100 comments) reports Claude Code stuck 'thinking' for 5-20+ minutes with no token usage. Packet inspection confirms SSE events are not being received from Anthropic endpoint. Triggered since Opus 4.6 release.

## Related errors

- Claude Code SSE connection timeout
- Claude Code Opus 4.6 performance regression
- Anthropic API streaming timeout errors

## FAQ

### What should I check first?

Start with the exact `Claude Code hangs/freezes on 'thinking' for 5-20+ minutes; SSE events not received from Anthropic endpoint` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code hangs/freezes on 'thinking' for 5-20+ minutes; SSE events not received from Anthropic endpoint`.
