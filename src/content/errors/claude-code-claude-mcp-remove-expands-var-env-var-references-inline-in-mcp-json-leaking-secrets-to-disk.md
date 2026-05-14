---
title: "Claude Code 'claude mcp remove' Expands Environment Variable References, Leaking Secrets"
description: "Fix Claude Code mcp remove command leaking environment variable secrets into .mcp.json file on disk Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "claude mcp remove expands ${VAR} env-var references inline in .mcp.json, leaking secrets to disk"
common_causes:
  - "Developers using Claude Code MCP servers store secrets via ${VAR} references. Running 'claude mcp remove' silently expands all env-var placeholders to literal values, baking secrets into the config file on disk. This is a credential leak that violates security best practices and may expose API keys, tokens, and passwords."
  - "GitHub issue #58850 reports that 'claude mcp remove <name>' correctly deletes the named server entry but expands every ${VAR} env-var placeholder elsewhere in .mcp.json to its literal value. Secrets safely referenced via env vars get baked into the file on disk, visible in plain text. Multiple users confirmed the behavior."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "claude mcp add environment variable not working"
  - "claude code .mcp.json secrets exposed in git"
updated: "2026-05-14"
published_at: "2026-05-14T03:13:18.606Z"
updated_at: "2026-05-14T03:13:18.606Z"
---

## What this error means

`claude mcp remove expands ${VAR} env-var references inline in .mcp.json, leaking secrets to disk` is a Claude Code failure pattern reported for developers trying to fix claude code mcp remove command leaking environment variable secrets into .mcp.json file on disk. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #58850 reports that 'claude mcp remove <name>' correctly deletes the named server entry but expands every ${VAR} env-var placeholder elsewhere in .mcp.json to its literal value. Secrets safely referenced via env vars get baked into the file on disk, visible in plain text. Multiple users confirmed the behavior.

## Common causes

- Developers using Claude Code MCP servers store secrets via ${VAR} references. Running 'claude mcp remove' silently expands all env-var placeholders to literal values, baking secrets into the config file on disk. This is a credential leak that violates security best practices and may expose API keys, tokens, and passwords.
- GitHub issue #58850 reports that 'claude mcp remove <name>' correctly deletes the named server entry but expands every ${VAR} env-var placeholder elsewhere in .mcp.json to its literal value. Secrets safely referenced via env vars get baked into the file on disk, visible in plain text. Multiple users confirmed the behavior.

## Quick fixes

1. Confirm the exact error signature matches `claude mcp remove expands ${VAR} env-var references inline in .mcp.json, leaking secrets to disk`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/58850

Evidence note: GitHub issue #58850 reports that 'claude mcp remove <name>' correctly deletes the named server entry but expands every ${VAR} env-var placeholder elsewhere in .mcp.json to its literal value. Secrets safely referenced via env vars get baked into the file on disk, visible in plain text. Multiple users confirmed the behavior.

## Related errors

- claude mcp add environment variable not working
- claude code .mcp.json secrets exposed in git

## FAQ

### What should I check first?

Start with the exact `claude mcp remove expands ${VAR} env-var references inline in .mcp.json, leaking secrets to disk` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `claude mcp remove expands ${VAR} env-var references inline in .mcp.json, leaking secrets to disk`.
