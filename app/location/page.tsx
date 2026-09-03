import type { Metadata } from "next";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { LocationSection } from "@/components/LocationSection";
import { BUSINESS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Timings & Location | Dr. Anu's Dental Care, PM Palem",
  description: `Find Dr. Anu's Dental Care at ${BUSINESS.address.streetAddress}, ${BUSINESS.address.addressLocality}, Visakhapatnam. Open Mon–Sat ${BUSINESS.hoursCompact[0].value} and Sun ${BUSINESS.hoursCompact[1].value}. Call +91 9121081357.`,
  alternates: { canonical: "/location" },
  openGraph: {
    url: `${SITE_URL}/location`,
    title: "Timings & Location | Dr. Anu's Dental Care, PM Palem, Visakhapatnam",
  },
};

/**
 * Dedicated /location page — renders the LocationSection.
 */
export default function LocationPage() {
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
          <span className="hidden rounded-full bg-[#fdf2f6] border border-[#f8d0df] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#970747] sm:block">
            {BUSINESS.subtitle}
          </span>
          <nav className="ml-auto flex items-center gap-4" aria-label="Quick nav">
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
        <LocationSection />
      </main>

      <Footer />
      <MobileActionBar />
    </>
  );
}
