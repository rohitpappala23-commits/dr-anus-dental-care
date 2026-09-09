"use client";

import Image from "next/image";
import { useState } from "react";
import {
  GraduationCap,
  Award,
  BadgeCheck,
  ClipboardCheck,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  Users,
  Star,
} from "lucide-react";
import { DOCTOR, BUSINESS } from "@/lib/constants";

/** Canonical SEO alt text — keyword-optimised for local search. */
const PHOTO_ALT =
  "Dr. P. Anusha BDS FAGE Manipal Dental Surgeon PM Palem Visakhapatnam";

/** Clinical philosophy pillars — sourced from the clinic's patient charter. */
const PHILOSOPHY = [
  {
    icon: HeartHandshake,
    label: "Gentle & Pain-Free",
    text: "Specialised in pain-free restorative, cosmetic, and pediatric dentistry using modern anaesthesia and micro-invasive techniques.",
  },
  {
    icon: ClipboardCheck,
    label: "Transparent Planning",
    text: "Every treatment plan is explained clearly before it begins — no surprise procedures, no unnecessary work. You decide with full information.",
  },
  {
    icon: ShieldCheck,
    label: "Clinical Sterilization",
    text: "Hospital-grade autoclave sterilization, single-use consumables, and barrier protocols on every operatory surface — every visit, every patient.",
  },
] as const;

/** At-a-glance trust statistics shown beneath the avatar. */
const STATS = [
  { icon: Star, value: "5★", label: "Patient Rating" },
  { icon: Users, value: "3000+", label: "Happy Patients" },
  { icon: Stethoscope, value: "10+", label: "Specialties" },
] as const;

/**
 * Self-contained doctor portrait frame with #970747 brand styling.
 */
function DoctorPortrait() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative">
      {/* 1. Outer glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-3xl blur-2xl bg-[#970747]/15"
      />

      {/* 2. Gradient border ring */}
      <div
        className="relative rounded-3xl p-[2px] shadow-xl bg-gradient-to-br from-[#970747] via-[#f8d0df] to-[#580329]"
      >
        {/* 3. White inset ring */}
        <div
          className="overflow-hidden rounded-[22px] bg-white p-[3px]"
        >
          {/* 4. Image or placeholder */}
          <div className="relative overflow-hidden rounded-[20px]">
            {imgError ? (
              /* 4b. Illustrated placeholder */
              <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#fdf2f6] via-[#fbe6ee] to-[#fdf2f6]">
                {/* Initials bubble */}
                <div className="flex size-24 items-center justify-center rounded-full text-3xl font-bold text-white shadow-lg bg-gradient-to-br from-[#970747] to-[#580329]">
                  PA
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-[#970747]">
                    {DOCTOR.displayName}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-[#83063d]">
                    {DOCTOR.credentials}
                  </p>
                </div>
                <Stethoscope
                  className="size-8 text-[#970747]/20"
                  aria-hidden
                />
              </div>
            ) : (
              /* 4a. Real photo */
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src="/dr-anusha.jpg"
                  alt={PHOTO_ALT}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  onError={() => setImgError(true)}
                  className="object-cover object-top"
                />
              </div>
            )}

            {/* 5. Credential tag overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent px-4 pb-4 pt-12">
              <p className="text-sm font-bold tracking-wide text-white">
                {DOCTOR.displayName}
              </p>
              <p className="mt-0.5 text-xs font-medium text-[#f8d0df]">
                {DOCTOR.credentials}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Name / role strip */}
      <div className="mt-3 rounded-xl bg-[#fdf2f6] border border-[#f8d0df] px-4 py-3 text-center">
        <p className="font-display text-base font-semibold text-slate-900">
          {DOCTOR.displayName}
        </p>
        <p className="mt-0.5 text-xs font-medium text-[#970747]">
          {DOCTOR.role} • 9+ Years Experience
        </p>
      </div>
    </div>
  );
}

/**
 * Homepage "meet the doctor" section.
 */
export function DoctorProfile() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28 bg-[#970747]/[0.02]"
      aria-labelledby="doctor-section-heading"
    >
      {/* Decorative soft glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 size-[480px] rounded-full bg-[#f8d0df]/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 size-[320px] rounded-full bg-[#fbe6ee]/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-start">

        {/* ── Left column: avatar + credential badges + stats ── */}
        <div className="mx-auto w-full max-w-xs lg:max-w-none">

          {/* Doctor portrait frame */}
          <DoctorPortrait />

          {/* Credential badges */}
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#fdf2f6] text-[#970747]">
                <GraduationCap className="size-4.5" aria-hidden />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Qualifications
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  {DOCTOR.credentials}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#fdf2f6] text-[#970747]">
                <Award className="size-4.5" aria-hidden />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  AP Registration
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  Reg. No: {DOCTOR.registrationNumber}
                </p>
              </div>
            </div>

            {/* Verified badge */}
            <div className="flex items-center gap-2 rounded-xl border border-[#970747]/20 bg-[#970747]/10 px-4 py-2.5">
              <BadgeCheck className="size-4 shrink-0 text-[#970747]" aria-hidden />
              <p className="text-xs font-semibold text-[#970747]">
                Andhra Pradesh Dental Council — Verified Practitioner
              </p>
            </div>
          </div>

          {/* At-a-glance stats */}
          <div className="mt-5 grid grid-cols-3 divide-x divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 py-4"
              >
                <Icon className="size-4 text-[#970747]" aria-hidden />
                <p className="text-base font-bold text-slate-900">{value}</p>
                <p className="text-center text-[10px] font-medium leading-tight text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column: bio + philosophy pillars ── */}
        <div className="lg:pt-2">
          {/* Section eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f8d0df] bg-[#fdf2f6] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#970747]">
            <Stethoscope className="size-3" aria-hidden />
            About Your Dentist
          </span>

          <h2
            id="doctor-section-heading"
            className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Meet Your Lead Dental Surgeon
          </h2>

          {/* Lead paragraph */}
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
            {DOCTOR.displayName} holds a{" "}
            <strong className="font-semibold text-slate-800">
              {DOCTOR.credentials}
            </strong>{" "}
            and leads{" "}
            <strong className="font-semibold text-slate-800">
              {BUSINESS.name}
            </strong>{" "}
            in Madhurawada, Visakhapatnam. With training from the prestigious Manipal
            Academy of Higher Education, she brings specialist-level competence in
            restorative, cosmetic, orthodontic, and pediatric dentistry to every
            patient — all under one roof.
          </p>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            Her approach is grounded in three commitments: keeping every procedure
            as <em>painless</em> as possible, making every treatment plan{" "}
            <em>fully transparent</em> before it starts, and maintaining
            rigorous <em>clinical sterilization</em> standards so patients never
            have to worry about safety.
          </p>

          {/* Clinical philosophy pillars */}
          <h3 className="mt-10 text-[11px] font-bold uppercase tracking-widest text-[#970747]">
            Clinical Philosophy
          </h3>

          <ul className="mt-5 space-y-5" role="list">
            {PHILOSOPHY.map(({ icon: Icon, label, text }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#f8d0df] bg-[#fdf2f6] text-[#970747]">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">{label}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Credential signature strip */}
          <div className="mt-10 rounded-2xl border border-[#f8d0df] bg-gradient-to-r from-[#fdf2f6] to-white px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#970747]">
              Credential Verified
            </p>
            <p className="mt-1 font-display text-base font-semibold text-slate-900">
              {DOCTOR.credentialBadge}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorProfile;
