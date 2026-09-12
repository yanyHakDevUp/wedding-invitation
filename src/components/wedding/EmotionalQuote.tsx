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
    <section className="relative w-full py-24 sm:py-32 px-6 bg-[#071426] flex items-center justify-center overflow-hidden border-y border-[#C8A96B]/20">
      {/* Soft Blurred Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 blur-md scale-105"
        style={{ backgroundImage: `url(${weddingConfig.media.cinematicPhoto1})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#071426]/90 to-[#071426]" />

      <div className="relative z-10 max-w-3xl text-center space-y-4">
        <span className="text-[#C8A96B] font-playfair text-3xl block mb-2 opacity-80">
          “
        </span>
        {lines.map((line, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: idx * 0.3 }}
            className="text-2xl sm:text-4xl md:text-5xl font-serif-khmer font-bold text-[#F5F1E8] tracking-wide leading-snug text-gold-bright"
          >
            {line}
          </motion.p>
        ))}
        <span className="text-[#C8A96B] font-playfair text-3xl block mt-2 opacity-80">
          ”
        </span>
      </div>
    </section>
  );
};
