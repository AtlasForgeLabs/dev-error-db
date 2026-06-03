---
title: "GitHub Token Exfiltration via VSCode Webview Bug (github.dev)"
description: "开发者关注通过 VSCode github.dev 的 webview bug 导致 GitHub OAuth Token 被窃取的安全漏洞，需要了解防护和缓解方法。 Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "One-click GitHub token stealing via VSCode webview sandbox escape — attacker can read/write private repos"
common_causes:
  - "Ammar Askar 博客详细分析了 VSCode github.dev 的 webview 沙箱逃逸漏洞：攻击者仅点击链接即可窃取 GitHub OAuth token（具有读写所有仓库的完全权限）。HN Top Story (score 503)。这影响所有使用 github.dev/GitHub Codespaces 的用户，特别是付费 Copilot 用户。Category 映射：GitHub Copilot。"
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "GitHub Copilot"
updated: "2026-06-03"
published_at: "2026-06-03T13:44:34.937Z"
updated_at: "2026-06-03T13:44:34.937Z"
---

## What this error means

`One-click GitHub token stealing via VSCode webview sandbox escape — attacker can read/write private repos` is a GitHub Copilot failure pattern reported for developers trying to 开发者关注通过 vscode github.dev 的 webview bug 导致 github oauth token 被窃取的安全漏洞，需要了解防护和缓解方法。. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Ammar Askar 博客详细分析了 VSCode github.dev 的 webview 沙箱逃逸漏洞：攻击者仅点击链接即可窃取 GitHub OAuth token（具有读写所有仓库的完全权限）。HN Top Story (score 503)。这影响所有使用 github.dev/GitHub Codespaces 的用户，特别是付费 Copilot 用户。Category 映射：GitHub Copilot。

## Common causes

- Ammar Askar 博客详细分析了 VSCode github.dev 的 webview 沙箱逃逸漏洞：攻击者仅点击链接即可窃取 GitHub OAuth token（具有读写所有仓库的完全权限）。HN Top Story (score 503)。这影响所有使用 github.dev/GitHub Codespaces 的用户，特别是付费 Copilot 用户。Category 映射：GitHub Copilot。

## Quick fixes

1. Confirm the exact error signature matches `One-click GitHub token stealing via VSCode webview sandbox escape — attacker can read/write private repos`.
2. Check the GitHub Copilot account, local tool state, and provider configuration involved in the failing workflow.
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

- https://blog.ammaraskar.com/github-token-stealing/
- https://news.ycombinator.com/item?id=48382382

Evidence note: Ammar Askar 博客详细分析了 VSCode github.dev 的 webview 沙箱逃逸漏洞：攻击者仅点击链接即可窃取 GitHub OAuth token（具有读写所有仓库的完全权限）。HN Top Story (score 503)。这影响所有使用 github.dev/GitHub Codespaces 的用户，特别是付费 Copilot 用户。Category 映射：GitHub Copilot。

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `One-click GitHub token stealing via VSCode webview sandbox escape — attacker can read/write private repos` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `One-click GitHub token stealing via VSCode webview sandbox escape — attacker can read/write private repos`.
