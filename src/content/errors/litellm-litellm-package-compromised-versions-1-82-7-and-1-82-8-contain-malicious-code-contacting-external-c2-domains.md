---
title: "LiteLLM Supply Chain Compromise Incident — Install Poisoned Versions"
description: "Determine if a project installed compromised LiteLLM versions and clean the installation; scan GitLab CI/CD jobs and GitHub Actions for affected deployments Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM package compromised — versions 1.82.7 and 1.82.8 contain malicious code contacting external C2 domains"
common_causes:
  - "Critical security incident reported March 27, 2026. BerriAI (LiteLLM maintainer) disclosed a suspected supply chain attack. Versions 1.82.7 and 1.82.8 were poisoned and contacted checkmarx.zone. Clean version v1.83.0 released via new CI/CD v2 pipeline. Security scanners provided for GitLab and GitHub. CVE-2026-42208 (pre-auth SQL injection) and CVE-2026-30623 (MCP command injection) also discovered. High commercial value because LiteLLM is a widely-used AI gateway proxy serving as the front door to 100+ LLM providers for enterprises. Category mapping: LiteLLM → LiteLLM (direct match). This is a unique security-event-driven error that would be extremely valuable for dev-error-db coverage."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "LiteLLM"
updated: "2026-06-02"
published_at: "2026-06-02T18:44:30.528Z"
updated_at: "2026-06-02T18:44:30.528Z"
---

## What this error means

`LiteLLM package compromised — versions 1.82.7 and 1.82.8 contain malicious code contacting external C2 domains` is a LiteLLM failure pattern reported for developers trying to determine if a project installed compromised litellm versions and clean the installation; scan gitlab ci/cd jobs and github actions for affected deployments. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Critical security incident reported March 27, 2026. BerriAI (LiteLLM maintainer) disclosed a suspected supply chain attack. Versions 1.82.7 and 1.82.8 were poisoned and contacted checkmarx.zone. Clean version v1.83.0 released via new CI/CD v2 pipeline. Security scanners provided for GitLab and GitHub. CVE-2026-42208 (pre-auth SQL injection) and CVE-2026-30623 (MCP command injection) also discovered. High commercial value because LiteLLM is a widely-used AI gateway proxy serving as the front door to 100+ LLM providers for enterprises. Category mapping: LiteLLM → LiteLLM (direct match). This is a unique security-event-driven error that would be extremely valuable for dev-error-db coverage.

## Common causes

- Critical security incident reported March 27, 2026. BerriAI (LiteLLM maintainer) disclosed a suspected supply chain attack. Versions 1.82.7 and 1.82.8 were poisoned and contacted checkmarx.zone. Clean version v1.83.0 released via new CI/CD v2 pipeline. Security scanners provided for GitLab and GitHub. CVE-2026-42208 (pre-auth SQL injection) and CVE-2026-30623 (MCP command injection) also discovered. High commercial value because LiteLLM is a widely-used AI gateway proxy serving as the front door to 100+ LLM providers for enterprises. Category mapping: LiteLLM → LiteLLM (direct match). This is a unique security-event-driven error that would be extremely valuable for dev-error-db coverage.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM package compromised — versions 1.82.7 and 1.82.8 contain malicious code contacting external C2 domains`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://docs.litellm.ai/blog/security-update-march-2026
- https://bishopfox.com/blog/cve-2026-42208-pre-authentication-sql-injection-in-litellm-proxy
- https://www.reddit.com/r/LocalLLaMA/comments/1s2fch0/developing_situation_litellm_compromised

Evidence note: Critical security incident reported March 27, 2026. BerriAI (LiteLLM maintainer) disclosed a suspected supply chain attack. Versions 1.82.7 and 1.82.8 were poisoned and contacted checkmarx.zone. Clean version v1.83.0 released via new CI/CD v2 pipeline. Security scanners provided for GitLab and GitHub. CVE-2026-42208 (pre-auth SQL injection) and CVE-2026-30623 (MCP command injection) also discovered. High commercial value because LiteLLM is a widely-used AI gateway proxy serving as the front door to 100+ LLM providers for enterprises. Category mapping: LiteLLM → LiteLLM (direct match). This is a unique security-event-driven error that would be extremely valuable for dev-error-db coverage.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `LiteLLM package compromised — versions 1.82.7 and 1.82.8 contain malicious code contacting external C2 domains` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM package compromised — versions 1.82.7 and 1.82.8 contain malicious code contacting external C2 domains`.
