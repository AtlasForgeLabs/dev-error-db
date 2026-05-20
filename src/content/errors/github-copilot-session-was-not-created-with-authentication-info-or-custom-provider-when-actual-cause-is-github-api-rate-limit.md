---
title: "GitHub Copilot CLI auth silently swallows REST quota/rate-limit errors — confusing message surface"
description: "Developer authenticates with copilot CLI behind corporate firewall or heavy usage and hits GitHub API rate limit, but CLI hides the real 429/500 response and instead shows opaque 'Session was not created with authentication info' — unable to determine whether it's auth failure or rate limiting Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "Session was not created with authentication info or custom provider (when actual cause is GitHub API rate limit)"
common_causes:
  - "Source: https://github.com/github/copilot-cli/issues/3311 (created 2026-05-14). Bug: auth bootstrapper wraps the token validation request in a generic catch-all that swallows HTTP status codes and rewrites them as auth-info errors. Also reported via #3383 (copilot update fails with raw GitHub API rate limit error). Directly impacts paid Copilot subscribers. Clear actionable fix: surface actual HTTP error code and retry logic for transient 429s."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "GitHub Copilot"
updated: "2026-05-20"
published_at: "2026-05-20T02:38:18.417Z"
updated_at: "2026-05-20T02:38:18.417Z"
---

## What this error means

`Session was not created with authentication info or custom provider (when actual cause is GitHub API rate limit)` is a GitHub Copilot failure pattern reported for developers trying to developer authenticates with copilot cli behind corporate firewall or heavy usage and hits github api rate limit, but cli hides the real 429/500 response and instead shows opaque 'session was not created with authentication info' — unable to determine whether it's auth failure or rate limiting. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: https://github.com/github/copilot-cli/issues/3311 (created 2026-05-14). Bug: auth bootstrapper wraps the token validation request in a generic catch-all that swallows HTTP status codes and rewrites them as auth-info errors. Also reported via #3383 (copilot update fails with raw GitHub API rate limit error). Directly impacts paid Copilot subscribers. Clear actionable fix: surface actual HTTP error code and retry logic for transient 429s.

## Common causes

- Source: https://github.com/github/copilot-cli/issues/3311 (created 2026-05-14). Bug: auth bootstrapper wraps the token validation request in a generic catch-all that swallows HTTP status codes and rewrites them as auth-info errors. Also reported via #3383 (copilot update fails with raw GitHub API rate limit error). Directly impacts paid Copilot subscribers. Clear actionable fix: surface actual HTTP error code and retry logic for transient 429s.

## Quick fixes

1. Confirm the exact error signature matches `Session was not created with authentication info or custom provider (when actual cause is GitHub API rate limit)`.
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

- https://github.com/github/copilot-cli/issues/3311
- https://github.com/github/copilot-cli/issues/3383

Evidence note: Source: https://github.com/github/copilot-cli/issues/3311 (created 2026-05-14). Bug: auth bootstrapper wraps the token validation request in a generic catch-all that swallows HTTP status codes and rewrites them as auth-info errors. Also reported via #3383 (copilot update fails with raw GitHub API rate limit error). Directly impacts paid Copilot subscribers. Clear actionable fix: surface actual HTTP error code and retry logic for transient 429s.

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `Session was not created with authentication info or custom provider (when actual cause is GitHub API rate limit)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Session was not created with authentication info or custom provider (when actual cause is GitHub API rate limit)`.
