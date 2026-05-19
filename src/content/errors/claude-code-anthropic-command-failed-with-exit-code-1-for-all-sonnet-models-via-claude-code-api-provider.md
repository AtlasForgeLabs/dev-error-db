---
title: "Claude Code API Provider fails with exit code 1 for all Sonnet models"
description: "Fix complete model failure in Claude Code where all Anthropic Sonnet models return exit code 1, blocking all AI-assisted coding sessions Includes evidence for Claude Code (Anthropic) troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code (Anthropic)"
error_signature: "Command failed with exit code 1 for all sonnet models via Claude Code API Provider"
common_causes:
  - "GitHub issue #10135 in cline/cline (opened Apr 4, 2026). All Sonnet models fail with exit code 1 through the Claude Code API Provider. 9 comments indicating persistent issue affecting paying users. Critical error — no Claude models work. Maps to 'AI Coding Tools'."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-19"
published_at: "2026-05-19T14:37:16.601Z"
updated_at: "2026-05-19T14:37:16.601Z"
---

## What this error means

`Command failed with exit code 1 for all sonnet models via Claude Code API Provider` is a Claude Code (Anthropic) failure pattern reported for developers trying to fix complete model failure in claude code where all anthropic sonnet models return exit code 1, blocking all ai-assisted coding sessions. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #10135 in cline/cline (opened Apr 4, 2026). All Sonnet models fail with exit code 1 through the Claude Code API Provider. 9 comments indicating persistent issue affecting paying users. Critical error — no Claude models work. Maps to 'AI Coding Tools'.

## Common causes

- GitHub issue #10135 in cline/cline (opened Apr 4, 2026). All Sonnet models fail with exit code 1 through the Claude Code API Provider. 9 comments indicating persistent issue affecting paying users. Critical error — no Claude models work. Maps to 'AI Coding Tools'.

## Quick fixes

1. Confirm the exact error signature matches `Command failed with exit code 1 for all sonnet models via Claude Code API Provider`.
2. Check the Claude Code (Anthropic) account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/cline/cline/issues/10135

Evidence note: GitHub issue #10135 in cline/cline (opened Apr 4, 2026). All Sonnet models fail with exit code 1 through the Claude Code API Provider. 9 comments indicating persistent issue affecting paying users. Critical error — no Claude models work. Maps to 'AI Coding Tools'.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Command failed with exit code 1 for all sonnet models via Claude Code API Provider` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code (Anthropic) workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Command failed with exit code 1 for all sonnet models via Claude Code API Provider`.
