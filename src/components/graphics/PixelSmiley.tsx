import type { FaceExpression } from '@/types/project';

type Cell = [number, number];

const GRID = 15;
const C = 7;
const R = 6.1;

/** The circular outline shared by every pixel face. */
const RING: Cell[] = (() => {
  const out: Cell[] = [];
  for (let y = 0; y < GRID; y++)
    for (let x = 0; x < GRID; x++) if (Math.abs(Math.hypot(x - C, y - C) - R) < 0.62) out.push([x, y]);
  return out;
})();

/** The homepage smiley (kinetic strip, playground, about photo). */
const SMILEY: Cell[] = (() => {
  const cells: Cell[] = [...RING, [4, 5], [4, 4], [10, 5], [10, 4]];
  for (let x = 4; x <= 10; x++) cells.push([x, x === 4 || x === 10 ? 8 : x === 5 || x === 9 ? 9 : 10]);
  return cells;
})();

/** Narrator expressions used in case-study scenes. */
const FACES: Record<FaceExpression, { eyes: Cell[]; mouth: Cell[] }> = {
  neutral: { eyes: [[4, 5], [4, 6], [10, 5], [10, 6]], mouth: [[5, 9], [6, 9], [7, 9], [8, 9], [9, 9]] },
  happy: {
    eyes: [[4, 5], [4, 6], [10, 5], [10, 6]],
    mouth: [[4, 8], [5, 9], [6, 10], [7, 10], [8, 10], [9, 9], [10, 8]],
  },
  surprised: {
    eyes: [[4, 4], [5, 4], [4, 5], [5, 5], [9, 4], [10, 4], [9, 5], [10, 5]],
    mouth: [[6, 9], [7, 9], [8, 9], [6, 10], [8, 10], [6, 11], [7, 11], [8, 11]],
  },
  thinking: { eyes: [[3, 5], [4, 5], [5, 5], [10, 5], [10, 6]], mouth: [[5, 10], [6, 10], [7, 9], [8, 9], [9, 10]] },
  worried: {
    eyes: [[4, 5], [4, 6], [10, 5], [10, 6]],
    mouth: [[4, 10], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9], [10, 10]],
  },
  aha: {
    eyes: [[4, 4], [5, 4], [4, 5], [5, 5], [9, 4], [10, 4], [9, 5], [10, 5]],
    mouth: [[4, 8], [5, 9], [6, 10], [7, 10], [8, 10], [9, 9], [10, 8]],
  },
};

function PixelSvg({ cells, color, className }: { cells: Cell[]; color: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 15 15" aria-hidden="true" focusable="false">
      {cells.map(([x, y], i) => (
        <rect key={i} x={x} y={y} width={0.94} height={0.94} fill={color} />
      ))}
    </svg>
  );
}

export function PixelSmiley({ color, className }: { color: string; className?: string }) {
  return <PixelSvg cells={SMILEY} color={color} className={className} />;
}

export function PixelFace({ expression, color = '#F2EDE2' }: { expression: FaceExpression; color?: string }) {
  const f = FACES[expression] ?? FACES.neutral;
  return <PixelSvg cells={[...RING, ...f.eyes, ...f.mouth]} color={color} />;
}
