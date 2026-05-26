---
title: "Claude Code ECONNRESET on startup (~40-70% failure rate) — socket closed unexpectedly during parallel HTTPS fetches"
description: "Users experience 40-70% startup failures when invoking Claude Code interactively or via one-shot mode with non-trivial responses; ECONNRESET (TCP RST) during Bun HTTP client parallel startup fetches Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "API Error: The socket connection was closed unexpectedly."
common_causes:
  - "Source: https://github.com/anthropics/claude-code/issues/62327 (opened May 26 2026). Reproduced across v2.1.140–v2.1.150. Race condition in Bun HTTP client: N parallel HTTPS requests dispatched immediately after constructing mTLS agent cause sockets to get reset before TLS handshake completes. Retry policy ignores BUN_CONFIG_HTTP_RETRY_COUNT. Network-level raw TLS works fine (PowerShell Invoke-WebRequest 30/30 success), isolating the issue to Bun client code path."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-26"
published_at: "2026-05-26T06:43:16.143Z"
updated_at: "2026-05-26T06:43:16.143Z"
---

## What this error means

`API Error: The socket connection was closed unexpectedly.` is a Claude Code failure pattern reported for developers trying to users experience 40-70% startup failures when invoking claude code interactively or via one-shot mode with non-trivial responses; econnreset (tcp rst) during bun http client parallel startup fetches. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: https://github.com/anthropics/claude-code/issues/62327 (opened May 26 2026). Reproduced across v2.1.140–v2.1.150. Race condition in Bun HTTP client: N parallel HTTPS requests dispatched immediately after constructing mTLS agent cause sockets to get reset before TLS handshake completes. Retry policy ignores BUN_CONFIG_HTTP_RETRY_COUNT. Network-level raw TLS works fine (PowerShell Invoke-WebRequest 30/30 success), isolating the issue to Bun client code path.

## Common causes

- Source: https://github.com/anthropics/claude-code/issues/62327 (opened May 26 2026). Reproduced across v2.1.140–v2.1.150. Race condition in Bun HTTP client: N parallel HTTPS requests dispatched immediately after constructing mTLS agent cause sockets to get reset before TLS handshake completes. Retry policy ignores BUN_CONFIG_HTTP_RETRY_COUNT. Network-level raw TLS works fine (PowerShell Invoke-WebRequest 30/30 success), isolating the issue to Bun client code path.

## Quick fixes

1. Confirm the exact error signature matches `API Error: The socket connection was closed unexpectedly.`.
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

- https://github.com/anthropics/claude-code/issues/62327

Evidence note: Source: https://github.com/anthropics/claude-code/issues/62327 (opened May 26 2026). Reproduced across v2.1.140–v2.1.150. Race condition in Bun HTTP client: N parallel HTTPS requests dispatched immediately after constructing mTLS agent cause sockets to get reset before TLS handshake completes. Retry policy ignores BUN_CONFIG_HTTP_RETRY_COUNT. Network-level raw TLS works fine (PowerShell Invoke-WebRequest 30/30 success), isolating the issue to Bun client code path.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `API Error: The socket connection was closed unexpectedly.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: The socket connection was closed unexpectedly.`.
