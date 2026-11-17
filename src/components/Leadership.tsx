import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Briefcase,
  GraduationCap,
  Quote,
  ExternalLink,
  MessageCircle
} from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Executive Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            COMPANY <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400">LEADERSHIP</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-400 leading-relaxed font-['Plus_Jakarta_Sans']"
          >
            Guiding technological innovation, engineering excellence, and indigenous development for Phoenix Tech Solution.
          </motion.p>
        </div>

        {/* Clean, Elegant Two-Column Executive Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto mb-20">
          {/* LEADER 1: Y D MAHENDHRA - FOUNDER & CEO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl p-8 sm:p-10 bg-[#070D1E]/80 border border-orange-500/25 hover:border-orange-500/50 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Profile Image & Title */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <div className="relative w-36 h-48 sm:w-40 sm:h-52 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border border-orange-500/30">
                  <img
                    src="/assets/yd-mahendhra.jpg"
                    alt="Y D Mahendhra - Founder & CEO"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="text-center sm:text-left flex-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 block mb-1">
                    Founder & CEO
                  </span>
                  <h3 className="font-['Syne'] text-2xl sm:text-3xl font-extrabold text-white mb-1.5">
                    Y D Mahendhra
                  </h3>
                  <p className="text-xs text-slate-300 flex items-center justify-center sm:justify-start gap-1.5 mb-3 font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>B.E. Computer Science & Engineering – IoT</span>
                  </p>
                  <p className="text-xs text-amber-300/90 font-medium italic">
                    "Build a New Idea. Build a New India."
                  </p>
                </div>
              </div>

              {/* Bio Narrative */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Technology enthusiast and aspiring entrepreneur pursuing innovation through software, hardware, and emerging technologies. Dedicated to transforming ideas into intelligent solutions, advancing IoT and embedded systems, and contributing to India’s indigenous technological development.
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  'Internet of Things (IoT)',
                  'Embedded Systems',
                  'UI/UX Design',
                  'AI Creative Technologies',
                  'Defence Technology Aspiration'
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-400 font-medium">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/phoenix-tech-solution-826b2a425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-[#0077B5] border border-slate-700/60 hover:border-transparent text-slate-200 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href="https://www.instagram.com/phoenix.mahendhra?vrfl=MXYxZjg1ZWxqZmpjcw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 border border-slate-700/60 hover:border-transparent text-slate-200 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href="https://wa.me/918220571972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-emerald-600 border border-slate-700/60 hover:border-transparent text-slate-200 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* LEADER 2: PRAVEEN KUMAR P - CO-FOUNDER & CFO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-3xl p-8 sm:p-10 bg-[#070D1E]/80 border border-cyan-500/25 hover:border-cyan-500/50 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Profile Image & Title */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <div className="relative w-36 h-48 sm:w-40 sm:h-52 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border border-cyan-500/30">
                  <img
                    src="/assets/praveen-kumar.jpg"
                    alt="Praveen Kumar P - Co-Founder & CFO"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="text-center sm:text-left flex-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                    Co-Founder & CFO
                  </span>
                  <h3 className="font-['Syne'] text-2xl sm:text-3xl font-extrabold text-white mb-1.5">
                    Praveen Kumar P
                  </h3>
                  <p className="text-xs text-slate-300 flex items-center justify-center sm:justify-start gap-1.5 mb-3 font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>B.E. Computer Science & Engineering – IoT</span>
                  </p>
                  <p className="text-xs text-cyan-300/90 font-medium italic">
                    "Build a New Idea. Build a New India."
                  </p>
                </div>
              </div>

              {/* Bio Narrative */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Co-Founder and Chief Financial Officer focusing on financial planning, business strategy, resource management, and sustainable organizational growth. Passionate about IoT innovation, embedded technologies, UI/UX design, 3D design, and indigenous engineering solutions.
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  'Internet of Things (IoT)',
                  'Financial Planning & Strategy',
                  'UI/UX Design',
                  'Embedded Systems',
                  '3D Design'
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-400 font-medium">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/phoenix-tech-solution-826b2a425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-[#0077B5] border border-slate-700/60 hover:border-transparent text-slate-200 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href="https://www.instagram.com/phoenix.mahendhra?vrfl=MXYxZjg1ZWxqZmpjcw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 border border-slate-700/60 hover:border-transparent text-slate-200 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href="https://wa.me/918220571972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-emerald-600 border border-slate-700/60 hover:border-transparent text-slate-200 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Clean Signature Quote Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 sm:p-12 bg-[#070D1E]/90 border border-orange-500/25 backdrop-blur-xl text-center max-w-4xl mx-auto"
        >
          <Quote className="w-7 h-7 text-orange-400 mx-auto mb-3 opacity-80" />
          <h3 className="font-['Syne'] text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4">
            "Dream Beyond Limits. Innovate Beyond Boundaries. Build for the Future."
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            "Our mission is to transform innovative ideas into meaningful technologies, explore indigenous solutions, support sustainable entrepreneurship, and contribute to building a stronger, smarter, and technologically advanced India."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 pt-4 border-t border-slate-800 text-xs">
            <div>
              <span className="font-bold text-white uppercase block">Y D Mahendhra</span>
              <span className="text-orange-400 font-mono">Founder & CEO</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <div>
              <span className="font-bold text-white uppercase block">Praveen Kumar P</span>
              <span className="text-cyan-400 font-mono">Co-Founder & CFO</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
