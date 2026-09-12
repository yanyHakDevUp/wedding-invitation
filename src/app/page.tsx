"use client";

import React, { useState } from "react";
import { InvitationEnvelope } from "@/components/wedding/InvitationEnvelope";
import { Hero } from "@/components/wedding/Hero";
import { Couple } from "@/components/wedding/Couple";
import { EmotionalQuote } from "@/components/wedding/EmotionalQuote";
import { WeddingDate } from "@/components/wedding/WeddingDate";
import { Gallery } from "@/components/wedding/Gallery";
import { WeddingVideo } from "@/components/wedding/WeddingVideo";
import { CinematicQuote } from "@/components/wedding/CinematicQuote";
import { CeremonyTimeline } from "@/components/wedding/CeremonyTimeline";
import { Family } from "@/components/wedding/Family";
import { Location } from "@/components/wedding/Location";
import { ShareQRCode } from "@/components/wedding/ShareQRCode";
import { FinalSection } from "@/components/wedding/FinalSection";
import { FloatingNav } from "@/components/wedding/FloatingNav";
import { MusicPlayer } from "@/components/wedding/MusicPlayer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#FAF8F5] text-[#2D2D2D] overflow-x-hidden">
      {/* Background Music Player starts as soon as the website opens */}
      <MusicPlayer />

      {/* 1. Closed Envelope Overlay */}
      {!isOpen && <InvitationEnvelope onOpen={() => setIsOpen(true)} />}

      {/* 2. Main Streamlined Wedding Invitation Experience */}
      {isOpen && (
        <div>
          <FloatingNav />
          <Hero />
          <Couple />
          <EmotionalQuote />
          <WeddingDate />
          <Gallery />
          <WeddingVideo />
          <CinematicQuote />
          <CeremonyTimeline />
          <Family />
          <Location />
          <ShareQRCode />
          <FinalSection />
        </div>
      )}
    </main>
  );
}
