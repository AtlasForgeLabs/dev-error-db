---
title: "Claude Code 2.1.129 sends unsupported anthropic_beta flags in request body that Bedrock rejects with 400"
description: "Fix Claude Code sending unsupported beta flags to AWS Bedrock causing 400 errors Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Anthropic API Error 400: unsupported anthropic_beta flags rejected by Bedrock"
common_causes:
  - "Claude Code v2.1.129 regression sends anthropic_beta array (interleaved-thinking, tool-search-tool, extended-cache-ttl) that Bedrock does not recognize, breaking all Bedrock-based Claude Code usage"
  - "10 reactions. Regression in v2.1.129. Bedrock rejects anthropic_beta flags with 400. Flags: interleaved-thinking-2025-05-14, tool-search-tool-2025-10-19, extended-cache-ttl-2025-04-11. Works on v2.1.119 stable."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code Opus 4.7 Bedrock incompatibility"
  - "LiteLLM additional_drop_params ignored"
updated: "2026-05-14"
published_at: "2026-05-14T09:13:19.404Z"
updated_at: "2026-05-14T09:13:19.404Z"
---

## What this error means

`Anthropic API Error 400: unsupported anthropic_beta flags rejected by Bedrock` is a Claude Code failure pattern reported for developers trying to fix claude code sending unsupported beta flags to aws bedrock causing 400 errors. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

10 reactions. Regression in v2.1.129. Bedrock rejects anthropic_beta flags with 400. Flags: interleaved-thinking-2025-05-14, tool-search-tool-2025-10-19, extended-cache-ttl-2025-04-11. Works on v2.1.119 stable.

## Common causes

- Claude Code v2.1.129 regression sends anthropic_beta array (interleaved-thinking, tool-search-tool, extended-cache-ttl) that Bedrock does not recognize, breaking all Bedrock-based Claude Code usage
- 10 reactions. Regression in v2.1.129. Bedrock rejects anthropic_beta flags with 400. Flags: interleaved-thinking-2025-05-14, tool-search-tool-2025-10-19, extended-cache-ttl-2025-04-11. Works on v2.1.119 stable.

## Quick fixes

1. Confirm the exact error signature matches `Anthropic API Error 400: unsupported anthropic_beta flags rejected by Bedrock`.
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

- https://github.com/anthropics/claude-code/issues/56595

Evidence note: 10 reactions. Regression in v2.1.129. Bedrock rejects anthropic_beta flags with 400. Flags: interleaved-thinking-2025-05-14, tool-search-tool-2025-10-19, extended-cache-ttl-2025-04-11. Works on v2.1.119 stable.

## Related errors

- Claude Code Opus 4.7 Bedrock incompatibility
- LiteLLM additional_drop_params ignored

## FAQ

### What should I check first?

Start with the exact `Anthropic API Error 400: unsupported anthropic_beta flags rejected by Bedrock` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Anthropic API Error 400: unsupported anthropic_beta flags rejected by Bedrock`.
