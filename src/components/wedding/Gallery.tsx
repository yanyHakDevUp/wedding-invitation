"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const Gallery: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setSelectedIdx(idx);
  const closeLightbox = () => setSelectedIdx(null);

  const prevImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + weddingConfig.media.gallery.length) % weddingConfig.media.gallery.length);
    }
  };

  const nextImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % weddingConfig.media.gallery.length);
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF8F5] overflow-hidden" id="gallery">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#6B0D18] font-title-khmer text-sm sm:text-base font-bold tracking-widest uppercase mb-2"
          >
            កម្រងរូបថត
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-title-khmer font-extrabold text-[#6B0D18]"
          >
            រូបថតអនុស្សាវរីយ៍
          </motion.h2>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#6B0D18] to-transparent mx-auto mt-4" />
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {weddingConfig.media.gallery.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              onClick={() => openLightbox(idx)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group glass-card-white border-2 border-[#6B0D18]/20 ${
                img.aspect === "landscape" ? "sm:col-span-2 aspect-[16/9]" : "aspect-[3/4]"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B0D18]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-[#FFFFFF] font-title-khmer text-sm font-bold">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1A0408]/96 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-[#6B0D18] text-[#FFFFFF] hover:text-[#D4AF37] border border-[#D4AF37]/50 z-50 transition-all cursor-pointer shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-[#6B0D18] text-[#FFFFFF] hover:text-[#D4AF37] border border-[#D4AF37]/50 z-50 transition-all cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              key={selectedIdx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]"
            >
              <img
                src={weddingConfig.media.gallery[selectedIdx].src}
                alt={weddingConfig.media.gallery[selectedIdx].alt}
                className="w-full h-full object-contain max-h-[85vh]"
              />
            </motion.div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-[#6B0D18] text-[#FFFFFF] hover:text-[#D4AF37] border border-[#D4AF37]/50 z-50 transition-all cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
