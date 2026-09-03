import { MapPin, Phone, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

/**
 * Slim info bar shown above the Navbar on desktop only (lg:block). Not sticky
 * — it scrolls away with the page so the Navbar becomes the persistent header.
 *
 * Design: Charcoal base (#0f172a) with brand wine accents (#f8d0df / #970747).
 */
export function TopBar() {
  /** "Mon–Sat: 9:00 AM – 9:00 PM | Sun: 9:00 AM – 1:00 PM" */
  const hoursLine = BUSINESS.hoursCompact
    .map((row) => `${row.label}: ${row.value}`)
    .join("  |  ");

  /** Compute whether the clinic is currently open (local time in IST). */
  const isOpenNow = (() => {
    const now = new Date();
    const ist = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const day = ist.getDay(); // 0=Sun, 1=Mon … 6=Sat
    const mins = ist.getHours() * 60 + ist.getMinutes();

    if (day === 0) return mins >= 9 * 60 && mins < 13 * 60;   // Sun 9–13
    if (day >= 1 && day <= 6) return mins >= 9 * 60 && mins < 21 * 60; // Mon–Sat 9–21
    return false;
  })();

  return (
    <div className="hidden lg:block bg-[#0f172a] text-white border-b border-slate-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-2 text-xs">
        {/* ── Left: address + live hours ── */}
        <div className="flex items-center gap-5">
          {/* Address */}
          <span className="flex items-center gap-1.5 font-medium text-slate-300">
            <MapPin className="size-3.5 shrink-0 text-[#f8d0df]" aria-hidden />
            {BUSINESS.shortAddress}
          </span>

          {/* Hairline divider */}
          <span className="h-3.5 w-px bg-slate-700" aria-hidden />

          {/* Hours + live open badge */}
          <span className="flex items-center gap-1.5 text-slate-400">
            <Clock className="size-3.5 shrink-0 text-[#f8d0df]" aria-hidden />
            <span>{hoursLine}</span>

            {/* Animated live-status pill */}
            <span
              className={`ml-1.5 flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                isOpenNow
                  ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                  : "bg-rose-500/15 text-rose-400 border border-rose-500/30"
              }`}
              aria-label={isOpenNow ? "Currently open" : "Currently closed"}
            >
              {/* Pulsing dot */}
              <span className="relative flex size-1.5 shrink-0">
                {isOpenNow && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                )}
                <span
                  className={`relative inline-flex size-1.5 rounded-full ${
                    isOpenNow ? "bg-emerald-400" : "bg-rose-400"
                  }`}
                />
              </span>
              {isOpenNow ? "Open" : "Closed"}
            </span>
          </span>
        </div>

        {/* ── Right: clickable phone numbers ── */}
        <div className="flex items-center gap-4">
          {BUSINESS.telephone.map((phone, idx) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s+/g, "")}`}
              aria-label={`Call us at ${phone}`}
              className={`group flex items-center gap-1.5 font-semibold transition-colors ${
                idx === 0 ? "text-white hover:text-[#f8d0df]" : "text-[#f8d0df] hover:text-white"
              }`}
            >
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#970747]/30 border border-[#970747]/50 text-[#f8d0df]">
                <Phone className="size-3" aria-hidden />
              </span>
              <span className="group-hover:underline">
                {phone}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
