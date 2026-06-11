---
title: "ERR_MODULE_NOT_FOUND: zod missing with pnpm strict isolation on @modelcontextprotocol/sdk packages"
description: "User encounters runtime ERR_MODULE_NOT_FOUND for 'zod' after installing @modelcontextprotocol/server-sequential-thinking via pnpm with strict isolation enabled; wants to fix the module resolution failure. Includes evidence for pnpm / Node.js troubleshooting demand."
category: "Node.js"
technology: "pnpm / Node.js"
error_signature: "Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'zod' imported from ..."
common_causes:
  - "GitHub Issue #4288 on modelcontextprotocol/servers (opened Jun 7, 2026). Root cause: zod declared in both dependencies and peerDependencies; with pnpm strict isolation the peer dep takes precedence but consumer does not declare zod, causing runtime ESM resolution failure. Not in covered-errors.md. Strong signal for Node.js/npm/pnpm error audience. Approved category: Node.js."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Node.js"
updated: "2026-06-11"
published_at: "2026-06-11T01:36:13.486Z"
updated_at: "2026-06-11T01:36:13.486Z"
---

## What this error means

`Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'zod' imported from ...` is a pnpm / Node.js failure pattern reported for developers trying to user encounters runtime err_module_not_found for 'zod' after installing @modelcontextprotocol/server-sequential-thinking via pnpm with strict isolation enabled; wants to fix the module resolution failure.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #4288 on modelcontextprotocol/servers (opened Jun 7, 2026). Root cause: zod declared in both dependencies and peerDependencies; with pnpm strict isolation the peer dep takes precedence but consumer does not declare zod, causing runtime ESM resolution failure. Not in covered-errors.md. Strong signal for Node.js/npm/pnpm error audience. Approved category: Node.js.

## Common causes

- GitHub Issue #4288 on modelcontextprotocol/servers (opened Jun 7, 2026). Root cause: zod declared in both dependencies and peerDependencies; with pnpm strict isolation the peer dep takes precedence but consumer does not declare zod, causing runtime ESM resolution failure. Not in covered-errors.md. Strong signal for Node.js/npm/pnpm error audience. Approved category: Node.js.

## Quick fixes

1. Confirm the exact error signature matches `Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'zod' imported from ...`.
2. Check the pnpm / Node.js account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/modelcontextprotocol/servers/issues/4288

Evidence note: GitHub Issue #4288 on modelcontextprotocol/servers (opened Jun 7, 2026). Root cause: zod declared in both dependencies and peerDependencies; with pnpm strict isolation the peer dep takes precedence but consumer does not declare zod, causing runtime ESM resolution failure. Not in covered-errors.md. Strong signal for Node.js/npm/pnpm error audience. Approved category: Node.js.

## Related errors

- Node.js

## FAQ

### What should I check first?

Start with the exact `Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'zod' imported from ...` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed pnpm / Node.js workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'zod' imported from ...`.
