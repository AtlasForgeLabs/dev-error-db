---
title: "LiteLLM delete model reappears in /v2/model/info across multiple instances with Redis state sync"
description: "Fix persistent ghost model entries in LiteLLM dashboard when running multi-instance proxy — deletion not propagating through Redis-backed model registry Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Deleted model reappears in /v2/model/info across multiple LiteLLM instances"
common_causes:
  - "GitHub issue #28443 (May 21, 2026) on BerriAI/litellm, labeled 'bug' and 'proxy'. Model registry inconsistency across distributed LiteLLM proxy instances. Business impact: admins see stale models affecting routing/quota allocation in production clusters."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-21"
published_at: "2026-05-21T21:39:45.736Z"
updated_at: "2026-05-21T21:39:45.736Z"
---

## What this error means

`Deleted model reappears in /v2/model/info across multiple LiteLLM instances` is a LiteLLM failure pattern reported for developers trying to fix persistent ghost model entries in litellm dashboard when running multi-instance proxy — deletion not propagating through redis-backed model registry. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #28443 (May 21, 2026) on BerriAI/litellm, labeled 'bug' and 'proxy'. Model registry inconsistency across distributed LiteLLM proxy instances. Business impact: admins see stale models affecting routing/quota allocation in production clusters.

## Common causes

- GitHub issue #28443 (May 21, 2026) on BerriAI/litellm, labeled 'bug' and 'proxy'. Model registry inconsistency across distributed LiteLLM proxy instances. Business impact: admins see stale models affecting routing/quota allocation in production clusters.

## Quick fixes

1. Confirm the exact error signature matches `Deleted model reappears in /v2/model/info across multiple LiteLLM instances`.
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

- https://github.com/BerriAI/litellm/issues/28443

Evidence note: GitHub issue #28443 (May 21, 2026) on BerriAI/litellm, labeled 'bug' and 'proxy'. Model registry inconsistency across distributed LiteLLM proxy instances. Business impact: admins see stale models affecting routing/quota allocation in production clusters.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Deleted model reappears in /v2/model/info across multiple LiteLLM instances` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Deleted model reappears in /v2/model/info across multiple LiteLLM instances`.
