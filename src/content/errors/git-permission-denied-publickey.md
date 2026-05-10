---
title: "Git permission denied (publickey)"
slug: "git-permission-denied-publickey"
description: "Fix Git SSH permission denied publickey errors when cloning, pulling, or pushing repositories."
category: "Version control"
technology: "Git"
error_signature: "Permission denied (publickey)."
common_causes:
  - "SSH key is missing from the local agent"
  - "Public key is not added to the Git hosting account"
  - "Remote URL uses SSH but the account expects HTTPS"
  - "Wrong SSH key is selected for the host"
quick_fix: "Add the correct SSH key to your agent and Git hosting account, then test the SSH connection."
updated: "2026-05-10"
---

## What this error means

`Permission denied (publickey)` means Git attempted SSH authentication, but the remote host did not accept any public key offered by your machine.

## Common causes

- No SSH key exists on the machine.
- The key exists locally but is not loaded into `ssh-agent`.
- The matching public key was not added to GitHub, GitLab, Bitbucket, or your internal Git host.
- Multiple keys exist and SSH is offering the wrong one.

## Quick fixes

1. Check for an existing key:

   ```bash
   ls ~/.ssh
   ```

2. Add the key to your SSH agent:

   ```bash
   ssh-add ~/.ssh/id_ed25519
   ```

3. Test the host connection:

   ```bash
   ssh -T git@github.com
   ```

4. Confirm the repository remote uses the expected URL:

   ```bash
   git remote -v
   ```

## Step-by-step troubleshooting

1. Run `ssh -vT git@github.com` or the equivalent host command to see which keys are offered.
2. Add the public key from `~/.ssh/id_ed25519.pub` to your Git hosting account.
3. If you use multiple accounts, create or update `~/.ssh/config` with a host-specific `IdentityFile`.
4. Verify repository access permissions on the remote host.
5. Retry `git clone`, `git pull`, or `git push`.

## Related errors

- `fatal: Could not read from remote repository`
- `Host key verification failed`
- `Repository not found`

## FAQ

### Can I switch to HTTPS instead?

Yes. Update the remote URL to HTTPS if your workflow uses personal access tokens instead of SSH keys.

### Does this mean the repository does not exist?

Not necessarily. Private repositories can look unreachable when authentication fails.

### Which key type should I create today?

Use an Ed25519 key unless your environment requires a different SSH key type.
