---
title: "Claude Code MCP OAuth completes but token not honored — server stuck in Needs authentication"
description: "Fix Claude Code where browser OAuth flow succeeds but resulting token is discarded — corporate MCP servers stay permanently authenticated despite valid Bearer tokens obtained via curl Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth dance completes successfully but token not used or persisted; /mcp shows 'Needs authentication' indefinitely; tools never become available"
common_causes:
  - "anthropics/claude-code #60260 — multiple OAuth-protected corporate MCP servers affected; works for some providers (Figma, Atlassian) but not others; stale listener process on port 8080 suspected as contributor."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-01"
published_at: "2026-06-01T08:44:26.499Z"
updated_at: "2026-06-01T08:44:26.499Z"
---

## What this error means

`OAuth dance completes successfully but token not used or persisted; /mcp shows 'Needs authentication' indefinitely; tools never become available` is a Claude Code failure pattern reported for developers trying to fix claude code where browser oauth flow succeeds but resulting token is discarded — corporate mcp servers stay permanently authenticated despite valid bearer tokens obtained via curl. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

anthropics/claude-code #60260 — multiple OAuth-protected corporate MCP servers affected; works for some providers (Figma, Atlassian) but not others; stale listener process on port 8080 suspected as contributor.

## Common causes

- anthropics/claude-code #60260 — multiple OAuth-protected corporate MCP servers affected; works for some providers (Figma, Atlassian) but not others; stale listener process on port 8080 suspected as contributor.

## Quick fixes

1. Confirm the exact error signature matches `OAuth dance completes successfully but token not used or persisted; /mcp shows 'Needs authentication' indefinitely; tools never become available`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/anthropics/claude-code/issues/60260

Evidence note: anthropics/claude-code #60260 — multiple OAuth-protected corporate MCP servers affected; works for some providers (Figma, Atlassian) but not others; stale listener process on port 8080 suspected as contributor.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `OAuth dance completes successfully but token not used or persisted; /mcp shows 'Needs authentication' indefinitely; tools never become available` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth dance completes successfully but token not used or persisted; /mcp shows 'Needs authentication' indefinitely; tools never become available`.
