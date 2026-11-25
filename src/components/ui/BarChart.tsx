import type { BarChartData } from "@/content/resume";

interface BarChartProps {
  data: BarChartData;
}

// Horizontal bars on a fixed 0-1 axis, so the bar lengths stay honest.
export default function BarChart({ data }: BarChartProps) {
  return (
    <figure className="mt-5 rounded-control border border-rule bg-paper p-4">
      <figcaption className="mb-3 text-sm font-medium">{data.title}</figcaption>
      <div role="img" aria-label={data.summary} className="grid gap-2.5">
        {data.bars.map((bar, index) => (
          <div key={bar.label} className="grid grid-cols-[3.5rem_1fr_3rem] items-center gap-2.5 text-sm">
            <span>{bar.label}</span>
            <span className="relative block h-2.5 overflow-hidden rounded-full bg-rule">
              <span
                data-bar
                className={`absolute inset-y-0 left-0 rounded-full ${index === 0 ? "bg-accent" : "bg-chart"}`}
                style={{ width: `${bar.value * 100}%` }}
              />
            </span>
            <span className="text-right font-mono tabular-nums">{bar.value.toFixed(3)}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-xs leading-5 text-muted">{data.note}</p>
    </figure>
  );
}
