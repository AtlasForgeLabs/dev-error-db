---
title: "exceeded retry limit, last status: 429 Too Many Requests — OpenAI Codex App"
description: "Fix persistent 429 rate-limit errors blocking new chats in the free-tier OpenAI Codex app; user needs to understand quota limits, backoff behavior, and whether switching plans resolves it. Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "exceeded retry limit, last status: 429 Too Many Requests, request id: c2d7a2ba-a723-411f-a8f8-b60059d8e4c9"
common_causes:
  - "Directly observed in real user issue on openai/codex repo (label: bug, rate-limits, app). User on free subscription sees 429 immediately on new chat. Category: OpenAI API because it involves OpenAI's API rate-limiting applied through the Codex frontend. High commercial value — directly blocks usage of paid API service."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-26"
published_at: "2026-05-26T23:43:18.320Z"
updated_at: "2026-05-26T23:43:18.320Z"
---

## What this error means

`exceeded retry limit, last status: 429 Too Many Requests, request id: c2d7a2ba-a723-411f-a8f8-b60059d8e4c9` is a OpenAI API failure pattern reported for developers trying to fix persistent 429 rate-limit errors blocking new chats in the free-tier openai codex app; user needs to understand quota limits, backoff behavior, and whether switching plans resolves it.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Directly observed in real user issue on openai/codex repo (label: bug, rate-limits, app). User on free subscription sees 429 immediately on new chat. Category: OpenAI API because it involves OpenAI's API rate-limiting applied through the Codex frontend. High commercial value — directly blocks usage of paid API service.

## Common causes

- Directly observed in real user issue on openai/codex repo (label: bug, rate-limits, app). User on free subscription sees 429 immediately on new chat. Category: OpenAI API because it involves OpenAI's API rate-limiting applied through the Codex frontend. High commercial value — directly blocks usage of paid API service.

## Quick fixes

1. Confirm the exact error signature matches `exceeded retry limit, last status: 429 Too Many Requests, request id: c2d7a2ba-a723-411f-a8f8-b60059d8e4c9`.
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

- https://github.com/openai/codex/issues/24657

Evidence note: Directly observed in real user issue on openai/codex repo (label: bug, rate-limits, app). User on free subscription sees 429 immediately on new chat. Category: OpenAI API because it involves OpenAI's API rate-limiting applied through the Codex frontend. High commercial value — directly blocks usage of paid API service.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `exceeded retry limit, last status: 429 Too Many Requests, request id: c2d7a2ba-a723-411f-a8f8-b60059d8e4c9` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `exceeded retry limit, last status: 429 Too Many Requests, request id: c2d7a2ba-a723-411f-a8f8-b60059d8e4c9`.
