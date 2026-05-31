---
title: "Cursor GPT-5.5 BYOK Bypasses Custom Base URL and Routes to api.openai.com"
description: "Fix Cursor IDE ignoring custom OpenAI base URL and API key for GPT-5.5 model, causing 400 errors even though same config works with other models like GPT-5.4 Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "GPT-5.5 BYOK not working — Cursor does not send request to configured overridden OpenAI base URL, shows 'routing_unsupported: gpt-5.5 routing failed: only supports Responses-compatible requests'"
common_causes:
  - "Cursor community forum report from May 2026. GPT-5.5 specifically bypasses custom base URL configured in Cursor settings, while GPT-5.4 works fine with same config/API key. Error response is 'ERROR_OPENAI: Provider was unable to process your request | routing_unsupported'. Direct commercial impact for paid Cursor Pro/Max users using BYOK with self-hosted LLM endpoints. Category: Cursor (exact match)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cursor"
updated: "2026-05-31"
published_at: "2026-05-31T12:44:24.638Z"
updated_at: "2026-05-31T12:44:24.638Z"
---

## What this error means

`GPT-5.5 BYOK not working — Cursor does not send request to configured overridden OpenAI base URL, shows 'routing_unsupported: gpt-5.5 routing failed: only supports Responses-compatible requests'` is a Cursor failure pattern reported for developers trying to fix cursor ide ignoring custom openai base url and api key for gpt-5.5 model, causing 400 errors even though same config works with other models like gpt-5.4. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Cursor community forum report from May 2026. GPT-5.5 specifically bypasses custom base URL configured in Cursor settings, while GPT-5.4 works fine with same config/API key. Error response is 'ERROR_OPENAI: Provider was unable to process your request | routing_unsupported'. Direct commercial impact for paid Cursor Pro/Max users using BYOK with self-hosted LLM endpoints. Category: Cursor (exact match).

## Common causes

- Cursor community forum report from May 2026. GPT-5.5 specifically bypasses custom base URL configured in Cursor settings, while GPT-5.4 works fine with same config/API key. Error response is 'ERROR_OPENAI: Provider was unable to process your request | routing_unsupported'. Direct commercial impact for paid Cursor Pro/Max users using BYOK with self-hosted LLM endpoints. Category: Cursor (exact match).

## Quick fixes

1. Confirm the exact error signature matches `GPT-5.5 BYOK not working — Cursor does not send request to configured overridden OpenAI base URL, shows 'routing_unsupported: gpt-5.5 routing failed: only supports Responses-compatible requests'`.
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

- https://forum.cursor.com/t/gpt-5-5-byok-not-working/160004

Evidence note: Cursor community forum report from May 2026. GPT-5.5 specifically bypasses custom base URL configured in Cursor settings, while GPT-5.4 works fine with same config/API key. Error response is 'ERROR_OPENAI: Provider was unable to process your request | routing_unsupported'. Direct commercial impact for paid Cursor Pro/Max users using BYOK with self-hosted LLM endpoints. Category: Cursor (exact match).

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `GPT-5.5 BYOK not working — Cursor does not send request to configured overridden OpenAI base URL, shows 'routing_unsupported: gpt-5.5 routing failed: only supports Responses-compatible requests'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `GPT-5.5 BYOK not working — Cursor does not send request to configured overridden OpenAI base URL, shows 'routing_unsupported: gpt-5.5 routing failed: only supports Responses-compatible requests'`.
