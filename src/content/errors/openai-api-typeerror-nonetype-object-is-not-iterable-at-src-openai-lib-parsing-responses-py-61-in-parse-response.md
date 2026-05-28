---
title: "parse_response crashes with TypeError when response.output is null in response.completed event (chatgpt.com Codex backend)"
description: "Fix SDK crash when ChatGPT Codex backend returns response.output=null in response.completed SSE event Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "TypeError: 'NoneType' object is not iterable at src/openai/lib/_parsing/_responses.py:61 in parse_response()"
common_causes:
  - "GitHub openai/openai-python issue #3325 (updated 2026-05-27): SDK crashes with unhandled TypeError when chatgpt.com Codex backend sends response.output:null in response.completed event. Body has full stack trace, reproduction code using client.responses.stream(), suggested one-line fix, verified on v2.24.0+Python3.11. Covers Codex CLI + ChatGPT account OAuth auth path. Category: OpenAI API — affects OpenAI SDK parsing which serves paid API users."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-28"
published_at: "2026-05-28T04:43:22.010Z"
updated_at: "2026-05-28T04:43:22.010Z"
---

## What this error means

`TypeError: 'NoneType' object is not iterable at src/openai/lib/_parsing/_responses.py:61 in parse_response()` is a OpenAI API failure pattern reported for developers trying to fix sdk crash when chatgpt codex backend returns response.output=null in response.completed sse event. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub openai/openai-python issue #3325 (updated 2026-05-27): SDK crashes with unhandled TypeError when chatgpt.com Codex backend sends response.output:null in response.completed event. Body has full stack trace, reproduction code using client.responses.stream(), suggested one-line fix, verified on v2.24.0+Python3.11. Covers Codex CLI + ChatGPT account OAuth auth path. Category: OpenAI API — affects OpenAI SDK parsing which serves paid API users.

## Common causes

- GitHub openai/openai-python issue #3325 (updated 2026-05-27): SDK crashes with unhandled TypeError when chatgpt.com Codex backend sends response.output:null in response.completed event. Body has full stack trace, reproduction code using client.responses.stream(), suggested one-line fix, verified on v2.24.0+Python3.11. Covers Codex CLI + ChatGPT account OAuth auth path. Category: OpenAI API — affects OpenAI SDK parsing which serves paid API users.

## Quick fixes

1. Confirm the exact error signature matches `TypeError: 'NoneType' object is not iterable at src/openai/lib/_parsing/_responses.py:61 in parse_response()`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
3. Compare the failing environment with a known working setup, then change one configuration value at a time.

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

- https://github.com/openai/openai-python/issues/3325
- https://github.com/openai/openai-python/issues/3312
- https://github.com/openai/openai-python/issues/3313
- https://github.com/openai/openai-python/issues/3314
- https://github.com/openai/openai-python/issues/3321

Evidence note: GitHub openai/openai-python issue #3325 (updated 2026-05-27): SDK crashes with unhandled TypeError when chatgpt.com Codex backend sends response.output:null in response.completed event. Body has full stack trace, reproduction code using client.responses.stream(), suggested one-line fix, verified on v2.24.0+Python3.11. Covers Codex CLI + ChatGPT account OAuth auth path. Category: OpenAI API — affects OpenAI SDK parsing which serves paid API users.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `TypeError: 'NoneType' object is not iterable at src/openai/lib/_parsing/_responses.py:61 in parse_response()` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `TypeError: 'NoneType' object is not iterable at src/openai/lib/_parsing/_responses.py:61 in parse_response()`.
