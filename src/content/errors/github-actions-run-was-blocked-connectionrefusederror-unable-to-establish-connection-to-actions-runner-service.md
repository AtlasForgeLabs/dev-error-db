---
title: "GitHub Actions runner 'connection refused' to self-hosted agent"
description: "Fix GitHub Actions self-hosted runner connection failures preventing CI/CD pipelines from running Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Run was blocked — ConnectionRefusedError: Unable to establish connection to actions-runner service"
common_causes:
  - "Self-hosted GitHub Actions runners lose connectivity to GitHub's API during network blips or firewall changes. Blocks paid team CI/CD workflows. Maps to GitHub Actions category. Distinct from the covered 'permission denied publickey' — this is a runtime connectivity failure."
quick_fix: "Confirm the local service is running on the expected host and port, then retry the smallest request."
related_errors:
  - "GitHub Actions"
updated: "2026-05-25"
published_at: "2026-05-25T02:43:12.473Z"
updated_at: "2026-05-25T02:43:12.473Z"
---

## What this error means

`Run was blocked — ConnectionRefusedError: Unable to establish connection to actions-runner service` is a GitHub Actions failure pattern reported for developers trying to fix github actions self-hosted runner connection failures preventing ci/cd pipelines from running. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Self-hosted GitHub Actions runners lose connectivity to GitHub's API during network blips or firewall changes. Blocks paid team CI/CD workflows. Maps to GitHub Actions category. Distinct from the covered 'permission denied publickey' — this is a runtime connectivity failure.

## Common causes

- Self-hosted GitHub Actions runners lose connectivity to GitHub's API during network blips or firewall changes. Blocks paid team CI/CD workflows. Maps to GitHub Actions category. Distinct from the covered 'permission denied publickey' — this is a runtime connectivity failure.

## Quick fixes

1. Confirm the exact error signature matches `Run was blocked — ConnectionRefusedError: Unable to establish connection to actions-runner service`.
2. Check the GitHub Actions account, local tool state, and provider configuration involved in the failing workflow.
3. Confirm the local service is running on the expected host and port, then retry the smallest request.

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

- https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners

Evidence note: Self-hosted GitHub Actions runners lose connectivity to GitHub's API during network blips or firewall changes. Blocks paid team CI/CD workflows. Maps to GitHub Actions category. Distinct from the covered 'permission denied publickey' — this is a runtime connectivity failure.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `Run was blocked — ConnectionRefusedError: Unable to establish connection to actions-runner service` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Run was blocked — ConnectionRefusedError: Unable to establish connection to actions-runner service`.
