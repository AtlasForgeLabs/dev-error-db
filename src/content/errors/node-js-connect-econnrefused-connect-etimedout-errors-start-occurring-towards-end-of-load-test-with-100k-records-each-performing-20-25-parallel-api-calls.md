---
title: "Node.js ECONNREFUSED under load — API calls fail after initial success during load testing"
description: "Backend API receives ECONNREFUSED/ETIMEDOUT errors only under high load after initial requests succeed. Developer needs to understand connection pool exhaustion, resource limits, or service-level causes for intermittent connection refusals. Includes evidence for Node.js troubleshooting demand."
category: "Node.js"
technology: "Node.js"
error_signature: "connect ECONNREFUSED / connect ETIMEDOUT (errors start occurring towards end of load test with 100k records, each performing 20-25 parallel API calls)"
common_causes:
  - "Stack Overflow Q79155198 — load test with 100k records @ 20-25 API calls each produces ECONNREFUSED/ETIMEDOUT progressively. Distinct from generic 'connection refused' because it manifests only under concurrency/load patterns. High commercial relevance for production backends serving API traffic."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Node.js"
updated: "2026-05-28"
published_at: "2026-05-28T03:43:21.935Z"
updated_at: "2026-05-28T03:43:21.935Z"
---

## What this error means

`connect ECONNREFUSED / connect ETIMEDOUT (errors start occurring towards end of load test with 100k records, each performing 20-25 parallel API calls)` is a Node.js failure pattern reported for developers trying to backend api receives econnrefused/etimedout errors only under high load after initial requests succeed. developer needs to understand connection pool exhaustion, resource limits, or service-level causes for intermittent connection refusals.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Stack Overflow Q79155198 — load test with 100k records @ 20-25 API calls each produces ECONNREFUSED/ETIMEDOUT progressively. Distinct from generic 'connection refused' because it manifests only under concurrency/load patterns. High commercial relevance for production backends serving API traffic.

## Common causes

- Stack Overflow Q79155198 — load test with 100k records @ 20-25 API calls each produces ECONNREFUSED/ETIMEDOUT progressively. Distinct from generic 'connection refused' because it manifests only under concurrency/load patterns. High commercial relevance for production backends serving API traffic.

## Quick fixes

1. Confirm the exact error signature matches `connect ECONNREFUSED / connect ETIMEDOUT (errors start occurring towards end of load test with 100k records, each performing 20-25 parallel API calls)`.
2. Check the Node.js account, local tool state, and provider configuration involved in the failing workflow.
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

- https://stackoverflow.com/questions/79155198/node-js-error-connect-econnrefused-connect-etimedout

Evidence note: Stack Overflow Q79155198 — load test with 100k records @ 20-25 API calls each produces ECONNREFUSED/ETIMEDOUT progressively. Distinct from generic 'connection refused' because it manifests only under concurrency/load patterns. High commercial relevance for production backends serving API traffic.

## Related errors

- Node.js

## FAQ

### What should I check first?

Start with the exact `connect ECONNREFUSED / connect ETIMEDOUT (errors start occurring towards end of load test with 100k records, each performing 20-25 parallel API calls)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Node.js workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `connect ECONNREFUSED / connect ETIMEDOUT (errors start occurring towards end of load test with 100k records, each performing 20-25 parallel API calls)`.
