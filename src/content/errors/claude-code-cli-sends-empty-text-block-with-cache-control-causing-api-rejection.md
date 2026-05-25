---
title: "Claude Code CLI sends empty text block with cache_control causing API rejection"
description: "Fix Claude Code CLI bug where sending cache_control with empty text causes API request rejection, blocking AI coding workflows Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "CLI sends empty text block with cache_control causing API rejection"
common_causes:
  - "Found in anthropics/claude-code#54485 with labels ['bug', 'platform:macos', 'area:core', 'api:anthropic']. Direct impact on paid Claude Code users. macOS platform issue adds relevance."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-25"
published_at: "2026-05-25T16:43:14.271Z"
updated_at: "2026-05-25T16:43:14.271Z"
---

## What this error means

`CLI sends empty text block with cache_control causing API rejection` is a Claude Code failure pattern reported for developers trying to fix claude code cli bug where sending cache_control with empty text causes api request rejection, blocking ai coding workflows. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found in anthropics/claude-code#54485 with labels ['bug', 'platform:macos', 'area:core', 'api:anthropic']. Direct impact on paid Claude Code users. macOS platform issue adds relevance.

## Common causes

- Found in anthropics/claude-code#54485 with labels ['bug', 'platform:macos', 'area:core', 'api:anthropic']. Direct impact on paid Claude Code users. macOS platform issue adds relevance.

## Quick fixes

1. Confirm the exact error signature matches `CLI sends empty text block with cache_control causing API rejection`.
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

- https://github.com/anthropics/claude-code/issues/54485

Evidence note: Found in anthropics/claude-code#54485 with labels ['bug', 'platform:macos', 'area:core', 'api:anthropic']. Direct impact on paid Claude Code users. macOS platform issue adds relevance.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `CLI sends empty text block with cache_control causing API rejection` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `CLI sends empty text block with cache_control causing API rejection`.
