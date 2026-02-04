import Reveal from "@/components/ui/reveal";

const stats = [
  { value: "100%", label: "BECE Commitment" },
  { value: "20+", label: "Years of Excellence" },
  { value: "Qualified", label: "Teaching Staff" },
];

export default function StatsSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <div>
              <p className="text-4xl font-bold text-[var(--color-primary)]">
                {stat.value}
              </p>
              <p className="mt-2 text-[var(--color-text-muted)]">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
