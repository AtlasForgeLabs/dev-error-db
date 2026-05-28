---
title: "[BUG] Authentication Loop: API Key Ignored, OAuth Repeatedly Fails, Making Claude Code Unusable"
description: "Fix persistent Claude Code authentication failure where both OAuth and ANTHROPIC_API_KEY methods fail, rendering the tool completely unusable on fresh install Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Authentication Loop: API Key Ignored, OAuth Repeatedly Fails — 'API Error (Request timed out)' after multiple retry attempts; basic commands incorrectly sent to API instead of executed locally"
common_causes:
  - "GitHub issue #7827 from anthropics/claude-code repo. Fresh installation causes persistent auth failures across all methods. Phase 1: OAuth login appears successful but all AI requests timeout with 'API Error (Request timed out)'. Phase 2: Even when valid ANTHROPIC_API_KEY env var is set, Claude Code detects it but still forces OAuth browser auth, gets stuck in loops, shows 'Auth conflict' warning. Basic local commands (pwd) also timeout because they're incorrectly routed to API. Labels: area:auth, area:api, has repro, platform:windows. Severity: blocks entire tool usability."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-28"
published_at: "2026-05-28T05:43:22.185Z"
updated_at: "2026-05-28T05:43:22.185Z"
---

## What this error means

`Authentication Loop: API Key Ignored, OAuth Repeatedly Fails — 'API Error (Request timed out)' after multiple retry attempts; basic commands incorrectly sent to API instead of executed locally` is a Claude Code failure pattern reported for developers trying to fix persistent claude code authentication failure where both oauth and anthropic_api_key methods fail, rendering the tool completely unusable on fresh install. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #7827 from anthropics/claude-code repo. Fresh installation causes persistent auth failures across all methods. Phase 1: OAuth login appears successful but all AI requests timeout with 'API Error (Request timed out)'. Phase 2: Even when valid ANTHROPIC_API_KEY env var is set, Claude Code detects it but still forces OAuth browser auth, gets stuck in loops, shows 'Auth conflict' warning. Basic local commands (pwd) also timeout because they're incorrectly routed to API. Labels: area:auth, area:api, has repro, platform:windows. Severity: blocks entire tool usability.

## Common causes

- GitHub issue #7827 from anthropics/claude-code repo. Fresh installation causes persistent auth failures across all methods. Phase 1: OAuth login appears successful but all AI requests timeout with 'API Error (Request timed out)'. Phase 2: Even when valid ANTHROPIC_API_KEY env var is set, Claude Code detects it but still forces OAuth browser auth, gets stuck in loops, shows 'Auth conflict' warning. Basic local commands (pwd) also timeout because they're incorrectly routed to API. Labels: area:auth, area:api, has repro, platform:windows. Severity: blocks entire tool usability.

## Quick fixes

1. Confirm the exact error signature matches `Authentication Loop: API Key Ignored, OAuth Repeatedly Fails — 'API Error (Request timed out)' after multiple retry attempts; basic commands incorrectly sent to API instead of executed locally`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/7827

Evidence note: GitHub issue #7827 from anthropics/claude-code repo. Fresh installation causes persistent auth failures across all methods. Phase 1: OAuth login appears successful but all AI requests timeout with 'API Error (Request timed out)'. Phase 2: Even when valid ANTHROPIC_API_KEY env var is set, Claude Code detects it but still forces OAuth browser auth, gets stuck in loops, shows 'Auth conflict' warning. Basic local commands (pwd) also timeout because they're incorrectly routed to API. Labels: area:auth, area:api, has repro, platform:windows. Severity: blocks entire tool usability.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Authentication Loop: API Key Ignored, OAuth Repeatedly Fails — 'API Error (Request timed out)' after multiple retry attempts; basic commands incorrectly sent to API instead of executed locally` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Authentication Loop: API Key Ignored, OAuth Repeatedly Fails — 'API Error (Request timed out)' after multiple retry attempts; basic commands incorrectly sent to API instead of executed locally`.
