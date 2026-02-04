"use client";

import { useState } from "react";
import Reveal from "@/components/ui/reveal";
import { User, Mail, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);
    setError("");

    try {
      const response = await fetch("/mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(data.message || "Failed to send message.");
      }
    } catch (err) {
      setError("An error occurred while sending your message.");
      console.error(err);
    }
  };

  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-foreground)]">
            Send Us a Message
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="mt-10 grid grid-cols-1 gap-6"
          >
            {/* Name */}
            <div className="flex items-center border border-[var(--color-border)] rounded-lg p-3 bg-[var(--color-background)] focus-within:ring-2 focus-within:ring-[var(--color-primary)] transition">
              <User className="w-5 h-5 text-[var(--color-primary)] mr-3" />
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                required
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full bg-transparent outline-none text-[var(--color-foreground)] placeholder:text-[var(--color-text-muted)]"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border border-[var(--color-border)] rounded-lg p-3 bg-[var(--color-background)] focus-within:ring-2 focus-within:ring-[var(--color-primary)] transition">
              <Mail className="w-5 h-5 text-[var(--color-primary)] mr-3" />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                required
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full bg-transparent outline-none text-[var(--color-foreground)] placeholder:text-[var(--color-text-muted)]"
              />
            </div>

            {/* Message */}
            <div className="flex items-start border border-[var(--color-border)] rounded-lg p-3 bg-[var(--color-background)] focus-within:ring-2 focus-within:ring-[var(--color-primary)] transition">
              <MessageSquare className="w-5 h-5 text-[var(--color-primary)] mr-3 mt-1" />
              <textarea
                placeholder="Your Message"
                value={form.message}
                rows={6}
                required
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full bg-transparent outline-none text-[var(--color-foreground)] placeholder:text-[var(--color-text-muted)] resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[var(--color-primary)] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[var(--color-primary-hover)] hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>

            {error && (
              <p className="text-red-500 text-center mt-2 font-semibold">{error}</p>
            )}
          </form>
        </Reveal>

        {submitted && (
          <p className="mt-6 text-center text-[var(--color-primary)] font-semibold">
            ✅ Thanks! Your message has been submitted.
          </p>
        )}
      </div>
    </section>
  );
}
