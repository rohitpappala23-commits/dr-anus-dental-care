import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarCheck,
  CheckCircle2,
  Phone,
  Sparkles,
  AlignCenter,
  Wrench,
  Syringe,
  Baby,
  type LucideIcon,
} from "lucide-react";
import { SERVICE_MENU, BUSINESS, SITE_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";

/* ── Icon map ── */
const ICON_MAP: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  "align-center": AlignCenter,
  wrench: Wrench,
  syringe: Syringe,
  baby: Baby,
};

/* ── Build a flat lookup: slug → { kind, category, item? } ── */
type RouteInfo =
  | { kind: "category"; category: (typeof SERVICE_MENU)[number] }
  | {
      kind: "item";
      category: (typeof SERVICE_MENU)[number];
      item: { label: string; href: string };
    };

function buildRouteMap(): Map<string, RouteInfo> {
  const map = new Map<string, RouteInfo>();

  for (const cat of SERVICE_MENU) {
    const catSlug = cat.href.replace("/services/", "");
    map.set(catSlug, { kind: "category", category: cat });

    for (const item of cat.items) {
      const itemSlug = item.href.replace("/services/", "");
      map.set(itemSlug, { kind: "item", category: cat, item });
    }
  }

  return map;
}

const ROUTE_MAP = buildRouteMap();

/* ── Static params for build ── */
export function generateStaticParams() {
  return Array.from(ROUTE_MAP.keys()).map((slug) => ({ slug }));
}

