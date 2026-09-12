"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

export const LoveStory: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-[#071426] overflow-hidden" id="story">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#C8A96B] font-serif-khmer text-sm tracking-widest uppercase mb-2"
          >
            ដំណើរនៃស្នេហា
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-serif-khmer font-bold text-[#F5F1E8] text-gold-bright"
          >
            រឿងរ៉ាវរបស់យើង
          </motion.h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent mx-auto mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Center Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C8A96B]/20 via-[#C8A96B]/60 to-[#C8A96B]/20 -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16">
            {weddingConfig.story.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Point Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0B1930] border-2 border-[#C8A96B] flex items-center justify-center z-10 shadow-[0_0_12px_rgba(200,169,107,0.5)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#C8A96B]" />
                  </div>

                  {/* Content Box */}
                  <div className="pl-16 md:pl-0 w-full md:w-1/2 md:px-8">
                    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#C8A96B]/30 hover:border-[#C8A96B]/60 transition-all duration-300 group">
                      {/* Year Badge */}
                      <span className="inline-block px-4 py-1 rounded-full bg-[#C8A96B]/15 text-[#C8A96B] font-serif-khmer font-bold text-sm mb-3 border border-[#C8A96B]/30">
                        {item.year}
                      </span>

                      <h3 className="text-xl sm:text-2xl font-serif-khmer font-bold text-[#F5F1E8] mb-3">
                        {item.title}
                      </h3>

                      <p className="text-[#F5F1E8]/80 font-sans-khmer text-sm sm:text-base leading-relaxed mb-4 font-light">
                        {item.description}
                      </p>

                      {/* Photo Thumbnail */}
                      <div className="w-full h-40 sm:h-48 rounded-xl overflow-hidden shadow-md">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
