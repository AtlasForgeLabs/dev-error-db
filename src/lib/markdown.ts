export function renderTrustedMarkdown(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const html: string[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];
  let orderedList: string[] = [];
  let inFence = false;
  let fenceLines: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${renderInline(paragraph.join(' '))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (list.length) {
      html.push(`<ul>${list.map((item) => `<li>${renderInline(item)}</li>`).join('')}</ul>`);
      list = [];
    }
    if (orderedList.length) {
      html.push(`<ol>${orderedList.map((item) => `<li>${renderInline(item)}</li>`).join('')}</ol>`);
      orderedList = [];
    }
  };

  for (const line of lines) {
    if (/^```/.test(line.trim())) {
      if (inFence) {
        html.push(`<pre><code>${escapeHtml(fenceLines.join('\n'))}</code></pre>`);
        fenceLines = [];
        inFence = false;
      } else {
        flushParagraph();
        flushList();
        inFence = true;
      }
      continue;
    }

    if (inFence) {
      fenceLines.push(line);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      html.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      continue;
    }

    const bullet = line.match(/^\s*-\s+(.+)$/);
    if (bullet) {
      flushParagraph();
      orderedList = [];
      list.push(bullet[1]);
      continue;
    }

    const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
    if (ordered) {
      flushParagraph();
      list = [];
      orderedList.push(ordered[1]);
      continue;
    }

    paragraph.push(line.trim());
  }

  flushParagraph();
  flushList();

  return html.join('\n');
}

function renderInline(value: string) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
