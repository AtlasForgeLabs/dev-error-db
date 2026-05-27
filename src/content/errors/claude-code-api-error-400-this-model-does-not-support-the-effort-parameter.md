---
title: "Claude Code Subagents Fail with 400 on Azure Foundry — Effort Parameter Not Supported"
description: "Fix Claude Code subagent failures when using Azure OpenAI Foundry deployment with CLAUDE_CODE_USE_FOUNDRY enabled Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "API Error: 400 This model does not support the effort parameter"
common_causes:
  - "GitHub issue #62894 on anthropics/claude-code, filed May 27 2026. Claude Code sets CLAUDE_EFFORT=high which translates to 'effort' API parameter — Azure Foundry deployments reject this with HTTP 400 on every subagent call. Root cause identified; main session works fine. Enterprise Azure + Claude Code workflow broken."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-27"
published_at: "2026-05-27T19:43:20.822Z"
updated_at: "2026-05-27T19:43:20.822Z"
---

## What this error means

`API Error: 400 This model does not support the effort parameter` is a Claude Code failure pattern reported for developers trying to fix claude code subagent failures when using azure openai foundry deployment with claude_code_use_foundry enabled. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #62894 on anthropics/claude-code, filed May 27 2026. Claude Code sets CLAUDE_EFFORT=high which translates to 'effort' API parameter — Azure Foundry deployments reject this with HTTP 400 on every subagent call. Root cause identified; main session works fine. Enterprise Azure + Claude Code workflow broken.

## Common causes

- GitHub issue #62894 on anthropics/claude-code, filed May 27 2026. Claude Code sets CLAUDE_EFFORT=high which translates to 'effort' API parameter — Azure Foundry deployments reject this with HTTP 400 on every subagent call. Root cause identified; main session works fine. Enterprise Azure + Claude Code workflow broken.

## Quick fixes

1. Confirm the exact error signature matches `API Error: 400 This model does not support the effort parameter`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Check the build output, project root, and deployment platform configuration before redeploying.

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

- https://github.com/anthropics/claude-code/issues/62894

Evidence note: GitHub issue #62894 on anthropics/claude-code, filed May 27 2026. Claude Code sets CLAUDE_EFFORT=high which translates to 'effort' API parameter — Azure Foundry deployments reject this with HTTP 400 on every subagent call. Root cause identified; main session works fine. Enterprise Azure + Claude Code workflow broken.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `API Error: 400 This model does not support the effort parameter` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: 400 This model does not support the effort parameter`.
