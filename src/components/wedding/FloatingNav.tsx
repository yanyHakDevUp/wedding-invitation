"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const FloatingNav: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "ទំព័រដើម", href: "#" },
    { label: "គូស្នេហ៍", href: "#couple" },
    { label: "កាលបរិច្ឆេទ", href: "#date" },
    { label: "រូបថត", href: "#gallery" },
    { label: "វីដេអូ", href: "#video" },
    { label: "កម្មវិធី", href: "#program" },
    { label: "ទីតាំង", href: "#location" },
    { label: "ចែករំលែក", href: "#share" },
  ];

  return (
    <>
      {/* Desktop Navigation Header */}
      <header className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-40 px-8 py-3.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#6B0D18]/25 shadow-xl items-center gap-7">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="text-[#6B0D18] hover:text-[#A01424] font-title-khmer text-xs font-bold tracking-wider transition-colors"
          >
            {item.label}
          </a>
        ))}
      </header>

      {/* Mobile Floating Button */}
      <div className="md:hidden fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-12 h-12 rounded-full bg-[#6B0D18] text-[#FFFFFF] border border-[#D4AF37]/50 flex items-center justify-center shadow-xl cursor-pointer"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="md:hidden fixed bottom-20 left-6 z-40 w-52 bg-[#FFFFFF]/95 backdrop-blur-md rounded-2xl p-3 border-2 border-[#6B0D18]/30 shadow-2xl space-y-1"
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-xl text-[#6B0D18] hover:bg-[#6B0D18]/10 font-title-khmer text-xs font-bold transition-all"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
