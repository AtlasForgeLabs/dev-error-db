---
title: "Cursor IDE Integration Fails: Option Disappears After Brief Availability"
description: "Fix Cursor IDE Claude Code extension disconnecting immediately after launch, /ide command returns no available IDEs Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "[ERROR] MCP server \"ide\" Failed to fetch tools: MCP error -32000: Connection closed ... (repeats indefinitely)"
common_causes:
  - "GitHub issue #20826 documents Cursor IDE integration failure with repeated WS-IDE reconnection loop. On Windows 11/Cursor 2.4.21/Claude Code 2.1.19, the IDE disconnected flash appears briefly then the Cursor option vanishes entirely from /ide menu. Verified TCP connection and .lock files exist. Confirmed active by user follow-up comments (Feb 2026). Distinct from Claude Code general MCP issues as it specifically targets Cursor IDE bridge. Maps to AI Coding Tools."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cursor"
updated: "2026-05-22"
published_at: "2026-05-22T18:39:48.315Z"
updated_at: "2026-05-22T18:39:48.315Z"
---

## What this error means

`[ERROR] MCP server "ide" Failed to fetch tools: MCP error -32000: Connection closed ... (repeats indefinitely)` is a Cursor failure pattern reported for developers trying to fix cursor ide claude code extension disconnecting immediately after launch, /ide command returns no available ides. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #20826 documents Cursor IDE integration failure with repeated WS-IDE reconnection loop. On Windows 11/Cursor 2.4.21/Claude Code 2.1.19, the IDE disconnected flash appears briefly then the Cursor option vanishes entirely from /ide menu. Verified TCP connection and .lock files exist. Confirmed active by user follow-up comments (Feb 2026). Distinct from Claude Code general MCP issues as it specifically targets Cursor IDE bridge. Maps to AI Coding Tools.

## Common causes

- GitHub issue #20826 documents Cursor IDE integration failure with repeated WS-IDE reconnection loop. On Windows 11/Cursor 2.4.21/Claude Code 2.1.19, the IDE disconnected flash appears briefly then the Cursor option vanishes entirely from /ide menu. Verified TCP connection and .lock files exist. Confirmed active by user follow-up comments (Feb 2026). Distinct from Claude Code general MCP issues as it specifically targets Cursor IDE bridge. Maps to AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `[ERROR] MCP server "ide" Failed to fetch tools: MCP error -32000: Connection closed ... (repeats indefinitely)`.
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

- https://github.com/anthropics/claude-code/issues/20826

Evidence note: GitHub issue #20826 documents Cursor IDE integration failure with repeated WS-IDE reconnection loop. On Windows 11/Cursor 2.4.21/Claude Code 2.1.19, the IDE disconnected flash appears briefly then the Cursor option vanishes entirely from /ide menu. Verified TCP connection and .lock files exist. Confirmed active by user follow-up comments (Feb 2026). Distinct from Claude Code general MCP issues as it specifically targets Cursor IDE bridge. Maps to AI Coding Tools.

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `[ERROR] MCP server "ide" Failed to fetch tools: MCP error -32000: Connection closed ... (repeats indefinitely)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[ERROR] MCP server "ide" Failed to fetch tools: MCP error -32000: Connection closed ... (repeats indefinitely)`.
