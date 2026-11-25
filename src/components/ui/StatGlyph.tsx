import type { StatGlyph as StatGlyphData } from "@/content/resume";

interface StatGlyphProps {
  glyph: StatGlyphData;
}

const WAVE_BARS = 64;
const TOKEN_ROWS = [
  [18, 26, 12, 34, 20, 16, 28, 22, 14, 30],
  [22, 14, 30, 18, 26, 12, 34, 20, 16, 28],
];

// Decorative and hidden from assistive tech: the stat's text carries the fact.
// "wave" and "tokens" are illustrations with no values; "dots" draws an exact unit count.
export default function StatGlyph({ glyph }: StatGlyphProps) {
  if (glyph.kind === "wave") {
    return (
      <svg viewBox={`0 0 ${WAVE_BARS * 5} 40`} preserveAspectRatio="xMinYMid meet" aria-hidden="true" className="h-10 w-full max-w-sm">
        {Array.from({ length: WAVE_BARS }, (_, i) => {
          const height = 6 + Math.round(Math.abs(Math.sin(i * 0.37) * Math.cos(i * 0.11)) * 30);
          return <rect key={i} x={i * 5} y={20 - height / 2} width="2.5" height={height} rx="1.25" className="fill-chart" />;
        })}
      </svg>
    );
  }

  if (glyph.kind === "tokens") {
    return (
      <svg viewBox="0 0 270 40" preserveAspectRatio="xMinYMid meet" aria-hidden="true" className="h-10 w-full max-w-sm">
        {TOKEN_ROWS.map((row, rowIndex) => {
          let x = 0;
          return row.map((width, i) => {
            const rect = <rect key={`${rowIndex}-${i}`} x={x} y={rowIndex === 0 ? 7 : 27} width={width} height="6" rx="3" className="fill-chart" />;
            x += width + 6;
            return rect;
          });
        })}
      </svg>
    );
  }

  const columns = glyph.count > 100 ? 37 : 10;
  const rows = Math.ceil(glyph.count / columns);
  const gap = 10;

  return (
    <svg
      viewBox={`0 0 ${columns * gap} ${rows * gap}`}
      aria-hidden="true"
      className={`h-auto w-full ${glyph.count > 100 ? "max-w-lg" : "max-w-44"}`}
    >
      {Array.from({ length: glyph.count }, (_, i) => (
        <circle
          key={i}
          cx={(i % columns) * gap + gap / 2}
          cy={Math.floor(i / columns) * gap + gap / 2}
          r="3.4"
          className={i < (glyph.highlight ?? 0) ? "fill-accent" : "fill-chart"}
        />
      ))}
    </svg>
  );
}
