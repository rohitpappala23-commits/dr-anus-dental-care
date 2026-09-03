import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { BUSINESS, SITE_URL } from "@/lib/constants";
import { DentistSchema } from "@/components/seo/DentistSchema";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600"],
});

const TITLE =
  "Dr. Anu's Dental Care | Multispeciality Dental Clinic in PM Palem, Visakhapatnam";
const DESCRIPTION =
  "Trusted multispeciality dental care in PM Palem, Visakhapatnam. Root canal treatment, dental implants, braces & Invisalign, teeth whitening, pediatric dentistry. Led by Dr. P. Anusha — BDS, FAGE (Manipal). Open Mon–Sat 9 AM–9 PM, Sun 9 AM–1 PM. Call +91 9121081357.";


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: "%s | Dr. Anu's Dental Care",
  },
  description: DESCRIPTION,
  keywords: [
    "dentist in PM Palem",
    "dentist in Visakhapatnam",
    "dental clinic PM Palem Vizag",
    "best dentist near PM Palem",
    "root canal treatment Visakhapatnam",
    "dental implants Vizag",
    "teeth whitening Visakhapatnam",
    "pediatric dentist Vizag",
    "braces and Invisalign Visakhapatnam",
  ],

  authors: [{ name: "Dr. Anu's Dental Care", url: SITE_URL }],
  creator: "Dr. Anu's Dental Care",
  publisher: "Dr. Anu's Dental Care",
  applicationName: "Dr. Anu's Dental Care",
  category: "Health",

  // Canonical URL — every page should override `alternates.canonical`
  // with its own path; this default covers the home page.
  alternates: {
    canonical: "/",
  },

  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Dr. Anu's Dental Care",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og/dr-anus-dental-care-og.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Anu's Dental Care — Dentist in PM Palem, Visakhapatnam",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og/dr-anus-dental-care-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",

  other: {
    // ---- Geo-targeting meta tags for local SEO ("Dentist in PM Palem") ----
    "geo.region": "IN-AP",
    "geo.placename": "PM Palem, Visakhapatnam",
    "geo.position": `${BUSINESS.geo.latitude};${BUSINESS.geo.longitude}`,
    ICBM: `${BUSINESS.geo.latitude}, ${BUSINESS.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#970747",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${fraunces.variable} overflow-x-hidden w-full max-w-full m-0 p-0`}>
      <body className="font-sans antialiased overflow-x-hidden w-full max-w-full m-0 p-0">
        <DentistSchema />
        {children}
      </body>
    </html>
  );
}
