import type { CollectionEntry } from 'astro:content';
import { parsePageTimestamp, sortByUpdatedTimestamp } from './dates';
import { deriveEvidenceSchema } from './evidence';

type ErrorEntry = CollectionEntry<'errors'>;
export const DEFAULT_PAGE_SIZE = 20;
export const ARCHIVE_PAGE_SIZE = 40;

export type RevenueHubProfile = {
  h1: string;
  intro: string;
  commonErrorTypes: string[];
  troubleshootingClusters: string[];
  relatedCategories: string[];
  relatedTechnologies: string[];
};

const categoryDescriptions: Record<string, string> = {
  'AI Coding Tools':
    'AI coding tool troubleshooting pages for editor agents, coding assistants, CLI coding tools, login issues, model routing, quotas, and tool-specific runtime failures.',
  'Anthropic API':
    'Anthropic API troubleshooting pages for Claude API authentication, overload, rate limits, request configuration, and provider-specific API errors.',
  Cloudflare:
    'Cloudflare troubleshooting pages for origin connectivity, SSL modes, DNS setup, and proxied domain errors.',
  'Cloud Platforms':
    'Cloud platform troubleshooting pages for hosted application errors, platform configuration, cloud build environments, routing, domains, and deployment infrastructure.',
  Cursor:
    'Cursor troubleshooting pages for authentication, provider configuration, model access, API keys, editor settings, and AI coding workflows.',
  Deployment:
    'Deployment troubleshooting pages for build failures, output directories, runtime configuration, environment variables, and hosted release workflows.',
  DNS:
    'DNS troubleshooting pages for domain resolution, nameserver setup, propagation, browser lookup errors, and network configuration issues.',
  Docker:
    'Docker troubleshooting pages for Docker and Docker Compose errors, including daemon access, containers, storage pressure, permissions, ports, and local development failures.',
  Git:
    'Git troubleshooting pages for repository state, remotes, SSH access, merge history, and version control workflow errors.',
  'GitHub Actions':
    'GitHub Actions troubleshooting pages for CI builds, workflow configuration, Node versions, lockfiles, secrets, deployment automation, and hosted build failures.',
  'GitHub Copilot':
    'GitHub Copilot troubleshooting pages for quota, authentication, editor integration, chat errors, and usage-limit issues in developer workflows.',
  LiteLLM:
    'LiteLLM troubleshooting pages for model routing, provider configuration, proxy errors, request validation, and OpenAI-compatible API failures.',
  'Node.js':
    'Node.js troubleshooting pages for runtime errors, module resolution, package loading, environment mismatches, and JavaScript project setup.',
  npm:
    'npm troubleshooting pages for package installation, dependency resolution, package managers, registry authentication, lockfiles, and Node.js project setup.',
  Ollama:
    'Ollama troubleshooting pages for local model pulls, local inference server connectivity, model manifests, ports, and developer machine setup.',
  'OpenAI API':
    'OpenAI API troubleshooting pages for API errors, authentication, rate limits, quota, model access, context length, and request configuration.',
  Python:
    'Python troubleshooting pages for packages, virtual environments, pip, SSL certificates, and interpreter-specific runtime issues.',
  'SSL/TLS':
    'SSL and TLS troubleshooting pages for certificate chains, expired certificates, local trust stores, HTTPS validation errors, and certificate verification failures.',
};

