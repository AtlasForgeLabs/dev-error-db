---
title: "Claude Code Bypass/Dangerously Skip Permissions Broken Since v2.1.77"
description: "Fix regression where bypass/skip permissions UI fails in Claude Code v2.1.77+, forcing manual confirmation on every file edit Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Bypass/dangerously skip permissions now broken in all Claude Code versions newer than v2.1.77 — every edit requires clicking 'yes/accept'"
common_causes:
  - "GitHub issue #36168 on anthropics/claude-code: Confirmed regression — rolling back to v2.1.77 restores functionality. Users report extreme frustration with mandatory per-edit approval. Mapping: AI coding tool broken workflow → AI Coding Tools. This is a high-friction UX bug directly impacting paid subscription users."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-01"
published_at: "2026-06-01T00:44:25.665Z"
updated_at: "2026-06-01T00:44:25.665Z"
---

## What this error means

`Bypass/dangerously skip permissions now broken in all Claude Code versions newer than v2.1.77 — every edit requires clicking 'yes/accept'` is a Claude Code failure pattern reported for developers trying to fix regression where bypass/skip permissions ui fails in claude code v2.1.77+, forcing manual confirmation on every file edit. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #36168 on anthropics/claude-code: Confirmed regression — rolling back to v2.1.77 restores functionality. Users report extreme frustration with mandatory per-edit approval. Mapping: AI coding tool broken workflow → AI Coding Tools. This is a high-friction UX bug directly impacting paid subscription users.

## Common causes

- GitHub issue #36168 on anthropics/claude-code: Confirmed regression — rolling back to v2.1.77 restores functionality. Users report extreme frustration with mandatory per-edit approval. Mapping: AI coding tool broken workflow → AI Coding Tools. This is a high-friction UX bug directly impacting paid subscription users.

## Quick fixes

1. Confirm the exact error signature matches `Bypass/dangerously skip permissions now broken in all Claude Code versions newer than v2.1.77 — every edit requires clicking 'yes/accept'`.
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

- https://github.com/anthropics/claude-code/issues/36168

Evidence note: GitHub issue #36168 on anthropics/claude-code: Confirmed regression — rolling back to v2.1.77 restores functionality. Users report extreme frustration with mandatory per-edit approval. Mapping: AI coding tool broken workflow → AI Coding Tools. This is a high-friction UX bug directly impacting paid subscription users.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Bypass/dangerously skip permissions now broken in all Claude Code versions newer than v2.1.77 — every edit requires clicking 'yes/accept'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Bypass/dangerously skip permissions now broken in all Claude Code versions newer than v2.1.77 — every edit requires clicking 'yes/accept'`.
