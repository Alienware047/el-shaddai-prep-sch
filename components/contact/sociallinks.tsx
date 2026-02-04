"use client";

import Reveal from "@/components/ui/reveal";
import { contactInfo } from "@/lib/contact-data";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function SocialLinks() {
  const socials = [
    {
      name: "Facebook",
      url: contactInfo.facebook,
      icon: <Facebook className="w-6 h-6" />,
      color: "text-[#1877F2]",
    },
    // {
    //   name: "Instagram",
    //   url: contactInfo.instagram,
    //   icon: <Instagram className="w-6 h-6" />,
    //   color: "text-[#E4405F]",
    // },
    // {
    //   name: "Twitter",
    //   url: contactInfo.twitter,
    //   icon: <Twitter className="w-6 h-6" />,
    //   color: "text-[#1DA1F2]",
    // },
    // {
    //   name: "LinkedIn",
    //   url: contactInfo.linkedin,
    //   icon: <Linkedin className="w-6 h-6" />,
    //   color: "text-[#0A66C2]",
    // },
  ];

  return (
    <section className="py-12 bg-[var(--color-surface)] text-center">
      <Reveal>
        <h3 className="text-2xl md:text-3xl font-semibold text-[var(--color-foreground)] mb-6">
          Connect With Us
        </h3>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-wrap justify-center gap-6">
          {socials.map(
            (social, i) =>
              social.url && (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-background)] hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md`}
                >
                  <span className={`${social.color}`}>{social.icon}</span>
                  <span className="font-medium">{social.name}</span>
                </a>
              )
          )}
        </div>
      </Reveal>
    </section>
  );
}
