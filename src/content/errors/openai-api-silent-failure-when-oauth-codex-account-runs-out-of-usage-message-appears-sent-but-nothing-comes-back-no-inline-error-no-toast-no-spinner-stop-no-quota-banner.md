---
title: "OpenAI Codex OAuth Usage Exhaustion Produces Silent Failure With No Response"
description: "Debug why OpenAI Codex OAuth accounts produce no response and no error when usage quota is exhausted, creating confusing silent-failure UX Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "Silent failure when OAuth Codex account runs out of usage — message appears sent but nothing comes back, no inline error, no toast, no spinner-stop, no quota banner"
common_causes:
  - "GitHub issue #1765 (nesquena/hermes-webui) documents a UX bug where OAuth-authenticated Codex users see complete silence (no response, no error) when their usage is exhausted. Codex first-token latency (3-10s) compounds frustration — users wait 10s repeatedly. Root cause: quota-detector string-match misses Codex-specific 'plan limit reached' / 'usage_limit_exceeded' shapes. Multiple corroborating comments. Category: OpenAI API."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-06-02"
published_at: "2026-06-02T07:44:29.271Z"
updated_at: "2026-06-02T07:44:29.271Z"
---

## What this error means

`Silent failure when OAuth Codex account runs out of usage — message appears sent but nothing comes back, no inline error, no toast, no spinner-stop, no quota banner` is a OpenAI API failure pattern reported for developers trying to debug why openai codex oauth accounts produce no response and no error when usage quota is exhausted, creating confusing silent-failure ux. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #1765 (nesquena/hermes-webui) documents a UX bug where OAuth-authenticated Codex users see complete silence (no response, no error) when their usage is exhausted. Codex first-token latency (3-10s) compounds frustration — users wait 10s repeatedly. Root cause: quota-detector string-match misses Codex-specific 'plan limit reached' / 'usage_limit_exceeded' shapes. Multiple corroborating comments. Category: OpenAI API.

## Common causes

- GitHub issue #1765 (nesquena/hermes-webui) documents a UX bug where OAuth-authenticated Codex users see complete silence (no response, no error) when their usage is exhausted. Codex first-token latency (3-10s) compounds frustration — users wait 10s repeatedly. Root cause: quota-detector string-match misses Codex-specific 'plan limit reached' / 'usage_limit_exceeded' shapes. Multiple corroborating comments. Category: OpenAI API.

## Quick fixes

1. Confirm the exact error signature matches `Silent failure when OAuth Codex account runs out of usage — message appears sent but nothing comes back, no inline error, no toast, no spinner-stop, no quota banner`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/nesquena/hermes-webui/issues/1765

Evidence note: GitHub issue #1765 (nesquena/hermes-webui) documents a UX bug where OAuth-authenticated Codex users see complete silence (no response, no error) when their usage is exhausted. Codex first-token latency (3-10s) compounds frustration — users wait 10s repeatedly. Root cause: quota-detector string-match misses Codex-specific 'plan limit reached' / 'usage_limit_exceeded' shapes. Multiple corroborating comments. Category: OpenAI API.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `Silent failure when OAuth Codex account runs out of usage — message appears sent but nothing comes back, no inline error, no toast, no spinner-stop, no quota banner` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Silent failure when OAuth Codex account runs out of usage — message appears sent but nothing comes back, no inline error, no toast, no spinner-stop, no quota banner`.
