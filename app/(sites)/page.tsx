import HeroSlider from "@/components/home/heroslider";
import AboutSection from "@/components/home/aboutsection";
import AcademicsSection from "@/components/home/academicssection";
import AdmissionsCTA from "@/components/home/admissionscta";
import StatsSection from "@/components/home/statssection";
import GallerySection from "@/components/home/gallerysection";
import TestimonialsSection from "@/components/home/testimonialssection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <AcademicsSection />
      <AdmissionsCTA />
      <StatsSection />
      <GallerySection />
      <TestimonialsSection />
    </>
  );
}
