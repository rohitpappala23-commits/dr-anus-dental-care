/**
 * Single source of truth for business/NAP (Name, Address, Phone) data.
 * `app/layout.tsx` metadata and the `Dentist` JSON-LD schema both read from
 * here so the two never drift out of sync — a common local-SEO bug.
 *
 * TODO before launch: replace SITE_URL with the live domain, verify
 * `address.postalCode` and `geo` coordinates against Google Maps, and fill
 * in `sameAs`.
 */

export const SITE_URL = "https://www.dranusdentalcare.in";

export const BUSINESS = {
  name: "Dr. Anu's Dental Care",
  subtitle: "A Multispeciality Centre",
  tagline: "Dentist in PM Palem, Visakhapatnam",
  description:
    "Dr. Anu's Dental Care is a modern dental clinic in PM Palem, Visakhapatnam offering root canal treatment, dental implants, braces & Invisalign, teeth whitening, and pediatric dentistry.",
  url: SITE_URL,
  email: "anus02dental@gmail.com",
  telephone: ["+91 9121081357", "+91 7306999111"] as const,
  whatsappUrl: "https://wa.me/919121081357",
  // Compact variant for the TopBar — the full address (with "Near Last Bus
  // Stop") lives below and is what the JSON-LD/Footer use.
  shortAddress: "Surya Medicare, Bobby NKM Apt, PM Palem, Visakhapatnam",
  // Even shorter variant for the hero showcase card's contact snippet.
  quickLocation: "Surya Medicare, Near Last Bus Stop",
  address: {
    streetAddress: "Surya Medicare, Bobby NKM Apartment, Near Last Bus Stop",
    addressLocality: "PM Palem",
    addressRegion: "Andhra Pradesh",
    // TODO: verify exact PIN code for this stretch of PM Palem.
    postalCode: "530041",
    addressCountry: "IN",
  },
  // TODO: verify against the clinic's exact Google Maps pin.
  geo: {
    latitude: 17.7716,
    longitude: 83.3238,
  },
  hours: [
    {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ] as const,
      opens: "09:00",
      closes: "21:00",
    },
    {
      days: ["Sunday"] as const,
      opens: "09:00",
      closes: "13:00",
    },
  ],
  hoursDisplay: [
    { label: "Mon – Sat", value: "9:00 AM – 9:00 PM" },
    { label: "Sunday", value: "9:00 AM – 1:00 PM" },
  ],
  // Compact variant for the TopBar's single-line "Mon–Sat: … | Sun: …" string.
  hoursCompact: [
    { label: "Mon–Sat", value: "9:00 AM – 9:00 PM" },
    { label: "Sun", value: "9:00 AM – 1:00 PM" },
  ],
  priceRange: "₹₹",
  // Add live profiles as they go live (Google Business Profile, Instagram, Facebook…).
  sameAs: [] as string[],
} as const;

// Shared "get directions" link, built from the geo coordinates above — used
// by both the Dentist JSON-LD (`hasMap`) and LocationSection's CTA button.
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${BUSINESS.geo.latitude},${BUSINESS.geo.longitude}`;

export const DOCTOR = {
  name: "Dr. P. Anusha",
  displayName: "Dr. P. ANUSHA",
  credentials: "BDS, FAGE (Manipal)",
  role: "Dental Surgeon & Multispeciality Consultancy",
  registrationNumber: "A15265",
  // Precomposed so the hero badge's exact copy can't drift from the parts above.
  credentialBadge: "Led by Dr. P. ANUSHA — BDS, FAGE (Manipal) | Reg. No: A15265",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

/** Non-Services top-level nav links, in display order. */
export const NAV_LINKS: NavLink[] = [
  { label: "About Dr. Anusha", href: "/about" },
  { label: "Patient Care Tips", href: "/patient-care-tips" },
  { label: "Timings & Location", href: "/location" },
];

export type ServiceCategoryIcon =
  | "sparkles"
  | "align-center"
  | "wrench"
  | "syringe"
  | "baby";

export type ServiceCategory = {
  title: string;
  href: string;
  icon: ServiceCategoryIcon;
  items: NavLink[];
};

/** Services mega-menu, grouped by category. Icon keys are mapped to lucide
 * components where they're rendered (Navbar.tsx) — kept as plain strings
 * here so this data file stays framework-agnostic. */
export const SERVICE_MENU: ServiceCategory[] = [
  {
    title: "Cosmetic & Smile",
    href: "/services/cosmetic-smile",
    icon: "sparkles",
    items: [
      { label: "Teeth Whitening", href: "/services/teeth-whitening" },
      { label: "Smile Designing", href: "/services/smile-designing" },
      { label: "Tooth Jewellery", href: "/services/tooth-jewellery" },
      {
        label: "Cosmetic Dental Treatment",
        href: "/services/cosmetic-dental-treatment",
      },
    ],
  },
  {
    title: "Orthodontics",
    href: "/services/orthodontics",
    icon: "align-center",
    items: [
      { label: "Clear Aligners", href: "/services/clear-aligners" },
      { label: "Braces", href: "/services/braces" },
    ],
  },
  {
    title: "Restorative & Implants",
    href: "/services/restorative-implants",
    icon: "wrench",
    items: [
      { label: "Dental Implants", href: "/services/dental-implants" },
      {
        label: "Root Canal Treatment",
        href: "/services/root-canal-treatment",
      },
      { label: "Dentures", href: "/services/dentures" },
      { label: "Fillings", href: "/services/fillings" },
    ],
  },
  {
    title: "Oral Surgery & Periodontics",
    href: "/services/oral-surgery-periodontics",
    icon: "syringe",
    items: [
      { label: "Oral Surgery", href: "/services/oral-surgery" },
      { label: "Gum Surgeries", href: "/services/gum-surgeries" },
    ],
  },
  {
    title: "Pediatric & Preventive",
    href: "/services/pediatric-preventive",
    icon: "baby",
    items: [
      { label: "Child Dentistry", href: "/services/child-dentistry" },
      { label: "Teeth Cleaning", href: "/services/teeth-cleaning" },
    ],
  },
];
