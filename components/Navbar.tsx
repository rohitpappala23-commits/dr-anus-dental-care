"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  CalendarCheck,
  Sparkles,
  AlignCenter,
  Wrench,
  Syringe,
  Baby,
  type LucideIcon,
} from "lucide-react";
import {
  BUSINESS,
  NAV_LINKS,
  SERVICE_MENU,
  type ServiceCategoryIcon,
} from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/* Map icon keys (from constants) to Lucide components. */
const CATEGORY_ICONS: Record<ServiceCategoryIcon, LucideIcon> = {
  sparkles: Sparkles,
  "align-center": AlignCenter,
  wrench: Wrench,
  syringe: Syringe,
  baby: Baby,
};

/* Unique id for the services dropdown panel — needed for aria-controls. */
const SERVICES_PANEL_ID = "services-mega-menu";

type NavbarProps = {
  /**
   * Opens the AppointmentModal. Called by both the desktop CTA and the mobile
   * drawer's CTA (the drawer closes itself before invoking this).
   */
  onBookClick: () => void;
};

/**
 * Sticky primary navigation with #970747 brand identity.
 */
export function Navbar({ onBookClick }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Desktop dropdown: close on outside click or Escape ── */
  useEffect(() => {
    if (!servicesOpen) return;

    function onPointerDown(e: PointerEvent) {
      if (!servicesRef.current?.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  /* ── Mobile drawer: lock body scroll + Escape to close ── */
  useEffect(() => {
    if (!mobileOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  function closeMobile() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  /** True when the current route is under /services */
  const isServicesActive = pathname.startsWith("/services");

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-shadow duration-200",
        scrolled ? "border-slate-200 shadow-sm" : "border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">

        {/* ── Brand ── */}
        <Link
          href="/"
          className="group flex flex-col leading-tight"
          onClick={closeMobile}
          aria-label="Dr. Anu's Dental Care — Home"
        >
          <span className="font-display text-xl font-semibold text-slate-900 transition-colors group-hover:text-[#970747]">
            Dr. Anu&apos;s{" "}
            <span className="text-[#970747]">Dental Care</span>
          </span>
          <span
            className="mt-0.5 w-fit rounded-full bg-[#fdf2f6] text-[#970747] border border-[#f8d0df] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
          >
            {BUSINESS.subtitle}
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary navigation"
        >
          {/* Services mega-menu trigger */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocus={() => setServicesOpen(true)}
            onBlur={(e) => {
              if (!servicesRef.current?.contains(e.relatedTarget as Node)) {
                setServicesOpen(false);
              }
            }}
          >
            <button
              type="button"
              id="services-trigger"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              aria-controls={SERVICES_PANEL_ID}
              suppressHydrationWarning
              className={cn(
                "group flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer",
                isServicesActive
                  ? "text-[#970747]"
                  : "text-slate-600 hover:text-[#970747]",
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "size-4 transition-transform duration-200",
                  servicesOpen && "rotate-180",
                )}
                aria-hidden
              />
              {/* Animated underline */}
              <span
                className={cn(
                  "absolute -bottom-[13px] left-0 h-[2px] rounded-full bg-[#970747] transition-all duration-200",
                  isServicesActive || servicesOpen ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100",
                )}
                aria-hidden
              />
            </button>

            {/* Mega-menu panel */}
            <div
              id={SERVICES_PANEL_ID}
              role="menu"
              aria-labelledby="services-trigger"
              aria-hidden={!servicesOpen}
              className={cn(
                "absolute left-1/2 top-full z-50 w-[660px] -translate-x-1/2 pt-3 transition-all duration-200",
                servicesOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0",
              )}
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
                {/* Panel header */}
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-[#970747]">
                  Our Services
                </p>
                <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                  {SERVICE_MENU.map((category) => {
                    const Icon = CATEGORY_ICONS[category.icon];
                    return (
                      <div key={category.title}>
                        <Link
                          href={category.href}
                          role="menuitem"
                          onClick={() => setServicesOpen(false)}
                          className="group/cat flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#970747]"
                        >
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#fdf2f6] text-[#970747] transition-colors group-hover/cat:bg-[#970747] group-hover/cat:text-white">
                            <Icon className="size-3.5" aria-hidden />
                          </span>
                          {category.title}
                        </Link>
                        <ul className="mt-2 space-y-1.5 pl-9">
                          {category.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                role="menuitem"
                                onClick={() => setServicesOpen(false)}
                                className="text-sm text-slate-500 transition-colors hover:text-[#970747]"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Flat nav links */}
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative text-sm font-medium transition-colors",
                  isActive
                    ? "text-[#970747]"
                    : "text-slate-600 hover:text-[#970747]",
                )}
              >
                {link.label}
                {/* Animated underline */}
                <span
                  className={cn(
                    "absolute -bottom-[13px] left-0 h-[2px] rounded-full bg-[#970747] transition-all duration-200",
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100",
                  )}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        {/* ── Desktop CTA + Mobile hamburger ── */}
        <div className="flex items-center gap-3">
          <Button onClick={onBookClick} className="hidden lg:inline-flex">
            <CalendarCheck className="size-4" aria-hidden />
            Book Appointment
          </Button>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-[#970747] hover:text-[#970747] lg:hidden"
            aria-haspopup="dialog"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Open navigation menu"
            suppressHydrationWarning
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ─────────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        inert={!mobileOpen}
        className="fixed inset-0 z-50 lg:hidden"
      >
        {/* Scrim */}
        <div
          aria-hidden
          onClick={closeMobile}
          className={cn(
            "absolute inset-0 bg-slate-900/50 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Drawer panel */}
        <div
          className={cn(
            "absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold text-slate-900">
                Dr. Anu&apos;s Dental Care
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#970747]">
                {BUSINESS.subtitle}
              </span>
            </div>
            <button
              type="button"
              onClick={closeMobile}
              aria-label="Close navigation menu"
              suppressHydrationWarning
              className="inline-flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-[#970747] hover:text-[#970747]"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>

          {/* Drawer body links */}
          <nav className="flex-1 px-5 py-4" aria-label="Mobile navigation">
            {/* Services accordion */}
            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              suppressHydrationWarning
              onClick={() => setMobileServicesOpen((o) => !o)}
              className={cn(
                "flex w-full items-center justify-between py-3 text-left text-sm font-semibold",
                isServicesActive ? "text-[#970747]" : "text-slate-900",
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "size-4 transition-transform duration-200",
                  mobileServicesOpen && "rotate-180",
                )}
                aria-hidden
              />
            </button>

            {mobileServicesOpen && (
              <div className="mb-2 space-y-4 rounded-xl border border-slate-200 bg-[#fdf2f6]/50 p-3">
                {SERVICE_MENU.map((category) => (
                  <div key={category.title}>
                    <Link
                      href={category.href}
                      onClick={closeMobile}
                      className="flex items-center gap-2 text-sm font-semibold text-[#970747]"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#fdf2f6] text-[#970747]">
                        {(() => {
                          const Icon = CATEGORY_ICONS[category.icon];
                          return <Icon className="size-3" aria-hidden />;
                        })()}
                      </span>
                      {category.title}
                    </Link>
                    <ul className="mt-1.5 space-y-1.5 pl-7">
                      {category.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeMobile}
                            className="text-sm text-slate-500 hover:text-[#970747]"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Flat nav links */}
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "block border-t border-slate-200 py-3 text-sm font-semibold transition-colors",
                    isActive ? "text-[#970747]" : "text-slate-900 hover:text-[#970747]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Drawer footer CTAs */}
          <div className="space-y-2 border-t border-slate-200 px-5 py-4">
            <Button
              onClick={() => {
                closeMobile();
                onBookClick();
              }}
              className="w-full"
            >
              <CalendarCheck className="size-4" aria-hidden />
              Book Appointment
            </Button>

            {BUSINESS.telephone.map((phone) => (
              <Button
                key={phone}
                href={`tel:${phone.replace(/\s+/g, "")}`}
                variant="secondary"
                className="w-full"
              >
                <Phone className="size-4" aria-hidden />
                Call {phone}
              </Button>
            ))}

            <Button
              href={BUSINESS.whatsappUrl}
              variant="secondary"
              className="w-full"
            >
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
