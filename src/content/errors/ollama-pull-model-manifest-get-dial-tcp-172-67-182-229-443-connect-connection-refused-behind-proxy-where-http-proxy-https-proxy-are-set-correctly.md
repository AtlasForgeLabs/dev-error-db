---
title: "Ollama Pull Fails Behind Corporate Proxy: Connection Refused on registry.ollama.ai"
description: "Fix Ollama model pull failing with connection refused behind corporate proxy despite correct HTTP_PROXY/HTTPS_PROXY environment variables Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "pull model manifest: Get \"\" dial tcp 172.67.182.229:443: connect: connection refused (behind proxy where http_proxy/https_proxy are set correctly)"
common_causes:
  - "GitHub issue #5844 on ollama/ollama: Users behind corporate proxy can successfully browse to registry.ollama.ai in browser but ollama pull fails with TCP connection refused. Proxy env vars verified correct. Also seen in #6140 (connection reset by peer). Affects enterprise users who must pull models through firewalls. High commercial value: local LLM serving blocked in corporate environments."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Ollama"
updated: "2026-06-01"
published_at: "2026-06-01T00:44:25.665Z"
updated_at: "2026-06-01T00:44:25.665Z"
---

## What this error means

`pull model manifest: Get "" dial tcp 172.67.182.229:443: connect: connection refused (behind proxy where http_proxy/https_proxy are set correctly)` is a Ollama failure pattern reported for developers trying to fix ollama model pull failing with connection refused behind corporate proxy despite correct http_proxy/https_proxy environment variables. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #5844 on ollama/ollama: Users behind corporate proxy can successfully browse to registry.ollama.ai in browser but ollama pull fails with TCP connection refused. Proxy env vars verified correct. Also seen in #6140 (connection reset by peer). Affects enterprise users who must pull models through firewalls. High commercial value: local LLM serving blocked in corporate environments.

## Common causes

- GitHub issue #5844 on ollama/ollama: Users behind corporate proxy can successfully browse to registry.ollama.ai in browser but ollama pull fails with TCP connection refused. Proxy env vars verified correct. Also seen in #6140 (connection reset by peer). Affects enterprise users who must pull models through firewalls. High commercial value: local LLM serving blocked in corporate environments.

## Quick fixes

1. Confirm the exact error signature matches `pull model manifest: Get "" dial tcp 172.67.182.229:443: connect: connection refused (behind proxy where http_proxy/https_proxy are set correctly)`.
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

- https://github.com/ollama/ollama/issues/5844
- https://github.com/ollama/ollama/issues/6140

Evidence note: GitHub issue #5844 on ollama/ollama: Users behind corporate proxy can successfully browse to registry.ollama.ai in browser but ollama pull fails with TCP connection refused. Proxy env vars verified correct. Also seen in #6140 (connection reset by peer). Affects enterprise users who must pull models through firewalls. High commercial value: local LLM serving blocked in corporate environments.

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `pull model manifest: Get "" dial tcp 172.67.182.229:443: connect: connection refused (behind proxy where http_proxy/https_proxy are set correctly)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `pull model manifest: Get "" dial tcp 172.67.182.229:443: connect: connection refused (behind proxy where http_proxy/https_proxy are set correctly)`.
