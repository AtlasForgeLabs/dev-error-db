---
title: "Claude Code 400 role system is not supported after large session compaction"
description: "Repair Claude Code session state corruption where post-compaction request construction injects system-role message into messages array, making session permanently unrecoverable without /clear Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "API Error: 400 role 'system' is not supported on this model — client builds malformed request after large twice-compacted session"
common_causes:
  - "GitHub issue #60947 on anthropics/claude-code filed May 20 2026. Detailed repro with 5355 transcript events, two compaction boundaries (manual preTokens:1001871, auto preTokens:974919). Session becomes unrecoverable in-place since /compact fails with same error. Verified via grep: 0 hits for '\"role\":\"system\"' in stored history. Bug is in request-build time synthesis path. High-severity data-loss bug affecting long-running production sessions."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-20"
published_at: "2026-05-20T20:38:30.373Z"
updated_at: "2026-05-20T20:38:30.373Z"
---

## What this error means

`API Error: 400 role 'system' is not supported on this model — client builds malformed request after large twice-compacted session` is a Claude Code failure pattern reported for developers trying to repair claude code session state corruption where post-compaction request construction injects system-role message into messages array, making session permanently unrecoverable without /clear. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #60947 on anthropics/claude-code filed May 20 2026. Detailed repro with 5355 transcript events, two compaction boundaries (manual preTokens:1001871, auto preTokens:974919). Session becomes unrecoverable in-place since /compact fails with same error. Verified via grep: 0 hits for '"role":"system"' in stored history. Bug is in request-build time synthesis path. High-severity data-loss bug affecting long-running production sessions.

## Common causes

- GitHub issue #60947 on anthropics/claude-code filed May 20 2026. Detailed repro with 5355 transcript events, two compaction boundaries (manual preTokens:1001871, auto preTokens:974919). Session becomes unrecoverable in-place since /compact fails with same error. Verified via grep: 0 hits for '"role":"system"' in stored history. Bug is in request-build time synthesis path. High-severity data-loss bug affecting long-running production sessions.

## Quick fixes

1. Confirm the exact error signature matches `API Error: 400 role 'system' is not supported on this model — client builds malformed request after large twice-compacted session`.
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

- https://github.com/anthropics/claude-code/issues/60947

Evidence note: GitHub issue #60947 on anthropics/claude-code filed May 20 2026. Detailed repro with 5355 transcript events, two compaction boundaries (manual preTokens:1001871, auto preTokens:974919). Session becomes unrecoverable in-place since /compact fails with same error. Verified via grep: 0 hits for '"role":"system"' in stored history. Bug is in request-build time synthesis path. High-severity data-loss bug affecting long-running production sessions.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `API Error: 400 role 'system' is not supported on this model — client builds malformed request after large twice-compacted session` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: 400 role 'system' is not supported on this model — client builds malformed request after large twice-compacted session`.
