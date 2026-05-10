---
title: "SSL unable to get local issuer certificate"
description: "Fix unable to get local issuer certificate errors by repairing trust stores or serving a complete certificate chain."
category: "Networking"
technology: "SSL/TLS"
error_signature: "unable to get local issuer certificate"
common_causes:
  - "Server is missing an intermediate certificate"
  - "Local CA bundle is outdated"
  - "Corporate proxy uses an untrusted root certificate"
  - "Client points to the wrong CA file"
quick_fix: "Verify the server certificate chain and update the client trust store or CA bundle."
updated: "2026-05-10"
---

## What this error means

`unable to get local issuer certificate` means Git cannot complete the repository operation with the current working directory, remote, history, or authentication setup. The command is often correct, but the repository state or remote configuration is not what Git expects. This page helps you resolve certificate chain validation errors in Node.js, Python, Git, curl, and browsers.

## Common causes

- Server is missing an intermediate certificate
- Local CA bundle is outdated
- Corporate proxy uses an untrusted root certificate
- Client points to the wrong CA file

## Quick fixes

1. Check `python --version` and `python -m pip --version` to confirm the active interpreter.
2. Verify the server certificate chain and update the client trust store or CA bundle.
3. Activate the intended virtual environment before installing or running the script.
4. Retry with `python -m ...` commands to avoid using the wrong executable.

## Step-by-step troubleshooting

1. Start with the exact signature: `unable to get local issuer certificate`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Run `git status` and `git remote -v` from the directory where the error happens.
3. For history or merge errors, inspect the branch relationship before forcing a merge or rewriting history.
4. For remote errors, confirm whether the URL should use SSH or HTTPS.
5. Run `which python` and `python -m pip --version` to verify installs target the interpreter that runs the code.
6. If a virtual environment is expected, recreate it only after confirming the right Python version is installed.
7. For certificate failures, update `certifi` or the system CA store before changing application code.

## Related errors

- Python SSL certificate verify failed
- SSL certificate has expired
- self signed certificate in certificate chain

## FAQ

### What should I check first?

Start with the exact `unable to get local issuer certificate` message and the certificate chain, expiry, hostname, and local trust store. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed SSL/TLS step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

CI starts from a clean machine. It may use a different Python version, miss the virtual environment, or install packages into a different interpreter. Reproduce with `python -m pip` and log the Python version used by the job.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `unable to get local issuer certificate`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
