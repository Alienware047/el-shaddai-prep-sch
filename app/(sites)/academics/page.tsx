"use client";

import HeroAcademics from "@/components/academics/heroacademics";
import OverviewAcademics from "@/components/academics/overviewacademics";
import ProgramsAcademics from "@/components/academics/programsacademics";
import SubjectsAcademics from "@/components/academics/subjectsacademics";
import CTAAdmissions from "@/components/home/admissionscta";

export default function AcademicsPage() {
  return (
    <main className="bg-[var(--color-surface)] transition-colors duration-500">
      <HeroAcademics />
      <OverviewAcademics />
      <ProgramsAcademics />
      <SubjectsAcademics />
      <CTAAdmissions />
    </main>
  );
}
