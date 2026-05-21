---
title: "Opus 4.7 tool calls fail with parsing error (retry also failed) on Claude Code #61133"
description: "Fix Opus 4.7 model returning unparseable tool call responses in Claude Code, blocking all agent operations Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "\"The model's tool call could not be parsed (retry also failed)\""
common_causes:
  - "GitHub Issue #61133 in anthropics/claude-code by goldeneggg, reported May 21, 2026, closed May 21, 2026. Opus 4.7 started returning tool call responses that Claude Code cannot parse, even after retry. This is a regression tied to the Opus 4.7 release and affects production agents that depend on structured tool calling. Not in covered-errors.md (which only lists generic 'model not available' for Cursor, not Opus 4.7 parsing failures). Category: AI Coding Tools per SKILL.md mapping."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-21"
published_at: "2026-05-21T20:39:45.602Z"
updated_at: "2026-05-21T20:39:45.602Z"
---

## What this error means

`"The model's tool call could not be parsed (retry also failed)"` is a Claude Code failure pattern reported for developers trying to fix opus 4.7 model returning unparseable tool call responses in claude code, blocking all agent operations. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #61133 in anthropics/claude-code by goldeneggg, reported May 21, 2026, closed May 21, 2026. Opus 4.7 started returning tool call responses that Claude Code cannot parse, even after retry. This is a regression tied to the Opus 4.7 release and affects production agents that depend on structured tool calling. Not in covered-errors.md (which only lists generic 'model not available' for Cursor, not Opus 4.7 parsing failures). Category: AI Coding Tools per SKILL.md mapping.

## Common causes

- GitHub Issue #61133 in anthropics/claude-code by goldeneggg, reported May 21, 2026, closed May 21, 2026. Opus 4.7 started returning tool call responses that Claude Code cannot parse, even after retry. This is a regression tied to the Opus 4.7 release and affects production agents that depend on structured tool calling. Not in covered-errors.md (which only lists generic 'model not available' for Cursor, not Opus 4.7 parsing failures). Category: AI Coding Tools per SKILL.md mapping.

## Quick fixes

1. Confirm the exact error signature matches `"The model's tool call could not be parsed (retry also failed)"`.
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

- https://github.com/anthropics/claude-code/issues/61133

Evidence note: GitHub Issue #61133 in anthropics/claude-code by goldeneggg, reported May 21, 2026, closed May 21, 2026. Opus 4.7 started returning tool call responses that Claude Code cannot parse, even after retry. This is a regression tied to the Opus 4.7 release and affects production agents that depend on structured tool calling. Not in covered-errors.md (which only lists generic 'model not available' for Cursor, not Opus 4.7 parsing failures). Category: AI Coding Tools per SKILL.md mapping.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `"The model's tool call could not be parsed (retry also failed)"` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"The model's tool call could not be parsed (retry also failed)"`.
