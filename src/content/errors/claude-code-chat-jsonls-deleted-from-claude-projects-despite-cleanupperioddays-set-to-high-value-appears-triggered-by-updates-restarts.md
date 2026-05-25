---
title: "[BUG] Chat JSONLs deleted from ~/.claude/projects/ despite cleanupPeriodDays set high"
description: "Fix config-inconsistent session persistence: users explicitly set high cleanup retention period but chat logs still get deleted unexpectedly during software updates or restarts. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Chat JSONLs deleted from ~/.claude/projects/ despite cleanupPeriodDays set to high value — appears triggered by updates/restarts"
common_causes:
  - "Issue #62272 on anthropics/claude-code: Directly contradicts user-configured retention policy. Area:core, data-loss, duplicate tags. 1 comment. Clear actionable bug affecting data persistence reliability. Low difficulty score since specific config path provides clear resolution target."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-25"
published_at: "2026-05-25T18:43:14.540Z"
updated_at: "2026-05-25T18:43:14.540Z"
---

## What this error means

`Chat JSONLs deleted from ~/.claude/projects/ despite cleanupPeriodDays set to high value — appears triggered by updates/restarts` is a Claude Code failure pattern reported for developers trying to fix config-inconsistent session persistence: users explicitly set high cleanup retention period but chat logs still get deleted unexpectedly during software updates or restarts.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #62272 on anthropics/claude-code: Directly contradicts user-configured retention policy. Area:core, data-loss, duplicate tags. 1 comment. Clear actionable bug affecting data persistence reliability. Low difficulty score since specific config path provides clear resolution target.

## Common causes

- Issue #62272 on anthropics/claude-code: Directly contradicts user-configured retention policy. Area:core, data-loss, duplicate tags. 1 comment. Clear actionable bug affecting data persistence reliability. Low difficulty score since specific config path provides clear resolution target.

## Quick fixes

1. Confirm the exact error signature matches `Chat JSONLs deleted from ~/.claude/projects/ despite cleanupPeriodDays set to high value — appears triggered by updates/restarts`.
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

- https://github.com/anthropics/claude-code/issues/62272

Evidence note: Issue #62272 on anthropics/claude-code: Directly contradicts user-configured retention policy. Area:core, data-loss, duplicate tags. 1 comment. Clear actionable bug affecting data persistence reliability. Low difficulty score since specific config path provides clear resolution target.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Chat JSONLs deleted from ~/.claude/projects/ despite cleanupPeriodDays set to high value — appears triggered by updates/restarts` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Chat JSONLs deleted from ~/.claude/projects/ despite cleanupPeriodDays set to high value — appears triggered by updates/restarts`.
