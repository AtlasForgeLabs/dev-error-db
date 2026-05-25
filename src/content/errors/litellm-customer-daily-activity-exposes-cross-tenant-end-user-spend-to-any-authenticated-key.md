---
title: "LiteLLM /customer/daily/activity endpoint exposes cross-tenant end-user spend to any authenticated key"
description: "Fix security vulnerability in LiteLLM proxy where the /customer/daily/activity API endpoint leaks one tenant's end-user spending data to any other authenticated API key Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "/customer/daily/activity exposes cross-tenant end-user spend to any authenticated key"
common_causes:
  - "GitHub issue #28570 in BerriAI/litellm (opened May 22, 2026). Critical security bug in LiteLLM multi-tenant proxy. Affects enterprise customers running LiteLLM as a shared cost-management layer across organizations. Cross-tenant data leakage is a high-severity finding. Source: https://github.com/BerriAI/litellm/issues/28570"
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "LiteLLM"
updated: "2026-05-25"
published_at: "2026-05-25T05:43:12.823Z"
updated_at: "2026-05-25T05:43:12.823Z"
---

## What this error means

`/customer/daily/activity exposes cross-tenant end-user spend to any authenticated key` is a LiteLLM failure pattern reported for developers trying to fix security vulnerability in litellm proxy where the /customer/daily/activity api endpoint leaks one tenant's end-user spending data to any other authenticated api key. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #28570 in BerriAI/litellm (opened May 22, 2026). Critical security bug in LiteLLM multi-tenant proxy. Affects enterprise customers running LiteLLM as a shared cost-management layer across organizations. Cross-tenant data leakage is a high-severity finding. Source: https://github.com/BerriAI/litellm/issues/28570

## Common causes

- GitHub issue #28570 in BerriAI/litellm (opened May 22, 2026). Critical security bug in LiteLLM multi-tenant proxy. Affects enterprise customers running LiteLLM as a shared cost-management layer across organizations. Cross-tenant data leakage is a high-severity finding. Source: https://github.com/BerriAI/litellm/issues/28570

## Quick fixes

1. Confirm the exact error signature matches `/customer/daily/activity exposes cross-tenant end-user spend to any authenticated key`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/BerriAI/litellm/issues/28570

Evidence note: GitHub issue #28570 in BerriAI/litellm (opened May 22, 2026). Critical security bug in LiteLLM multi-tenant proxy. Affects enterprise customers running LiteLLM as a shared cost-management layer across organizations. Cross-tenant data leakage is a high-severity finding. Source: https://github.com/BerriAI/litellm/issues/28570

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `/customer/daily/activity exposes cross-tenant end-user spend to any authenticated key` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `/customer/daily/activity exposes cross-tenant end-user spend to any authenticated key`.
