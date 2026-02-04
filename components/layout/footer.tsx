import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
        {/* School Info */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="El-Shaddai Prep School Logo"
              width={40}
              height={40}
              priority
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-[var(--color-primary)]">
                El-Shaddai
              </span>
              <span className="hidden sm:block text-xs text-[var(--color-text-muted)]">
                Prep & JHS
              </span>
            </div>
          </Link>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            “Our Sufficiency is of God”
          </p>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            Suhum, Ghana
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-[var(--color-primary)]">About</Link></li>
            <li><Link href="/academics" className="hover:text-[var(--color-primary)]">Academics</Link></li>
            <li><Link href="/admissions" className="hover:text-[var(--color-primary)]">Admissions</Link></li>
            {/* <li><Link href="/news" className="hover:text-[var(--color-primary)]">News</Link></li> */}
          </ul>
        </div>

        {/* Admissions */}
        <div>
          <h4 className="font-medium mb-3">Admissions</h4>
          <p className="text-sm text-[var(--color-text-muted)]">
            Admission is currently ongoing for the new academic year.
          </p>
          <Link
            href="/admissions"
            className="inline-block mt-3 text-sm font-medium text-black bg-[var(--color-secondary)] px-4 py-2 rounded-md"
          >
            Apply Now
          </Link>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-medium mb-3">Contact</h4>
          <p className="text-sm text-[var(--color-text-muted)]">
            📞 +233 20 826 2241
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            ✉️ suhumelshaddai1997@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-border)] py-4 text-center text-sm text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} El-Shaddai Prep. School & JHS. All rights reserved.
      </div>
    </footer>
  );
}
