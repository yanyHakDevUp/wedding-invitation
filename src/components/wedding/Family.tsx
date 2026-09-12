"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

export const Family: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-[#071426] overflow-hidden" id="family">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#C8A96B] font-serif-khmer text-sm tracking-widest uppercase mb-2"
          >
            មាតាបិតាទាំងសងខាង
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-serif-khmer font-bold text-[#F5F1E8] text-gold-bright"
          >
            ក្រុមគ្រួសាររបស់យើង
          </motion.h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent mx-auto mt-4" />
        </div>

        {/* Family Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Groom Parents */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-2xl p-8 border border-[#C8A96B]/30 text-center space-y-4"
          >
            <span className="text-[#C8A96B] font-serif-khmer text-lg font-bold tracking-wider block mb-2">
              មាតាបិតាខាងប្រុស
            </span>

            <div className="space-y-3 pt-2">
              <div>
                <span className="text-[#E4D2A3]/70 font-sans-khmer text-xs tracking-widest block uppercase mb-1">
                  ឪពុក
                </span>
                <p className="text-xl font-serif-khmer font-bold text-[#F5F1E8]">
                  {weddingConfig.couple.groom.father}
                </p>
              </div>

              <div className="w-8 h-[1px] bg-[#C8A96B]/30 mx-auto my-2" />

              <div>
                <span className="text-[#E4D2A3]/70 font-sans-khmer text-xs tracking-widest block uppercase mb-1">
                  ម្តាយ
                </span>
                <p className="text-xl font-serif-khmer font-bold text-[#F5F1E8]">
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
            className="glass-card rounded-2xl p-8 border border-[#C8A96B]/30 text-center space-y-4"
          >
            <span className="text-[#C8A96B] font-serif-khmer text-lg font-bold tracking-wider block mb-2">
              មាតាបិតាខាងស្រី
            </span>

            <div className="space-y-3 pt-2">
              <div>
                <span className="text-[#E4D2A3]/70 font-sans-khmer text-xs tracking-widest block uppercase mb-1">
                  ឪពុក
                </span>
                <p className="text-xl font-serif-khmer font-bold text-[#F5F1E8]">
                  {weddingConfig.couple.bride.father}
                </p>
              </div>

              <div className="w-8 h-[1px] bg-[#C8A96B]/30 mx-auto my-2" />

              <div>
                <span className="text-[#E4D2A3]/70 font-sans-khmer text-xs tracking-widest block uppercase mb-1">
                  ម្តាយ
                </span>
                <p className="text-xl font-serif-khmer font-bold text-[#F5F1E8]">
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
