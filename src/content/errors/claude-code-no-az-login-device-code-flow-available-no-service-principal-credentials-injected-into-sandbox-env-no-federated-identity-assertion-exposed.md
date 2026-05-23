---
title: "Claude Code Azure CLI non-interactive auth path missing in cloud sessions"
description: "Add non-interactive Azure CLI authentication support in Claude Code cloud sessions so users can run ad-hoc azure commands without switching to desktop session Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "no az login device-code flow available, no service-principal credentials injected into sandbox env, no federated identity assertion exposed"
common_causes:
  - "GitHub Issue #60305 in anthropics/claude-code opened May 18, 2026 by user DKTouchstone — Cloud session users building on Azure cannot authenticate az CLI non-interactively. No OIDC token issuer exposed for federation, no service-principal credentials injection, no az login device-code flow. Current workarounds: Azure MCP server for read ops only, GitHub Actions OIDC for write ops (requires PR workflow), fall back to desktop session for ad-hoc azure work. Blocking SaaS developers using phone-driven cloud sessions. Category mapping: AI Coding Tools (Claude Code cloud sessions with enterprise auth requirements)."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-23"
published_at: "2026-05-23T11:39:50.405Z"
updated_at: "2026-05-23T11:39:50.405Z"
---

## What this error means

`no az login device-code flow available, no service-principal credentials injected into sandbox env, no federated identity assertion exposed` is a Claude Code failure pattern reported for developers trying to add non-interactive azure cli authentication support in claude code cloud sessions so users can run ad-hoc azure commands without switching to desktop session. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #60305 in anthropics/claude-code opened May 18, 2026 by user DKTouchstone — Cloud session users building on Azure cannot authenticate az CLI non-interactively. No OIDC token issuer exposed for federation, no service-principal credentials injection, no az login device-code flow. Current workarounds: Azure MCP server for read ops only, GitHub Actions OIDC for write ops (requires PR workflow), fall back to desktop session for ad-hoc azure work. Blocking SaaS developers using phone-driven cloud sessions. Category mapping: AI Coding Tools (Claude Code cloud sessions with enterprise auth requirements).

## Common causes

- GitHub Issue #60305 in anthropics/claude-code opened May 18, 2026 by user DKTouchstone — Cloud session users building on Azure cannot authenticate az CLI non-interactively. No OIDC token issuer exposed for federation, no service-principal credentials injection, no az login device-code flow. Current workarounds: Azure MCP server for read ops only, GitHub Actions OIDC for write ops (requires PR workflow), fall back to desktop session for ad-hoc azure work. Blocking SaaS developers using phone-driven cloud sessions. Category mapping: AI Coding Tools (Claude Code cloud sessions with enterprise auth requirements).

## Quick fixes

1. Confirm the exact error signature matches `no az login device-code flow available, no service-principal credentials injected into sandbox env, no federated identity assertion exposed`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/60305

Evidence note: GitHub Issue #60305 in anthropics/claude-code opened May 18, 2026 by user DKTouchstone — Cloud session users building on Azure cannot authenticate az CLI non-interactively. No OIDC token issuer exposed for federation, no service-principal credentials injection, no az login device-code flow. Current workarounds: Azure MCP server for read ops only, GitHub Actions OIDC for write ops (requires PR workflow), fall back to desktop session for ad-hoc azure work. Blocking SaaS developers using phone-driven cloud sessions. Category mapping: AI Coding Tools (Claude Code cloud sessions with enterprise auth requirements).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `no az login device-code flow available, no service-principal credentials injected into sandbox env, no federated identity assertion exposed` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `no az login device-code flow available, no service-principal credentials injected into sandbox env, no federated identity assertion exposed`.
