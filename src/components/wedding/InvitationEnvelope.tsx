"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

interface InvitationEnvelopeProps {
  onOpen: () => void;
}

export const InvitationEnvelope: React.FC<InvitationEnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenClick = () => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);

    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("play_wedding_music"));
    }

    setTimeout(() => {
      setIsOpen(true);
      onOpen();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="envelope-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
          style={{
            backgroundColor: "#45060B",
            backgroundImage: "radial-gradient(circle at 50% 40%, #5E0C14 0%, #3B0408 65%, #1C0205 100%)",
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between pt-10 sm:pt-14 pb-6 sm:pb-8 px-4 overflow-y-auto overflow-x-hidden select-none"
        >
          {/* Vignette Ambient Glow */}
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{
              background: "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.55) 100%)"
            }}
          />

          {/* 1. TOP HEADER SECTION */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="z-10 text-center flex flex-col items-center max-w-lg pt-4 sm:pt-6 px-4"
          >
            {/* Traditional Khmer Wedding Title in Moul (អក្សរមូល) Font */}
            <p 
              style={{ fontFamily: "var(--font-moul), 'Moul', 'Noto Serif Khmer', serif" }}
              className="text-[#E8D4B8] text-xs sm:text-sm md:text-base tracking-wider uppercase font-medium drop-shadow-md mb-2"
            >
              {weddingConfig.wedding.title}
            </p>

            {/* Calligraphic English Couple Names */}
            <div className="py-1 px-4">
              <h1 
                style={{ 
                  fontFamily: "'Great Vibes', 'Alex Brush', cursive, serif",
                  lineHeight: 1.45,
                }}
                className="text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
              >
                Sarah &amp; Kimlen
              </h1>
            </div>

            {/* Formal Khmer Couple Names (Groom First, Bride Second) */}
            <p 
              style={{ fontFamily: "var(--font-noto-serif-khmer), 'Noto Serif Khmer', 'Battambang', serif" }}
              className="text-xl sm:text-2xl md:text-3xl text-[#F3E5CE] font-bold mt-1 tracking-wider drop-shadow-md"
            >
              {weddingConfig.couple.groom.name} &amp; {weddingConfig.couple.bride.name}
            </p>
          </motion.div>

          {/* 2. CENTER ENVELOPE SECTION */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 25 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            onClick={handleOpenClick}
            whileHover={{ scale: isAnimating ? 1 : 1.02, y: isAnimating ? 0 : -4 }}
            whileTap={{ scale: isAnimating ? 1 : 0.98 }}
            className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] aspect-[1.45/1] my-auto cursor-pointer group"
          >
            {/* Outer Drop Shadow under Envelope */}
            <div className="absolute inset-x-4 bottom-0 h-10 rounded-full bg-black/60 blur-xl transform translate-y-6" />

            {/* Envelope Outer Base */}
            <div 
              className="relative w-full h-full rounded-md shadow-[0_30px_70px_rgba(0,0,0,0.7)] border border-[#E6D7C3] overflow-visible"
              style={{
                background: "linear-gradient(180deg, #FBF6EE 0%, #F5ECE0 60%, #EBE0CE 100%)",
              }}
            >
              
              {/* Back Pocket Lining */}
              <div 
                className="absolute inset-0 rounded-md"
                style={{ background: "linear-gradient(180deg, #EEE2D2 0%, #E2D4BF 100%)" }}
              />

              {/* INVITATION CARD (Slides out completely on click so NO text is cut off) */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: isAnimating ? -195 : 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                className="absolute inset-x-4 top-8 sm:top-10 bottom-3 rounded-md p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-xl border-2 border-[#D4AF37] z-1"
                style={{
                  background: "linear-gradient(135deg, #7A101C 0%, #580B13 50%, #3B060C 100%)"
                }}
              >
                <p 
                  style={{ fontFamily: "var(--font-moul), 'Moul', 'Noto Serif Khmer', serif" }}
                  className="text-[#F5E5C0] text-xs sm:text-sm font-bold tracking-wide"
                >
                  {weddingConfig.wedding.title}
                </p>
                <div className="w-10 h-[1px] bg-[#D4AF37]/60 my-1.5" />
                <p 
                  style={{ fontFamily: "var(--font-noto-serif-khmer), 'Noto Serif Khmer', serif" }}
                  className="text-white text-base sm:text-lg font-bold tracking-wide drop-shadow"
                >
                  {weddingConfig.couple.groom.name} ♡ {weddingConfig.couple.bride.name}
                </p>
                <span 
                  style={{ fontFamily: "var(--font-noto-serif-khmer), 'Noto Serif Khmer', serif" }}
                  className="mt-2 inline-block px-3.5 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5E5C0] to-[#D4AF37] text-[#4A0E17] font-bold text-xs sm:text-sm shadow-md"
                >
                  {weddingConfig.wedding.dayKhmer} {weddingConfig.wedding.dateKhmer} {weddingConfig.wedding.monthKhmer} {weddingConfig.wedding.yearKhmer}
                </span>
              </motion.div>

              {/* Envelope Lower Pocket Cover (Side & Bottom Folds) */}
              <div 
                className="absolute inset-0 z-10 pointer-events-none rounded-md"
                style={{
                  clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0, 50% 54%)",
                  background: "linear-gradient(180deg, #FBF6EE 0%, #F3E8DA 50%, #E8DCCA 100%)",
                  boxShadow: "inset 0 3px 10px rgba(0,0,0,0.06)"
                }}
              />

              {/* Pocket Fold Lines */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-30">
                <line x1="0" y1="0" x2="50%" y2="54%" stroke="#9E876B" strokeWidth="1.2" />
                <line x1="100%" y1="0" x2="50%" y2="54%" stroke="#9E876B" strokeWidth="1.2" />
              </svg>

              {/* V-SHAPED TOP FLAP WITH ELEGANT LACE TRIM */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{ rotateX: isAnimating ? 180 : 0 }}
                transition={{ duration: 0.85, ease: "easeInOut" }}
                style={{ transformOrigin: "top", perspective: 1200 }}
                className="absolute inset-x-0 top-0 h-[65%] z-20 pointer-events-none"
              >
                {/* Triangular Top Flap */}
                <div 
                  className="w-full h-full relative"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    background: "linear-gradient(180deg, #FAF4EB 0%, #F4EAD8 80%, #EADECB 100%)",
                    filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.18))"
                  }}
                />

                {/* White Lace Border SVG along V-Edges */}
                <div className="absolute inset-0 overflow-visible">
                  <svg 
                    viewBox="0 0 400 250" 
                    preserveAspectRatio="none" 
                    className="w-full h-full filter drop-shadow-[0_3px_5px_rgba(0,0,0,0.15)]"
                  >
                    {/* Scalloped Lace Ribbon */}
                    <path
                      d="M 0 0 L 200 250 L 400 0"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="18"
                      strokeDasharray="8,5"
                      strokeLinecap="round"
                      opacity="0.96"
                    />

                    {/* Scallop Arches */}
                    <path
                      d="M 0 0 Q 50 62.5 100 125 Q 150 187.5 200 250 Q 250 187.5 300 125 Q 350 62.5 400 0"
                      fill="none"
                      stroke="#FAF5EC"
                      strokeWidth="4"
                      opacity="0.9"
                    />

                    {/* Lace Circles */}
                    {Array.from({ length: 18 }).map((_, i) => {
                      const t = (i + 1) / 19;
                      const xLeft = 200 * t;
                      const yLeft = 250 * t;
                      const xRight = 400 - 200 * t;
                      const yRight = 250 * t;
                      return (
                        <g key={i}>
                          <circle cx={xLeft} cy={yLeft} r="6" fill="#FFFFFF" opacity="0.98" />
                          <circle cx={xLeft} cy={yLeft} r="3" fill="#F4EAD8" opacity="0.9" />
                          <circle cx={xRight} cy={yRight} r="6" fill="#FFFFFF" opacity="0.98" />
                          <circle cx={xRight} cy={yRight} r="3" fill="#F4EAD8" opacity="0.9" />
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Burgundy Monogram (S & K) on Flap Center */}
                <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-30">
                  <span 
                    style={{ fontFamily: "'Great Vibes', 'Alex Brush', cursive, serif" }}
                    className="text-3xl sm:text-4xl text-[#6B0D18] tracking-widest font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] select-none"
                  >
                    S &amp; K
                  </span>
                </div>
              </motion.div>

              {/* WHITE CALLA LILY FLOWERS ACCENT */}
              <div className="absolute -right-6 sm:-right-10 -bottom-8 sm:-bottom-12 w-32 sm:w-44 h-40 sm:h-52 z-30 pointer-events-none filter drop-shadow-[8px_16px_20px_rgba(0,0,0,0.6)]">
                <svg viewBox="0 0 200 240" className="w-full h-full overflow-visible">
                  {/* Curved Stems */}
                  <path
                    d="M 60 220 C 80 170 110 120 145 70"
                    fill="none"
                    stroke="#436332"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 80 230 C 95 185 125 135 165 95"
                    fill="none"
                    stroke="#324B25"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  {/* Leaf Accent */}
                  <path
                    d="M 85 190 Q 55 170 40 185 Q 70 205 95 210 Z"
                    fill="#3B572B"
                    opacity="0.92"
                  />

                  {/* Flower 1: Main Calla Lily */}
                  <g transform="translate(130, 40) rotate(-15)">
                    <path
                      d="M 22 24 C 24 10 28 6 30 12 C 28 26 24 32 22 24 Z"
                      fill="#E6B800"
                    />
                    <path
                      d="M 5 35 C -5 20 15 -15 42 -5 C 58 5 45 42 22 52 C 5 58 -2 45 5 35 Z"
                      fill="url(#lilyGrad1)"
                      stroke="#E5DDD0"
                      strokeWidth="1"
                    />
                    <path
                      d="M 12 36 C 5 25 18 2 34 5 C 44 14 36 38 20 44 C 14 42 10 38 12 36 Z"
                      fill="url(#lilyInnerGrad)"
                    />
                  </g>

                  {/* Flower 2: Secondary Calla Lily Bud */}
                  <g transform="translate(152, 72) rotate(10)">
                    <path
                      d="M 18 20 C 20 10 23 6 25 12 C 23 22 20 26 18 20 Z"
                      fill="#E6B800"
                    />
                    <path
                      d="M 5 28 C -3 15 12 -10 34 -3 C 48 5 38 35 18 43 C 5 48 -2 36 5 28 Z"
                      fill="url(#lilyGrad2)"
                      stroke="#E5DDD0"
                      strokeWidth="1"
                    />
                  </g>

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="lilyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="65%" stopColor="#F9F6F0" />
                      <stop offset="100%" stopColor="#E6DEC9" />
                    </linearGradient>
                    <linearGradient id="lilyGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="70%" stopColor="#F5EFE6" />
                      <stop offset="100%" stopColor="#DFD5C0" />
                    </linearGradient>
                    <linearGradient id="lilyInnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FAF7F2" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#E2D6C1" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

            </div>
          </motion.div>

          {/* 3. BOTTOM ACTION INSTRUCTION */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="z-10 text-center mt-4 mb-2 sm:mb-4"
          >
            <p 
              style={{ fontFamily: "var(--font-noto-serif-khmer), 'Noto Serif Khmer', 'Battambang', serif" }}
              className="text-[#E8D4B8] text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold animate-pulse drop-shadow"
            >
              សូមចុចលើលិខិតដើម្បីបើក
            </p>
            <p className="text-[#E8D4B8]/60 font-serif text-[10px] sm:text-xs tracking-[0.25em] uppercase mt-0.5">
              TOUCH ENVELOPE TO OPEN
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
