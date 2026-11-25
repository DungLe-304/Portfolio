import CountUp from "@/components/ui/CountUp";
import ReportSection from "@/components/ui/ReportSection";
import Reveal from "@/components/ui/Reveal";
import SectionGlyph from "@/components/ui/SectionGlyph";
import StatGlyph from "@/components/ui/StatGlyph";
import { resume } from "@/content/resume";

// Bento rhythm on a 6-column grid: two halves, then a wide tile and a narrow one.
const TILE_SPANS = ["lg:col-span-3", "lg:col-span-3", "sm:col-span-2 lg:col-span-4", "sm:col-span-2 lg:col-span-2"];

export default function Highlights() {
  return (
    <ReportSection index="01" id="highlights" label="Highlights" aside="From the resume" glyph={<SectionGlyph name="chart" />}>
      <dl className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-6">
        {resume.stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.05}
            className={`flex flex-col rounded-card border border-rule bg-surface p-cell transition-colors duration-slow hover:border-accent/60 ${TILE_SPANS[index] ?? ""}`}
          >
            <dt className="mt-3 text-base font-medium">{stat.label}</dt>
            <dd className="order-first font-mono text-stat tabular-nums">
              <CountUp value={stat.value} />
            </dd>
            <dd className="mt-1 text-sm text-muted">{stat.detail}</dd>
            {stat.glyph && (
              <dd className="mt-auto pt-6">
                <StatGlyph glyph={stat.glyph} />
              </dd>
            )}
          </Reveal>
        ))}
      </dl>
    </ReportSection>
  );
}
