"use client";

import ContactHero from "@/components/contact/contacthero";
import ContactDetails from "@/components/contact/contactdetails";
import ContactForm from "@/components/contact/contactform";
import SocialLinks from "@/components/contact/sociallinks";

export default function ContactPage() {
  return (
    <main className="bg-[var(--color-surface)] transition-colors duration-500">
      <ContactHero />
      <ContactDetails />
      <ContactForm />
      <SocialLinks />
    </main>
  );
}
