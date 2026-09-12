"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Music, VolumeX } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";

interface MusicPlayerProps {
  autoStart?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoStart = true }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Extract YouTube ID if URL is from YouTube
  const getYouTubeId = (url: string) => {
    if (!url) return null;
    const match = url.match(/(?:v=|\/embed\/|youtu\.be\/|\/v\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  const youtubeId = getYouTubeId(weddingConfig.media.audioUrl);

  const startMusic = useCallback(() => {
    if (youtubeId && iframeRef.current) {
      try {
        iframeRef.current.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "playVideo", args: [] }),
          "*"
        );
        setIsPlaying(true);
      } catch (err) {
        console.log("YouTube play error:", err);
      }
    } else if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play error:", err));
    }
  }, [youtubeId]);

  const toggleMusic = () => {
    if (youtubeId && iframeRef.current) {
      const command = isPlaying ? "pauseVideo" : "playVideo";
      try {
        iframeRef.current.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: command, args: [] }),
          "*"
        );
        setIsPlaying(!isPlaying);
      } catch (err) {
        console.log("YouTube toggle error:", err);
      }
    } else if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Audio toggle error:", err));
      }
    }
  };

  // Auto-play music immediately on mount (as soon as website opens)
  useEffect(() => {
    if (autoStart) {
      startMusic();

      const t1 = setTimeout(() => startMusic(), 600);
      const t2 = setTimeout(() => startMusic(), 1500);

      const handleFirstInteraction = () => {
        startMusic();
        window.removeEventListener("click", handleFirstInteraction);
        window.removeEventListener("touchstart", handleFirstInteraction);
      };

      window.addEventListener("click", handleFirstInteraction);
      window.addEventListener("touchstart", handleFirstInteraction);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        window.removeEventListener("click", handleFirstInteraction);
        window.removeEventListener("touchstart", handleFirstInteraction);
      };
    }
  }, [autoStart, startMusic]);

  // Listen for custom event trigger
  useEffect(() => {
    const handlePlayEvent = () => startMusic();
    window.addEventListener("play_wedding_music", handlePlayEvent);
    return () => window.removeEventListener("play_wedding_music", handlePlayEvent);
  }, [startMusic]);

  return (
    <>
      {youtubeId ? (
        <iframe
          ref={iframeRef}
          className="hidden pointer-events-none"
          width="0"
          height="0"
          src={`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&autoplay=1&loop=1&playlist=${youtubeId}`}
          allow="autoplay"
        />
      ) : (
        <audio
          ref={audioRef}
          loop
          autoPlay
          preload="auto"
          src={weddingConfig.media.audioUrl}
        />
      )}

      {/* Floating Music Toggle Button */}
      <button
        onClick={toggleMusic}
        title={isPlaying ? "បិទតន្ត្រី (Turn Off Music)" : "បើកតន្ត្រី (Turn On Music)"}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5E5C0] text-[#1A0408] flex items-center justify-center shadow-2xl border border-white/40 cursor-pointer transition-all duration-300 hover:scale-110 ${
          isPlaying ? "animate-pulse shadow-[0_0_25px_rgba(212,175,55,0.8)]" : ""
        }`}
      >
        {isPlaying ? <Music className="w-5 h-5 sm:w-6 sm:h-6" /> : <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />}
      </button>
    </>
  );
};

