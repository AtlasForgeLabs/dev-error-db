---
title: "Google ADK Python LoadSkillResourceTool Infinite Retry Loop Consumes Call Budget"
description: "Fix Google ADK Python LoadSkillResourceTool retry loop consuming entire call budget on RESOURCE_NOT_FOUND Includes evidence for Google ADK Python troubleshooting demand."
category: "AI Coding Tools"
technology: "Google ADK Python"
error_signature: "RESOURCE_NOT_FOUND — LoadSkillResourceTool retries indefinitely until max_llm_calls (default 500) exhausted"
common_causes:
  - "When an LLM passes a hallucinated path to LoadSkillResourceTool in Google ADK Python, the tool returns RESOURCE_NOT_FOUND as a soft-error string. The LLM treats this as recoverable and retries indefinitely until max_llm_calls (default 500) is exhausted — silently consuming the entire call budget on a single failing tool."
  - "GitHub issue #5652 reports LoadSkillResourceTool returning RESOURCE_NOT_FOUND as structured soft-error, causing LLM to retry same path until RunConfig.max_llm_calls (default 500) is exhausted. Single hallucinated path silently consumes entire per-invocation call budget."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Google ADK Python tool retry loop bug"
  - "ADK max_llm_calls budget exhaustion"
  - "Google ADK skill resource path not found"
updated: "2026-05-12"
published_at: "2026-05-12T07:10:49.577Z"
updated_at: "2026-05-12T07:10:49.577Z"
---

## What this error means

`RESOURCE_NOT_FOUND — LoadSkillResourceTool retries indefinitely until max_llm_calls (default 500) exhausted` is a Google ADK Python failure pattern reported for developers trying to fix google adk python loadskillresourcetool retry loop consuming entire call budget on resource_not_found. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #5652 reports LoadSkillResourceTool returning RESOURCE_NOT_FOUND as structured soft-error, causing LLM to retry same path until RunConfig.max_llm_calls (default 500) is exhausted. Single hallucinated path silently consumes entire per-invocation call budget.

## Common causes

- When an LLM passes a hallucinated path to LoadSkillResourceTool in Google ADK Python, the tool returns RESOURCE_NOT_FOUND as a soft-error string. The LLM treats this as recoverable and retries indefinitely until max_llm_calls (default 500) is exhausted — silently consuming the entire call budget on a single failing tool.
- GitHub issue #5652 reports LoadSkillResourceTool returning RESOURCE_NOT_FOUND as structured soft-error, causing LLM to retry same path until RunConfig.max_llm_calls (default 500) is exhausted. Single hallucinated path silently consumes entire per-invocation call budget.

## Quick fixes

1. Confirm the exact error signature matches `RESOURCE_NOT_FOUND — LoadSkillResourceTool retries indefinitely until max_llm_calls (default 500) exhausted`.
2. Check the Google ADK Python account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/google/adk-python/issues/5652

Evidence note: GitHub issue #5652 reports LoadSkillResourceTool returning RESOURCE_NOT_FOUND as structured soft-error, causing LLM to retry same path until RunConfig.max_llm_calls (default 500) is exhausted. Single hallucinated path silently consumes entire per-invocation call budget.

## Related errors

- Google ADK Python tool retry loop bug
- ADK max_llm_calls budget exhaustion
- Google ADK skill resource path not found

## FAQ

### What should I check first?

Start with the exact `RESOURCE_NOT_FOUND — LoadSkillResourceTool retries indefinitely until max_llm_calls (default 500) exhausted` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Google ADK Python workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `RESOURCE_NOT_FOUND — LoadSkillResourceTool retries indefinitely until max_llm_calls (default 500) exhausted`.
