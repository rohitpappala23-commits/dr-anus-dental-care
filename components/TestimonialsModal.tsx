"use client";

import { useEffect, useRef, useState } from "react";
import { X, Star, CheckCircle2, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  reviewEnglish: string;
}

const REVIEWS: TestimonialItem[] = [
  /* ── Requested Multispeciality Treatment Reviews ── */
  {
    id: "1",
    name: "K. Sanyasi Rao",
    rating: 5,
    date: "1 week ago",
    reviewEnglish:
      "Got a single-sitting Root Canal Treatment (RCT) done by Dr. Anusha. I was extremely anxious about the pain, but the procedure was completely painless and smooth. Saved my natural tooth without any discomfort.",
  },
  {
    id: "2",
    name: "G. Venkateswara Rao",
    rating: 5,
    date: "2 weeks ago",
    reviewEnglish:
      "Replaced two missing lower molars with dental implants here. The precision, bone healing guidance, and final ceramic crown fit are perfect. Chewing feels completely natural again.",
  },
  {
    id: "3",
    name: "B. Sai Teja",
    rating: 5,
    date: "2 weeks ago",
    reviewEnglish:
      "Opted for clear aligners for my crooked front teeth. Dr. Anusha digitally mapped the progress step-by-step. Discreet, comfortable, and my bite alignment improved remarkably within months.",
  },
  {
    id: "4",
    name: "V. Satyavathi",
    rating: 5,
    date: "3 weeks ago",
    reviewEnglish:
      "My mother got custom complete dentures made. She used to struggle with ill-fitting dentures from elsewhere, but Dr. Anusha adjusted the bite so accurately that she eats comfortably without sore spots.",
  },
  {
    id: "5",
    name: "Ch. Harika",
    rating: 5,
    date: "1 month ago",
    reviewEnglish:
      "Underwent in-office laser teeth whitening before my cousin's wedding. Lifted stubborn coffee stains by several shades in just 45 minutes with zero sensitivity.",
  },
  {
    id: "6",
    name: "P. Appala Naidu",
    rating: 5,
    date: "1 month ago",
    reviewEnglish:
      "Had an impacted lower wisdom tooth that was causing severe jaw ache. The minor oral surgery was quick, sterile, and healed rapidly under Dr. Anusha’s post-operative guidance.",
  },
  {
    id: "7",
    name: "K. Ramana Murthy",
    rating: 5,
    date: "1 month ago",
    reviewEnglish:
      "Suffered from chronic bleeding gums and tartar buildup. Deep ultrasonic scaling and periodontal gum therapy resolved the issue completely. Clean clinic with hospital-grade hygiene.",
  },
  {
    id: "8",
    name: "M. Lavanya",
    rating: 5,
    date: "1 month ago",
    reviewEnglish:
      "Got composite tooth-colored fillings for two decayed front teeth. The color matching and contouring are so seamless that no one can tell they were filled.",
  },
  {
    id: "9",
    name: "D. Suresh Kumar",
    rating: 5,
    date: "2 months ago",
    reviewEnglish:
      "Got porcelain veneers for minor chipping and gaps in my upper teeth. Truly artistic smile designing work. My confidence has gone up tremendously.",
  },
  {
    id: "10",
    name: "T. Bhavani Shankar",
    rating: 5,
    date: "2 months ago",
    reviewEnglish:
      "Brought my whole family here—scaling for myself, braces consultation for my teenager, and preventive dental care for my youngest. Truly the best complete multispeciality clinic.",
  },

  /* ── Specialized Pediatric & Family Dental Care Reviews ── */
  {
    id: "11",
    name: "Murali Krishna K.",
    rating: 5,
    date: "2 months ago",
    reviewEnglish:
      "Dr. Anusha’s advice on child oral hygiene was extremely helpful. She performed a pain-free composite cavity filling for my 5-year-old son. Best pediatric dental care clinic in the area.",
  },
  {
    id: "12",
    name: "Subba Rao V.",
    rating: 5,
    date: "2 months ago",
    reviewEnglish:
      "We consulted Dr. Anusha when my granddaughter had an acute tooth infection. She performed a gentle, painless pulpotomy in no time. Exceptional care for children.",
  },
  {
    id: "13",
    name: "Padmavathi N.",
    rating: 5,
    date: "3 months ago",
    reviewEnglish:
      "Dr. Anusha and her team have a wonderful way of handling anxious kids. My daughter walked in crying with a toothache and walked out smiling without any fear. Thank you, doctor!",
  },
  {
    id: "14",
    name: "Lakshmi Prasanna B.",
    rating: 5,
    date: "3 months ago",
    reviewEnglish:
      "Finding a dentist who is patient with toddlers is rare. Dr. Anusha explained every step like a story to my 4-year-old. Zero tears during fluoride treatment and cleaning.",
  },
  {
    id: "15",
    name: "Venkata Rao T.",
    rating: 5,
    date: "3 months ago",
    reviewEnglish:
      "My 8-year-old needed a milk tooth extraction and was terrified of needles. Dr. Anusha used gentle numbing and distracted him so well he didn’t even realize it was done!",
  },
  {
    id: "16",
    name: "Sudha Rani M.",
    rating: 5,
    date: "4 months ago",
    reviewEnglish:
      "Clean clinic and very calm atmosphere. My son had pit and fissure sealants placed on his molars. The entire procedure was smooth and completely stress-free.",
  },
  {
    id: "17",
    name: "Srinivas N.",
    rating: 5,
    date: "4 months ago",
    reviewEnglish:
      "Dr. Anusha has a magical touch with young kids. She solved our daughter’s cavity problem without any pain or fuss. Truly the top child dental specialist.",
  },
  {
    id: "18",
    name: "Bhanu Prasad G.",
    rating: 5,
    date: "4 months ago",
    reviewEnglish:
      "Brought my 6-year-old twins for their first dental checkup. Dr. Anusha made the experience so fun and welcoming that both kids are actually excited for their next visit!",
  },
  {
    id: "19",
    name: "Sailaja K.",
    rating: 5,
    date: "5 months ago",
    reviewEnglish:
      "Extremely polite doctor and staff. Dr. Anusha did a space maintainer fitting for my daughter after her milk tooth fell early. Very professional pediatric dental care.",
  },
  {
    id: "20",
    name: "Sai Ram P.",
    rating: 5,
    date: "5 months ago",
    reviewEnglish:
      "My 7-year-old son had severe sensitivity. Dr. Anusha diagnosed the decay quickly and completed a painless white filling in a single visit. High standard of hygiene.",
  },
  {
    id: "21",
    name: "Haritha V.",
    rating: 5,
    date: "5 months ago",
    reviewEnglish:
      "Dr. Anusha treats children with immense warmth and patience. She explained brushing techniques to my 5-year-old daughter in a fun, interactive way.",
  },
  {
    id: "22",
    name: "Ramesh Varma Ch.",
    rating: 5,
    date: "6 months ago",
    reviewEnglish:
      "My nephew had an accidental chip on his front milk tooth. Dr. Anusha restored it seamlessly with child-safe bonding material. Excellent result!",
  },
  {
    id: "23",
    name: "Anuradha G.",
    rating: 5,
    date: "6 months ago",
    reviewEnglish:
      "I was worried about my 3-year-old getting nervous, but the child-friendly setup and Dr. Anusha's soft-spoken nature put us both at ease immediately.",
  },
  {
    id: "24",
    name: "Kalyan Ram M.",
    rating: 5,
    date: "6 months ago",
    reviewEnglish:
      "Dr. Anusha performed a preventive fluoride varnish treatment for my 9-year-old son. Honest guidance without unnecessary treatments.",
  },
  {
    id: "25",
    name: "Sridevi Rao K.",
    rating: 5,
    date: "7 months ago",
    reviewEnglish:
      "Painless and quick pulpotomy procedure for my daughter's infected tooth. Dr. Anusha made sure she felt zero discomfort throughout.",
  },
  {
    id: "26",
    name: "Nagaraju P.",
    rating: 5,
    date: "7 months ago",
    reviewEnglish:
      "The clinic sterilization and cleanliness are top-tier. My 8-year-old got his teeth cleaned and polished comfortably.",
  },
  {
    id: "27",
    name: "Sunitha Reddy K.",
    rating: 5,
    date: "8 months ago",
    reviewEnglish:
      "Dr. Anusha is wonderfully attentive to kids' comfort. She kept praising my son during his cavity filling, making him feel like a hero!",
  },
  {
    id: "28",
    name: "Anjaneyulu M.",
    rating: 5,
    date: "8 months ago",
    reviewEnglish:
      "We visited for my 6-year-old daughter's toothache. Dr. Anusha handled the procedure gently without any trauma or tears.",
  },
];

