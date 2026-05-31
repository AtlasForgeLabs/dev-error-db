---
title: "Rate-limit 429 causes Codex CLI abort / raw-mode crash"
description: "Fix OpenAI rate limit (429) crash causing Codex CLI to abort unexpectedly during production use Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "[Error]: Rate limit reached for o3 in organization org-REDACTED on tokens per min (TPM): Limit 30000, Used 23669, Requested 32760 — Please try again in X seconds."
common_causes:
  - "Tavily search returned high-signal source from openai/codex repo (#157). Error blocks tool usage directly. Maps to OpenAI API category per approved mapping. High commercial value — TPM limits hit frequently in paid org tier. No coverage gap on dev-error-db.com for CLI-specific 429 crash behavior (not generic web usage). Tier 0 attempted (GitHub API), limited by anonymous rate cap; degraded to Tier 1 Tavily search + snippet extraction."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-31"
published_at: "2026-05-31T06:44:23.637Z"
updated_at: "2026-05-31T06:44:23.637Z"
---

## What this error means

`[Error]: Rate limit reached for o3 in organization org-REDACTED on tokens per min (TPM): Limit 30000, Used 23669, Requested 32760 — Please try again in X seconds.` is a OpenAI API failure pattern reported for developers trying to fix openai rate limit (429) crash causing codex cli to abort unexpectedly during production use. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Tavily search returned high-signal source from openai/codex repo (#157). Error blocks tool usage directly. Maps to OpenAI API category per approved mapping. High commercial value — TPM limits hit frequently in paid org tier. No coverage gap on dev-error-db.com for CLI-specific 429 crash behavior (not generic web usage). Tier 0 attempted (GitHub API), limited by anonymous rate cap; degraded to Tier 1 Tavily search + snippet extraction.

## Common causes

- Tavily search returned high-signal source from openai/codex repo (#157). Error blocks tool usage directly. Maps to OpenAI API category per approved mapping. High commercial value — TPM limits hit frequently in paid org tier. No coverage gap on dev-error-db.com for CLI-specific 429 crash behavior (not generic web usage). Tier 0 attempted (GitHub API), limited by anonymous rate cap; degraded to Tier 1 Tavily search + snippet extraction.

## Quick fixes

1. Confirm the exact error signature matches `[Error]: Rate limit reached for o3 in organization org-REDACTED on tokens per min (TPM): Limit 30000, Used 23669, Requested 32760 — Please try again in X seconds.`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/codex/issues/157

Evidence note: Tavily search returned high-signal source from openai/codex repo (#157). Error blocks tool usage directly. Maps to OpenAI API category per approved mapping. High commercial value — TPM limits hit frequently in paid org tier. No coverage gap on dev-error-db.com for CLI-specific 429 crash behavior (not generic web usage). Tier 0 attempted (GitHub API), limited by anonymous rate cap; degraded to Tier 1 Tavily search + snippet extraction.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `[Error]: Rate limit reached for o3 in organization org-REDACTED on tokens per min (TPM): Limit 30000, Used 23669, Requested 32760 — Please try again in X seconds.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[Error]: Rate limit reached for o3 in organization org-REDACTED on tokens per min (TPM): Limit 30000, Used 23669, Requested 32760 — Please try again in X seconds.`.
