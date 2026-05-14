---
title: "Claude Code cache TTL silently regressed from 1h to 5m around early March 2026, causing quota and cost inflation"
description: "Understand why Claude Code cache TTL changed from 1 hour to 5 minutes and fix cost inflation Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Cache TTL silently regressed from 1h to 5m causing 20-32% cache creation cost increase"
common_causes:
  - "Analysis of 119,866 API calls shows Anthropic silently changed prompt cache TTL from 1h to 5m, causing 20-32% increase in cache creation costs and quota consumption spikes"
  - "335 reactions. Detailed analysis of JSONL session files across 2 machines totaling 119,866 API calls. Cache TTL changed from 1h to 5m in early March 2026. 20-32% increase in cache creation costs. Both Linux and Windows machines show same behavioral shift."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Claude Code Pro Max quota exhaustion"
  - "Claude Code disabling telemetry disables cache TTL"
updated: "2026-05-14"
published_at: "2026-05-14T09:13:19.404Z"
updated_at: "2026-05-14T09:13:19.404Z"
---

## What this error means

`Cache TTL silently regressed from 1h to 5m causing 20-32% cache creation cost increase` is a Claude Code failure pattern reported for developers trying to understand why claude code cache ttl changed from 1 hour to 5 minutes and fix cost inflation. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

335 reactions. Detailed analysis of JSONL session files across 2 machines totaling 119,866 API calls. Cache TTL changed from 1h to 5m in early March 2026. 20-32% increase in cache creation costs. Both Linux and Windows machines show same behavioral shift.

## Common causes

- Analysis of 119,866 API calls shows Anthropic silently changed prompt cache TTL from 1h to 5m, causing 20-32% increase in cache creation costs and quota consumption spikes
- 335 reactions. Detailed analysis of JSONL session files across 2 machines totaling 119,866 API calls. Cache TTL changed from 1h to 5m in early March 2026. 20-32% increase in cache creation costs. Both Linux and Windows machines show same behavioral shift.

## Quick fixes

1. Confirm the exact error signature matches `Cache TTL silently regressed from 1h to 5m causing 20-32% cache creation cost increase`.
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

Evidence note: 335 reactions. Detailed analysis of JSONL session files across 2 machines totaling 119,866 API calls. Cache TTL changed from 1h to 5m in early March 2026. 20-32% increase in cache creation costs. Both Linux and Windows machines show same behavioral shift.

## Related errors

- Claude Code Pro Max quota exhaustion
- Claude Code disabling telemetry disables cache TTL

## FAQ

### What should I check first?

Start with the exact `Cache TTL silently regressed from 1h to 5m causing 20-32% cache creation cost increase` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Cache TTL silently regressed from 1h to 5m causing 20-32% cache creation cost increase`.
