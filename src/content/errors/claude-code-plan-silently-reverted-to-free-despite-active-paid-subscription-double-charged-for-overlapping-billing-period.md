---
title: "Double-charged after Max 5x plan silently downgraded to Free mid-cycle"
description: "Fix unexpected subscription downgrade to Free mid-cycle causing double charge and loss of paid access Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Plan silently reverted to Free despite active paid subscription; double charged for overlapping billing period"
common_causes:
  - "GitHub issue #61339 on anthropics/claude-code opened May 22, 2026 by M2316. Paid Max 5x subscription ($100 charge on May 4) silently downgraded to Free plan only 7 days into a fresh 30-day cycle, forcing forced re-purchase resulting in $110 double charge. No notification email, no in-app warning, no refund. Root cause likely: new subscription inherited old cycle expiration timer instead of starting fresh 30-day period. area:cost + bug labels, 5 comments, author actively fighting auto-duplicate-closure bot. High commercial value — directly affects paying users."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-22"
published_at: "2026-05-22T04:39:46.665Z"
updated_at: "2026-05-22T04:39:46.665Z"
---

## What this error means

`Plan silently reverted to Free despite active paid subscription; double charged for overlapping billing period` is a Claude Code failure pattern reported for developers trying to fix unexpected subscription downgrade to free mid-cycle causing double charge and loss of paid access. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #61339 on anthropics/claude-code opened May 22, 2026 by M2316. Paid Max 5x subscription ($100 charge on May 4) silently downgraded to Free plan only 7 days into a fresh 30-day cycle, forcing forced re-purchase resulting in $110 double charge. No notification email, no in-app warning, no refund. Root cause likely: new subscription inherited old cycle expiration timer instead of starting fresh 30-day period. area:cost + bug labels, 5 comments, author actively fighting auto-duplicate-closure bot. High commercial value — directly affects paying users.

## Common causes

- GitHub issue #61339 on anthropics/claude-code opened May 22, 2026 by M2316. Paid Max 5x subscription ($100 charge on May 4) silently downgraded to Free plan only 7 days into a fresh 30-day cycle, forcing forced re-purchase resulting in $110 double charge. No notification email, no in-app warning, no refund. Root cause likely: new subscription inherited old cycle expiration timer instead of starting fresh 30-day period. area:cost + bug labels, 5 comments, author actively fighting auto-duplicate-closure bot. High commercial value — directly affects paying users.

## Quick fixes

1. Confirm the exact error signature matches `Plan silently reverted to Free despite active paid subscription; double charged for overlapping billing period`.
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

- https://github.com/anthropics/claude-code/issues/61339

Evidence note: GitHub issue #61339 on anthropics/claude-code opened May 22, 2026 by M2316. Paid Max 5x subscription ($100 charge on May 4) silently downgraded to Free plan only 7 days into a fresh 30-day cycle, forcing forced re-purchase resulting in $110 double charge. No notification email, no in-app warning, no refund. Root cause likely: new subscription inherited old cycle expiration timer instead of starting fresh 30-day period. area:cost + bug labels, 5 comments, author actively fighting auto-duplicate-closure bot. High commercial value — directly affects paying users.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Plan silently reverted to Free despite active paid subscription; double charged for overlapping billing period` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Plan silently reverted to Free despite active paid subscription; double charged for overlapping billing period`.
