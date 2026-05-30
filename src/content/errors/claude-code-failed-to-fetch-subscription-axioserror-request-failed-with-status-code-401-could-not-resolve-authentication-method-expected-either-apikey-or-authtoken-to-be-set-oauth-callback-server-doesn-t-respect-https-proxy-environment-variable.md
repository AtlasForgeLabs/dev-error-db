---
title: "Claude Code OAuth Authentication Fails Behind Corporate Proxy in Remote Development Environments"
description: "Fix Claude Code OAuth login failing with 401 error when using remote development via VS Code Remote-SSH behind a corporate proxy Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Failed to fetch subscription: AxiosError: Request failed with status code 401; Could not resolve authentication method. Expected either apiKey or authToken to be set. OAuth callback server doesn't respect HTTPS_PROXY environment variable"
common_causes:
  - "GitHub issue anthropics/claude-code#11464 opened Nov 12, 2025, closed as duplicate of #12353 — detailed report showing OAuth flow completes but API calls fail with 401 because the OAuth callback server ignores $HTTPS_PROXY. Root cause identified: different HTTP clients used, only API client respects proxy. Multiple users affected (#12353, #12087, #12442). Workaround: use ANTHROPIC_API_KEY env var instead of OAuth."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-30"
published_at: "2026-05-30T23:43:29.956Z"
updated_at: "2026-05-30T23:43:29.956Z"
---

## What this error means

`Failed to fetch subscription: AxiosError: Request failed with status code 401; Could not resolve authentication method. Expected either apiKey or authToken to be set. OAuth callback server doesn't respect HTTPS_PROXY environment variable` is a Claude Code failure pattern reported for developers trying to fix claude code oauth login failing with 401 error when using remote development via vs code remote-ssh behind a corporate proxy. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue anthropics/claude-code#11464 opened Nov 12, 2025, closed as duplicate of #12353 — detailed report showing OAuth flow completes but API calls fail with 401 because the OAuth callback server ignores $HTTPS_PROXY. Root cause identified: different HTTP clients used, only API client respects proxy. Multiple users affected (#12353, #12087, #12442). Workaround: use ANTHROPIC_API_KEY env var instead of OAuth.

## Common causes

- GitHub issue anthropics/claude-code#11464 opened Nov 12, 2025, closed as duplicate of #12353 — detailed report showing OAuth flow completes but API calls fail with 401 because the OAuth callback server ignores $HTTPS_PROXY. Root cause identified: different HTTP clients used, only API client respects proxy. Multiple users affected (#12353, #12087, #12442). Workaround: use ANTHROPIC_API_KEY env var instead of OAuth.

## Quick fixes

1. Confirm the exact error signature matches `Failed to fetch subscription: AxiosError: Request failed with status code 401; Could not resolve authentication method. Expected either apiKey or authToken to be set. OAuth callback server doesn't respect HTTPS_PROXY environment variable`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/11464
- https://github.com/anthropics/claude-code/issues/12353

Evidence note: GitHub issue anthropics/claude-code#11464 opened Nov 12, 2025, closed as duplicate of #12353 — detailed report showing OAuth flow completes but API calls fail with 401 because the OAuth callback server ignores $HTTPS_PROXY. Root cause identified: different HTTP clients used, only API client respects proxy. Multiple users affected (#12353, #12087, #12442). Workaround: use ANTHROPIC_API_KEY env var instead of OAuth.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Failed to fetch subscription: AxiosError: Request failed with status code 401; Could not resolve authentication method. Expected either apiKey or authToken to be set. OAuth callback server doesn't respect HTTPS_PROXY environment variable` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Failed to fetch subscription: AxiosError: Request failed with status code 401; Could not resolve authentication method. Expected either apiKey or authToken to be set. OAuth callback server doesn't respect HTTPS_PROXY environment variable`.
