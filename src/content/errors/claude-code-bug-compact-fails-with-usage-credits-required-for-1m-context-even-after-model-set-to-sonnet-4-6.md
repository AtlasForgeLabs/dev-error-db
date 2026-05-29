---
title: "Claude Code /compact Fails with Usage Credits Required for 1M Context Even After Model Set to Sonnet 4.6"
description: "Fix compact command wrongly demanding extra usage credits when running on Sonnet 4.6 which should include the quota Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[Bug] /compact fails with \"Usage credits required for 1M context\" even after /model set to Sonnet 4.6"
common_causes:
  - "GitHub issue #63634 opened ~10h ago on anthropics/claude-code. Labeled area:core, area:cost, bug, has repro, platform:linux. Billing/credits bug — core functionality triggers unexpected payment wall. Very high commercial impact for paid users. Category maps to AI Coding Tools."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-29"
published_at: "2026-05-29T23:43:27.663Z"
updated_at: "2026-05-29T23:43:27.663Z"
---

## What this error means

`[Bug] /compact fails with "Usage credits required for 1M context" even after /model set to Sonnet 4.6` is a Claude Code failure pattern reported for developers trying to fix compact command wrongly demanding extra usage credits when running on sonnet 4.6 which should include the quota. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #63634 opened ~10h ago on anthropics/claude-code. Labeled area:core, area:cost, bug, has repro, platform:linux. Billing/credits bug — core functionality triggers unexpected payment wall. Very high commercial impact for paid users. Category maps to AI Coding Tools.

## Common causes

- GitHub issue #63634 opened ~10h ago on anthropics/claude-code. Labeled area:core, area:cost, bug, has repro, platform:linux. Billing/credits bug — core functionality triggers unexpected payment wall. Very high commercial impact for paid users. Category maps to AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `[Bug] /compact fails with "Usage credits required for 1M context" even after /model set to Sonnet 4.6`.
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

- https://github.com/anthropics/claude-code/issues/63634

Evidence note: GitHub issue #63634 opened ~10h ago on anthropics/claude-code. Labeled area:core, area:cost, bug, has repro, platform:linux. Billing/credits bug — core functionality triggers unexpected payment wall. Very high commercial impact for paid users. Category maps to AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[Bug] /compact fails with "Usage credits required for 1M context" even after /model set to Sonnet 4.6` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[Bug] /compact fails with "Usage credits required for 1M context" even after /model set to Sonnet 4.6`.
