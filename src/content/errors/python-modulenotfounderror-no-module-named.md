---
title: "Python ModuleNotFoundError no module named"
description: "Fix Python ModuleNotFoundError by installing packages into the correct environment and checking import names."
category: "Runtime"
technology: "Python"
error_signature: "ModuleNotFoundError: No module named"
common_causes:
  - "Package is not installed in the active environment"
  - "pip and python point to different interpreters"
  - "Import name differs from package name"
  - "Virtual environment is not activated"
quick_fix: "Run python -m pip install <package> inside the environment used to run the script."
updated: "2026-05-10"
---

## What this error means

`ModuleNotFoundError: No module named` means Python cannot use the package, virtual environment, certificate store, or interpreter setup required by the script. The same command can behave differently depending on which Python executable and environment are active. This page helps you resolve missing Python module errors in local environments, virtualenvs, and CI.

## Common causes

- Package is not installed in the active environment
- pip and python point to different interpreters
- Import name differs from package name
- Virtual environment is not activated

## Quick fixes

1. Check `python --version` and `python -m pip --version` to confirm the active interpreter.
2. Run python -m pip install <package> inside the environment used to run the script.
3. Activate the intended virtual environment before installing or running the script.
4. Retry with `python -m ...` commands to avoid using the wrong executable.

## Step-by-step troubleshooting

1. Start with the exact signature: `ModuleNotFoundError: No module named`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Run `which python` and `python -m pip --version` to verify installs target the interpreter that runs the code.
3. If a virtual environment is expected, recreate it only after confirming the right Python version is installed.
4. For certificate failures, update `certifi` or the system CA store before changing application code.
5. Make the targeted change: Run python -m pip install <package> inside the environment used to run the script.
6. Rerun the smallest failing command, request, or deployment step and keep the output for comparison.

## Related errors

- ImportError cannot import name
- pip command not found
- Python SSL certificate verify failed

## FAQ

### What should I check first?

Start with the exact `ModuleNotFoundError: No module named` message and the active Python interpreter and virtual environment. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed Python step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

CI starts from a clean machine. It may use a different Python version, miss the virtual environment, or install packages into a different interpreter. Reproduce with `python -m pip` and log the Python version used by the job.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `ModuleNotFoundError: No module named`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
