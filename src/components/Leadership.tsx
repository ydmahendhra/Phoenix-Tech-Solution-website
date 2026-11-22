import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, GraduationCap, Sparkles } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from './SocialIcons';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="relative py-24 sm:py-32 bg-[#05070E] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono font-medium tracking-widest text-slate-300 uppercase mb-4"
          >
            Leadership
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Executive Leadership
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-400"
          >
            Guiding technological strategy, financial discipline, and engineering innovation at Phoenix Tech Solution.
          </motion.p>
        </div>

        {/* Two Executive Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Executive 1: Y D Mahendhra - Founder & CEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#090D1A]/60 border border-white/10 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:border-orange-500/30 group"
          >
            <div>
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
                {/* Photograph */}
                <div className="w-32 h-44 sm:w-36 sm:h-48 rounded-xl overflow-hidden flex-shrink-0 border border-white/10 bg-slate-900 shadow-md">
                  <img
                    src="/assets/yd-mahendhra.jpg"
                    alt="Y D Mahendhra – Founder & CEO"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-semibold block mb-1">
                    Founder & CEO
                  </span>
                  <h3 className="font-['Syne'] text-2xl font-bold text-white mb-1.5">
                    Y D Mahendhra
                  </h3>
                  <p className="text-xs text-slate-400 flex items-center justify-center sm:justify-start gap-1.5 mb-3 font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>B.E. Computer Science & Engineering (IoT)</span>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    Directing overall technological vision, embedded IoT systems architecture, and intelligent software engineering.
                  </p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-white/5 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2.5">
                  Core Expertise
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Internet of Things (IoT)',
                    'Embedded Systems',
                    'UI/UX Design',
                    'AI Creative Technologies',
                  ].map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 border border-white/5 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links & Direct Connect */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Connect with CEO:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/phoenix-tech-solution-826b2a425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-[#0077B5] text-slate-400 hover:text-white transition-colors"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/phoenix.mahendhra?vrfl=MXYxZjg1ZWxqZmpjcw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-pink-600 text-slate-400 hover:text-white transition-colors"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/918220571972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-emerald-600 text-slate-400 hover:text-white transition-colors"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Executive 2: Praveen Kumar P - Co-Founder & CFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#090D1A]/60 border border-white/10 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/30 group"
          >
            <div>
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
                {/* Photograph */}
                <div className="w-32 h-44 sm:w-36 sm:h-48 rounded-xl overflow-hidden flex-shrink-0 border border-white/10 bg-slate-900 shadow-md">
                  <img
                    src="/assets/praveen-kumar.jpg"
                    alt="Praveen Kumar P – Co-Founder & CFO"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                    Co-Founder & CFO
                  </span>
                  <h3 className="font-['Syne'] text-2xl font-bold text-white mb-1.5">
                    Praveen Kumar P
                  </h3>
                  <p className="text-xs text-slate-400 flex items-center justify-center sm:justify-start gap-1.5 mb-3 font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-orange-400" />
                    <span>B.E. Computer Science & Engineering (IoT)</span>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    Leading strategic financial planning, resource allocation, sustainable business growth, and IoT embedded innovation.
                  </p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-white/5 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2.5">
                  Core Expertise
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Internet of Things (IoT)',
                    'Financial Strategy & Planning',
                    'UI/UX Design',
                    'Embedded Systems',
                    '3D Design',
                  ].map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 border border-white/5 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Signature Quote & Direct Inquiry */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-400 font-medium italic text-[11px] text-center sm:text-left">
                "Dream Beyond Limits. Innovate Beyond Boundaries."
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-[11px] flex-shrink-0"
              >
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Contact Desk</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
