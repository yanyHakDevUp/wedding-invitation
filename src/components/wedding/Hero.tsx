"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#071426]">
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${weddingConfig.media.heroPhoto})` }}
      />

      {/* Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/60 to-[#071426]/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,20,38,0.85)_100%)]" />

      {/* Main Content Overlay */}
      <div className="relative z-10 max-w-2xl px-6 py-20 text-center flex flex-col items-center justify-center">
        {/* Subtle Gold Floral Divider */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C8A96B]" />
          <span className="text-[#C8A96B] font-serif-khmer text-sm sm:text-base tracking-widest uppercase">
            {weddingConfig.wedding.title}
          </span>
          <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C8A96B]" />
        </motion.div>

        {/* Bride & Groom Roles + Names */}
        <div className="my-6 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="text-[#E4D2A3]/70 font-sans-khmer text-xs sm:text-sm tracking-wider uppercase block mb-1">
              {weddingConfig.couple.bride.role}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif-khmer text-[#F5F1E8] font-bold tracking-wide text-gold-bright drop-shadow-md">
              {weddingConfig.couple.bride.fullName}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="my-3"
          >
            <span className="text-[#C8A96B] font-playfair text-2xl sm:text-3xl">
              ♡
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <span className="text-[#E4D2A3]/70 font-sans-khmer text-xs sm:text-sm tracking-wider uppercase block mb-1">
              {weddingConfig.couple.groom.role}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif-khmer text-[#F5F1E8] font-bold tracking-wide text-gold-bright drop-shadow-md">
              {weddingConfig.couple.groom.fullName}
            </h1>
          </motion.div>
        </div>

        {/* Formal Invitation Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="text-[#F5F1E8]/90 font-sans-khmer text-sm sm:text-base md:text-lg max-w-lg leading-relaxed mt-6 font-light"
        >
          {weddingConfig.wedding.invitationGreeting}
        </motion.p>

        {/* Scroll Indicator Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 2, delay: 2, repeat: Infinity }}
          className="mt-12 text-[#C8A96B]/60 text-sm flex flex-col items-center gap-2"
        >
          <span className="font-sans-khmer text-xs tracking-widest text-[#E4D2A3]/50">
            រំកិលចុះក្រោម
          </span>
          <div className="w-5 h-8 rounded-full border border-[#C8A96B]/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-[#C8A96B]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
