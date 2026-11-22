import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Sparkles, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const divisions = [
    {
      id: 'software',
      number: '01',
      title: 'SOFTWARE SOLUTIONS',
      summary: 'High-performance digital architectures and enterprise automation systems.',
      icon: Code2,
      accentColor: 'from-cyan-500/20 to-blue-500/10',
      badgeColor: 'text-cyan-400 border-cyan-500/30',
      borderColor: 'hover:border-cyan-500/40',
      services: [
        'Web Development',
        'UI/UX Design',
        'SOP Development',
        'Web Automation',
        'Workflow Automation',
      ],
    },
    {
      id: 'hardware',
      number: '02',
      title: 'HARDWARE SOLUTIONS',
      summary: 'Embedded systems, precision electronics, and industrial telemetry.',
      icon: Cpu,
      accentColor: 'from-sky-500/20 to-indigo-500/10',
      badgeColor: 'text-sky-400 border-sky-500/30',
      borderColor: 'hover:border-sky-500/40',
      services: [
        'IoT Projects',
        'PCB Design',
        'Industrial Automation',
        'Home Automation',
      ],
    },
    {
      id: 'creative',
      number: '03',
      title: 'CREATIVE SOLUTIONS',
      summary: 'High-impact multimedia production and cutting-edge generative AI media.',
      icon: Sparkles,
      accentColor: 'from-orange-500/20 to-amber-500/10',
      badgeColor: 'text-orange-400 border-orange-500/30',
      borderColor: 'hover:border-orange-500/40',
      services: [
        'Content Creation',
        'AI Video Creation',
        'AI Image Creation',
      ],
    },
  ];

  const handleInquire = (serviceName: string) => {
    onSelectService(serviceName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#05070E] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono font-medium tracking-widest text-slate-300 uppercase mb-4"
          >
            Services & Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Structured solutions for modern enterprise needs.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto"
          >
            Three specialized divisions delivering technical precision from conceptual architecture to complete deployment.
          </motion.p>
        </div>

        {/* 3 Structured Service Cards (The Goat Scale Inspired Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {divisions.map((division, idx) => {
            const Icon = division.icon;

            return (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`group relative rounded-2xl p-7 sm:p-8 bg-[#090D1A]/60 border border-white/10 backdrop-blur-xl transition-all duration-300 ${division.borderColor} hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                {/* Subtle Hover Gradient Lighting */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${division.accentColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Top Row: Index Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      /{division.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5 text-slate-200" />
                    </div>
                  </div>

                  {/* Title & Short Summary */}
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-white mb-2">
                    {division.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {division.summary}
                  </p>

                  {/* Structured Services List */}
                  <div className="pt-4 border-t border-white/5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
                      Core Offerings
                    </span>
                    <ul className="space-y-2.5">
                      {division.services.map((service, sIdx) => (
                        <li
                          key={sIdx}
                          onClick={() => handleInquire(`${division.title} - ${service}`)}
                          className="flex items-center justify-between text-xs sm:text-sm text-slate-300 hover:text-white py-1 px-2 -mx-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group/item"
                        >
                          <span className="font-medium">{service}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-cyan-400 transition-colors" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/5">
                  <button
                    onClick={() => handleInquire(division.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                  >
                    <span>Inquire Division</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
