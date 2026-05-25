---
title: "Codex Desktop quota mismatch: \"out of messages\" banner despite 99% usage remaining"
description: "Fix spurious usage limit block when account actually has remaining quota Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "You're out of Codex messages / You've reached your Codex usage limit (persistent banner even when analytics page shows 99% usage remaining)"
common_causes:
  - "GitHub issue #24445 on openai/codex. Business user (self_serve_business_usage_based) reports Codex Desktop shows persistent 'out of messages' banner while chatgpt.com confirms 99% usage remaining and 0 credits consumed. Root cause traced via local app-server method account/rateLimits/read."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-25"
published_at: "2026-05-25T23:43:15.240Z"
updated_at: "2026-05-25T23:43:15.240Z"
---

## What this error means

`You're out of Codex messages / You've reached your Codex usage limit (persistent banner even when analytics page shows 99% usage remaining)` is a OpenAI API failure pattern reported for developers trying to fix spurious usage limit block when account actually has remaining quota. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #24445 on openai/codex. Business user (self_serve_business_usage_based) reports Codex Desktop shows persistent 'out of messages' banner while chatgpt.com confirms 99% usage remaining and 0 credits consumed. Root cause traced via local app-server method account/rateLimits/read.

## Common causes

- GitHub issue #24445 on openai/codex. Business user (self_serve_business_usage_based) reports Codex Desktop shows persistent 'out of messages' banner while chatgpt.com confirms 99% usage remaining and 0 credits consumed. Root cause traced via local app-server method account/rateLimits/read.

## Quick fixes

1. Confirm the exact error signature matches `You're out of Codex messages / You've reached your Codex usage limit (persistent banner even when analytics page shows 99% usage remaining)`.
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

- https://github.com/openai/codex/issues/24445

Evidence note: GitHub issue #24445 on openai/codex. Business user (self_serve_business_usage_based) reports Codex Desktop shows persistent 'out of messages' banner while chatgpt.com confirms 99% usage remaining and 0 credits consumed. Root cause traced via local app-server method account/rateLimits/read.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `You're out of Codex messages / You've reached your Codex usage limit (persistent banner even when analytics page shows 99% usage remaining)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `You're out of Codex messages / You've reached your Codex usage limit (persistent banner even when analytics page shows 99% usage remaining)`.
