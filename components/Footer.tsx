import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Clock, BadgeCheck } from "lucide-react";
import { BUSINESS, DOCTOR, NAV_LINKS, SERVICE_MENU } from "@/lib/constants";

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Site footer styled in rich #580329 (Brand Dark Wine) with white text & silver-white links.
 * SEO footer tag: "Leading Dental Surgeon in Visakhapatnam".
 */
export function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="bg-[#580329] text-white border-t border-[#6f0534]"
    >
      {/* ── Main grid ── */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">

          {/* ── Col 1: Clinic credentials ── */}
          <div>
            {/* Brand */}
            <Link
              href="/"
              className="group inline-block"
              aria-label="Dr. Anu's Dental Care — Home"
            >
              <p className="font-display text-xl font-semibold text-white transition-opacity group-hover:opacity-90">
                Dr. Anu&apos;s Dental Care
              </p>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-widest text-[#f8d0df]">
                {BUSINESS.subtitle}
              </p>
            </Link>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              Multispeciality dental clinic in Madhurawada, Visakhapatnam —
              offering advanced, pain-free treatments for every member of your
              family.
            </p>

            {/* Lead doctor credential strip */}
            <div className="mt-5 rounded-xl border border-[#83063d] bg-[#44021f] p-3">
              <p className="text-xs font-semibold text-[#f8d0df]">
                {DOCTOR.displayName}
              </p>
              <p className="mt-0.5 text-xs text-slate-300">
                {DOCTOR.credentials} · Reg. No: {DOCTOR.registrationNumber}
              </p>
            </div>

            {/* SEO tag */}
            <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[#f8d0df]">
              <BadgeCheck className="size-3.5 shrink-0 text-[#f8d0df]" aria-hidden />
              Leading Dental Surgeon in Visakhapatnam
            </p>
          </div>

          {/* ── Col 2: Treatments — all 5 service silos ── */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#f8d0df]">
              Treatments
            </p>
            <ul className="mt-4 space-y-4">
              {SERVICE_MENU.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="text-sm font-semibold text-white transition-colors hover:text-[#f8d0df]"
                  >
                    {category.title}
                  </Link>
                  <ul className="mt-1.5 space-y-1">
                    {category.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-xs text-slate-300 transition-colors hover:text-white"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Quick links ── */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#f8d0df]">
              Quick Links
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-slate-200 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/patient-care-tips"
                  className="text-sm text-slate-200 transition-colors hover:text-white"
                >
                  Post-Care Tips
                </Link>
              </li>
            </ul>

            {/* Timings summary */}
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#f8d0df]">
                Timings
              </p>
              <ul className="mt-3 space-y-2">
                {BUSINESS.hoursCompact.map((row) => (
                  <li key={row.label} className="flex items-center gap-1.5 text-xs text-slate-300">
                    <Clock className="size-3 shrink-0 text-[#f8d0df]" aria-hidden />
                    <span className="font-medium text-white">{row.label}:</span>{" "}
                    {row.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Col 4: Contact ── */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#f8d0df]">
              Contact
            </p>
            <ul className="mt-4 space-y-4">
              {/* Phone numbers */}
              {BUSINESS.telephone.map((phone, i) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    aria-label={`Call us at ${phone}`}
                    className="group flex items-center gap-2.5 text-sm text-slate-200 transition-colors hover:text-white"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#970747]/40 border border-[#f8d0df]/30 text-[#f8d0df]">
                      <Phone className="size-3.5" aria-hidden />
                    </span>
                    {phone}
                    {i === 0 && (
                      <span className="rounded-full bg-[#f8d0df]/20 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-[#f8d0df]">
                        Primary
                      </span>
                    )}
                  </a>
                </li>
              ))}

              {/* WhatsApp */}
              <li>
                <a
                  href={BUSINESS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  className="group flex items-center gap-2.5 text-sm text-slate-200 transition-colors hover:text-white"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300">
                    <MessageCircle className="size-3.5" aria-hidden />
                  </span>
                  WhatsApp Chat
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="group flex items-center gap-2.5 text-sm text-slate-200 transition-colors hover:text-white"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#970747]/40 border border-[#f8d0df]/30 text-[#f8d0df]">
                    <Mail className="size-3.5" aria-hidden />
                  </span>
                  {BUSINESS.email}
                </a>
              </li>

              {/* Address */}
              <li>
                <a
                  href="https://maps.app.goo.gl/SuojbrSAMtNsQKPA7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open clinic location in Google Maps"
                  className="group flex items-start gap-2.5 text-sm text-slate-200 transition-colors hover:text-white"
                >
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#970747]/40 border border-[#f8d0df]/30 text-[#f8d0df]">
                    <MapPin className="size-3.5" aria-hidden />
                  </span>
                  <span className="leading-relaxed">
                    Dr. Anu&apos;s Dental Care, Bobby NKM Apt, PM Palem, Visakhapatnam
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[#6f0534] px-6 py-5 bg-[#44021f]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-slate-300 sm:flex-row">
          <p>
            © {CURRENT_YEAR}{" "}
            <span className="text-white font-medium">{BUSINESS.name}</span>.
            All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <span aria-hidden>·</span>
            <Link
              href="/sitemap.xml"
              className="transition-colors hover:text-white"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
