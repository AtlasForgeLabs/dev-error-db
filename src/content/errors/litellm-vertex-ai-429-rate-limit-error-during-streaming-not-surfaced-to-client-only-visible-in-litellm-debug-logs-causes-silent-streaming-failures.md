---
title: "Vertex AI 429 Rate Limit During Streaming Silently Hidden by LiteLLM"
description: "Fix LiteLLM hiding 429 rate limit errors from Vertex AI during streaming requests; clients see hung responses instead of actionable error Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Vertex AI 429 rate limit error during streaming not surfaced to client — only visible in LiteLLM debug logs, causes silent streaming failures"
common_causes:
  - "Source: https://github.com/BerriAI/litellm/issues/23707 (Mar 15, 2026). 429 error only visible in LiteLLM debug output, not propagated to calling client during streaming. Enterprise users relying on LiteLLM proxy get silent failures without visibility. Category: LiteLLM per mapping rules."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-05-19"
published_at: "2026-05-19T15:37:16.728Z"
updated_at: "2026-05-19T15:37:16.728Z"
---

## What this error means

`Vertex AI 429 rate limit error during streaming not surfaced to client — only visible in LiteLLM debug logs, causes silent streaming failures` is a LiteLLM failure pattern reported for developers trying to fix litellm hiding 429 rate limit errors from vertex ai during streaming requests; clients see hung responses instead of actionable error. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: https://github.com/BerriAI/litellm/issues/23707 (Mar 15, 2026). 429 error only visible in LiteLLM debug output, not propagated to calling client during streaming. Enterprise users relying on LiteLLM proxy get silent failures without visibility. Category: LiteLLM per mapping rules.

## Common causes

- Source: https://github.com/BerriAI/litellm/issues/23707 (Mar 15, 2026). 429 error only visible in LiteLLM debug output, not propagated to calling client during streaming. Enterprise users relying on LiteLLM proxy get silent failures without visibility. Category: LiteLLM per mapping rules.

## Quick fixes

1. Confirm the exact error signature matches `Vertex AI 429 rate limit error during streaming not surfaced to client — only visible in LiteLLM debug logs, causes silent streaming failures`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/23707

Evidence note: Source: https://github.com/BerriAI/litellm/issues/23707 (Mar 15, 2026). 429 error only visible in LiteLLM debug output, not propagated to calling client during streaming. Enterprise users relying on LiteLLM proxy get silent failures without visibility. Category: LiteLLM per mapping rules.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Vertex AI 429 rate limit error during streaming not surfaced to client — only visible in LiteLLM debug logs, causes silent streaming failures` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Vertex AI 429 rate limit error during streaming not surfaced to client — only visible in LiteLLM debug logs, causes silent streaming failures`.
