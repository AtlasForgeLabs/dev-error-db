---
title: "GitHub Copilot Pro+ user_weekly_rate_limited Error — Paid Account Rate-Limited for Days"
description: "Fix persistent Copilot Pro+ weekly rate limit that does not reset, blocking paid subscribers from using any model Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "Sorry, you've exceeded your 5 hour session limits. Please review our Terms of Service. Code: user_weekly_rate_limited:pro_plus"
common_causes:
  - "Multiple Copilot CLI issues (#2741, #2769, #2742) report Pro+ users hitting user_weekly_rate_limited:pro_plus that persists beyond expected reset windows; some blocked for 463+ hours. One account with active token allocation still gets global 429. High commercial value: affects paying customers. Mapped to GitHub Copilot per approved category list."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "GitHub Copilot"
updated: "2026-06-03"
published_at: "2026-06-03T01:44:31.462Z"
updated_at: "2026-06-03T01:44:31.462Z"
---

## What this error means

`Sorry, you've exceeded your 5 hour session limits. Please review our Terms of Service. Code: user_weekly_rate_limited:pro_plus` is a GitHub Copilot failure pattern reported for developers trying to fix persistent copilot pro+ weekly rate limit that does not reset, blocking paid subscribers from using any model. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple Copilot CLI issues (#2741, #2769, #2742) report Pro+ users hitting user_weekly_rate_limited:pro_plus that persists beyond expected reset windows; some blocked for 463+ hours. One account with active token allocation still gets global 429. High commercial value: affects paying customers. Mapped to GitHub Copilot per approved category list.

## Common causes

- Multiple Copilot CLI issues (#2741, #2769, #2742) report Pro+ users hitting user_weekly_rate_limited:pro_plus that persists beyond expected reset windows; some blocked for 463+ hours. One account with active token allocation still gets global 429. High commercial value: affects paying customers. Mapped to GitHub Copilot per approved category list.

## Quick fixes

1. Confirm the exact error signature matches `Sorry, you've exceeded your 5 hour session limits. Please review our Terms of Service. Code: user_weekly_rate_limited:pro_plus`.
2. Check the GitHub Copilot account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/github/copilot-cli/issues/2741
- https://github.com/github/copilot-cli/issues/2769
- https://github.com/github/copilot-cli/issues/2828
- https://github.com/github/copilot-cli/issues/2742

Evidence note: Multiple Copilot CLI issues (#2741, #2769, #2742) report Pro+ users hitting user_weekly_rate_limited:pro_plus that persists beyond expected reset windows; some blocked for 463+ hours. One account with active token allocation still gets global 429. High commercial value: affects paying customers. Mapped to GitHub Copilot per approved category list.

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `Sorry, you've exceeded your 5 hour session limits. Please review our Terms of Service. Code: user_weekly_rate_limited:pro_plus` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Sorry, you've exceeded your 5 hour session limits. Please review our Terms of Service. Code: user_weekly_rate_limited:pro_plus`.