const revenueHubProfiles: Record<string, RevenueHubProfile> = {
  'AI Coding Tools': {
    h1: 'Claude Code and AI Coding Tool Errors and Fixes',
    intro:
      'Fix Claude Code, OpenCode, OpenClaw, and AI coding assistant failures around login, model routing, tool calls, file edits, permissions, quotas, and stalled agent sessions.',
    commonErrorTypes: [
      'Claude Code process exited',
      'permission denied',
      'file has not been read yet',
      'context limit reached',
      'tool call timeout',
      'model routing failed',
    ],
    troubleshootingClusters: [
      'Authentication and organization access errors',
      'Permission and file edit errors',
      'Tool call and MCP failures',
      'Quota and usage limit errors',
      'Model routing and provider errors',
      'Session hangs and stream failures',
    ],
    relatedCategories: ['Anthropic API', 'Cursor', 'GitHub Copilot', 'OpenAI API', 'LiteLLM'],
    relatedTechnologies: ['Claude Code', 'OpenCode', 'OpenClaw', 'MCP servers', 'Bedrock'],
  },
  'Anthropic API': {
    h1: 'Anthropic API Errors and Fixes',
    intro:
      'Troubleshoot Claude API request failures, SDK exceptions, rate limits, overload responses, Bedrock routing problems, tool-use errors, and prompt caching issues.',
    commonErrorTypes: [
      '400 invalid request',
      '401 unauthorized',
      '404 not found',
      '429 rate limit',
      '500 internal server error',
      '529 overloaded',
    ],
    troubleshootingClusters: [
      'Authentication errors',
      'Rate limit and overload errors',
      'Tool use and message format errors',
      'Bedrock and Vertex routing errors',
      'SDK streaming errors',
      'Prompt caching and billing checks',
    ],
    relatedCategories: ['AI Coding Tools', 'OpenAI API', 'LiteLLM', 'Cloud Platforms'],
    relatedTechnologies: ['Claude API', 'Claude Code', 'AWS Bedrock', 'Vertex AI', 'LiteLLM'],
  },
  Cloudflare: {
    h1: 'Cloudflare Errors and Fixes',
    intro:
      'Fix Cloudflare DNS, SSL, WAF, Workers, Pages, and origin connectivity errors that block deployments or make proxied applications fail.',
    commonErrorTypes: ['520', '522 timeout', '525 SSL handshake failed', '403 forbidden', 'DNS error', 'Workers deploy failed'],
    troubleshootingClusters: [
      'Origin connection errors',
      'SSL and certificate errors',
      'DNS and proxy configuration errors',
      'WAF and access denials',
      'Workers and Pages deployment errors',
      'API and plan-limit errors',
    ],
    relatedCategories: ['DNS', 'SSL/TLS', 'Deployment', 'Cloud Platforms'],
    relatedTechnologies: ['Cloudflare Workers', 'Cloudflare Pages', 'DNS', 'TLS', 'WAF'],
  },
  'Cloud Platforms': {
    h1: 'Cloud Platform Errors and Fixes',
    intro:
      'Troubleshoot cloud build, runtime, routing, IAM, container, and managed platform errors across compatible cloud infrastructure topics.',
    commonErrorTypes: ['permission denied', 'build failed', 'service unavailable', 'not found', 'timeout', 'configuration error'],
    troubleshootingClusters: [
      'IAM and permission errors',
      'Cloud build failures',
      'Runtime and container errors',
      'Network and DNS errors',
      'Managed service routing errors',
      'Environment configuration errors',
    ],
    relatedCategories: ['Deployment', 'Cloudflare', 'Docker', 'GitHub Actions', 'DNS'],
    relatedTechnologies: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Vercel'],
  },
  Cursor: {
    h1: 'Cursor Errors and Fixes',
    intro:
      'Fix Cursor editor, chat, model access, authentication, provider configuration, and AI coding workflow errors without relying on client-side search.',
    commonErrorTypes: ['authentication failed', 'model not available', 'usage limit reached', 'invalid request', 'stream connection failed', 'server info missing'],
    troubleshootingClusters: [
      'Authentication errors',
      'Model access and routing errors',
      'Usage limit and billing errors',
      'Editor integration errors',
      'MCP and provider connection errors',
      'Request validation errors',
    ],
    relatedCategories: ['AI Coding Tools', 'GitHub Copilot', 'OpenAI API', 'LiteLLM'],
    relatedTechnologies: ['Cursor', 'Claude Code', 'OpenAI-compatible APIs', 'MCP servers'],
  },
  Deployment: {
    h1: 'Deployment Errors and Fixes',
    intro:
      'Fix deployment failures in Vercel, Netlify, hosted build pipelines, environment variables, output directories, serverless functions, and release workflows.',
    commonErrorTypes: ['build failed', 'permission denied', 'module not found', 'function timeout', 'environment variable invalid', 'network connection error'],
    troubleshootingClusters: [
      'Build and install failures',
      'Environment variable errors',
      'Serverless runtime errors',
      'Permission and executable errors',
      'DNS and SSL rollout errors',
      'CI/CD deployment failures',
    ],
    relatedCategories: ['GitHub Actions', 'Cloud Platforms', 'Cloudflare', 'npm', 'Node.js'],
    relatedTechnologies: ['Vercel', 'Netlify', 'GitHub Pages', 'Node.js', 'Cloudflare Pages'],
  },
  Docker: {
    h1: 'Docker Errors and Fixes',
    intro:
      'Fix Docker daemon, Docker Compose, image pull, container runtime, storage, networking, and build errors in local development and CI environments.',
    commonErrorTypes: ['cannot connect to daemon', 'pull rate limit', 'build failed', 'permission denied', 'port already allocated', 'container exited'],
    troubleshootingClusters: [
      'Docker daemon and runtime errors',
      'Image pull and registry errors',
      'Build and Dockerfile failures',
      'Compose networking errors',
      'Volume and storage errors',
      'CI container failures',
    ],
    relatedCategories: ['Deployment', 'GitHub Actions', 'Cloud Platforms', 'Node.js'],
    relatedTechnologies: ['Docker Compose', 'Docker Desktop', 'containers', 'Kubernetes'],
  },
  'GitHub Actions': {
    h1: 'GitHub Actions Errors and Fixes',
    intro:
      'Troubleshoot GitHub Actions workflow failures, runner problems, queued jobs, secrets, permissions, dependency installs, and deployment automation errors.',
    commonErrorTypes: ['workflow failed', 'waiting for a runner', 'permission denied', 'secret not found', 'dependency install failed', 'job queued'],
    troubleshootingClusters: [
      'Runner and queue failures',
      'CI/CD build errors',
      'Secret and permission errors',
      'Dependency install failures',
      'Matrix and cancellation issues',
      'Deployment workflow errors',
    ],
    relatedCategories: ['Deployment', 'Docker', 'Git', 'npm', 'Cloud Platforms'],
    relatedTechnologies: ['GitHub Actions', 'self-hosted runners', 'Docker', 'Node.js', 'Vercel'],
  },
  'GitHub Copilot': {
    h1: 'GitHub Copilot Errors and Fixes',
    intro:
      'Fix GitHub Copilot authentication, quota, chat, editor integration, certificate, and agent editing failures in developer workflows.',
    commonErrorTypes: ['quota exceeded', 'authentication failed', 'chat unavailable', 'certificate expired', 'operation aborted', 'agent edit failed'],
    troubleshootingClusters: [
      'Authentication and account errors',
      'Quota and usage limit errors',
      'Editor integration failures',
      'Network and certificate errors',
      'Chat and agent editing errors',
      'Model access errors',
    ],
    relatedCategories: ['AI Coding Tools', 'Cursor', 'GitHub Actions', 'OpenAI API'],
    relatedTechnologies: ['GitHub Copilot', 'VS Code', 'JetBrains', 'Copilot Chat'],
  },
  LiteLLM: {
    h1: 'LiteLLM Errors and Fixes',
    intro:
      'Fix LiteLLM proxy, gateway, virtual key, provider routing, budget, schema validation, and OpenAI-compatible API errors.',
    commonErrorTypes: ['401 authentication error', '429 budget exceeded', '400 bad request', 'model not found', 'provider rejection', 'validation error'],
    troubleshootingClusters: [
      'Virtual key and authentication errors',
      'Budget and rate limit errors',
      'Provider routing errors',
      'Schema and request validation errors',
      'Proxy deployment errors',
      'Model discovery errors',
    ],
    relatedCategories: ['OpenAI API', 'Anthropic API', 'AI Coding Tools', 'Cloud Platforms'],
    relatedTechnologies: ['LiteLLM Proxy', 'OpenRouter', 'Anthropic API', 'OpenAI-compatible APIs', 'Bedrock'],
  },
  Ollama: {
    h1: 'Ollama Errors and Fixes',
    intro:
      'Troubleshoot Ollama local server, model load, cloud API, timeout, runner crash, memory, GPU, and connection errors for local and hosted inference.',
    commonErrorTypes: ['connection refused', '500 internal server error', '503 service unavailable', 'model failed to load', 'runner process terminated', 'read timeout'],
    troubleshootingClusters: [
      'Local server connection errors',
      'Model load and manifest errors',
      'Memory and GPU runtime errors',
      'Cloud API availability errors',
      'Streaming timeout errors',
      'Tool call parsing errors',
    ],
    relatedCategories: ['AI Coding Tools', 'LiteLLM', 'OpenAI API', 'Docker'],
    relatedTechnologies: ['Ollama Cloud', 'local inference', 'GGUF models', 'GPU runners'],
  },
  'OpenAI API': {
    h1: 'OpenAI API Errors and Fixes',
    intro:
      'Fix OpenAI API authentication, quota, rate limit, model access, context length, timeout, SDK, and OpenAI-compatible provider errors.',
    commonErrorTypes: ['401 Unauthorized', '429 Too Many Requests', 'insufficient_quota', 'model not found', 'timeout', 'invalid request'],
    troubleshootingClusters: [
      'Authentication errors',
      'Rate limit and quota errors',
      'Model access and routing errors',
      'Context length errors',
      'Timeout and connection errors',
      'SDK request validation errors',
    ],
    relatedCategories: ['Anthropic API', 'LiteLLM', 'AI Coding Tools', 'Cursor', 'Ollama'],
    relatedTechnologies: ['OpenAI API', 'OpenRouter', 'Responses API', 'OpenAI Python SDK', 'LiteLLM'],
  },
};

