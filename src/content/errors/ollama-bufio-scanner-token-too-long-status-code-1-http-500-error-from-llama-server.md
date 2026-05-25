---
title: "Ollama Python Client: Large tool call response crashes — bufio.Scanner: token too long (HTTP 500)"
description: "Fix Ollama Python API crash when processing large multi-tool-call responses exceeding buffer limits Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "bufio.Scanner: token too long (status code: -1) / HTTP 500 error from llama-server"
common_causes:
  - "Issue #16243 on ollama/ollama: Custom Ollama Python client fails with 'bufio.Scanner: token too long' when model returns multiple large tool call responses. Returns HTTP 500. Context window 230k. Production-relevant for LLM app developers using tool calling at scale. No existing coverage on dev-error-db."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Ollama"
updated: "2026-05-25"
published_at: "2026-05-25T08:43:13.202Z"
updated_at: "2026-05-25T08:43:13.202Z"
---

## What this error means

`bufio.Scanner: token too long (status code: -1) / HTTP 500 error from llama-server` is a Ollama failure pattern reported for developers trying to fix ollama python api crash when processing large multi-tool-call responses exceeding buffer limits. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #16243 on ollama/ollama: Custom Ollama Python client fails with 'bufio.Scanner: token too long' when model returns multiple large tool call responses. Returns HTTP 500. Context window 230k. Production-relevant for LLM app developers using tool calling at scale. No existing coverage on dev-error-db.

## Common causes

- Issue #16243 on ollama/ollama: Custom Ollama Python client fails with 'bufio.Scanner: token too long' when model returns multiple large tool call responses. Returns HTTP 500. Context window 230k. Production-relevant for LLM app developers using tool calling at scale. No existing coverage on dev-error-db.

## Quick fixes

1. Confirm the exact error signature matches `bufio.Scanner: token too long (status code: -1) / HTTP 500 error from llama-server`.
2. Check the Ollama account, local tool state, and provider configuration involved in the failing workflow.
3. Compare the failing environment with a known working setup, then change one configuration value at a time.

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

- https://github.com/ollama/ollama/issues/16243

Evidence note: Issue #16243 on ollama/ollama: Custom Ollama Python client fails with 'bufio.Scanner: token too long' when model returns multiple large tool call responses. Returns HTTP 500. Context window 230k. Production-relevant for LLM app developers using tool calling at scale. No existing coverage on dev-error-db.

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `bufio.Scanner: token too long (status code: -1) / HTTP 500 error from llama-server` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `bufio.Scanner: token too long (status code: -1) / HTTP 500 error from llama-server`.
