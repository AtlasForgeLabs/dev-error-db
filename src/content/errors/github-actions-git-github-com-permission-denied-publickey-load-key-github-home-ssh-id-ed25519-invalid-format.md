---
title: "GitHub Actions SSH Deployment Permission Denied (publickey) — ED25519 vs RSA Key Format Mismatch"
description: "Developer's GitHub Actions workflow fails with SSH permission denied during git clone or deploy step. Root cause often involves mismatched key formats (ED25519 public key vs RSA private key in secrets), truncated PEM in secret values, or ssh-agent not initialized in runner environment. Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "git@github.com: Permission denied (publickey). Load key '/github/home/.ssh/id_ed25519': invalid format"
common_causes:
  - "Stack Overflow and GitHub Discussions extensively cover this pattern. Common variants: ed25519 public key but RSA private key pasted into GitHub secrets (multiple SO answers), PEM key truncated missing '-----END RSA PRIVATE KEY-----' line (SO answer), ssh-agent not initialized on ubuntu-latest runner. WP Engine deploy action (#50) and Maven release plugin (#51) both have open issues. Category mapping: GitHub Actions CI/CD auth error → 'GitHub Actions'. Not in dev-error-db."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "GitHub Actions"
updated: "2026-06-02"
published_at: "2026-06-02T10:44:29.559Z"
updated_at: "2026-06-02T10:44:29.559Z"
---

## What this error means

`git@github.com: Permission denied (publickey). Load key '/github/home/.ssh/id_ed25519': invalid format` is a GitHub Actions failure pattern reported for developers trying to developer's github actions workflow fails with ssh permission denied during git clone or deploy step. root cause often involves mismatched key formats (ed25519 public key vs rsa private key in secrets), truncated pem in secret values, or ssh-agent not initialized in runner environment.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Stack Overflow and GitHub Discussions extensively cover this pattern. Common variants: ed25519 public key but RSA private key pasted into GitHub secrets (multiple SO answers), PEM key truncated missing '-----END RSA PRIVATE KEY-----' line (SO answer), ssh-agent not initialized on ubuntu-latest runner. WP Engine deploy action (#50) and Maven release plugin (#51) both have open issues. Category mapping: GitHub Actions CI/CD auth error → 'GitHub Actions'. Not in dev-error-db.

## Common causes

- Stack Overflow and GitHub Discussions extensively cover this pattern. Common variants: ed25519 public key but RSA private key pasted into GitHub secrets (multiple SO answers), PEM key truncated missing '-----END RSA PRIVATE KEY-----' line (SO answer), ssh-agent not initialized on ubuntu-latest runner. WP Engine deploy action (#50) and Maven release plugin (#51) both have open issues. Category mapping: GitHub Actions CI/CD auth error → 'GitHub Actions'. Not in dev-error-db.

## Quick fixes

1. Confirm the exact error signature matches `git@github.com: Permission denied (publickey). Load key '/github/home/.ssh/id_ed25519': invalid format`.
2. Check the GitHub Actions account, local tool state, and provider configuration involved in the failing workflow.
3. Check the build output, project root, and deployment platform configuration before redeploying.

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

- https://stackoverflow.com/questions/63104643/git-permission-denied-publickey-when-accessing-server-through-github-actions-c
- https://stackoverflow.com/questions/71142656/github-actions-permission-denied-publickey
- https://github.com/wpengine/github-action-wpe-site-deploy/issues/50
- https://github.com/qcastel/github-actions-maven-release/issues/51

Evidence note: Stack Overflow and GitHub Discussions extensively cover this pattern. Common variants: ed25519 public key but RSA private key pasted into GitHub secrets (multiple SO answers), PEM key truncated missing '-----END RSA PRIVATE KEY-----' line (SO answer), ssh-agent not initialized on ubuntu-latest runner. WP Engine deploy action (#50) and Maven release plugin (#51) both have open issues. Category mapping: GitHub Actions CI/CD auth error → 'GitHub Actions'. Not in dev-error-db.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `git@github.com: Permission denied (publickey). Load key '/github/home/.ssh/id_ed25519': invalid format` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `git@github.com: Permission denied (publickey). Load key '/github/home/.ssh/id_ed25519': invalid format`.
