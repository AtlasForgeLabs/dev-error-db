---
title: "Cursor Composer 2.5 requests blocked with 'This model does not support custom API keys' error when BYOK is active"
description: "Fix Composer 2.5 being rejected by Cursor backend when a BYOK OpenAI/Anthropic API key is enabled in settings — routing oversight prevents explicitly selected Composer models from working Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "Bad Request — ERROR_BAD_REQUEST: This model does not support custom API keys."
common_causes:
  - "Forum.cursor.com report confirmed by Cursor team member as routing oversight rather than technical limitation. Backend strips BYOK key in Auto mode but fails to apply same logic when Composer model explicitly chosen. Error response includes planChoices suggesting UI should offer upgrade path instead of hard block. Relates to multiple similar posts (#162152, Composer 2 broken when custom OpenAI API Key enabled 367 views). High commercial impact — Composer is premium feature for Cursor Ultra ($60/mo)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cursor"
updated: "2026-06-02"
published_at: "2026-06-02T12:44:29.768Z"
updated_at: "2026-06-02T12:44:29.768Z"
---

## What this error means

`Bad Request — ERROR_BAD_REQUEST: This model does not support custom API keys.` is a Cursor failure pattern reported for developers trying to fix composer 2.5 being rejected by cursor backend when a byok openai/anthropic api key is enabled in settings — routing oversight prevents explicitly selected composer models from working. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Forum.cursor.com report confirmed by Cursor team member as routing oversight rather than technical limitation. Backend strips BYOK key in Auto mode but fails to apply same logic when Composer model explicitly chosen. Error response includes planChoices suggesting UI should offer upgrade path instead of hard block. Relates to multiple similar posts (#162152, Composer 2 broken when custom OpenAI API Key enabled 367 views). High commercial impact — Composer is premium feature for Cursor Ultra ($60/mo).

## Common causes

- Forum.cursor.com report confirmed by Cursor team member as routing oversight rather than technical limitation. Backend strips BYOK key in Auto mode but fails to apply same logic when Composer model explicitly chosen. Error response includes planChoices suggesting UI should offer upgrade path instead of hard block. Relates to multiple similar posts (#162152, Composer 2 broken when custom OpenAI API Key enabled 367 views). High commercial impact — Composer is premium feature for Cursor Ultra ($60/mo).

## Quick fixes

1. Confirm the exact error signature matches `Bad Request — ERROR_BAD_REQUEST: This model does not support custom API keys.`.
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

- https://forum.cursor.com/t/bug-composer-2-5-explicitly-selected-requests-blocked-when-openai-byok-key-is-active/162152

Evidence note: Forum.cursor.com report confirmed by Cursor team member as routing oversight rather than technical limitation. Backend strips BYOK key in Auto mode but fails to apply same logic when Composer model explicitly chosen. Error response includes planChoices suggesting UI should offer upgrade path instead of hard block. Relates to multiple similar posts (#162152, Composer 2 broken when custom OpenAI API Key enabled 367 views). High commercial impact — Composer is premium feature for Cursor Ultra ($60/mo).

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `Bad Request — ERROR_BAD_REQUEST: This model does not support custom API keys.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Bad Request — ERROR_BAD_REQUEST: This model does not support custom API keys.`.
