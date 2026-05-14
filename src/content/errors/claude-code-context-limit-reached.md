---
title: "Claude Code Slash Command Blocked by False Positive Context Limit Check on Opus 4.7 1M"
description: "Fix Claude Code slash commands failing with 'Context limit reached' false positive on 1M context models when context is far below actual limit Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Context limit reached"
common_causes:
  - "On Opus 4.7 1M-token context model, invoking a bare slash command fails with 'Context limit reached' even when context usage is well below 1M (e.g., ~200k). The slash-command loader appears to check against a stale 200k cap instead of the model's actual 1M limit. Workaround: prefix the slash command with any text."
  - "Issue #59143: user on claude-opus-4-7[1m] with ~200k context gets 'Context limit reached' on bare slash commands. Same skill works when prefixed with text. The error message provides no hint about which cap was tripped or the workaround."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code context limit false positive on 1M models"
  - "Claude Code slash command context check uses wrong cap"
  - "Claude Code context limit check ignoring model's actual window"
updated: "2026-05-14"
published_at: "2026-05-14T19:13:20.626Z"
updated_at: "2026-05-14T19:13:20.626Z"
---

## What this error means

`Context limit reached` is a Claude Code failure pattern reported for developers trying to fix claude code slash commands failing with 'context limit reached' false positive on 1m context models when context is far below actual limit. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #59143: user on claude-opus-4-7[1m] with ~200k context gets 'Context limit reached' on bare slash commands. Same skill works when prefixed with text. The error message provides no hint about which cap was tripped or the workaround.

## Common causes

- On Opus 4.7 1M-token context model, invoking a bare slash command fails with 'Context limit reached' even when context usage is well below 1M (e.g., ~200k). The slash-command loader appears to check against a stale 200k cap instead of the model's actual 1M limit. Workaround: prefix the slash command with any text.
- Issue #59143: user on claude-opus-4-7[1m] with ~200k context gets 'Context limit reached' on bare slash commands. Same skill works when prefixed with text. The error message provides no hint about which cap was tripped or the workaround.

## Quick fixes

1. Confirm the exact error signature matches `Context limit reached`.
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

- https://github.com/anthropics/claude-code/issues/59143

Evidence note: Issue #59143: user on claude-opus-4-7[1m] with ~200k context gets 'Context limit reached' on bare slash commands. Same skill works when prefixed with text. The error message provides no hint about which cap was tripped or the workaround.

## Related errors

- Claude Code context limit false positive on 1M models
- Claude Code slash command context check uses wrong cap
- Claude Code context limit check ignoring model's actual window

## FAQ

### What should I check first?

Start with the exact `Context limit reached` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Context limit reached`.
