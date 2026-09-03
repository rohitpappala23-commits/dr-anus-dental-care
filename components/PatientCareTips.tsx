import { Bandage, Sparkles, type LucideIcon } from "lucide-react";

type CareStep = {
  number: string;
  text: string;
  emphasis?: string; // bold keyword inside the tip
};

type CareCard = {
  icon: LucideIcon;
  accentFrom: string;
  accentTo: string;
  accentText: string;
  accentBorder: string;
  iconBg: string;
  iconColor: string;
  title: string;
  /** Clinic's own Telugu prescription-pad header */
  teluguTitle: string;
  steps: CareStep[];
};

/**
 * Content sourced directly from the clinic's Telugu prescription-pad
 * after-care notes, re-themed with #970747 brand colors.
 */
const CARE_CARDS: CareCard[] = [
  {
    icon: Bandage,
    accentFrom: "#fdf2f6",
    accentTo: "#ffffff",
    accentText: "#970747",
    accentBorder: "#f8d0df",
    iconBg: "#fbe6ee",
    iconColor: "#970747",
    title: "Post-Tooth Extraction & Procedure Care",
    teluguTitle: "పన్ను తీసిన తర్వాత తీసుకోవలసిన జాగ్రత్తలు",
    steps: [
      {
        number: "01",
        emphasis: "Gauze pack — 45 to 60 minutes.",
        text: "Keep the cotton pack pressed firmly at the extraction site for a full 45–60 minutes after the procedure to establish a stable clot.",
      },
      {
        number: "02",
        emphasis: "No rinsing, spitting, or straws — 24 to 48 hours.",
        text: "Avoid rinsing vigorously, spitting, or using a straw for 24–48 hours. These actions dislodge the clot and delay healing.",
      },
      {
        number: "03",
        emphasis: "Soft, cool foods only.",
        text: "Eat soft, cool foods and liquids (yogurt, rice, cold soup). Avoid hot, spicy, hard, or crunchy foods until the socket heals.",
      },
      {
        number: "04",
        emphasis: "Take medications on time.",
        text: "Complete the full prescribed course of antibiotics and pain relief as directed — even if discomfort subsides earlier.",
      },
    ],
  },
  {
    icon: Sparkles,
    accentFrom: "#fdf2f6",
    accentTo: "#ffffff",
    accentText: "#83063d",
    accentBorder: "#f8d0df",
    iconBg: "#fbe6ee",
    iconColor: "#83063d",
    title: "Daily Brushing & Oral Hygiene Standards",
    teluguTitle: "బ్రషింగ్ చేయు పద్ధతులు",
    steps: [
      {
        number: "01",
        emphasis: "Twice daily — morning & bedtime.",
        text: "Brush thoroughly after breakfast and before sleeping. Bedtime brushing is especially critical as saliva flow reduces overnight.",
      },
      {
        number: "02",
        emphasis: "Circular-vertical motion, not horizontal scrubbing.",
        text: "Use gentle circular strokes — from upper gums downward and lower gums upward. Avoid back-and-forth scrubbing, which wears enamel.",
      },
      {
        number: "03",
        emphasis: "2 to 3 full minutes, every session.",
        text: "Set a timer if needed. Most people underbrush. Spend at least 30 seconds on each quadrant of the mouth.",
      },
      {
        number: "04",
        emphasis: "Clean inner surfaces & tongue thoroughly.",
        text: "Give equal attention to inner tooth surfaces, back molars, and the tongue — the most commonly missed zones for plaque build-up.",
      },
    ],
  },
];

/**
 * Patient after-care guidance sourced from prescription-pad notes.
 */
export function PatientCareTips() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28 bg-white"
      aria-labelledby="care-tips-heading"
    >
      {/* Subtle wine wash line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#970747]/30 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ── Section header ── */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f8d0df] bg-[#fdf2f6] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#970747]">
            <Sparkles className="size-3" aria-hidden />
            Oral Health &amp; Post-Care Guide
          </span>

          <h2
            id="care-tips-heading"
            className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Patient Care Tips, Straight From Dr. Anusha
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            The same after-care guidance handed out on our clinic&apos;s
            prescription pad — kept here so you can revisit it any time,
            in English and Telugu.
          </p>
        </div>

        {/* ── Care cards ── */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {CARE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="overflow-hidden rounded-2xl border border-[#f8d0df] bg-white shadow-md"
              >
                {/* Card header */}
                <div className="border-b border-[#f8d0df] bg-gradient-to-r from-[#fdf2f6] to-white px-6 pb-5 pt-6">
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#f8d0df] bg-[#fbe6ee] text-[#970747]">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {card.title}
                      </h3>
                      <p
                        lang="te"
                        className="mt-0.5 text-sm font-semibold text-[#970747]"
                      >
                        {card.teluguTitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Numbered steps */}
                <ol className="space-y-0 px-6 py-5" role="list">
                  {card.steps.map((step, idx) => (
                    <li
                      key={step.number}
                      className="relative flex gap-4 pb-5 last:pb-0"
                    >
                      {/* Connector line */}
                      {idx < card.steps.length - 1 && (
                        <span
                          aria-hidden
                          className="absolute left-[19px] top-8 h-[calc(100%-1.75rem)] w-px bg-[#f8d0df]"
                        />
                      )}

                      {/* Step number bubble */}
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#f8d0df] bg-[#fdf2f6] text-xs font-bold text-[#970747]">
                        {step.number}
                      </span>

                      <div className="pt-2">
                        <p className="text-sm font-bold text-slate-900">
                          {step.emphasis}
                        </p>
                        <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            );
          })}
        </div>

        {/* ── Provenance note ── */}
        <p className="mt-10 text-center text-xs font-medium text-slate-500">
          ✦ These instructions mirror the after-care notes given on our clinic&apos;s
          Telugu prescription pad. If you have questions, call us at{" "}
          <a
            href={`tel:${"+91 9121081357".replace(/\s+/g, "")}`}
            className="font-semibold text-[#970747] underline underline-offset-2 transition-colors hover:text-[#83063d]"
          >
            +91 9121081357
          </a>
          .
        </p>
      </div>
    </section>
  );
}
