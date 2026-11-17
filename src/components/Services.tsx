import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Palette, ArrowRight, Sparkles } from 'lucide-react';
import { DIVISIONS } from '../data/servicesData';
import type { Division } from '../types';
import { DivisionModal } from './DivisionModal';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedDivisionModal, setSelectedDivisionModal] = useState<Division | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'software':
        return <Terminal className="w-8 h-8 text-cyan-400" />;
      case 'hardware':
        return <Cpu className="w-8 h-8 text-blue-400" />;
      case 'creative':
        return <Palette className="w-8 h-8 text-orange-400" />;
      default:
        return <Terminal className="w-8 h-8 text-cyan-400" />;
    }
  };

  const handleCardClick = (division: Division) => {
    setSelectedDivisionModal(division);
  };

  return (
    <section id="services" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Dynamic Animated Motion Lightings & Floating Energy Nodes */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.12, 0.22, 0.12],
          x: [-30, 30, -30],
          y: [-20, 20, -20],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.28, 0.15],
          x: [40, -40, 40],
          y: [30, -30, 30],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-600/15 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Staggered Kinetic Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4 shadow-[0_0_20px_rgba(0,229,255,0.2)]"
          >
            <motion.span
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </motion.span>
            <span>Three Core Engineering Divisions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="font-['Syne'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            OUR SPECIALIZED{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400 drop-shadow-[0_0_35px_rgba(255,106,0,0.3)]">
              SERVICES
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed font-['Plus_Jakarta_Sans']"
          >
            Distinct divisions delivering specialized capabilities in intelligent software systems, precision electronics, and next-generation creative media.
          </motion.p>
        </div>

        {/* 3 Premium 3D Interactive Division Cards with Advanced Hover Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch perspective-container">
          {DIVISIONS.map((division, index) => {
            const isHovered = hoveredCardId === division.id;
            const isCreative = division.id === 'creative';

            return (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.18, ease: 'easeOut' }}
                whileHover={{
                  y: -10,
                  rotateX: 2,
                  rotateY: index === 0 ? 3 : index === 2 ? -3 : 0,
                  scale: 1.02,
                  transition: { duration: 0.35, ease: 'easeOut' },
                }}
                onMouseEnter={() => setHoveredCardId(division.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => handleCardClick(division)}
                className={`group relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between cursor-pointer transition-all duration-500 overflow-hidden backdrop-blur-2xl ${
                  isCreative
                    ? 'bg-gradient-to-b from-[#150F26]/90 via-[#0B0A18]/95 to-[#050814]/98 border border-orange-500/35 hover:border-orange-400 hover:shadow-[0_25px_60px_rgba(255,106,0,0.3)]'
                    : 'bg-gradient-to-b from-[#0D1836]/90 via-[#081024]/95 to-[#050A18]/98 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_25px_60px_rgba(0,229,255,0.25)]'
                }`}
              >
                {/* Motion Gradient Lighting Bloom */}
                <motion.div
                  animate={{
                    opacity: isHovered ? 0.9 : 0.35,
                    scale: isHovered ? 1.25 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-[80px] pointer-events-none"
                  style={{ background: division.accentColor }}
                />

                {/* Animated Ambient Line Trace on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.15 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center p-3.5 shadow-xl relative"
                      style={{
                        background: `linear-gradient(135deg, ${division.accentColor}25, rgba(7,13,30,0.9))`,
                        border: `1.5px solid ${division.accentColor}70`,
                      }}
                    >
                      {getDivisionIcon(division.id)}
                      <span className="absolute -inset-1 rounded-2xl bg-cyan-400/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10" />
                    </motion.div>

                    <span
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border shadow-sm"
                      style={{
                        color: division.accentColor,
                        borderColor: `${division.accentColor}50`,
                        background: `${division.accentColor}15`,
                      }}
                    >
                      {division.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-['Syne'] text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-colors">
                    {division.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-400 mb-6 leading-relaxed">
                    {division.tagline}
                  </p>

                  {/* Service List Preview with Staggered Icon Glow */}
                  <div className="space-y-3 pt-5 border-t border-slate-800/80 mb-6">
                    {division.services.map((service, sIndex) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + sIndex * 0.05 }}
                        className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 group/item hover:text-white transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover/item:bg-orange-400 group-hover/item:scale-125 transition-all flex-shrink-0 shadow-[0_0_8px_#00E5FF]" />
                        <span className="font-medium tracking-wide">{service.title}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Trigger with Animated Arrow Motion */}
                <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wide text-slate-300 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                    View Dedicated Services
                  </span>
                  <motion.div
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-md"
                    style={{
                      background: `${division.accentColor}25`,
                      color: division.accentColor,
                      border: `1px solid ${division.accentColor}50`,
                    }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Deep-dive */}
      <DivisionModal
        division={selectedDivisionModal}
        onClose={() => setSelectedDivisionModal(null)}
        onSelectService={onSelectService}
      />
    </section>
  );
};
