import ReportSection from "@/components/ui/ReportSection";
import Reveal from "@/components/ui/Reveal";
import { resume } from "@/content/resume";

export default function Highlights() {
  return (
    <ReportSection id="highlights" label="Highlights" aside="From the resume">
      <Reveal>
        <dl className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 min-[1180px]:grid-cols-4 min-[1180px]:gap-x-8">
          {resume.stats.map((stat) => (
            <div
              key={stat.label}
              className="grid grid-cols-[minmax(118px,0.8fr)_1.2fr] items-baseline gap-x-3.5 border-b border-rule py-4 min-[1180px]:flex min-[1180px]:flex-col min-[1180px]:items-start min-[1180px]:border-b-0 min-[1180px]:pb-2 min-[1180px]:pt-6"
            >
              <dt className="col-start-2 text-[15px] font-medium min-[1180px]:mt-3.5">{stat.label}</dt>
              <dd
                data-stat-value
                className="order-first col-start-1 row-span-2 row-start-1 font-mono text-[clamp(1.875rem,3.6vw,3.125rem)] leading-none tracking-[-0.05em]"
              >
                {stat.value}
              </dd>
              <dd className="col-start-2 text-[13px] text-muted">{stat.detail}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </ReportSection>
  );
}
