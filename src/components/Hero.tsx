import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Volume2, VolumeX, Layers, Send } from 'lucide-react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030712]"
    >
      {/* Fallback Poster Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(3, 7, 18, 0.4) 0%, rgba(3, 7, 18, 0.95) 100%), url('/assets/phoenix-logo.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Cinematic Full-screen Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-opacity duration-1000"
      >
        <source src="/assets/phoenix-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Transparent Overlay & Cinematic Vignette for Ultra High Contrast Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/75 via-[#030712]/55 to-[#030712] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#030712]/50 to-[#030712]/95 z-10 pointer-events-none" />

      {/* Subtle Ambient Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] pointer-events-none z-10"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none z-10"
      />

      {/* Video Audio Control Pill */}
      <div className="absolute bottom-8 right-8 z-30 hidden sm:block">
        <button
          onClick={toggleSound}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-slate-700/60 hover:border-cyan-400/50 backdrop-blur-md text-xs font-medium text-slate-300 hover:text-white transition-all shadow-lg cursor-pointer"
          title={isMuted ? 'Unmute Cinematic Audio' : 'Mute Audio'}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-orange-400" />
              <span>Audio Muted</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Cinematic Audio On</span>
            </>
          )}
        </button>
      </div>

      {/* Hero Content with Kinetic Reveal */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,229,255,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-200 uppercase font-['Space_Grotesk']">
            Next-Gen Technology & Engineering Powerhouse
          </span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 ml-0.5" />
        </motion.div>

        {/* Company Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="relative mb-6"
        >
          <h1 className="font-['Syne'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] text-white">
            <span className="block drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
              PHOENIX
            </span>
            <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.2em] uppercase font-['Space_Grotesk'] bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,229,255,0.45)] mt-1 sm:mt-2">
              TECH SOLUTION
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mb-6"
        >
          <p className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-slate-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Engineering Innovation. Building the Future.
          </p>
        </motion.div>

        {/* Supporting Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Transforming ideas into intelligent software, advanced hardware solutions, and creative digital experiences.
          </p>
        </motion.div>

        {/* Action Buttons with Magnetic Scaling Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Explore Our Services Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-full group cursor-pointer shadow-[0_0_25px_rgba(0,229,255,0.35)]"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-400 group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300"></span>
            <span className="relative w-full sm:w-auto px-8 py-3.5 transition-all ease-out bg-[#060D20] rounded-full group-hover:bg-opacity-0 duration-300 flex items-center justify-center gap-2.5 text-white">
              <Layers className="w-4 h-4 text-cyan-300 group-hover:text-white transition-colors" />
              <span>Explore Our Services</span>
            </span>
          </motion.button>

          {/* Contact Us Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 shadow-[0_0_25px_rgba(255,106,0,0.45)] transition-all duration-300 cursor-pointer flex items-center gap-2.5"
          >
            <Send className="w-4 h-4 text-white" />
            <span>Contact Us</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Elegant Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[11px] font-medium tracking-widest uppercase text-slate-400 group-hover:text-cyan-400 transition-colors">
          Scroll Down
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 group-hover:border-cyan-400 p-1 flex justify-center transition-colors">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-2 bg-gradient-to-b from-orange-500 to-cyan-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
