"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroAdmissions() {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
      <Image
        src="/images/admissions-hero.jpg"
        alt="Admissions at El-Shaddai Prep. School & JHS"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-[var(--color-primary)]/60"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Join Our Learning Community
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg text-white/90 max-w-3xl"
        >
          Secure a place for your child at El-Shaddai Prep. School & JHS — where faith, discipline, and excellence shape the leaders of tomorrow.
        </motion.p>
      </div>
    </section>
  );
}
