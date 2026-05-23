import type { CollectionEntry } from 'astro:content';
import type { EvidenceSchema } from './evidence';
import { evidenceStatusLabel } from './evidence';

type ErrorEntry = CollectionEntry<'errors'>;

export type FaqItem = {
  question: string;
  answer: string;
};

export function buildDataAwareFaqItems(entry: ErrorEntry, evidence: EvidenceSchema): FaqItem[] {
  const title = cleanInline(entry.data.title);
  const technology = cleanInline(entry.data.technology);
  const category = cleanInline(entry.data.category);
  const signature = cleanInline(entry.data.error_signature);
  const quickFix = cleanInline(entry.data.quick_fix);
  const primaryCause = cleanInline(entry.data.common_causes[0] ?? '');
  const statusLabel = evidenceStatusLabel(evidence.evidence_status).toLowerCase();
  const sourceSummary =
    evidence.source_count > 0
      ? `${evidence.source_count} public source ${evidence.source_count === 1 ? 'URL' : 'URLs'} from ${evidence.source_domains.slice(0, 3).join(', ')}`
      : 'no public source URLs in the current Markdown record';

  const items: FaqItem[] = [
    {
      question: `What does ${signature} mean in ${technology}?`,
      answer: `${signature} indicates the workflow described by "${title}" failed in a ${category} context. Start by confirming the exact signature and the component that emitted it.`,
    },
    {
      question: `What should I check first for ${signature}?`,
      answer: primaryCause
        ? `Check whether this cause matches your environment: ${primaryCause}`
        : `Check the exact command, request, account scope, runtime version, and configuration used when ${signature} appears.`,
    },
    {
      question: `Is the ${signature} guidance source-backed?`,
      answer: `The "${title}" page is labeled ${statusLabel}. It has ${sourceSummary}, so use that evidence status when deciding how much additional verification you need.`,
    },
    {
      question: `When should I avoid the quick fix for ${signature}?`,
      answer: `For "${title}", avoid applying "${quickFix}" when the error text differs, the affected version or provider is different, or the change would touch credentials, billing, DNS, production deploy settings, or irreversible data.`,
    },
    {
      question: `What should I collect before debugging ${signature}?`,
      answer: `For "${title}", collect the failing ${technology} command or request, non-secret configuration, versions, timestamps, request IDs when available, and the smallest reproduction that still triggers the signature.`,
    },
  ];

  return uniqueFaqItems(items).slice(0, 5);
}

function uniqueFaqItems(items: FaqItem[]) {
  const usedQuestions = new Set<string>();

  return items.filter((item) => {
    const key = item.question.toLowerCase();
    if (usedQuestions.has(key)) return false;
    usedQuestions.add(key);
    return item.question.length > 0 && item.answer.length > 0;
  });
}

function cleanInline(value: string) {
  return value.replace(/`/g, '').replace(/\s+/g, ' ').trim();
}
