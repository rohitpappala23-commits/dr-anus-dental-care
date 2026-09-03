import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  BadgeCheck,
  HeartHandshake,
  ClipboardCheck,
  ShieldCheck,
  Phone,
  CalendarCheck,
} from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Button } from "@/components/ui/Button";
import { DOCTOR, BUSINESS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Dr. P. Anusha | BDS, FAGE (Manipal) | Dr. Anu's Dental Care",
  description: `Meet Dr. P. Anusha — BDS, FAGE (Manipal), Reg. No: A15265. Lead dental surgeon at Dr. Anu's Dental Care, PM Palem, Visakhapatnam. Specialising in pain-free restorative, cosmetic, and pediatric dentistry.`,
  alternates: { canonical: "/about" },
  openGraph: {
    url: `${SITE_URL}/about`,
    title: "About Dr. P. Anusha | Dr. Anu's Dental Care, Visakhapatnam",
  },
};

const PHILOSOPHY = [
  {
    icon: HeartHandshake,
    label: "Gentle & Pain-Free Care",
    text: "Every procedure is designed to be as comfortable as possible using modern local anaesthesia and micro-invasive techniques.",
  },
  {
    icon: ClipboardCheck,
    label: "Transparent Treatment Planning",
    text: "No surprises. Every treatment plan is explained clearly before it starts — patients always make informed decisions.",
  },
  {
    icon: ShieldCheck,
    label: "Clinical Sterilization Standards",
    text: "Hospital-grade autoclave sterilization, single-use consumables, and full barrier protocols on every visit.",
  },
] as const;

/** Dedicated /about page for Dr. P. Anusha. */
export default function AboutPage() {
  const primaryPhoneHref = `tel:${BUSINESS.telephone[0].replace(/\s+/g, "")}`;

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3">
          <Link
            href="/"
            className="font-display text-xl font-semibold text-slate-900 transition-opacity hover:opacity-80"
          >
            Dr. Anu&apos;s{" "}
            <span className="text-[#970747]">Dental Care</span>
          </Link>
          <nav className="ml-auto" aria-label="Quick nav">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[#970747]"
            >
              ← Back to Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="pb-16 lg:pb-0">
        {/* ── Hero band ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#fdf2f6]/40 to-white py-16 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-[#f8d0df]/30 blur-3xl"
          />
          <div className="relative mx-auto max-w-4xl px-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f8d0df] bg-[#fdf2f6] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#970747]">
              About Your Dentist
            </span>
            <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
              Meet {DOCTOR.displayName}
            </h1>
            <p className="mt-3 text-lg font-medium text-[#970747]">
              {DOCTOR.role}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              {DOCTOR.displayName} holds a{" "}
              <strong className="font-semibold text-slate-800">
                {DOCTOR.credentials}
              </strong>{" "}
              and leads {BUSINESS.name} in PM Palem, Visakhapatnam — bringing
              specialist-level expertise in restorative, cosmetic, orthodontic,
              and pediatric dentistry to every patient, under one roof.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={BUSINESS.whatsappUrl} variant="primary">
                <CalendarCheck className="size-4" aria-hidden />
                Book a Consultation
              </Button>
              <Button href={primaryPhoneHref} variant="secondary">
                <Phone className="size-4" aria-hidden />
                {BUSINESS.telephone[0]}
              </Button>
            </div>
          </div>
        </section>

        {/* ── Credentials ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Qualifications &amp; Registration
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {/* Degree */}
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#fdf2f6]/40 p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#f8d0df] bg-[#fdf2f6] text-[#970747]">
                  <GraduationCap className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Qualification
                  </p>
                  <p className="mt-0.5 font-semibold text-slate-900">
                    {DOCTOR.credentials}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-600">
                    Manipal Academy of Higher Education
                  </p>
                </div>
              </div>

              {/* Registration */}
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#fdf2f6]/40 p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#f8d0df] bg-[#fdf2f6] text-[#970747]">
                  <Award className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    AP Registration
                  </p>
                  <p className="mt-0.5 font-semibold text-slate-900">
                    Reg. No: {DOCTOR.registrationNumber}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-600">
                    Andhra Pradesh Dental Council
                  </p>
                </div>
              </div>

              {/* Verified */}
              <div className="flex items-start gap-3 rounded-2xl border border-[#970747]/20 bg-[#970747]/10 p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#970747] text-white">
                  <BadgeCheck className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#970747]">
                    Verified Practitioner
                  </p>
                  <p className="mt-0.5 font-semibold text-slate-900">
                    AP Dental Council
                  </p>
                  <p className="mt-0.5 text-xs text-slate-600">
                    Active registration confirmed
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <h2 className="mt-14 text-xl font-semibold text-slate-900">
              Clinical Philosophy
            </h2>
            <ul className="mt-6 space-y-5" role="list">
              {PHILOSOPHY.map(({ icon: Icon, label, text }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#f8d0df] bg-[#fdf2f6] text-[#970747]">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-bold text-slate-900">{label}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Clinic strip */}
            <div className="mt-14 rounded-2xl border border-[#f8d0df] bg-gradient-to-r from-[#fdf2f6] to-white px-6 py-5">
              <p className="font-display font-semibold text-[#970747]">
                {DOCTOR.credentialBadge}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {BUSINESS.address.streetAddress},{" "}
                {BUSINESS.address.addressLocality}, Visakhapatnam,{" "}
                {BUSINESS.address.postalCode}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileActionBar />
    </>
  );
}
