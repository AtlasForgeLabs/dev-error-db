---
title: "Codex exceeded retry limit, last status: 429 Too Many Requests"
description: "Fix 429 rate limit error handling in OpenAI Codex app when hitting response endpoint DDoS-rate limits, distinguishing between usage quotas and request frequency caps Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "exceeded retry limit, last status: 429 Too Many Requests, request id: 9f9fe320aa92b10b-FRA"
common_causes:
  - "GitHub issue #22122 on openai/codex, opened ~6 days ago. Clear 429 error with request ID. Users confused between rate limit vs usage limit errors. Source: https://github.com/openai/codex/issues/22122."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-17"
published_at: "2026-05-17T21:37:11.080Z"
updated_at: "2026-05-17T21:37:11.080Z"
---

## What this error means

`exceeded retry limit, last status: 429 Too Many Requests, request id: 9f9fe320aa92b10b-FRA` is a OpenAI API failure pattern reported for developers trying to fix 429 rate limit error handling in openai codex app when hitting response endpoint ddos-rate limits, distinguishing between usage quotas and request frequency caps. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #22122 on openai/codex, opened ~6 days ago. Clear 429 error with request ID. Users confused between rate limit vs usage limit errors. Source: https://github.com/openai/codex/issues/22122.

## Common causes

- GitHub issue #22122 on openai/codex, opened ~6 days ago. Clear 429 error with request ID. Users confused between rate limit vs usage limit errors. Source: https://github.com/openai/codex/issues/22122.

## Quick fixes

1. Confirm the exact error signature matches `exceeded retry limit, last status: 429 Too Many Requests, request id: 9f9fe320aa92b10b-FRA`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/codex/issues/22122

Evidence note: GitHub issue #22122 on openai/codex, opened ~6 days ago. Clear 429 error with request ID. Users confused between rate limit vs usage limit errors. Source: https://github.com/openai/codex/issues/22122.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `exceeded retry limit, last status: 429 Too Many Requests, request id: 9f9fe320aa92b10b-FRA` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `exceeded retry limit, last status: 429 Too Many Requests, request id: 9f9fe320aa92b10b-FRA`.
