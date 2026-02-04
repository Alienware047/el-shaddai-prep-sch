"use client";

import Reveal from "@/components/ui/reveal";
import { admissionsRequirements } from "@/lib/admissions-data";
import {
  BookOpen,
  User,
  FileText,
  ClipboardList,
  HeartPulse,
  CreditCard,
} from "lucide-react";

const icons = [
  BookOpen,
  User,
  FileText,
  ClipboardList,
  HeartPulse,
  CreditCard,
];

const labels = [
  "Application Form",
  "Birth Certificate & Photos",
  "Academic Records",
  "Transfer Letter",
  "Medical Records",
  "Application Fee",
];

export default function RequirementsAdmissions() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-foreground)]">
            {admissionsRequirements.title}
          </h2>
        </Reveal>

        {/* Requirements Cards */}
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {admissionsRequirements.content.map((item, i) => {
            const Icon = icons[i % icons.length];
            const label = labels[i] ?? "Requirement";

            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-[var(--primary-hover)] text-white rounded-2xl p-6 shadow-lg flex flex-col h-full hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-3">
                    <Icon className="w-6 h-6 text-[var(--secondary)] mr-3" />
                    <h3 className="text-lg font-semibold">{label}</h3>
                  </div>
                  <p className="text-white/90">{item}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
