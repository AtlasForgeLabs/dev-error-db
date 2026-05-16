---
title: "Fix Ollama ignoring http_proxy settings — model downloads fail behind corporate proxy"
description: "Fix Ollama ignoring http_proxy environment variable when downloading models that use plain HTTP manifests, causing connection refused behind proxies Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "request failed: Get \"http://registry.ollama.ai/v2/...\": dial tcp: connect: connection refused"
common_causes:
  - "ollama/ollama#15358 — Ollama deployed behind proxy cannot download models using plain HTTP manifests because it ignores http_proxy settings. HTTPS manifests work fine. Affects enterprise/corporate deployments. Category mapping: Ollama → Ollama (exact mapping)."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Ollama"
updated: "2026-05-16"
published_at: "2026-05-16T09:13:25.125Z"
updated_at: "2026-05-16T09:13:25.125Z"
---

## What this error means

`request failed: Get "http://registry.ollama.ai/v2/...": dial tcp: connect: connection refused` is a Ollama failure pattern reported for developers trying to fix ollama ignoring http_proxy environment variable when downloading models that use plain http manifests, causing connection refused behind proxies. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

ollama/ollama#15358 — Ollama deployed behind proxy cannot download models using plain HTTP manifests because it ignores http_proxy settings. HTTPS manifests work fine. Affects enterprise/corporate deployments. Category mapping: Ollama → Ollama (exact mapping).

## Common causes

- ollama/ollama#15358 — Ollama deployed behind proxy cannot download models using plain HTTP manifests because it ignores http_proxy settings. HTTPS manifests work fine. Affects enterprise/corporate deployments. Category mapping: Ollama → Ollama (exact mapping).

## Quick fixes

1. Confirm the exact error signature matches `request failed: Get "http://registry.ollama.ai/v2/...": dial tcp: connect: connection refused`.
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

- https://github.com/ollama/ollama/issues/15358

Evidence note: ollama/ollama#15358 — Ollama deployed behind proxy cannot download models using plain HTTP manifests because it ignores http_proxy settings. HTTPS manifests work fine. Affects enterprise/corporate deployments. Category mapping: Ollama → Ollama (exact mapping).

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `request failed: Get "http://registry.ollama.ai/v2/...": dial tcp: connect: connection refused` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `request failed: Get "http://registry.ollama.ai/v2/...": dial tcp: connect: connection refused`.
