---
title: "Anthropic API /v1/messages/count_tokens Returns 404 — Causes RPM Quota Exhaustion"
description: "Fix 404 error when calling Anthropic count_tokens endpoint, or resolve unexpected rate limiting caused by SDK fallback behavior Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "404 Not Found — POST /v1/messages/count_tokens"
common_causes:
  - "When the /v1/messages/count_tokens endpoint returns 404, Claude SDK/CLI falls back to sending max_tokens=1 probe requests to estimate token count. A single session can fire 250+ such probes per minute (each ~53KB with tool schema), exhausting the RPM quota and causing 429 errors for all users on the same API channel."
  - "New-api PR #4441 documents a real production incident: a single Claude Code Desktop session sends 250 count_tokens probe requests per minute when the endpoint returns 404, each request ~53KB with full tool schema but max_tokens=1, exhausting upstream RPM quota and causing 429 for all users on the channel for ~2 minutes."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Anthropic API 429 Too Many Requests"
  - "Claude Code SDK fallback behavior max_tokens=1"
  - "Anthropic API token estimation methods"
updated: "2026-05-13"
published_at: "2026-05-13T00:12:19.399Z"
updated_at: "2026-05-13T00:12:19.399Z"
---

## What this error means

`404 Not Found — POST /v1/messages/count_tokens` is a Anthropic API failure pattern reported for developers trying to fix 404 error when calling anthropic count_tokens endpoint, or resolve unexpected rate limiting caused by sdk fallback behavior. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

New-api PR #4441 documents a real production incident: a single Claude Code Desktop session sends 250 count_tokens probe requests per minute when the endpoint returns 404, each request ~53KB with full tool schema but max_tokens=1, exhausting upstream RPM quota and causing 429 for all users on the channel for ~2 minutes.

## Common causes

- When the /v1/messages/count_tokens endpoint returns 404, Claude SDK/CLI falls back to sending max_tokens=1 probe requests to estimate token count. A single session can fire 250+ such probes per minute (each ~53KB with tool schema), exhausting the RPM quota and causing 429 errors for all users on the same API channel.
- New-api PR #4441 documents a real production incident: a single Claude Code Desktop session sends 250 count_tokens probe requests per minute when the endpoint returns 404, each request ~53KB with full tool schema but max_tokens=1, exhausting upstream RPM quota and causing 429 for all users on the channel for ~2 minutes.

## Quick fixes

1. Confirm the exact error signature matches `404 Not Found — POST /v1/messages/count_tokens`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/QuantumNous/new-api/pull/4441

Evidence note: New-api PR #4441 documents a real production incident: a single Claude Code Desktop session sends 250 count_tokens probe requests per minute when the endpoint returns 404, each request ~53KB with full tool schema but max_tokens=1, exhausting upstream RPM quota and causing 429 for all users on the channel for ~2 minutes.

## Related errors

- Anthropic API 429 Too Many Requests
- Claude Code SDK fallback behavior max_tokens=1
- Anthropic API token estimation methods

## FAQ

### What should I check first?

Start with the exact `404 Not Found — POST /v1/messages/count_tokens` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `404 Not Found — POST /v1/messages/count_tokens`.
