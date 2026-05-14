---
title: "Claude Chrome Extension CSP Blocking Inline Script — MCP Bridge Connection Fails Silently"
description: "Fix Claude Chrome extension not connecting to Claude Desktop MCP bridge due to CSP violation Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude in Chrome extension: CSP blocking inline script — 'Executing inline script violates Content Security Policy directive script-src self'"
common_causes:
  - "Claude in Chrome extension cannot connect to Claude Desktop MCP bridge. The Content Security Policy of claude.ai blocks the inline script required for reconnect flow. Connection fails silently with no user-visible error, leaving extension non-functional."
  - "CSP violation: 'script-src self' blocks inline script for reconnect flow. Extension shows as installed and enabled but list_connected_browsers returns 'not connected'. 24+ hours of troubleshooting by reporter."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Chrome extension authentication failed"
  - "Claude MCP bridge connection timeout"
  - "Chrome extension CSP policy error"
updated: "2026-05-14"
published_at: "2026-05-14T21:13:20.822Z"
updated_at: "2026-05-14T21:13:20.822Z"
---

## What this error means

`Claude in Chrome extension: CSP blocking inline script — 'Executing inline script violates Content Security Policy directive script-src self'` is a Claude Code failure pattern reported for developers trying to fix claude chrome extension not connecting to claude desktop mcp bridge due to csp violation. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

CSP violation: 'script-src self' blocks inline script for reconnect flow. Extension shows as installed and enabled but list_connected_browsers returns 'not connected'. 24+ hours of troubleshooting by reporter.

## Common causes

- Claude in Chrome extension cannot connect to Claude Desktop MCP bridge. The Content Security Policy of claude.ai blocks the inline script required for reconnect flow. Connection fails silently with no user-visible error, leaving extension non-functional.
- CSP violation: 'script-src self' blocks inline script for reconnect flow. Extension shows as installed and enabled but list_connected_browsers returns 'not connected'. 24+ hours of troubleshooting by reporter.

## Quick fixes

1. Confirm the exact error signature matches `Claude in Chrome extension: CSP blocking inline script — 'Executing inline script violates Content Security Policy directive script-src self'`.
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

- https://github.com/anthropics/claude-code/issues/59196

Evidence note: CSP violation: 'script-src self' blocks inline script for reconnect flow. Extension shows as installed and enabled but list_connected_browsers returns 'not connected'. 24+ hours of troubleshooting by reporter.

## Related errors

- Claude Chrome extension authentication failed
- Claude MCP bridge connection timeout
- Chrome extension CSP policy error

## FAQ

### What should I check first?

Start with the exact `Claude in Chrome extension: CSP blocking inline script — 'Executing inline script violates Content Security Policy directive script-src self'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude in Chrome extension: CSP blocking inline script — 'Executing inline script violates Content Security Policy directive script-src self'`.
