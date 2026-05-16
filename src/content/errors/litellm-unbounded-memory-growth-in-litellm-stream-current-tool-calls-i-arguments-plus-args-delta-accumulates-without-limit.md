---
title: "LiteLLM Stream Tool Call Arguments Unbounded Memory Growth"
description: "Fix LiteLLM stream memory leak — prevent unbounded tool_call arguments accumulation during streaming Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Unbounded memory growth in LiteLLM stream — current_tool_calls[i]['arguments'] += args_delta accumulates without limit"
common_causes:
  - "Issue #349 on pytaskforce: LiteLLM stream accumulates tool_call arguments via string concatenation without size limit. Malicious or glitched model output sending megabytes of JSON in arguments can crash the process. Clear memory safety bug in production LiteLLM proxy usage."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-16"
published_at: "2026-05-16T08:13:24.995Z"
updated_at: "2026-05-16T08:13:24.995Z"
---

## What this error means

`Unbounded memory growth in LiteLLM stream — current_tool_calls[i]['arguments'] += args_delta accumulates without limit` is a LiteLLM failure pattern reported for developers trying to fix litellm stream memory leak — prevent unbounded tool_call arguments accumulation during streaming. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #349 on pytaskforce: LiteLLM stream accumulates tool_call arguments via string concatenation without size limit. Malicious or glitched model output sending megabytes of JSON in arguments can crash the process. Clear memory safety bug in production LiteLLM proxy usage.

## Common causes

- Issue #349 on pytaskforce: LiteLLM stream accumulates tool_call arguments via string concatenation without size limit. Malicious or glitched model output sending megabytes of JSON in arguments can crash the process. Clear memory safety bug in production LiteLLM proxy usage.

## Quick fixes

1. Confirm the exact error signature matches `Unbounded memory growth in LiteLLM stream — current_tool_calls[i]['arguments'] += args_delta accumulates without limit`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/rudi77/pytaskforce/issues/349

Evidence note: Issue #349 on pytaskforce: LiteLLM stream accumulates tool_call arguments via string concatenation without size limit. Malicious or glitched model output sending megabytes of JSON in arguments can crash the process. Clear memory safety bug in production LiteLLM proxy usage.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Unbounded memory growth in LiteLLM stream — current_tool_calls[i]['arguments'] += args_delta accumulates without limit` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Unbounded memory growth in LiteLLM stream — current_tool_calls[i]['arguments'] += args_delta accumulates without limit`.
