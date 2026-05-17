---
title: "Claude Code SDK Crashes on Initialization with Exit Code 1 (GitHub Actions)"
description: "Fix Claude Code SDK crashing immediately on startup during GitHub Actions CI, no API calls made Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "error: Claude Code process exited with code 1; SDK execution error: 14 | depsCount"
common_causes:
  - "Official anthropics/anthropic-sdk-typescript repo issue #909. Bug report shows @anthropic-ai/claude-agent-sdk@0.2.42 crashes during JSON schema validation in GitHub Actions (Ubuntu 24.04), 80% reproduction rate (5/6 failures). Different Azure regions produce identical error. High commercial value: affects paid Claude Code users in production CI pipelines."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-17"
published_at: "2026-05-17T02:13:51.888Z"
updated_at: "2026-05-17T02:13:51.888Z"
---

## What this error means

`error: Claude Code process exited with code 1; SDK execution error: 14 | depsCount` is a Claude Code failure pattern reported for developers trying to fix claude code sdk crashing immediately on startup during github actions ci, no api calls made. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Official anthropics/anthropic-sdk-typescript repo issue #909. Bug report shows @anthropic-ai/claude-agent-sdk@0.2.42 crashes during JSON schema validation in GitHub Actions (Ubuntu 24.04), 80% reproduction rate (5/6 failures). Different Azure regions produce identical error. High commercial value: affects paid Claude Code users in production CI pipelines.

## Common causes

- Official anthropics/anthropic-sdk-typescript repo issue #909. Bug report shows @anthropic-ai/claude-agent-sdk@0.2.42 crashes during JSON schema validation in GitHub Actions (Ubuntu 24.04), 80% reproduction rate (5/6 failures). Different Azure regions produce identical error. High commercial value: affects paid Claude Code users in production CI pipelines.

## Quick fixes

1. Confirm the exact error signature matches `error: Claude Code process exited with code 1; SDK execution error: 14 | depsCount`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/anthropic-sdk-typescript/issues/909

Evidence note: Official anthropics/anthropic-sdk-typescript repo issue #909. Bug report shows @anthropic-ai/claude-agent-sdk@0.2.42 crashes during JSON schema validation in GitHub Actions (Ubuntu 24.04), 80% reproduction rate (5/6 failures). Different Azure regions produce identical error. High commercial value: affects paid Claude Code users in production CI pipelines.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `error: Claude Code process exited with code 1; SDK execution error: 14 | depsCount` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `error: Claude Code process exited with code 1; SDK execution error: 14 | depsCount`.
