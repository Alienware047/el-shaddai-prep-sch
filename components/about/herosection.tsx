"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[80vh] sm:h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://img.freepik.com/free-photo/boy-holding-white-paper-school_399305-7.jpg?uid=R137266405&ga=GA1.1.1500563470.1750679253&semt=ais_hybrid&w=740&q=80" // Replace with a hero image for About page
        alt="El-Shaddai Prep School"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Color Overlay */}
      <motion.div
        className="absolute inset-0 bg-[var(--color-primary)]/40"
        animate={{
          backgroundColor: [
            "rgba(22,101,52,0.3)",
            "rgba(250,204,21,0.25)",
            "rgba(51,65,85,0.2)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Pulsing Shapes */}
      <motion.span
        className="absolute top-10 left-10 w-24 h-24 rounded-full bg-[var(--secondary)]/30"
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.span
        className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-[var(--accent)]/30"
        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0.4, 0.7] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
        >
          About El-Shaddai Prep School & JHS
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow-md"
        >
          Founded in 1997, El-Shaddai Prep School & JHS nurtures young minds with a 
          strong academic foundation, faith-based values, and holistic development.
        </motion.p>

        {/* Optional CTA */}
        <motion.a
          href="/about#mission"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 inline-block bg-[var(--secondary)] hover:bg-[var(--secondary-hover)] text-[var(--color-foreground)] px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300"
        >
          Learn Our Mission
        </motion.a>
      </div>
    </section>
  );
}
