---
title: "Claude API structured outputs: \"compiled grammar is too large\" error for complex JSON schemas"
description: "Fix Claude structured outputs (output_config.format) failing with 400 error when using moderately complex but valid JSON schemas with nested nullable types and repeated sub-schemas. Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "The compiled grammar is too large, which would cause performance issues. Simplify your tool schemas or reduce the number of strict tools."
common_causes:
  - "GitHub issue from anthropics/anthropic-sdk-python (#1185). Production code generation service triggers 400 invalid_request_error with complex schemas (~50 properties, 5 levels deep). Root causes: nullable types cause exponential branching, $ref not deduplicating, deep nesting compound complexity. Clear fix demand — better docs, improved error message, higher limits. Category: Anthropic API per mapping table."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Anthropic API"
updated: "2026-05-26"
published_at: "2026-05-26T07:43:16.222Z"
updated_at: "2026-05-26T07:43:16.222Z"
---

## What this error means

`The compiled grammar is too large, which would cause performance issues. Simplify your tool schemas or reduce the number of strict tools.` is a Anthropic API failure pattern reported for developers trying to fix claude structured outputs (output_config.format) failing with 400 error when using moderately complex but valid json schemas with nested nullable types and repeated sub-schemas.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue from anthropics/anthropic-sdk-python (#1185). Production code generation service triggers 400 invalid_request_error with complex schemas (~50 properties, 5 levels deep). Root causes: nullable types cause exponential branching, $ref not deduplicating, deep nesting compound complexity. Clear fix demand — better docs, improved error message, higher limits. Category: Anthropic API per mapping table.

## Common causes

- GitHub issue from anthropics/anthropic-sdk-python (#1185). Production code generation service triggers 400 invalid_request_error with complex schemas (~50 properties, 5 levels deep). Root causes: nullable types cause exponential branching, $ref not deduplicating, deep nesting compound complexity. Clear fix demand — better docs, improved error message, higher limits. Category: Anthropic API per mapping table.

## Quick fixes

1. Confirm the exact error signature matches `The compiled grammar is too large, which would cause performance issues. Simplify your tool schemas or reduce the number of strict tools.`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/anthropics/anthropic-sdk-python/issues/1185

Evidence note: GitHub issue from anthropics/anthropic-sdk-python (#1185). Production code generation service triggers 400 invalid_request_error with complex schemas (~50 properties, 5 levels deep). Root causes: nullable types cause exponential branching, $ref not deduplicating, deep nesting compound complexity. Clear fix demand — better docs, improved error message, higher limits. Category: Anthropic API per mapping table.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `The compiled grammar is too large, which would cause performance issues. Simplify your tool schemas or reduce the number of strict tools.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `The compiled grammar is too large, which would cause performance issues. Simplify your tool schemas or reduce the number of strict tools.`.
