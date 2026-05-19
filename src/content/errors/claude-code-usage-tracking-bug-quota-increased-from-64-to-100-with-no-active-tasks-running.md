---
title: "Serious Usage Tracking Bug: Quota Jumped from 64% to 100% With No Active Tasks"
description: "Find why Claude Code usage counter jumps from 64% to 100% automatically when no prompts are being sent or tasks are actively running Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Usage tracking bug: quota increased from 64% to 100% with no active tasks running"
common_causes:
  - "GitHub anthropics/claude-code#59315 opened May 15, 2026: Dramatic example of usage tracking malfunction — 36% quota consumed in zero activity. External-labeled bug confirms reported by non-Anthropic sources. Severe impact on paid Max plan users who lose access unexpectedly."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-19"
published_at: "2026-05-19T00:37:14.654Z"
updated_at: "2026-05-19T00:37:14.654Z"
---

## What this error means

`Usage tracking bug: quota increased from 64% to 100% with no active tasks running` is a Claude Code failure pattern reported for developers trying to find why claude code usage counter jumps from 64% to 100% automatically when no prompts are being sent or tasks are actively running. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub anthropics/claude-code#59315 opened May 15, 2026: Dramatic example of usage tracking malfunction — 36% quota consumed in zero activity. External-labeled bug confirms reported by non-Anthropic sources. Severe impact on paid Max plan users who lose access unexpectedly.

## Common causes

- GitHub anthropics/claude-code#59315 opened May 15, 2026: Dramatic example of usage tracking malfunction — 36% quota consumed in zero activity. External-labeled bug confirms reported by non-Anthropic sources. Severe impact on paid Max plan users who lose access unexpectedly.

## Quick fixes

1. Confirm the exact error signature matches `Usage tracking bug: quota increased from 64% to 100% with no active tasks running`.
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

- https://github.com/anthropics/claude-code/issues/59315

Evidence note: GitHub anthropics/claude-code#59315 opened May 15, 2026: Dramatic example of usage tracking malfunction — 36% quota consumed in zero activity. External-labeled bug confirms reported by non-Anthropic sources. Severe impact on paid Max plan users who lose access unexpectedly.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Usage tracking bug: quota increased from 64% to 100% with no active tasks running` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Usage tracking bug: quota increased from 64% to 100% with no active tasks running`.
