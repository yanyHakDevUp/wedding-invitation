"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

export const Couple: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-[#071426] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#C8A96B] font-serif-khmer text-sm tracking-widest uppercase mb-2"
          >
            គូស្វាមីភរិយា
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-serif-khmer font-bold text-[#F5F1E8] text-gold-bright"
          >
            កូនក្រមុំ & កូនកំលោះ
          </motion.h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent mx-auto mt-4" />
        </div>

        {/* Portraits Grid - Merging Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative">
          
          {/* Subtle Vertical Gold Divider for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C8A96B]/40 to-transparent -translate-x-1/2 z-10" />

          {/* Bride Card (Slide in from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[#C8A96B]/30 mb-6 glass-card">
              <img
                src={weddingConfig.couple.bride.portrait}
                alt={weddingConfig.couple.bride.fullName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/80 via-transparent to-transparent" />
            </div>

            <span className="text-[#C8A96B] font-sans-khmer text-xs tracking-widest uppercase mb-1">
              {weddingConfig.couple.bride.role}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-khmer font-bold text-[#F5F1E8] mb-2">
              {weddingConfig.couple.bride.fullName}
            </h3>
            <p className="text-[#E4D2A3]/70 font-sans-khmer text-sm max-w-xs leading-relaxed">
              បុត្រី៖ {weddingConfig.couple.bride.father} & {weddingConfig.couple.bride.mother}
            </p>
          </motion.div>

          {/* Groom Card (Slide in from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[#C8A96B]/30 mb-6 glass-card">
              <img
                src={weddingConfig.couple.groom.portrait}
                alt={weddingConfig.couple.groom.fullName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/80 via-transparent to-transparent" />
            </div>

            <span className="text-[#C8A96B] font-sans-khmer text-xs tracking-widest uppercase mb-1">
              {weddingConfig.couple.groom.role}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-khmer font-bold text-[#F5F1E8] mb-2">
              {weddingConfig.couple.groom.fullName}
            </h3>
            <p className="text-[#E4D2A3]/70 font-sans-khmer text-sm max-w-xs leading-relaxed">
              បុត្រ៖ {weddingConfig.couple.groom.father} & {weddingConfig.couple.groom.mother}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
