"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  BookOpen,
  Clock,
  ArrowRight,
  X,
  ChevronDown,
  Phone,
  CalendarCheck,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Share2,
  Check,
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface BlogSectionProps {
  /** Optional callback to open the global appointment booking modal with pre-selected treatment */
  onBookClick?: (treatment?: string) => void;
}

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Will I feel pain during the dental implant surgery?",
    answer:
      "Not at all. The procedure is performed under modern, highly effective local anesthesia that completely numbs the treated jaw area. During the 1-to-2-hour procedure, you will feel only gentle vibrations and mild pressure, never sharp pain. Post-procedure tenderness is typically mild and easily relieved with standard pain relief medication for 2 to 3 days.",
  },
  {
    question: "How long does the entire dental implant process take?",
    answer:
      "The surgical placement of the titanium implant post is usually completed in a single 1-to-2-hour session. Following placement, a natural biological healing phase called osseointegration occurs over 3 to 6 months, allowing the implant to fuse permanently with your jawbone. Once integrated, a custom-crafted porcelain or zirconia crown is securely placed, completing your lifetime restoration.",
  },
  {
    question: "What can I eat after receiving a dental implant?",
    answer:
      "For the initial 48 to 72 hours, we recommend a nourishing soft-food diet such as smoothies, yogurt, vegetable khichdi, mashed potatoes, and lukewarm broths. Avoid crunchy, hard, very spicy, or piping hot foods that could irritate the surgical site. Once osseointegration is complete and your final crown is fitted, you can eat all your favorite foods—including crunchy apples and nuts—with 100% normal bite force.",
  },
  {
    question: "How do dental implants prevent jawbone loss?",
    answer:
      "When a natural tooth root is lost, the underlying jawbone loses its natural chewing stimulation and naturally starts shrinking (resorption can deplete up to 25% of bone width within the first year). Dental implants are the only tooth replacement method that replicates natural tooth roots by transferring masticatory forces into the bone, stimulating active bone regeneration and preserving your natural facial profile.",
  },
  {
    question: "How long do dental implants actually last?",
    answer:
      "Dental implants are engineered as a lifetime solution. With standard oral hygiene—brushing twice daily, flossing around the implant crown, and attending routine 6-month dental check-ups—the medical-grade titanium fixture can last 25 years to a lifetime with a clinical success rate above 95–98%. The prosthetic crown on top may experience natural wear and can last 15 to 20+ years before routine maintenance.",
  },
];

const ADVANTAGES = [
  {
    title: "A Truly Permanent Fix",
    description:
      "Engineered with biocompatible medical titanium that fuses directly into bone. With basic oral care, implants boast a 95–98%+ lifetime success rate without needing regular replacements.",
  },
  {
    title: "Zero Damage to Surrounding Teeth",
    description:
      "Unlike traditional dental bridges which require permanent grinding down and crowning of adjacent healthy teeth, dental implants stand completely independent and conserve your natural enamel.",
  },
  {
    title: "Stops Jawbone Shrinkage",
    description:
      "The titanium post replicates a natural biological tooth root, transmitting natural chewing forces into the jaw to halt bone loss, prevent sunken cheeks, and maintain youthful facial structure.",
  },
  {
    title: "Full Natural Bite Force",
    description:
      "Restores over 90% of your original chewing power. You can confidently bite into crisp fruits, crunch nuts, and enjoy your favorite meals without slipping, clicking, or dietary restrictions.",
  },
  {
    title: "Effortless Maintenance",
    description:
      "Treated just like natural healthy teeth: brush twice a day, floss regularly, and maintain routine cleanings. No messy denture adhesives, nighttime soaking cups, or special solutions required.",
  },
];

/**
 * Modern, clinic-themed Blog / Insights section with anchor id="blogs".
 * Displays featured dental education guides and opens a rich reading modal drawer.
 */
