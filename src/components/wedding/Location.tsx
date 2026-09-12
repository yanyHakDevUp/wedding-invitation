"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";
import { MapPin, Navigation } from "lucide-react";

export const Location: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF8F5] overflow-hidden" id="location">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#6B0D18] font-title-khmer text-sm sm:text-base font-bold tracking-widest uppercase mb-2"
          >
            ទីកន្លែងរៀបចំពិធី
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-title-khmer font-extrabold text-[#6B0D18]"
          >
            ទីតាំងប្រារព្ធពិធី
          </motion.h2>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#6B0D18] to-transparent mx-auto mt-4" />
        </div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card-white rounded-3xl p-6 sm:p-10 border-2 border-[#6B0D18]/25 space-y-8"
        >
          {/* Venue Info Details */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#6B0D18]/20">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6B0D18]/15 border border-[#6B0D18]/40 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#6B0D18]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-title-khmer font-bold text-[#6B0D18]">
                    {weddingConfig.wedding.venueName}
                  </h3>
                  <span className="text-[#6B0D18] font-title-khmer text-sm font-semibold">
                    {weddingConfig.wedding.hallName}
                  </span>
                </div>
              </div>

              <p className="text-[#444444] font-kantumruy text-sm sm:text-base font-light pl-13">
                អាសយដ្ឋាន៖ {weddingConfig.wedding.address}
              </p>
            </div>

            {/* Google Maps Button in Deep Cherry Red */}
            <a
              href={weddingConfig.wedding.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#6B0D18] via-[#8A1020] to-[#6B0D18] text-[#FFFFFF] font-title-khmer font-bold text-sm sm:text-base shadow-lg hover:shadow-[0_0_20px_rgba(107,13,24,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Navigation className="w-4 h-4 fill-[#FFFFFF]" />
              បើកទីតាំងក្នុង Google Maps
            </a>
          </div>

          {/* Embedded Visual Google Map */}
          <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#6B0D18]/25 shadow-inner">
            <iframe
              src={weddingConfig.wedding.embedMapUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
