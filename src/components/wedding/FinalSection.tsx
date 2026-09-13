"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

export const FinalSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF8F5]">
      {/* Background Image with Slow Zoom */}
      <motion.div
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1.02 }}
        viewport={{ once: true }}
        transition={{ duration: 15, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${weddingConfig.media.finalPhoto})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#4A0E17] via-[#4A0E17]/75 to-[#4A0E17]" />

      <div className="relative z-10 max-w-2xl px-6 text-center space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl font-title-khmer font-extrabold text-[#FFFFFF] tracking-wide leading-relaxed drop-shadow-md"
        >
          {weddingConfig.quotes.finalMessage}
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl sm:text-3xl font-title-khmer font-extrabold text-[#F5E5C0]"
        >
          {weddingConfig.couple.groom.fullName} &amp; {weddingConfig.couple.bride.fullName}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[#FFFFFF] font-title-khmer text-lg sm:text-2xl font-bold max-w-lg mx-auto leading-relaxed pt-4"
        >
          {weddingConfig.quotes.closingGratitude}
        </motion.p>

        <div className="pt-8">
          <span className="text-[#D4AF37] font-playfair text-3xl">
            ♡
          </span>
        </div>
      </div>
    </section>
  );
};