export const revenueHubLabels = Object.keys(revenueHubProfiles);

export const homepageRevenueHubLinks = [
  { label: 'OpenAI API Errors', category: 'OpenAI API' },
  { label: 'Anthropic API Errors', category: 'Anthropic API' },
  { label: 'Claude Code Errors', category: 'AI Coding Tools' },
  { label: 'Docker Errors', category: 'Docker' },
  { label: 'GitHub Actions Errors', category: 'GitHub Actions' },
  { label: 'Cloudflare Errors', category: 'Cloudflare' },
  { label: 'LiteLLM Errors', category: 'LiteLLM' },
  { label: 'Ollama Errors', category: 'Ollama' },
  { label: 'Cursor Errors', category: 'Cursor' },
  { label: 'GitHub Copilot Errors', category: 'GitHub Copilot' },
  { label: 'Deployment Errors', category: 'Deployment' },
];

const categoryMergeMap: Record<string, string> = {
  'AI coding tools': 'AI Coding Tools',
  'AI Coding Tools': 'AI Coding Tools',
  'Anthropic API': 'Anthropic API',
  APIs: 'OpenAI API',
  'CI/CD': 'GitHub Actions',
  'Claude Code': 'AI Coding Tools',
  'Cloud Platforms': 'Cloud Platforms',
  Containers: 'Docker',
  Cursor: 'Cursor',
  Deployment: 'Deployment',
  'Docker Compose': 'Docker',
  'GitHub Copilot': 'GitHub Copilot',
  LiteLLM: 'LiteLLM',
  Networking: 'DNS',
  Ollama: 'Ollama',
  OpenCode: 'AI Coding Tools',
  OpenClaw: 'AI Coding Tools',
  'Package managers': 'npm',
  Runtime: 'Node.js',
  'Version control': 'Git',
  Vercel: 'Deployment',
};

