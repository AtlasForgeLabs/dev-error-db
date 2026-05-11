---
title: "LiteLLM Supply Chain Attack — Malicious .pth File Steals Credentials"
description: "Fix or investigate malicious code execution from litellm package on Python startup Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "malicious litellm_init.pth in litellm 1.82.8 — credential stealer"
common_causes:
  - "The litellm==1.82.8 PyPI package contains a malicious .pth file that auto-executes a credential-stealing script on every Python interpreter start. Developers who installed this version had their API keys, SSH keys, AWS/GCP/Azure credentials, Kubernetes configs, and crypto wallets exfiltrated. Massive developer impact with 487+ comments on the tracking issue."
  - "The litellm_init.pth file (34,628 bytes) uses double base64-encoded payload to collect system info, environment variables, SSH keys, git credentials, AWS/GCP/Azure/K8s/Docker credentials, crypto wallets, and SSL/TLS private keys. Auto-executes on Python startup — no 'import litellm' needed. Reported 2026-03-24, 487 comments, issue closed."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "litellm pip package compromised"
  - "Python .pth file code execution vulnerability"
  - "supply chain attack developer tools"
updated: "2026-05-11"
---

## What this error means

`malicious litellm_init.pth in litellm 1.82.8 — credential stealer` is a LiteLLM failure pattern reported for developers trying to fix or investigate malicious code execution from litellm package on python startup. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

The litellm_init.pth file (34,628 bytes) uses double base64-encoded payload to collect system info, environment variables, SSH keys, git credentials, AWS/GCP/Azure/K8s/Docker credentials, crypto wallets, and SSL/TLS private keys. Auto-executes on Python startup — no 'import litellm' needed. Reported 2026-03-24, 487 comments, issue closed.

## Common causes

- The litellm==1.82.8 PyPI package contains a malicious .pth file that auto-executes a credential-stealing script on every Python interpreter start. Developers who installed this version had their API keys, SSH keys, AWS/GCP/Azure credentials, Kubernetes configs, and crypto wallets exfiltrated. Massive developer impact with 487+ comments on the tracking issue.
- The litellm_init.pth file (34,628 bytes) uses double base64-encoded payload to collect system info, environment variables, SSH keys, git credentials, AWS/GCP/Azure/K8s/Docker credentials, crypto wallets, and SSL/TLS private keys. Auto-executes on Python startup — no 'import litellm' needed. Reported 2026-03-24, 487 comments, issue closed.

## Quick fixes

1. Confirm the exact error signature matches `malicious litellm_init.pth in litellm 1.82.8 — credential stealer`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/24512
- https://github.com/BerriAI/litellm/issues/24518

Evidence note: The litellm_init.pth file (34,628 bytes) uses double base64-encoded payload to collect system info, environment variables, SSH keys, git credentials, AWS/GCP/Azure/K8s/Docker credentials, crypto wallets, and SSL/TLS private keys. Auto-executes on Python startup — no 'import litellm' needed. Reported 2026-03-24, 487 comments, issue closed.

## Related errors

- litellm pip package compromised
- Python .pth file code execution vulnerability
- supply chain attack developer tools

## FAQ

### What should I check first?

Start with the exact `malicious litellm_init.pth in litellm 1.82.8 — credential stealer` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `malicious litellm_init.pth in litellm 1.82.8 — credential stealer`.
