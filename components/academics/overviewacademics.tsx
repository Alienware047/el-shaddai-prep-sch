"use client";

import Reveal from "@/components/ui/reveal";
import { academicsOverview } from "@/lib/academics-data";

export default function OverviewAcademics() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6 text-[var(--color-foreground)]">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          What Makes Our Academic Program Strong
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 space-y-4 text-lg text-[var(--color-text-muted)] leading-relaxed">
          {academicsOverview.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
