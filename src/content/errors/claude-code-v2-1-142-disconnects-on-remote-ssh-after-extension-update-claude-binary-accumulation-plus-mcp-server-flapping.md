---
title: "Claude Code remote-SSH disconnects on v2.1.142 — binary accumulation and MCP server flapping"
description: "Fix Claude Code disconnecting during remote-SSH sessions after upgrading to v2.1.142, with binary accumulation and MCP server flapping Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "v2.1.142 disconnects on remote-SSH after extension update — claude binary accumulation + MCP server flapping"
common_causes:
  - "GitHub issue #59552 filed 2026-05-15, labeled bug+platform:linux+area:mcp+area:ide+platform:vscode. Multi-hour large-context sessions disconnect after v2.1.142 upgrade. Category mapped to AI Coding Tools per Claude Code -> AI Coding Tools rule."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-16"
published_at: "2026-05-16T05:13:24.639Z"
updated_at: "2026-05-16T05:13:24.639Z"
---

## What this error means

`v2.1.142 disconnects on remote-SSH after extension update — claude binary accumulation + MCP server flapping` is a Claude Code failure pattern reported for developers trying to fix claude code disconnecting during remote-ssh sessions after upgrading to v2.1.142, with binary accumulation and mcp server flapping. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #59552 filed 2026-05-15, labeled bug+platform:linux+area:mcp+area:ide+platform:vscode. Multi-hour large-context sessions disconnect after v2.1.142 upgrade. Category mapped to AI Coding Tools per Claude Code -> AI Coding Tools rule.

## Common causes

- GitHub issue #59552 filed 2026-05-15, labeled bug+platform:linux+area:mcp+area:ide+platform:vscode. Multi-hour large-context sessions disconnect after v2.1.142 upgrade. Category mapped to AI Coding Tools per Claude Code -> AI Coding Tools rule.

## Quick fixes

1. Confirm the exact error signature matches `v2.1.142 disconnects on remote-SSH after extension update — claude binary accumulation + MCP server flapping`.
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

- https://github.com/anthropics/claude-code/issues/59552

Evidence note: GitHub issue #59552 filed 2026-05-15, labeled bug+platform:linux+area:mcp+area:ide+platform:vscode. Multi-hour large-context sessions disconnect after v2.1.142 upgrade. Category mapped to AI Coding Tools per Claude Code -> AI Coding Tools rule.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `v2.1.142 disconnects on remote-SSH after extension update — claude binary accumulation + MCP server flapping` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `v2.1.142 disconnects on remote-SSH after extension update — claude binary accumulation + MCP server flapping`.
