---
title: "Ollama Cloud Pro Service Outage — All Cloud Models Unusable"
description: "Fix Ollama Cloud returning empty responses or timeouts for all cloud models on Pro plan Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "Ollama Cloud Pro: 95% failure rate — empty responses and timeouts on /api/chat for all cloud models"
common_causes:
  - "Ollama Cloud Pro subscribers ($20/month) experience a 95% failure rate (5% success) across all cloud models (glm-5.1, kimi-k2.5, qwen3.5, deepseek-v3.2). Both /api/chat and /api/generate endpoints return empty responses or timeouts. No status page, no incident communication, support tickets ignored 2+ weeks. Multiple related issues (#15419, #14673, #15290) document sustained outage."
  - "Ollama Cloud Pro ($20/mo) has 5% success rate across all 4 cloud models tested. Both /api/chat and /api/generate fail with empty/timeout responses. Local non-cloud models work fine, ruling out client-side issues. Multiple related issues confirm sustained outage with 29.7%+ failure rates documented since early April 2026. 44+ comments on primary issue."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Ollama cloud 503 Service Unavailable"
  - "Ollama EOF errors on cloud models"
  - "Ollama socket closure on inference"
updated: "2026-05-11"
---

## What this error means

`Ollama Cloud Pro: 95% failure rate — empty responses and timeouts on /api/chat for all cloud models` is a Ollama failure pattern reported for developers trying to fix ollama cloud returning empty responses or timeouts for all cloud models on pro plan. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Ollama Cloud Pro ($20/mo) has 5% success rate across all 4 cloud models tested. Both /api/chat and /api/generate fail with empty/timeout responses. Local non-cloud models work fine, ruling out client-side issues. Multiple related issues confirm sustained outage with 29.7%+ failure rates documented since early April 2026. 44+ comments on primary issue.

## Common causes

- Ollama Cloud Pro subscribers ($20/month) experience a 95% failure rate (5% success) across all cloud models (glm-5.1, kimi-k2.5, qwen3.5, deepseek-v3.2). Both /api/chat and /api/generate endpoints return empty responses or timeouts. No status page, no incident communication, support tickets ignored 2+ weeks. Multiple related issues (#15419, #14673, #15290) document sustained outage.
- Ollama Cloud Pro ($20/mo) has 5% success rate across all 4 cloud models tested. Both /api/chat and /api/generate fail with empty/timeout responses. Local non-cloud models work fine, ruling out client-side issues. Multiple related issues confirm sustained outage with 29.7%+ failure rates documented since early April 2026. 44+ comments on primary issue.

## Quick fixes

1. Confirm the exact error signature matches `Ollama Cloud Pro: 95% failure rate — empty responses and timeouts on /api/chat for all cloud models`.
2. Check the Ollama account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/ollama/ollama/issues/15453
- https://github.com/ollama/ollama/issues/15419
- https://github.com/ollama/ollama/issues/14673

Evidence note: Ollama Cloud Pro ($20/mo) has 5% success rate across all 4 cloud models tested. Both /api/chat and /api/generate fail with empty/timeout responses. Local non-cloud models work fine, ruling out client-side issues. Multiple related issues confirm sustained outage with 29.7%+ failure rates documented since early April 2026. 44+ comments on primary issue.

## Related errors

- Ollama cloud 503 Service Unavailable
- Ollama EOF errors on cloud models
- Ollama socket closure on inference

## FAQ

### What should I check first?

Start with the exact `Ollama Cloud Pro: 95% failure rate — empty responses and timeouts on /api/chat for all cloud models` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Ollama Cloud Pro: 95% failure rate — empty responses and timeouts on /api/chat for all cloud models`.
