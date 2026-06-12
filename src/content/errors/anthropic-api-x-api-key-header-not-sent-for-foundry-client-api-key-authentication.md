---
title: "Anthropic Foundry API missing x-api-key header for API-key auth"
description: "Fix missing x-api-key header when authenticating with Foundry model deployments on Anthropic API Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "x-api-key header not sent for Foundry client API-key authentication"
common_causes:
  - "GitHub issue #62 / #1661 in anthropics/anthropic-sdk-python (closed v0.107.1, June 7, 2026). The Foundry client was not including the required x-api-key header during API-key auth mode, causing auth failures for enterprise Foundry model requests."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Anthropic API"
updated: "2026-06-12"
published_at: "2026-06-12T01:38:15.564Z"
updated_at: "2026-06-12T01:38:15.564Z"
---

## What this error means

`x-api-key header not sent for Foundry client API-key authentication` is a Anthropic API failure pattern reported for developers trying to fix missing x-api-key header when authenticating with foundry model deployments on anthropic api. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #62 / #1661 in anthropics/anthropic-sdk-python (closed v0.107.1, June 7, 2026). The Foundry client was not including the required x-api-key header during API-key auth mode, causing auth failures for enterprise Foundry model requests.

## Common causes

- GitHub issue #62 / #1661 in anthropics/anthropic-sdk-python (closed v0.107.1, June 7, 2026). The Foundry client was not including the required x-api-key header during API-key auth mode, causing auth failures for enterprise Foundry model requests.

## Quick fixes

1. Confirm the exact error signature matches `x-api-key header not sent for Foundry client API-key authentication`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/anthropics/anthropic-sdk-python/issues/62

Evidence note: GitHub issue #62 / #1661 in anthropics/anthropic-sdk-python (closed v0.107.1, June 7, 2026). The Foundry client was not including the required x-api-key header during API-key auth mode, causing auth failures for enterprise Foundry model requests.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `x-api-key header not sent for Foundry client API-key authentication` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `x-api-key header not sent for Foundry client API-key authentication`.
