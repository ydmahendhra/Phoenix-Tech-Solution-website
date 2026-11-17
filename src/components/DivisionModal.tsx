import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Layers, Sparkles, Terminal, Cpu, Palette } from 'lucide-react';
import type { Division } from '../types';

interface DivisionModalProps {
  division: Division | null;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export const DivisionModal: React.FC<DivisionModalProps> = ({
  division,
  onClose,
  onSelectService,
}) => {
  if (!division) return null;

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'software':
        return <Terminal className="w-8 h-8 text-cyan-400" />;
      case 'hardware':
        return <Cpu className="w-8 h-8 text-blue-400" />;
      case 'creative':
        return <Palette className="w-8 h-8 text-orange-400" />;
      default:
        return <Layers className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#070D1E] border border-cyan-500/30 p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.85)] z-10 custom-scrollbar"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-6 border-b border-slate-800 mb-8">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${division.accentColor}20, rgba(3,7,18,0.9))`,
                  border: `1px solid ${division.accentColor}50`,
                }}
              >
                {getDivisionIcon(division.id)}
              </div>
              <div>
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-1.5 inline-block"
                  style={{
                    color: division.accentColor,
                    borderColor: `${division.accentColor}40`,
                    background: `${division.accentColor}10`,
                  }}
                >
                  {division.badge}
                </span>
                <h3 className="font-['Syne'] text-2xl sm:text-3xl font-extrabold text-white">
                  {division.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  {division.tagline}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Division Summary */}
          <div className="mb-8 p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {division.description}
            </p>
          </div>

          {/* Dedicated Services Listing */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Specialized Division Services ({division.services.length})</span>
              </h4>
              <span className="text-xs text-slate-400">
                Official Capabilities
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {division.services.map((service, index) => (
                <div
                  key={service.id}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-lg bg-slate-800 text-cyan-400 flex items-center justify-center text-xs font-mono font-bold">
                        0{index + 1}
                      </span>
                      <h5 className="font-['Space_Grotesk'] font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h5>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Capabilities bullets */}
                    <div className="space-y-1.5 mb-5">
                      {service.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onSelectService(`${division.name} - ${service.title}`);
                      onClose();
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-orange-500 text-slate-300 hover:text-white text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 border border-slate-700 hover:border-orange-400"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Phoenix Tech Solution • High-Precision Technical Execution
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold transition-colors"
            >
              Close Dedicated View
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
