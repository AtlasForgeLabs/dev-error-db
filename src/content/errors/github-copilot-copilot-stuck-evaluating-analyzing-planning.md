---
title: "GitHub Copilot stuck in evaluating/analyzing/planning state with GPT models"
description: "Fix GitHub Copilot Chat stuck forever in evaluating/analyzing/planning state Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "Copilot stuck evaluating/analyzing/planning"
common_causes:
  - "GitHub Copilot Chat extension in VS Code becomes permanently stuck in 'evaluating/analyzing/planning' state when using GPT-family models. Users see the tool call executing (`get_errors` with multiple file paths) but never get a response. Affects 14+ users across multiple sessions. Only reproducible in certain chat sessions, suggesting session state corruption."
  - "GitHub issue #312526 on microsoft/vscode (14 comments, open since 2026-04-25). VS Code 1.118.0-insider with Copilot Chat Extension 0.46.2026042405. Happens specifically with GPT 5.4/5.3/5.5 models. Trace logs show `execute_tool` spans completing but agent state never progresses. Reproduces consistently in affected sessions."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Copilot subagent not responding"
  - "Copilot Chat 503 model unavailable"
  - "Copilot usage not showing in exported logs"
updated: "2026-05-11"
---

## What this error means

`Copilot stuck evaluating/analyzing/planning` is a GitHub Copilot failure pattern reported for developers trying to fix github copilot chat stuck forever in evaluating/analyzing/planning state. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #312526 on microsoft/vscode (14 comments, open since 2026-04-25). VS Code 1.118.0-insider with Copilot Chat Extension 0.46.2026042405. Happens specifically with GPT 5.4/5.3/5.5 models. Trace logs show `execute_tool` spans completing but agent state never progresses. Reproduces consistently in affected sessions.

## Common causes

- GitHub Copilot Chat extension in VS Code becomes permanently stuck in 'evaluating/analyzing/planning' state when using GPT-family models. Users see the tool call executing (`get_errors` with multiple file paths) but never get a response. Affects 14+ users across multiple sessions. Only reproducible in certain chat sessions, suggesting session state corruption.
- GitHub issue #312526 on microsoft/vscode (14 comments, open since 2026-04-25). VS Code 1.118.0-insider with Copilot Chat Extension 0.46.2026042405. Happens specifically with GPT 5.4/5.3/5.5 models. Trace logs show `execute_tool` spans completing but agent state never progresses. Reproduces consistently in affected sessions.

## Quick fixes

1. Confirm the exact error signature matches `Copilot stuck evaluating/analyzing/planning`.
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

- https://github.com/microsoft/vscode/issues/312526

Evidence note: GitHub issue #312526 on microsoft/vscode (14 comments, open since 2026-04-25). VS Code 1.118.0-insider with Copilot Chat Extension 0.46.2026042405. Happens specifically with GPT 5.4/5.3/5.5 models. Trace logs show `execute_tool` spans completing but agent state never progresses. Reproduces consistently in affected sessions.

## Related errors

- GitHub Copilot subagent not responding
- Copilot Chat 503 model unavailable
- Copilot usage not showing in exported logs

## FAQ

### What should I check first?

Start with the exact `Copilot stuck evaluating/analyzing/planning` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Copilot stuck evaluating/analyzing/planning`.
