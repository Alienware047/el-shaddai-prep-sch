"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/lib/gallery-data";

const shapeColors = [
  "rgba(22,101,52,0.2)", // primary green
  "rgba(250,204,21,0.2)", // secondary yellow
  "rgba(51,65,85,0.2)", // accent blue-gray
];

export default function GallerySection() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[var(--color-foreground)] mb-16"
        >
         School Gallery
        </motion.h2>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, idx) => {
            const isTall = idx % 4 === 0;
            const isWide = idx % 5 === 0;
            const shapeColor = shapeColors[idx % shapeColors.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative break-inside-avoid rounded-3xl overflow-hidden shadow-lg group cursor-pointer`}
                style={{
                  height: isTall ? "28rem" : "20rem",
                  width: isWide ? "100%" : "auto",
                }}
                onClick={() => setModalImage(item.img)}
              >
                {/* Pulsing Shapes */}
                <motion.div
                  className="absolute top-4 left-4 w-16 h-16 rounded-full"
                  style={{ backgroundColor: shapeColor }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0.5, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 right-4 w-20 h-20 rounded-full"
                  style={{ backgroundColor: shapeColor }}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.4, 0.6] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                {/* Image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Text */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center"
                  initial={{ opacity: 1 }}
                  whileHover={{ y: 40 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
                  <p className="text-white/90 text-sm mt-2">{item.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
          >
            <motion.div
              className="relative bg-[var(--color-surface)] rounded-3xl shadow-2xl max-w-4xl w-11/12 md:w-3/4 p-4 flex flex-col"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside card
            >
              {/* Close Button */}
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-8 h-8 flex justify-center items-center hover:bg-black/70 transition"
              >
                ×
              </button>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={modalImage}
                  alt="Gallery Image"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
