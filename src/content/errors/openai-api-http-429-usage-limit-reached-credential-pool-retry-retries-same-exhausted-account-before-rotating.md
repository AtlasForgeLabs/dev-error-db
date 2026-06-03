---
title: "Credential pool rotation fails immediately on OpenAI Codex usage_limit_reached 429"
description: "Hermes Agent OAuth credential pool should immediately mark the exhausted Codex account as exhausted and rotate to the next available account on first 429 response containing error.type=usage_limit_reached, instead of retrying the exhausted credential once. Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "HTTP 429: usage_limit_reached — credential pool retry retries same exhausted account before rotating"
common_causes:
  - "GitHub issue #26388 (NousResearch/hermes-agent), opened May 15, 2026, closed via PR #27162 May 17, 2026. Follow-up comment reveals additional stale-state path: even after immediate rotation fix, pool entries marked last_status=exhausted remain stale until reset timestamp while live Codex usage endpoint reports allowed=true. Root cause: central 429 classifier treats usage_limit_reached as generic transient rate_limit instead of distinguishing quota-window exhaustion. Category mapping: involves OpenAI Codex Responses API via OAuth; commercial impact on paid subscription credential pooling."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "OpenAI API"
updated: "2026-06-03"
published_at: "2026-06-03T09:44:32.398Z"
updated_at: "2026-06-03T09:44:32.398Z"
---

## What this error means

`HTTP 429: usage_limit_reached — credential pool retry retries same exhausted account before rotating` is a OpenAI API failure pattern reported for developers trying to hermes agent oauth credential pool should immediately mark the exhausted codex account as exhausted and rotate to the next available account on first 429 response containing error.type=usage_limit_reached, instead of retrying the exhausted credential once.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #26388 (NousResearch/hermes-agent), opened May 15, 2026, closed via PR #27162 May 17, 2026. Follow-up comment reveals additional stale-state path: even after immediate rotation fix, pool entries marked last_status=exhausted remain stale until reset timestamp while live Codex usage endpoint reports allowed=true. Root cause: central 429 classifier treats usage_limit_reached as generic transient rate_limit instead of distinguishing quota-window exhaustion. Category mapping: involves OpenAI Codex Responses API via OAuth; commercial impact on paid subscription credential pooling.

## Common causes

- GitHub issue #26388 (NousResearch/hermes-agent), opened May 15, 2026, closed via PR #27162 May 17, 2026. Follow-up comment reveals additional stale-state path: even after immediate rotation fix, pool entries marked last_status=exhausted remain stale until reset timestamp while live Codex usage endpoint reports allowed=true. Root cause: central 429 classifier treats usage_limit_reached as generic transient rate_limit instead of distinguishing quota-window exhaustion. Category mapping: involves OpenAI Codex Responses API via OAuth; commercial impact on paid subscription credential pooling.

## Quick fixes

1. Confirm the exact error signature matches `HTTP 429: usage_limit_reached — credential pool retry retries same exhausted account before rotating`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/NousResearch/hermes-agent/issues/26388

Evidence note: GitHub issue #26388 (NousResearch/hermes-agent), opened May 15, 2026, closed via PR #27162 May 17, 2026. Follow-up comment reveals additional stale-state path: even after immediate rotation fix, pool entries marked last_status=exhausted remain stale until reset timestamp while live Codex usage endpoint reports allowed=true. Root cause: central 429 classifier treats usage_limit_reached as generic transient rate_limit instead of distinguishing quota-window exhaustion. Category mapping: involves OpenAI Codex Responses API via OAuth; commercial impact on paid subscription credential pooling.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `HTTP 429: usage_limit_reached — credential pool retry retries same exhausted account before rotating` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTTP 429: usage_limit_reached — credential pool retry retries same exhausted account before rotating`.
