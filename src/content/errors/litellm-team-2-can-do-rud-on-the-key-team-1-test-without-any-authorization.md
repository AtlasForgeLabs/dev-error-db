---
title: "LiteLLM Proxy Security Vulnerability — Cross-Team Key Access on /v1/memory CRUD Endpoints"
description: "Fix LiteLLM proxy cross-team authorization bypass on memory CRUD endpoints Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Team 2 can do RUD on the key team-1:test without any authorization"
common_causes:
  - "Security teams and LiteLLM proxy administrators discover that Team 2 can read, update, and delete Team 1's API keys without authorization. This is a multi-tenant isolation failure in a production proxy handling paid API traffic."
  - "Official LiteLLM issue #27722 (2026-05-12) reports security vulnerability: Team 2 can perform RUD operations on Team 1's API keys created via /v1/memory endpoints without authorization. Multi-tenant isolation failure."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "LiteLLM team isolation configuration"
  - "LiteLLM API key permission scoping"
updated: "2026-05-12"
published_at: "2026-05-12T09:11:33.796Z"
updated_at: "2026-05-12T09:11:33.796Z"
---

## What this error means

`Team 2 can do RUD on the key team-1:test without any authorization` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy cross-team authorization bypass on memory crud endpoints. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Official LiteLLM issue #27722 (2026-05-12) reports security vulnerability: Team 2 can perform RUD operations on Team 1's API keys created via /v1/memory endpoints without authorization. Multi-tenant isolation failure.

## Common causes

- Security teams and LiteLLM proxy administrators discover that Team 2 can read, update, and delete Team 1's API keys without authorization. This is a multi-tenant isolation failure in a production proxy handling paid API traffic.
- Official LiteLLM issue #27722 (2026-05-12) reports security vulnerability: Team 2 can perform RUD operations on Team 1's API keys created via /v1/memory endpoints without authorization. Multi-tenant isolation failure.

## Quick fixes

1. Confirm the exact error signature matches `Team 2 can do RUD on the key team-1:test without any authorization`.
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

- https://github.com/BerriAI/litellm/issues/27722

Evidence note: Official LiteLLM issue #27722 (2026-05-12) reports security vulnerability: Team 2 can perform RUD operations on Team 1's API keys created via /v1/memory endpoints without authorization. Multi-tenant isolation failure.

## Related errors

- LiteLLM team isolation configuration
- LiteLLM API key permission scoping

## FAQ

### What should I check first?

Start with the exact `Team 2 can do RUD on the key team-1:test without any authorization` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Team 2 can do RUD on the key team-1:test without any authorization`.
