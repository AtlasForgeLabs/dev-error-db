---
title: "SSL unable to get local issuer certificate"
description: "Fix unable to get local issuer certificate errors by repairing trust stores or serving a complete certificate chain."
category: "SSL/TLS"
technology: "SSL/TLS"
error_signature: "unable to get local issuer certificate"
common_causes:
  - "Server is missing an intermediate certificate"
  - "Local CA bundle is outdated"
  - "Corporate proxy uses an untrusted root certificate"
  - "Client points to the wrong CA file"
quick_fix: "Verify the server certificate chain and update the client trust store or CA bundle."
related_errors:
  - "Python SSL certificate verify failed"
  - "SSL certificate has expired"
  - "self signed certificate in certificate chain"
updated: "2026-05-10"
---

## What this error means

`unable to get local issuer certificate` means Git cannot complete the requested repository operation with the current directory, remote, branch history, or SSH/HTTPS credentials. Inspect repository state before forcing commands.

## Why this happens

Git is stateful: the current branch, remote URL, working directory, and configured identity all affect the same command.

For SSL unable to get local issuer certificate, verify the repository state and remote access before rewriting history or changing credentials.

## Quick fixes

1. Run `git status` from the directory where the error appears.
2. Check remotes with `git remote -v`.
3. Verify the server certificate chain and update the client trust store or CA bundle.
4. Retry using the same SSH or HTTPS remote style your team expects.

## Copy-paste commands

### Check repository state

```bash
git status
```

### Show remotes

```bash
git remote -v
```

### List local branches

```bash
git branch
```

### Fetch remote refs

```bash
git fetch origin
```

### Test GitHub SSH

```bash
ssh -T git@github.com
```

## Real-world fixes

- If SSH fails, confirm the public key is added to the account that owns the repository.
- If a remote URL is wrong, update it with `git remote set-url origin <url>` instead of adding a duplicate remote.
- Verify the server certificate chain and update the client trust store or CA bundle.

## Step-by-step troubleshooting

1. Copy the exact `unable to get local issuer certificate` line and the Git command that produced it.
2. Run `git status` to confirm you are inside the intended repository.
3. Run `git remote -v` and verify SSH versus HTTPS matches your credential setup.
4. Run `git fetch origin` to separate network/auth problems from local branch problems.
5. Avoid force pushes or history rewrites until you know which branch and remote are affected.

## How to prevent it

- Document the expected remote URL format for the project.
- Use SSH config host aliases when working with multiple Git accounts.
- Check branch and remote before running destructive Git commands.

## Related errors

- Python SSL certificate verify failed
- SSL certificate has expired
- self signed certificate in certificate chain

## FAQ

### What should I check first?

Start with the exact `unable to get local issuer certificate` line and the command, request, or workflow step that produced it. In Git, the first useful clue is usually near the first failure line, not the final stack trace.

### Can I ignore this error?

No. Treat it as a failed Git step. A temporary bypass may help diagnosis, but the underlying cause should be fixed before shipping or publishing changes.

### Why does this work locally but fail elsewhere?

Local machines often have cached credentials, old dependencies, different runtime versions, or network settings that CI and production do not share. Reproduce from a clean shell or clean install when possible.

### How do I know the fix worked?

Rerun the smallest command, request, or deployment step that produced `unable to get local issuer certificate`. The fix is working when that step completes without the same signature and produces the expected output.
