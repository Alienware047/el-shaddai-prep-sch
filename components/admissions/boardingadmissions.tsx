"use client";

import Reveal from "@/components/ui/reveal";
import { boardingInfo } from "@/lib/admissions-data";
import { Home, BedDouble, ShieldCheck, Users, HeartHandshake } from "lucide-react";

const icons = [
  Home,
  BedDouble,
  ShieldCheck,
  Users,
  HeartHandshake,
];

export default function BoardingAdmissions() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-foreground)]">
            {boardingInfo.title}
          </h2>
        </Reveal>

        {/* Boarding Cards */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {boardingInfo.content.map((line, i) => {
            const Icon = icons[i % icons.length];

            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-[var(--primary)] text-white rounded-2xl p-6 shadow-lg flex items-start gap-4 h-full hover:scale-105 transition-transform duration-300">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--secondary)] text-[var(--primary)] flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text */}
                  <p className="text-white/90 text-lg leading-relaxed">
                    {line}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
