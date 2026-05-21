---
title: "LiteLLM call disconnects after 60-70 seconds — proxy stream timeout issue"
description: "Fix premature connection drops (~60-70s) in LiteLLM proxy streaming — likely proxy timeout or keep-alive configuration issue Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "The litellm call will disconnect after 60-70 seconds"
common_causes:
  - "GitHub issue #28474 (May 21, 2026) on BerriAI/litellm, labeled 'bug' and 'llm translation'. Affects production proxy serving with ~60-70s hard disconnect regardless of source model config. High commercial value: breaks any LiteLLM proxy deployment serving long-running LLM completions. No coverage in dev-error-db yet."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-21"
published_at: "2026-05-21T21:39:45.736Z"
updated_at: "2026-05-21T21:39:45.736Z"
---

## What this error means

`The litellm call will disconnect after 60-70 seconds` is a LiteLLM failure pattern reported for developers trying to fix premature connection drops (~60-70s) in litellm proxy streaming — likely proxy timeout or keep-alive configuration issue. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #28474 (May 21, 2026) on BerriAI/litellm, labeled 'bug' and 'llm translation'. Affects production proxy serving with ~60-70s hard disconnect regardless of source model config. High commercial value: breaks any LiteLLM proxy deployment serving long-running LLM completions. No coverage in dev-error-db yet.

## Common causes

- GitHub issue #28474 (May 21, 2026) on BerriAI/litellm, labeled 'bug' and 'llm translation'. Affects production proxy serving with ~60-70s hard disconnect regardless of source model config. High commercial value: breaks any LiteLLM proxy deployment serving long-running LLM completions. No coverage in dev-error-db yet.

## Quick fixes

1. Confirm the exact error signature matches `The litellm call will disconnect after 60-70 seconds`.
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

- https://github.com/BerriAI/litellm/issues/28474

Evidence note: GitHub issue #28474 (May 21, 2026) on BerriAI/litellm, labeled 'bug' and 'llm translation'. Affects production proxy serving with ~60-70s hard disconnect regardless of source model config. High commercial value: breaks any LiteLLM proxy deployment serving long-running LLM completions. No coverage in dev-error-db yet.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `The litellm call will disconnect after 60-70 seconds` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `The litellm call will disconnect after 60-70 seconds`.
