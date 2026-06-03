---
title: "How to Auto-Approve MCP Server Permissions in Claude Code GitHub Actions"
description: "Fix permission denied errors when using Claude Code MCP servers in headless GitHub Actions CI/CD pipelines by pre-approving tool permissions without interactive prompts. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude requested permissions to use mcp__atlassian__jira_get_issue, but you haven't granted it yet."
common_causes:
  - "GitHub Issue #647 on anthropics/claude-code-action repo (Oct 28, 2025). Developer reports MCP server tools require manual permission granting in headless GH Actions environment. Root cause: wildcard patterns like mcp__context7__* don't work — must use exact tool names like mcp__context7__. Deny list also conflicts with allowlist causing cascading permission denials. Category mapping: Claude Code → AI Coding Tools per SKILL.md category rules."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-03"
published_at: "2026-06-03T07:44:32.137Z"
updated_at: "2026-06-03T07:44:32.137Z"
---

## What this error means

`Claude requested permissions to use mcp__atlassian__jira_get_issue, but you haven't granted it yet.` is a Claude Code failure pattern reported for developers trying to fix permission denied errors when using claude code mcp servers in headless github actions ci/cd pipelines by pre-approving tool permissions without interactive prompts.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #647 on anthropics/claude-code-action repo (Oct 28, 2025). Developer reports MCP server tools require manual permission granting in headless GH Actions environment. Root cause: wildcard patterns like mcp__context7__* don't work — must use exact tool names like mcp__context7__. Deny list also conflicts with allowlist causing cascading permission denials. Category mapping: Claude Code → AI Coding Tools per SKILL.md category rules.

## Common causes

- GitHub Issue #647 on anthropics/claude-code-action repo (Oct 28, 2025). Developer reports MCP server tools require manual permission granting in headless GH Actions environment. Root cause: wildcard patterns like mcp__context7__* don't work — must use exact tool names like mcp__context7__. Deny list also conflicts with allowlist causing cascading permission denials. Category mapping: Claude Code → AI Coding Tools per SKILL.md category rules.

## Quick fixes

1. Confirm the exact error signature matches `Claude requested permissions to use mcp__atlassian__jira_get_issue, but you haven't granted it yet.`.
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

- https://github.com/anthropics/claude-code-action/issues/647

Evidence note: GitHub Issue #647 on anthropics/claude-code-action repo (Oct 28, 2025). Developer reports MCP server tools require manual permission granting in headless GH Actions environment. Root cause: wildcard patterns like mcp__context7__* don't work — must use exact tool names like mcp__context7__. Deny list also conflicts with allowlist causing cascading permission denials. Category mapping: Claude Code → AI Coding Tools per SKILL.md category rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Claude requested permissions to use mcp__atlassian__jira_get_issue, but you haven't granted it yet.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude requested permissions to use mcp__atlassian__jira_get_issue, but you haven't granted it yet.`.
