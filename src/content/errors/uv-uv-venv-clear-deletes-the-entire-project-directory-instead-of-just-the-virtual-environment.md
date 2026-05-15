---
title: "uv venv --clear Deletes Project Directory: Dangerous --clear Flag Removes Parent Folder"
description: "fix uv venv clear deleting wrong files / recover files deleted by uv venv --clear Includes evidence for uv troubleshooting demand."
category: "Python"
technology: "uv"
error_signature: "uv venv . --clear deletes the entire project directory instead of just the virtual environment"
common_causes:
  - "Running 'uv venv . --clear' in a project root silently deletes the entire project folder. This is a data-loss bug that affects any developer who accidentally uses '.' as the venv path with --clear. The command is destructive with no confirmation prompt."
  - "Reported 2026-05-13: user ran 'uv venv . --clear' which deleted the entire project directory. No warning or confirmation prompt before destructive action. Affects uv's growing user base as the default Python package manager."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "uv sync does not recover from faulty packages"
  - "uv python install races with concurrent find"
updated: "2026-05-15"
published_at: "2026-05-15T11:13:22.484Z"
updated_at: "2026-05-15T11:13:22.484Z"
---

## What this error means

`uv venv . --clear deletes the entire project directory instead of just the virtual environment` is a uv failure pattern reported for developers trying to fix uv venv clear deleting wrong files / recover files deleted by uv venv --clear. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Reported 2026-05-13: user ran 'uv venv . --clear' which deleted the entire project directory. No warning or confirmation prompt before destructive action. Affects uv's growing user base as the default Python package manager.

## Common causes

- Running 'uv venv . --clear' in a project root silently deletes the entire project folder. This is a data-loss bug that affects any developer who accidentally uses '.' as the venv path with --clear. The command is destructive with no confirmation prompt.
- Reported 2026-05-13: user ran 'uv venv . --clear' which deleted the entire project directory. No warning or confirmation prompt before destructive action. Affects uv's growing user base as the default Python package manager.

## Quick fixes

1. Confirm the exact error signature matches `uv venv . --clear deletes the entire project directory instead of just the virtual environment`.
2. Check the uv account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/astral-sh/uv/issues/19395

Evidence note: Reported 2026-05-13: user ran 'uv venv . --clear' which deleted the entire project directory. No warning or confirmation prompt before destructive action. Affects uv's growing user base as the default Python package manager.

## Related errors

- uv sync does not recover from faulty packages
- uv python install races with concurrent find

## FAQ

### What should I check first?

Start with the exact `uv venv . --clear deletes the entire project directory instead of just the virtual environment` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed uv workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `uv venv . --clear deletes the entire project directory instead of just the virtual environment`.
