---
title: "Claude Max OAuth tool-use rejected as overage (HTTP 400 'You're out of extra usage') on third-party clients"
description: "Fix Claude Max subscription being incorrectly routed to overage billing when using OAuth tokens with third-party tool-use clients (Hermes Agent, direct API calls) Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "BadRequestError [HTTP 400] You're out of extra usage. Add more at claude.ai/settings/usage"
common_causes:
  - "GitHub issue NousResearch/hermes-agent#15080. Deeply documented by multiple users: Claude Max 20x OAuth token returns HTTP 400 whenever a tools parameter is present in the request body, despite 5h-utilization being only 3%. Verified via isolated Python stdlib reproduction. Related issues: #28902, #29125. Closed as intended behavior per Anthropic policy but still affects paying users without pay-as-you-go credits."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Anthropic API"
updated: "2026-05-24"
published_at: "2026-05-24T15:43:10.975Z"
updated_at: "2026-05-24T15:43:10.975Z"
---

## What this error means

`BadRequestError [HTTP 400] You're out of extra usage. Add more at claude.ai/settings/usage` is a Anthropic API failure pattern reported for developers trying to fix claude max subscription being incorrectly routed to overage billing when using oauth tokens with third-party tool-use clients (hermes agent, direct api calls). Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue NousResearch/hermes-agent#15080. Deeply documented by multiple users: Claude Max 20x OAuth token returns HTTP 400 whenever a tools parameter is present in the request body, despite 5h-utilization being only 3%. Verified via isolated Python stdlib reproduction. Related issues: #28902, #29125. Closed as intended behavior per Anthropic policy but still affects paying users without pay-as-you-go credits.

## Common causes

- GitHub issue NousResearch/hermes-agent#15080. Deeply documented by multiple users: Claude Max 20x OAuth token returns HTTP 400 whenever a tools parameter is present in the request body, despite 5h-utilization being only 3%. Verified via isolated Python stdlib reproduction. Related issues: #28902, #29125. Closed as intended behavior per Anthropic policy but still affects paying users without pay-as-you-go credits.

## Quick fixes

1. Confirm the exact error signature matches `BadRequestError [HTTP 400] You're out of extra usage. Add more at claude.ai/settings/usage`.
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

- https://github.com/NousResearch/hermes-agent/issues/15080

Evidence note: GitHub issue NousResearch/hermes-agent#15080. Deeply documented by multiple users: Claude Max 20x OAuth token returns HTTP 400 whenever a tools parameter is present in the request body, despite 5h-utilization being only 3%. Verified via isolated Python stdlib reproduction. Related issues: #28902, #29125. Closed as intended behavior per Anthropic policy but still affects paying users without pay-as-you-go credits.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `BadRequestError [HTTP 400] You're out of extra usage. Add more at claude.ai/settings/usage` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `BadRequestError [HTTP 400] You're out of extra usage. Add more at claude.ai/settings/usage`.
