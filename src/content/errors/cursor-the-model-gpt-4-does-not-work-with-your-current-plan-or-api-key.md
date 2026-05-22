---
title: "Cursor 'Model Does Not Work with Your Current Plan or API Key' With Custom Models"
description: "Fix Cursor IDE refusing to use custom models (GPT-4, Claude) when custom API key (BYOK) mode is enabled, particularly breaking Agent and Edit features that depend on custom models Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "The model gpt-4 does not work with your current plan or api key"
common_causes:
  - "Found across multiple sources: Cursor community forum (#76097), Stack Overflow (#79544040), and developer blog analysis (#3390 on githubissues.com). Users report model access loss specifically when entering BYOK API keys in Settings → Models. Cursor's Auto mode gets confused when API permissions change. Agent and Edit features depend on custom models but fail with BYOK. Known product limitation rather than transient bug — strong search demand, high commercial value for Cursor paid subscribers."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cursor"
updated: "2026-05-22"
published_at: "2026-05-22T03:39:46.540Z"
updated_at: "2026-05-22T03:39:46.540Z"
---

## What this error means

`The model gpt-4 does not work with your current plan or api key` is a Cursor failure pattern reported for developers trying to fix cursor ide refusing to use custom models (gpt-4, claude) when custom api key (byok) mode is enabled, particularly breaking agent and edit features that depend on custom models. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found across multiple sources: Cursor community forum (#76097), Stack Overflow (#79544040), and developer blog analysis (#3390 on githubissues.com). Users report model access loss specifically when entering BYOK API keys in Settings → Models. Cursor's Auto mode gets confused when API permissions change. Agent and Edit features depend on custom models but fail with BYOK. Known product limitation rather than transient bug — strong search demand, high commercial value for Cursor paid subscribers.

## Common causes

- Found across multiple sources: Cursor community forum (#76097), Stack Overflow (#79544040), and developer blog analysis (#3390 on githubissues.com). Users report model access loss specifically when entering BYOK API keys in Settings → Models. Cursor's Auto mode gets confused when API permissions change. Agent and Edit features depend on custom models but fail with BYOK. Known product limitation rather than transient bug — strong search demand, high commercial value for Cursor paid subscribers.

## Quick fixes

1. Confirm the exact error signature matches `The model gpt-4 does not work with your current plan or api key`.
2. Check the Cursor account, local tool state, and provider configuration involved in the failing workflow.
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

- https://forum.cursor.com/t/model-access-issues/76097
- https://stackoverflow.com/questions/79544040/why-doesnt-my-azure-openai-model-show-up-in-cursor
- https://apipie.ai/docs/blog/Cursors-Does-Not-Work-with-Your-Current-Plan-or-API-Key-Fix

Evidence note: Found across multiple sources: Cursor community forum (#76097), Stack Overflow (#79544040), and developer blog analysis (#3390 on githubissues.com). Users report model access loss specifically when entering BYOK API keys in Settings → Models. Cursor's Auto mode gets confused when API permissions change. Agent and Edit features depend on custom models but fail with BYOK. Known product limitation rather than transient bug — strong search demand, high commercial value for Cursor paid subscribers.

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `The model gpt-4 does not work with your current plan or api key` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `The model gpt-4 does not work with your current plan or api key`.
