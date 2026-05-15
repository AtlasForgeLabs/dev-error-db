---
title: "GitHub Actions Exit Code 127 — node Not Found on Self-Hosted Runners"
description: "Fix GitHub Actions workflow failure on self-hosted runners where node binary is not found Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "/usr/bin/env: node: No such file or directory — Error: Process completed with exit code 127"
common_causes:
  - "Stack Overflow question 71835469 (42k views, score 9) reports self-hosted runner workflows failing with exit code 127 when node is missing. High-traffic issue affecting paid teams using custom runners. Category: GitHub Actions."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions"
updated: "2026-05-15"
published_at: "2026-05-15T22:13:23.762Z"
updated_at: "2026-05-15T22:13:23.762Z"
---

## What this error means

`/usr/bin/env: node: No such file or directory — Error: Process completed with exit code 127` is a GitHub Actions failure pattern reported for developers trying to fix github actions workflow failure on self-hosted runners where node binary is not found. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Stack Overflow question 71835469 (42k views, score 9) reports self-hosted runner workflows failing with exit code 127 when node is missing. High-traffic issue affecting paid teams using custom runners. Category: GitHub Actions.

## Common causes

- Stack Overflow question 71835469 (42k views, score 9) reports self-hosted runner workflows failing with exit code 127 when node is missing. High-traffic issue affecting paid teams using custom runners. Category: GitHub Actions.

## Quick fixes

1. Confirm the exact error signature matches `/usr/bin/env: node: No such file or directory — Error: Process completed with exit code 127`.
2. Check the GitHub Actions account, local tool state, and provider configuration involved in the failing workflow.
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

- https://stackoverflow.com/questions/71835469

Evidence note: Stack Overflow question 71835469 (42k views, score 9) reports self-hosted runner workflows failing with exit code 127 when node is missing. High-traffic issue affecting paid teams using custom runners. Category: GitHub Actions.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `/usr/bin/env: node: No such file or directory — Error: Process completed with exit code 127` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `/usr/bin/env: node: No such file or directory — Error: Process completed with exit code 127`.
