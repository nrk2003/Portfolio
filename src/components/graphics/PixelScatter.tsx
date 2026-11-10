import { PALETTE, mulberry32 } from '@/lib/seeded-random';

/**
 * Randomly placed coloured pixels snapped to a grid (footer confetti, playground pixel card).
 * The original used Math.random() at load; a fixed seed gives the same look while letting
 * the markup render on the server without hydration mismatches.
 */
export function PixelScatter({
  count,
  cols,
  rows,
  cell,
  className,
  seed,
}: {
  count: number;
  cols: number;
  rows: number;
  cell: number;
  className: string;
  seed: number;
}) {
  const rng = mulberry32(seed);
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <i
          key={i}
          className={className}
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: Math.floor(rng() * cols) * cell,
            top: Math.floor(rng() * rows) * cell,
            background: PALETTE[Math.floor(rng() * PALETTE.length)],
          }}
        />
      ))}
    </>
  );
}
