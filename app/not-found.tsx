"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Loading() {
  return (
    <>
        <Navbar />
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-surface)]">
        
        {/* Pulsing Background Shapes */}
        <motion.div
            className="absolute w-64 h-64 rounded-full bg-[var(--color-primary)]/20"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
            className="absolute w-96 h-96 rounded-full bg-[var(--color-secondary)]/20"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Icon */}
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="relative z-10"
        >
            <BookOpen className="w-16 h-16 text-[var(--color-primary)]" />
        </motion.div>

        {/* Text */}
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg font-medium text-[var(--color-foreground)]"
        >
            Preparing something great…
        </motion.p>

        <p className="text-sm text-[var(--color-text-muted)] mt-2">
            Please wait a moment
        </p>
        </div>
        <Footer />
    </>
  );
}
