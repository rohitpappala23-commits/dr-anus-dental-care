"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  TREATMENTS,
  FILTER_LABELS,
  type TreatmentItem,
  type TreatmentCategory,
} from "@/lib/treatmentsData";
import { TreatmentDetailModal } from "@/components/TreatmentDetailModal";


type ServicesSectionProps = {
  /** Opens the AppointmentModal with the selected treatment pre-filled. */
  onBookClick: (treatment: string) => void;
};

export function ServicesSection({ onBookClick }: ServicesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<"All" | TreatmentCategory>("All");
  const [activeTreatment, setActiveTreatment] = useState<TreatmentItem | null>(null);

  const displayed =
    activeFilter === "All"
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === activeFilter);

  return (
    <>
      {/* ── Main section ── */}
      <section
        id="services"
        className="py-20 lg:py-28 bg-[#970747]/[0.02]"
      >
        <div className="mx-auto max-w-6xl px-6">

          {/* ── Section header ── */}
          <div className="mx-auto max-w-2xl text-center">
            <span
              className="inline-flex items-center rounded-full bg-[#fdf2f6] text-[#970747] border border-[#f8d0df] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide"
            >
              Our Multispeciality Dental Services
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Comprehensive Dental Care for Every Smile in Visakhapatnam
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              From routine check-ups to advanced surgical procedures, every
              treatment at our clinic is delivered with clinical precision,
              pain-free techniques, and hospital-grade sterilized technology.
            </p>
          </div>

          {/* ── Filter pills ── */}
          <div
            className="mt-10 flex flex-wrap justify-center gap-2"
            role="group"
            aria-label="Filter treatments by category"
          >
            {FILTER_LABELS.map((label) => {
              const isActive = activeFilter === label;
              return (
                <button
                  key={label}
                  type="button"
                  suppressHydrationWarning
                  onClick={() =>
                    setActiveFilter(label as "All" | TreatmentCategory)
                  }
                  aria-pressed={isActive}
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer",
                    isActive
                      ? "bg-[#970747] text-white shadow-md"
                      : "bg-white text-slate-700 border border-slate-200 hover:text-[#970747] hover:border-[#f8d0df] hover:bg-[#fdf2f6]/50",
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* ── Treatment card grid ── */}
          <div
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
            role="list"
          >
            {displayed.map((treatment) => (
              <TreatmentCard
                key={treatment.slug}
                treatment={treatment}
                onViewDetails={() => setActiveTreatment(treatment)}
                onBookClick={onBookClick}
              />
            ))}
          </div>

          {/* ── Empty state (defensive) ── */}
          {displayed.length === 0 && (
            <p className="mt-16 text-center text-sm text-slate-500">
              No treatments in this category yet.
            </p>
          )}

        </div>
      </section>

      {/* ── Treatment detail drawer ── */}
      <TreatmentDetailModal
        treatment={activeTreatment}
        onClose={() => setActiveTreatment(null)}
        onBookClick={onBookClick}
      />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   TreatmentCard sub-component
───────────────────────────────────────────────────────────────────────────── */
interface TreatmentCardProps {
  treatment: TreatmentItem;
  onViewDetails: () => void;
  onBookClick: (name: string) => void;
}

function TreatmentCard({ treatment, onViewDetails, onBookClick }: TreatmentCardProps) {
  return (
    <article
      role="listitem"
      className="group flex flex-col h-full overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-[#970747]"
    >
      {/* Cover image */}
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
        <Image
          src={treatment.imageUrl}
          alt={treatment.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Gradient overlay — fades image into the wine card body */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#970747]/90 via-[#970747]/10 to-transparent"
          aria-hidden
        />
      </div>

      {/* Card body — solid brand wine background */}
      <div className="flex flex-1 flex-col justify-between p-4.5 sm:p-5">
        <div>
          <h3 className="text-base font-bold text-white leading-snug">
            {treatment.name}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-white/90">
            {treatment.summary}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center justify-between gap-3 pt-3 border-t border-white/15">
          <button
            type="button"
            suppressHydrationWarning
            onClick={onViewDetails}
            className="group/btn inline-flex items-center gap-1 text-xs font-semibold text-white transition-colors hover:text-pink-200 cursor-pointer"
          >
            View Details
            <ArrowRight
              className="size-3.5 transition-transform group-hover/btn:translate-x-0.5"
              aria-hidden
            />
          </button>

          <button
            type="button"
            suppressHydrationWarning
            onClick={() => onBookClick(treatment.name)}
            className="rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-[#970747] shadow-sm transition-all hover:bg-pink-50 active:scale-95 cursor-pointer"
          >
            Book →
          </button>
        </div>
      </div>
    </article>
  );
}

export default ServicesSection;
