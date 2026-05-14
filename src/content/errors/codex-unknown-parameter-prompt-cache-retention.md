---
title: "Codex Context Compaction Fails with Unknown Parameter 'prompt_cache_retention'"
description: "Fix Codex context compaction error unknown parameter prompt_cache_retention Includes evidence for Codex troubleshooting demand."
category: "AI Coding Tools"
technology: "Codex"
error_signature: "Unknown parameter: 'prompt_cache_retention'"
common_causes:
  - "Codex is OpenAI's paid coding tool (ChatGPT Pro/Plus). Context compaction is a core feature that breaks on all threads, preventing long sessions. The error is an API-level incompatibility that users cannot fix themselves."
  - "38 comments on #17809. Error occurs in both macOS app and CLI. API returns invalid_request_error with code 'unknown_parameter' for prompt_cache_retention. Also affects third-party proxies (new-api #4462). Affects ChatGPT Pro users."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Codex Error running remote compact task"
  - "Codex stream disconnected before completion"
  - "Codex Unknown parameter client_metadata"
updated: "2026-05-14"
published_at: "2026-05-14T22:13:20.935Z"
updated_at: "2026-05-14T22:13:20.935Z"
---

## What this error means

`Unknown parameter: 'prompt_cache_retention'` is a Codex failure pattern reported for developers trying to fix codex context compaction error unknown parameter prompt_cache_retention. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

38 comments on #17809. Error occurs in both macOS app and CLI. API returns invalid_request_error with code 'unknown_parameter' for prompt_cache_retention. Also affects third-party proxies (new-api #4462). Affects ChatGPT Pro users.

## Common causes

- Codex is OpenAI's paid coding tool (ChatGPT Pro/Plus). Context compaction is a core feature that breaks on all threads, preventing long sessions. The error is an API-level incompatibility that users cannot fix themselves.
- 38 comments on #17809. Error occurs in both macOS app and CLI. API returns invalid_request_error with code 'unknown_parameter' for prompt_cache_retention. Also affects third-party proxies (new-api #4462). Affects ChatGPT Pro users.

## Quick fixes

1. Confirm the exact error signature matches `Unknown parameter: 'prompt_cache_retention'`.
2. Check the Codex account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/codex/issues/17809
- https://github.com/openai/codex/issues/20931
- https://github.com/QuantumNous/new-api/issues/4462

Evidence note: 38 comments on #17809. Error occurs in both macOS app and CLI. API returns invalid_request_error with code 'unknown_parameter' for prompt_cache_retention. Also affects third-party proxies (new-api #4462). Affects ChatGPT Pro users.

## Related errors

- Codex Error running remote compact task
- Codex stream disconnected before completion
- Codex Unknown parameter client_metadata

## FAQ

### What should I check first?

Start with the exact `Unknown parameter: 'prompt_cache_retention'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Codex workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Unknown parameter: 'prompt_cache_retention'`.
