---
title: "VS Code Copilot Chat Auto Mode Failed: No Available Model Found in Known Endpoints"
description: "Fix VS Code Copilot Chat auto mode failing because no model endpoint is available Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "chatagenterror-Auto mode failed: no available model found in known endpoints."
common_causes:
  - "Developers using VS Code Copilot Chat in auto mode encounter a complete failure when the endpoint selection cannot find any configured model, blocking all AI-assisted coding sessions. This is a recent regression in VS Code with 5 comments and labeled stable-anomaly."
  - "Exact error with full stack trace from VS Code source (automodeService.ts:374). Labeled as bug, recent-regression, stable-anomaly. Closed issue with 5 comments. Error occurs in Copilot Chat auto mode endpoint selection."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "chatagenterror-No auto mode endpoints provided"
  - "AWS Bedrock shows in Language Models but not in chat picker"
  - "VS Code Copilot model configuration errors"
updated: "2026-05-13"
published_at: "2026-05-13T17:13:17.288Z"
updated_at: "2026-05-13T17:13:17.288Z"
---

## What this error means

`chatagenterror-Auto mode failed: no available model found in known endpoints.` is a GitHub Copilot failure pattern reported for developers trying to fix vs code copilot chat auto mode failing because no model endpoint is available. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Exact error with full stack trace from VS Code source (automodeService.ts:374). Labeled as bug, recent-regression, stable-anomaly. Closed issue with 5 comments. Error occurs in Copilot Chat auto mode endpoint selection.

## Common causes

- Developers using VS Code Copilot Chat in auto mode encounter a complete failure when the endpoint selection cannot find any configured model, blocking all AI-assisted coding sessions. This is a recent regression in VS Code with 5 comments and labeled stable-anomaly.
- Exact error with full stack trace from VS Code source (automodeService.ts:374). Labeled as bug, recent-regression, stable-anomaly. Closed issue with 5 comments. Error occurs in Copilot Chat auto mode endpoint selection.

## Quick fixes

1. Confirm the exact error signature matches `chatagenterror-Auto mode failed: no available model found in known endpoints.`.
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

- https://github.com/microsoft/vscode/issues/312805

Evidence note: Exact error with full stack trace from VS Code source (automodeService.ts:374). Labeled as bug, recent-regression, stable-anomaly. Closed issue with 5 comments. Error occurs in Copilot Chat auto mode endpoint selection.

## Related errors

- chatagenterror-No auto mode endpoints provided
- AWS Bedrock shows in Language Models but not in chat picker
- VS Code Copilot model configuration errors

## FAQ

### What should I check first?

Start with the exact `chatagenterror-Auto mode failed: no available model found in known endpoints.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `chatagenterror-Auto mode failed: no available model found in known endpoints.`.
