---
title: "Claude in Chrome: all navigate/javascript_tool calls return 'Navigation to this domain is not allowed'"
description: "Fix Claude Code Chrome extension blocking all navigation and JavaScript tool executions despite proper extension permission settings Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "navigate/javascript_tool calls return 'Navigation to this domain is not allowed' regardless of extension allowlist"
common_causes:
  - "GitHub issue #60574 opened May 19, 2026 on anthropics/claude-code with labels area:chrome, bug, duplicate, platform:macos. Affects Claude Code browser integration feature used by Pro/Max subscribers for web automation tasks. Hard block on core functionality — prevents any domain interaction. High commercial value as it directly blocks paying user workflows."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-24"
published_at: "2026-05-24T21:43:11.770Z"
updated_at: "2026-05-24T21:43:11.770Z"
---

## What this error means

`navigate/javascript_tool calls return 'Navigation to this domain is not allowed' regardless of extension allowlist` is a Claude Code failure pattern reported for developers trying to fix claude code chrome extension blocking all navigation and javascript tool executions despite proper extension permission settings. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #60574 opened May 19, 2026 on anthropics/claude-code with labels area:chrome, bug, duplicate, platform:macos. Affects Claude Code browser integration feature used by Pro/Max subscribers for web automation tasks. Hard block on core functionality — prevents any domain interaction. High commercial value as it directly blocks paying user workflows.

## Common causes

- GitHub issue #60574 opened May 19, 2026 on anthropics/claude-code with labels area:chrome, bug, duplicate, platform:macos. Affects Claude Code browser integration feature used by Pro/Max subscribers for web automation tasks. Hard block on core functionality — prevents any domain interaction. High commercial value as it directly blocks paying user workflows.

## Quick fixes

1. Confirm the exact error signature matches `navigate/javascript_tool calls return 'Navigation to this domain is not allowed' regardless of extension allowlist`.
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

- https://github.com/anthropics/claude-code/issues/60574

Evidence note: GitHub issue #60574 opened May 19, 2026 on anthropics/claude-code with labels area:chrome, bug, duplicate, platform:macos. Affects Claude Code browser integration feature used by Pro/Max subscribers for web automation tasks. Hard block on core functionality — prevents any domain interaction. High commercial value as it directly blocks paying user workflows.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `navigate/javascript_tool calls return 'Navigation to this domain is not allowed' regardless of extension allowlist` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `navigate/javascript_tool calls return 'Navigation to this domain is not allowed' regardless of extension allowlist`.
