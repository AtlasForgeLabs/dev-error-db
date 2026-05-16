---
title: "Fix Claude Code Cowork SSL certificate expired error on Windows — API calls fail before VM rootfs download"
description: "Resolve Claude Code SSL certificate expired error on Windows 11 Enterprise that blocks all API calls during Cowork mode Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "API Error: Unable to connect to API: SSL certificate has expired"
common_causes:
  - "anthropics/claude-code#52112 — Claude Cowork fails with SSL certificate expired on Windows 11 Enterprise v1.3561.0. API calls fail before VM rootfs download completes. Specific error signature, high urgency for paid Claude Code users. Category mapping: Claude Code → AI Coding Tools (exact mapping)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-16"
published_at: "2026-05-16T09:13:25.125Z"
updated_at: "2026-05-16T09:13:25.125Z"
---

## What this error means

`API Error: Unable to connect to API: SSL certificate has expired` is a Claude Code failure pattern reported for developers trying to resolve claude code ssl certificate expired error on windows 11 enterprise that blocks all api calls during cowork mode. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

anthropics/claude-code#52112 — Claude Cowork fails with SSL certificate expired on Windows 11 Enterprise v1.3561.0. API calls fail before VM rootfs download completes. Specific error signature, high urgency for paid Claude Code users. Category mapping: Claude Code → AI Coding Tools (exact mapping).

## Common causes

- anthropics/claude-code#52112 — Claude Cowork fails with SSL certificate expired on Windows 11 Enterprise v1.3561.0. API calls fail before VM rootfs download completes. Specific error signature, high urgency for paid Claude Code users. Category mapping: Claude Code → AI Coding Tools (exact mapping).

## Quick fixes

1. Confirm the exact error signature matches `API Error: Unable to connect to API: SSL certificate has expired`.
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

- https://github.com/anthropics/claude-code/issues/52112

Evidence note: anthropics/claude-code#52112 — Claude Cowork fails with SSL certificate expired on Windows 11 Enterprise v1.3561.0. API calls fail before VM rootfs download completes. Specific error signature, high urgency for paid Claude Code users. Category mapping: Claude Code → AI Coding Tools (exact mapping).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `API Error: Unable to connect to API: SSL certificate has expired` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: Unable to connect to API: SSL certificate has expired`.
