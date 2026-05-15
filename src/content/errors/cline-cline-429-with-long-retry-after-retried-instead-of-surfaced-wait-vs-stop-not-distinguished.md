---
title: "Cline AI Coding Tool: 429 Rate Limit With Long Retry-After Retried Instead of Stopped"
description: "fix Cline 429 rate limit retry / Cline retry-after not respected Includes evidence for Cline troubleshooting demand."
category: "AI Coding Tools"
technology: "Cline"
error_signature: "Cline 429 with long retry-after retried instead of surfaced — WAIT vs STOP not distinguished"
common_causes:
  - "When Cline receives a 429 response with a long retry-after header, it retries the request instead of surfacing the error to the user. The WAIT vs STOP distinction is not implemented, leading to wasted API calls and confused developers."
  - "Reported 2026-04-04: Cline retries on 429 with long retry-after instead of surfacing error. Static analysis finding — not version-specific."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Cline API rate limit handling"
  - "Cline retry logic broken"
updated: "2026-05-15"
published_at: "2026-05-15T11:13:22.484Z"
updated_at: "2026-05-15T11:13:22.484Z"
---

## What this error means

`Cline 429 with long retry-after retried instead of surfaced — WAIT vs STOP not distinguished` is a Cline failure pattern reported for developers trying to fix cline 429 rate limit retry / cline retry-after not respected. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Reported 2026-04-04: Cline retries on 429 with long retry-after instead of surfacing error. Static analysis finding — not version-specific.

## Common causes

- When Cline receives a 429 response with a long retry-after header, it retries the request instead of surfacing the error to the user. The WAIT vs STOP distinction is not implemented, leading to wasted API calls and confused developers.
- Reported 2026-04-04: Cline retries on 429 with long retry-after instead of surfacing error. Static analysis finding — not version-specific.

## Quick fixes

1. Confirm the exact error signature matches `Cline 429 with long retry-after retried instead of surfaced — WAIT vs STOP not distinguished`.
2. Check the Cline account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/cline/cline/issues/10139

Evidence note: Reported 2026-04-04: Cline retries on 429 with long retry-after instead of surfacing error. Static analysis finding — not version-specific.

## Related errors

- Cline API rate limit handling
- Cline retry logic broken

## FAQ

### What should I check first?

Start with the exact `Cline 429 with long retry-after retried instead of surfaced — WAIT vs STOP not distinguished` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cline workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Cline 429 with long retry-after retried instead of surfaced — WAIT vs STOP not distinguished`.
