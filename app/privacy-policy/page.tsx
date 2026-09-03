import type { Metadata } from "next";
import Link from "next/link";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { BUSINESS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Anu's Dental Care",
  description:
    "Privacy Policy for Dr. Anu's Dental Care, PM Palem, Visakhapatnam. How we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: { url: `${SITE_URL}/privacy-policy` },
  robots: { index: false },
};

const LAST_UPDATED = "28 August 2026";

/** /privacy-policy — required footer link. */
export default function PrivacyPolicyPage() {
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
              className="text-sm font-medium text-slate-600 hover:text-[#970747]"
            >
              ← Back to Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 pb-24 text-slate-700 lg:pb-16">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="prose prose-slate mt-10 max-w-none text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">1. Who We Are</h2>
          <p>
            This website is operated by <strong>{BUSINESS.name}</strong> (
            {BUSINESS.subtitle}), located at {BUSINESS.address.streetAddress},{" "}
            {BUSINESS.address.addressLocality}, Visakhapatnam,{" "}
            {BUSINESS.address.addressRegion} — {BUSINESS.address.postalCode},
            India. You can reach us at{" "}
            <a href={`mailto:${BUSINESS.email}`} className="text-[#970747] underline">{BUSINESS.email}</a> or on{" "}
            <a href={`tel:${BUSINESS.telephone[0].replace(/\s+/g, "")}`} className="text-[#970747] underline">
              {BUSINESS.telephone[0]}
            </a>
            .
          </p>

          <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">2. Information We Collect</h2>
          <p>
            When you use our appointment booking form or contact us via
            WhatsApp, we may collect your name, phone number, preferred
            treatment, and appointment preferences. We do not collect payment
            information on this website.
          </p>

          <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">3. How We Use Your Information</h2>
          <p>
            Your details are used solely to respond to your appointment
            request, confirm your slot, and provide dental care. We do not
            sell, rent, or share your personal information with third parties
            for marketing purposes.
          </p>

          <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">4. WhatsApp Communication</h2>
          <p>
            Clicking {"\"Book via WhatsApp\""} opens WhatsApp with a pre-filled
            message on your device. Any subsequent communication via WhatsApp
            is governed by{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#970747] underline"
            >
              WhatsApp&apos;s own Privacy Policy
            </a>
            .
          </p>

          <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">5. Google Maps Embed</h2>
          <p>
            Our location page embeds a Google Maps iframe. Google may collect
            data when you interact with the map. See{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#970747] underline"
            >
              Google&apos;s Privacy Policy
            </a>{" "}
            for details.
          </p>

          <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">6. Cookies</h2>
          <p>
            This website does not currently use tracking cookies or analytics.
            If this changes, this policy will be updated accordingly.
          </p>

          <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">7. Data Retention</h2>
          <p>
            Appointment request data is retained only as long as necessary to
            fulfil your booking. You may request deletion by contacting us at{" "}
            <a href={`mailto:${BUSINESS.email}`} className="text-[#970747] underline">{BUSINESS.email}</a>.
          </p>

          <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">8. Your Rights</h2>
          <p>
            You have the right to access, correct, or request deletion of any
            personal data we hold about you. Please contact us directly to
            exercise these rights.
          </p>

          <h2 className="text-lg font-semibold text-slate-900 mt-6 mb-2">9. Contact</h2>
          <p>
            For any privacy-related questions, please email us at{" "}
            <a href={`mailto:${BUSINESS.email}`} className="text-[#970747] underline">{BUSINESS.email}</a> or call{" "}
            <a href={`tel:${BUSINESS.telephone[0].replace(/\s+/g, "")}`} className="text-[#970747] underline">
              {BUSINESS.telephone[0]}
            </a>
            .
          </p>
        </div>
      </main>

      <Footer />
      <MobileActionBar />
    </>
  );
}
