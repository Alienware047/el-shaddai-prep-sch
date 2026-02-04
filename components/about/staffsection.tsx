"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import { staffMembers } from "@/lib/staff-data"; 
export default function StaffSection() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-foreground)] mb-12">
            Our Dedicated Staff
          </h2>
        </Reveal>

        {/* Staff Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {staffMembers.map((staff, idx) => (
            <Reveal key={staff.name} delay={idx * 0.1}>
              <motion.div
                className="bg-[var(--primary)] rounded-3xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-500 flex flex-col"
                whileHover={{ scale: 1.05 }}
              >
                {/* Staff Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={staff.img}
                    alt={staff.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Staff Info */}
                <div className="p-6 bg-[var(--primary-hover)] flex flex-col items-center text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {staff.name}
                  </h3>
                  <p className="mt-1 text-yellow-200 font-medium">{staff.role}</p>
                  {staff.description && (
                    <p className="mt-2 text-white/90 text-sm">
                      {staff.description}
                    </p>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
