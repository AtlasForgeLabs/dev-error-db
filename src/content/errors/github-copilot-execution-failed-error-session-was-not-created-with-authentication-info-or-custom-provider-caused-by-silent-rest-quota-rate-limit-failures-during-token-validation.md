---
title: "CLI auth flow silently swallows REST quota/rate-limit errors during token validation"
description: "Debug misleading session auth error that actually stems from GitHub REST API quota (5000 req/hour) being hit during Copilot CLI token validation step Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "Execution failed: Error: Session was not created with authentication info or custom provider (caused by silent REST quota/rate-limit failures during token validation)"
common_causes:
  - "GitHub Issue github/copilot-cli#3311 — When COPILOT_SDK_AUTH_TOKEN hits 429/quota at GET /copilot_internal/user, the error is swallowed and surfaced as confusing 'Session not created with auth info'. Most common trigger: hitting GitHub's standard 5000 req/hour REST quota. High commercial value for enterprise Copilot teams."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "GitHub Copilot"
updated: "2026-05-21"
published_at: "2026-05-21T03:39:43.505Z"
updated_at: "2026-05-21T03:39:43.505Z"
---

## What this error means

`Execution failed: Error: Session was not created with authentication info or custom provider (caused by silent REST quota/rate-limit failures during token validation)` is a GitHub Copilot failure pattern reported for developers trying to debug misleading session auth error that actually stems from github rest api quota (5000 req/hour) being hit during copilot cli token validation step. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue github/copilot-cli#3311 — When COPILOT_SDK_AUTH_TOKEN hits 429/quota at GET /copilot_internal/user, the error is swallowed and surfaced as confusing 'Session not created with auth info'. Most common trigger: hitting GitHub's standard 5000 req/hour REST quota. High commercial value for enterprise Copilot teams.

## Common causes

- GitHub Issue github/copilot-cli#3311 — When COPILOT_SDK_AUTH_TOKEN hits 429/quota at GET /copilot_internal/user, the error is swallowed and surfaced as confusing 'Session not created with auth info'. Most common trigger: hitting GitHub's standard 5000 req/hour REST quota. High commercial value for enterprise Copilot teams.

## Quick fixes

1. Confirm the exact error signature matches `Execution failed: Error: Session was not created with authentication info or custom provider (caused by silent REST quota/rate-limit failures during token validation)`.
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

Evidence note: GitHub Issue github/copilot-cli#3311 — When COPILOT_SDK_AUTH_TOKEN hits 429/quota at GET /copilot_internal/user, the error is swallowed and surfaced as confusing 'Session not created with auth info'. Most common trigger: hitting GitHub's standard 5000 req/hour REST quota. High commercial value for enterprise Copilot teams.

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `Execution failed: Error: Session was not created with authentication info or custom provider (caused by silent REST quota/rate-limit failures during token validation)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Execution failed: Error: Session was not created with authentication info or custom provider (caused by silent REST quota/rate-limit failures during token validation)`.
