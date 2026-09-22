"use client";

import { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { BlogSection } from "@/components/BlogSection";
import { AppointmentModal } from "@/components/AppointmentModal";

export function BlogClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <TopBar />
      <Navbar onBookClick={() => openModal()} />

      <main className="pb-20 lg:pb-0 w-full overflow-x-hidden min-h-screen">
        <BlogSection onBookClick={(service) => openModal(service)} />
      </main>

      <Footer />
      <MobileActionBar />

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        defaultTreatment={selectedService}
      />
    </>
  );
}

export default BlogClient;
