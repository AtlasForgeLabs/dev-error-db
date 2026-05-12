---
title: "OpenAI Codex CLI Ignores Project-Local model_provider Config After PR #20098"
description: "Fix Codex CLI ignoring project-level model_provider and model_providers configuration Includes evidence for OpenAI Codex CLI troubleshooting demand."
category: "AI Coding Tools"
technology: "OpenAI Codex CLI"
error_signature: "Ignored unsupported project-local config keys in .codex/config.toml: model_provider, model_providers"
common_causes:
  - "After PR #20098, Codex CLI ignores project-local config.toml settings for model_provider and model_providers, breaking multi-company workflows where developers need repo-specific LiteLLM provider configurations. Affects API & Pro subscribers."
  - "GitHub issue #22222 reports Codex CLI 0.130.0 ignoring .codex/config.toml model_provider settings after PR #20098. Falls back to default OpenAI route. Exact warning message: 'Ignored unsupported project-local config keys'. Affects WSL/Linux developers with API & Pro subscriptions."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Codex CLI config.toml configuration ignored"
  - "Codex CLI LiteLLM provider fallback error"
  - "Codex CLI user-level vs project-level config conflict"
updated: "2026-05-12"
published_at: "2026-05-12T07:10:49.577Z"
updated_at: "2026-05-12T07:10:49.577Z"
---

## What this error means

`Ignored unsupported project-local config keys in .codex/config.toml: model_provider, model_providers` is a OpenAI Codex CLI failure pattern reported for developers trying to fix codex cli ignoring project-level model_provider and model_providers configuration. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #22222 reports Codex CLI 0.130.0 ignoring .codex/config.toml model_provider settings after PR #20098. Falls back to default OpenAI route. Exact warning message: 'Ignored unsupported project-local config keys'. Affects WSL/Linux developers with API & Pro subscriptions.

## Common causes

- After PR #20098, Codex CLI ignores project-local config.toml settings for model_provider and model_providers, breaking multi-company workflows where developers need repo-specific LiteLLM provider configurations. Affects API & Pro subscribers.
- GitHub issue #22222 reports Codex CLI 0.130.0 ignoring .codex/config.toml model_provider settings after PR #20098. Falls back to default OpenAI route. Exact warning message: 'Ignored unsupported project-local config keys'. Affects WSL/Linux developers with API & Pro subscriptions.

## Quick fixes

1. Confirm the exact error signature matches `Ignored unsupported project-local config keys in .codex/config.toml: model_provider, model_providers`.
2. Check the OpenAI Codex CLI account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/codex/issues/22222

Evidence note: GitHub issue #22222 reports Codex CLI 0.130.0 ignoring .codex/config.toml model_provider settings after PR #20098. Falls back to default OpenAI route. Exact warning message: 'Ignored unsupported project-local config keys'. Affects WSL/Linux developers with API & Pro subscriptions.

## Related errors

- Codex CLI config.toml configuration ignored
- Codex CLI LiteLLM provider fallback error
- Codex CLI user-level vs project-level config conflict

## FAQ

### What should I check first?

Start with the exact `Ignored unsupported project-local config keys in .codex/config.toml: model_provider, model_providers` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI Codex CLI workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Ignored unsupported project-local config keys in .codex/config.toml: model_provider, model_providers`.
