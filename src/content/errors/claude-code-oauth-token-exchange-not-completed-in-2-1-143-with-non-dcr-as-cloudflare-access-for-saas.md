---
title: "Claude Code OAuth Token Exchange Fails with Cloudflare Access (SaaS OIDC) — accessToken Never Persisted"
description: "Fix OAuth token exchange failure when Claude Code connects to remote MCP server behind Cloudflare Access SaaS Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth Token Exchange not completed in 2.1.143 with non-DCR AS (Cloudflare Access for SaaS)"
common_causes:
  - "GitHub issue #60395 on anthropics/claude-code (2026-05-19). Browser authorization completes successfully via Cloudflare OTP flow, but subsequent POST to token endpoint either fails or response never persists — ~/.claude.json never receives accessToken. Regression suspected from v2.1.80. Category: Claude Code → 'AI Coding Tools' per approved mapping."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-19"
published_at: "2026-05-19T02:37:14.939Z"
updated_at: "2026-05-19T02:37:14.939Z"
---

## What this error means

`OAuth Token Exchange not completed in 2.1.143 with non-DCR AS (Cloudflare Access for SaaS)` is a Claude Code failure pattern reported for developers trying to fix oauth token exchange failure when claude code connects to remote mcp server behind cloudflare access saas. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #60395 on anthropics/claude-code (2026-05-19). Browser authorization completes successfully via Cloudflare OTP flow, but subsequent POST to token endpoint either fails or response never persists — ~/.claude.json never receives accessToken. Regression suspected from v2.1.80. Category: Claude Code → 'AI Coding Tools' per approved mapping.

## Common causes

- GitHub issue #60395 on anthropics/claude-code (2026-05-19). Browser authorization completes successfully via Cloudflare OTP flow, but subsequent POST to token endpoint either fails or response never persists — ~/.claude.json never receives accessToken. Regression suspected from v2.1.80. Category: Claude Code → 'AI Coding Tools' per approved mapping.

## Quick fixes

1. Confirm the exact error signature matches `OAuth Token Exchange not completed in 2.1.143 with non-DCR AS (Cloudflare Access for SaaS)`.
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

- https://github.com/anthropics/claude-code/issues/60395

Evidence note: GitHub issue #60395 on anthropics/claude-code (2026-05-19). Browser authorization completes successfully via Cloudflare OTP flow, but subsequent POST to token endpoint either fails or response never persists — ~/.claude.json never receives accessToken. Regression suspected from v2.1.80. Category: Claude Code → 'AI Coding Tools' per approved mapping.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `OAuth Token Exchange not completed in 2.1.143 with non-DCR AS (Cloudflare Access for SaaS)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth Token Exchange not completed in 2.1.143 with non-DCR AS (Cloudflare Access for SaaS)`.
