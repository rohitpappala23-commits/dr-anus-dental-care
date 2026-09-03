"use client";

import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

/**
 * Fixed bottom action bar — mobile only (hidden on lg+). Two high-intent
 * conversion buttons: direct call (brand #970747 wine) and WhatsApp (green).
 */
export function MobileActionBar() {
  const primaryPhone = BUSINESS.telephone[0].replace(/\s+/g, "");
  const primaryLabel = BUSINESS.telephone[0];

  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-50 lg:hidden shadow-2xl"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="flex">
        {/* ── Call Now ─────────────────────────────────────────────── */}
        <a
          href={`tel:${primaryPhone}`}
          aria-label={`Call Dr. Anu's Dental Care at ${primaryLabel}`}
          className="group relative flex flex-1 flex-col items-center justify-center gap-0.5 overflow-hidden bg-gradient-to-r from-[#970747] to-[#6f0534] py-4 min-h-[56px] transition-colors active:brightness-90"
        >
          {/* Shimmer on hover */}
          <span
            className="pointer-events-none absolute inset-0 translate-x-[-100%] skew-x-[-20deg] bg-white/10 transition-transform duration-500 group-hover:translate-x-[200%]"
            aria-hidden
          />

          <span className="flex items-center gap-1.5">
            <span className="relative flex size-5 shrink-0 items-center justify-center">
              <span
                className="absolute inline-flex size-5 animate-ping rounded-full bg-[#f8d0df] opacity-30"
                aria-hidden
              />
              <Phone className="relative size-4 text-white" aria-hidden />
            </span>
            <span className="text-sm font-bold tracking-tight text-white">
              Call Now
            </span>
          </span>
          <span className="text-[10px] font-medium tracking-wide text-[#f8d0df]">
            {primaryLabel}
          </span>
        </a>

        {/* Hairline divider */}
        <div className="w-px self-stretch bg-white/20" aria-hidden />

        {/* ── WhatsApp Us ──────────────────────────────────────────── */}
        <a
          href={BUSINESS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Dr. Anu's Dental Care on WhatsApp"
          className="group relative flex flex-1 flex-col items-center justify-center gap-0.5 overflow-hidden bg-gradient-to-r from-[#25d366] to-[#128c7e] py-4 min-h-[56px] transition-colors active:brightness-90"
        >
          <span
            className="pointer-events-none absolute inset-0 translate-x-[-100%] skew-x-[-20deg] bg-white/10 transition-transform duration-500 group-hover:translate-x-[200%]"
            aria-hidden
          />

          <span className="flex items-center gap-1.5">
            <MessageCircle className="size-4 text-white" aria-hidden />
            <span className="text-sm font-bold tracking-tight text-white">
              WhatsApp Us
            </span>
          </span>
          <span className="text-[10px] font-medium tracking-wide text-emerald-100">
            Chat instantly
          </span>
        </a>
      </div>
    </nav>
  );
}
