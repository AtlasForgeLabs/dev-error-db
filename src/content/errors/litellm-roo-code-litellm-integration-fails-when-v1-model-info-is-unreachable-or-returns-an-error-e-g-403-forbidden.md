---
title: "Roo Code LiteLLM integration fails when /v1/model/info returns error"
description: "Fix Roo Code crashing when connecting to LiteLLM proxy — /v1/model/info endpoint unreachable or returns 403, causing entire IDE integration to fail without graceful fallback Includes evidence for LiteLLM / Roo Code troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM / Roo Code"
error_signature: "LiteLLM Integration Fails When /v1/model/info Is unreachable or returns an error (e.g., 403 Forbidden)"
common_causes:
  - "GitHub Issue #11898 in RooCodeInc/Roo-Code (Mar 2026). Roo Code requires /v1/model/info but should gracefully fallback to /v1/models when unavailable. Affects IDE plugin integrations with LiteLLM proxies. Category mapping: LiteLLM (proxy integration failure). Distinct from generic proxy errors — focuses on client-side integration robustness."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-30"
published_at: "2026-05-30T04:43:28.259Z"
updated_at: "2026-05-30T04:43:28.259Z"
---

## What this error means

`LiteLLM Integration Fails When /v1/model/info Is unreachable or returns an error (e.g., 403 Forbidden)` is a LiteLLM / Roo Code failure pattern reported for developers trying to fix roo code crashing when connecting to litellm proxy — /v1/model/info endpoint unreachable or returns 403, causing entire ide integration to fail without graceful fallback. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #11898 in RooCodeInc/Roo-Code (Mar 2026). Roo Code requires /v1/model/info but should gracefully fallback to /v1/models when unavailable. Affects IDE plugin integrations with LiteLLM proxies. Category mapping: LiteLLM (proxy integration failure). Distinct from generic proxy errors — focuses on client-side integration robustness.

## Common causes

- GitHub Issue #11898 in RooCodeInc/Roo-Code (Mar 2026). Roo Code requires /v1/model/info but should gracefully fallback to /v1/models when unavailable. Affects IDE plugin integrations with LiteLLM proxies. Category mapping: LiteLLM (proxy integration failure). Distinct from generic proxy errors — focuses on client-side integration robustness.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM Integration Fails When /v1/model/info Is unreachable or returns an error (e.g., 403 Forbidden)`.
2. Check the LiteLLM / Roo Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/RooCodeInc/Roo-Code/issues/11898

Evidence note: GitHub Issue #11898 in RooCodeInc/Roo-Code (Mar 2026). Roo Code requires /v1/model/info but should gracefully fallback to /v1/models when unavailable. Affects IDE plugin integrations with LiteLLM proxies. Category mapping: LiteLLM (proxy integration failure). Distinct from generic proxy errors — focuses on client-side integration robustness.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `LiteLLM Integration Fails When /v1/model/info Is unreachable or returns an error (e.g., 403 Forbidden)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM / Roo Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM Integration Fails When /v1/model/info Is unreachable or returns an error (e.g., 403 Forbidden)`.
