"use client";

import Reveal from "@/components/ui/reveal";
import { aboutDetails } from "@/lib/about-data";

export default function AboutOverview() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      {/* Section Header */}
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-foreground)]">
          About El‑Shaddai Prep. School & JHS
        </h2>
      </Reveal>

      {/* About Text */}
      <Reveal delay={0.1}>
        <div className="mt-8 text-lg md:text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed space-y-6">
          {aboutDetails.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
