"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

type FAQItem = {
  id: string;
  question: string;
  /** Plain-text answer — also fed into FAQPage JSON-LD. */
  answer: string;
  showCallButtons?: boolean;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-location",
    question: "Where exactly is Dr. Anu's Dental Care located in Visakhapatnam?",
    answer: `We're located at ${BUSINESS.address.streetAddress}, ${BUSINESS.address.addressLocality}, Visakhapatnam — ${BUSINESS.address.postalCode}. The clinic is inside Surya Medicare, Bobby NKM Apartment, near the Last Bus Stop in PM Palem, and is easily reachable from Madhurawada, Rushikonda, and surrounding areas.`,
  },
  {
    id: "faq-timings",
    question: "What are the clinic timings? Do you offer evening appointments?",
    answer: `Yes — we specifically run evening slots for working professionals. We're open Monday through Saturday from ${BUSINESS.hoursCompact[0].value}, including evenings. On Sundays we're open for morning consultations from ${BUSINESS.hoursCompact[1].value}. Walk-ins are welcome subject to availability; booking ahead is recommended for evenings.`,
  },
  {
    id: "faq-rct-aligners",
    question: "Is Root Canal Treatment (RCT) painful? Do you offer Clear Aligners?",
    answer:
      "Modern RCT at our clinic is comfortable and virtually pain-free. We use a single-sitting rotary technique with effective local anaesthesia, so most patients experience only mild pressure — not pain. For teeth straightening, we offer Clear Aligners (Invisalign-style) as a discreet, removable alternative to traditional metal braces. Both procedures are handled in-house by Dr. P. Anusha.",
  },
  {
    id: "faq-emergency",
    question: "How do I book a same-day or emergency dental appointment?",
    answer: `Call us directly on ${BUSINESS.telephone[0]} or ${BUSINESS.telephone[1]}. We accommodate dental emergencies — toothache, broken tooth, lost filling, swelling — as priority appointments during clinic hours. If it's outside clinic hours, WhatsApp us and we'll advise on immediate steps.`,
    showCallButtons: true,
  },
  {
    id: "faq-children",
    question: "Do you treat young children? What does pediatric dentistry involve?",
    answer:
      "Yes. We provide gentle, fear-free dental care for children of all ages — from first check-ups through milk tooth treatments, fluoride applications, and space maintainers. Dr. Anusha uses child-friendly communication and takes extra time to make young patients comfortable. Parents are welcome in the operatory during treatment.",
  },
];

/** FAQPage schema.org JSON-LD */
function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  const json = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

/** Single accordion item with #970747 highlights */
function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-white transition-all duration-200 ${
        isOpen
          ? "border-2 border-[#970747] shadow-md"
          : "border border-slate-200 shadow-sm hover:border-[#f8d0df]"
      }`}
    >
      <button
        id={`${item.id}-trigger`}
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${item.id}-panel`}
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 cursor-pointer"
        suppressHydrationWarning
      >
        {/* Step number + question */}
        <span className="flex items-center gap-3">
          <span
            className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums transition-colors ${
              isOpen
                ? "bg-[#970747] text-white"
                : "bg-[#fdf2f6] text-[#970747]"
            }`}
            aria-hidden
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-sm font-semibold leading-snug transition-colors sm:text-base ${
              isOpen ? "text-[#970747]" : "text-slate-900 group-hover:text-[#970747]"
            }`}
          >
            {item.question}
          </span>
        </span>

        {/* Chevron */}
        <ChevronDown
          className="size-5 shrink-0 text-[#970747] transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden
        />
      </button>

      {/* Animated answer panel */}
      <div
        id={`${item.id}-panel`}
        role="region"
        aria-labelledby={`${item.id}-trigger`}
        style={{
          maxHeight: isOpen ? "600px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="px-5 pb-5 sm:px-6 pl-14">
          <div className="mb-4 h-px bg-slate-200" aria-hidden />

          <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>

          {/* Call CTAs for emergency question */}
          {item.showCallButtons && (
            <div className="mt-4 flex flex-wrap gap-3">
              {BUSINESS.telephone.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#970747] hover:bg-[#83063d] px-4 py-2 text-xs font-semibold text-white transition-colors shadow-sm"
                  aria-label={`Call ${phone}`}
                >
                  <Phone className="size-3.5" aria-hidden />
                  Call {phone}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <section
      className="py-20 lg:py-28 bg-[#970747]/[0.02]"
      aria-labelledby="faq-heading"
    >
      <FAQSchema />

      <div className="mx-auto max-w-3xl px-6">
        {/* ── Section header ── */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f8d0df] bg-[#fdf2f6] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#970747]">
            <MessageCircleQuestion className="size-3.5" aria-hidden />
            Frequently Asked Questions
          </span>

          <h2
            id="faq-heading"
            className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Your Questions, Answered
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Everything patients in PM Palem and Visakhapatnam most often ask
            us before their first visit — covering location, timings, treatments,
            and emergencies.
          </p>
        </div>

        {/* ── Accordion items ── */}
        <div
          className="mt-10 space-y-3"
          role="list"
          aria-label="Frequently asked questions"
        >
          {FAQ_ITEMS.map((item, idx) => (
            <div key={item.id} role="listitem">
              <AccordionItem
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
                index={idx}
              />
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <p className="mt-10 text-center text-sm text-slate-600">
          Still have a question?{" "}
          <a
            href={`tel:${BUSINESS.telephone[0].replace(/\s+/g, "")}`}
            className="font-semibold text-[#970747] underline underline-offset-2 transition-colors hover:text-[#83063d]"
          >
            Call us at {BUSINESS.telephone[0]}
          </a>{" "}
          — we&apos;re happy to help.
        </p>
      </div>
    </section>
  );
}
