"use client";

import HeroSection from "@/components/about/herosection";
import AboutOverview from "@/components/about/aboutoverview";
import AcademicPrograms from "@/components/about/academicprogrms";
import FacilitiesSection from "@/components/about/facilitiessection";
import StaffSection from "@/components/about/staffsection";
import TestimonialsSection from "@/components/about/testimonialssection";
import AdmissionsCTA from "@/components/home/admissionscta";

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-surface)] transition-colors duration-500">
      <HeroSection />
      <AboutOverview />
      <AcademicPrograms />
      <FacilitiesSection />
      <StaffSection />
      <TestimonialsSection />
      <AdmissionsCTA />
    </main>
  );
}
