---
title: "GitHub Actions TempDirectoryManager Race Condition Wipes Active Worker Temp Directory"
description: "Fix GitHub Actions race condition where cancelled Worker deletes temp directory used by new Worker Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "TempDirectoryManager race condition: cancelled Worker wipes _temp directory used by concurrently spawned new Worker"
common_causes:
  - "When GitHub Actions runner receives a new job while previous worker is still running, the cancelled worker's cleanup wipes the shared _temp directory, corrupting the new worker's environment. Causes mysterious CI failures."
  - "GitHub Actions runner shares _temp directory between old (cancelled) and new worker processes. Cancelled worker's TempDirectoryManager cleanup deletes files being used by the new worker, causing intermittent CI failures that are hard to reproduce."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions workflow failure"
  - "GitHub Actions runner temp directory"
  - "GitHub Actions concurrent job race condition"
updated: "2026-05-14"
published_at: "2026-05-14T08:13:19.269Z"
updated_at: "2026-05-14T08:13:19.269Z"
---

## What this error means

`TempDirectoryManager race condition: cancelled Worker wipes _temp directory used by concurrently spawned new Worker` is a GitHub Actions failure pattern reported for developers trying to fix github actions race condition where cancelled worker deletes temp directory used by new worker. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Actions runner shares _temp directory between old (cancelled) and new worker processes. Cancelled worker's TempDirectoryManager cleanup deletes files being used by the new worker, causing intermittent CI failures that are hard to reproduce.

## Common causes

- When GitHub Actions runner receives a new job while previous worker is still running, the cancelled worker's cleanup wipes the shared _temp directory, corrupting the new worker's environment. Causes mysterious CI failures.
- GitHub Actions runner shares _temp directory between old (cancelled) and new worker processes. Cancelled worker's TempDirectoryManager cleanup deletes files being used by the new worker, causing intermittent CI failures that are hard to reproduce.

## Quick fixes

1. Confirm the exact error signature matches `TempDirectoryManager race condition: cancelled Worker wipes _temp directory used by concurrently spawned new Worker`.
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

- https://github.com/actions/runner/issues/4357

Evidence note: GitHub Actions runner shares _temp directory between old (cancelled) and new worker processes. Cancelled worker's TempDirectoryManager cleanup deletes files being used by the new worker, causing intermittent CI failures that are hard to reproduce.

## Related errors

- GitHub Actions workflow failure
- GitHub Actions runner temp directory
- GitHub Actions concurrent job race condition

## FAQ

### What should I check first?

Start with the exact `TempDirectoryManager race condition: cancelled Worker wipes _temp directory used by concurrently spawned new Worker` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `TempDirectoryManager race condition: cancelled Worker wipes _temp directory used by concurrently spawned new Worker`.
