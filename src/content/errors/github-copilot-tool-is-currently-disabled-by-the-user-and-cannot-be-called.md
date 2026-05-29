---
title: "MCP tools fail with 'currently disabled by the user' error in GitHub Copilot"
description: "Fix MCP tools (read tool specifically) failing with 'disabled by user' despite all tools being enabled — model-specific issue (GPT 5 mini works, Claude Sonnet 4.5 fails) Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "<tool> is currently disabled by the user, and cannot be called."
common_causes:
  - "Stack Overflow Q79875997 (score:1, views:567) — VS Code + GitHub Copilot users report Excel MCP servers failing with 'disabled by user'. Model-specific bug indicates deeper integration issue. Category: GitHub Copilot (primary stack is Copilot). Source: https://stackoverflow.com/questions/79875997"
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Copilot"
updated: "2026-05-29"
published_at: "2026-05-29T22:43:27.521Z"
updated_at: "2026-05-29T22:43:27.521Z"
---

## What this error means

`<tool> is currently disabled by the user, and cannot be called.` is a GitHub Copilot failure pattern reported for developers trying to fix mcp tools (read tool specifically) failing with 'disabled by user' despite all tools being enabled — model-specific issue (gpt 5 mini works, claude sonnet 4.5 fails). Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Stack Overflow Q79875997 (score:1, views:567) — VS Code + GitHub Copilot users report Excel MCP servers failing with 'disabled by user'. Model-specific bug indicates deeper integration issue. Category: GitHub Copilot (primary stack is Copilot). Source: https://stackoverflow.com/questions/79875997

## Common causes

- Stack Overflow Q79875997 (score:1, views:567) — VS Code + GitHub Copilot users report Excel MCP servers failing with 'disabled by user'. Model-specific bug indicates deeper integration issue. Category: GitHub Copilot (primary stack is Copilot). Source: https://stackoverflow.com/questions/79875997

## Quick fixes

1. Confirm the exact error signature matches `<tool> is currently disabled by the user, and cannot be called.`.
2. Check the GitHub Copilot account, local tool state, and provider configuration involved in the failing workflow.
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

- https://stackoverflow.com/questions/79875997/mcp-tools-fail-with-currently-disabled-by-the-user-error

Evidence note: Stack Overflow Q79875997 (score:1, views:567) — VS Code + GitHub Copilot users report Excel MCP servers failing with 'disabled by user'. Model-specific bug indicates deeper integration issue. Category: GitHub Copilot (primary stack is Copilot). Source: https://stackoverflow.com/questions/79875997

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `<tool> is currently disabled by the user, and cannot be called.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `<tool> is currently disabled by the user, and cannot be called.`.
