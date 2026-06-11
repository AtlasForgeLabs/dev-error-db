---
title: "server-filesystem crashes silently on startup when allowed directory is deleted"
description: "User adds a directory to MCP server-filesystem allowed_directories list then deletes that folder; Claude Desktop shows generic 'Server transport closed unexpectedly' with no diagnostic info; wants to know why the server won't start and how to recover. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Server transport closed unexpectedly (root cause: ENOENT stat on missing directory in Promise.all rejection)"
common_causes:
  - "GitHub Issue #4238 on modelcontextprotocol/servers. Root cause: Promise.all rejects on first ENOENT; host (especially Claude Desktop Windows MSIX build) captures no stderr. Proposed fix: switch to Promise.allSettled and list ALL invalid dirs. Not in covered-errors.md. Critical UX pain point for AI coding tool users."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-11"
published_at: "2026-06-11T01:36:13.486Z"
updated_at: "2026-06-11T01:36:13.486Z"
---

## What this error means

`Server transport closed unexpectedly (root cause: ENOENT stat on missing directory in Promise.all rejection)` is a Claude Code failure pattern reported for developers trying to user adds a directory to mcp server-filesystem allowed_directories list then deletes that folder; claude desktop shows generic 'server transport closed unexpectedly' with no diagnostic info; wants to know why the server won't start and how to recover.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #4238 on modelcontextprotocol/servers. Root cause: Promise.all rejects on first ENOENT; host (especially Claude Desktop Windows MSIX build) captures no stderr. Proposed fix: switch to Promise.allSettled and list ALL invalid dirs. Not in covered-errors.md. Critical UX pain point for AI coding tool users.

## Common causes

- GitHub Issue #4238 on modelcontextprotocol/servers. Root cause: Promise.all rejects on first ENOENT; host (especially Claude Desktop Windows MSIX build) captures no stderr. Proposed fix: switch to Promise.allSettled and list ALL invalid dirs. Not in covered-errors.md. Critical UX pain point for AI coding tool users.

## Quick fixes

1. Confirm the exact error signature matches `Server transport closed unexpectedly (root cause: ENOENT stat on missing directory in Promise.all rejection)`.
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

- https://github.com/modelcontextprotocol/servers/issues/4238

Evidence note: GitHub Issue #4238 on modelcontextprotocol/servers. Root cause: Promise.all rejects on first ENOENT; host (especially Claude Desktop Windows MSIX build) captures no stderr. Proposed fix: switch to Promise.allSettled and list ALL invalid dirs. Not in covered-errors.md. Critical UX pain point for AI coding tool users.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Server transport closed unexpectedly (root cause: ENOENT stat on missing directory in Promise.all rejection)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Server transport closed unexpectedly (root cause: ENOENT stat on missing directory in Promise.all rejection)`.
