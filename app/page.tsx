"use client";

import { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DoctorProfile } from "@/components/DoctorProfile";
import { PatientCareTips } from "@/components/PatientCareTips";
import { FAQSection } from "@/components/FAQSection";
import { LocationSection } from "@/components/LocationSection";
import { AppointmentModal } from "@/components/AppointmentModal";

/**
 * Homepage — assembles every section and manages the single shared
 * modal state so any CTA across the page (Navbar, Hero, ServicesSection
 * cards, mobile drawer) seamlessly opens the AppointmentModal with the
 * correct service pre-selected.
 *
 * State:
 *  - `isModalOpen`     — controls modal visibility
 *  - `selectedService` — pre-fills the "Selected Treatment" dropdown;
 *                        undefined when opened from a generic "Book" CTA
 */
export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  /**
   * Opens the modal and optionally pre-selects a treatment cluster.
   * Called by:
   *  - Navbar "Book Appointment" button  → no treatment preset
   *  - Hero "Book an Appointment" button → no treatment preset
   *  - ServicesSection card CTA          → passes the card's cluster title
   */
  function openModal(service?: string) {
    setSelectedService(service);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    // Delay clearing so the success/closing animation doesn't flicker
    setTimeout(() => setSelectedService(undefined), 350);
  }

  return (
    <>
      {/* ── Header ── */}
      <TopBar />
      <Navbar onBookClick={() => openModal()} />

      {/* ── Page body ──
          pb-16 reserves room for the fixed MobileActionBar so it never
          overlaps the last section on small screens; lg:pb-0 removes that
          reserve on desktop where the bar is hidden. */}
      <main className="pb-16 lg:pb-0">
        <HeroSection onBookClick={() => openModal()} />

        <ServicesSection
          onBookClick={(service) => openModal(service)}
        />

        <DoctorProfile />

        <PatientCareTips />

        <FAQSection />

        <LocationSection />
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Fixed mobile bottom bar ── */}
      <MobileActionBar />

      {/* ── Booking modal (z-[60] — above everything) ── */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        defaultTreatment={selectedService}
      />
    </>
  );
}
