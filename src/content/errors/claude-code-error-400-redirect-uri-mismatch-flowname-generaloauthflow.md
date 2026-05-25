---
title: "Google Cloud BigQuery MCP connector: OAuth redirect_uri_mismatch (Error 400)"
description: "Fix OAuth integration between Claude Code BigQuery MCP connector and Google Cloud; users cannot authenticate due to mismatched redirect URI registration. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Error 400: redirect_uri_mismatch — flowName=GeneralOAuthFlow"
common_causes:
  - "Issue #62271 on anthropics/claude-code: MCP connector sends unregistered redirect URI during Google OAuth consent. Workaround is falling back to bq CLI with gcloud ADC. Affects enterprise data/analytics workflows using Claude Code MCP. Not covered in dev-error-db yet. Category: AI Coding Tools (MCP/auth context)."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-25"
published_at: "2026-05-25T18:43:14.540Z"
updated_at: "2026-05-25T18:43:14.540Z"
---

## What this error means

`Error 400: redirect_uri_mismatch — flowName=GeneralOAuthFlow` is a Claude Code failure pattern reported for developers trying to fix oauth integration between claude code bigquery mcp connector and google cloud; users cannot authenticate due to mismatched redirect uri registration.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #62271 on anthropics/claude-code: MCP connector sends unregistered redirect URI during Google OAuth consent. Workaround is falling back to bq CLI with gcloud ADC. Affects enterprise data/analytics workflows using Claude Code MCP. Not covered in dev-error-db yet. Category: AI Coding Tools (MCP/auth context).

## Common causes

- Issue #62271 on anthropics/claude-code: MCP connector sends unregistered redirect URI during Google OAuth consent. Workaround is falling back to bq CLI with gcloud ADC. Affects enterprise data/analytics workflows using Claude Code MCP. Not covered in dev-error-db yet. Category: AI Coding Tools (MCP/auth context).

## Quick fixes

1. Confirm the exact error signature matches `Error 400: redirect_uri_mismatch — flowName=GeneralOAuthFlow`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/anthropics/claude-code/issues/62271

Evidence note: Issue #62271 on anthropics/claude-code: MCP connector sends unregistered redirect URI during Google OAuth consent. Workaround is falling back to bq CLI with gcloud ADC. Affects enterprise data/analytics workflows using Claude Code MCP. Not covered in dev-error-db yet. Category: AI Coding Tools (MCP/auth context).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Error 400: redirect_uri_mismatch — flowName=GeneralOAuthFlow` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error 400: redirect_uri_mismatch — flowName=GeneralOAuthFlow`.
