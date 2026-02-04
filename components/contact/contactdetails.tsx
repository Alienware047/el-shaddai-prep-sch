"use client";

import Reveal from "@/components/ui/reveal";
import { contactInfo } from "@/lib/contact-data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";


export default function ContactDetails() {
  return (
    <section className="py-16 max-w-5xl mx-auto px-6 text-[var(--color-foreground)]">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {contactInfo.title}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-4 text-center text-[var(--color-text-muted)]">
          {contactInfo.description}
        </p>
      </Reveal>

      {/* 🔑 items-stretch makes both columns equal height */}
      <div className="mt-10 grid md:grid-cols-2 gap-8 text-lg items-stretch">
        
        {/* LEFT CARD */}
        <Reveal>
            <div className="h-full rounded-xl border border-[var(--color-border)] p-8 space-y-6 bg-background shadow-md hover:shadow-lg transition-shadow duration-300">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                <MapPin className="text-[var(--color-primary)] w-6 h-6 mt-1" />
                <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-[var(--color-text-muted)]">{contactInfo.address}</p>
                </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                <Phone className="text-[var(--color-primary)] w-6 h-6 mt-1" />
                <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    {contactInfo.phone.map((p, i) => (
                    <p key={i}>
                        <a
                        href={`tel:${p}`}
                        className="text-[var(--color-primary)] hover:underline"
                        >
                        {p}
                        </a>
                    </p>
                    ))}
                </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                <Mail className="text-[var(--color-primary)] w-6 h-6 mt-1" />
                <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    {contactInfo.email.map((e, i) => (
                    <p key={i}>
                        <a
                        href={`mailto:${e}`}
                        className="text-[var(--color-primary)] hover:underline"
                        >
                        {e}
                        </a>
                    </p>
                    ))}
                </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                <Clock className="text-[var(--color-primary)] w-6 h-6 mt-1" />
                <div>
                    <h3 className="font-semibold text-lg">Office Hours</h3>
                    {contactInfo.hours.map((h, i) => (
                    <p key={i} className="text-[var(--color-text-muted)]">
                        {h}
                    </p>
                    ))}
                </div>
                </div>
            </div>
        </Reveal>


        {/* RIGHT CARD (MAP) */}
        <Reveal delay={0.2}>
          <div className="h-full rounded-xl border border-[var(--color-border)] overflow-hidden">
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
