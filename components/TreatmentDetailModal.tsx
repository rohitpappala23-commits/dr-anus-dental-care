"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  X,
  Clock,
  Syringe,
  CheckCircle2,
  CalendarCheck,
  Heart,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { TreatmentItem } from "@/lib/treatmentsData";

interface TreatmentDetailModalProps {
  treatment: TreatmentItem | null;
  onClose: () => void;
  /** Passed through so the modal's CTA can open the AppointmentModal with the treatment pre-selected. */
  onBookClick: (treatmentName: string) => void;
}

/**
 * Treatment detail slide-in drawer re-themed to #970747.
 */
export function TreatmentDetailModal({
  treatment,
  onClose,
  onBookClick,
}: TreatmentDetailModalProps) {
  const isOpen = treatment !== null;
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  /* ── Body scroll lock + Esc handler ── */
  useEffect(() => {
    if (!isOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    const t = setTimeout(() => closeButtonRef.current?.focus(), 120);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKeyDown);
      clearTimeout(t);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        aria-hidden
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-[70] bg-slate-900/60 transition-opacity duration-300",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* ── Panel ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="treatment-modal-title"
        inert={!isOpen}
        className={cn(
          "fixed bottom-0 left-0 right-0 z-[80] flex flex-col overflow-hidden bg-white transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl",
          // Mobile: slides up from bottom
          "max-h-[92dvh] rounded-t-2xl",
          // Desktop: slide-in from right
          "sm:bottom-0 sm:left-auto sm:right-0 sm:top-0 sm:max-h-full sm:w-[480px] sm:rounded-l-2xl sm:rounded-tr-none",
          isOpen ? "translate-y-0 sm:translate-x-0" : "translate-y-full sm:translate-x-full",
        )}
      >
        {/* Content scrolls inside fixed panel */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          {treatment && (
            <>
              {/* ── 1. Hero image ── */}
              <div className="relative h-56 shrink-0 sm:h-64">
                <Image
                  src={treatment.imageUrl}
                  alt={treatment.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 480px"
                  priority
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Category badge */}
                <span className="absolute bottom-4 left-4 rounded-full bg-[#970747] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                  {treatment.category}
                </span>

                {/* Close button */}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close treatment details"
                  suppressHydrationWarning
                  className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-slate-900/50 text-white backdrop-blur-sm transition-colors hover:bg-slate-900/80 cursor-pointer"
                >
                  <X className="size-5" aria-hidden />
                </button>
              </div>

              {/* ── 2. Name + meta ── */}
              <div className="px-6 pt-5">
                <h2
                  id="treatment-modal-title"
                  className="text-2xl font-semibold text-slate-900"
                >
                  {treatment.name}
                </h2>

                {/* Duration + anaesthesia pills */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fdf2f6] text-[#970747] border border-[#f8d0df] px-3 py-1 text-xs font-semibold">
                    <Clock className="size-3 text-[#970747]" aria-hidden />
                    {treatment.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 text-xs font-semibold">
                    <Syringe className="size-3 text-[#970747]" aria-hidden />
                    {treatment.anaesthesia}
                  </span>
                </div>
              </div>

              {/* ── Divider ── */}
              <div className="mx-6 mt-5 h-px bg-slate-200" aria-hidden />

              {/* ── 3. Overview ── */}
              <div className="px-6 pt-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#970747]">
                  Treatment Overview
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {treatment.overview}
                </p>
              </div>

              {/* ── 4. Key Benefits ── */}
              <div className="px-6 pt-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#970747]">
                  Key Benefits
                </h3>
                <ul className="mt-3 space-y-2.5" role="list">
                  {treatment.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#970747]" aria-hidden />
                      <span className="text-sm text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── 5. Recovery ── */}
              <div className="mx-6 mt-5 rounded-xl bg-[#fdf2f6] border border-[#f8d0df] px-4 py-4">
                <div className="flex items-start gap-3">
                  <Heart className="mt-0.5 size-4 shrink-0 text-[#970747]" aria-hidden />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#970747]">
                      Post-Treatment Recovery
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">
                      {treatment.recovery}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom padding */}
              <div className="h-28" aria-hidden />
            </>
          )}
        </div>

        {/* ── 6. Sticky CTA footer ── */}
        {treatment && (
          <div className="shrink-0 border-t border-slate-200 bg-white px-6 pb-6 pt-4">
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => {
                onBookClick(treatment.name);
                onClose();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#970747] hover:bg-[#83063d] active:bg-[#6f0534] py-3.5 text-sm font-semibold text-white shadow-lg transition-all cursor-pointer"
            >
              <CalendarCheck className="size-4" aria-hidden />
              Book Consultation for {treatment.name}
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
