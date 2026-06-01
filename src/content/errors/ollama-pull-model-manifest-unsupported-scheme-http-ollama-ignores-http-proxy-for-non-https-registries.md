---
title: "Ollara Pull Manifest Behind HTTP Proxy Fails Due to Plain HTTP Manifest Downloads"
description: "Fix Ollara model download failures behind corporate proxy when model manifests use plain HTTP (non-HTTPS) Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "pull model manifest: unsupported scheme \"http\" — Ollama ignores http_proxy for non-HTTPS registries"
common_causes:
  - "Issue #15358 on ollama/ollama: Ollama respects https_proxy but ignores http_proxy for manifest downloads, causing manifest fetch failures in environments where registry.ollama.ai serves manifests via HTTP. Related: issue #8050 (behind proxy can't pull new models). This is a growing issue as more enterprises use mixed-proxied environments. Category mapping: Ollama local LLM serving → Ollama."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Ollama"
updated: "2026-06-01"
published_at: "2026-06-01T14:44:27.164Z"
updated_at: "2026-06-01T14:44:27.164Z"
---

## What this error means

`pull model manifest: unsupported scheme "http" — Ollama ignores http_proxy for non-HTTPS registries` is a Ollama failure pattern reported for developers trying to fix ollara model download failures behind corporate proxy when model manifests use plain http (non-https). Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #15358 on ollama/ollama: Ollama respects https_proxy but ignores http_proxy for manifest downloads, causing manifest fetch failures in environments where registry.ollama.ai serves manifests via HTTP. Related: issue #8050 (behind proxy can't pull new models). This is a growing issue as more enterprises use mixed-proxied environments. Category mapping: Ollama local LLM serving → Ollama.

## Common causes

- Issue #15358 on ollama/ollama: Ollama respects https_proxy but ignores http_proxy for manifest downloads, causing manifest fetch failures in environments where registry.ollama.ai serves manifests via HTTP. Related: issue #8050 (behind proxy can't pull new models). This is a growing issue as more enterprises use mixed-proxied environments. Category mapping: Ollama local LLM serving → Ollama.

## Quick fixes

1. Confirm the exact error signature matches `pull model manifest: unsupported scheme "http" — Ollama ignores http_proxy for non-HTTPS registries`.
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
- https://github.com/ollama/ollama/issues/8050
- https://github.com/ollama/ollama/issues/11483

Evidence note: Issue #15358 on ollama/ollama: Ollama respects https_proxy but ignores http_proxy for manifest downloads, causing manifest fetch failures in environments where registry.ollama.ai serves manifests via HTTP. Related: issue #8050 (behind proxy can't pull new models). This is a growing issue as more enterprises use mixed-proxied environments. Category mapping: Ollama local LLM serving → Ollama.

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `pull model manifest: unsupported scheme "http" — Ollama ignores http_proxy for non-HTTPS registries` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `pull model manifest: unsupported scheme "http" — Ollama ignores http_proxy for non-HTTPS registries`.
