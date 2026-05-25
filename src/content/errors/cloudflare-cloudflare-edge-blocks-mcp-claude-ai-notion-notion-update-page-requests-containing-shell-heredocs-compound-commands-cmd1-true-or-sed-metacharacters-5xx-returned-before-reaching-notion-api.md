---
title: "Cloudflare WAF Blocks Claude Code MCP Notion Tool Calls Containing Shell Heredocs"
description: "Work around Cloudflare WAF false positive blocking valid MCP Notion tool payloads containing common shell-script patterns in markdown Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Cloudflare edge blocks mcp__claude_ai_Notion__notion-update-page requests containing shell heredocs, compound commands (cmd1 || true), or sed metacharacters; 5xx returned before reaching Notion API"
common_causes:
  - "GitHub anthropics/claude-code #61390 — Notion MCP tool calls fail at Anthropic's Cloudflare edge when markdown content contains heredocs, pipe operators, or sed commands. Pure prose of same size succeeds; trigger is specific token patterns not payload size. Affects all Claude Code Pro users making Notion updates with technical documentation. Category mapping: Cloudflare WAF error blocking legitimate requests."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-25"
published_at: "2026-05-25T11:43:13.674Z"
updated_at: "2026-05-25T11:43:13.674Z"
---

## What this error means

`Cloudflare edge blocks mcp__claude_ai_Notion__notion-update-page requests containing shell heredocs, compound commands (cmd1 || true), or sed metacharacters; 5xx returned before reaching Notion API` is a Cloudflare failure pattern reported for developers trying to work around cloudflare waf false positive blocking valid mcp notion tool payloads containing common shell-script patterns in markdown. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub anthropics/claude-code #61390 — Notion MCP tool calls fail at Anthropic's Cloudflare edge when markdown content contains heredocs, pipe operators, or sed commands. Pure prose of same size succeeds; trigger is specific token patterns not payload size. Affects all Claude Code Pro users making Notion updates with technical documentation. Category mapping: Cloudflare WAF error blocking legitimate requests.

## Common causes

- GitHub anthropics/claude-code #61390 — Notion MCP tool calls fail at Anthropic's Cloudflare edge when markdown content contains heredocs, pipe operators, or sed commands. Pure prose of same size succeeds; trigger is specific token patterns not payload size. Affects all Claude Code Pro users making Notion updates with technical documentation. Category mapping: Cloudflare WAF error blocking legitimate requests.

## Quick fixes

1. Confirm the exact error signature matches `Cloudflare edge blocks mcp__claude_ai_Notion__notion-update-page requests containing shell heredocs, compound commands (cmd1 || true), or sed metacharacters; 5xx returned before reaching Notion API`.
2. Check the Cloudflare account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/61390

Evidence note: GitHub anthropics/claude-code #61390 — Notion MCP tool calls fail at Anthropic's Cloudflare edge when markdown content contains heredocs, pipe operators, or sed commands. Pure prose of same size succeeds; trigger is specific token patterns not payload size. Affects all Claude Code Pro users making Notion updates with technical documentation. Category mapping: Cloudflare WAF error blocking legitimate requests.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Cloudflare edge blocks mcp__claude_ai_Notion__notion-update-page requests containing shell heredocs, compound commands (cmd1 || true), or sed metacharacters; 5xx returned before reaching Notion API` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Cloudflare edge blocks mcp__claude_ai_Notion__notion-update-page requests containing shell heredocs, compound commands (cmd1 || true), or sed metacharacters; 5xx returned before reaching Notion API`.
