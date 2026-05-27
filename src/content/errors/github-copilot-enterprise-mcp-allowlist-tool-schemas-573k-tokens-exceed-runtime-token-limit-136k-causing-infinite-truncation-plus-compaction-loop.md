---
title: "GitHub Copilot CLI Enterprise MCP allowlist exceeds token limit — persistent compaction loop makes sessions unusable"
description: "Fix Copilot CLI session freezing when enterprise MCP tool schemas overwhelm context window with endless compaction cycles Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "Enterprise MCP allowlist tool schemas (~573K tokens) exceed runtime token limit (~136K) causing infinite truncation + compaction loop"
common_causes:
  - "Issue #3542 on github/copilot-cli (created 2026-05-27): Copilot CLI v1.0.54 with MCP enterprise allowlist loads ~13 enterprise MCPs whose combined tool schemas (~573K tokens) far exceed the ~136K runtime context limit. Results in continuous compaction_start/truncation events per turn, making sessions unusable. High commercial value — directly affects enterprise-paid Copilot users with complex MCP setups. Category: GitHub Copilot."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Copilot"
updated: "2026-05-27"
published_at: "2026-05-27T20:43:21.012Z"
updated_at: "2026-05-27T20:43:21.012Z"
---

## What this error means

`Enterprise MCP allowlist tool schemas (~573K tokens) exceed runtime token limit (~136K) causing infinite truncation + compaction loop` is a GitHub Copilot failure pattern reported for developers trying to fix copilot cli session freezing when enterprise mcp tool schemas overwhelm context window with endless compaction cycles. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #3542 on github/copilot-cli (created 2026-05-27): Copilot CLI v1.0.54 with MCP enterprise allowlist loads ~13 enterprise MCPs whose combined tool schemas (~573K tokens) far exceed the ~136K runtime context limit. Results in continuous compaction_start/truncation events per turn, making sessions unusable. High commercial value — directly affects enterprise-paid Copilot users with complex MCP setups. Category: GitHub Copilot.

## Common causes

- Issue #3542 on github/copilot-cli (created 2026-05-27): Copilot CLI v1.0.54 with MCP enterprise allowlist loads ~13 enterprise MCPs whose combined tool schemas (~573K tokens) far exceed the ~136K runtime context limit. Results in continuous compaction_start/truncation events per turn, making sessions unusable. High commercial value — directly affects enterprise-paid Copilot users with complex MCP setups. Category: GitHub Copilot.

## Quick fixes

1. Confirm the exact error signature matches `Enterprise MCP allowlist tool schemas (~573K tokens) exceed runtime token limit (~136K) causing infinite truncation + compaction loop`.
2. Check the GitHub Copilot account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/github/copilot-cli/issues/3542

Evidence note: Issue #3542 on github/copilot-cli (created 2026-05-27): Copilot CLI v1.0.54 with MCP enterprise allowlist loads ~13 enterprise MCPs whose combined tool schemas (~573K tokens) far exceed the ~136K runtime context limit. Results in continuous compaction_start/truncation events per turn, making sessions unusable. High commercial value — directly affects enterprise-paid Copilot users with complex MCP setups. Category: GitHub Copilot.

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `Enterprise MCP allowlist tool schemas (~573K tokens) exceed runtime token limit (~136K) causing infinite truncation + compaction loop` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Enterprise MCP allowlist tool schemas (~573K tokens) exceed runtime token limit (~136K) causing infinite truncation + compaction loop`.
