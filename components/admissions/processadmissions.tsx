"use client";

import Reveal from "@/components/ui/reveal";
import { admissionsProcess } from "@/lib/admissions-data";
import { FileText, Edit3, Send, ClipboardCheck, CheckCircle } from "lucide-react";

const icons = [
  FileText,
  Edit3,
  Send,
  ClipboardCheck,
  CheckCircle,
];

export default function ProcessAdmissions() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-foreground)]">
            {admissionsProcess.title}
          </h2>
        </Reveal>

        {/* Process Cards */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {admissionsProcess.content.map((step, i) => {
            const Icon = icons[i % icons.length];

            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-[var(--primary)] text-white rounded-2xl p-6 shadow-lg flex flex-col h-full hover:scale-105 transition-transform duration-300">
                  {/* Step Header */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--secondary)] text-[var(--primary)] font-bold mr-4">
                      {i + 1}
                    </div>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Step Text */}
                  <p className="text-white/90 text-lg">{step}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
