"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

interface InvitationEnvelopeProps {
  onOpen: () => void;
}

export const InvitationEnvelope: React.FC<InvitationEnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {!isOpen ? (
        <motion.div
          key="envelope-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#071426] px-4 py-8 overflow-hidden select-none"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,25,48,0.8)_0%,rgba(7,20,38,1)_100%)] pointer-events-none" />

          {/* Envelope Card Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md md:max-w-lg aspect-[3/4.2] sm:aspect-[3/4] bg-[#0B1930] rounded-2xl p-6 sm:p-10 border border-[#C8A96B]/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col items-center justify-between text-center overflow-hidden"
          >
            {/* Self-drawing Gold Border Accent */}
            <motion.div
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-3 sm:inset-4 border border-[#C8A96B]/40 rounded-xl pointer-events-none"
            >
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#C8A96B]" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#C8A96B]" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#C8A96B]" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#C8A96B]" />
            </motion.div>

            {/* Top Khmer Header */}
            <div className="pt-6 z-10">
              <p className="text-[#C8A96B] font-serif-khmer text-lg sm:text-xl tracking-wider mb-2 opacity-90">
                {weddingConfig.wedding.title}
              </p>
              <div className="w-12 h-[1px] bg-[#C8A96B]/40 mx-auto" />
            </div>

            {/* Couple Names Display */}
            <div className="my-auto z-10 py-6">
              <h2 className="text-[#F5F1E8] font-serif-khmer text-2xl sm:text-3xl font-bold mb-3 tracking-wide text-gold-bright">
                {weddingConfig.couple.bride.name}
              </h2>
              <div className="text-[#C8A96B] font-playfair text-xl sm:text-2xl my-1 opacity-80">
                ♡
              </div>
              <h2 className="text-[#F5F1E8] font-serif-khmer text-2xl sm:text-3xl font-bold mt-3 tracking-wide text-gold-bright">
                {weddingConfig.couple.groom.name}
              </h2>
            </div>

            {/* Wax Seal & Open Button */}
            <div className="pb-6 z-10 w-full flex flex-col items-center">
              <p className="text-[#E4D2A3]/80 font-sans-khmer text-sm sm:text-base mb-6 font-light tracking-widest">
                សូមគោរពអញ្ជើញ
              </p>

              {/* Wax Seal Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="relative mb-6"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#C8A96B] via-[#9E7D3B] to-[#5C451D] flex items-center justify-center shadow-[0_0_20px_rgba(200,169,107,0.4)] border border-[#E4D2A3]/60 cursor-pointer"
                     onClick={handleOpenClick}
                >
                  <span className="text-[#071426] font-playfair font-bold text-lg sm:text-xl">
                    R & S
                  </span>
                </div>
              </motion.div>

              {/* Gold Open Invitation Button */}
              <motion.button
                onClick={handleOpenClick}
                whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(200,169,107,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="w-full max-w-[240px] py-3.5 px-6 rounded-full bg-gradient-to-r from-[#C8A96B] via-[#E4D2A3] to-[#C8A96B] text-[#071426] font-serif-khmer font-bold text-sm sm:text-base tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
              >
                បើកលិខិតអញ្ជើញ
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        /* Envelope Opening Animation Overlay */
        <motion.div
          key="opening-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-[#071426] flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ scale: 1, y: 0 }}
            animate={{ scale: 1.15, y: -100, opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.7, 0, 0.84, 0] }}
            className="w-full max-w-md h-[500px] bg-[#0B1930] rounded-2xl border border-[#C8A96B]/50 flex items-center justify-center"
          >
            <div className="text-center p-8">
              <span className="text-5xl text-[#C8A96B] font-playfair">♡</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
