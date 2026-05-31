---
title: "OpenAI Codex OAuth usage exhaustion produces no response and no error — silent failure UX"
description: "Add Codex-specific quota exhaustion detection to handle 'Plan limit reached' / 'usage_limit_exceeded' shapes missing from current substring-list detector Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "usage_limit_exceeded — Plan limit reached — No response, no error displayed, no toast, no spinner-stop after waiting 10s+"
common_causes:
  - "Issue #1765 in nesquena/hermes-webui (May 2026) reports OpenAI Codex OAuth accounts going silent on usage exhaustion — no signal whatsoever. Real response body contains phrasing like 'Plan limit reached', 'You've reached the limit of messages per window', 'usage_limit_exceeded'. High commercial value: Plus/Team users ($200/mo) hit quota and get zero feedback. Category: OpenAI API per SKILL.md."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-31"
published_at: "2026-05-31T16:44:24.929Z"
updated_at: "2026-05-31T16:44:24.929Z"
---

## What this error means

`usage_limit_exceeded — Plan limit reached — No response, no error displayed, no toast, no spinner-stop after waiting 10s+` is a OpenAI API failure pattern reported for developers trying to add codex-specific quota exhaustion detection to handle 'plan limit reached' / 'usage_limit_exceeded' shapes missing from current substring-list detector. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #1765 in nesquena/hermes-webui (May 2026) reports OpenAI Codex OAuth accounts going silent on usage exhaustion — no signal whatsoever. Real response body contains phrasing like 'Plan limit reached', 'You've reached the limit of messages per window', 'usage_limit_exceeded'. High commercial value: Plus/Team users ($200/mo) hit quota and get zero feedback. Category: OpenAI API per SKILL.md.

## Common causes

- Issue #1765 in nesquena/hermes-webui (May 2026) reports OpenAI Codex OAuth accounts going silent on usage exhaustion — no signal whatsoever. Real response body contains phrasing like 'Plan limit reached', 'You've reached the limit of messages per window', 'usage_limit_exceeded'. High commercial value: Plus/Team users ($200/mo) hit quota and get zero feedback. Category: OpenAI API per SKILL.md.

## Quick fixes

1. Confirm the exact error signature matches `usage_limit_exceeded — Plan limit reached — No response, no error displayed, no toast, no spinner-stop after waiting 10s+`.
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

Evidence note: Issue #1765 in nesquena/hermes-webui (May 2026) reports OpenAI Codex OAuth accounts going silent on usage exhaustion — no signal whatsoever. Real response body contains phrasing like 'Plan limit reached', 'You've reached the limit of messages per window', 'usage_limit_exceeded'. High commercial value: Plus/Team users ($200/mo) hit quota and get zero feedback. Category: OpenAI API per SKILL.md.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `usage_limit_exceeded — Plan limit reached — No response, no error displayed, no toast, no spinner-stop after waiting 10s+` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `usage_limit_exceeded — Plan limit reached — No response, no error displayed, no toast, no spinner-stop after waiting 10s+`.
