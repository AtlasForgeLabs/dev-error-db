---
title: "LiteLLM PyPI Package Compromised — Supply Chain Attack via Malicious .pth File (v1.82.7/v1.82.8)"
description: "Check if installed LiteLLM version is compromised, understand scope of credential theft, and remediate Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "CRITICAL: Malicious litellm_init.pth in litellm 1.82.8 — credential stealer (supply chain compromise)"
common_causes:
  - "LiteLLM is a widely-used LLM proxy. Versions 1.82.7 and 1.82.8 on PyPI contained a malicious litellm_init.pth file that executed a credential-stealing script on every Python interpreter startup — stealing SSH keys, AWS credentials, Kubernetes configs, API keys, and environment variables. Developers using these versions need immediate remediation guidance."
  - "487+ comments on the primary security issue. The malicious .pth file (34,628 bytes) was double base64-encoded, exfiltrating SSH keys, AWS credentials, kube configs, git credentials, and all environment variables to attacker-controlled server. Compromise originated from trivy security scan dependency. Packages deleted, Mandiant engaged."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "How to check if my system was affected by LiteLLM supply chain attack"
  - "Rotate credentials after LiteLLM compromise"
  - "litellm credential stealer IOC indicators of compromise"
updated: "2026-05-13"
published_at: "2026-05-13T11:13:16.591Z"
updated_at: "2026-05-13T11:13:16.591Z"
---

## What this error means

`CRITICAL: Malicious litellm_init.pth in litellm 1.82.8 — credential stealer (supply chain compromise)` is a LiteLLM failure pattern reported for developers trying to check if installed litellm version is compromised, understand scope of credential theft, and remediate. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

487+ comments on the primary security issue. The malicious .pth file (34,628 bytes) was double base64-encoded, exfiltrating SSH keys, AWS credentials, kube configs, git credentials, and all environment variables to attacker-controlled server. Compromise originated from trivy security scan dependency. Packages deleted, Mandiant engaged.

## Common causes

- LiteLLM is a widely-used LLM proxy. Versions 1.82.7 and 1.82.8 on PyPI contained a malicious litellm_init.pth file that executed a credential-stealing script on every Python interpreter startup — stealing SSH keys, AWS credentials, Kubernetes configs, API keys, and environment variables. Developers using these versions need immediate remediation guidance.
- 487+ comments on the primary security issue. The malicious .pth file (34,628 bytes) was double base64-encoded, exfiltrating SSH keys, AWS credentials, kube configs, git credentials, and all environment variables to attacker-controlled server. Compromise originated from trivy security scan dependency. Packages deleted, Mandiant engaged.

## Quick fixes

1. Confirm the exact error signature matches `CRITICAL: Malicious litellm_init.pth in litellm 1.82.8 — credential stealer (supply chain compromise)`.
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
- https://news.ycombinator.com/item?id=47501729

Evidence note: 487+ comments on the primary security issue. The malicious .pth file (34,628 bytes) was double base64-encoded, exfiltrating SSH keys, AWS credentials, kube configs, git credentials, and all environment variables to attacker-controlled server. Compromise originated from trivy security scan dependency. Packages deleted, Mandiant engaged.

## Related errors

- How to check if my system was affected by LiteLLM supply chain attack
- Rotate credentials after LiteLLM compromise
- litellm credential stealer IOC indicators of compromise

## FAQ

### What should I check first?

Start with the exact `CRITICAL: Malicious litellm_init.pth in litellm 1.82.8 — credential stealer (supply chain compromise)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `CRITICAL: Malicious litellm_init.pth in litellm 1.82.8 — credential stealer (supply chain compromise)`.
