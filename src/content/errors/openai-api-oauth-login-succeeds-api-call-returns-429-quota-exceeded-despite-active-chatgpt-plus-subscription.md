---
title: "ChatGPT Plus OAuth succeeds but third-party tools return 429 quota exceeded"
description: "Resolve 429 quota error when using third-party apps with ChatGPT Plus OAuth authentication Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "OAuth login succeeds → API call returns 429 quota exceeded despite active ChatGPT Plus subscription"
common_causes:
  - "GitHub issue openai/openai-python#2951 — Auth flow works but quota routing fails for third-party Codex/OAuth integrations. Open since Mar 10 2026, confirmed by multiple commenters. Not in covered-errors.md. Category: OpenAI API — billing/quota routing failure on paid service."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-21"
published_at: "2026-05-21T17:39:45.123Z"
updated_at: "2026-05-21T17:39:45.123Z"
---

## What this error means

`OAuth login succeeds → API call returns 429 quota exceeded despite active ChatGPT Plus subscription` is a OpenAI API failure pattern reported for developers trying to resolve 429 quota error when using third-party apps with chatgpt plus oauth authentication. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue openai/openai-python#2951 — Auth flow works but quota routing fails for third-party Codex/OAuth integrations. Open since Mar 10 2026, confirmed by multiple commenters. Not in covered-errors.md. Category: OpenAI API — billing/quota routing failure on paid service.

## Common causes

- GitHub issue openai/openai-python#2951 — Auth flow works but quota routing fails for third-party Codex/OAuth integrations. Open since Mar 10 2026, confirmed by multiple commenters. Not in covered-errors.md. Category: OpenAI API — billing/quota routing failure on paid service.

## Quick fixes

1. Confirm the exact error signature matches `OAuth login succeeds → API call returns 429 quota exceeded despite active ChatGPT Plus subscription`.
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

- https://github.com/openai/openai-python/issues/2951

Evidence note: GitHub issue openai/openai-python#2951 — Auth flow works but quota routing fails for third-party Codex/OAuth integrations. Open since Mar 10 2026, confirmed by multiple commenters. Not in covered-errors.md. Category: OpenAI API — billing/quota routing failure on paid service.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `OAuth login succeeds → API call returns 429 quota exceeded despite active ChatGPT Plus subscription` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth login succeeds → API call returns 429 quota exceeded despite active ChatGPT Plus subscription`.
