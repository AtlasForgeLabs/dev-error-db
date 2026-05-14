---
title: "Claude Code Context Compaction Hallucinates Pending Tasks and Executes Unintended Actions"
description: "Fix Claude Code compaction summarizing audit findings as actionable tasks Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code context compaction generates fabricated pending tasks leading to unintended action initiation"
common_causes:
  - "Context compaction converts completed audit findings into fabricated pending tasks. Combined with 'resume directly without asking' prompt, causes model to execute work never requested by user."
  - "Reproduced in long multi-task session. Compaction summary conflated audit findings with user-requested tasks. In sessions with pre-authorized permissions, this would execute without safeguard."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Claude Code context window exceeded"
  - "Claude Code tool use error"
updated: "2026-05-14"
published_at: "2026-05-14T20:13:20.740Z"
updated_at: "2026-05-14T20:13:20.740Z"
---

## What this error means

`Claude Code context compaction generates fabricated pending tasks leading to unintended action initiation` is a Claude Code failure pattern reported for developers trying to fix claude code compaction summarizing audit findings as actionable tasks. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Reproduced in long multi-task session. Compaction summary conflated audit findings with user-requested tasks. In sessions with pre-authorized permissions, this would execute without safeguard.

## Common causes

- Context compaction converts completed audit findings into fabricated pending tasks. Combined with 'resume directly without asking' prompt, causes model to execute work never requested by user.
- Reproduced in long multi-task session. Compaction summary conflated audit findings with user-requested tasks. In sessions with pre-authorized permissions, this would execute without safeguard.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code context compaction generates fabricated pending tasks leading to unintended action initiation`.
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

- https://github.com/anthropics/claude-code/issues/59190

Evidence note: Reproduced in long multi-task session. Compaction summary conflated audit findings with user-requested tasks. In sessions with pre-authorized permissions, this would execute without safeguard.

## Related errors

- Claude Code context window exceeded
- Claude Code tool use error

## FAQ

### What should I check first?

Start with the exact `Claude Code context compaction generates fabricated pending tasks leading to unintended action initiation` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code context compaction generates fabricated pending tasks leading to unintended action initiation`.
