"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/reveal";

export default function ContactHero() {
  return (
    <section className="py-24 bg-[var(--color-primary)] text-white text-center">
      <Reveal>
        <h1 className="text-4xl md:text-5xl font-bold">
          Get in Touch With Us
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          We’re here to answer your questions and help you take the next step with El-Shaddai Prep. School & JHS.
        </p>
      </Reveal>
    </section>
  );
}
