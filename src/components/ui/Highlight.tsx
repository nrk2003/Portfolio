import type { HighlightedTitle } from '@/types/project';

/** Renders "text <span.hl>highlight</span>" — the tilted marker used in headlines. */
export function Highlight({ title }: { title: HighlightedTitle }) {
  return (
    <>
      {title.text} <span className="hl">{title.highlight}</span>
    </>
  );
}
