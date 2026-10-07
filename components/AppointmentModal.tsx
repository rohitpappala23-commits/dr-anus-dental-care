"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { X, MessageCircle, ChevronDown } from "lucide-react";
import { SERVICE_MENU } from "@/lib/constants";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "919121081357";
const TIME_SLOTS = ["Morning (9 AM – 1 PM)", "Evening (4 PM – 9 PM)"] as const;
type TimeSlot = (typeof TIME_SLOTS)[number];

type AppointmentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  /** Pre-selects the treatment dropdown when opened from a card. */
  defaultTreatment?: string;
};

type FieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, htmlFor, required, error, children }: FieldProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={htmlFor}
          className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
        >
          {label}
          {required && (
            <span className="ml-1 text-[#970747]" aria-hidden>
              *
            </span>
          )}
        </label>
        {error && (
          <span className="text-xs font-medium text-rose-600" role="alert">
            {error}
          </span>
        )}
      </div>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-base text-slate-900 outline-none transition-all duration-150 focus:border-[#970747] focus:ring-2 focus:ring-[#970747]/20 placeholder:text-slate-400";

export function AppointmentModal({
  isOpen,
  onClose,
  defaultTreatment,
}: AppointmentModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState(defaultTreatment ?? "");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState<TimeSlot | "">("");
  const [hasAttempted, setHasAttempted] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  /* ── Reset & focus on open ── */
  useEffect(() => {
    if (!isOpen) return;
    setName("");
    setPhone("");
    setTreatment(defaultTreatment ?? "");
    setDate("");
    setTimeSlot("");
    setHasAttempted(false);
    const t = setTimeout(() => firstFieldRef.current?.focus(), 80);
    return () => clearTimeout(t);
  }, [isOpen, defaultTreatment]);

  /* ── Body scroll lock + Escape to close ── */
  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  /* ── Validation ── */
  const isNameValid = name.trim().length > 0;
  const isPhoneValid = phone.trim().replace(/\D/g, "").length >= 10;
  const isValid = isNameValid && isPhoneValid;

  /* ── Date formatting helper ── */
  const formattedDate = (() => {
    if (!date) return "Not specified";
    const parts = date.split("-").map(Number);
    if (parts.length === 3 && parts[0] && parts[1] && parts[2]) {
      const d = new Date(parts[0], parts[1] - 1, parts[2]);
      return d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }
    return date;
  })();

  /* ── WhatsApp deep-link ── */
  const whatsappHref = (() => {
    const lines = [
      "Hello Dr. Anu's Dental Care 👋",
      "I'd like to book an appointment.",
      "",
      `🧑 Name: ${name.trim() || "—"}`,
      `📞 Phone: ${phone.trim() || "—"}`,
      `🦷 Treatment: ${treatment || "Not specified"}`,
      `📅 Preferred Date: ${formattedDate}`,
      `🕐 Preferred Time: ${timeSlot || "Not specified"}`,
    ];
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
  })();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid) {
      setHasAttempted(true);
      if (!isNameValid) {
        firstFieldRef.current?.focus();
      }
      return;
    }
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  }

  const todayISO = new Date().toISOString().slice(0, 10);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-modal-title"
      inert={!isOpen}
      className="fixed inset-0 z-[60]"
    >
      {/* ── Backdrop ── */}
      <div
        aria-hidden
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-slate-900/60 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0",
        )}
      />

      {/* ── Modal container ── */}
      <div className="fixed inset-0 flex items-center justify-center px-4 py-6">
        <div
          className={cn(
            "relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300",
            isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-6 opacity-0 scale-95",
          )}
        >
          {/* ── Header gradient band ── */}
          <div className="border-b border-slate-200 bg-gradient-to-r from-[#fdf2f6] to-white px-6 py-5 sm:px-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="appointment-modal-title"
                  className="font-display text-xl font-semibold text-slate-900"
                >
                  Book an Appointment
                </h2>
                <p className="mt-0.5 text-sm text-slate-600">
                  Fill in your details to book instantly via WhatsApp.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close booking modal"
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-white hover:text-slate-900 cursor-pointer"
                suppressHydrationWarning
              >
                <X className="size-4" aria-hidden />
              </button>
            </div>
          </div>

          <div className="px-6 py-6 sm:px-8">
            {/* ── Form ── */}
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                {/* Full Name */}
                <Field
                  label="Full Name"
                  htmlFor="appt-name"
                  required
                  error={
                    hasAttempted && !isNameValid
                      ? "Name is required"
                      : undefined
                  }
                >
                  <input
                    ref={firstFieldRef}
                    id="appt-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={cn(
                      inputClasses,
                      hasAttempted && !isNameValid && "border-rose-400 focus:border-rose-500 focus:ring-rose-200",
                    )}
                    placeholder="Your full name"
                    suppressHydrationWarning
                  />
                </Field>

                {/* Phone Number */}
                <Field
                  label="Phone Number"
                  htmlFor="appt-phone"
                  required
                  error={
                    hasAttempted && !isPhoneValid
                      ? "Valid 10-digit phone required"
                      : undefined
                  }
                >
                  <input
                    id="appt-phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={cn(
                      inputClasses,
                      hasAttempted && !isPhoneValid && "border-rose-400 focus:border-rose-500 focus:ring-rose-200",
                    )}
                    placeholder="+91 XXXXX XXXXX"
                    suppressHydrationWarning
                  />
                </Field>

                {/* Selected Treatment */}
                <Field label="Selected Treatment" htmlFor="appt-treatment">
                  <div className="relative">
                    <select
                      id="appt-treatment"
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className={cn(inputClasses, "cursor-pointer appearance-none pr-10")}
                      suppressHydrationWarning
                    >
                      <option value="">Select a treatment or service</option>
                      {treatment &&
                        !SERVICE_MENU.some((c) =>
                          c.items.some((i) => i.label === treatment)
                        ) &&
                        treatment !== "General Consultation" && (
                          <option value={treatment}>{treatment}</option>
                        )}
                      {SERVICE_MENU.map((category) => (
                        <optgroup key={category.title} label={category.title}>
                          {category.items.map((item) => (
                            <option key={item.href} value={item.label}>
                              {item.label}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                      <option value="General Consultation">
                        General Consultation / Not Sure
                      </option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" aria-hidden />
                  </div>
                </Field>

                {/* Date + Time Slot */}
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Preferred Date" htmlFor="appt-date">
                    <input
                      id="appt-date"
                      type="date"
                      min={todayISO}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className={inputClasses}
                      suppressHydrationWarning
                    />
                  </Field>

                  <Field
                    label="Preferred Time"
                    htmlFor="appt-time-morning"
                  >
                    <div className="flex flex-col gap-2">
                      {TIME_SLOTS.map((slot, i) => (
                        <label key={slot} className="relative block">
                          <input
                            id={
                              i === 0
                                ? "appt-time-morning"
                                : "appt-time-evening"
                            }
                            type="radio"
                            name="timeSlot"
                            value={slot}
                            checked={timeSlot === slot}
                            onChange={() => setTimeSlot(slot)}
                            className="peer sr-only"
                            suppressHydrationWarning
                          />
                          <span
                            className={cn(
                              "flex cursor-pointer items-center justify-center rounded-xl border px-2 py-2.5 text-center text-xs font-medium transition-all duration-150",
                              timeSlot === slot
                                ? "bg-[#fdf2f6] border-[#970747] text-[#970747] font-semibold"
                                : "bg-white border-slate-200 text-slate-600 hover:border-[#f8d0df]",
                            )}
                          >
                            {slot.split(" (")[0]}
                          </span>
                        </label>
                      ))}
                    </div>
                  </Field>
                </div>
              </div>

              {/* ── WhatsApp Action Area (Sole prominent CTA) ── */}
              <div className="mt-6 space-y-3">
                <a
                  href={isValid ? whatsappHref : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                  aria-disabled={!isValid}
                  onClick={(e) => {
                    if (!isValid) {
                      e.preventDefault();
                      setHasAttempted(true);
                      if (!isNameValid) {
                        firstFieldRef.current?.focus();
                      }
                    }
                  }}
                  className={cn(
                    "group flex w-full items-center justify-center gap-2.5 rounded-full py-3.5 px-6 text-base font-semibold text-white shadow-md transition-all duration-200 select-none",
                    isValid
                      ? "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-emerald-600/30 hover:shadow-lg hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                      : "bg-slate-300 text-slate-500 cursor-not-allowed shadow-none",
                  )}
                  aria-label={
                    isValid
                      ? "Book appointment via WhatsApp"
                      : "Fill in name and phone number to book via WhatsApp"
                  }
                >
                  <MessageCircle className="size-5 shrink-0 transition-transform group-hover:scale-110" aria-hidden />
                  <span>Book via WhatsApp</span>
                </a>

                <p className="text-center text-xs text-slate-500">
                  {isValid ? (
                    <span className="inline-flex items-center justify-center gap-1.5 text-emerald-700 font-medium">
                      <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                      Opens WhatsApp directly with your pre-filled appointment details
                    </span>
                  ) : (
                    "Please enter your name and 10-digit phone number to continue"
                  )}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentModal;
