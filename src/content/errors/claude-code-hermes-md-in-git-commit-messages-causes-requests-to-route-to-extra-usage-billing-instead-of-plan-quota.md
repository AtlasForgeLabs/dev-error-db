---
title: "Claude Code Routes to Extra Billing When Git History Contains HERMES.md"
description: "Fix Claude Code unexpectedly using extra usage billing instead of Max plan quota Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "HERMES.md in git commit messages causes requests to route to extra usage billing instead of plan quota"
common_causes:
  - "Developers with expensive Max plans discover they are being double-charged when their git history happens to contain the string HERMES.md, a silent and unexpected billing trigger"
  - "521 reactions on GitHub issue. Case-sensitive string in recent commit history triggers billing route switch. Affects paying Max plan users directly."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Claude Code quota exhausted unexpectedly"
  - "Claude Code billing discrepancy"
updated: "2026-05-15"
published_at: "2026-05-15T04:13:21.645Z"
updated_at: "2026-05-15T04:13:21.645Z"
---

## What this error means

`HERMES.md in git commit messages causes requests to route to extra usage billing instead of plan quota` is a Claude Code failure pattern reported for developers trying to fix claude code unexpectedly using extra usage billing instead of max plan quota. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

521 reactions on GitHub issue. Case-sensitive string in recent commit history triggers billing route switch. Affects paying Max plan users directly.

## Common causes

- Developers with expensive Max plans discover they are being double-charged when their git history happens to contain the string HERMES.md, a silent and unexpected billing trigger
- 521 reactions on GitHub issue. Case-sensitive string in recent commit history triggers billing route switch. Affects paying Max plan users directly.

## Quick fixes

1. Confirm the exact error signature matches `HERMES.md in git commit messages causes requests to route to extra usage billing instead of plan quota`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/53262

Evidence note: 521 reactions on GitHub issue. Case-sensitive string in recent commit history triggers billing route switch. Affects paying Max plan users directly.

## Related errors

- Claude Code quota exhausted unexpectedly
- Claude Code billing discrepancy

## FAQ

### What should I check first?

Start with the exact `HERMES.md in git commit messages causes requests to route to extra usage billing instead of plan quota` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HERMES.md in git commit messages causes requests to route to extra usage billing instead of plan quota`.