export function BlogSection({ onBookClick }: BlogSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Lock background body scroll and listen for Escape key when modal is active
  useEffect(() => {
    if (!isModalOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  function handleShare() {
    if (typeof window !== "undefined") {
      const shareUrl = `${window.location.origin}/#blogs`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 2000);
        });
      }
    }
  }

  function handleBookConsultation() {
    setIsModalOpen(false);
    onBookClick?.("Dental Implants");
  }

  return (
    <section
      id="blogs"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-[#fdf2f6]/40 to-white scroll-mt-20 overflow-hidden"
      aria-labelledby="blog-section-heading"
    >
      {/* Subtle decorative background circles */}
      <div
        className="pointer-events-none absolute -left-48 top-1/4 -z-10 size-96 rounded-full bg-[#f8d0df]/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-48 bottom-1/4 -z-10 size-96 rounded-full bg-[#fbe6ee]/60 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* ── Section Header ── */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f8d0df] bg-[#fdf2f6] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#7A1C3C]">
            <BookOpen className="size-3.5 text-[#7A1C3C]" aria-hidden />
            Dental Insights &amp; Patient Education
          </span>

          <h2
            id="blog-section-heading"
            className="mt-4 font-display text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Expert Dental Guides &amp; Care Articles
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Evidence-based insights by Dr. P. Anusha (BDS, FAGE - Manipal) to help you make informed decisions about your oral health.
          </p>
        </div>

        {/* ── Featured Article Card ── */}
        <div className="mt-12 lg:mt-16">
          <article className="group relative overflow-hidden rounded-3xl border border-[#f8d0df] bg-white shadow-xl shadow-[#7A1C3C]/5 transition-all duration-300 hover:border-[#7A1C3C]/40 hover:shadow-2xl hover:shadow-[#7A1C3C]/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Thumbnail Container */}
              <div className="relative min-h-[260px] sm:min-h-[320px] lg:col-span-5 overflow-hidden">
                <Image
                  src="/blog/dental-implants-clinic.jpg"
                  alt="Dr. Anu providing gentle dental care at Dr. Anu's Dental Care clinic in Madhurawada"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                
                {/* Floating pill over image on mobile */}
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#7A1C3C] px-3 py-1 text-xs font-semibold text-white shadow-md lg:hidden">
                  <Clock className="size-3" aria-hidden />
                  5 min read
                </span>
              </div>

              {/* Card Content */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7 lg:p-10">
                <div>
                  {/* Category & Read Time Tags */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-medium">
                    <span className="rounded-full bg-[#fdf2f6] px-3 py-1 font-semibold text-[#7A1C3C] border border-[#f8d0df]">
                      Restorative Dentistry
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-slate-500">
                      <Clock className="size-3.5 text-[#7A1C3C]" aria-hidden />
                      5 min read
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500">
                      Dr. P. Anusha (BDS, FAGE)
                    </span>
                  </div>

                  {/* Article Title */}
                  <h3 className="mt-4 font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-900 leading-snug group-hover:text-[#7A1C3C] transition-colors">
                    Dental Implants in Madhurawada — The Lifetime Solution for Missing Teeth
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600">
                    Losing a tooth affects far more than your smile. It alters your bite, makes chewing difficult, and causes jawbone shrinkage. Discover why titanium dental implants offer a permanent, natural-looking fix.
                  </p>

                  {/* Quick Feature Badges */}
                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-medium text-slate-700">
                    <div className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5 border border-slate-100">
                      <ShieldCheck className="size-3.5 text-[#7A1C3C] shrink-0" aria-hidden />
                      <span>Permanent Anchor</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5 border border-slate-100">
                      <CheckCircle2 className="size-3.5 text-[#7A1C3C] shrink-0" aria-hidden />
                      <span>Zero Tooth Grinding</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5 border border-slate-100 col-span-2 sm:col-span-1">
                      <Sparkles className="size-3.5 text-[#7A1C3C] shrink-0" aria-hidden />
                      <span>Prevents Bone Loss</span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#fdf2f6] text-[#7A1C3C] font-semibold border border-[#f8d0df] text-sm">
                      PA
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Dr. P. Anusha</p>
                      <p className="text-[11px] text-slate-500">Dental Surgeon &amp; Implantology</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#7A1C3C] px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-white shadow-md shadow-[#7A1C3C]/20 transition-all hover:bg-[#62142e] hover:gap-3 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#7A1C3C] focus-visible:ring-offset-2 cursor-pointer"
                    aria-haspopup="dialog"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="size-4" aria-hidden />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* ── Full Article Reading Modal Drawer / Dialog ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="reading-modal-title"
        inert={!isModalOpen}
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 transition-all duration-300",
          isModalOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity duration-300",
            isModalOpen ? "opacity-100" : "opacity-0",
          )}
          aria-hidden
          onClick={() => setIsModalOpen(false)}
        />

        {/* Modal Container */}
        <div
          ref={modalContentRef}
          className={cn(
            "relative z-10 flex flex-col w-full h-full sm:h-auto sm:max-h-[85vh] sm:max-w-4xl sm:rounded-3xl bg-white shadow-2xl overflow-hidden border border-slate-200 transition-all duration-300",
            isModalOpen ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0",
          )}
        >
            {/* ── Modal Header Bar ── */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-100 bg-white/95 px-6 py-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#fdf2f6] border border-[#f8d0df] px-3 py-1 text-xs font-bold text-[#7A1C3C] uppercase tracking-wide">
                  Clinical Article
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">• 5 min read</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-[#7A1C3C] hover:text-[#7A1C3C] cursor-pointer"
                  title="Share article link"
                >
                  {copiedLink ? (
                    <>
                      <Check className="size-3.5 text-emerald-600" aria-hidden />
                      <span className="text-emerald-600 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="size-3.5" aria-hidden />
                      <span className="hidden sm:inline">Share</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-[#fdf2f6] hover:text-[#7A1C3C] cursor-pointer"
                  aria-label="Close article modal"
                >
                  <X className="size-5" aria-hidden />
                </button>
              </div>
            </div>

            {/* ── Modal Scrollable Body ── */}
            <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-10 sm:py-10 space-y-8">
              {/* 1. Hero Title & Author Bio */}
              <div>
                <h1
                  id="reading-modal-title"
                  className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight"
                >
                  Dental Implants in Madhurawada — The Lifetime Solution for Missing Teeth
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-full bg-[#fdf2f6] text-[#7A1C3C] font-bold border border-[#f8d0df]">
                      <Stethoscope className="size-4" aria-hidden />
                    </span>
                    <span className="font-semibold text-slate-800">
                      By Dr. P. Anusha (BDS, FAGE - Manipal)
                    </span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">Dr. Anu’s Dental Care, Madhurawada</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">5 min read</span>
                </div>
              </div>

              {/* 2. Featured Clinic Photo */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
                  <Image
                    src="/blog/dental-implants-clinic.jpg"
                    alt="Restorative dental treatment in action at Dr. Anu's Dental Care"
                    fill
                    sizes="(max-width: 768px) 100vw, 850px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="px-4 py-3 bg-white border-t border-slate-100">
                  <p className="text-xs sm:text-sm italic text-slate-600 text-center">
                    &ldquo;Modern restorative care with hospital-grade sterilization at Dr. Anu&apos;s Dental Care.&rdquo;
                  </p>
                </div>
              </div>

              {/* 3. Introductory Body Paragraphs & Osseointegration */}
              <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                <p className="font-medium text-slate-900 text-lg sm:text-xl">
                  Losing a tooth impacts far more than individual aesthetics—it compromises normal mastication, disturbs speech phonetics, causes unwanted shifting of adjacent teeth, and triggers permanent bone shrinkage in the jaw.
                </p>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 pt-2">
                  What Is a Dental Implant?
                </h3>
                <p>
                  A dental implant is a precision-engineered, medical-grade titanium fixture placed securely into the jawbone beneath the gumline. Unlike removable partial dentures that rest loosely on gum tissue, or traditional fixed bridges that require irreversible cutting of adjacent healthy teeth, a dental implant acts as an <strong>artificial biological tooth root</strong>.
                </p>

                <div className="my-6 rounded-2xl border border-[#f8d0df] bg-[#fdf2f6]/70 p-5 sm:p-6">
                  <h4 className="font-display text-base sm:text-lg font-bold text-[#7A1C3C] flex items-center gap-2">
                    <Sparkles className="size-5 text-[#7A1C3C]" aria-hidden />
                    The Osseointegration Timeline (3 to 6 Months)
                  </h4>
                  <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
                    The defining strength of a dental implant relies on <strong>osseointegration</strong>—a natural biological process first documented by orthopedic scientists where living human bone cells (osteoblasts) permanently fuse with the microscopic textured surface of the biocompatible titanium post. Over an uninterrupted window of <strong>3 to 6 months</strong>, the implant anchors solidly into the jawbone, creating a lifelong structural foundation identical in strength to a natural tooth root.
                  </p>
                </div>
              </div>

              {/* 4. Key Advantages List */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#7A1C3C]" />
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                    Key Advantages of Dental Implants
                  </h3>
                </div>

                <div className="grid gap-3.5 sm:gap-4">
                  {ADVANTAGES.map((adv, idx) => (
                    <div
                      key={adv.title}
                      className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 transition-colors hover:border-[#f8d0df] hover:bg-[#fdf2f6]/40"
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#7A1C3C] text-xs font-bold text-white shadow-sm mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">
                          {adv.title}
                        </h4>
                        <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                          {adv.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Procedure & Diagram Section */}
              <div className="space-y-6 pt-2">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                    Understanding the Anatomy: 3-Stage Implant Structure
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-slate-600">
                    Dental implants restore oral function by cleanly separating the tooth structure into three synergistic components:
                  </p>
                </div>

                {/* Implant Diagram Image */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 shadow-sm">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-50">
                    <Image
                      src="/blog/dental-implants-diagram.jpg"
                      alt="Detailed diagram showing dental implant components: integration titanium screw, connection abutment, and restoration crown"
                      fill
                      sizes="(max-width: 768px) 100vw, 850px"
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-100 pt-3 text-center">
                    <div className="rounded-xl bg-[#fdf2f6] p-3 border border-[#f8d0df]">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#7A1C3C]">1. Integration</p>
                      <p className="mt-1 text-xs text-slate-700 font-medium">Titanium screw fuses with living jawbone</p>
                    </div>
                    <div className="rounded-xl bg-[#fdf2f6] p-3 border border-[#f8d0df]">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#7A1C3C]">2. Connection</p>
                      <p className="mt-1 text-xs text-slate-700 font-medium">Abutment collar securely links screw to crown</p>
                    </div>
                    <div className="rounded-xl bg-[#fdf2f6] p-3 border border-[#f8d0df]">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#7A1C3C]">3. Restoration</p>
                      <p className="mt-1 text-xs text-slate-700 font-medium">Natural-looking porcelain/zirconia crown</p>
                    </div>
                  </div>
                </div>

                {/* Procedure & Aftercare Details */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
                  <h4 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="size-5 text-[#7A1C3C]" aria-hidden />
                    Gentle 1-to-2-Hour Procedure &amp; Aftercare Recovery
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Many prospective patients assume dental implant surgery is daunting, but in reality, the surgical placement is a straightforward, outpatient procedure taking approximately <strong>1 to 2 hours</strong> under highly refined, gentle local anesthesia. Patients comfortably remain conscious, feeling gentle vibration without sharp discomfort.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    <strong>Recovery Expectations:</strong> Post-operative recovery is smooth. Any localized tenderness is easily alleviated with prescribed mild analgesics over 2 to 3 days. Most patients resume office work or daily activities within 24 to 48 hours. By adhering to a soft-food diet and gentle saline rinses during the first week, tissue heals cleanly with zero disruption.
                  </p>
                </div>
              </div>

              {/* 6. Interactive FAQ Accordion */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#7A1C3C]" />
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                    Frequently Asked Questions
                  </h3>
                </div>

                <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white overflow-hidden">
                  {FAQ_ITEMS.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div key={faq.question} className="transition-colors">
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left font-semibold text-slate-900 transition-colors hover:text-[#7A1C3C] cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span className="text-sm sm:text-base pr-2">{faq.question}</span>
                          <span
                            className={cn(
                              "flex size-7 shrink-0 items-center justify-center rounded-full bg-[#fdf2f6] text-[#7A1C3C] transition-transform duration-200",
                              isOpen && "rotate-180 bg-[#7A1C3C] text-white"
                            )}
                          >
                            <ChevronDown className="size-4" aria-hidden />
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6 text-sm sm:text-base leading-relaxed text-slate-600 bg-[#fdf2f6]/30">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 7. Footer Call To Action Box */}
              <div className="mt-8 rounded-3xl border border-[#83063d] bg-gradient-to-br from-[#7A1C3C] via-[#62142e] to-[#4c0e22] p-6 sm:p-8 text-white shadow-xl">
                <div className="text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
                  <div className="max-w-xl">
                    <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#f8d0df]">
                      Personalized Implant Consultation
                    </span>
                    <h3 className="mt-2 font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                      Ready to Restore Your Confident Smile?
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed">
                      Consult with Dr. P. Anusha at Dr. Anu&apos;s Dental Care in Madhurawada to assess your bone density and plan your customized implant roadmap.
                    </p>

                    <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm font-semibold text-[#f8d0df]">
                      <a
                        href={`tel:${BUSINESS.telephone[0].replace(/\s+/g, "")}`}
                        className="flex items-center gap-1.5 hover:text-white transition-colors"
                      >
                        <Phone className="size-4" aria-hidden />
                        <span>+91 9121081357</span>
                      </a>
                      <span>•</span>
                      <a
                        href={`tel:${BUSINESS.telephone[1].replace(/\s+/g, "")}`}
                        className="flex items-center gap-1.5 hover:text-white transition-colors"
                      >
                        <Phone className="size-4" aria-hidden />
                        <span>+91 7306999111</span>
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-0 shrink-0">
                    <button
                      type="button"
                      onClick={handleBookConsultation}
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#7A1C3C] shadow-lg transition-all hover:bg-[#fdf2f6] hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <CalendarCheck className="size-4 text-[#7A1C3C]" aria-hidden />
                      <span>Book Consultation</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Modal Sticky Footer Bar ── */}
            <div className="border-t border-slate-200 bg-slate-50 px-6 py-3.5 flex items-center justify-between shrink-0">
              <span className="text-xs text-slate-500 hidden sm:inline">
                Dr. Anu&apos;s Dental Care • Madhurawada, Visakhapatnam
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleBookConsultation}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#7A1C3C] px-5 py-2 text-xs font-bold text-white hover:bg-[#62142e] transition-colors cursor-pointer shadow-sm"
                >
                  <CalendarCheck className="size-3.5" aria-hidden />
                  Book Implant Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default BlogSection;
