---
title: "Gemini CLI — --list-sessions Ignores Saved OAuth Auth State, Requires GEMINI_API_KEY"
description: "Fix gemini --list-sessions crashing when GEMINI_API_KEY is not set despite saved OAuth auth Includes evidence for Gemini CLI troubleshooting demand."
category: "AI Coding Tools"
technology: "Gemini CLI"
error_signature: "gemini --list-sessions ignores saved /auth state and strictly requires GEMINI_API_KEY env var"
common_causes:
  - "Developers who authenticated Gemini CLI via OAuth (`/auth` command) find that `--list-sessions` ignores the saved auth state and crashes unless GEMINI_API_KEY is explicitly set in the shell. This breaks the core workflow of session management after OAuth login."
  - "Official Gemini CLI issue #26906 (2026-05-12) reports `--list-sessions` ignores internally saved OAuth authentication state and crashes without GEMINI_API_KEY env var. Main `gemini` command works fine with saved auth, but --list-sessions uses different auth resolution logic."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Gemini CLI OAuth authentication state not persisting"
  - "Gemini CLI env var required after OAuth login"
updated: "2026-05-12"
published_at: "2026-05-12T09:11:33.796Z"
updated_at: "2026-05-12T09:11:33.796Z"
---

## What this error means

`gemini --list-sessions ignores saved /auth state and strictly requires GEMINI_API_KEY env var` is a Gemini CLI failure pattern reported for developers trying to fix gemini --list-sessions crashing when gemini_api_key is not set despite saved oauth auth. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Official Gemini CLI issue #26906 (2026-05-12) reports `--list-sessions` ignores internally saved OAuth authentication state and crashes without GEMINI_API_KEY env var. Main `gemini` command works fine with saved auth, but --list-sessions uses different auth resolution logic.

## Common causes

- Developers who authenticated Gemini CLI via OAuth (`/auth` command) find that `--list-sessions` ignores the saved auth state and crashes unless GEMINI_API_KEY is explicitly set in the shell. This breaks the core workflow of session management after OAuth login.
- Official Gemini CLI issue #26906 (2026-05-12) reports `--list-sessions` ignores internally saved OAuth authentication state and crashes without GEMINI_API_KEY env var. Main `gemini` command works fine with saved auth, but --list-sessions uses different auth resolution logic.

## Quick fixes

1. Confirm the exact error signature matches `gemini --list-sessions ignores saved /auth state and strictly requires GEMINI_API_KEY env var`.
2. Check the Gemini CLI account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/google-gemini/gemini-cli/issues/26906

Evidence note: Official Gemini CLI issue #26906 (2026-05-12) reports `--list-sessions` ignores internally saved OAuth authentication state and crashes without GEMINI_API_KEY env var. Main `gemini` command works fine with saved auth, but --list-sessions uses different auth resolution logic.

## Related errors

- Gemini CLI OAuth authentication state not persisting
- Gemini CLI env var required after OAuth login

## FAQ

### What should I check first?

Start with the exact `gemini --list-sessions ignores saved /auth state and strictly requires GEMINI_API_KEY env var` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Gemini CLI workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `gemini --list-sessions ignores saved /auth state and strictly requires GEMINI_API_KEY env var`.
