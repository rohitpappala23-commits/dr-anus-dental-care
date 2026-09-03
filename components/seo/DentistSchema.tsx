import { BUSINESS, DOCTOR, SITE_URL, MAPS_URL } from "@/lib/constants";

/**
 * Embeds schema.org `Dentist` (a `MedicalBusiness` / `LocalBusiness` subtype)
 * structured data as JSON-LD. Rendered once from the root layout so it's
 * present on every page. Reads all NAP data from `lib/constants.ts`.
 *
 * Key additions per spec:
 *  - Full clinic name including subtitle ("A Multispeciality Centre")
 *  - Both telephone numbers listed on the top-level entity
 *  - Lead doctor (Dr. P. ANUSHA) as `employee` + `medicalDirector`
 *  - Complete address including "Near Last Bus Stop" landmark
 *  - Sunday hours 9 AM – 1 PM captured in openingHoursSpecification
 */
export function DentistSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE_URL}/#dentist`,

    // ── Identity ────────────────────────────────────────────────────────────
    name: `${BUSINESS.name} (${BUSINESS.subtitle})`,
    alternateName: BUSINESS.name,
    description: BUSINESS.description,
    url: SITE_URL,
    image: [`${SITE_URL}/images/clinic-exterior.jpg`],
    logo: `${SITE_URL}/logo.png`,

    // ── Contact ─────────────────────────────────────────────────────────────
    // Both phones surfaced directly on the entity for rich-result eligibility.
    telephone: [BUSINESS.telephone[0], BUSINESS.telephone[1]],
    email: BUSINESS.email,

    // ── Address ─────────────────────────────────────────────────────────────
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.streetAddress, // incl. "Near Last Bus Stop"
      addressLocality: BUSINESS.address.addressLocality, // PM Palem
      addressRegion: BUSINESS.address.addressRegion,    // Andhra Pradesh
      postalCode: BUSINESS.address.postalCode,          // 530041
      addressCountry: BUSINESS.address.addressCountry, // IN
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    hasMap: MAPS_URL,

    // ── Hours ───────────────────────────────────────────────────────────────
    // Mon–Sat 09:00–21:00, Sunday 09:00–13:00
    openingHoursSpecification: BUSINESS.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),

    // ── Contact points (appointments + customer service) ────────────────────
    contactPoint: BUSINESS.telephone.map((phone, i) => ({
      "@type": "ContactPoint",
      telephone: phone,
      contactType: i === 0 ? "appointments" : "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu", "Hindi"],
    })),

    // ── Lead doctor ─────────────────────────────────────────────────────────
    // Surfaces Dr. P. ANUSHA as both the practitioner and medical director.
    employee: {
      "@type": "Physician",
      name: DOCTOR.displayName,           // "Dr. P. ANUSHA"
      honorificPrefix: "Dr.",
      jobTitle: DOCTOR.role,
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: DOCTOR.credentials,       // "BDS, FAGE (Manipal)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "registration",
          name: `Reg. No: ${DOCTOR.registrationNumber}`, // "A15265"
        },
      ],
      medicalSpecialty: "Dentistry",
    },
    medicalDirector: {
      "@type": "Physician",
      name: DOCTOR.displayName,
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: DOCTOR.credentials,
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "registration",
          name: `Reg. No: ${DOCTOR.registrationNumber}`,
        },
      ],
    },

    // ── Services summary ────────────────────────────────────────────────────
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Services",
      itemListElement: [
        "Root Canal Treatment",
        "Dental Implants",
        "Braces & Invisalign / Clear Aligners",
        "Teeth Whitening",
        "Smile Designing",
        "Pediatric Dentistry",
        "Gum Surgeries",
        "Oral Surgery",
        "Dentures",
        "Teeth Cleaning",
      ].map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "MedicalProcedure", name: service },
      })),
    },

    // ── Misc ────────────────────────────────────────────────────────────────
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: "INR",
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "UPI"],
    areaServed: [
      { "@type": "City", name: "Visakhapatnam" },
      { "@type": "Place", name: "PM Palem" },
      { "@type": "Place", name: "Madhurawada" },
      { "@type": "Place", name: "Rushikonda" },
    ],
    medicalSpecialty: "Dentistry",
    isAcceptingNewPatients: true,
    sameAs: BUSINESS.sameAs,
  };

  // Escape "<" so a literal "</script>" inside serialised data can't break
  // out of the tag; this payload is static/internal but it's a cheap habit.
  const json = JSON.stringify(schema, null, 0).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
