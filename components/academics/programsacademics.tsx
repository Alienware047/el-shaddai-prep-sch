"use client";

import Reveal from "@/components/ui/reveal";
import { academicPrograms } from "@/lib/academics-data";
import { BookOpen, Star, Users } from "lucide-react";

const icons = [BookOpen, Star, Users];

export default function ProgramsAcademics() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-foreground)]">
            Academic Programs
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {academicPrograms.map((program, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={program.title} delay={i * 0.1}>
                <div className="bg-[var(--primary)] text-white rounded-3xl p-6 shadow-lg flex flex-col h-full">
                  <Icon className="w-10 h-10 mb-4 text-[var(--secondary)]" />
                  <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-white/90 mt-auto">
                    {program.description.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
