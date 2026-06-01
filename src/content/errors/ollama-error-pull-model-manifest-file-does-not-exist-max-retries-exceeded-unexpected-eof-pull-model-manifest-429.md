---
title: "Ollama 'pull model manifest: file does not exist' — network proxy/HF token issues"
description: "Fix Ollama model download failures caused by proxy misconfiguration, HuggingFace rate limiting (429), and missing environment variables during manifest fetching. Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "Error: pull model manifest: file does not exist / max retries exceeded: unexpected EOF / pull model manifest: 429"
common_causes:
  - "Found via tavily search covering Ollama-specific issues including GitHub #1770 report. Common error pattern during first-time model pulls or after network disruptions. Root causes include proxy env vars not applied during manifest requests, HF token rate limiting, and carrier NAT shared egress IPs. Commercial value moderate but growing as more enterprises adopt local LLM serving. Category: Ollama per approved categories."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Ollama"
updated: "2026-06-01"
published_at: "2026-06-01T20:44:27.806Z"
updated_at: "2026-06-01T20:44:27.806Z"
---

## What this error means

`Error: pull model manifest: file does not exist / max retries exceeded: unexpected EOF / pull model manifest: 429` is a Ollama failure pattern reported for developers trying to fix ollama model download failures caused by proxy misconfiguration, huggingface rate limiting (429), and missing environment variables during manifest fetching.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found via tavily search covering Ollama-specific issues including GitHub #1770 report. Common error pattern during first-time model pulls or after network disruptions. Root causes include proxy env vars not applied during manifest requests, HF token rate limiting, and carrier NAT shared egress IPs. Commercial value moderate but growing as more enterprises adopt local LLM serving. Category: Ollama per approved categories.

## Common causes

- Found via tavily search covering Ollama-specific issues including GitHub #1770 report. Common error pattern during first-time model pulls or after network disruptions. Root causes include proxy env vars not applied during manifest requests, HF token rate limiting, and carrier NAT shared egress IPs. Commercial value moderate but growing as more enterprises adopt local LLM serving. Category: Ollama per approved categories.

## Quick fixes

1. Confirm the exact error signature matches `Error: pull model manifest: file does not exist / max retries exceeded: unexpected EOF / pull model manifest: 429`.
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

- https://github.com/ollama/ollama/issues/1770
- https://stackoverflow.com/questions/79947633/pulling-manifest-error-pull-model-manifest-file-does-not-exist
- https://discuss.huggingface.co/t/error-when-trying-to-dowload-a-model-in-ollama/172540
- https://localaimaster.com/blog/ollama-troubleshooting-guide

Evidence note: Found via tavily search covering Ollama-specific issues including GitHub #1770 report. Common error pattern during first-time model pulls or after network disruptions. Root causes include proxy env vars not applied during manifest requests, HF token rate limiting, and carrier NAT shared egress IPs. Commercial value moderate but growing as more enterprises adopt local LLM serving. Category: Ollama per approved categories.

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `Error: pull model manifest: file does not exist / max retries exceeded: unexpected EOF / pull model manifest: 429` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: pull model manifest: file does not exist / max retries exceeded: unexpected EOF / pull model manifest: 429`.
