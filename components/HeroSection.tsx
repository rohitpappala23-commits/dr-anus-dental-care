'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function HeroSection({ onBookClick }: { onBookClick?: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    // Programmatic play — bypasses strict browser autoplay restrictions
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => console.log('Video autoplay blocked:', err));
    }
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">

      {/* 1. VIDEO BACKGROUND — sits at -z-20, fills the entire section */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/dental-bg.mp4" type="video/mp4" />
      </video>

      {/* 2. CONTRAST OVERLAY — reduced tint so the video details are clearly visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-transparent backdrop-blur-[0.5px] -z-10" />

      {/* 3. FOREGROUND CONTENT — relative z-10 */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col lg:flex-row items-center gap-10 lg:gap-8">

        {/* Left Column: Text & Buttons */}
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-[#970747]/15 text-[#970747] text-sm font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#970747] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#970747]"></span>
            </span>
            Led by Dr. P. ANUSHA — BDS, FAGE (Manipal) | Reg. No: A15265
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight drop-shadow-sm">
            Advanced, Gentle <br />
            <span className="text-[#970747]">Multispeciality Dental</span><br />
            Care in PM Palem
          </h1>

          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            Comprehensive, stress-free dental treatments for every member of your family — delivered with modern technology, gentle techniques, and hospital-grade sterilization standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full sm:w-auto">
            <button
              onClick={onBookClick}
              suppressHydrationWarning
              className="w-full sm:w-auto px-8 py-4 bg-[#970747] hover:bg-[#7a0539] text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book an Appointment
            </button>
            <a
              href="tel:+919121081357"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-[#970747] border-2 border-[#970747]/20 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 9121081357
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            <span className="px-4 py-2 bg-white/80 border border-[#970747]/10 rounded-full text-sm text-slate-700 font-medium shadow-sm">
              🕒 Evening Hours until 9:00 PM (Mon-Sat)
            </span>
            <span className="px-4 py-2 bg-white/80 border border-[#970747]/10 rounded-full text-sm text-slate-700 font-medium shadow-sm">
              ✨ 14+ Specialized Dental Treatments
            </span>
            <span className="px-4 py-2 bg-white/80 border border-[#970747]/10 rounded-full text-sm text-slate-700 font-medium shadow-sm">
              ☀️ Sunday Morning Care
            </span>
          </div>
        </div>

        {/* Right Column: Doctor Image Card */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
          <div className="absolute -top-6 -right-6 bg-white px-4 py-2 rounded-full shadow-lg border border-slate-100 z-20 text-sm font-bold text-slate-700 flex items-center gap-2">
            ⭐ 4.9 Rating <span className="text-slate-300">|</span>{" "}
            <span className="font-normal text-slate-500">Trusted by PM Palem</span>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-slate-100 relative">
            <div className="aspect-square relative rounded-full overflow-hidden border-8 border-[#970747]/10 w-3/4 mx-auto mb-6">
              {imgError ? (
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#970747] to-[#580329] text-4xl font-bold text-white">
                  PA
                </div>
              ) : (
                <Image
                  src="/dr-anusha.jpg"
                  alt="Dr. P. Anusha BDS FAGE Manipal Dental Surgeon PM Palem Visakhapatnam"
                  fill
                  className="object-cover object-top"
                  priority
                  onError={() => setImgError(true)}
                />
              )}
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="flex items-center gap-3 text-slate-700 mb-2">
                <svg className="w-5 h-5 text-[#970747] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium text-sm">Surya Medicare, Near Last Bus Stop</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Accepting New Patients Today
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
