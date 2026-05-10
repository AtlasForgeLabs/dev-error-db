import type { CollectionEntry } from 'astro:content';

type ErrorEntry = CollectionEntry<'errors'>;

const categoryDescriptions: Record<string, string> = {
  Cloudflare:
    'Cloudflare troubleshooting pages for origin connectivity, SSL modes, DNS setup, and proxied domain errors.',
  DNS:
    'DNS troubleshooting pages for domain resolution, nameserver setup, propagation, browser lookup errors, and network configuration issues.',
  Docker:
    'Docker troubleshooting pages for Docker and Docker Compose errors, including daemon access, containers, storage pressure, permissions, ports, and local development failures.',
  Git:
    'Git troubleshooting pages for repository state, remotes, SSH access, merge history, and version control workflow errors.',
  'GitHub Actions':
    'GitHub Actions troubleshooting pages for CI builds, workflow configuration, Node versions, lockfiles, secrets, deployment automation, and hosted build failures.',
  'Node.js':
    'Node.js troubleshooting pages for runtime errors, module resolution, package loading, environment mismatches, and JavaScript project setup.',
  npm:
    'npm troubleshooting pages for package installation, dependency resolution, package managers, registry authentication, lockfiles, and Node.js project setup.',
  'OpenAI API':
    'OpenAI API troubleshooting pages for API errors, authentication, rate limits, quota, model access, Cursor setup, AI coding tools, context length, and request configuration.',
  Python:
    'Python troubleshooting pages for packages, virtual environments, pip, SSL certificates, and interpreter-specific runtime issues.',
  'SSL/TLS':
    'SSL and TLS troubleshooting pages for certificate chains, expired certificates, local trust stores, HTTPS validation errors, and certificate verification failures.',
};

const categoryMergeMap: Record<string, string> = {
  'AI coding tools': 'OpenAI API',
  APIs: 'OpenAI API',
  'CI/CD': 'GitHub Actions',
  Containers: 'Docker',
  Cursor: 'OpenAI API',
  Deployment: 'GitHub Actions',
  'Docker Compose': 'Docker',
  Networking: 'DNS',
  'Package managers': 'npm',
  Runtime: 'Node.js',
  'Version control': 'Git',
  Vercel: 'GitHub Actions',
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

export function findRelatedEntries(entry: ErrorEntry, allEntries: ErrorEntry[], limit = 4) {
  const currentSlug = entrySlug(entry);
  const explicitRelated = entry.data.related_errors ?? [];
  const matches: ErrorEntry[] = [];
  const usedSlugs = new Set([currentSlug]);

  for (const related of explicitRelated) {
    const match = findEntryByRelatedLabel(related, allEntries, usedSlugs);

    if (match) {
      matches.push(match);
      usedSlugs.add(entrySlug(match));
    }

    if (matches.length >= limit) {
      return matches;
    }
  }

  for (const candidate of allEntries) {
    if (matches.length >= limit) {
      break;
    }

    const candidateSlug = entrySlug(candidate);

    if (usedSlugs.has(candidateSlug)) {
      continue;
    }

    if (categoryLabelFor(candidate) === categoryLabelFor(entry) || candidate.data.category === entry.data.category) {
      matches.push(candidate);
      usedSlugs.add(candidateSlug);
    }
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
