import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, User } from 'lucide-react';
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
            Guiding technological strategy, engineering discipline, and innovation at Phoenix Tech Solution.
          </motion.p>
        </div>

        {/* Two Executive Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Executive 1: Y D Mahendhra - Founder & CEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#090D1A]/60 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row gap-6 items-center sm:items-start transition-all duration-300 hover:border-orange-500/30"
          >
            {/* Photograph */}
            <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-xl overflow-hidden flex-shrink-0 border border-white/10 bg-slate-900 shadow-md">
              <img
                src="/assets/yd-mahendhra.jpg"
                alt="Y D Mahendhra – Founder & CEO"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1 flex flex-col justify-between text-center sm:text-left h-full">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-semibold block mb-1">
                  Founder & CEO
                </span>
                <h3 className="font-['Syne'] text-2xl font-bold text-white mb-1">
                  Y D Mahendhra
                </h3>
                <p className="text-xs text-slate-400 mb-3 font-medium">
                  B.E. Computer Science & Engineering (IoT)
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Directing overall strategy, embedded IoT systems architecture, and intelligent software engineering.
                </p>
              </div>

              {/* Minimal Social Links */}
              <div className="flex items-center justify-center sm:justify-start gap-3 pt-3 border-t border-white/5">
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

          {/* Executive 2: Co-Founder & COO - Profile details to be provided */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#090D1A]/40 border border-white/5 backdrop-blur-xl flex flex-col sm:flex-row gap-6 items-center sm:items-start"
          >
            {/* Minimal Avatar Frame */}
            <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-xl flex-shrink-0 border border-dashed border-white/10 bg-white/[0.02] flex flex-col items-center justify-center text-slate-600">
              <User className="w-10 h-10 mb-2 opacity-50" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                Pending
              </span>
            </div>

            {/* Profile Info */}
            <div className="flex-1 flex flex-col justify-between text-center sm:text-left h-full">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                  Co-Founder & COO
                </span>
                <h3 className="font-['Syne'] text-2xl font-bold text-white mb-1">
                  Executive Appointment
                </h3>
                <p className="text-xs text-slate-400 mb-3 font-medium">
                  Operations & Execution
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Profile details and executive background will be announced shortly.
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                Update in progress
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
