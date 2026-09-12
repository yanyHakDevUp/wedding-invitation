"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Share2, Copy, Check, Send } from "lucide-react";

export const ShareQRCode: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "https://wedding.example.com";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent("លិខិតអញ្ជើញចូលរួមពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍")}`);
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`);
  };

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF8F5] overflow-hidden" id="share">
      <div className="max-w-xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#6B0D18] font-title-khmer text-sm sm:text-base font-bold tracking-widest uppercase mb-2"
          >
            ចែករំលែក
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-title-khmer font-extrabold text-[#6B0D18]"
          >
            ចែករំលែកលិខិតអញ្ជើញ
          </motion.h2>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#6B0D18] to-transparent mx-auto mt-4" />
        </div>

        {/* Share Card & QR Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card-white rounded-3xl p-8 border-2 border-[#6B0D18]/25 flex flex-col items-center space-y-8"
        >
          {/* QR Code Container */}
          <div className="p-4 rounded-2xl bg-white shadow-xl border-2 border-[#6B0D18]">
            <QRCodeSVG value={currentUrl} size={160} fgColor="#6B0D18" bgColor="#FFFFFF" />
          </div>

          <p className="text-[#555555] font-kantumruy text-sm font-light">
            ស្កេន QR Code ដើម្បីមើលលិខិតអញ្ជើញ
          </p>

          {/* Social Share Action Buttons */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full">
            <button
              onClick={shareTelegram}
              className="py-3 px-3 sm:px-4 rounded-xl bg-[#6B0D18] text-[#FFFFFF] hover:bg-[#8A1020] font-title-khmer text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4 text-[#F5E5C0]" />
              Telegram
            </button>

            <button
              onClick={shareFacebook}
              className="py-3 px-3 sm:px-4 rounded-xl bg-[#6B0D18] text-[#FFFFFF] hover:bg-[#8A1020] font-title-khmer text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
            >
              <Share2 className="w-4 h-4 text-[#F5E5C0]" />
              Facebook
            </button>

            <button
              onClick={handleCopyLink}
              className="py-3 px-3 sm:px-4 rounded-xl bg-[#6B0D18] text-[#FFFFFF] hover:bg-[#8A1020] font-title-khmer text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
            >
              {copied ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4 text-[#F5E5C0]" />}
              {copied ? "ចម្លងរួច" : "ចម្លង Link"}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
