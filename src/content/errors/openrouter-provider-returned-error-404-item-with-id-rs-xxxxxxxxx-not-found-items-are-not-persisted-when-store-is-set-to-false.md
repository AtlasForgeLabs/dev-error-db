---
title: "LangChain OpenRouter rs_* reasoning IDs cause 404 on /responses replay across upstreams"
description: "Fix langchain-openrouter passing opaque rs_* reasoning item IDs back to OpenRouter's /responses beta endpoint which strips persistence across upstream switches Includes evidence for OpenRouter troubleshooting demand."
category: "OpenAI API"
technology: "OpenRouter"
error_signature: "Provider returned error 404: Item with id 'rs_XXXXXXXXX' not found. Items are not persisted when store is set to false"
common_causes:
  - "GitHub Issue #37777 on langchain-ai/langchain (created 2026-05-29). ChatOpenRouter forwards rs_* reasoning IDs from additional_kwargs; OpenRouter's /responses beta does not propagate store=true across upstreams. Results in cascading 404 errors. Reproduction confirmed on multiple upstreams including direct OpenAI. Category mapping: OpenRouter model routing/API compatibility → OpenAI API per SKILL.md."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-31"
published_at: "2026-05-31T00:43:30.096Z"
updated_at: "2026-05-31T00:43:30.096Z"
---

## What this error means

`Provider returned error 404: Item with id 'rs_XXXXXXXXX' not found. Items are not persisted when store is set to false` is a OpenRouter failure pattern reported for developers trying to fix langchain-openrouter passing opaque rs_* reasoning item ids back to openrouter's /responses beta endpoint which strips persistence across upstream switches. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #37777 on langchain-ai/langchain (created 2026-05-29). ChatOpenRouter forwards rs_* reasoning IDs from additional_kwargs; OpenRouter's /responses beta does not propagate store=true across upstreams. Results in cascading 404 errors. Reproduction confirmed on multiple upstreams including direct OpenAI. Category mapping: OpenRouter model routing/API compatibility → OpenAI API per SKILL.md.

## Common causes

- GitHub Issue #37777 on langchain-ai/langchain (created 2026-05-29). ChatOpenRouter forwards rs_* reasoning IDs from additional_kwargs; OpenRouter's /responses beta does not propagate store=true across upstreams. Results in cascading 404 errors. Reproduction confirmed on multiple upstreams including direct OpenAI. Category mapping: OpenRouter model routing/API compatibility → OpenAI API per SKILL.md.

## Quick fixes

1. Confirm the exact error signature matches `Provider returned error 404: Item with id 'rs_XXXXXXXXX' not found. Items are not persisted when store is set to false`.
2. Check the OpenRouter account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/langchain-ai/langchain/issues/37777

Evidence note: GitHub Issue #37777 on langchain-ai/langchain (created 2026-05-29). ChatOpenRouter forwards rs_* reasoning IDs from additional_kwargs; OpenRouter's /responses beta does not propagate store=true across upstreams. Results in cascading 404 errors. Reproduction confirmed on multiple upstreams including direct OpenAI. Category mapping: OpenRouter model routing/API compatibility → OpenAI API per SKILL.md.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `Provider returned error 404: Item with id 'rs_XXXXXXXXX' not found. Items are not persisted when store is set to false` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenRouter workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Provider returned error 404: Item with id 'rs_XXXXXXXXX' not found. Items are not persisted when store is set to false`.
