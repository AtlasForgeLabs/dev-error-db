---
title: "Claude Code Extreme Slowness: 10+ Minutes Per Prompt with No Output"
description: "Fix Claude Code extreme slowness and spinning with no token output Includes evidence for Claude Code / Anthropic API troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code / Anthropic API"
error_signature: "Claude Code spinning/moseying/gitifying for MANY MINUTES on each prompt with >10 minutes no output"
common_causes:
  - "Regression causing Claude Code to take 10+ minutes per prompt with zero token output. Even simple tasks take extremely long. Worked in previous version."
  - "Reported on 2026-05-14, Claude Code 2.1.141, macOS. User reports 10+ minutes wait for any tokens. Simple Vue page generation took 12 minutes. Previous version worked fine."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API rate limit"
  - "Claude Code stream timeout"
updated: "2026-05-14"
published_at: "2026-05-14T20:13:20.740Z"
updated_at: "2026-05-14T20:13:20.740Z"
---

## What this error means

`Claude Code spinning/moseying/gitifying for MANY MINUTES on each prompt with >10 minutes no output` is a Claude Code / Anthropic API failure pattern reported for developers trying to fix claude code extreme slowness and spinning with no token output. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Reported on 2026-05-14, Claude Code 2.1.141, macOS. User reports 10+ minutes wait for any tokens. Simple Vue page generation took 12 minutes. Previous version worked fine.

## Common causes

- Regression causing Claude Code to take 10+ minutes per prompt with zero token output. Even simple tasks take extremely long. Worked in previous version.
- Reported on 2026-05-14, Claude Code 2.1.141, macOS. User reports 10+ minutes wait for any tokens. Simple Vue page generation took 12 minutes. Previous version worked fine.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code spinning/moseying/gitifying for MANY MINUTES on each prompt with >10 minutes no output`.
2. Check the Claude Code / Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/59191

Evidence note: Reported on 2026-05-14, Claude Code 2.1.141, macOS. User reports 10+ minutes wait for any tokens. Simple Vue page generation took 12 minutes. Previous version worked fine.

## Related errors

- Anthropic API rate limit
- Claude Code stream timeout

## FAQ

### What should I check first?

Start with the exact `Claude Code spinning/moseying/gitifying for MANY MINUTES on each prompt with >10 minutes no output` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code / Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code spinning/moseying/gitifying for MANY MINUTES on each prompt with >10 minutes no output`.
