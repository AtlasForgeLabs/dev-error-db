---
title: "LiteLLM prompt_cache_retention type mismatch: declares in-memory but API expects in_memory"
description: "Fix SDK type mismatch for OpenAI prompt cache retention parameter causing API rejection Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "prompt_cache_retention type declares in-memory but API expects in_memory"
common_causes:
  - "GitHub Issue #2883 in openai/openai-python opened Feb 23, 2026, updated May 27, 2026 with 12 linked PRs. SDK documentation/type bug creating incorrect API expectations. 12 linked PRs shows active community fix effort, confirming widespread impact. Direct OpenAI API parameter compatibility issue."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-30"
published_at: "2026-05-30T20:43:29.364Z"
updated_at: "2026-05-30T20:43:29.364Z"
---

## What this error means

`prompt_cache_retention type declares in-memory but API expects in_memory` is a OpenAI API failure pattern reported for developers trying to fix sdk type mismatch for openai prompt cache retention parameter causing api rejection. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #2883 in openai/openai-python opened Feb 23, 2026, updated May 27, 2026 with 12 linked PRs. SDK documentation/type bug creating incorrect API expectations. 12 linked PRs shows active community fix effort, confirming widespread impact. Direct OpenAI API parameter compatibility issue.

## Common causes

- GitHub Issue #2883 in openai/openai-python opened Feb 23, 2026, updated May 27, 2026 with 12 linked PRs. SDK documentation/type bug creating incorrect API expectations. 12 linked PRs shows active community fix effort, confirming widespread impact. Direct OpenAI API parameter compatibility issue.

## Quick fixes

1. Confirm the exact error signature matches `prompt_cache_retention type declares in-memory but API expects in_memory`.
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

- https://github.com/openai/openai-python/issues/2883

Evidence note: GitHub Issue #2883 in openai/openai-python opened Feb 23, 2026, updated May 27, 2026 with 12 linked PRs. SDK documentation/type bug creating incorrect API expectations. 12 linked PRs shows active community fix effort, confirming widespread impact. Direct OpenAI API parameter compatibility issue.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `prompt_cache_retention type declares in-memory but API expects in_memory` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `prompt_cache_retention type declares in-memory but API expects in_memory`.
