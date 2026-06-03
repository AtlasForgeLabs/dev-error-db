---
title: "Claude Code Desktop: Session visible in UI but 'Session not found on disk'"
description: "Resolve mismatch between Claude Code desktop UI showing a session and the underlying JSONL storage having a different internal session ID, causing session corruption Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Session visible in UI but \"Session not found on disk\" — JSONL file exists but has mismatched internal session ID"
common_causes:
  - "Claude Code Issue #63904 — Open issue by WebGuyCom, opened May 30 2026, updated Jun 3 2026. Has 'has repro' label confirming detailed reproduction steps exist. Platform: Windows primarily but affects all users relying on session persistence. Core usability issue for paid desktop users. Distinct error: files exist but session IDs don't match, causing data-loss risk."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-03"
published_at: "2026-06-03T10:44:32.520Z"
updated_at: "2026-06-03T10:44:32.520Z"
---

## What this error means

`Session visible in UI but "Session not found on disk" — JSONL file exists but has mismatched internal session ID` is a Claude Code failure pattern reported for developers trying to resolve mismatch between claude code desktop ui showing a session and the underlying jsonl storage having a different internal session id, causing session corruption. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Claude Code Issue #63904 — Open issue by WebGuyCom, opened May 30 2026, updated Jun 3 2026. Has 'has repro' label confirming detailed reproduction steps exist. Platform: Windows primarily but affects all users relying on session persistence. Core usability issue for paid desktop users. Distinct error: files exist but session IDs don't match, causing data-loss risk.

## Common causes

- Claude Code Issue #63904 — Open issue by WebGuyCom, opened May 30 2026, updated Jun 3 2026. Has 'has repro' label confirming detailed reproduction steps exist. Platform: Windows primarily but affects all users relying on session persistence. Core usability issue for paid desktop users. Distinct error: files exist but session IDs don't match, causing data-loss risk.

## Quick fixes

1. Confirm the exact error signature matches `Session visible in UI but "Session not found on disk" — JSONL file exists but has mismatched internal session ID`.
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

- https://github.com/anthropics/claude-code/issues/63904

Evidence note: Claude Code Issue #63904 — Open issue by WebGuyCom, opened May 30 2026, updated Jun 3 2026. Has 'has repro' label confirming detailed reproduction steps exist. Platform: Windows primarily but affects all users relying on session persistence. Core usability issue for paid desktop users. Distinct error: files exist but session IDs don't match, causing data-loss risk.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Session visible in UI but "Session not found on disk" — JSONL file exists but has mismatched internal session ID` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Session visible in UI but "Session not found on disk" — JSONL file exists but has mismatched internal session ID`.
