import type { ReactNode } from 'react';

/**
 * Renders an external link when `href` is set, otherwise an inert span with the
 * same class — so unfinished placeholder links never point at `#`.
 */
export function MaybeLink({
  href,
  className,
  label,
  children,
}: {
  href?: string;
  className?: string;
  /** Accessible name when the visible content is an icon or abbreviation. */
  label?: string;
  children: ReactNode;
}) {
  if (!href) {
    return (
      <span className={className} aria-label={label ? `${label} (coming soon)` : undefined} role={label ? 'img' : undefined}>
        {children}
      </span>
    );
  }
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={className}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
