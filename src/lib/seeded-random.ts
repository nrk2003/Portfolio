/**
 * The linear congruential generator used by the original design's perspective tunnel.
 * Deterministic output lets generated graphics render on the server with no client JavaScript.
 */
export function seededRandom(seed: number): () => number {
  let s = seed;
  return () => (s = (s * 9301 + 49297) % 233280) / 233280;
}

export const PALETTE = ['#1D5DEB', '#F7AC1B', '#F04E23', '#1CB254', '#A868F0', '#E3312A'] as const;

/** mulberry32 — well-distributed seeded PRNG for scattered pixels (x/y pairs stay uncorrelated). */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
