"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";
import { Sun, Scissors, Flame, Sparkles, Utensils, Music } from "lucide-react";

export const CeremonyTimeline: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "sun": return <Sun className="w-5 h-5 text-[#C8A96B]" />;
      case "scissors": return <Scissors className="w-5 h-5 text-[#C8A96B]" />;
      case "flame": return <Flame className="w-5 h-5 text-[#C8A96B]" />;
      case "sparkles": return <Sparkles className="w-5 h-5 text-[#C8A96B]" />;
      case "utensils": return <Utensils className="w-5 h-5 text-[#C8A96B]" />;
      case "music": return <Music className="w-5 h-5 text-[#C8A96B]" />;
      default: return <Sparkles className="w-5 h-5 text-[#C8A96B]" />;
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-[#071426] overflow-hidden" id="program">
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
            លំដាប់កម្មវិធី
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-serif-khmer font-bold text-[#F5F1E8] text-gold-bright"
          >
            កម្មវិធីអាពាហ៍ពិពាហ៍
          </motion.h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent mx-auto mt-4" />
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {weddingConfig.schedule.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-[#C8A96B]/25 hover:border-[#C8A96B]/50 transition-all duration-300 flex items-start gap-5 group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#071426] border border-[#C8A96B]/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                {getIcon(item.iconName)}
              </div>

              <div>
                <span className="text-[#C8A96B] font-sans-khmer text-xs font-semibold tracking-wider block mb-1">
                  {item.time}
                </span>
                <h3 className="text-xl font-serif-khmer font-bold text-[#F5F1E8] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#F5F1E8]/75 font-sans-khmer text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
