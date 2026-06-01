---
title: "Ollama Pull Failing With HuggingFace 429 Manifest Download Error Behind Corporate Proxy"
description: "Fix Ollama model pull failing with HuggingFace 429 rate limit error behind corporate proxy or VPN Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "pull model manifest: 429 — HuggingFace rate limit during Ollama model download"
common_causes:
  - "Hugging Face Forums post. Root cause: shared egress IPs/VPNs trigger HF rate limiting during model manifest requests. Workaround: set HTTPS_PROXY (not HTTP_PROXY), use HF_TOKEN env var in systemd service file. Technical detail-rich issue with clear fix path. Category mapping: Ollama local LLM serving error."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Ollama"
updated: "2026-06-01"
published_at: "2026-06-01T17:44:27.461Z"
updated_at: "2026-06-01T17:44:27.461Z"
---

## What this error means

`pull model manifest: 429 — HuggingFace rate limit during Ollama model download` is a Ollama failure pattern reported for developers trying to fix ollama model pull failing with huggingface 429 rate limit error behind corporate proxy or vpn. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Hugging Face Forums post. Root cause: shared egress IPs/VPNs trigger HF rate limiting during model manifest requests. Workaround: set HTTPS_PROXY (not HTTP_PROXY), use HF_TOKEN env var in systemd service file. Technical detail-rich issue with clear fix path. Category mapping: Ollama local LLM serving error.

## Common causes

- Hugging Face Forums post. Root cause: shared egress IPs/VPNs trigger HF rate limiting during model manifest requests. Workaround: set HTTPS_PROXY (not HTTP_PROXY), use HF_TOKEN env var in systemd service file. Technical detail-rich issue with clear fix path. Category mapping: Ollama local LLM serving error.

## Quick fixes

1. Confirm the exact error signature matches `pull model manifest: 429 — HuggingFace rate limit during Ollama model download`.
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

- https://discuss.huggingface.co/t/error-when-trying-to-dowload-a-model-in-ollama/172540

Evidence note: Hugging Face Forums post. Root cause: shared egress IPs/VPNs trigger HF rate limiting during model manifest requests. Workaround: set HTTPS_PROXY (not HTTP_PROXY), use HF_TOKEN env var in systemd service file. Technical detail-rich issue with clear fix path. Category mapping: Ollama local LLM serving error.

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `pull model manifest: 429 — HuggingFace rate limit during Ollama model download` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `pull model manifest: 429 — HuggingFace rate limit during Ollama model download`.
