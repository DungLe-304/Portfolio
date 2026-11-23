import type { BarChartData } from "@/content/resume";

interface BarChartProps {
  data: BarChartData;
}

// Horizontal bars on a fixed 0-1 axis, so the bar lengths stay honest.
export default function BarChart({ data }: BarChartProps) {
  return (
    <figure className="mt-5 border-t border-rule pt-4">
      <figcaption className="mb-3 text-[13px] font-semibold">{data.title}</figcaption>
      <div role="img" aria-label={data.summary} className="grid gap-3">
        {data.bars.map((bar, index) => (
          <div key={bar.label} className="grid grid-cols-[56px_1fr_48px] items-center gap-2.5 text-[13px]">
            <span>{bar.label}</span>
            <span className="relative block h-2.5 bg-rule">
              <span
                data-bar
                className={`absolute inset-y-0 left-0 ${index === 0 ? "bg-accent" : "bg-chart"}`}
                style={{ width: `${bar.value * 100}%` }}
              />
            </span>
            <span className="text-right font-mono">{bar.value.toFixed(3)}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-[12.5px] leading-5 text-muted">{data.note}</p>
    </figure>
  );
}
