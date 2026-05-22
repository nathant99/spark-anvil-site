import { marked } from 'marked';

marked.setOptions({
  breaks: false,
  gfm: true,
});

export function renderInline(text: string | null | undefined): string {
  if (!text) return '';
  return marked.parseInline(text, { async: false }) as string;
}

export function renderBlock(text: string | null | undefined): string {
  if (!text) return '';
  return marked.parse(text, { async: false }) as string;
}
