---
title: "MCP Browser Bridge blocked by Chrome Content Security Policy (CSP) — inline scripts rejected"
description: "Developer running Claude Code Chrome extension in sidepanel gets MCP browser bridge broken because page-level CSP (Content-Security-Policy) headers reject inline JavaScript needed for IPC between extension and MCP server Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "CSP blocks inline script, breaking MCP browser bridge"
common_causes:
  - "GitHub Issue #62002 on anthropics/claude-code (opened May 24). Tags: area:chrome, area:mcp, bug, has repro, platform:macos. Concrete reproduction steps available. New high-value error around MCP + browser CSP compatibility. Category mapping: Claude Code specific MCP tooling error."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-24"
published_at: "2026-05-24T12:42:53.111Z"
updated_at: "2026-05-24T12:42:53.111Z"
---

## What this error means

`CSP blocks inline script, breaking MCP browser bridge` is a Claude Code failure pattern reported for developers trying to developer running claude code chrome extension in sidepanel gets mcp browser bridge broken because page-level csp (content-security-policy) headers reject inline javascript needed for ipc between extension and mcp server. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #62002 on anthropics/claude-code (opened May 24). Tags: area:chrome, area:mcp, bug, has repro, platform:macos. Concrete reproduction steps available. New high-value error around MCP + browser CSP compatibility. Category mapping: Claude Code specific MCP tooling error.

## Common causes

- GitHub Issue #62002 on anthropics/claude-code (opened May 24). Tags: area:chrome, area:mcp, bug, has repro, platform:macos. Concrete reproduction steps available. New high-value error around MCP + browser CSP compatibility. Category mapping: Claude Code specific MCP tooling error.

## Quick fixes

1. Confirm the exact error signature matches `CSP blocks inline script, breaking MCP browser bridge`.
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

- https://github.com/anthropics/claude-code/issues/62002

Evidence note: GitHub Issue #62002 on anthropics/claude-code (opened May 24). Tags: area:chrome, area:mcp, bug, has repro, platform:macos. Concrete reproduction steps available. New high-value error around MCP + browser CSP compatibility. Category mapping: Claude Code specific MCP tooling error.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `CSP blocks inline script, breaking MCP browser bridge` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `CSP blocks inline script, breaking MCP browser bridge`.
