"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";
import { Play, X } from "lucide-react";

export const WeddingVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-[#071426] overflow-hidden" id="video">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#C8A96B] font-serif-khmer text-sm tracking-widest uppercase mb-2"
          >
            វីដេអូអាពាហ៍ពិពាហ៍
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-serif-khmer font-bold text-[#F5F1E8] text-gold-bright mb-3"
          >
            រឿងរ៉ាវរបស់យើង
          </motion.h2>
          <p className="text-[#E4D2A3]/70 font-sans-khmer text-sm sm:text-base font-light">
            អនុស្សាវរីយ៍មួយ ដែលយើងចង់ចែករំលែកជាមួយអ្នក
          </p>
        </div>

        {/* Video Poster Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          onClick={() => setIsPlaying(true)}
          className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden glass-card border border-[#C8A96B]/30 shadow-2xl group cursor-pointer"
        >
          <img
            src={weddingConfig.media.videoPoster}
            alt="Wedding Video Thumbnail"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/80 via-[#071426]/40 to-transparent flex flex-col items-center justify-center">
            {/* Play Badge */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#E4D2A3] flex items-center justify-center shadow-[0_0_30px_rgba(200,169,107,0.5)] border-2 border-white/60 mb-4"
            >
              <Play className="w-8 h-8 text-[#071426] fill-[#071426] ml-1" />
            </motion.div>

            <span className="text-[#F5F1E8] font-serif-khmer font-bold text-base sm:text-lg tracking-wider">
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
            className="fixed inset-0 z-50 bg-[#071426]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-[#0B1930] text-[#F5F1E8] hover:text-[#C8A96B] border border-[#C8A96B]/30 z-50 transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-[#C8A96B]/40 bg-black"
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
