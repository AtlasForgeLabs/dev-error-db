---
title: "Claude Code Cache TTL Regression — 1 Hour to 5 Minutes Causing Cost Spike"
description: "Diagnose why Claude Code cache expires faster than expected, increasing API costs Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Cache TTL silently regressed from 1h to 5m, causing quota and cost inflation"
common_causes:
  - "Developers analyzing session JSONL data discovered prompt cache TTL dropped from 1 hour to 5 minutes, dramatically increasing token costs and quota consumption. Direct financial impact on heavy users."
  - "336 reactions on #46829, 56 comments. Analysis of session JSONL spanning Jan–Apr 2026 shows cache TTL change. Issue #46917 (217 reactions) confirms cache_creation inflation by ~20K tokens in v2.1.100+. Both issues point to server-side regression."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Claude Code cache_creation inflated tokens"
  - "Claude Code session limits exhausted fast"
updated: "2026-05-14"
published_at: "2026-05-14T18:13:20.466Z"
updated_at: "2026-05-14T18:13:20.466Z"
---

## What this error means

`Cache TTL silently regressed from 1h to 5m, causing quota and cost inflation` is a Claude Code failure pattern reported for developers trying to diagnose why claude code cache expires faster than expected, increasing api costs. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

336 reactions on #46829, 56 comments. Analysis of session JSONL spanning Jan–Apr 2026 shows cache TTL change. Issue #46917 (217 reactions) confirms cache_creation inflation by ~20K tokens in v2.1.100+. Both issues point to server-side regression.

## Common causes

- Developers analyzing session JSONL data discovered prompt cache TTL dropped from 1 hour to 5 minutes, dramatically increasing token costs and quota consumption. Direct financial impact on heavy users.
- 336 reactions on #46829, 56 comments. Analysis of session JSONL spanning Jan–Apr 2026 shows cache TTL change. Issue #46917 (217 reactions) confirms cache_creation inflation by ~20K tokens in v2.1.100+. Both issues point to server-side regression.

## Quick fixes

1. Confirm the exact error signature matches `Cache TTL silently regressed from 1h to 5m, causing quota and cost inflation`.
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

- https://github.com/anthropics/claude-code/issues/46829
- https://github.com/anthropics/claude-code/issues/46917

Evidence note: 336 reactions on #46829, 56 comments. Analysis of session JSONL spanning Jan–Apr 2026 shows cache TTL change. Issue #46917 (217 reactions) confirms cache_creation inflation by ~20K tokens in v2.1.100+. Both issues point to server-side regression.

## Related errors

- Claude Code cache_creation inflated tokens
- Claude Code session limits exhausted fast

## FAQ

### What should I check first?

Start with the exact `Cache TTL silently regressed from 1h to 5m, causing quota and cost inflation` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Cache TTL silently regressed from 1h to 5m, causing quota and cost inflation`.
