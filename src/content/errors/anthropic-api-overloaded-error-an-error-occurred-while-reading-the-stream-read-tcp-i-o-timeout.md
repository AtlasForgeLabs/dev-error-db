---
title: "Anthropic overloaded_error is not retried, halts session"
description: "Fix Anthropic API 529 overloaded_error not being automatically retried, causing sessions to halt instead of retrying with backoff Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "overloaded_error: An error occurred while reading the stream: read tcp: i/o timeout"
common_causes:
  - "GitHub issue on anomalyco/opencode repo showing anthropic overloaded_error falling through parseStreamError() and becoming UnknownError instead of triggering exponential backoff retry logic. Directly affects paying API users with production-grade workflows. Mapping: Anthropic API because it concerns API-level error handling behavior."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Anthropic API"
updated: "2026-05-20"
published_at: "2026-05-20T06:38:28.632Z"
updated_at: "2026-05-20T06:38:28.632Z"
---

## What this error means

`overloaded_error: An error occurred while reading the stream: read tcp: i/o timeout` is a Anthropic API failure pattern reported for developers trying to fix anthropic api 529 overloaded_error not being automatically retried, causing sessions to halt instead of retrying with backoff. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue on anomalyco/opencode repo showing anthropic overloaded_error falling through parseStreamError() and becoming UnknownError instead of triggering exponential backoff retry logic. Directly affects paying API users with production-grade workflows. Mapping: Anthropic API because it concerns API-level error handling behavior.

## Common causes

- GitHub issue on anomalyco/opencode repo showing anthropic overloaded_error falling through parseStreamError() and becoming UnknownError instead of triggering exponential backoff retry logic. Directly affects paying API users with production-grade workflows. Mapping: Anthropic API because it concerns API-level error handling behavior.

## Quick fixes

1. Confirm the exact error signature matches `overloaded_error: An error occurred while reading the stream: read tcp: i/o timeout`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/anomalyco/opencode/issues/20384

Evidence note: GitHub issue on anomalyco/opencode repo showing anthropic overloaded_error falling through parseStreamError() and becoming UnknownError instead of triggering exponential backoff retry logic. Directly affects paying API users with production-grade workflows. Mapping: Anthropic API because it concerns API-level error handling behavior.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `overloaded_error: An error occurred while reading the stream: read tcp: i/o timeout` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `overloaded_error: An error occurred while reading the stream: read tcp: i/o timeout`.
