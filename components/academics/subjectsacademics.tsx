"use client";

import Reveal from "@/components/ui/reveal";
import { academicSubjects } from "@/lib/academics-data";

export default function SubjectsAcademics() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
            Core Subjects
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8 mt-8">
          {academicSubjects.map((subj, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-[var(--primary-hover)] rounded-2xl text-white p-6 shadow-md flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{subj.name}</h3>
                <p className="text-white/90 mt-auto">{subj.overview}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
