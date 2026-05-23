import type { CollectionEntry } from 'astro:content';
import { getUpdatedTimestamp } from './dates';

type ErrorEntry = CollectionEntry<'errors'>;

export type EvidenceStatus = 'source_backed' | 'partial_source' | 'general_guidance' | 'needs_source';

export type EvidenceSource = {
  source_url: string;
  source_domain: string;
  source_label: string;
  source_type: 'official_docs' | 'public_issue' | 'release_notes' | 'status_page' | 'public_reference';
};

export type EvidenceSchema = {
  evidence_sources: EvidenceSource[];
  evidence_extracted_from_body: boolean;
  sources_checked: boolean;
  source_count: number;
  source_backed: boolean;
  evidence_status: EvidenceStatus;
  last_checked: string | null;
  updated: string | null;
  source_domains: string[];
};

const officialDocDomains = [
  'docs.anthropic.com',
  'docs.docker.com',
  'docs.github.com',
  'docs.npmjs.com',
  'developers.cloudflare.com',
  'git-scm.com',
  'pip.pypa.io',
  'platform.openai.com',
  'vercel.com',
];

export function deriveEvidenceSchema(entry: ErrorEntry): EvidenceSchema {
  const urls = extractSourceUrls(entry.body);
  const evidence_sources = urls.map((url) => buildEvidenceSource(url));
  const sources_checked = /(?:^|\n)##\s+Sources checked\b/i.test(entry.body);
  const source_domains = [...new Set(evidence_sources.map((source) => source.source_domain))];
  const updated = getUpdatedTimestamp(entry);
  const evidence_status = classifyEvidenceStatus(evidence_sources, sources_checked);

  return {
    evidence_sources,
    evidence_extracted_from_body: evidence_sources.length > 0,
    sources_checked,
    source_count: evidence_sources.length,
    source_backed: evidence_status === 'source_backed',
    evidence_status,
    last_checked: sources_checked ? updated : null,
    updated,
    source_domains,
  };
}

export function evidenceStatusLabel(status: EvidenceStatus) {
  const labels: Record<EvidenceStatus, string> = {
    source_backed: 'Source-backed',
    partial_source: 'Partial source',
    general_guidance: 'General troubleshooting guidance',
    needs_source: 'Needs source',
  };

  return labels[status];
}

export function evidenceStatusDescription(schema: EvidenceSchema) {
  if (schema.evidence_status === 'source_backed') {
    return 'This page includes public source URLs in the imported troubleshooting record. Compare those references with your version and environment before applying changes.';
  }

  if (schema.evidence_status === 'partial_source') {
    return 'This page includes public URLs, but the Markdown record does not consistently mark them under Sources checked. Treat the links as supporting context rather than complete verification.';
  }

  if (schema.evidence_status === 'needs_source') {
    return 'This page has a Sources checked section but no public URLs were found. Treat the guidance as incomplete until a durable public source is added.';
  }

  return 'This page does not expose source URLs in the page body. Treat it as general troubleshooting guidance and verify against official documentation before changing systems.';
}

export function stripGeneratedEvidenceAndFaq(markdownBody: string) {
  return markdownBody
    .replace(/\n## Sources checked[\s\S]*?(?=\n## Related errors|\n## FAQ|$)/i, '')
    .replace(/\n## Related errors[\s\S]*?(?=\n## FAQ|$)/i, '')
    .replace(/\n## FAQ[\s\S]*$/i, '')
    .trim();
}

export function extractSourceUrls(markdownBody: string) {
  return [...markdownBody.matchAll(/https?:\/\/[^\s)\]<>"]+/g)]
    .map((match) => match[0].replace(/[.,;:]+$/, ''))
    .filter((url) => isPublicSourceUrl(url))
    .filter((url, index, urls) => urls.indexOf(url) === index);
}

function isPublicSourceUrl(url: string) {
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.toLowerCase();

    if (
      hostname === 'localhost' ||
      hostname === '0.0.0.0' ||
      hostname === '127.0.0.1' ||
      hostname === '[::1]' ||
      hostname.endsWith('.local')
    ) {
      return false;
    }

    if (/^127\./.test(hostname) || /^10\./.test(hostname) || /^192\.168\./.test(hostname)) {
      return false;
    }

    const private172 = hostname.match(/^172\.(\d+)\./);
    if (private172 && Number(private172[1]) >= 16 && Number(private172[1]) <= 31) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

function classifyEvidenceStatus(sources: EvidenceSource[], sourcesChecked: boolean): EvidenceStatus {
  if (sources.length > 0 && sourcesChecked) return 'source_backed';
  if (sources.length > 0) return 'partial_source';
  if (sourcesChecked) return 'needs_source';
  return 'general_guidance';
}

function buildEvidenceSource(source_url: string): EvidenceSource {
  const parsed = new URL(source_url);
  const source_domain = parsed.hostname.replace(/^www\./, '');

  return {
    source_url,
    source_domain,
    source_label: sourceLabelFor(source_domain, parsed.pathname),
    source_type: sourceTypeFor(source_domain, parsed.pathname),
  };
}

function sourceLabelFor(domain: string, pathname: string) {
  if (domain === 'github.com' && pathname.includes('/issues/')) return `GitHub issue on ${repoName(pathname)}`;
  if (domain === 'github.com' && pathname.includes('/pull/')) return `GitHub pull request on ${repoName(pathname)}`;
  if (officialDocDomains.includes(domain)) return `${domain} documentation`;
  if (/status/i.test(domain) || /status/i.test(pathname)) return `${domain} status page`;
  if (/release|changelog/i.test(pathname)) return `${domain} release notes`;
  return `${domain} public reference`;
}

function sourceTypeFor(domain: string, pathname: string): EvidenceSource['source_type'] {
  if (domain === 'github.com' && /\/(issues|pull)\//.test(pathname)) return 'public_issue';
  if (officialDocDomains.includes(domain)) return 'official_docs';
  if (/status/i.test(domain) || /status/i.test(pathname)) return 'status_page';
  if (/release|changelog/i.test(pathname)) return 'release_notes';
  return 'public_reference';
}

function repoName(pathname: string) {
  const [, owner, repo] = pathname.split('/');
  return owner && repo ? `${owner}/${repo}` : 'GitHub';
}
