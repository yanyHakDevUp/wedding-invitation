"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

export const EmotionalQuote: React.FC = () => {
  const lines = [
    "សេចក្ដីស្រឡាញ់",
    "គឺជាការជ្រើសរើសគ្នា",
    "ជារៀងរាល់ថ្ងៃ",
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 px-6 bg-[#FAF8F5] flex items-center justify-center overflow-hidden border-y border-[#6B0D18]/15">
      {/* Soft Blurred Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 blur-md scale-105"
        style={{ backgroundImage: `url(${weddingConfig.media.cinematicPhoto1})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/90 to-[#FAF8F5]" />

      <div className="relative z-10 max-w-3xl text-center space-y-4">
        <span className="text-[#6B0D18] font-playfair text-3xl block mb-2 opacity-80">
          “
        </span>
        {lines.map((line, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: idx * 0.3 }}
            className="text-2xl sm:text-4xl md:text-5xl font-title-khmer font-extrabold text-[#6B0D18] tracking-wide leading-snug"
          >
            {line}
          </motion.p>
        ))}
        <span className="text-[#6B0D18] font-playfair text-3xl block mt-2 opacity-80">
          ”
        </span>
      </div>
    </section>
  );
};
