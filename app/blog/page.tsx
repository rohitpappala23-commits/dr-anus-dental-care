import type { Metadata } from "next";
import { BlogClient } from "./BlogClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dental Implants in Madhurawada — Lifetime Solution for Missing Teeth | Dr. Anu's Dental Care",
  description:
    "Evidence-based clinical guide on dental implants in Madhurawada by Dr. P. Anusha (BDS, FAGE - Manipal). Learn about osseointegration, anatomy, procedure recovery, and costs.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: `${SITE_URL}/blog`,
    title: "Dental Implants in Madhurawada | Dr. Anu's Dental Care",
    description:
      "Evidence-based dental insights and patient guides by Dr. P. Anusha at Dr. Anu's Dental Care, Madhurawada, Visakhapatnam.",
    images: [
      {
        url: `${SITE_URL}/blog/dental-implants-clinic.jpg`,
        width: 1200,
        height: 630,
        alt: "Dental Implants at Dr. Anu's Dental Care",
      },
    ],
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
