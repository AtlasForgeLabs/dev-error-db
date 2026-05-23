---
title: "Vertex AI Rejecting ~2MB Requests with Misleading 413 32MB Limit Error via Anthropic SDK"
description: "Fix Anthropic Claude API 413 rejection when sending documents via Vertex AI proxy — payload well under documented 32MB limit but consistently rejected Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "Error code: 413 - 'Request exceeds the maximum allowed number of bytes. The maximum request size is 32 MB' (but payload is only ~2MB)"
common_causes:
  - "GitHub Issue #1028 on anthropics/anthropic-sdk-python (created 2025-09-07, open, 2 comments). Payloads as small as ~147KB get rejected with 413 error claiming 32MB limit. Same code works fine via direct Anthropic API. Works with prompt caching enabled. Affects enterprise customers using Claude Sonnet 4 for document analysis via Google Cloud Vertex AI."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API"
updated: "2026-05-23"
published_at: "2026-05-23T00:39:49.022Z"
updated_at: "2026-05-23T00:39:49.022Z"
---

## What this error means

`Error code: 413 - 'Request exceeds the maximum allowed number of bytes. The maximum request size is 32 MB' (but payload is only ~2MB)` is a Anthropic API failure pattern reported for developers trying to fix anthropic claude api 413 rejection when sending documents via vertex ai proxy — payload well under documented 32mb limit but consistently rejected. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #1028 on anthropics/anthropic-sdk-python (created 2025-09-07, open, 2 comments). Payloads as small as ~147KB get rejected with 413 error claiming 32MB limit. Same code works fine via direct Anthropic API. Works with prompt caching enabled. Affects enterprise customers using Claude Sonnet 4 for document analysis via Google Cloud Vertex AI.

## Common causes

- GitHub Issue #1028 on anthropics/anthropic-sdk-python (created 2025-09-07, open, 2 comments). Payloads as small as ~147KB get rejected with 413 error claiming 32MB limit. Same code works fine via direct Anthropic API. Works with prompt caching enabled. Affects enterprise customers using Claude Sonnet 4 for document analysis via Google Cloud Vertex AI.

## Quick fixes

1. Confirm the exact error signature matches `Error code: 413 - 'Request exceeds the maximum allowed number of bytes. The maximum request size is 32 MB' (but payload is only ~2MB)`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/anthropic-sdk-python/issues/1028

Evidence note: GitHub Issue #1028 on anthropics/anthropic-sdk-python (created 2025-09-07, open, 2 comments). Payloads as small as ~147KB get rejected with 413 error claiming 32MB limit. Same code works fine via direct Anthropic API. Works with prompt caching enabled. Affects enterprise customers using Claude Sonnet 4 for document analysis via Google Cloud Vertex AI.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `Error code: 413 - 'Request exceeds the maximum allowed number of bytes. The maximum request size is 32 MB' (but payload is only ~2MB)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error code: 413 - 'Request exceeds the maximum allowed number of bytes. The maximum request size is 32 MB' (but payload is only ~2MB)`.
