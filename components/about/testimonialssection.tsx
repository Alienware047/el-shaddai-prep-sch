"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/reveal";
import { testimonials } from "@/lib/testimonials-data"; // we'll create this next

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-12">
            What Parents & Students Say
          </h2>
        </Reveal>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {testimonials.map(
              (testimonial, i) =>
                i === current && (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8 }}
                    className="bg-[var(--primary)] text-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-6"
                  >
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-[var(--secondary)]"
                      />
                    </div>

                    {/* Text */}
                    <div className="text-center md:text-left">
                      <p className="text-lg md:text-xl font-medium mb-4">
                        "{testimonial.quote}"
                      </p>
                      <h3 className="text-2xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-[var(--secondary)] font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current
                    ? "bg-[var(--secondary)] w-6"
                    : "bg-white/50"
                }`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
