---
title: "Agent Runtime Dies on 429 Rate-Limit with No Recovery Path"
description: "Production agents running Anthropic/OpenAI get permanently killed by transient 429 errors; users need automatic retry/fallback chain instead of manual intervention Includes evidence for Paperclip (AutoGen-like Agent Framework) troubleshooting demand."
category: "OpenAI API"
technology: "Paperclip (AutoGen-like Agent Framework)"
error_signature: "stopReason=error; agent transitions to error state after provider returns 429/rate-limit; no retry or model fallback occurs"
common_causes:
  - "GitHub issue #1861 on paperclipai/paperclip repo (Mar 26, 2026). Well-documented real-world impact: overnight agent kills causing hours of downtime. Multiple contributors submitted PRs with exponential backoff fixes (PR #1880, #2624). High commercial value as it affects multi-provider production workflows."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-21"
published_at: "2026-05-21T11:39:44.393Z"
updated_at: "2026-05-21T11:39:44.393Z"
---

## What this error means

`stopReason=error; agent transitions to error state after provider returns 429/rate-limit; no retry or model fallback occurs` is a Paperclip (AutoGen-like Agent Framework) failure pattern reported for developers trying to production agents running anthropic/openai get permanently killed by transient 429 errors; users need automatic retry/fallback chain instead of manual intervention. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #1861 on paperclipai/paperclip repo (Mar 26, 2026). Well-documented real-world impact: overnight agent kills causing hours of downtime. Multiple contributors submitted PRs with exponential backoff fixes (PR #1880, #2624). High commercial value as it affects multi-provider production workflows.

## Common causes

- GitHub issue #1861 on paperclipai/paperclip repo (Mar 26, 2026). Well-documented real-world impact: overnight agent kills causing hours of downtime. Multiple contributors submitted PRs with exponential backoff fixes (PR #1880, #2624). High commercial value as it affects multi-provider production workflows.

## Quick fixes

1. Confirm the exact error signature matches `stopReason=error; agent transitions to error state after provider returns 429/rate-limit; no retry or model fallback occurs`.
2. Check the Paperclip (AutoGen-like Agent Framework) account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/paperclipai/paperclip/issues/1861

Evidence note: GitHub issue #1861 on paperclipai/paperclip repo (Mar 26, 2026). Well-documented real-world impact: overnight agent kills causing hours of downtime. Multiple contributors submitted PRs with exponential backoff fixes (PR #1880, #2624). High commercial value as it affects multi-provider production workflows.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `stopReason=error; agent transitions to error state after provider returns 429/rate-limit; no retry or model fallback occurs` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Paperclip (AutoGen-like Agent Framework) workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `stopReason=error; agent transitions to error state after provider returns 429/rate-limit; no retry or model fallback occurs`.