/* ── Per-page metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = ROUTE_MAP.get(slug);
  if (!route) return {};

  const title =
    route.kind === "category"
      ? `${route.category.title} | Dr. Anu's Dental Care`
      : `${route.item.label} in PM Palem, Visakhapatnam | Dr. Anu's Dental Care`;

  const description =
    route.kind === "category"
      ? `${route.category.title} services at Dr. Anu's Dental Care, PM Palem, Visakhapatnam. Led by Dr. P. Anusha — BDS, FAGE (Manipal).`
      : `${route.item.label} at Dr. Anu's Dental Care, PM Palem, Visakhapatnam. Gentle, pain-free treatment by Dr. P. Anusha — BDS, FAGE (Manipal). Call +91 9121081357.`;

  return {
    title,
    description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/services/${slug}`,
    },
  };
}

/* ── Page component ── */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = ROUTE_MAP.get(slug);
  if (!route) notFound();

  const { category } = route;
  const Icon = ICON_MAP[category.icon] ?? Sparkles;

  const pageTitle =
    route.kind === "category" ? category.title : route.item.label;

  const pageDescription =
    route.kind === "category"
      ? `All ${category.title} treatments offered at Dr. Anu's Dental Care in PM Palem, Visakhapatnam.`
      : `Expert ${route.item.label} at Dr. Anu's Dental Care, PM Palem — gentle, pain-free treatment by Dr. P. Anusha, BDS, FAGE (Manipal).`;

  const treatments =
    route.kind === "category"
      ? category.items
      : [{ label: route.item.label, href: `/services/${slug}` }];

  const sisterTreatments =
    route.kind === "item"
      ? category.items.filter((i) => i.href !== route.item.href)
      : [];

  const whatsappText = encodeURIComponent(
    `Hi Dr. Anu's Dental Care, I'd like to book a consultation for ${pageTitle}.`,
  );
  const whatsappHref = `${BUSINESS.whatsappUrl}?text=${whatsappText}`;
  const primaryPhoneHref = `tel:${BUSINESS.telephone[0].replace(/\s+/g, "")}`;

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3">
          <Link
            href="/"
            className="font-display text-lg font-semibold text-slate-900 transition-opacity hover:opacity-80"
          >
            Dr. Anu&apos;s{" "}
            <span className="text-[#970747]">Dental Care</span>
          </Link>
          <span className="hidden rounded-full bg-[#fdf2f6] border border-[#f8d0df] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#970747] sm:block">
            {BUSINESS.subtitle}
          </span>
          <div className="ml-auto">
            <Button href={primaryPhoneHref} variant="primary" className="text-sm">
              <Phone className="size-4" aria-hidden />
              <span className="hidden sm:inline">
                {BUSINESS.telephone[0]}
              </span>
              <span className="sm:hidden">Call Now</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="pb-16 lg:pb-0">
        {/* ── Hero band ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#fdf2f6]/40 to-white py-16 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-[#f8d0df]/30 blur-3xl"
          />
          <div className="relative mx-auto max-w-4xl px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs">
                <li>
                  <Link
                    href="/"
                    className="text-slate-600 transition-colors hover:text-[#970747]"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-slate-400" aria-hidden>
                  /
                </li>
                {route.kind === "item" && (
                  <>
                    <li>
                      <Link
                        href={category.href}
                        className="text-slate-600 transition-colors hover:text-[#970747]"
                      >
                        {category.title}
                      </Link>
                    </li>
                    <li className="text-slate-400" aria-hidden>
                      /
                    </li>
                  </>
                )}
                <li>
                  <span className="font-semibold text-[#970747]" aria-current="page">
                    {pageTitle}
                  </span>
                </li>
              </ol>
            </nav>

            {/* Icon + title */}
            <div className="flex items-start gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-[#f8d0df] bg-[#fdf2f6] text-[#970747]">
                <Icon className="size-7" aria-hidden />
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#970747]">
                  {category.title}
                </span>
                <h1 className="mt-1 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  {pageTitle}
                </h1>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                  {pageDescription}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={whatsappHref} variant="primary">
                <CalendarCheck className="size-4" aria-hidden />
                Book a Consultation
              </Button>
              <Button href={primaryPhoneHref} variant="secondary">
                <Phone className="size-4" aria-hidden />
                {BUSINESS.telephone[0]}
              </Button>
            </div>
          </div>
        </section>

        {/* ── Treatment list / details ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-xl font-semibold text-slate-900">
              {route.kind === "category"
                ? `All ${category.title} Treatments`
                : "About This Treatment"}
            </h2>

            <ul className="mt-6 space-y-4">
              {treatments.map((t) => (
                <li
                  key={t.href}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-[#970747]/[0.02] p-5"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#fdf2f6] text-[#970747]">
                    <CheckCircle2 className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{t.label}</p>
                    <p className="mt-0.5 text-sm text-slate-600">
                      Available at our Madhurawada clinic — gentle, pain-free
                      procedure by Dr. P. Anusha, BDS, FAGE (Manipal).
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Clinic info strip */}
            <div className="mt-10 rounded-2xl border border-[#f8d0df] bg-[#fdf2f6]/60 p-6">
              <p className="text-sm font-semibold text-slate-900">
                Dr. Anu&apos;s Dental Care — {BUSINESS.subtitle}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {BUSINESS.address.streetAddress},{" "}
                {BUSINESS.address.addressLocality}, Visakhapatnam{" "}
                {BUSINESS.address.postalCode}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Mon–Sat: {BUSINESS.hoursCompact[0].value} · Sun:{" "}
                {BUSINESS.hoursCompact[1].value}
              </p>
            </div>

            {/* Sister treatments cross-links */}
            {sisterTreatments.length > 0 && (
              <div className="mt-10">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#970747]">
                  Also under {category.title}
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {sisterTreatments.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="rounded-full border border-[#f8d0df] bg-[#fdf2f6] px-4 py-2 text-sm font-medium text-[#970747] transition-colors hover:bg-[#fbe6ee]"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back links */}
            <div className="mt-10 flex flex-wrap gap-3">
              {route.kind === "item" && (
                <Link
                  href={category.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#970747] transition-opacity hover:opacity-80"
                >
                  <ArrowLeft className="size-4" aria-hidden />
                  All {category.title} treatments
                </Link>
              )}
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-opacity hover:opacity-80"
              >
                <ArrowLeft className="size-4" aria-hidden />
                All services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileActionBar />
    </>
  );
}
