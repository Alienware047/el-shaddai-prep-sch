"use client";

import Reveal from "@/components/ui/reveal";
import { BookOpen, Star, Users, Home } from "lucide-react";

export const academicPrograms = [
  {
    title: "Primary School",
    description: [
      "A strong foundation in literacy and numeracy based on the Ghana Education Service curriculum.",
      "Integrated Christian values throughout daily lessons and activities.",
      "Interactive and student‑centered learning with emphasis on English, Mathematics, Science, and Creative Arts.",
      "Preparatory guidance for JHS transition and character development.",
    ],
  },
  {
    title: "Junior High School",
    description: [
      "BECE‑oriented academic program designed for success in national examinations.",
      "Core and elective subjects including Social Studies, Integrated Science, ICT, and Religious & Moral Education.",
      "Small class sizes for personalized support and academic mentoring.",
      "Extra‑curricular clubs and sports to build confidence and leadership.",
    ],
  },
  {
    title: "Moral & Discipline Development",
    description: [
      "Regular spiritual formation through devotionals and prayer services.",
      "Values such as Respect, Responsibility, and Integrity integrated into all activities.",
      "Group activities that encourage positive behavior, teamwork, and citizenship.",
      "Community service opportunities that nurture empathy and practical service.",
    ],
  },
  {
    title: "Boarding House Support",
    description: [
      "Comfortable boarding accommodations for students from outside Suhum.",
      "Supervised study sessions each evening to promote academic focus.",
      "Structured routines that include morning devotion, meals, rest, and homework time.",
      "Safe, secure environment with attentive house parents and staff.",
    ],
  },
];

export default function AcademicPrograms() {
  const icons = [BookOpen, Star, Users, Home];

  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-foreground)] mb-6">
            Academic Programs & Student Life
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-center text-[var(--color-text-muted)] max-w-3xl mx-auto text-lg md:text-xl mb-12 leading-relaxed">
            EL‑Shaddai Prep. School & JHS combines strong academics with spiritual growth and community living to prepare well‑rounded students ready for higher education and life beyond the classroom.
          </p>
        </Reveal>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {academicPrograms.map((program, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <Reveal key={program.title} delay={idx * 0.15}>
                <div className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Icon Section */}
                  <div className="bg-[var(--secondary)] p-6 flex items-center justify-center rounded-t-3xl">
                    <Icon className="w-12 h-12 text-[var(--color-primary)]" />
                  </div>

                  {/* Title Section */}
                  <div className="bg-[var(--primary)] text-white p-6 flex justify-center items-center">
                    <h3 className="text-2xl md:text-3xl font-semibold text-center">
                      {program.title}
                    </h3>
                  </div>

                  {/* Description Section */}
                  <div className="bg-[var(--primary-hover)] p-6 rounded-b-3xl -mt-4">
                    <ul className="list-disc pl-6 space-y-2 text-white">
                      {program.description.map((line, j) => (
                        <li key={j} className="text-white/90">
                          {line}
                        </li>
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
