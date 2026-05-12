---
title: "LiteLLM Proxy 'No module named proxy_server' Error After Update"
description: "Fix 'No module named proxy_server' error after updating LiteLLM to 1.72.x Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "No module named 'proxy_server'"
common_causes:
  - "After updating LiteLLM to versions 1.72.7 or 1.72.8, users encounter 'No module named proxy_server' on startup and LiteLLM proxy crashes. Fix requires pip install litellm[proxy] but many users don't know this."
  - "After updating to LiteLLM 1.72.7 or 1.72.8, proxy server fails with 'No module named proxy_server'. Workaround: pip install litellm[proxy]. Affects enterprise users running LiteLLM as AI gateway for 100+ LLM APIs."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM proxy fails to start with Prisma NotConnectedError"
  - "LiteLLM proxy startup TypeError in check_view_exists"
updated: "2026-05-12"
published_at: "2026-05-12T05:10:49.187Z"
updated_at: "2026-05-12T05:10:49.187Z"
---

## What this error means

`No module named 'proxy_server'` is a LiteLLM failure pattern reported for developers trying to fix 'no module named proxy_server' error after updating litellm to 1.72.x. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

After updating to LiteLLM 1.72.7 or 1.72.8, proxy server fails with 'No module named proxy_server'. Workaround: pip install litellm[proxy]. Affects enterprise users running LiteLLM as AI gateway for 100+ LLM APIs.

## Common causes

- After updating LiteLLM to versions 1.72.7 or 1.72.8, users encounter 'No module named proxy_server' on startup and LiteLLM proxy crashes. Fix requires pip install litellm[proxy] but many users don't know this.
- After updating to LiteLLM 1.72.7 or 1.72.8, proxy server fails with 'No module named proxy_server'. Workaround: pip install litellm[proxy]. Affects enterprise users running LiteLLM as AI gateway for 100+ LLM APIs.

## Quick fixes

1. Confirm the exact error signature matches `No module named 'proxy_server'`.
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

- https://github.com/BerriAI/litellm/issues/11836

Evidence note: After updating to LiteLLM 1.72.7 or 1.72.8, proxy server fails with 'No module named proxy_server'. Workaround: pip install litellm[proxy]. Affects enterprise users running LiteLLM as AI gateway for 100+ LLM APIs.

## Related errors

- LiteLLM proxy fails to start with Prisma NotConnectedError
- LiteLLM proxy startup TypeError in check_view_exists

## FAQ

### What should I check first?

Start with the exact `No module named 'proxy_server'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `No module named 'proxy_server'`.
