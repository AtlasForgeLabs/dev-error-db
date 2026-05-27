---
title: "OpenAI APIConnectionError and TTFB timeout with GPT-5.5/Codex subagents"
description: "Debug intermittent OpenAI API connection timeouts and TTFB (time-to-first-byte) delays when making programmatic API calls via async agents, especially with GPT-5.5 and Codex Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "subagents almost always hit APIConnectionError/TTFB timeout while Codex CLI works — GPT models unstable in async execution"
common_causes:
  - "GitHub issue #33075 on NousResearch/hermes-agent, opened minutes ago (May 27, 2026, ~40 min old). Direct API connectivity issue affecting developers using async agent frameworks. Distinct from covered 'rate limit error' — this is about transport-level failures (connection refused, TTFB timeout) rather than API business logic errors. Relevant to anyone integrating OpenAI API into automated workflows."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-27"
published_at: "2026-05-27T08:43:19.473Z"
updated_at: "2026-05-27T08:43:19.473Z"
---

## What this error means

`subagents almost always hit APIConnectionError/TTFB timeout while Codex CLI works — GPT models unstable in async execution` is a OpenAI API failure pattern reported for developers trying to debug intermittent openai api connection timeouts and ttfb (time-to-first-byte) delays when making programmatic api calls via async agents, especially with gpt-5.5 and codex. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #33075 on NousResearch/hermes-agent, opened minutes ago (May 27, 2026, ~40 min old). Direct API connectivity issue affecting developers using async agent frameworks. Distinct from covered 'rate limit error' — this is about transport-level failures (connection refused, TTFB timeout) rather than API business logic errors. Relevant to anyone integrating OpenAI API into automated workflows.

## Common causes

- GitHub issue #33075 on NousResearch/hermes-agent, opened minutes ago (May 27, 2026, ~40 min old). Direct API connectivity issue affecting developers using async agent frameworks. Distinct from covered 'rate limit error' — this is about transport-level failures (connection refused, TTFB timeout) rather than API business logic errors. Relevant to anyone integrating OpenAI API into automated workflows.

## Quick fixes

1. Confirm the exact error signature matches `subagents almost always hit APIConnectionError/TTFB timeout while Codex CLI works — GPT models unstable in async execution`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/NousResearch/hermes-agent/issues/33075

Evidence note: GitHub issue #33075 on NousResearch/hermes-agent, opened minutes ago (May 27, 2026, ~40 min old). Direct API connectivity issue affecting developers using async agent frameworks. Distinct from covered 'rate limit error' — this is about transport-level failures (connection refused, TTFB timeout) rather than API business logic errors. Relevant to anyone integrating OpenAI API into automated workflows.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `subagents almost always hit APIConnectionError/TTFB timeout while Codex CLI works — GPT models unstable in async execution` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `subagents almost always hit APIConnectionError/TTFB timeout while Codex CLI works — GPT models unstable in async execution`.
