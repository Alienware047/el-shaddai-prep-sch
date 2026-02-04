"use client";

import Reveal from "@/components/ui/reveal";
import { contactInfo } from "@/lib/contact-data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactDetails() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-6 text-[var(--color-foreground)]">
      {/* Section Title */}
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          {contactInfo.title}
        </h2>
      </Reveal>

      {/* Description */}
      <Reveal delay={0.1}>
        <p className="mt-4 text-center text-[var(--color-text-muted)] max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          {contactInfo.description}
        </p>
      </Reveal>

      {/* Contact Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* LEFT CARD: Contact Info */}
        <Reveal>
          <div className="w-full h-full rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] p-8 md:p-10 space-y-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            
            {/* Address */}
            <div className="flex items-start gap-4 md:gap-5">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[var(--color-primary)] rounded-full text-white shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl">Address</h3>
                <p className="text-[var(--color-text-muted)]">{contactInfo.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 md:gap-5">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[var(--color-primary)] rounded-full text-white shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl">Phone</h3>
                {contactInfo.phone.map((p, i) => (
                  <p key={i}>
                    <a
                      href={`tel:${p.replace(/\s+/g, "")}`}
                      className="text-[var(--color-primary)] hover:underline break-all"
                    >
                      {p}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 md:gap-5">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[var(--color-primary)] rounded-full text-white shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl">Email</h3>
                {contactInfo.email.map((e, i) => (
                  <p key={i}>
                    <a
                      href={`mailto:${e}`}
                      className="text-[var(--color-primary)] hover:underline break-all"
                    >
                      {e}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-4 md:gap-5">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[var(--color-primary)] rounded-full text-white shadow-md">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl">Office Hours</h3>
                {contactInfo.hours.map((h, i) => (
                  <p key={i} className="text-[var(--color-text-muted)]">
                    {h}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT CARD: Map */}
        <Reveal delay={0.2}>
          <div className="w-full h-80 md:h-full rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.7835782400707!2d-0.4417588!3d6.0244184999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf17e6f78ce62b%3A0x3ec03c6ac730a8e1!2sEl-Shaddai%20Preparatory%20School!5e0!3m2!1sen!2sgh!5m2!1sen!2sgh"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
