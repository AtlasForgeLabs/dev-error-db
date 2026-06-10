---
title: "MCP HTTP OAuth: Client doesn't read resource_metadata from WWW-Authenticate header (RFC 9728 compliance gap)"
description: "Fix Claude Code OAuth implementation not reading RFC 9728 resource_metadata parameter from WWW-Authenticate response header Includes evidence for Claude Code (Anthropic) troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code (Anthropic)"
error_signature: "MCP HTTP OAuth client doesn't read resource_metadata from WWW-Authenticate header — RFC 9728 non-compliance"
common_causes:
  - "GitHub issue #58802 on anthropics/claude-code: Claude Code does not properly parse resource_metadata from WWW-Authenticate header per RFC 9728 specification. Related to #61376 but a distinct compliance issue about client-side parsing behavior rather than server-side hint generation. Another distinct variant of the same broader problem area."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-10"
published_at: "2026-06-10T09:36:11.355Z"
updated_at: "2026-06-10T09:36:11.355Z"
---

## What this error means

`MCP HTTP OAuth client doesn't read resource_metadata from WWW-Authenticate header — RFC 9728 non-compliance` is a Claude Code (Anthropic) failure pattern reported for developers trying to fix claude code oauth implementation not reading rfc 9728 resource_metadata parameter from www-authenticate response header. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #58802 on anthropics/claude-code: Claude Code does not properly parse resource_metadata from WWW-Authenticate header per RFC 9728 specification. Related to #61376 but a distinct compliance issue about client-side parsing behavior rather than server-side hint generation. Another distinct variant of the same broader problem area.

## Common causes

- GitHub issue #58802 on anthropics/claude-code: Claude Code does not properly parse resource_metadata from WWW-Authenticate header per RFC 9728 specification. Related to #61376 but a distinct compliance issue about client-side parsing behavior rather than server-side hint generation. Another distinct variant of the same broader problem area.

## Quick fixes

1. Confirm the exact error signature matches `MCP HTTP OAuth client doesn't read resource_metadata from WWW-Authenticate header — RFC 9728 non-compliance`.
2. Check the Claude Code (Anthropic) account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/anthropics/claude-code/issues/58802

Evidence note: GitHub issue #58802 on anthropics/claude-code: Claude Code does not properly parse resource_metadata from WWW-Authenticate header per RFC 9728 specification. Related to #61376 but a distinct compliance issue about client-side parsing behavior rather than server-side hint generation. Another distinct variant of the same broader problem area.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP HTTP OAuth client doesn't read resource_metadata from WWW-Authenticate header — RFC 9728 non-compliance` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code (Anthropic) workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP HTTP OAuth client doesn't read resource_metadata from WWW-Authenticate header — RFC 9728 non-compliance`.
