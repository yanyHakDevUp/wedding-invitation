"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

export const Family: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF8F5] overflow-hidden" id="family">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#6B0D18] font-title-khmer text-sm sm:text-base font-bold tracking-widest uppercase mb-2"
          >
            មាតាបិតាទាំងសងខាង
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-title-khmer font-extrabold text-[#6B0D18]"
          >
            ក្រុមគ្រួសាររបស់យើង
          </motion.h2>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#6B0D18] to-transparent mx-auto mt-4" />
        </div>

        {/* Family Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Groom Parents */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card-cherry rounded-2xl p-8 border border-[#D4AF37]/50 text-center space-y-4 shadow-xl"
          >
            <span className="text-[#F5E5C0] font-title-khmer text-lg sm:text-xl font-bold tracking-wider block mb-2">
              មាតាបិតាខាងប្រុស
            </span>

            <div className="space-y-4 pt-2">
              <div>
                <span className="text-[#F5E5C0]/80 font-kantumruy text-xs tracking-widest block uppercase mb-1">
                  ឪពុក
                </span>
                <p className="text-xl sm:text-2xl font-title-khmer font-bold text-[#FFFFFF]">
                  {weddingConfig.couple.groom.father}
                </p>
              </div>

              <div className="w-8 h-[1px] bg-[#D4AF37]/40 mx-auto my-2" />

              <div>
                <span className="text-[#F5E5C0]/80 font-kantumruy text-xs tracking-widest block uppercase mb-1">
                  ម្តាយ
                </span>
                <p className="text-xl sm:text-2xl font-title-khmer font-bold text-[#FFFFFF]">
                  {weddingConfig.couple.groom.mother}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bride Parents */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card-cherry rounded-2xl p-8 border border-[#D4AF37]/50 text-center space-y-4 shadow-xl"
          >
            <span className="text-[#F5E5C0] font-title-khmer text-lg sm:text-xl font-bold tracking-wider block mb-2">
              មាតាបិតាខាងស្រី
            </span>

            <div className="space-y-4 pt-2">
              <div>
                <span className="text-[#F5E5C0]/80 font-kantumruy text-xs tracking-widest block uppercase mb-1">
                  ឪពុក
                </span>
                <p className="text-xl sm:text-2xl font-title-khmer font-bold text-[#FFFFFF]">
                  {weddingConfig.couple.bride.father}
                </p>
              </div>

              <div className="w-8 h-[1px] bg-[#D4AF37]/40 mx-auto my-2" />

              <div>
                <span className="text-[#F5E5C0]/80 font-kantumruy text-xs tracking-widest block uppercase mb-1">
                  ម្តាយ
                </span>
                <p className="text-xl sm:text-2xl font-title-khmer font-bold text-[#FFFFFF]">
                  {weddingConfig.couple.bride.mother}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
