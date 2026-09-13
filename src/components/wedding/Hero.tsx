"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";
import { MapPin, Calendar } from "lucide-react";

const realCouplePhotos = [
  "/img/6.jpg",
  "/img/1.JPEG",
  "/img/2.PNG",
  "/img/4.PNG",
  "/img/5.JPG",
];

export const Hero: React.FC = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Auto-switch photos every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % realCouplePhotos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % realCouplePhotos.length);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-between py-8 sm:py-14 px-4 overflow-hidden bg-[#FAF5ED] select-none">
      {/* 1. EMBOSSED DAMASK WALLPAPER BACKGROUND */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none opacity-85"
        style={{ backgroundImage: "url('/img/damask_background.png')" }}
      />

      {/* Subtle Vignette Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(107, 13, 24, 0.08) 100%)"
        }}
      />

      {/* 2. REAL FLOATING VELVET ROSES (True Transparent PNG) */}
      {/* Top Left Real Rose */}
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [-4, 4, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -left-4 w-28 sm:w-40 h-28 sm:h-40 pointer-events-none z-10 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
      >
        <img 
          src="/img/red_rose_transparent.png" 
          alt="Real Velvet Red Rose" 
          className="w-full h-full object-contain" 
        />
      </motion.div>

      {/* Top Right Real Rose */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [4, -4, 4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -top-2 -right-4 w-28 sm:w-40 h-28 sm:h-40 pointer-events-none z-10 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
      >
        <img 
          src="/img/red_rose_transparent.png" 
          alt="Real Velvet Red Rose" 
          className="w-full h-full object-contain transform scale-x-[-1]" 
        />
      </motion.div>

      {/* Right Middle Real Rose */}
      <motion.div
        animate={{ y: [0, -5, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 -right-6 w-24 sm:w-36 h-24 sm:h-36 pointer-events-none z-10 filter drop-shadow-md opacity-90"
      >
        <img 
          src="/img/red_rose_transparent.png" 
          alt="Real Velvet Red Rose" 
          className="w-full h-full object-contain" 
        />
      </motion.div>

      {/* 3. ANIMATED GOLDEN INTERLOCKED WEDDING RINGS (Center Top) */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: [0, -6, 0], scale: [1, 1.04, 1] }}
        transition={{ 
          opacity: { duration: 0.8 },
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="z-20 mt-2 sm:mt-4 flex flex-col items-center filter drop-shadow-[0_4px_12px_rgba(212,175,55,0.6)]"
      >
        <svg width="68" height="50" viewBox="0 0 100 70" className="w-14 sm:w-18 h-auto overflow-visible">
          <defs>
            <linearGradient id="ringGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2D4" />
              <stop offset="35%" stopColor="#F5E5C0" />
              <stop offset="70%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#9E7D3B" />
            </linearGradient>
          </defs>

          {/* Left Ring */}
          <ellipse
            cx="38"
            cy="35"
            rx="22"
            ry="18"
            fill="none"
            stroke="url(#ringGoldGrad)"
            strokeWidth="5.5"
          />
          
          {/* Right Ring */}
          <ellipse
            cx="62"
            cy="35"
            rx="22"
            ry="18"
            fill="none"
            stroke="url(#ringGoldGrad)"
            strokeWidth="5.5"
          />

          {/* Overlap */}
          <path
            d="M 44 21 A 22 18 0 0 1 54 35"
            fill="none"
            stroke="url(#ringGoldGrad)"
            strokeWidth="5.5"
          />

          {/* Glint Star */}
          <path
            d="M 38 17 L 40 22 L 45 24 L 40 26 L 38 31 L 36 26 L 31 24 L 36 22 Z"
            fill="#FFFFFF"
          />
        </svg>
      </motion.div>

      {/* 4. MAIN HEADER & COUPLE NAMES */}
      <div className="z-20 max-w-xl text-center flex flex-col items-center px-4 mt-1 sm:mt-2">
        {/* Khmer Ceremony Header Title */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{ fontFamily: "var(--font-moul), 'Moul', 'Noto Serif Khmer', serif" }}
          className="text-[#6B0D18] text-xs sm:text-sm md:text-base tracking-wider uppercase font-medium drop-shadow-sm mb-1 sm:mb-2"
        >
          {weddingConfig.wedding.title}
        </motion.p>

        {/* Cursive English Script Names (Groom First) */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ fontFamily: "'Great Vibes', 'Alex Brush', cursive, serif" }}
          className="text-4xl sm:text-5xl md:text-6xl text-[#6B0D18] font-normal tracking-wide drop-shadow-md"
        >
          Sarah &amp; Kimlen
        </motion.h2>

        {/* Formal Khmer Couple Names (Groom First) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="my-2 space-y-0.5"
        >
          <h1 
            style={{ fontFamily: "var(--font-noto-serif-khmer), 'Noto Serif Khmer', 'Battambang', serif" }}
            className="text-xl sm:text-2xl md:text-3xl text-[#6B0D18] font-extrabold tracking-wide drop-shadow-sm"
          >
            {weddingConfig.couple.groom.fullName} &amp; {weddingConfig.couple.bride.fullName}
          </h1>
        </motion.div>
      </div>

      {/* 5. IMPRESSIVE DYNAMIC REAL COUPLE PHOTO SWITCHER FRAME */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        onClick={handleNextPhoto}
        className="z-20 relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] aspect-[4/5] my-4 cursor-pointer group"
      >
        {/* Soft Glow Shadow Under Frame */}
        <div className="absolute inset-0 rounded-t-[100px] rounded-b-3xl bg-[#6B0D18]/25 blur-xl transform translate-y-4 scale-95" />

        {/* Arched Gold Frame Outer */}
        <div className="relative w-full h-full rounded-t-[100px] rounded-b-3xl border-4 border-[#D4AF37] p-2 bg-gradient-to-b from-[#FAF5ED] via-white to-[#FAF5ED] shadow-[0_20px_50px_rgba(107,13,24,0.3)] flex flex-col items-center justify-between overflow-hidden">
          
          {/* Inner Photo Display Box with AnimatePresence Switching */}
          <div className="relative w-full h-full rounded-t-[90px] rounded-b-2xl overflow-hidden bg-[#2D060B]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentPhotoIndex}
                src={realCouplePhotos[currentPhotoIndex]}
                alt={`សារៈ & គីមឡែន រូបថតអាពាហ៍ពិពាហ៍ ${currentPhotoIndex + 1}`}
                initial={{ opacity: 0, scale: 1.12 }}
                animate={{ opacity: 1, scale: 1.02 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* Subtle Gradient Overlay on Photo Bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Click to Switch Hint Badge */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-[#D4AF37]/60 text-[#F5E5C0] font-title-khmer text-[10px] font-medium flex items-center gap-1 shadow-md">
              <span>ចុចដើម្បីប្តូររូបថត ({currentPhotoIndex + 1}/{realCouplePhotos.length})</span>
            </div>
          </div>

          {/* Bottom Pagination Dots */}
          <div className="w-full pt-2 pb-1 flex items-center justify-center gap-1.5 z-10">
            {realCouplePhotos.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentPhotoIndex
                    ? "w-6 bg-[#6B0D18]"
                    : "w-2 bg-[#D4AF37]/50"
                }`}
              />
            ))}
          </div>

        </div>
      </motion.div>

      {/* 6. RIGHT SIDE EVENT QUICK BADGES (Only Location and Date kept) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3.5"
      >
        {/* Map Location Badge */}
        <button
          onClick={() => scrollToSection("location")}
          title="ទីតាំងពិធី"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#8A1020] to-[#580B13] text-[#F5E5C0] flex items-center justify-center shadow-lg border border-[#D4AF37]/50 hover:scale-110 active:scale-95 transition-all cursor-pointer"
        >
          <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Calendar Date Badge */}
        <button
          onClick={() => scrollToSection("date")}
          title="កាលបរិច្ឆេទ"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FAF5ED] text-[#6B0D18] flex items-center justify-center shadow-lg border border-[#6B0D18]/40 hover:scale-110 active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </motion.div>

      {/* 7. BOTTOM SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ duration: 2, delay: 1.2, repeat: Infinity }}
        onClick={() => scrollToSection("couple")}
        className="z-20 pointer-events-auto cursor-pointer flex flex-col items-center gap-1 text-[#6B0D18] mb-1"
      >
        <span 
          style={{ fontFamily: "var(--font-noto-serif-khmer), 'Noto Serif Khmer', serif" }}
          className="text-[11px] sm:text-xs tracking-wider font-semibold"
        >
          រំកិលចុះក្រោម
        </span>
        <div className="w-5 h-7 rounded-full border border-[#6B0D18]/60 flex items-start justify-center p-1 bg-white/60 backdrop-blur-sm">
          <div className="w-1 h-2 rounded-full bg-[#6B0D18]" />
        </div>
      </motion.div>
    </section>
  );
};
