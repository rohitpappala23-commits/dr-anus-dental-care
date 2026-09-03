import type { Metadata } from "next";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { PatientCareTips } from "@/components/PatientCareTips";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Patient Care Tips | Post-Treatment Instructions | Dr. Anu's Dental Care",
  description:
    "After-care instructions from Dr. Anu's Dental Care, PM Palem — post-extraction care, daily brushing technique, and oral hygiene guidance. Available in English and Telugu.",
  alternates: { canonical: "/patient-care-tips" },
  openGraph: {
    url: `${SITE_URL}/patient-care-tips`,
    title: "Patient Care Tips | Dr. Anu's Dental Care, PM Palem",
  },
};

/** Dedicated /patient-care-tips page — renders the PatientCareTips section. */
export default function PatientCareTipsPage() {
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3">
          <a
            href="/"
            className="font-display text-xl font-semibold text-slate-900 transition-opacity hover:opacity-80"
          >
            Dr. Anu&apos;s{" "}
            <span className="text-[#970747]">Dental Care</span>
          </a>
          <nav className="ml-auto" aria-label="Quick nav">
            <a
              href="/"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[#970747]"
            >
              ← Back to Home
            </a>
          </nav>
        </div>
      </header>

      <main className="pb-16 lg:pb-0">
        {/* Page-level heading for SEO */}
        <div className="bg-[#fdf2f6]/50 py-12 text-center border-b border-[#f8d0df]">
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Patient Care Tips &amp; Post-Treatment Guide
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600">
            The same after-care instructions we hand out on our prescription
            pad — available here in English and Telugu so you can revisit them
            any time.
          </p>
        </div>
        <PatientCareTips />
      </main>

      <Footer />
      <MobileActionBar />
    </>
  );
}
