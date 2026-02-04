"use client";

import Reveal from "@/components/ui/reveal";
import { admissionsIntro } from "@/lib/admissions-data";

export default function OverviewAdmissions() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6 text-center">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
          {admissionsIntro.title}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-6 space-y-4 text-lg text-[var(--color-text-muted)] leading-relaxed">
          {admissionsIntro.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
