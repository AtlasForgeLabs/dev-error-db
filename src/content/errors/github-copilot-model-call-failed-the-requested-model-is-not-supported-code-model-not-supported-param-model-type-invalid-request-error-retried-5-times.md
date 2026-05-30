---
title: "GitHub Copilot CLI Model Call Failed — Requested Model Not Supported"
description: "Fix Copilot CLI error 'The requested model is not supported' when giving prompts, especially for unsupported or newer models Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "Model call failed: The requested model is not supported. code: model_not_supported, param: model, type: invalid_request_error; retried 5 times"
common_causes:
  - "GitHub issue github/copilot-cli#40. Copilot CLI v0.0.327 returns explicit error when backend model is not supported, with retry exhaustion (5 retries over ~97 seconds). Affected users are paying Copilot subscribers facing production blocker during AI-assisted workflows. Clear error signature with specific error codes. Closed as bug confirmed."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Copilot"
updated: "2026-05-30"
published_at: "2026-05-30T11:43:28.507Z"
updated_at: "2026-05-30T11:43:28.507Z"
---

## What this error means

`Model call failed: The requested model is not supported. code: model_not_supported, param: model, type: invalid_request_error; retried 5 times` is a GitHub Copilot failure pattern reported for developers trying to fix copilot cli error 'the requested model is not supported' when giving prompts, especially for unsupported or newer models. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue github/copilot-cli#40. Copilot CLI v0.0.327 returns explicit error when backend model is not supported, with retry exhaustion (5 retries over ~97 seconds). Affected users are paying Copilot subscribers facing production blocker during AI-assisted workflows. Clear error signature with specific error codes. Closed as bug confirmed.

## Common causes

- GitHub issue github/copilot-cli#40. Copilot CLI v0.0.327 returns explicit error when backend model is not supported, with retry exhaustion (5 retries over ~97 seconds). Affected users are paying Copilot subscribers facing production blocker during AI-assisted workflows. Clear error signature with specific error codes. Closed as bug confirmed.

## Quick fixes

1. Confirm the exact error signature matches `Model call failed: The requested model is not supported. code: model_not_supported, param: model, type: invalid_request_error; retried 5 times`.
2. Check the GitHub Copilot account, local tool state, and provider configuration involved in the failing workflow.
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

- https://api.github.com/repos/github/copilot-cli/issues/40

Evidence note: GitHub issue github/copilot-cli#40. Copilot CLI v0.0.327 returns explicit error when backend model is not supported, with retry exhaustion (5 retries over ~97 seconds). Affected users are paying Copilot subscribers facing production blocker during AI-assisted workflows. Clear error signature with specific error codes. Closed as bug confirmed.

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `Model call failed: The requested model is not supported. code: model_not_supported, param: model, type: invalid_request_error; retried 5 times` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Model call failed: The requested model is not supported. code: model_not_supported, param: model, type: invalid_request_error; retried 5 times`.
