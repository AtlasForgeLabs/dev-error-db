---
title: "Claude Code TUI Hangs on Startup After connect() EINPROGRESS Regression"
description: "Fix Claude Code TUI becoming unresponsive on startup due to network connection hang (EINPROGRESS) introduced in v2.1.127–v2.1.129 regression Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "TUI hangs on startup after connect(api.anthropic.com:443) = EINPROGRESS — regression between 2.1.126 (good) and 2.1.129 (bad), Linux"
common_causes:
  - "GitHub Issue #58031 on anthropics/claude-code opened May 11 2026 by gjadi-mej. Labels: api:anthropic, area:core, bug, has repro, platform:linux, regression. Open status with confirmed reproduction between known-good (2.1.126) and known-bad (2.1.129) versions. Blocks all Claude Code usage until fixed. Clear bisect path available for ranking article targeting specific versions."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-20"
published_at: "2026-05-20T01:38:18.032Z"
updated_at: "2026-05-20T01:38:18.032Z"
---

## What this error means

`TUI hangs on startup after connect(api.anthropic.com:443) = EINPROGRESS — regression between 2.1.126 (good) and 2.1.129 (bad), Linux` is a Claude Code failure pattern reported for developers trying to fix claude code tui becoming unresponsive on startup due to network connection hang (einprogress) introduced in v2.1.127–v2.1.129 regression. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #58031 on anthropics/claude-code opened May 11 2026 by gjadi-mej. Labels: api:anthropic, area:core, bug, has repro, platform:linux, regression. Open status with confirmed reproduction between known-good (2.1.126) and known-bad (2.1.129) versions. Blocks all Claude Code usage until fixed. Clear bisect path available for ranking article targeting specific versions.

## Common causes

- GitHub Issue #58031 on anthropics/claude-code opened May 11 2026 by gjadi-mej. Labels: api:anthropic, area:core, bug, has repro, platform:linux, regression. Open status with confirmed reproduction between known-good (2.1.126) and known-bad (2.1.129) versions. Blocks all Claude Code usage until fixed. Clear bisect path available for ranking article targeting specific versions.

## Quick fixes

1. Confirm the exact error signature matches `TUI hangs on startup after connect(api.anthropic.com:443) = EINPROGRESS — regression between 2.1.126 (good) and 2.1.129 (bad), Linux`.
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

- https://github.com/anthropics/claude-code/issues/58031

Evidence note: GitHub Issue #58031 on anthropics/claude-code opened May 11 2026 by gjadi-mej. Labels: api:anthropic, area:core, bug, has repro, platform:linux, regression. Open status with confirmed reproduction between known-good (2.1.126) and known-bad (2.1.129) versions. Blocks all Claude Code usage until fixed. Clear bisect path available for ranking article targeting specific versions.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `TUI hangs on startup after connect(api.anthropic.com:443) = EINPROGRESS — regression between 2.1.126 (good) and 2.1.129 (bad), Linux` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `TUI hangs on startup after connect(api.anthropic.com:443) = EINPROGRESS — regression between 2.1.126 (good) and 2.1.129 (bad), Linux`.
