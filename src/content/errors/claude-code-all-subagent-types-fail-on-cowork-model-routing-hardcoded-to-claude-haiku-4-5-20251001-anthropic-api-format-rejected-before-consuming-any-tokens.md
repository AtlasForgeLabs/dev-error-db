---
title: "Claude Code Subagents Fail on Vertex AI (Cowork) — Model Routing Hardcoded to Anthropic API Format"
description: "Fix Claude Code subagents failing on Vertex AI / Cowork deployment with Anthropic API format error Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "All subagent types fail on Cowork — model routing hardcoded to claude-haiku-4-5-20251001 (Anthropic API format), rejected before consuming any tokens"
common_causes:
  - "Enterprise users deploying Claude Code via Vertex AI (3P) find all subagent types completely non-functional. The main session works but every subagent attempt fails before token consumption. Critical for enterprise adopters paying for Vertex AI integration."
  - "Official Claude Code issue #58274 (2026-05-12) reports all subagent types fail on Cowork/Vertex AI (3P) deployment. Subagents hardcoded to Anthropic API format model `claude-haiku-4-5-20251001` are rejected. Main session with Opus 4.6 works fine."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Claude Code Vertex AI subagent configuration"
  - "Claude Code Cowork model routing override"
updated: "2026-05-12"
published_at: "2026-05-12T09:11:33.796Z"
updated_at: "2026-05-12T09:11:33.796Z"
---

## What this error means

`All subagent types fail on Cowork — model routing hardcoded to claude-haiku-4-5-20251001 (Anthropic API format), rejected before consuming any tokens` is a Claude Code failure pattern reported for developers trying to fix claude code subagents failing on vertex ai / cowork deployment with anthropic api format error. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Official Claude Code issue #58274 (2026-05-12) reports all subagent types fail on Cowork/Vertex AI (3P) deployment. Subagents hardcoded to Anthropic API format model `claude-haiku-4-5-20251001` are rejected. Main session with Opus 4.6 works fine.

## Common causes

- Enterprise users deploying Claude Code via Vertex AI (3P) find all subagent types completely non-functional. The main session works but every subagent attempt fails before token consumption. Critical for enterprise adopters paying for Vertex AI integration.
- Official Claude Code issue #58274 (2026-05-12) reports all subagent types fail on Cowork/Vertex AI (3P) deployment. Subagents hardcoded to Anthropic API format model `claude-haiku-4-5-20251001` are rejected. Main session with Opus 4.6 works fine.

## Quick fixes

1. Confirm the exact error signature matches `All subagent types fail on Cowork — model routing hardcoded to claude-haiku-4-5-20251001 (Anthropic API format), rejected before consuming any tokens`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Check the build output, project root, and deployment platform configuration before redeploying.

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

- https://github.com/anthropics/claude-code/issues/58274

Evidence note: Official Claude Code issue #58274 (2026-05-12) reports all subagent types fail on Cowork/Vertex AI (3P) deployment. Subagents hardcoded to Anthropic API format model `claude-haiku-4-5-20251001` are rejected. Main session with Opus 4.6 works fine.

## Related errors

- Claude Code Vertex AI subagent configuration
- Claude Code Cowork model routing override

## FAQ

### What should I check first?

Start with the exact `All subagent types fail on Cowork — model routing hardcoded to claude-haiku-4-5-20251001 (Anthropic API format), rejected before consuming any tokens` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `All subagent types fail on Cowork — model routing hardcoded to claude-haiku-4-5-20251001 (Anthropic API format), rejected before consuming any tokens`.
