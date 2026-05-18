---
title: "Claude Code ChatGPT Provider Streaming Fails Without Explicit Stream Config"
description: "Fix LiteLLM chatgpt provider where database-registered models bypass ChatGPTResponsesAPIConfig causing streaming requests to fail with explicit error 'Stream must be set to true', breaking integration between Claude Code and OpenRouter-hosted ChatGPT-compatible endpoints Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "chatgpt provider: DB-registered models skip ChatGPTResponsesAPIConfig — streaming requests fail with 'Stream must be set to true'"
common_causes:
  - "GitHub issue #28044 on BerriAI/litellm by RomainGehrig, opened May 16 2026 (2 days ago, most recent find today). Labels: llm translation. When models are registered via LiteLLM's config database, the chatgpt provider skips applying ChatGPTResponsesAPIConfig entirely. Streaming then fails because the required stream parameter is not passed. Directly impacts developers building AI agent pipelines integrating multiple providers."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-18"
published_at: "2026-05-18T05:37:12.100Z"
updated_at: "2026-05-18T05:37:12.100Z"
---

## What this error means

`chatgpt provider: DB-registered models skip ChatGPTResponsesAPIConfig — streaming requests fail with 'Stream must be set to true'` is a LiteLLM failure pattern reported for developers trying to fix litellm chatgpt provider where database-registered models bypass chatgptresponsesapiconfig causing streaming requests to fail with explicit error 'stream must be set to true', breaking integration between claude code and openrouter-hosted chatgpt-compatible endpoints. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #28044 on BerriAI/litellm by RomainGehrig, opened May 16 2026 (2 days ago, most recent find today). Labels: llm translation. When models are registered via LiteLLM's config database, the chatgpt provider skips applying ChatGPTResponsesAPIConfig entirely. Streaming then fails because the required stream parameter is not passed. Directly impacts developers building AI agent pipelines integrating multiple providers.

## Common causes

- GitHub issue #28044 on BerriAI/litellm by RomainGehrig, opened May 16 2026 (2 days ago, most recent find today). Labels: llm translation. When models are registered via LiteLLM's config database, the chatgpt provider skips applying ChatGPTResponsesAPIConfig entirely. Streaming then fails because the required stream parameter is not passed. Directly impacts developers building AI agent pipelines integrating multiple providers.

## Quick fixes

1. Confirm the exact error signature matches `chatgpt provider: DB-registered models skip ChatGPTResponsesAPIConfig — streaming requests fail with 'Stream must be set to true'`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/28044

Evidence note: GitHub issue #28044 on BerriAI/litellm by RomainGehrig, opened May 16 2026 (2 days ago, most recent find today). Labels: llm translation. When models are registered via LiteLLM's config database, the chatgpt provider skips applying ChatGPTResponsesAPIConfig entirely. Streaming then fails because the required stream parameter is not passed. Directly impacts developers building AI agent pipelines integrating multiple providers.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `chatgpt provider: DB-registered models skip ChatGPTResponsesAPIConfig — streaming requests fail with 'Stream must be set to true'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `chatgpt provider: DB-registered models skip ChatGPTResponsesAPIConfig — streaming requests fail with 'Stream must be set to true'`.