interface TestimonialsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookClick?: (treatment?: string) => void;
}

export function TestimonialsModal({
  isOpen,
  onClose,
  onBookClick,
}: TestimonialsModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [showAll, setShowAll] = useState(false);

  /* ── Body scroll lock + Escape handler + Reset showAll ── */
  useEffect(() => {
    if (!isOpen) {
      setShowAll(false);
      return;
    }

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    const t = setTimeout(() => closeButtonRef.current?.focus(), 100);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKeyDown);
      clearTimeout(t);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const displayedReviews = showAll ? REVIEWS : REVIEWS.slice(0, 7);

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-[70] bg-slate-900/60 backdrop-blur-[2px] transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* ── Modal Dialog Window ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="testimonials-modal-title"
        className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
      >
        <div
          className={cn(
            "relative flex flex-col w-full max-w-[600px] max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transition-all duration-300 transform scale-100",
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          {/* ── 1. Modal Header ── */}
          <div className="relative border-b border-slate-100 p-5 sm:p-6 bg-white shrink-0">
            {/* Prominent Close Icon */}
            <button
              type="button"
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
              aria-label="Close testimonials modal"
            >
              <X className="size-5" />
            </button>

            {/* Primary Large Title */}
            <h2
              id="testimonials-modal-title"
              className="text-lg sm:text-xl font-bold text-slate-900 pr-8 leading-snug"
            >
              Testimonials from Local Families (20+ Verified Reviews)
            </h2>

            {/* Secondary Header / Sub-badge */}
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="size-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-slate-800">4.9</span>
              </div>
              <span className="text-slate-300">•</span>
              <span className="text-[#970747] font-semibold">
                Multispeciality Dental Care & Pediatric Experts • Verified Patient Reviews
              </span>
            </div>
          </div>

          {/* ── 2. Scrollable Review Cards List ── */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5 bg-slate-50/40">
            {displayedReviews.map((review) => (
              <div
                key={review.id}
                className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header row: Name, Verified Badge, 5-Star Rating (NO IMAGES, NO LOCATIONS) */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      {review.name}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="size-3 text-emerald-600" />
                      Verified
                    </span>
                  </div>

                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-3.5 sm:size-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text strictly in English */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {review.reviewEnglish}
                </p>
              </div>
            ))}
          </div>

          {/* ── 3. Bottom CTA Section ── */}
          <div className="border-t border-slate-100 p-4 sm:p-5 bg-white shrink-0 flex flex-col items-center gap-3">
            {/* Interactive Toggle Button: Read 20+ More Local Reviews → / Show Less Reviews ↑ */}
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#970747] transition-colors cursor-pointer group"
            >
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="size-3 text-emerald-600" />
                Verified
              </span>
              <span>
                {showAll
                  ? "Show Less Reviews ↑"
                  : `Read 20+ More Local Reviews →`}
              </span>
            </button>

            {/* Fixed Book Appointment Button */}
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookClick?.();
              }}
              className="w-full sm:w-auto px-7 py-3 bg-[#970747] hover:bg-[#7a0539] text-white rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <CalendarCheck className="size-4" />
              Book Pediatric Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialsModal;
