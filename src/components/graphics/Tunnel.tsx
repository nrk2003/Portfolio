import { PALETTE, seededRandom } from '@/lib/seeded-random';

const W = 640;
const H = 520;
const CX = W / 2;
const CY = H / 2;
const INNER_W = 110;
const INNER_H = 90;
const RINGS = 9;
const SEGS = 5;
const STROKE = { stroke: '#121212', strokeWidth: 1.4 };

type Rect = { x: number; y: number; w: number; h: number };

/** t: 0 = outer (full), 1 = inner */
function ringRect(t: number): Rect {
  const w = W + (INNER_W - W) * t;
  const h = H + (INNER_H - H) * t;
  return { x: CX - w / 2, y: CY - h / 2, w, h };
}

/** u in [0,1] along the edge (0 top, 1 right, 2 bottom, 3 left) */
function edgePoint(r: Rect, edge: number, u: number): [number, number] {
  if (edge === 0) return [r.x + r.w * u, r.y];
  if (edge === 1) return [r.x + r.w, r.y + r.h * u];
  if (edge === 2) return [r.x + r.w * (1 - u), r.y + r.h];
  return [r.x, r.y + r.h * (1 - u)];
}

/** Perspective tunnel from the hero. Same seed and geometry as the original, rendered on the server. */
export function Tunnel() {
  const rng = seededRandom(42);
  const cells: { points: string; fill: string }[] = [];
  for (let k = 0; k < RINGS; k++) {
    const rA = ringRect(k / RINGS);
    const rB = ringRect((k + 1) / RINGS);
    for (let edge = 0; edge < 4; edge++) {
      for (let s = 0; s < SEGS; s++) {
        if (rng() > 0.16) continue;
        const u0 = s / SEGS;
        const u1 = (s + 1) / SEGS;
        const pts = [edgePoint(rA, edge, u0), edgePoint(rA, edge, u1), edgePoint(rB, edge, u1), edgePoint(rB, edge, u0)];
        cells.push({ points: pts.map((p) => p.join(',')).join(' '), fill: PALETTE[Math.floor(rng() * PALETTE.length)] });
      }
    }
  }

  const rings = Array.from({ length: RINGS + 1 }, (_, k) => ringRect(k / RINGS));
  const rOut = ringRect(0);
  const rIn = ringRect(1);
  const radials: [number, number, number, number][] = [];
  for (let edge = 0; edge < 4; edge++) {
    for (let s = 0; s <= SEGS; s++) {
      const pO = edgePoint(rOut, edge, s / SEGS);
      const pI = edgePoint(rIn, edge, s / SEGS);
      radials.push([pO[0], pO[1], pI[0], pI[1]]);
    }
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      {cells.map((c, i) => (
        <polygon key={`c${i}`} points={c.points} fill={c.fill} />
      ))}
      {rings.map((r, i) => (
        <rect key={`r${i}`} x={r.x} y={r.y} width={r.w} height={r.h} fill="none" {...STROKE} />
      ))}
      {radials.map(([x1, y1, x2, y2], i) => (
        <line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} {...STROKE} />
      ))}
      <rect x={rIn.x} y={rIn.y} width={rIn.w} height={rIn.h} fill="#F2EDE2" {...STROKE} />
    </svg>
  );
}
