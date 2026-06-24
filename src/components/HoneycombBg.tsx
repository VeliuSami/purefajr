const VIEW_W = 1440;
const VIEW_H = 960;
const HEX_SIZE = 40;

function hexPoints(cx: number, cy: number, s: number) {
  const h = (Math.sqrt(3) / 2) * s;
  return [
    [cx + s, cy],
    [cx + s / 2, cy + h],
    [cx - s / 2, cy + h],
    [cx - s, cy],
    [cx - s / 2, cy - h],
    [cx + s / 2, cy - h],
  ]
    .map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`)
    .join(" ");
}

function buildHexes() {
  const s = HEX_SIZE;
  const colStep = 1.5 * s;
  const rowStep = Math.sqrt(3) * s;
  const hexes: { x: number; y: number }[] = [];
  let col = 0;
  for (let x = 0; x <= VIEW_W + s; x += colStep, col++) {
    const yOffset = (col % 2) * (rowStep / 2);
    for (let y = -rowStep; y <= VIEW_H + rowStep; y += rowStep) {
      hexes.push({ x, y: y + yOffset });
    }
  }
  return hexes;
}

const HEXES = buildHexes();

export function HoneycombBg({
  className = "",
  opacity = 0.06,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          stroke="#E07020"
          strokeWidth="1.1"
          opacity={opacity}
        >
          {HEXES.map((hx, i) => (
            <polygon key={i} points={hexPoints(hx.x, hx.y, HEX_SIZE)} />
          ))}
        </g>
      </svg>
    </div>
  );
}
