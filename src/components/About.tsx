import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const domains = [
    {
      icon: Code2,
      name: 'Software Solutions',
      summary: 'Scalable web platforms, modern UI/UX design, and automated business workflows.',
      color: 'text-cyan-400',
      border: 'hover:border-cyan-500/40',
    },
    {
      icon: Cpu,
      name: 'Hardware Solutions',
      summary: 'Industrial IoT engineering, precision PCB design, and intelligent automation systems.',
      color: 'text-sky-400',
      border: 'hover:border-sky-500/40',
    },
    {
      icon: Sparkles,
      name: 'Creative Solutions',
      summary: 'Digital content creation and cutting-edge generative AI video and image production.',
      color: 'text-orange-400',
      border: 'hover:border-orange-500/40',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#05070E] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill & Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono font-medium tracking-widest text-slate-300 uppercase mb-4"
          >
            About Company
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Engineering the next generation of intelligent technology.
          </motion.h2>

          {/* Meaningful, concise 3-sentence description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-4"
          >
            Phoenix Tech Solution is an innovation-driven technology enterprise dedicated to transforming complex challenges into practical, intelligent, and future-ready systems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm sm:text-base text-slate-400 leading-relaxed"
          >
            Operating across software engineering, embedded hardware, and generative creative media, we bridge the gap between conceptual vision and real-world execution through relentless technical innovation.
          </motion.p>
        </div>

        {/* 3 Domain Cards - Clean, structured, inspired by The Goat Scale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {domains.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 sm:p-8 rounded-2xl bg-[#090D1A]/50 border border-white/10 backdrop-blur-md transition-all duration-300 ${item.border} hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
