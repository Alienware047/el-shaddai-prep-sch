"use client";

import Reveal from "@/components/ui/reveal";
import { academicLevels } from "@/lib/academics-data";
import { BookOpen, Star, Users } from "lucide-react";

const icons = [BookOpen, Star, Users];

export default function AcademicsSection() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-foreground)] mb-6">
            Academics
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-center text-[var(--color-text-muted)] max-w-3xl mx-auto text-lg md:text-xl mb-12 leading-relaxed">
            At El-Shaddai Prep. School & JHS, we provide a solid academic foundation for every child. Our curriculum blends academics, character development, and extracurricular enrichment.
          </p>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {academicLevels.map((level, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={level.title} delay={i * 0.15}>
                <div className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full bg-gradient-to-b from-[var(--secondary)] via-[var(--primary)] to-[var(--primary-hover)]">
                  
                  {/* Icon Section */}
                  <div className="flex items-center justify-center bg-[var(--secondary)] p-6 rounded-t-3xl">
                    <Icon className="w-12 h-12 text-[var(--color-primary)]" />
                  </div>

                  {/* Title Section */}
                  <div className="flex justify-center items-center p-6 bg-[var(--primary)] -mt-4 rounded-tl-3xl rounded-tr-3xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                      {level.title}
                    </h3>
                  </div>

                  {/* Description Section */}
                  <div className="flex-1 p-6 bg-[var(--primary-hover)] -mt-4 rounded-tl-3xl rounded-tr-3xl">
                    <ul className="list-disc pl-6 space-y-2 text-white text-left">
                      {level.description.map((item, idx) => (
                        <li key={idx} className="text-white/90">{item}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
