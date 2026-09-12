"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

function toKhmerDigits(num: number): string {
  const khmerDigits = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
  return num
    .toString()
    .padStart(2, "0")
    .replace(/\d/g, (d) => khmerDigits[parseInt(d)]);
}

export const WeddingDate: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(weddingConfig.wedding.targetDateISO).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-[#071426] overflow-hidden" id="date">
      <div className="max-w-4xl mx-auto">
        
        {/* Luxury Outer Date Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative bg-[#0B1930] rounded-3xl p-8 sm:p-14 border border-[#C8A96B]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center overflow-hidden"
        >
          {/* Corner Gold Kbach Motifs */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#C8A96B]/60" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#C8A96B]/60" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#C8A96B]/60" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#C8A96B]/60" />

          {/* Section Titles */}
          <p className="text-[#C8A96B] font-serif-khmer text-lg sm:text-2xl font-semibold tracking-wider mb-2">
            {weddingConfig.wedding.title}
          </p>
          <h2 className="text-[#E4D2A3] font-serif-khmer text-xl sm:text-3xl font-bold mb-8">
            {weddingConfig.wedding.subTitle}
          </h2>

          {/* Featured Full Khmer Date Highlight */}
          <div className="my-8 py-8 px-4 rounded-2xl bg-[#071426]/70 border border-[#C8A96B]/30 shadow-inner">
            <div className="text-2xl sm:text-4xl md:text-5xl font-serif-khmer font-bold text-[#F5F1E8] tracking-wide text-gold-bright leading-relaxed">
              {weddingConfig.wedding.dayKhmer} {weddingConfig.wedding.dateKhmer} {weddingConfig.wedding.monthKhmer} {weddingConfig.wedding.yearKhmer}
            </div>

            <p className="text-[#E4D2A3]/70 font-sans-khmer text-sm sm:text-base mt-3 italic font-light">
              ( {weddingConfig.wedding.lunarCalendarKhmer} )
            </p>
          </div>

          {/* Times */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 my-8">
            <div className="px-6 py-3 rounded-full bg-[#071426] border border-[#C8A96B]/30 text-[#E4D2A3] font-sans-khmer text-sm sm:text-base font-semibold">
              ពិធីព្រឹក៖ <span className="text-[#F5F1E8]">{weddingConfig.wedding.timeMorning}</span>
            </div>
            <div className="px-6 py-3 rounded-full bg-[#071426] border border-[#C8A96B]/30 text-[#E4D2A3] font-sans-khmer text-sm sm:text-base font-semibold">
              ពិធីពិសាភោជនាហារ៖ <span className="text-[#F5F1E8]">{weddingConfig.wedding.timeBanquet}</span>
            </div>
          </div>

          {/* Live Khmer Countdown Grid */}
          <div className="mt-12">
            <p className="text-[#C8A96B] font-serif-khmer text-xs sm:text-sm tracking-widest uppercase mb-6 opacity-80">
              ❖ រាប់ថយក្រោយដល់ថ្ងៃសិរីមង្គល ❖
            </p>

            <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-lg mx-auto">
              <div className="bg-[#071426] p-3 sm:p-5 rounded-2xl border border-[#C8A96B]/30 shadow-lg">
                <span className="block text-2xl sm:text-4xl font-serif-khmer font-bold text-[#C8A96B]">
                  {toKhmerDigits(timeLeft.days)}
                </span>
                <span className="text-[#F5F1E8]/70 font-sans-khmer text-xs sm:text-sm mt-1 block">
                  ថ្ងៃ
                </span>
              </div>

              <div className="bg-[#071426] p-3 sm:p-5 rounded-2xl border border-[#C8A96B]/30 shadow-lg">
                <span className="block text-2xl sm:text-4xl font-serif-khmer font-bold text-[#C8A96B]">
                  {toKhmerDigits(timeLeft.hours)}
                </span>
                <span className="text-[#F5F1E8]/70 font-sans-khmer text-xs sm:text-sm mt-1 block">
                  ម៉ោង
                </span>
              </div>

              <div className="bg-[#071426] p-3 sm:p-5 rounded-2xl border border-[#C8A96B]/30 shadow-lg">
                <span className="block text-2xl sm:text-4xl font-serif-khmer font-bold text-[#C8A96B]">
                  {toKhmerDigits(timeLeft.minutes)}
                </span>
                <span className="text-[#F5F1E8]/70 font-sans-khmer text-xs sm:text-sm mt-1 block">
                  នាទី
                </span>
              </div>

              <div className="bg-[#071426] p-3 sm:p-5 rounded-2xl border border-[#C8A96B]/30 shadow-lg">
                <span className="block text-2xl sm:text-4xl font-serif-khmer font-bold text-[#C8A96B]">
                  {toKhmerDigits(timeLeft.seconds)}
                </span>
                <span className="text-[#F5F1E8]/70 font-sans-khmer text-xs sm:text-sm mt-1 block">
                  វិនាទី
                </span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
