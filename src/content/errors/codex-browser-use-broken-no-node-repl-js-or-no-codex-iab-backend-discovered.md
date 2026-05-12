---
title: "Codex Desktop Browser Use Broken After Update — Node REPL Not Discovered"
description: "Fix Codex Desktop Browser Use not working after update — Node REPL execution tool not exposed Includes evidence for Codex troubleshooting demand."
category: "AI Coding Tools"
technology: "Codex"
error_signature: "Browser Use broken: no node_repl/js or no Codex IAB backend discovered"
common_causes:
  - "Codex Desktop is OpenAI's AI coding IDE. Browser Use is a key feature for web automation tasks. After an update, the main thread can no longer discover the Node REPL execution tool (mcp__node_repl), breaking browser automation workflows that developers rely on for testing and scraping."
  - "After Codex Desktop update on macOS, Browser Use feature broken. In-app browser open on local dev server, but Browser Use commands fail because Node REPL execution tool not exposed. Tool discovery for mcp__node_repl fails. Affects macOS users specifically."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Codex Desktop tool discovery failure"
  - "Codex MCP backend not starting"
  - "Codex browser automation not working"
updated: "2026-05-12"
published_at: "2026-05-12T12:12:16.369Z"
updated_at: "2026-05-12T12:12:16.369Z"
---

## What this error means

`Browser Use broken: no node_repl/js or no Codex IAB backend discovered` is a Codex failure pattern reported for developers trying to fix codex desktop browser use not working after update — node repl execution tool not exposed. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

After Codex Desktop update on macOS, Browser Use feature broken. In-app browser open on local dev server, but Browser Use commands fail because Node REPL execution tool not exposed. Tool discovery for mcp__node_repl fails. Affects macOS users specifically.

## Common causes

- Codex Desktop is OpenAI's AI coding IDE. Browser Use is a key feature for web automation tasks. After an update, the main thread can no longer discover the Node REPL execution tool (mcp__node_repl), breaking browser automation workflows that developers rely on for testing and scraping.
- After Codex Desktop update on macOS, Browser Use feature broken. In-app browser open on local dev server, but Browser Use commands fail because Node REPL execution tool not exposed. Tool discovery for mcp__node_repl fails. Affects macOS users specifically.

## Quick fixes

1. Confirm the exact error signature matches `Browser Use broken: no node_repl/js or no Codex IAB backend discovered`.
2. Check the Codex account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/codex/issues/20579

Evidence note: After Codex Desktop update on macOS, Browser Use feature broken. In-app browser open on local dev server, but Browser Use commands fail because Node REPL execution tool not exposed. Tool discovery for mcp__node_repl fails. Affects macOS users specifically.

## Related errors

- Codex Desktop tool discovery failure
- Codex MCP backend not starting
- Codex browser automation not working

## FAQ

### What should I check first?

Start with the exact `Browser Use broken: no node_repl/js or no Codex IAB backend discovered` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Codex workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Browser Use broken: no node_repl/js or no Codex IAB backend discovered`.
