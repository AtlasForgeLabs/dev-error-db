---
title: "UltraReview consumes free quota on failed runs without completing review or surfacing error status"
description: "Prevent ultraReview from consuming free quota credits when run fails mid-pipeline and ensure failed runs report a distinct error status instead of falsely reporting completed+[] Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "/ultrareview fails at Verify stage (Review failed), Dedupe never starts, yet both failed runs count against free quota (3 free runs); completion reports status: completed with empty findings array [] making failures indistinguishable from clean reviews"
common_causes:
  - "GitHub issue #61096 on anthropics/claude-code (opened May 21, 2026). Two consecutive failures each consumed one of three free ultrareview runs. Session IDs recorded. Duplicate risk flagged: github-actions bot identified 3 possible duplicates (#58036, #54115, #55615). Category: AI Coding Tools per SKILL.md. High commercial value — direct revenue impact on free-tier users who waste limited credits."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-21"
published_at: "2026-05-21T23:39:45.971Z"
updated_at: "2026-05-21T23:39:45.971Z"
---

## What this error means

`/ultrareview fails at Verify stage (Review failed), Dedupe never starts, yet both failed runs count against free quota (3 free runs); completion reports status: completed with empty findings array [] making failures indistinguishable from clean reviews` is a Claude Code failure pattern reported for developers trying to prevent ultrareview from consuming free quota credits when run fails mid-pipeline and ensure failed runs report a distinct error status instead of falsely reporting completed+[]. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #61096 on anthropics/claude-code (opened May 21, 2026). Two consecutive failures each consumed one of three free ultrareview runs. Session IDs recorded. Duplicate risk flagged: github-actions bot identified 3 possible duplicates (#58036, #54115, #55615). Category: AI Coding Tools per SKILL.md. High commercial value — direct revenue impact on free-tier users who waste limited credits.

## Common causes

- GitHub issue #61096 on anthropics/claude-code (opened May 21, 2026). Two consecutive failures each consumed one of three free ultrareview runs. Session IDs recorded. Duplicate risk flagged: github-actions bot identified 3 possible duplicates (#58036, #54115, #55615). Category: AI Coding Tools per SKILL.md. High commercial value — direct revenue impact on free-tier users who waste limited credits.

## Quick fixes

1. Confirm the exact error signature matches `/ultrareview fails at Verify stage (Review failed), Dedupe never starts, yet both failed runs count against free quota (3 free runs); completion reports status: completed with empty findings array [] making failures indistinguishable from clean reviews`.
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

- https://github.com/anthropics/claude-code/issues/61096

Evidence note: GitHub issue #61096 on anthropics/claude-code (opened May 21, 2026). Two consecutive failures each consumed one of three free ultrareview runs. Session IDs recorded. Duplicate risk flagged: github-actions bot identified 3 possible duplicates (#58036, #54115, #55615). Category: AI Coding Tools per SKILL.md. High commercial value — direct revenue impact on free-tier users who waste limited credits.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `/ultrareview fails at Verify stage (Review failed), Dedupe never starts, yet both failed runs count against free quota (3 free runs); completion reports status: completed with empty findings array [] making failures indistinguishable from clean reviews` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `/ultrareview fails at Verify stage (Review failed), Dedupe never starts, yet both failed runs count against free quota (3 free runs); completion reports status: completed with empty findings array [] making failures indistinguishable from clean reviews`.
