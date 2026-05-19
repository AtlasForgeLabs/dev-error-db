---
title: "Claude Code gateway model discovery fails silently when auth uses apiKeyHelper"
description: "Debug why Claude Code gateway returns no available models when authentication is provided via apiKeyHelper rather than direct config; silent failure makes troubleshooting difficult Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Gateway model discovery silently fails when auth comes from apiKeyHelper — models list appears empty despite valid credentials"
common_causes:
  - "GitHub Issue #56675 in anthropics/claude-code (opened May 6 2026, ericwinsor-aisi). Silent failure pattern — no error thrown, just empty model list. Has repro on Linux. Tags area:auth + area:providers + bug. Affects enterprise deployment scenarios using centralized auth. Category mapping: AI Coding Tools (model discovery failure on gateway deployment)."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-19"
published_at: "2026-05-19T17:37:16.979Z"
updated_at: "2026-05-19T17:37:16.979Z"
---

## What this error means

`Gateway model discovery silently fails when auth comes from apiKeyHelper — models list appears empty despite valid credentials` is a Claude Code failure pattern reported for developers trying to debug why claude code gateway returns no available models when authentication is provided via apikeyhelper rather than direct config; silent failure makes troubleshooting difficult. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #56675 in anthropics/claude-code (opened May 6 2026, ericwinsor-aisi). Silent failure pattern — no error thrown, just empty model list. Has repro on Linux. Tags area:auth + area:providers + bug. Affects enterprise deployment scenarios using centralized auth. Category mapping: AI Coding Tools (model discovery failure on gateway deployment).

## Common causes

- GitHub Issue #56675 in anthropics/claude-code (opened May 6 2026, ericwinsor-aisi). Silent failure pattern — no error thrown, just empty model list. Has repro on Linux. Tags area:auth + area:providers + bug. Affects enterprise deployment scenarios using centralized auth. Category mapping: AI Coding Tools (model discovery failure on gateway deployment).

## Quick fixes

1. Confirm the exact error signature matches `Gateway model discovery silently fails when auth comes from apiKeyHelper — models list appears empty despite valid credentials`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/56675

Evidence note: GitHub Issue #56675 in anthropics/claude-code (opened May 6 2026, ericwinsor-aisi). Silent failure pattern — no error thrown, just empty model list. Has repro on Linux. Tags area:auth + area:providers + bug. Affects enterprise deployment scenarios using centralized auth. Category mapping: AI Coding Tools (model discovery failure on gateway deployment).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Gateway model discovery silently fails when auth comes from apiKeyHelper — models list appears empty despite valid credentials` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Gateway model discovery silently fails when auth comes from apiKeyHelper — models list appears empty despite valid credentials`.
