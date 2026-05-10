---
title: "Python venv ensurepip is not available"
description: "Fix Python venv ensurepip errors on systems where the venv package or bundled pip support is missing."
category: "Python"
technology: "Python"
error_signature: "The virtual environment was not created successfully because ensurepip is not available"
common_causes:
  - "python3-venv package is not installed on Debian or Ubuntu"
  - "Python was installed without bundled ensurepip support"
  - "System package manager split venv into a separate package"
  - "Using a minimal container image"
quick_fix: "Install the system venv package for your Python version, then recreate the virtual environment."
related_errors:
  - "pip command not found"
  - "Python ModuleNotFoundError no module named"
  - "Python SSL certificate verify failed"
updated: "2026-05-10"
---

## What this error means

`The virtual environment was not created successfully because ensurepip is not available` means Python is using an interpreter, package environment, certificate store, or virtual environment that does not match what the script expects.

## Why this happens

Python commands can silently target different interpreters depending on PATH, shell activation, and virtual environment state.

For Python venv ensurepip is not available, verify the active Python executable before installing packages or changing source code.

## Quick fixes

1. Check the active interpreter with `python3 --version`.
2. Use `python -m pip` so pip targets the interpreter that runs the code.
3. Install the system venv package for your Python version, then recreate the virtual environment.
4. Recreate the virtual environment if the interpreter version changed.

## Copy-paste commands

### Check Python version

```bash
python3 --version
```

### Check pip target

```bash
python -m pip --version
```

### List installed packages

```bash
python -m pip list
```

### Create a virtual environment

```bash
python -m venv venv
```

### Activate on macOS/Linux

```bash
source venv/bin/activate
```

## Real-world fixes

- If imports fail after installation, the package was likely installed into a different interpreter.
- If SSL fails only in Python, update the CA bundle used by Python before disabling verification.
- Install the system venv package for your Python version, then recreate the virtual environment.

## Step-by-step troubleshooting

1. Confirm the failing traceback contains `The virtual environment was not created successfully because ensurepip is not available`.
2. Run `python -m pip --version` and verify the path belongs to the expected environment.
3. Activate the virtual environment, then rerun the same version and pip checks.
4. Install packages with `python -m pip install <package>` rather than a bare `pip` command.
5. Retry the smallest script or import that produced the error.

## Platform-specific fixes

### macOS

- If system Python and Homebrew Python both exist, use `python3 -m pip` from the interpreter you run in production.

### Linux

- On Debian/Ubuntu, install virtual environment support with `sudo apt install python3-venv` when `ensurepip` is missing.

### Windows

- Use `py -m pip --version` and `py -m venv venv` when the Python launcher is installed.

## How to prevent it

- Use a virtual environment per project.
- Record dependencies in `requirements.txt`, `pyproject.toml`, or the project lockfile.
- Use `python -m pip` in documentation and CI scripts.

## Related errors

- pip command not found
- Python ModuleNotFoundError no module named
- Python SSL certificate verify failed

## FAQ

### What should I check first?

Start with the exact `The virtual environment was not created successfully because ensurepip is not available` line and the command, request, or workflow step that produced it. In Python, the first useful clue is usually near the first failure line, not the final stack trace.

### Can I ignore this error?

No. Treat it as a failed Python step. A temporary bypass may help diagnosis, but the underlying cause should be fixed before shipping or publishing changes.

### Why does this work locally but fail elsewhere?

Local machines often have cached credentials, old dependencies, different runtime versions, or network settings that CI and production do not share. Reproduce from a clean shell or clean install when possible.

### How do I know the fix worked?

Rerun the smallest command, request, or deployment step that produced `The virtual environment was not created successfully because ensurepip is not available`. The fix is working when that step completes without the same signature and produces the expected output.
