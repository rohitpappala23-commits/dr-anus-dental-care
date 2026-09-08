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
import { TestimonialsModal } from "@/components/TestimonialsModal";

/**
 * Homepage — assembles every section and manages shared modal states
 * (AppointmentModal and TestimonialsModal) so CTAs seamlessly trigger modals.
 */
export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTestimonialsOpen, setIsTestimonialsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  function openModal(service?: string) {
    setSelectedService(service);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(undefined), 350);
  }

  return (
    <>
      {/* ── Header ── */}
      <TopBar />
      <Navbar onBookClick={() => openModal()} />

      {/* ── Page body ── */}
      <main className="pb-20 lg:pb-0 w-full overflow-x-hidden">
        <HeroSection
          onBookClick={() => openModal()}
          onTestimonialsClick={() => setIsTestimonialsOpen(true)}
        />

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

      {/* ── Booking modal ── */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        defaultTreatment={selectedService}
      />

      {/* ── Testimonials modal ── */}
      <TestimonialsModal
        isOpen={isTestimonialsOpen}
        onClose={() => setIsTestimonialsOpen(false)}
        onBookClick={(treatment) => openModal(treatment)}
      />
    </>
  );
}
