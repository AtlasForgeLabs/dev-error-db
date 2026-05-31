---
title: "OpenAI Codex False 429 Rate Limit Despite Remaining Usage"
description: "Fix unexpected 429 rate limit error when usage display shows plenty of tokens/quota remaining in OpenAI Codex CLI Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "\"You've exceeded the rate limit, please slow down and try again after 60.x seconds\" — despite ChatGPT Pro showing ~61% usage remaining in the 5-hour window; returns 429 Too Many Requests with code: rate_limit_exceeded on gpt-5.2-codex"
common_causes:
  - "GitHub issue openai/codex#9135 — User with ChatGPT Pro subscription sees false positive 429 rate limit while usage dashboard indicates 61% remaining. Distinct from generic '429 Too Many Requests' (already covered) because this describes a false-positive rate limit bug during peak usage times. Category: OpenAI API (paid per-token billing impact). Scored high due to direct billing/proxy impact."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-31"
published_at: "2026-05-31T08:44:23.983Z"
updated_at: "2026-05-31T08:44:23.983Z"
---

## What this error means

`"You've exceeded the rate limit, please slow down and try again after 60.x seconds" — despite ChatGPT Pro showing ~61% usage remaining in the 5-hour window; returns 429 Too Many Requests with code: rate_limit_exceeded on gpt-5.2-codex` is a OpenAI API failure pattern reported for developers trying to fix unexpected 429 rate limit error when usage display shows plenty of tokens/quota remaining in openai codex cli. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue openai/codex#9135 — User with ChatGPT Pro subscription sees false positive 429 rate limit while usage dashboard indicates 61% remaining. Distinct from generic '429 Too Many Requests' (already covered) because this describes a false-positive rate limit bug during peak usage times. Category: OpenAI API (paid per-token billing impact). Scored high due to direct billing/proxy impact.

## Common causes

- GitHub issue openai/codex#9135 — User with ChatGPT Pro subscription sees false positive 429 rate limit while usage dashboard indicates 61% remaining. Distinct from generic '429 Too Many Requests' (already covered) because this describes a false-positive rate limit bug during peak usage times. Category: OpenAI API (paid per-token billing impact). Scored high due to direct billing/proxy impact.

## Quick fixes

1. Confirm the exact error signature matches `"You've exceeded the rate limit, please slow down and try again after 60.x seconds" — despite ChatGPT Pro showing ~61% usage remaining in the 5-hour window; returns 429 Too Many Requests with code: rate_limit_exceeded on gpt-5.2-codex`.
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

- https://github.com/openai/codex/issues/9135

Evidence note: GitHub issue openai/codex#9135 — User with ChatGPT Pro subscription sees false positive 429 rate limit while usage dashboard indicates 61% remaining. Distinct from generic '429 Too Many Requests' (already covered) because this describes a false-positive rate limit bug during peak usage times. Category: OpenAI API (paid per-token billing impact). Scored high due to direct billing/proxy impact.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `"You've exceeded the rate limit, please slow down and try again after 60.x seconds" — despite ChatGPT Pro showing ~61% usage remaining in the 5-hour window; returns 429 Too Many Requests with code: rate_limit_exceeded on gpt-5.2-codex` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"You've exceeded the rate limit, please slow down and try again after 60.x seconds" — despite ChatGPT Pro showing ~61% usage remaining in the 5-hour window; returns 429 Too Many Requests with code: rate_limit_exceeded on gpt-5.2-codex`.
