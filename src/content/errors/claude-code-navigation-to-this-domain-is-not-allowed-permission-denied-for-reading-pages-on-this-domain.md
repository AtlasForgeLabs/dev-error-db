---
title: "Claude in Chrome MCP tools fail silently — Permission denied on ALL domains"
description: "Fix Claude Code Chrome MCP tools failing on all domains when navigating or reading pages Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "\"Navigation to this domain is not allowed\" / \"Permission denied for reading pages on this domain\""
common_causes:
  - "Multiple GitHub issues report Claude in Chrome MCP tools returning \"Navigation to this domain is not allowed\" and \"Permission denied for reading pages on this domain\" for ALL domains (docs.google.com, github.com, wikipedia.org, example.com). Issue #49979 and #43255 show tab creation works but navigation/read_page/click tools fail. v1.0.69 also reports permission_required returned for all MCP navigations with approval popup never rendering (#53630). Strong match for Claude Code Chrome MCP authorization flow bug."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-17"
published_at: "2026-05-17T11:35:57.384Z"
updated_at: "2026-05-17T11:35:57.384Z"
---

## What this error means

`"Navigation to this domain is not allowed" / "Permission denied for reading pages on this domain"` is a Claude Code failure pattern reported for developers trying to fix claude code chrome mcp tools failing on all domains when navigating or reading pages. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple GitHub issues report Claude in Chrome MCP tools returning "Navigation to this domain is not allowed" and "Permission denied for reading pages on this domain" for ALL domains (docs.google.com, github.com, wikipedia.org, example.com). Issue #49979 and #43255 show tab creation works but navigation/read_page/click tools fail. v1.0.69 also reports permission_required returned for all MCP navigations with approval popup never rendering (#53630). Strong match for Claude Code Chrome MCP authorization flow bug.

## Common causes

- Multiple GitHub issues report Claude in Chrome MCP tools returning "Navigation to this domain is not allowed" and "Permission denied for reading pages on this domain" for ALL domains (docs.google.com, github.com, wikipedia.org, example.com). Issue #49979 and #43255 show tab creation works but navigation/read_page/click tools fail. v1.0.69 also reports permission_required returned for all MCP navigations with approval popup never rendering (#53630). Strong match for Claude Code Chrome MCP authorization flow bug.

## Quick fixes

1. Confirm the exact error signature matches `"Navigation to this domain is not allowed" / "Permission denied for reading pages on this domain"`.
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

- https://github.com/anthropics/claude-code/issues/49979
- https://github.com/anthropics/claude-code/issues/43255

Evidence note: Multiple GitHub issues report Claude in Chrome MCP tools returning "Navigation to this domain is not allowed" and "Permission denied for reading pages on this domain" for ALL domains (docs.google.com, github.com, wikipedia.org, example.com). Issue #49979 and #43255 show tab creation works but navigation/read_page/click tools fail. v1.0.69 also reports permission_required returned for all MCP navigations with approval popup never rendering (#53630). Strong match for Claude Code Chrome MCP authorization flow bug.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `"Navigation to this domain is not allowed" / "Permission denied for reading pages on this domain"` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"Navigation to this domain is not allowed" / "Permission denied for reading pages on this domain"`.
