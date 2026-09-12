"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

export const Couple: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF8F5] overflow-hidden" id="couple">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#6B0D18] font-title-khmer text-sm sm:text-base font-bold tracking-widest uppercase mb-2"
          >
            គូស្វាមីភរិយា
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-title-khmer font-extrabold text-[#6B0D18]"
          >
            កូនក្រមុំ & កូនកំលោះ
          </motion.h2>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#6B0D18] to-transparent mx-auto mt-4" />
        </div>

        {/* Portraits Grid - Merging Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative">
          
          {/* Subtle Vertical Cherry Divider for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#6B0D18]/30 to-transparent -translate-x-1/2 z-10" />

          {/* Groom Card (Slide in from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-2 border-[#6B0D18]/30 mb-6 glass-card-white">
              <img
                src={weddingConfig.couple.groom.portrait}
                alt={weddingConfig.couple.groom.fullName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B0D18]/75 via-transparent to-transparent" />
            </div>

            <span className="text-[#6B0D18] font-title-khmer text-xs sm:text-sm font-semibold tracking-wider uppercase mb-1">
              {weddingConfig.couple.groom.role}
            </span>
            <h3 className="text-2xl sm:text-3xl font-title-khmer font-extrabold text-[#6B0D18] mb-2">
              {weddingConfig.couple.groom.fullName}
            </h3>
            <p className="text-[#555555] font-sans-khmer text-sm max-w-xs leading-relaxed">
              បុត្រ៖ {weddingConfig.couple.groom.father} & {weddingConfig.couple.groom.mother}
            </p>
          </motion.div>

          {/* Bride Card (Slide in from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-2 border-[#6B0D18]/30 mb-6 glass-card-white">
              <img
                src={weddingConfig.couple.bride.portrait}
                alt={weddingConfig.couple.bride.fullName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B0D18]/75 via-transparent to-transparent" />
            </div>

            <span className="text-[#6B0D18] font-title-khmer text-xs sm:text-sm font-semibold tracking-wider uppercase mb-1">
              {weddingConfig.couple.bride.role}
            </span>
            <h3 className="text-2xl sm:text-3xl font-title-khmer font-extrabold text-[#6B0D18] mb-2">
              {weddingConfig.couple.bride.fullName}
            </h3>
            <p className="text-[#555555] font-sans-khmer text-sm max-w-xs leading-relaxed">
              បុត្រី៖ {weddingConfig.couple.bride.father} & {weddingConfig.couple.bride.mother}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
