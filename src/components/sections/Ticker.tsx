import { ticker } from '@/data/site';

/** Scrolling skills ticker. Items are rendered twice for a seamless loop; the copy is hidden from assistive tech. */
export function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        {ticker.map((t) => (
          <span key={t}>{t}</span>
        ))}
        {ticker.map((t) => (
          <span key={`dup-${t}`} aria-hidden="true">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
