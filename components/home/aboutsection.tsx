"use client";

import { aboutCards, highlights } from "@/lib/about-data";
import Reveal from "@/components/ui/reveal";
import { BookOpen, Star, Users, Activity } from "lucide-react";
import { Award, ClipboardCheck, Flag, Heart } from "lucide-react";

// Unique icons for About cards
const cardIcons = [BookOpen, Star, Users, Activity];

// Unique icons for Highlights
const highlightIcons = [Award, ClipboardCheck, Flag, Heart];

export default function AboutSection() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)]">
            About El-Shaddai Prep. School & JHS
          </h2>
        </Reveal>

        {/* Intro Paragraph */}
        <Reveal delay={0.1}>
          <p className="mt-4 text-[var(--color-text-muted)] text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            El-Shaddai Prep. School & JHS has been nurturing young minds since 1997. 
            We provide a safe, supportive, and academically rigorous environment where 
            children grow spiritually, intellectually, and socially.
          </p>
        </Reveal>

        {/* About Cards */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid md:grid-cols-3 gap-10 text-left">
            {aboutCards.map((card, index) => {
              const Icon = cardIcons[index % cardIcons.length]; // Unique icons for cards
              return (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="flex flex-col items-start p-6 bg-[var(--color-primary)] rounded-xl shadow-lg border border-[var(--color-border)] cursor-pointer h-full transition-all duration-300">
                    <Icon className="w-10 h-10 text-white mb-4" />
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {card.title}
                    </h3>

                    {Array.isArray(card.description) ? (
                      <ul className="text-white list-disc pl-5 space-y-2">
                        {card.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-white">{card.description}</p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>

        {/* Highlights */}
        <Reveal delay={0.1}>
          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            {highlights.map((h, idx) => {
              const Icon = highlightIcons[idx % highlightIcons.length]; // Unique icons for highlights
              return (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="group p-6 rounded-xl bg-[var(--color-secondary)] shadow-md border border-[var(--color-border)] cursor-pointer transition-all duration-300 hover:shadow-lg">
                    <Icon className="mx-auto text-white mb-4 w-10 h-10" />
                    <p className="text-4xl font-bold text-white">{h.number}</p>
                    <p className="mt-2 text-white">{h.label}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
