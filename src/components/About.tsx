import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Palette, FileText, Sparkles, Flag, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-orange-500/30 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Corporate Profile</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6"
          >
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400">PHOENIX TECH SOLUTION</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed font-['Plus_Jakarta_Sans']"
          >
            An innovation-driven technology company dedicated to transforming ideas into intelligent, practical, and future-ready solutions.
          </motion.p>
        </div>

        {/* Official Company Overview Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Official Description Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#070D1E]/90 border border-cyan-500/30 backdrop-blur-xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group hover:border-cyan-400/50 transition-all duration-500"
          >
            {/* Top decorative circuit lines */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 h-1 w-28 bg-gradient-to-r from-orange-500 to-cyan-400" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.25)]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white tracking-wide">
                      Official Company Overview
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Engineering Innovation. Building the Future.
                    </p>
                  </div>
                </div>
              </div>

              {/* Official Corporate Text */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-950/70 border border-slate-800/90 mb-6 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-['Plus_Jakarta_Sans']">
                <p>
                  <strong className="text-white font-bold">Phoenix Tech Solution</strong> is an innovation-driven technology company dedicated to transforming ideas into intelligent, practical, and future-ready solutions.
                </p>

                <p>
                  We specialize in three major domains: <strong className="text-cyan-300 font-semibold">Software Development, Hardware Engineering, and Creative Technologies.</strong>
                </p>

                <p className="text-slate-300">
                  Our services include web development, UI/UX design, workflow automation, IoT projects, PCB design, industrial and home automation, content creation, and AI-powered video and image generation.
                </p>

                <p>
                  We aim to bridge the gap between imagination and implementation by combining engineering, creativity, and emerging technologies.
                </p>

                <p>
                  Driven by innovation and a vision for indigenous technological development, we aspire to contribute to India's growing technology ecosystem, explore advanced engineering opportunities, and develop solutions for real-world challenges.
                </p>

                <p>
                  Our long-term ambition includes exploring research and development in IoT, intelligent automation, embedded systems, and defence-oriented technologies.
                </p>

                <p className="text-slate-200">
                  At Phoenix Tech Solution, we believe every great innovation begins with an idea and grows through creativity, determination, and execution.
                </p>

                {/* Core Philosophy Highlight */}
                <div className="pt-4 mt-2 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-3 bg-gradient-to-r from-orange-950/40 via-amber-950/20 to-cyan-950/40 p-4 rounded-xl border border-orange-500/30">
                  <div className="flex items-center gap-2">
                    <Flag className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 block font-bold">
                        Our Philosophy
                      </span>
                      <span className="text-sm font-extrabold text-white">
                        "Build a New Idea. Build a New India."
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-cyan-300 font-mono font-semibold">
                    Phoenix Tech Solution
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <span className="flex items-center gap-2 text-slate-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Phoenix Tech Solution
              </span>
              <span className="text-slate-400 font-medium">
                Chennai, Tamil Nadu, India
              </span>
            </div>
          </motion.div>

          {/* 3D Visual Asset Card with Official Brand Logo & Identity */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-center items-center p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0B1226]/90 to-[#070D1E]/95 border border-orange-500/25 backdrop-blur-xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group hover:border-orange-500/40 transition-all duration-500"
          >
            {/* Ambient fire glow */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-600/20 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6 rounded-2xl p-[2px] bg-gradient-to-br from-orange-500 via-amber-400 to-cyan-400 shadow-[0_0_35px_rgba(255,106,0,0.35)] transition-transform duration-500 group-hover:scale-105">
              <img
                src="/assets/phoenix-logo.jpg"
                alt="Phoenix Tech Solution Official Emblem"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <h3 className="font-['Syne'] text-xl font-bold text-white text-center mb-1">
              PHOENIX TECH SOLUTION
            </h3>
            <p className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-cyan-400 text-center mb-4 font-semibold">
              Engineering Innovation. Building the Future.
            </p>
            <p className="text-xs text-slate-300 text-center max-w-xs leading-relaxed">
              Unifying software intelligence, hardware engineering, and creative digital capabilities under one visionary roof.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900 border border-slate-800 text-slate-300">
                Software Development
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900 border border-slate-800 text-slate-300">
                Hardware Engineering
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900 border border-slate-800 text-slate-300">
                Creative Technologies
              </span>
            </div>
          </motion.div>
        </div>

        {/* The Three Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Software Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#070D1E]/70 border border-cyan-500/20 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 shadow-lg group"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
              <Terminal className="w-6 h-6" />
            </div>
            <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
              Software Solutions
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Architecting intelligent web platforms, workflow automations, intuitive UI/UX design, and structured SOP development for scalable digital infrastructure.
            </p>
          </motion.div>

          {/* Pillar 2: Hardware Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#070D1E]/70 border border-blue-500/20 hover:border-blue-400/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 shadow-lg group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
              Hardware Solutions
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Designing precision circuit boards, IoT connected hardware, industrial automation systems, and smart home automation architectures.
            </p>
          </motion.div>

          {/* Pillar 3: Creative Digital Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#070D1E]/70 border border-orange-500/20 hover:border-orange-400/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 shadow-lg group"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-950/60 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-5 group-hover:scale-110 transition-transform">
              <Palette className="w-6 h-6" />
            </div>
            <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
              Creative Solutions
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Generating state-of-the-art AI synthesized video, high-resolution generative AI imagery, and compelling multimedia content creation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
