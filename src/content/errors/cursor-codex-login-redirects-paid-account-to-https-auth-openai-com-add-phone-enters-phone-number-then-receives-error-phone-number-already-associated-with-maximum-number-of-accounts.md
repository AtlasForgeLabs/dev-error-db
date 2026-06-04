---
title: "Codex login redirects paid ChatGPT users to phone verification gate"
description: "Paid ChatGPT subscriber unable to authenticate into Codex CLI because the login flow incorrectly triggers mandatory phone verification and rejects valid phone numbers as already-linked; needs alternative auth path or support resolution Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "Codex login redirects paid account to https://auth.openai.com/add-phone, enters phone number then receives error: phone number already associated with maximum number of accounts"
common_causes:
  - "Found on OpenAI Developer Community (May 20 – June 3). User with active paid subscription experiences Codex login redirect to add-phone page; entered phone rejected as max-associated. Other Google/OpenAI accounts work fine — isolated to one account. 3.2k views, 31 likes, 30 replies. Strong signal of systematic auth bug. Category mapped to AI Coding Tools since Codex is an AI coding agent tool within the ChatGPT ecosystem."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Cursor"
updated: "2026-06-04"
published_at: "2026-06-04T08:44:35.345Z"
updated_at: "2026-06-04T08:44:35.345Z"
---

## What this error means

`Codex login redirects paid account to https://auth.openai.com/add-phone, enters phone number then receives error: phone number already associated with maximum number of accounts` is a Cursor failure pattern reported for developers trying to paid chatgpt subscriber unable to authenticate into codex cli because the login flow incorrectly triggers mandatory phone verification and rejects valid phone numbers as already-linked; needs alternative auth path or support resolution. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found on OpenAI Developer Community (May 20 – June 3). User with active paid subscription experiences Codex login redirect to add-phone page; entered phone rejected as max-associated. Other Google/OpenAI accounts work fine — isolated to one account. 3.2k views, 31 likes, 30 replies. Strong signal of systematic auth bug. Category mapped to AI Coding Tools since Codex is an AI coding agent tool within the ChatGPT ecosystem.

## Common causes

- Found on OpenAI Developer Community (May 20 – June 3). User with active paid subscription experiences Codex login redirect to add-phone page; entered phone rejected as max-associated. Other Google/OpenAI accounts work fine — isolated to one account. 3.2k views, 31 likes, 30 replies. Strong signal of systematic auth bug. Category mapped to AI Coding Tools since Codex is an AI coding agent tool within the ChatGPT ecosystem.

## Quick fixes

1. Confirm the exact error signature matches `Codex login redirects paid account to https://auth.openai.com/add-phone, enters phone number then receives error: phone number already associated with maximum number of accounts`.
2. Check the Cursor account, local tool state, and provider configuration involved in the failing workflow.
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

- https://community.openai.com/t/codex-sign-in-asks-for-phone-verification-on-paid-account/1381357

Evidence note: Found on OpenAI Developer Community (May 20 – June 3). User with active paid subscription experiences Codex login redirect to add-phone page; entered phone rejected as max-associated. Other Google/OpenAI accounts work fine — isolated to one account. 3.2k views, 31 likes, 30 replies. Strong signal of systematic auth bug. Category mapped to AI Coding Tools since Codex is an AI coding agent tool within the ChatGPT ecosystem.

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `Codex login redirects paid account to https://auth.openai.com/add-phone, enters phone number then receives error: phone number already associated with maximum number of accounts` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Codex login redirects paid account to https://auth.openai.com/add-phone, enters phone number then receives error: phone number already associated with maximum number of accounts`.
