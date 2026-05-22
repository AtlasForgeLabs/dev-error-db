---
title: "Cline CLI v3.0.2 LiteLLM provider sends to /responses endpoint instead of /chat/completions — 404 Not Found on compatible proxies"
description: "Developer using Cline CLI with LiteLLM-compatible corporate proxy gets 404 errors because CLI uses wrong API endpoint; VS Code extension works fine but CLI does not Includes evidence for Cline CLI troubleshooting demand."
category: "AI Coding Tools"
technology: "Cline CLI"
error_signature: "litellm provider hardcodes protocol:\"openai-responses\" causing requests to go to /v1/responses instead of /v1/chat/completions; many LiteLLM-compatible proxies implement only /chat/completions resulting in 404 Not Found"
common_causes:
  - "GitHub cline/cline#10781 opened May 15 2026 by Giton22. Cline CLI v3.0.2 uses protocol:openai-responses for litellm provider while VS Code extension correctly uses client.chat.completions.create(). PR #10826 linked by mturac May 17 fixing the routing. Category mapping: Cline CLI is an AI coding tool per SKILL.md category mapping. High commercial value because it blocks paid model access behind common enterprise proxy setups."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-22"
published_at: "2026-05-22T05:39:46.769Z"
updated_at: "2026-05-22T05:39:46.769Z"
---

## What this error means

`litellm provider hardcodes protocol:"openai-responses" causing requests to go to /v1/responses instead of /v1/chat/completions; many LiteLLM-compatible proxies implement only /chat/completions resulting in 404 Not Found` is a Cline CLI failure pattern reported for developers trying to developer using cline cli with litellm-compatible corporate proxy gets 404 errors because cli uses wrong api endpoint; vs code extension works fine but cli does not. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub cline/cline#10781 opened May 15 2026 by Giton22. Cline CLI v3.0.2 uses protocol:openai-responses for litellm provider while VS Code extension correctly uses client.chat.completions.create(). PR #10826 linked by mturac May 17 fixing the routing. Category mapping: Cline CLI is an AI coding tool per SKILL.md category mapping. High commercial value because it blocks paid model access behind common enterprise proxy setups.

## Common causes

- GitHub cline/cline#10781 opened May 15 2026 by Giton22. Cline CLI v3.0.2 uses protocol:openai-responses for litellm provider while VS Code extension correctly uses client.chat.completions.create(). PR #10826 linked by mturac May 17 fixing the routing. Category mapping: Cline CLI is an AI coding tool per SKILL.md category mapping. High commercial value because it blocks paid model access behind common enterprise proxy setups.

## Quick fixes

1. Confirm the exact error signature matches `litellm provider hardcodes protocol:"openai-responses" causing requests to go to /v1/responses instead of /v1/chat/completions; many LiteLLM-compatible proxies implement only /chat/completions resulting in 404 Not Found`.
2. Check the Cline CLI account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/cline/cline/issues/10781
- https://github.com/cline/cline/pull/10826

Evidence note: GitHub cline/cline#10781 opened May 15 2026 by Giton22. Cline CLI v3.0.2 uses protocol:openai-responses for litellm provider while VS Code extension correctly uses client.chat.completions.create(). PR #10826 linked by mturac May 17 fixing the routing. Category mapping: Cline CLI is an AI coding tool per SKILL.md category mapping. High commercial value because it blocks paid model access behind common enterprise proxy setups.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `litellm provider hardcodes protocol:"openai-responses" causing requests to go to /v1/responses instead of /v1/chat/completions; many LiteLLM-compatible proxies implement only /chat/completions resulting in 404 Not Found` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cline CLI workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm provider hardcodes protocol:"openai-responses" causing requests to go to /v1/responses instead of /v1/chat/completions; many LiteLLM-compatible proxies implement only /chat/completions resulting in 404 Not Found`.
