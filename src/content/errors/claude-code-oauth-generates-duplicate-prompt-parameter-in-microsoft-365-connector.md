---
title: "Microsoft 365 connector OAuth generates duplicate prompt parameter in Claude Code"
description: "Fix duplicate 'prompt' parameter generation in OAuth flow when using Microsoft 365 connector integration with Claude Code Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth generates duplicate prompt parameter in Microsoft 365 connector"
common_causes:
  - "GitHub Issue #60152 in anthropics/claude-code, opened May 18 2026. The Microsoft 365 MCP connector produces a malformed OAuth URL with duplicate 'prompt' query parameter, breaking authentication. Category: AI Coding Tools (auth area). OAuth auth failures on paid services are high-value targets."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-18"
published_at: "2026-05-18T11:37:12.913Z"
updated_at: "2026-05-18T11:37:12.913Z"
---

## What this error means

`OAuth generates duplicate prompt parameter in Microsoft 365 connector` is a Claude Code failure pattern reported for developers trying to fix duplicate 'prompt' parameter generation in oauth flow when using microsoft 365 connector integration with claude code. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #60152 in anthropics/claude-code, opened May 18 2026. The Microsoft 365 MCP connector produces a malformed OAuth URL with duplicate 'prompt' query parameter, breaking authentication. Category: AI Coding Tools (auth area). OAuth auth failures on paid services are high-value targets.

## Common causes

- GitHub Issue #60152 in anthropics/claude-code, opened May 18 2026. The Microsoft 365 MCP connector produces a malformed OAuth URL with duplicate 'prompt' query parameter, breaking authentication. Category: AI Coding Tools (auth area). OAuth auth failures on paid services are high-value targets.

## Quick fixes

1. Confirm the exact error signature matches `OAuth generates duplicate prompt parameter in Microsoft 365 connector`.
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

- https://github.com/anthropics/claude-code/issues/60152

Evidence note: GitHub Issue #60152 in anthropics/claude-code, opened May 18 2026. The Microsoft 365 MCP connector produces a malformed OAuth URL with duplicate 'prompt' query parameter, breaking authentication. Category: AI Coding Tools (auth area). OAuth auth failures on paid services are high-value targets.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `OAuth generates duplicate prompt parameter in Microsoft 365 connector` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth generates duplicate prompt parameter in Microsoft 365 connector`.
