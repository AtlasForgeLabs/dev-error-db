---
title: "GitHub Actions Runner Proxy Upload Stall Through HTTPS_PROXY"
description: "Fix GitHub Actions self-hosted runner stalling on Azure Blob uploads when HTTPS_PROXY is configured Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Runner Azure Blob uploads stall through HTTPS proxy - BlobClient not configured with proxy transport"
common_causes:
  - "Self-hosted runners configured with HTTPS_PROXY experience 75-second stalls on Azure Blob Storage uploads (logs, summaries, artifacts). The BlobClient ignores proxy transport configuration. Affects all enterprises using proxy servers for CI/CD."
  - "Filed 2026-04-15. Runner's ResultsHttpClient creates BlobClient without HttpClientTransport proxy config. Azure SDK falls back to default transport ignoring HTTPS_PROXY. Causes 75-second stalls and timeouts on all artifact uploads."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions runner proxy upload stall"
  - "GitHub Actions HTTPS_PROXY artifact upload timeout"
  - "GitHub Actions runner Azure Blob proxy configuration"
updated: "2026-05-15"
published_at: "2026-05-15T00:13:21.172Z"
updated_at: "2026-05-15T00:13:21.172Z"
---

## What this error means

`Runner Azure Blob uploads stall through HTTPS proxy - BlobClient not configured with proxy transport` is a GitHub Actions failure pattern reported for developers trying to fix github actions self-hosted runner stalling on azure blob uploads when https_proxy is configured. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Filed 2026-04-15. Runner's ResultsHttpClient creates BlobClient without HttpClientTransport proxy config. Azure SDK falls back to default transport ignoring HTTPS_PROXY. Causes 75-second stalls and timeouts on all artifact uploads.

## Common causes

- Self-hosted runners configured with HTTPS_PROXY experience 75-second stalls on Azure Blob Storage uploads (logs, summaries, artifacts). The BlobClient ignores proxy transport configuration. Affects all enterprises using proxy servers for CI/CD.
- Filed 2026-04-15. Runner's ResultsHttpClient creates BlobClient without HttpClientTransport proxy config. Azure SDK falls back to default transport ignoring HTTPS_PROXY. Causes 75-second stalls and timeouts on all artifact uploads.

## Quick fixes

1. Confirm the exact error signature matches `Runner Azure Blob uploads stall through HTTPS proxy - BlobClient not configured with proxy transport`.
2. Check the GitHub Actions account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/actions/runner/issues/4351

Evidence note: Filed 2026-04-15. Runner's ResultsHttpClient creates BlobClient without HttpClientTransport proxy config. Azure SDK falls back to default transport ignoring HTTPS_PROXY. Causes 75-second stalls and timeouts on all artifact uploads.

## Related errors

- GitHub Actions runner proxy upload stall
- GitHub Actions HTTPS_PROXY artifact upload timeout
- GitHub Actions runner Azure Blob proxy configuration

## FAQ

### What should I check first?

Start with the exact `Runner Azure Blob uploads stall through HTTPS proxy - BlobClient not configured with proxy transport` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Runner Azure Blob uploads stall through HTTPS proxy - BlobClient not configured with proxy transport`.
