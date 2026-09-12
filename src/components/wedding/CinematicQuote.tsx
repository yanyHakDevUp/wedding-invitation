"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

export const CinematicQuote: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] sm:h-screen flex items-center justify-center overflow-hidden bg-[#FAF8F5]">
      {/* Background Photo with Slow Zoom */}
      <motion.div
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1.02 }}
        viewport={{ once: true }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${weddingConfig.media.cinematicPhoto2})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#4A0E17] via-[#4A0E17]/60 to-[#4A0E17]" />

      <div className="relative z-10 max-w-3xl px-6 text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-2xl sm:text-4xl md:text-5xl font-title-khmer font-extrabold text-[#FFFFFF] tracking-wide leading-relaxed drop-shadow-md"
        >
          {weddingConfig.quotes.cinematic}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="pt-4"
        >
          <span className="text-[#F5E5C0] font-title-khmer text-xl sm:text-2xl font-bold tracking-wider">
            {weddingConfig.couple.bride.name} & {weddingConfig.couple.groom.name}
          </span>
        </motion.div>
      </div>
    </section>
  );
};
