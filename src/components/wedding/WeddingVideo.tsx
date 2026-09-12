"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";
import { Play, X } from "lucide-react";

export const WeddingVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF8F5] overflow-hidden" id="video">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#6B0D18] font-title-khmer text-sm sm:text-base font-bold tracking-widest uppercase mb-2"
          >
            វីដេអូអាពាហ៍ពិពាហ៍
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-title-khmer font-extrabold text-[#6B0D18] mb-3"
          >
            រឿងរ៉ាវរបស់យើង
          </motion.h2>
          <p className="text-[#555555] font-kantumruy text-sm sm:text-base font-light">
            អនុស្សាវរីយ៍មួយ ដែលយើងចង់ចែករំលែកជាមួយអ្នក
          </p>
        </div>

        {/* Video Poster Preview from Video Source */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          onClick={() => setIsPlaying(true)}
          className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden glass-card-cherry border-2 border-[#D4AF37]/50 shadow-2xl group cursor-pointer"
        >
          {/* Video Frame Cover */}
          <video
            src={weddingConfig.media.videoUrl}
            preload="metadata"
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#6B0D18]/85 via-[#6B0D18]/40 to-transparent flex flex-col items-center justify-center">
            {/* Play Badge */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5E5C0] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.7)] border-2 border-white/80 mb-4"
            >
              <Play className="w-8 h-8 text-[#4A0E17] fill-[#4A0E17] ml-1" />
            </motion.div>

            <span className="text-[#FFFFFF] font-title-khmer font-extrabold text-base sm:text-lg tracking-wider">
              ទស្សនាវីដេអូ
            </span>
          </div>
        </motion.div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1A0408]/96 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-[#6B0D18] text-[#FFFFFF] hover:text-[#D4AF37] border border-[#D4AF37]/40 z-50 transition-all cursor-pointer shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37] bg-black"
            >
              <video
                src={weddingConfig.media.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
