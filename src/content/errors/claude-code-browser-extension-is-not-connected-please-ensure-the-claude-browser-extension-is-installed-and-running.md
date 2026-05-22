---
title: "Chrome MCP bridge fails after ~30s idle due to MV3 service worker dormancy"
description: "Fix Chrome MCP extension returning empty browser list after idle period — misleading error message when extension IS installed Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Browser extension is not connected. Please ensure the Claude browser extension is installed and running"
common_causes:
  - "GitHub issue #61347 on anthropics/claude-code opened May 22, 2026 by jjongsta. MV3 service worker goes dormant after ~30s idle, causing claude-in-chrome extension to stop checking in to the bridge. CLI shows misleading auth/install error while extension IS installed, signed in, and paired. Has repro steps, labeled bug+has repro+area:mcp+area:chrome+area:browser-extension. Extension version 1.0.71/1.0.72, Claude Code CLI 2.1.148, Chrome 148. Strong signal — multiple enterprise testers confirming ($50 acceptance-test target mentioned). Not yet covered on dev-error-db."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-22"
published_at: "2026-05-22T04:39:46.665Z"
updated_at: "2026-05-22T04:39:46.665Z"
---

## What this error means

`Browser extension is not connected. Please ensure the Claude browser extension is installed and running` is a Claude Code failure pattern reported for developers trying to fix chrome mcp extension returning empty browser list after idle period — misleading error message when extension is installed. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #61347 on anthropics/claude-code opened May 22, 2026 by jjongsta. MV3 service worker goes dormant after ~30s idle, causing claude-in-chrome extension to stop checking in to the bridge. CLI shows misleading auth/install error while extension IS installed, signed in, and paired. Has repro steps, labeled bug+has repro+area:mcp+area:chrome+area:browser-extension. Extension version 1.0.71/1.0.72, Claude Code CLI 2.1.148, Chrome 148. Strong signal — multiple enterprise testers confirming ($50 acceptance-test target mentioned). Not yet covered on dev-error-db.

## Common causes

- GitHub issue #61347 on anthropics/claude-code opened May 22, 2026 by jjongsta. MV3 service worker goes dormant after ~30s idle, causing claude-in-chrome extension to stop checking in to the bridge. CLI shows misleading auth/install error while extension IS installed, signed in, and paired. Has repro steps, labeled bug+has repro+area:mcp+area:chrome+area:browser-extension. Extension version 1.0.71/1.0.72, Claude Code CLI 2.1.148, Chrome 148. Strong signal — multiple enterprise testers confirming ($50 acceptance-test target mentioned). Not yet covered on dev-error-db.

## Quick fixes

1. Confirm the exact error signature matches `Browser extension is not connected. Please ensure the Claude browser extension is installed and running`.
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

- https://github.com/anthropics/claude-code/issues/61347

Evidence note: GitHub issue #61347 on anthropics/claude-code opened May 22, 2026 by jjongsta. MV3 service worker goes dormant after ~30s idle, causing claude-in-chrome extension to stop checking in to the bridge. CLI shows misleading auth/install error while extension IS installed, signed in, and paired. Has repro steps, labeled bug+has repro+area:mcp+area:chrome+area:browser-extension. Extension version 1.0.71/1.0.72, Claude Code CLI 2.1.148, Chrome 148. Strong signal — multiple enterprise testers confirming ($50 acceptance-test target mentioned). Not yet covered on dev-error-db.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Browser extension is not connected. Please ensure the Claude browser extension is installed and running` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Browser extension is not connected. Please ensure the Claude browser extension is installed and running`.
