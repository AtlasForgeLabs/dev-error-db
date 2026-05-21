---
title: "Claude Code OAuth routes Max plan subscription to wrong Organization (API billing) instead of personal Max"
description: "Fix Claude Code authentication routing so Max plan users are billed under their personal subscription, not an Organization API key Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code OAuth authenticates successfully but binds to Organization's API billing instead of personal Max subscription; /status shows 'API Usage Billing' instead of 'Max Plan'"
common_causes:
  - "GitHub issue #61166 on anthropics/claude-code (opened May 21, 2026). User confirms OAuth login works but billing context maps to wrong Organization UID persisted in ~/.config/anthropic/configs/default.json. Verified fix by manually clearing cached credentials. Category: AI Coding Tools per SKILL.md mapping for Claude Code."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-21"
published_at: "2026-05-21T23:39:45.971Z"
updated_at: "2026-05-21T23:39:45.971Z"
---

## What this error means

`Claude Code OAuth authenticates successfully but binds to Organization's API billing instead of personal Max subscription; /status shows 'API Usage Billing' instead of 'Max Plan'` is a Claude Code failure pattern reported for developers trying to fix claude code authentication routing so max plan users are billed under their personal subscription, not an organization api key. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #61166 on anthropics/claude-code (opened May 21, 2026). User confirms OAuth login works but billing context maps to wrong Organization UID persisted in ~/.config/anthropic/configs/default.json. Verified fix by manually clearing cached credentials. Category: AI Coding Tools per SKILL.md mapping for Claude Code.

## Common causes

- GitHub issue #61166 on anthropics/claude-code (opened May 21, 2026). User confirms OAuth login works but billing context maps to wrong Organization UID persisted in ~/.config/anthropic/configs/default.json. Verified fix by manually clearing cached credentials. Category: AI Coding Tools per SKILL.md mapping for Claude Code.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code OAuth authenticates successfully but binds to Organization's API billing instead of personal Max subscription; /status shows 'API Usage Billing' instead of 'Max Plan'`.
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

- https://github.com/anthropics/claude-code/issues/61166

Evidence note: GitHub issue #61166 on anthropics/claude-code (opened May 21, 2026). User confirms OAuth login works but billing context maps to wrong Organization UID persisted in ~/.config/anthropic/configs/default.json. Verified fix by manually clearing cached credentials. Category: AI Coding Tools per SKILL.md mapping for Claude Code.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Claude Code OAuth authenticates successfully but binds to Organization's API billing instead of personal Max subscription; /status shows 'API Usage Billing' instead of 'Max Plan'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code OAuth authenticates successfully but binds to Organization's API billing instead of personal Max subscription; /status shows 'API Usage Billing' instead of 'Max Plan'`.