export function entrySlug(entry: ErrorEntry) {
  return entry.id.replace(/\.mdx?$/, '');
}

export function errorPath(entry: ErrorEntry) {
  return `/errors/${entrySlug(entry)}/`;
}

export function categoryLabelFor(entry: ErrorEntry) {
  return normalizeCategoryLabel(entry.data.category, entry.data.technology);
}

export function normalizeCategoryLabel(category: string, technology = '') {
  if (technology === 'SSL/TLS' || category === 'SSL/TLS') {
    return 'SSL/TLS';
  }

  if (technology === 'Cloudflare') {
    return 'Cloudflare';
  }

  const technologyTarget = categoryMergeMap[technology] ?? technology;

  if (categoryDescriptions[technologyTarget]) {
    return technologyTarget;
  }

  return categoryMergeMap[category] ?? category;
}

export function categorySlugFor(label: string) {
  return label
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function categoryPathFor(label: string) {
  return `/categories/${categorySlugFor(label)}/`;
}

export function categoryDescriptionFor(label: string) {
  return (
    categoryDescriptions[label] ??
    `Troubleshooting pages for ${label} errors, including common causes, quick fixes, practical debugging steps, and related developer errors.`
  );
}

export function revenueHubProfileFor(label: string) {
  return revenueHubProfiles[label];
}

export function getExistingRevenueHubLinks(groups: { label: string; slug: string; entries: ErrorEntry[] }[]) {
  const byLabel = new Map(groups.map((group) => [group.label, group]));

  return homepageRevenueHubLinks
    .map((hub) => {
      const group = byLabel.get(hub.category);
      if (!group) return null;
      return {
        label: hub.label,
        category: hub.category,
        path: categoryPathFor(group.label),
        count: group.entries.length,
        description: revenueHubProfileFor(group.label)?.intro ?? categoryDescriptionFor(group.label),
      };
    })
    .filter((hub): hub is { label: string; category: string; path: string; count: number; description: string } => Boolean(hub));
}

export function getCategoryGroups(entries: ErrorEntry[]) {
  const groups = new Map<
    string,
    {
      label: string;
      slug: string;
      description: string;
      entries: ErrorEntry[];
    }
  >();

  for (const entry of entries) {
    const label = categoryLabelFor(entry);
    const slug = categorySlugFor(label);

    if (!groups.has(slug)) {
      groups.set(slug, {
        label,
        slug,
        description: categoryDescriptionFor(label),
        entries: [],
      });
    }

    groups.get(slug)?.entries.push(entry);
  }

  return [...groups.values()]
    .map((group) => ({
      ...group,
      entries: group.entries.sort((a, b) => a.data.title.localeCompare(b.data.title)),
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export function sortEntriesByUpdated(entries: ErrorEntry[]) {
  return sortByUpdatedTimestamp(entries);
}

export function lightweightIntentScore(entry: ErrorEntry, now = new Date()) {
  const recencyDays = Math.max(
    0,
    Math.floor((now.getTime() - (parsePageTimestamp(entry)?.getTime() ?? 0)) / 86_400_000)
  );
  const recencyScore = Math.max(0, 40 - Math.min(40, recencyDays));
  const highIntentSignal = `${entry.data.title} ${entry.data.error_signature} ${entry.data.description}`.toLowerCase();
  const keywordBoost = [
    'failed',
    'error',
    'denied',
    'unauthorized',
    'quota',
    'rate limit',
    'cannot',
    'not found',
    'timeout',
    'expired',
  ].reduce((sum, keyword) => sum + (highIntentSignal.includes(keyword) ? 4 : 0), 0);
  const categoryBoost = ['OpenAI API', 'GitHub Actions', 'Deployment', 'Docker', 'npm'].includes(
    normalizeCategoryLabel(entry.data.category, entry.data.technology)
  )
    ? 8
    : 0;

  return recencyScore + keywordBoost + categoryBoost;
}

export function getTrendingEntries(entries: ErrorEntry[], limit = 12) {
  return [...entries]
    .sort((a, b) => {
      const diff = lightweightIntentScore(b) - lightweightIntentScore(a);
      if (diff) return diff;
      return sortByUpdatedTimestamp([a, b])[0] === b ? 1 : -1;
    })
    .slice(0, limit);
}

export function getEntriesBySearchSignals(entries: ErrorEntry[], signals: string[], limit = 12) {
  const normalizedSignals = signals.map((signal) => signal.toLowerCase());

  return [...entries]
    .map((entry) => {
      const haystack = `${entry.data.title} ${entry.data.description} ${entry.data.error_signature} ${entry.data.technology} ${entry.data.category}`
        .toLowerCase();
      const score = normalizedSignals.reduce((sum, signal) => sum + (haystack.includes(signal) ? 10 : 0), 0);
      return { entry, score: score + lightweightIntentScore(entry) };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.data.title.localeCompare(b.entry.data.title))
    .slice(0, limit)
    .map((item) => item.entry);
}

export function getEntriesByCategories(entries: ErrorEntry[], labels: string[], limit = 12) {
  const targets = new Set(labels);

  return getTrendingEntries(
    entries.filter((entry) => targets.has(categoryLabelFor(entry)) || targets.has(entry.data.technology)),
    limit
  );
}

export function paginateEntries(entries: ErrorEntry[], page: number, pageSize = DEFAULT_PAGE_SIZE) {
  const safePage = Math.max(1, page);
  const totalItems = entries.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const boundedPage = Math.min(safePage, totalPages);
  const start = (boundedPage - 1) * pageSize;
  const pageItems = entries.slice(start, start + pageSize);

  return {
    page: boundedPage,
    pageSize,
    totalItems,
    totalPages,
    hasPrev: boundedPage > 1,
    hasNext: boundedPage < totalPages,
    pageItems,
  };
}

export function getRelatedCategoryGroups(
  current: { slug: string; label: string; entries: ErrorEntry[] },
  allGroups: { slug: string; label: string; entries: ErrorEntry[] }[],
  limit = 4
) {
  const currentTech = new Set(current.entries.map((entry) => entry.data.technology));

  return allGroups
    .filter((group) => group.slug !== current.slug)
    .map((group) => {
      const overlap = group.entries.filter((entry) => currentTech.has(entry.data.technology)).length;
      return {
        group,
        score: overlap * 4 + Math.min(group.entries.length, 20),
      };
    })
    .sort((a, b) => b.score - a.score || a.group.label.localeCompare(b.group.label))
    .slice(0, limit)
    .map((item) => item.group);
}

export function findRelatedEntries(
  entry: ErrorEntry,
  allEntries: ErrorEntry[],
  limit = 12,
  staticSlugs?: Set<string>
) {
  const currentSlug = entrySlug(entry);
  const explicitRelated = entry.data.related_errors ?? [];
  const matches: ErrorEntry[] = [];
  const usedSlugs = new Set([currentSlug]);

  const canLink = (candidate: ErrorEntry) => {
    const slug = entrySlug(candidate);
    if (staticSlugs && !staticSlugs.has(slug)) {
      return false;
    }
    return true;
  };

  for (const related of explicitRelated) {
    if (isGenericRelatedLabel(related)) {
      continue;
    }

    const match = findEntryByRelatedLabel(related, allEntries, usedSlugs);

    if (match && canLink(match)) {
      matches.push(match);
      usedSlugs.add(entrySlug(match));
    }

    if (matches.length >= limit) {
      return matches;
    }
  }

  const scoredCandidates = allEntries
    .filter((candidate) => !usedSlugs.has(entrySlug(candidate)))
    .map((candidate) => ({
      candidate,
      score: relatedScore(entry, candidate),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.candidate.data.title.localeCompare(b.candidate.data.title));

  for (const item of scoredCandidates) {
    if (matches.length >= limit) {
      break;
    }

    const candidateSlug = entrySlug(item.candidate);

    if (usedSlugs.has(candidateSlug) || !canLink(item.candidate)) {
      continue;
    }

    matches.push(item.candidate);
    usedSlugs.add(candidateSlug);
  }

  return matches;
}

function findEntryByRelatedLabel(related: string, entries: ErrorEntry[], usedSlugs: Set<string>) {
  const normalizedRelated = normalizeLookup(related);

  return entries.find((entry) => {
    if (usedSlugs.has(entrySlug(entry))) {
      return false;
    }

    const lookupValues = [
      entrySlug(entry),
      entry.data.title,
      entry.data.error_signature,
      ...entry.data.related_errors,
    ].map(normalizeLookup);

    return (
      lookupValues.includes(normalizedRelated) ||
      lookupValues.some((value) => value.includes(normalizedRelated) || normalizedRelated.includes(value))
    );
  });
}

function normalizeLookup(value: string) {
  return value
    .toLowerCase()
    .replace(/[`'"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function relatedScore(entry: ErrorEntry, candidate: ErrorEntry) {
  let score = 0;

  const sameCategory = categoryLabelFor(candidate) === categoryLabelFor(entry);
  const sameRawCategory = candidate.data.category === entry.data.category;
  const sameTechnology = candidate.data.technology === entry.data.technology;
  const candidateEvidence = deriveEvidenceSchema(candidate);
  const sourceText = searchableText(entry);
  const candidateText = searchableText(candidate);

  if (sameCategory) {
    score += 60;
  }

  if (sameRawCategory) {
    score += 20;
  }

  if (sameTechnology) {
    score += 35;
  }

  for (const family of issueFamilies) {
    if (family.match(sourceText) && family.match(candidateText)) {
      score += family.weight;
    }
  }

  const sourceTokens = buildSignatureTokens(entry);
  const candidateTokens = buildSignatureTokens(candidate);
  const overlap = [...sourceTokens].filter((token) => candidateTokens.has(token)).length;

  score += Math.min(overlap * 8, 32);

  if (candidateEvidence.source_backed) {
    score += 12;
  } else if (candidateEvidence.evidence_status === 'partial_source') {
    score += 6;
  }

  const candidateUpdated = parsePageTimestamp(candidate)?.getTime() ?? 0;
  if (candidateUpdated > Date.now() - 45 * 86_400_000) {
    score += 4;
  }

  return score;
}

function isGenericRelatedLabel(value: string) {
  const normalized = normalizeLookup(value);
  const genericLabels = new Set([
    'api-error',
    'authentication-error',
    'build-error',
    'ci-error',
    'cloud-error',
    'configuration-error',
    'connection-error',
    'deployment-error',
    'docker-error',
    'github-actions-error',
    'model-error',
    'permission-error',
    'quota-error',
    'rate-limit-error',
    'timeout-error',
  ]);

  return genericLabels.has(normalized) || /^[a-z0-9]+-errors?$/.test(normalized);
}

export function buildRelatedClusters(entry: ErrorEntry, allEntries: ErrorEntry[], staticSlugs?: Set<string>) {
  const currentSlug = entrySlug(entry);
  const candidates = allEntries.filter((candidate) => {
    const slug = entrySlug(candidate);
    if (slug === currentSlug) return false;
    if (staticSlugs && !staticSlugs.has(slug)) return false;
    return true;
  });
  const sourceText = searchableText(entry);
  const clusters = [
    {
      heading: `More ${entry.data.technology} failures`,
      entries: candidates.filter((candidate) => candidate.data.technology === entry.data.technology),
    },
    {
      heading: `More ${categoryLabelFor(entry)} troubleshooting`,
      entries: candidates.filter((candidate) => categoryLabelFor(candidate) === categoryLabelFor(entry)),
    },
    ...issueFamilies
      .filter((family) => family.match(sourceText))
      .map((family) => ({
        heading: family.heading(entry),
        entries: candidates.filter((candidate) => family.match(searchableText(candidate))),
      })),
  ];

  const used = new Set<string>();

  return clusters
    .map((cluster) => ({
      heading: cluster.heading,
      entries: [...cluster.entries]
        .map((candidate) => ({ candidate, score: relatedScore(entry, candidate) }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score || a.candidate.data.title.localeCompare(b.candidate.data.title))
        .map((item) => item.candidate)
        .filter((candidate) => {
          const slug = entrySlug(candidate);
          if (used.has(slug)) return false;
          used.add(slug);
          return true;
        })
        .slice(0, 4),
    }))
    .filter((cluster) => cluster.entries.length > 0)
    .slice(0, 3);
}

export function referenceLinksFor(entry: ErrorEntry) {
  const label = categoryLabelFor(entry);
  const technology = entry.data.technology;
  const links = new Map<string, string>();

  const add = (name: string, url: string) => links.set(name, url);

  if (label === 'Docker' || /docker/i.test(technology)) {
    add('Docker troubleshooting documentation', 'https://docs.docker.com/engine/daemon/troubleshoot/');
  }
  if (label === 'OpenAI API' || /openai/i.test(technology)) {
    add('OpenAI API error codes', 'https://platform.openai.com/docs/guides/error-codes');
  }
  if (label === 'Anthropic API' || /anthropic/i.test(technology)) {
    add('Anthropic API errors', 'https://docs.anthropic.com/en/api/errors');
  }
  if (label === 'GitHub Actions' || /github actions/i.test(technology)) {
    add('GitHub Actions workflow troubleshooting', 'https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows');
  }
  if (label === 'npm' || /npm/i.test(technology)) {
    add('npm CLI troubleshooting', 'https://docs.npmjs.com/common-errors');
  }
  if (label === 'Python' || /python|pip/i.test(technology)) {
    add('pip user guide', 'https://pip.pypa.io/en/stable/user_guide/');
  }
  if (label === 'Cloudflare' || /cloudflare/i.test(technology)) {
    add('Cloudflare support documentation', 'https://developers.cloudflare.com/support/');
  }
  if (label === 'Deployment' || /vercel/i.test(technology)) {
    add('Vercel build troubleshooting', 'https://vercel.com/docs/deployments/troubleshoot-a-build');
  }
  if (label === 'Git' || /\bgit\b/i.test(technology)) {
    add('Git documentation', 'https://git-scm.com/docs');
  }

  add('Dev Error DB category hub', categoryPathFor(label));

  return [...links.entries()].map(([label, url]) => ({ label, url }));
}

function searchableText(entry: ErrorEntry) {
  return `${entry.data.title} ${entry.data.description} ${entry.data.error_signature} ${entry.data.category} ${entry.data.technology} ${entry.data.common_causes.join(' ')}`
    .toLowerCase();
}

const issueFamilies = [
  {
    heading: () => 'Similar authentication errors',
    weight: 42,
    match: (text: string) => /auth|unauthorized|401|api key|token|login|credential/.test(text),
  },
  {
    heading: () => 'Related deployment failures',
    weight: 40,
    match: (text: string) => /deploy|build failed|vercel|github actions|ci|workflow|release/.test(text),
  },
  {
    heading: () => 'More Docker daemon issues',
    weight: 38,
    match: (text: string) => /docker|daemon|compose|container|port|volume/.test(text),
  },
  {
    heading: () => 'More OpenAI API failures',
    weight: 38,
    match: (text: string) => /openai|model not found|rate limit|quota|context length|api error/.test(text),
  },
  {
    heading: () => 'Similar timeout and connection errors',
    weight: 34,
    match: (text: string) => /timeout|connection|econnreset|connection refused|network|522|503|525/.test(text),
  },
  {
    heading: () => 'Related permission denied fixes',
    weight: 34,
    match: (text: string) => /permission denied|403|publickey|access denied|forbidden/.test(text),
  },
  {
    heading: () => 'Similar quota and rate limit errors',
    weight: 34,
    match: (text: string) => /rate limit|quota|429|budget|usage limit|too many requests/.test(text),
  },
  {
    heading: () => 'Related model routing errors',
    weight: 30,
    match: (text: string) => /model|provider|litellm|ollama|openrouter|anthropic|claude/.test(text),
  },
];

function buildSignatureTokens(entry: ErrorEntry) {
  return new Set(
    `${entry.data.error_signature} ${entry.data.title}`
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((token) => token.length >= 3)
  );
}
