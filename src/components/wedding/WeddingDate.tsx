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
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF8F5] overflow-hidden" id="date">
      <div className="max-w-4xl mx-auto">
        
        {/* Luxury Outer Date Card in Deep Cherry Red */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative bg-gradient-to-b from-[#6B0D18] to-[#4A0E17] text-[#FFFFFF] rounded-3xl p-8 sm:p-14 border-2 border-[#D4AF37]/60 shadow-[0_25px_60px_-15px_rgba(107,13,24,0.35)] text-center overflow-hidden"
        >
          {/* Corner Gold Kbach Motifs */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]" />

          {/* Section Titles (អក្សរមានជើង) */}
          <p className="text-[#F5E5C0] font-title-khmer text-xl sm:text-2xl font-bold tracking-wider mb-2">
            {weddingConfig.wedding.title}
          </p>
          <h2 className="text-[#FFFFFF] font-title-khmer text-2xl sm:text-3xl font-extrabold mb-8">
            {weddingConfig.wedding.subTitle}
          </h2>

          {/* Featured Full Khmer Date Highlight */}
          <div className="my-8 py-8 px-4 rounded-2xl bg-[#3A080F]/80 border border-[#D4AF37]/40 shadow-inner">
            <div className="text-2xl sm:text-4xl md:text-5xl font-title-khmer font-extrabold text-[#FFFFFF] tracking-wide leading-relaxed drop-shadow-md">
              {weddingConfig.wedding.dayKhmer} {weddingConfig.wedding.dateKhmer} {weddingConfig.wedding.monthKhmer} {weddingConfig.wedding.yearKhmer}
            </div>

            <p className="text-[#F5E5C0] font-kantumruy text-sm sm:text-base mt-3 italic font-light">
              ( {weddingConfig.wedding.lunarCalendarKhmer} )
            </p>
          </div>

          {/* Times */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 my-8">
            <div className="px-6 py-3 rounded-full bg-[#3A080F] border border-[#D4AF37]/40 text-[#F5E5C0] font-kantumruy text-sm sm:text-base font-semibold">
              ពិធីព្រឹក៖ <span className="text-[#FFFFFF] font-bold">{weddingConfig.wedding.timeMorning}</span>
            </div>
            <div className="px-6 py-3 rounded-full bg-[#3A080F] border border-[#D4AF37]/40 text-[#F5E5C0] font-kantumruy text-sm sm:text-base font-semibold">
              ពិធីពិសាភោជនាហារ៖ <span className="text-[#FFFFFF] font-bold">{weddingConfig.wedding.timeBanquet}</span>
            </div>
          </div>

          {/* Live Khmer Countdown Grid */}
          <div className="mt-12">
            <p className="text-[#F5E5C0] font-title-khmer text-sm sm:text-base font-bold tracking-widest uppercase mb-6 opacity-90">
              ❖ រាប់ថយក្រោយដល់ថ្ងៃសិរីមង្គល ❖
            </p>

            <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-lg mx-auto">
              <div className="bg-[#3A080F] p-3 sm:p-5 rounded-2xl border border-[#D4AF37]/40 shadow-lg">
                <span className="block text-2xl sm:text-4xl font-kantumruy font-bold text-[#D4AF37]">
                  {toKhmerDigits(timeLeft.days)}
                </span>
                <span className="text-[#FFFFFF]/90 font-kantumruy text-xs sm:text-sm mt-1 block">
                  ថ្ងៃ
                </span>
              </div>

              <div className="bg-[#3A080F] p-3 sm:p-5 rounded-2xl border border-[#D4AF37]/40 shadow-lg">
                <span className="block text-2xl sm:text-4xl font-kantumruy font-bold text-[#D4AF37]">
                  {toKhmerDigits(timeLeft.hours)}
                </span>
                <span className="text-[#FFFFFF]/90 font-kantumruy text-xs sm:text-sm mt-1 block">
                  ម៉ោង
                </span>
              </div>

              <div className="bg-[#3A080F] p-3 sm:p-5 rounded-2xl border border-[#D4AF37]/40 shadow-lg">
                <span className="block text-2xl sm:text-4xl font-kantumruy font-bold text-[#D4AF37]">
                  {toKhmerDigits(timeLeft.minutes)}
                </span>
                <span className="text-[#FFFFFF]/90 font-kantumruy text-xs sm:text-sm mt-1 block">
                  នាទី
                </span>
              </div>

              <div className="bg-[#3A080F] p-3 sm:p-5 rounded-2xl border border-[#D4AF37]/40 shadow-lg">
                <span className="block text-2xl sm:text-4xl font-kantumruy font-bold text-[#D4AF37]">
                  {toKhmerDigits(timeLeft.seconds)}
                </span>
                <span className="text-[#FFFFFF]/90 font-kantumruy text-xs sm:text-sm mt-1 block">
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
