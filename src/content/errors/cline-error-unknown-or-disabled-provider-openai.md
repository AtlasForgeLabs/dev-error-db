---
title: "Cline CLI 'Unknown or disabled provider openai' with OpenAI-Compatible Endpoint"
description: "Fix Cline CLI error 'Unknown or disabled provider openai' when using OpenAI-compatible endpoint Includes evidence for Cline troubleshooting demand."
category: "AI Coding Tools"
technology: "Cline"
error_signature: "Error: Unknown or disabled provider \"openai\""
common_causes:
  - "Cline CLI reports 'Unknown or disabled provider openai' even though the same endpoint works fine in the VSCode plugin. Configuration difference between CLI and extension causes confusion."
  - "Cline CLI v3.0.0 reports 'Error: Unknown or disabled provider openai' when configured with an OpenAI-compatible endpoint. Works in VSCode extension but fails in CLI. Configuration mismatch issue."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cline CLI provider configuration"
  - "Cline OpenAI-compatible endpoint setup"
  - "Cline CLI vs extension config difference"
updated: "2026-05-14"
published_at: "2026-05-14T14:13:20.097Z"
updated_at: "2026-05-14T14:13:20.097Z"
---

## What this error means

`Error: Unknown or disabled provider "openai"` is a Cline failure pattern reported for developers trying to fix cline cli error 'unknown or disabled provider openai' when using openai-compatible endpoint. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Cline CLI v3.0.0 reports 'Error: Unknown or disabled provider openai' when configured with an OpenAI-compatible endpoint. Works in VSCode extension but fails in CLI. Configuration mismatch issue.

## Common causes

- Cline CLI reports 'Unknown or disabled provider openai' even though the same endpoint works fine in the VSCode plugin. Configuration difference between CLI and extension causes confusion.
- Cline CLI v3.0.0 reports 'Error: Unknown or disabled provider openai' when configured with an OpenAI-compatible endpoint. Works in VSCode extension but fails in CLI. Configuration mismatch issue.

## Quick fixes

1. Confirm the exact error signature matches `Error: Unknown or disabled provider "openai"`.
2. Check the Cline account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/cline/cline/issues/10750

Evidence note: Cline CLI v3.0.0 reports 'Error: Unknown or disabled provider openai' when configured with an OpenAI-compatible endpoint. Works in VSCode extension but fails in CLI. Configuration mismatch issue.

## Related errors

- Cline CLI provider configuration
- Cline OpenAI-compatible endpoint setup
- Cline CLI vs extension config difference

## FAQ

### What should I check first?

Start with the exact `Error: Unknown or disabled provider "openai"` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cline workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: Unknown or disabled provider "openai"`.
