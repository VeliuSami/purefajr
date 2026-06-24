const DRIPS = [
  { cx: 70, w: 20, len: 76, r: 13 },
  { cx: 190, w: 10, len: 38, r: 7 },
  { cx: 310, w: 16, len: 62, r: 11 },
  { cx: 470, w: 9, len: 30, r: 6 },
  { cx: 620, w: 22, len: 96, r: 15 },
  { cx: 775, w: 12, len: 46, r: 8 },
  { cx: 915, w: 17, len: 70, r: 12 },
  { cx: 1075, w: 9, len: 34, r: 6 },
  { cx: 1215, w: 20, len: 84, r: 13 },
  { cx: 1360, w: 13, len: 52, r: 9 },
];

const DROPLETS = [
  { cx: 190, cy: 86, r: 5 },
  { cx: 470, cy: 66, r: 4 },
  { cx: 775, cy: 96, r: 5 },
  { cx: 1075, cy: 74, r: 4 },
  { cx: 1360, cy: 104, r: 5 },
];

const BAND_HEIGHT = 40;
const VIEW_H = 150;

/**
 * Gooey honey drip: a wide attachment at the band, a pinched neck,
 * then a fat rounded bulb at the bottom — the way real honey hangs.
 */
function dripPath({
  cx,
  w,
  len,
  r,
}: {
  cx: number;
  w: number;
  len: number;
  r: number;
}) {
  const top = BAND_HEIGHT - 6;
  const neck = Math.max(w * 0.42, 5);
  const bulbY = top + len;
  return [
    `M ${cx - w} ${top}`,
    `C ${cx - w} ${top + len * 0.18}, ${cx - neck} ${top + len * 0.24}, ${cx - neck} ${top + len * 0.46}`,
    `C ${cx - neck} ${top + len * 0.7}, ${cx - r} ${bulbY - r * 2.3}, ${cx - r} ${bulbY - r}`,
    `A ${r} ${r} 0 0 0 ${cx + r} ${bulbY - r}`,
    `C ${cx + r} ${bulbY - r * 2.3}, ${cx + neck} ${top + len * 0.7}, ${cx + neck} ${top + len * 0.46}`,
    `C ${cx + neck} ${top + len * 0.24}, ${cx + w} ${top + len * 0.18}, ${cx + w} ${top}`,
    "Z",
  ].join(" ");
}

export function HoneyDrip() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0"
    >
      <svg
        viewBox={`0 0 1440 ${VIEW_H}`}
        preserveAspectRatio="xMidYMin meet"
        className="block w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="honeyDrip"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            y2={VIEW_H}
          >
            <stop offset="0" stopColor="#C85A12" />
            <stop offset="0.3" stopColor="#E07020" />
            <stop offset="0.65" stopColor="#E8884A" stopOpacity="0.5" />
            <stop offset="1" stopColor="#E8884A" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="honeyShine"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            y2={BAND_HEIGHT}
          >
            <stop offset="0" stopColor="#F4AD6B" stopOpacity="0.65" />
            <stop offset="1" stopColor="#F4AD6B" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g fill="url(#honeyDrip)">
          <rect x="0" y="0" width="1440" height={BAND_HEIGHT} />
          {DRIPS.map((d) => (
            <ellipse
              key={`pool-${d.cx}`}
              cx={d.cx}
              cy={BAND_HEIGHT - 4}
              rx={d.w * 1.25}
              ry={8}
            />
          ))}
          {DRIPS.map((d) => (
            <path key={`drip-${d.cx}`} d={dripPath(d)} />
          ))}
          {DROPLETS.map((d) => (
            <circle key={`drop-${d.cx}-${d.cy}`} cx={d.cx} cy={d.cy} r={d.r} />
          ))}
        </g>

        <rect x="0" y="0" width="1440" height="14" fill="url(#honeyShine)" />
      </svg>
    </div>
  );
}
