---
title: "Ollama connection refused error — cron job fails with ConnectionError when Ollama service is not running"
description: "Fix Ollama ConnectionError: Failed to connect to Ollama when service is stopped or model not installed Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible."
common_causes:
  - "Ollama service crashes or stops running, causing scheduled tasks and applications to fail with generic connection error. Common in automated pipelines and cron jobs."
  - "Cron job failing for 5 consecutive runs. Root cause: ollama.service stopped since 2026-02-19, cron ran 2026-04-06. Secondary cause: mistral-small model not installed. Error at ollama._client.py:135. All 3 retry attempts fail with same ConnectionError."
quick_fix: "Confirm the local service is running on the expected host and port, then retry the smallest request."
related_errors:
  - "Ollama model not found error"
  - "Ollama pull manifest error"
  - "Ollama service not starting on boot"
updated: "2026-05-14"
published_at: "2026-05-14T23:13:21.053Z"
updated_at: "2026-05-14T23:13:21.053Z"
---

## What this error means

`Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible.` is a Ollama failure pattern reported for developers trying to fix ollama connectionerror: failed to connect to ollama when service is stopped or model not installed. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Cron job failing for 5 consecutive runs. Root cause: ollama.service stopped since 2026-02-19, cron ran 2026-04-06. Secondary cause: mistral-small model not installed. Error at ollama._client.py:135. All 3 retry attempts fail with same ConnectionError.

## Common causes

- Ollama service crashes or stops running, causing scheduled tasks and applications to fail with generic connection error. Common in automated pipelines and cron jobs.
- Cron job failing for 5 consecutive runs. Root cause: ollama.service stopped since 2026-02-19, cron ran 2026-04-06. Secondary cause: mistral-small model not installed. Error at ollama._client.py:135. All 3 retry attempts fail with same ConnectionError.

## Quick fixes

1. Confirm the exact error signature matches `Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible.`.
2. Check the Ollama account, local tool state, and provider configuration involved in the failing workflow.
3. Confirm the local service is running on the expected host and port, then retry the smallest request.

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

- https://github.com/weyucou/hakoake-backend/issues/2

Evidence note: Cron job failing for 5 consecutive runs. Root cause: ollama.service stopped since 2026-02-19, cron ran 2026-04-06. Secondary cause: mistral-small model not installed. Error at ollama._client.py:135. All 3 retry attempts fail with same ConnectionError.

## Related errors

- Ollama model not found error
- Ollama pull manifest error
- Ollama service not starting on boot

## FAQ

### What should I check first?

Start with the exact `Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible.`.
