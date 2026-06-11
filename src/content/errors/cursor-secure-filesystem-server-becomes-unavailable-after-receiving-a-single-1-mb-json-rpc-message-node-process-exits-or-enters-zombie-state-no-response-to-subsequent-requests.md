---
title: "Filesystem MCP server crashes or enters zombie state on ~1MB JSON-RPC message"
description: "User running server-filesystem via npx in Cursor Desktop encounters server unresponsiveness after sending a large JSON-RPC message; wants to understand why and how to prevent server crashes from oversized messages. Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "Secure filesystem server becomes unavailable after receiving a single ~1 MB JSON-RPC message; Node process exits or enters zombie state (no response to subsequent requests)"
common_causes:
  - "GitHub Issue #4207 on modelcontextprotocol/servers. Reproduced on Cursor Desktop platform. Missing per-line size limits + unbounded buffering leads to memory pressure and broken read loop. Not in covered-errors.md. Directly affects Cursor paid users. Category mapping: reported on Cursor Desktop → AI Coding Tools."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cursor"
updated: "2026-06-11"
published_at: "2026-06-11T01:36:13.486Z"
updated_at: "2026-06-11T01:36:13.486Z"
---

## What this error means

`Secure filesystem server becomes unavailable after receiving a single ~1 MB JSON-RPC message; Node process exits or enters zombie state (no response to subsequent requests)` is a Cursor failure pattern reported for developers trying to user running server-filesystem via npx in cursor desktop encounters server unresponsiveness after sending a large json-rpc message; wants to understand why and how to prevent server crashes from oversized messages.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #4207 on modelcontextprotocol/servers. Reproduced on Cursor Desktop platform. Missing per-line size limits + unbounded buffering leads to memory pressure and broken read loop. Not in covered-errors.md. Directly affects Cursor paid users. Category mapping: reported on Cursor Desktop → AI Coding Tools.

## Common causes

- GitHub Issue #4207 on modelcontextprotocol/servers. Reproduced on Cursor Desktop platform. Missing per-line size limits + unbounded buffering leads to memory pressure and broken read loop. Not in covered-errors.md. Directly affects Cursor paid users. Category mapping: reported on Cursor Desktop → AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `Secure filesystem server becomes unavailable after receiving a single ~1 MB JSON-RPC message; Node process exits or enters zombie state (no response to subsequent requests)`.
2. Check the Cursor account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/modelcontextprotocol/servers/issues/4207

Evidence note: GitHub Issue #4207 on modelcontextprotocol/servers. Reproduced on Cursor Desktop platform. Missing per-line size limits + unbounded buffering leads to memory pressure and broken read loop. Not in covered-errors.md. Directly affects Cursor paid users. Category mapping: reported on Cursor Desktop → AI Coding Tools.

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `Secure filesystem server becomes unavailable after receiving a single ~1 MB JSON-RPC message; Node process exits or enters zombie state (no response to subsequent requests)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Secure filesystem server becomes unavailable after receiving a single ~1 MB JSON-RPC message; Node process exits or enters zombie state (no response to subsequent requests)`.
