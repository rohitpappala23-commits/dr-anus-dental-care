'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function HeroSection({
  onBookClick,
  onTestimonialsClick,
}: {
  onBookClick?: () => void;
  onTestimonialsClick?: () => void;
}) {
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
    <section className="relative w-full max-w-full min-h-[100dvh] flex items-center pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">

      {/* 1. VIDEO BACKGROUND LAYER — strictly matches requested container spec */}
      <div className="absolute inset-0 w-full h-full max-w-full overflow-hidden pointer-events-none -z-20">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/dental-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. CONTRAST OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-transparent backdrop-blur-[0.5px] -z-10 pointer-events-none" />

      {/* 3. FOREGROUND CONTENT — relative z-10 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-8">

        {/* Left Column: Text & Buttons */}
        <div className="flex-1 space-y-6 sm:space-y-8 w-full max-w-full">
          <div className="inline-flex items-center gap-2 max-w-full truncate text-xs sm:text-sm px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-[#970747]/15 text-[#970747] font-semibold">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#970747] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#970747]"></span>
            </span>
            <span className="truncate">Led by Dr. P. ANUSHA — BDS, FAGE (Manipal) | Reg. No: A15265</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight drop-shadow-sm break-words">
            Advanced, Gentle <br />
            <span className="text-[#970747]">Multispeciality Dental</span><br />
            Care in Madhurawada
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Comprehensive, stress-free dental treatments for every member of your family — delivered with modern technology, gentle techniques, and hospital-grade sterilization standards.
          </p>

          <div className="flex flex-col sm:flex-row w-full gap-3 pt-2 sm:pt-4">
            <button
              onClick={onBookClick}
              suppressHydrationWarning
              className="w-full sm:w-auto px-8 py-4 bg-[#970747] hover:bg-[#7a0539] text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center text-center gap-2"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book an Appointment
            </button>
            <a
              href="tel:+919121081357"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-[#970747] border-2 border-[#970747]/20 rounded-full font-semibold transition-all flex items-center justify-center text-center gap-2"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 9121081357
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 sm:pt-4">
            <span className="px-3 sm:px-4 py-2 bg-white/80 border border-[#970747]/10 rounded-full text-xs sm:text-sm text-slate-700 font-medium shadow-sm">
              🕒 Evening Hours until 9:00 PM (Mon-Sat)
            </span>
            <span className="px-3 sm:px-4 py-2 bg-white/80 border border-[#970747]/10 rounded-full text-xs sm:text-sm text-slate-700 font-medium shadow-sm">
              ✨ 14+ Specialized Dental Treatments
            </span>
            <span className="px-3 sm:px-4 py-2 bg-white/80 border border-[#970747]/10 rounded-full text-xs sm:text-sm text-slate-700 font-medium shadow-sm">
              ☀️ Sunday Morning Care
            </span>
          </div>
        </div>

        {/* Right Column: Doctor Image */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-6 lg:mt-0 flex flex-col items-center justify-center">
          {/* Avatar Container with Floating Rating Badge */}
          <div className="relative">
            {/* Rating Badge Container & Floating Tooltip */}
            <div className="absolute -top-12 -right-2 sm:-right-4 z-20 flex flex-col items-end gap-1">
              {/* Floating Helper Tooltip Badge */}
              <button
                type="button"
                onClick={onTestimonialsClick}
                aria-label="Click to view 20+ verified reviews"
                className="group inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-3 py-1 bg-white/95 backdrop-blur-md text-[#970747] shadow-md border border-[#970747]/20 rounded-full animate-bounce cursor-pointer hover:scale-105 transition-all whitespace-nowrap"
              >
                <span>✨ Click here to view reviews</span>
                <span className="text-[10px]" aria-hidden>👇</span>
              </button>

              {/* Top Rating Badge */}
              <button
                type="button"
                onClick={onTestimonialsClick}
                aria-label="View local family testimonials"
                className="bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg border border-slate-100 text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap hover:scale-105 hover:shadow-xl transition-all cursor-pointer group"
              >
                <span className="text-amber-500 group-hover:scale-110 transition-transform">⭐</span> 4.9 Rating <span className="text-slate-300">|</span>{" "}
                <span className="font-normal text-slate-500 group-hover:text-[#970747] transition-colors">Trusted by Madhurawada</span>
              </button>
            </div>

            {/* Circular Doctor Avatar Container */}
            <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-b from-pink-50 to-pink-100 flex items-center justify-center">
              {imgError ? (
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#970747] to-[#580329] text-3xl sm:text-4xl font-bold text-white">
                  PA
                </div>
              ) : (
                <Image
                  src="/dr-anusha.jpg"
                  alt="Dr. P. Anusha BDS FAGE Manipal Dental Surgeon Madhurawada Visakhapatnam"
                  fill
                  className="object-cover object-top"
                  priority
                  onError={() => setImgError(true)}
                />
              )}
            </div>
          </div>

          {/* Bottom Rectangular Location Card */}
          <div className="w-full max-w-sm sm:max-w-md mt-4 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100">
            <div className="flex items-center gap-2.5 sm:gap-3 text-slate-700 mb-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#970747] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium text-xs sm:text-sm">Surya Medicare, Near Last Bus Stop</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
              Accepting New Patients Today
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
