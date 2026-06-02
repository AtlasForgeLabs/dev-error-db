---
title: "Ollama Pull Model Manifest Timeout TLS Handshake Fails on Docker Containers"
description: "Fix Ollama model pull failures caused by TLS handshake timeouts, DNS resolution failures, and network connectivity issues in Docker/Wsl environments Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "Error: pull model manifest: Get \"https://registry.ollama.ai/v2/library/.../manifests/latest\": net/http: TLS handshake timeout; dial tcp: lookup registry.ollama.ai: read udp ...: i/o timeout; Connection reset mid-download restarting from 0%"
common_causes:
  - "Tavily search results show multiple distinct sub-errors: (1) TLS handshake timeout pulling manifests from registry.ollama.ai, (2) DNS resolution failure for registry.ollama.ai on custom nameservers, (3) connection reset mid-download causing restart loop in v0.5.7. All affect local LLM workflows on containers/Docker. Commercial value for teams running on-premises LLM infra."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "Ollama"
updated: "2026-06-02"
published_at: "2026-06-02T00:44:28.335Z"
updated_at: "2026-06-02T00:44:28.335Z"
---

## What this error means

`Error: pull model manifest: Get "https://registry.ollama.ai/v2/library/.../manifests/latest": net/http: TLS handshake timeout; dial tcp: lookup registry.ollama.ai: read udp ...: i/o timeout; Connection reset mid-download restarting from 0%` is a Ollama failure pattern reported for developers trying to fix ollama model pull failures caused by tls handshake timeouts, dns resolution failures, and network connectivity issues in docker/wsl environments. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Tavily search results show multiple distinct sub-errors: (1) TLS handshake timeout pulling manifests from registry.ollama.ai, (2) DNS resolution failure for registry.ollama.ai on custom nameservers, (3) connection reset mid-download causing restart loop in v0.5.7. All affect local LLM workflows on containers/Docker. Commercial value for teams running on-premises LLM infra.

## Common causes

- Tavily search results show multiple distinct sub-errors: (1) TLS handshake timeout pulling manifests from registry.ollama.ai, (2) DNS resolution failure for registry.ollama.ai on custom nameservers, (3) connection reset mid-download causing restart loop in v0.5.7. All affect local LLM workflows on containers/Docker. Commercial value for teams running on-premises LLM infra.

## Quick fixes

1. Confirm the exact error signature matches `Error: pull model manifest: Get "https://registry.ollama.ai/v2/library/.../manifests/latest": net/http: TLS handshake timeout; dial tcp: lookup registry.ollama.ai: read udp ...: i/o timeout; Connection reset mid-download restarting from 0%`.
2. Check the Ollama account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the model name, local service connectivity, and network access before retrying the model pull.

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

- https://forums.docker.com/t/docker-ollama-error-pull-model-manifest-get-https-registry-ollama-ai-v2-library-llama2-manifests-latest/140256
- https://www.andreagrandi.it/posts/how-to-workaround-ollama-pull-issues

Evidence note: Tavily search results show multiple distinct sub-errors: (1) TLS handshake timeout pulling manifests from registry.ollama.ai, (2) DNS resolution failure for registry.ollama.ai on custom nameservers, (3) connection reset mid-download causing restart loop in v0.5.7. All affect local LLM workflows on containers/Docker. Commercial value for teams running on-premises LLM infra.

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `Error: pull model manifest: Get "https://registry.ollama.ai/v2/library/.../manifests/latest": net/http: TLS handshake timeout; dial tcp: lookup registry.ollama.ai: read udp ...: i/o timeout; Connection reset mid-download restarting from 0%` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: pull model manifest: Get "https://registry.ollama.ai/v2/library/.../manifests/latest": net/http: TLS handshake timeout; dial tcp: lookup registry.ollama.ai: read udp ...: i/o timeout; Connection reset mid-download restarting from 0%`.
