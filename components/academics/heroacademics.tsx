"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroAcademics() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <Image
        src="/images/academics-hero.jpg"
        alt="Academics at El-Shaddai Prep. School & JHS"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-[var(--color-primary)]/50"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Academic Excellence at El-Shaddai
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg text-white/90 max-w-2xl"
        >
          A holistic program in Primary and Junior High that blends faith, discipline, and achievement.
        </motion.p>
      </div>
    </section>
  );
}
