# AtlasForge Discovery Rules

These rules decide whether a discovered topic qualifies as a future Dev Error DB error page candidate.

## Valid Error Page Requirements

A candidate qualifies only when it has:

- A recognizable error signature, exception name, CLI output fragment, status code, or repeatable failure message.
- A specific technology or platform.
- Clear search intent from a developer trying to diagnose or fix the failure.
- At least two plausible root causes that can be explained safely.
- At least one practical diagnostic step or command.
- A category that fits the approved Dev Error DB taxonomy.
- Enough distinction from existing pages to justify a separate URL.

Reject broad concepts such as "Docker problem", "Python issue", or "API not working" unless they include a specific error signature or narrowly repeatable failure pattern.

## Search Intent Requirements

Valid candidates should match one of these intents:

- Diagnose an exact error message.
- Fix an installation, build, authentication, deployment, or runtime failure.
- Compare a local failure with a CI/CD or production failure.
- Resolve a configuration, permission, network, SSL, DNS, or dependency error.
- Confirm the safe first checks for a known developer workflow failure.

Reject candidates whose intent is mostly:

- general education
- tool comparison
- news
- pricing
- speculation
- broad tutorials without an error signature
- keyword variants of an existing page

## SEO Quality Thresholds

A candidate must score high enough to justify human review. The scoring model should favor:

- exact error signature
- high developer specificity
- practical fixability
- source evidence quality
- category cluster fit
- uniqueness from existing pages
- internal linking opportunities

Candidates below the threshold should be rejected or held for research, not converted into thin pages.

## Minimum Uniqueness Rules

A candidate must differ from existing pages by at least one meaningful dimension:

- different error signature
- different tool or platform behavior
- different failure mode
- different environment such as local, CI/CD, container, DNS, or SSL
- different remediation path

Do not create separate pages for spelling variants, casing variants, punctuation variants, or provider-specific wrappers around the same root failure unless the troubleshooting path is genuinely different.

## Anti-Spam Rules

Never approve candidates designed only to capture search variations. Reject:

- doorway pages
- spun titles
- empty "how to fix" wrappers
- pages built from one-line source observations
- auto-expanded pages with no technical distinction
- pages claiming guaranteed fixes
- pages built around unsupported provider policies
- pages that repeat another page with technology names swapped

## Thin Content Prevention

Before approving a candidate, confirm that a useful page can include several of:

- plain-language meaning
- why it happens
- common causes
- quick fixes
- step-by-step troubleshooting
- copy-paste diagnostic commands
- platform-specific guidance
- prevention notes
- related errors
- FAQ answers specific to the failure

If the likely page would contain only a definition and generic advice, reject it.

## Duplicate Prevention

Discovery must compare candidates against:

- existing Markdown error pages
- existing seed data
- previously proposed candidate reports
- normalized title, slug, error signature, and technology combinations

Duplicate-risk candidates should be marked as `duplicate-risk` or `covered-by-existing-page` with a reference to the matching slug.

## Unsafe Keyword Filtering

Reject or hold candidates containing:

- exposed API keys, tokens, passwords, private keys, SSH keys, or session cookies
- instructions to bypass access controls
- malware, phishing, credential theft, or exploit intent
- account-specific billing disputes or private support details
- secrets embedded in stack traces
- destructive command suggestions without safe context

Security-related developer errors may be covered only when framed as defensive troubleshooting and reviewed by a human.

## Low-Value Page Rejection Rules

Reject candidates when:

- the problem is too broad to answer on one page
- the topic is only a phrase variant of an existing page
- no actionable fix path is available
- the technology is unsupported by the site taxonomy
- evidence is too weak or source-specific
- the page would require current provider claims that have not been verified
- the content would depend on private logs or proprietary context

## Candidate Status Values

Use these statuses in reports:

- `accepted-for-review`: strong candidate, ready for human seed review
- `needs-research`: promising but missing technical evidence
- `duplicate-risk`: likely covered by an existing page or seed
- `rejected-low-value`: too broad, thin, or generic
- `rejected-unsafe`: contains unsafe, private, or disallowed material

