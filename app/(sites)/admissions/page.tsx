"use client";

import HeroAdmissions from "@/components/admissions/heroadmissions";
import OverviewAdmissions from "@/components/admissions/overviewadmissions";
import RequirementsAdmissions from "@/components/admissions/requirementsadmission";
import ProcessAdmissions from "@/components/admissions/processadmissions";
import BoardingAdmissions from "@/components/admissions/boardingadmissions";
import CTAContact from "@/components/home/admissionscta"; // reuse CTA

export default function AdmissionsPage() {
  return (
    <div className="bg-[var(--color-surface)] transition-colors duration-500">
      <HeroAdmissions />
      <OverviewAdmissions />
      <RequirementsAdmissions />
      <ProcessAdmissions />
      <BoardingAdmissions />
      <CTAContact />
    </div>
  );
}
