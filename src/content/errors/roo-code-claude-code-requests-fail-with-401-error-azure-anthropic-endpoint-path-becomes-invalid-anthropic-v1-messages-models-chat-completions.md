---
title: "Roo-Code Cannot Use Anthropic via Azure Foundry (OpenAI Compatible Provider 401)"
description: "Fix Roo Code OpenAI Compatible provider routing to wrong Azure Anthropic endpoint path causing 401 authentication failure Includes evidence for Roo Code / Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Roo Code / Claude Code"
error_signature: "Requests fail with 401 error — Azure Anthropic endpoint path becomes invalid: /anthropic/v1/messages/models/chat/completions"
common_causes:
  - "GitHub Issue #9467 on RooCodeInc/Roo-Code describes inability to use Anthropic models hosted on Azure Foundry. Two root causes: (1) heuristic incorrectly detects Azure Inference path and appends wrong suffix creating invalid URL, (2) API key sent as Bearer but Azure Anthropic requires x-api-key header. Combines Cloud Platforms + AI Coding Tools cross-product bug. Category: AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-28"
published_at: "2026-05-28T21:43:24.317Z"
updated_at: "2026-05-28T21:43:24.317Z"
---

## What this error means

`Requests fail with 401 error — Azure Anthropic endpoint path becomes invalid: /anthropic/v1/messages/models/chat/completions` is a Roo Code / Claude Code failure pattern reported for developers trying to fix roo code openai compatible provider routing to wrong azure anthropic endpoint path causing 401 authentication failure. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #9467 on RooCodeInc/Roo-Code describes inability to use Anthropic models hosted on Azure Foundry. Two root causes: (1) heuristic incorrectly detects Azure Inference path and appends wrong suffix creating invalid URL, (2) API key sent as Bearer but Azure Anthropic requires x-api-key header. Combines Cloud Platforms + AI Coding Tools cross-product bug. Category: AI Coding Tools.

## Common causes

- GitHub Issue #9467 on RooCodeInc/Roo-Code describes inability to use Anthropic models hosted on Azure Foundry. Two root causes: (1) heuristic incorrectly detects Azure Inference path and appends wrong suffix creating invalid URL, (2) API key sent as Bearer but Azure Anthropic requires x-api-key header. Combines Cloud Platforms + AI Coding Tools cross-product bug. Category: AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `Requests fail with 401 error — Azure Anthropic endpoint path becomes invalid: /anthropic/v1/messages/models/chat/completions`.
2. Check the Roo Code / Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/RooCodeInc/Roo-Code/issues/9467

Evidence note: GitHub Issue #9467 on RooCodeInc/Roo-Code describes inability to use Anthropic models hosted on Azure Foundry. Two root causes: (1) heuristic incorrectly detects Azure Inference path and appends wrong suffix creating invalid URL, (2) API key sent as Bearer but Azure Anthropic requires x-api-key header. Combines Cloud Platforms + AI Coding Tools cross-product bug. Category: AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Requests fail with 401 error — Azure Anthropic endpoint path becomes invalid: /anthropic/v1/messages/models/chat/completions` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Roo Code / Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Requests fail with 401 error — Azure Anthropic endpoint path becomes invalid: /anthropic/v1/messages/models/chat/completions`.
