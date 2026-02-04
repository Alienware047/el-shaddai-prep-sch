"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  ctaText?: string;
  ctaLink?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Welcome to El-Shaddai Prep. School",
    subtitle: "Our Sufficiency is of God",
    img: "/images/hero1.jpg",
    ctaText: "Apply Now",
    ctaLink: "/admissions",
  },
  {
    id: 2,
    title: "Excellence in Academics",
    subtitle: "Strong foundation for your child’s future",
    img: "/images/hero2.jpg",
    ctaText: "Learn More",
    ctaLink: "/academics",
  },
  {
    id: 3,
    title: "Faith and Discipline",
    subtitle: "Nurturing God-fearing leaders",
    img: "/images/hero3.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence>
        {slides.map(
          (slide, i) =>
            i === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-full h-full"
              >
                {/* Background Image */}
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* Animated Overlay */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background:
                      i === 0
                        ? ["rgba(22,101,52,0.4)", "rgba(250,204,21,0.3)"]
                        : i === 1
                        ? ["rgba(250,204,21,0.3)", "rgba(22,101,52,0.3)"]
                        : ["rgba(51,65,85,0.2)", "rgba(250,204,21,0.2)"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                ></motion.div>

                {/* Overlay Shapes */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
                  {i === 0 && (
                    <>
                      {/* Circular shapes: top-left & bottom-right */}
                      <motion.span
                        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[var(--secondary)]/30"
                        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
                        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                      ></motion.span>
                      <motion.span
                        className="absolute bottom-10 right-10 w-28 h-28 rounded-full bg-[var(--primary)]/30"
                        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                      ></motion.span>
                    </>
                  )}

                  {i === 1 && (
                    <>
                      {/* Slanted rounded squares: top-left & bottom-right */}
                      <motion.span
                        className="absolute top-12 left-12 w-24 h-24 bg-[var(--primary)]/30 rotate-12 rounded-xl"
                        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                        transition={{ duration: 9, repeat: Infinity, repeatType: "reverse" }}
                      ></motion.span>
                      <motion.span
                        className="absolute bottom-12 right-12 w-20 h-20 bg-[var(--secondary)]/30 -rotate-12 rounded-xl"
                        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                        transition={{ duration: 11, repeat: Infinity, repeatType: "reverse" }}
                      ></motion.span>
                    </>
                  )}

                  {i === 2 && (
                    <>
                      {/* Rounded triangles: top-left & bottom-right */}
                      <motion.span
                        className="absolute top-16 left-16 w-28 h-28 bg-[var(--accent)]/30"
                        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                      ></motion.span>
                      <motion.span
                        className="absolute bottom-16 right-16 w-24 h-24 bg-[var(--secondary)]/30"
                        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                      ></motion.span>
                    </>
                  )}

                  {/* Slide Text */}
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold text-white z-10"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-4 text-white/90 text-lg md:text-xl max-w-2xl z-10"
                  >
                    {slide.subtitle}
                  </motion.p>
                  {slide.ctaText && slide.ctaLink && (
                    <motion.a
                      href={slide.ctaLink}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="mt-6 inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-3 rounded-lg font-medium z-10"
                    >
                      {slide.ctaText}
                    </motion.a>
                  )}
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current
                ? "bg-[var(--color-secondary)] w-6"
                : "bg-white/50"
            }`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}
