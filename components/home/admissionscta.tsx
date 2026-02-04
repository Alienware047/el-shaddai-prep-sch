"use client";

import Reveal from "@/components/ui/reveal";
import { admissionsData } from "@/lib/admissions-data";

export default function AdmissionsCTA() {
  return (
    <section className="py-24 bg-[var(--color-secondary)] transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        {/* Section Title */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-black transition-colors duration-500">
            {admissionsData.title}
          </h2>
        </Reveal>

        {/* Description */}
        <Reveal delay={0.1}>
          <div className="text-lg md:text-xl text-black space-y-3 transition-colors duration-500">
            {admissionsData.description.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </Reveal>

        {/* Call to Action */}
        <Reveal delay={0.2}>
          <a
            href={admissionsData.ctaLink}
            className="mt-6 inline-block bg-[var(--color-primary)] text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-transform duration-300"
          >
            {admissionsData.ctaText}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
