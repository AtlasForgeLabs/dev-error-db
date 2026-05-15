---
title: "LiteLLM SMTP Configuration Crash - Nonce Length Validation Error"
description: "Fix LiteLLM crashing with nacl.exceptions.ValueError nonce must be exactly 24 bytes when configuring SMTP Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "nacl.exceptions.ValueError: The nonce must be exactly 24 bytes long"
common_causes:
  - "Configuring SMTP through LiteLLM admin UI triggers a crash. The nacl encryption library throws ValueError about nonce length. After restart, master key encryption is corrupted with 'Incorrect padding' errors. Users lose access to encrypted config values."
  - "Reported 2026-04-07 with 10 comments. Configuring SMTP through admin UI crashes LiteLLM. Post-crash: 'Error decrypting value for key: SMTP_SENDER_EMAIL, Incorrect padding'. Encrypts/decrypts config values are corrupted."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM SMTP configuration crash"
  - "LiteLLM nacl nonce ValueError"
  - "LiteLLM master_key encryption corrupted after crash"
updated: "2026-05-15"
published_at: "2026-05-15T00:13:21.172Z"
updated_at: "2026-05-15T00:13:21.172Z"
---

## What this error means

`nacl.exceptions.ValueError: The nonce must be exactly 24 bytes long` is a LiteLLM failure pattern reported for developers trying to fix litellm crashing with nacl.exceptions.valueerror nonce must be exactly 24 bytes when configuring smtp. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Reported 2026-04-07 with 10 comments. Configuring SMTP through admin UI crashes LiteLLM. Post-crash: 'Error decrypting value for key: SMTP_SENDER_EMAIL, Incorrect padding'. Encrypts/decrypts config values are corrupted.

## Common causes

- Configuring SMTP through LiteLLM admin UI triggers a crash. The nacl encryption library throws ValueError about nonce length. After restart, master key encryption is corrupted with 'Incorrect padding' errors. Users lose access to encrypted config values.
- Reported 2026-04-07 with 10 comments. Configuring SMTP through admin UI crashes LiteLLM. Post-crash: 'Error decrypting value for key: SMTP_SENDER_EMAIL, Incorrect padding'. Encrypts/decrypts config values are corrupted.

## Quick fixes

1. Confirm the exact error signature matches `nacl.exceptions.ValueError: The nonce must be exactly 24 bytes long`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/25296

Evidence note: Reported 2026-04-07 with 10 comments. Configuring SMTP through admin UI crashes LiteLLM. Post-crash: 'Error decrypting value for key: SMTP_SENDER_EMAIL, Incorrect padding'. Encrypts/decrypts config values are corrupted.

## Related errors

- LiteLLM SMTP configuration crash
- LiteLLM nacl nonce ValueError
- LiteLLM master_key encryption corrupted after crash

## FAQ

### What should I check first?

Start with the exact `nacl.exceptions.ValueError: The nonce must be exactly 24 bytes long` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `nacl.exceptions.ValueError: The nonce must be exactly 24 bytes long`.
