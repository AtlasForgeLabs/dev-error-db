---
title: "OpenAI Realtime API invalid_beta Error After OpenAI-Beta Header Deprecation"
description: "Fix OpenAI Realtime API invalid_beta error after OpenAI-Beta realtime header deprecation Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "Unknown beta requested: 'realtime' — invalid_beta error on OpenAI Realtime API"
common_causes:
  - "OpenAI deprecated the `OpenAI-Beta: realtime=v1` header on the live Realtime API. Applications still sending this header receive `{'error': {'code': 'invalid_beta', 'message': \"Unknown beta requested: 'realtime'.\"}}` followed by a TimeoutError waiting for 'session.created'. This breaks CI/CD pipelines and production integrations that haven't been updated."
  - "LiteLLM PR #27690 (May 2026) documents the OpenAI API deprecation. realtime_translation_testing CircleCI job fails on every PR with: {\"error\": {\"code\": \"invalid_beta\", \"message\": \"Unknown beta requested: 'realtime'.\"}} followed by TimeoutError: Timed out waiting for 'session.created'. OpenAI deprecated the OpenAI-Beta: realtime=v1 header."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API deprecated header error"
  - "OpenAI Realtime API session.created timeout"
  - "OpenAI-Beta header removed 2026"
updated: "2026-05-12"
---

## What this error means

`Unknown beta requested: 'realtime' — invalid_beta error on OpenAI Realtime API` is a OpenAI API failure pattern reported for developers trying to fix openai realtime api invalid_beta error after openai-beta realtime header deprecation. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

LiteLLM PR #27690 (May 2026) documents the OpenAI API deprecation. realtime_translation_testing CircleCI job fails on every PR with: {"error": {"code": "invalid_beta", "message": "Unknown beta requested: 'realtime'."}} followed by TimeoutError: Timed out waiting for 'session.created'. OpenAI deprecated the OpenAI-Beta: realtime=v1 header.

## Common causes

- OpenAI deprecated the `OpenAI-Beta: realtime=v1` header on the live Realtime API. Applications still sending this header receive `{'error': {'code': 'invalid_beta', 'message': "Unknown beta requested: 'realtime'."}}` followed by a TimeoutError waiting for 'session.created'. This breaks CI/CD pipelines and production integrations that haven't been updated.
- LiteLLM PR #27690 (May 2026) documents the OpenAI API deprecation. realtime_translation_testing CircleCI job fails on every PR with: {"error": {"code": "invalid_beta", "message": "Unknown beta requested: 'realtime'."}} followed by TimeoutError: Timed out waiting for 'session.created'. OpenAI deprecated the OpenAI-Beta: realtime=v1 header.

## Quick fixes

1. Confirm the exact error signature matches `Unknown beta requested: 'realtime' — invalid_beta error on OpenAI Realtime API`.
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

- https://github.com/BerriAI/litellm/pull/27690

Evidence note: LiteLLM PR #27690 (May 2026) documents the OpenAI API deprecation. realtime_translation_testing CircleCI job fails on every PR with: {"error": {"code": "invalid_beta", "message": "Unknown beta requested: 'realtime'."}} followed by TimeoutError: Timed out waiting for 'session.created'. OpenAI deprecated the OpenAI-Beta: realtime=v1 header.

## Related errors

- OpenAI API deprecated header error
- OpenAI Realtime API session.created timeout
- OpenAI-Beta header removed 2026

## FAQ

### What should I check first?

Start with the exact `Unknown beta requested: 'realtime' — invalid_beta error on OpenAI Realtime API` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Unknown beta requested: 'realtime' — invalid_beta error on OpenAI Realtime API`.
