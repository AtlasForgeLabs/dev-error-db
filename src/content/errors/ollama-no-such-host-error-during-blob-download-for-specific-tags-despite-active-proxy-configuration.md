---
title: "Ollama proxy DNS resolution fails for specific model tags behind corporate proxy"
description: "Fix Ollama ignoring proxy DNS resolution when pulling large/specific model tags in restricted corporate networks Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "no such host error during blob download for specific tags despite active proxy configuration"
common_causes:
  - "Issue #15708 on ollama/ollama (Apr 19, 2026): Inconsistent DNS resolution behind HTTP/HTTPS proxy. Standard short tags pull fine but longer-suffixed tags fail with 'no such host' after manifest retrieval succeeds. Suggests retry/connection logic bypasses proxy DNS. Affects enterprise/corporate users. Source: https://github.com/ollama/ollama/issues/15708"
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Ollama"
updated: "2026-05-25"
published_at: "2026-05-25T12:43:13.797Z"
updated_at: "2026-05-25T12:43:13.797Z"
---

## What this error means

`no such host error during blob download for specific tags despite active proxy configuration` is a Ollama failure pattern reported for developers trying to fix ollama ignoring proxy dns resolution when pulling large/specific model tags in restricted corporate networks. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #15708 on ollama/ollama (Apr 19, 2026): Inconsistent DNS resolution behind HTTP/HTTPS proxy. Standard short tags pull fine but longer-suffixed tags fail with 'no such host' after manifest retrieval succeeds. Suggests retry/connection logic bypasses proxy DNS. Affects enterprise/corporate users. Source: https://github.com/ollama/ollama/issues/15708

## Common causes

- Issue #15708 on ollama/ollama (Apr 19, 2026): Inconsistent DNS resolution behind HTTP/HTTPS proxy. Standard short tags pull fine but longer-suffixed tags fail with 'no such host' after manifest retrieval succeeds. Suggests retry/connection logic bypasses proxy DNS. Affects enterprise/corporate users. Source: https://github.com/ollama/ollama/issues/15708

## Quick fixes

1. Confirm the exact error signature matches `no such host error during blob download for specific tags despite active proxy configuration`.
2. Check the Ollama account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/ollama/ollama/issues/15708

Evidence note: Issue #15708 on ollama/ollama (Apr 19, 2026): Inconsistent DNS resolution behind HTTP/HTTPS proxy. Standard short tags pull fine but longer-suffixed tags fail with 'no such host' after manifest retrieval succeeds. Suggests retry/connection logic bypasses proxy DNS. Affects enterprise/corporate users. Source: https://github.com/ollama/ollama/issues/15708

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `no such host error during blob download for specific tags despite active proxy configuration` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `no such host error during blob download for specific tags despite active proxy configuration`.
