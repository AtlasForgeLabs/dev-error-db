---
title: "Third-party provider calls return 429 quota exceeded even after ChatGPT Plus OAuth succeeds"
description: "Fix quota/rate-limit mismatch where ChatGPT Plus OAuth authenticates but downstream Codex/API calls get blocked by 429 rate limits Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "OAuth succeeds but third-party calls return 429 quota exceeded"
common_causes:
  - "GitHub issue #2951 in openai/openai-python (opened Mar 10, 2026). Authenticated users hit 429 quota exceeded on third-party model calls despite successful OAuth flow. Affects paid subscribers trying to use external model integrations. Strong billing impact for users paying for API access. Maps to 'OpenAI API' category."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-19"
published_at: "2026-05-19T14:37:16.601Z"
updated_at: "2026-05-19T14:37:16.601Z"
---

## What this error means

`OAuth succeeds but third-party calls return 429 quota exceeded` is a OpenAI API failure pattern reported for developers trying to fix quota/rate-limit mismatch where chatgpt plus oauth authenticates but downstream codex/api calls get blocked by 429 rate limits. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #2951 in openai/openai-python (opened Mar 10, 2026). Authenticated users hit 429 quota exceeded on third-party model calls despite successful OAuth flow. Affects paid subscribers trying to use external model integrations. Strong billing impact for users paying for API access. Maps to 'OpenAI API' category.

## Common causes

- GitHub issue #2951 in openai/openai-python (opened Mar 10, 2026). Authenticated users hit 429 quota exceeded on third-party model calls despite successful OAuth flow. Affects paid subscribers trying to use external model integrations. Strong billing impact for users paying for API access. Maps to 'OpenAI API' category.

## Quick fixes

1. Confirm the exact error signature matches `OAuth succeeds but third-party calls return 429 quota exceeded`.
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

Evidence note: GitHub issue #2951 in openai/openai-python (opened Mar 10, 2026). Authenticated users hit 429 quota exceeded on third-party model calls despite successful OAuth flow. Affects paid subscribers trying to use external model integrations. Strong billing impact for users paying for API access. Maps to 'OpenAI API' category.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `OAuth succeeds but third-party calls return 429 quota exceeded` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth succeeds but third-party calls return 429 quota exceeded`.
