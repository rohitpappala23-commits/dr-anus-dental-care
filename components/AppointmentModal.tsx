"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { X, CalendarCheck, MessageCircle, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
  children: React.ReactNode;
};

function Field({ label, htmlFor, required, children }: FieldProps) {
  return (
    <div>
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
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-150 focus:border-[#970747] focus:ring-2 focus:ring-[#970747]/20 placeholder:text-slate-400";

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
  const [submitted, setSubmitted] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  /* ── Reset & focus on open ── */
  useEffect(() => {
    if (!isOpen) return;
    setName("");
    setPhone("");
    setTreatment(defaultTreatment ?? "");
    setDate("");
    setTimeSlot("");
    setSubmitted(false);
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
  const isValid =
    name.trim().length > 0 && phone.trim().replace(/\D/g, "").length >= 10;

  /* ── WhatsApp deep-link ── */
  const whatsappHref = (() => {
    const lines = [
      "Hello Dr. Anu's Dental Care 👋",
      "I'd like to book an appointment.",
      "",
      `🧑 Name: ${name || "—"}`,
      `📞 Phone: ${phone || "—"}`,
      `🦷 Treatment: ${treatment || "Not specified"}`,
      `📅 Preferred Date: ${date ? new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : "Not specified"}`,
      `🕐 Preferred Time: ${timeSlot || "Not specified"}`,
    ];
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
  })();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    setSubmitted(true);
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
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div
          className={cn(
            "relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300",
            isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-6 opacity-0 scale-95",
          )}
        >
          {/* ── Header gradient band ── */}
          {!submitted && (
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
                    Fill in your details — we&apos;ll confirm your slot shortly.
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
          )}

          <div className="px-6 py-6 sm:px-8">
            {/* ── Success state ── */}
            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full border-2 border-[#970747]/30 bg-[#fdf2f6]">
                  <CheckCircle2 className="size-8 text-[#970747]" aria-hidden />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-slate-900">
                  Request Received! 🎉
                </h2>
                <p className="mx-auto mt-2.5 max-w-xs text-sm leading-relaxed text-slate-600">
                  Thanks,{" "}
                  <strong className="text-slate-800">{name.split(" ")[0]}</strong>.
                  We&apos;ll call you at{" "}
                  <strong className="text-slate-800">{phone}</strong> shortly to
                  confirm your
                  {timeSlot
                    ? ` ${(timeSlot.split(" (")[0] ?? timeSlot).toLowerCase()}`
                    : ""}{" "}
                  appointment
                  {treatment ? ` for ${treatment}` : ""}.
                </p>
                <Button onClick={onClose} className="mt-6">
                  Done
                </Button>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-4">
                  {/* Full Name */}
                  <Field label="Full Name" htmlFor="appt-name" required>
                    <input
                      ref={firstFieldRef}
                      id="appt-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClasses}
                      placeholder="Your full name"
                      suppressHydrationWarning
                    />
                  </Field>

                  {/* Phone Number */}
                  <Field label="Phone Number" htmlFor="appt-phone" required>
                    <input
                      id="appt-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputClasses}
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

                {/* ── CTAs ── */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  {/* WhatsApp */}
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-disabled={!isValid}
                    onClick={(e) => {
                      if (!isValid) e.preventDefault();
                    }}
                    className={cn(
                      "flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-150",
                      isValid
                        ? "cursor-pointer active:brightness-90"
                        : "cursor-not-allowed opacity-40",
                    )}
                    aria-label={isValid ? "Book appointment via WhatsApp" : "Fill in required fields to book via WhatsApp"}
                  >
                    <MessageCircle className="size-4" aria-hidden />
                    Book via WhatsApp
                  </a>

                  {/* Standard submit */}
                  <button
                    type="submit"
                    disabled={!isValid}
                    className={cn(
                      "flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-150",
                      isValid
                        ? "bg-[#970747] hover:bg-[#83063d] text-white shadow-md cursor-pointer active:brightness-90"
                        : "bg-slate-200 text-slate-400 cursor-not-allowed",
                    )}
                    suppressHydrationWarning
                  >
                    <CalendarCheck className="size-4" aria-hidden />
                    Submit Request
                  </button>
                </div>

                {/* Inline validation hint */}
                {!isValid && (
                  <p className="mt-3 text-center text-xs text-slate-500" role="status" aria-live="polite">
                    Please enter your name and a valid 10-digit phone number to continue.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
