import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Cpu,
  Layers,
  Sparkles,
  Shield,
  Lightbulb,
  Target,
  Compass,
  Quote,
  CheckCircle2,
  GraduationCap,
  Radar,
  Palette,
  Terminal,
  Flag
} from 'lucide-react';

interface FounderProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FounderProfileModal: React.FC<FounderProfileModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'motivation' | 'skills' | 'vision' | 'defence' | 'philosophy'>('overview');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 25 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#050A18] border border-cyan-500/30 p-6 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.95)] z-10 custom-scrollbar text-slate-100"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-400 hover:text-white hover:border-orange-500 transition-colors z-20"
            aria-label="Close Profile"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Header Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#09142E] via-[#070D1E] to-[#040814] border border-cyan-500/25 p-6 sm:p-8 mb-8 overflow-hidden shadow-2xl">
            {/* Ambient Lighting Orbs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/15 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Founder Portrait with Glowing 3D Bevel Frame */}
              <div className="relative w-44 sm:w-52 aspect-[3/4] rounded-2xl p-[2px] bg-gradient-to-b from-orange-500 via-amber-400 to-cyan-400 shadow-[0_0_35px_rgba(255,106,0,0.35)] flex-shrink-0 group">
                <img
                  src="/assets/yd-mahendhra.jpg"
                  alt="Y D Mahendhra - Founder & CEO"
                  className="w-full h-full object-cover object-top rounded-2xl"
                />
                <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-cyan-400/30 text-center">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-cyan-300">
                    Founder & CEO
                  </span>
                </div>
              </div>

              {/* Founder Quick Bio & Identity */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-orange-500/20 text-orange-400 border border-orange-500/40">
                    Executive Leadership
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/70 text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>B.E. CSE – IoT</span>
                  </span>
                </div>

                <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
                  Y D Mahendhra
                </h2>
                <p className="font-['Space_Grotesk'] text-base sm:text-lg font-semibold text-cyan-300 mb-4">
                  Founder & Chief Executive Officer (CEO) – Phoenix Tech Solution
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  Technology enthusiast and aspiring entrepreneur pursuing innovation through software, hardware, and emerging technologies. Dedicated to transforming original ideas into practical solutions and contributing to India’s technological future.
                </p>

                {/* Core Philosophy Badge & Direct Networks */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-900/90 border border-amber-500/30 shadow-inner">
                    <Flag className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-amber-300">
                      "Build a New Idea. Build a New India."
                    </span>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/phoenix-tech-solution-826b2a425"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-[#0077B5] border border-cyan-500/40 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://www.instagram.com/phoenix.mahendhra?vrfl=MXYxZjg1ZWxqZmpjcw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 border border-orange-500/40 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-2xl bg-slate-950 border border-slate-800">
            {[
              { id: 'overview', label: 'About Founder', icon: Compass },
              { id: 'motivation', label: 'Why I Founded Phoenix', icon: Lightbulb },
              { id: 'skills', label: 'Technical Expertise', icon: Cpu },
              { id: 'vision', label: 'Future Vision', icon: Target },
              { id: 'defence', label: 'Defence Aspiration', icon: Radar },
              { id: 'philosophy', label: 'Leadership Mindset', icon: Shield },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-cyan-500 text-white shadow-lg'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Tab Content */}
          <div className="min-h-[350px]">
            {/* TAB 1: OVERVIEW & CREDENTIALS */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <span>Professional Background</span>
                  </h3>
                  <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                    <p>
                      Y D Mahendhra is a technology enthusiast and aspiring entrepreneur pursuing innovation through software, hardware, and emerging technologies. With an academic foundation in <strong className="text-white">Computer Science and Engineering – Internet of Things (CSE-IoT)</strong>, his primary interests lie in IoT, embedded systems, and technology-driven innovation.
                    </p>
                    <p>
                      He firmly believes that technology should go beyond conventional boundaries and become a powerful tool for solving real-world challenges. His entrepreneurial vision is driven by the ambition to transform new ideas into meaningful technological solutions and contribute actively to India's technological development.
                    </p>
                    <p>
                      As Founder and CEO of Phoenix Tech Solution, he aims to establish a technology-driven organization that unifies innovation, engineering, creativity, and practical problem-solving under one cohesive roof.
                    </p>
                  </div>
                </div>

                {/* Key Credentials Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800">
                    <span className="text-xs font-mono text-cyan-400 uppercase block mb-1">
                      Academic Qualification
                    </span>
                    <h4 className="text-sm font-bold text-white mb-1">
                      B.E. CSE – IoT
                    </h4>
                    <p className="text-xs text-slate-400">
                      Computer Science & Engineering (Internet of Things)
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800">
                    <span className="text-xs font-mono text-orange-400 uppercase block mb-1">
                      Primary Area of Interest
                    </span>
                    <h4 className="text-sm font-bold text-white mb-1">
                      Internet of Things (IoT)
                    </h4>
                    <p className="text-xs text-slate-400">
                      Connected Devices & Smart Architectures
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800">
                    <span className="text-xs font-mono text-amber-400 uppercase block mb-1">
                      Long-Term Ambition
                    </span>
                    <h4 className="text-sm font-bold text-white mb-1">
                      Indigenous Innovation
                    </h4>
                    <p className="text-xs text-slate-400">
                      Defence-Oriented Solutions & National Tech Growth
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: MOTIVATION & CORE PHILOSOPHY */}
            {activeTab === 'motivation' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
                    <Lightbulb className="w-5 h-5 text-orange-400" />
                    <span>Entrepreneurial Motivation</span>
                  </h3>
                  <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                    <p>
                      Phoenix Tech Solution was founded with a clear vision: to turn innovative ideas into practical technological solutions.
                    </p>
                    <p>
                      The motivation behind starting this company comes from a deep conviction that India has enormous potential to become a global leader in technology, engineering, innovation, and indigenous product development.
                    </p>
                    <p>
                      Rather than limiting innovation to a single technology domain, Phoenix Tech Solution brings together software development, hardware engineering, automation, and creative digital technologies. The company aims to create opportunities to explore new possibilities, experiment with emerging technologies, and develop solutions that address practical challenges.
                    </p>
                  </div>
                </div>

                {/* The Core Philosophy Banner */}
                <div className="p-8 rounded-2xl bg-gradient-to-r from-orange-950/40 via-amber-950/30 to-cyan-950/40 border border-orange-500/40 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none" />
                  <Quote className="w-8 h-8 text-orange-400 mx-auto mb-3 opacity-60" />
                  <h4 className="font-['Syne'] text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    "Build a New Idea. Build a New India."
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    This philosophy represents the ambition to encourage innovation, develop original ideas, and contribute to India's technological future. Phoenix Tech Solution represents the belief that every great innovation begins with an idea and the determination to transform it into reality.
                  </p>
                </div>
              </motion.div>
            )}

            {/* TAB 3: TECHNICAL EXPERTISE & CREATIVE CAPABILITIES */}
            {activeTab === 'skills' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Skill 1: IoT */}
                  <div className="p-6 rounded-2xl bg-slate-900/70 border border-cyan-500/30 hover:border-cyan-400 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-['Space_Grotesk'] text-base font-bold text-white">
                          Internet of Things (IoT)
                        </h4>
                        <span className="text-[11px] font-semibold text-orange-400 font-mono">
                          Primary Area of Interest
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {[
                        'Smart Connected Devices',
                        'Sensor-Based Systems & Applications',
                        'IoT Architecture & Intelligent Monitoring',
                        'Real-Time Data Collection & Telemetry',
                        'Smart Automation Concepts (Industrial & Home)',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skill 2: Embedded Systems */}
                  <div className="p-6 rounded-2xl bg-slate-900/70 border border-blue-500/30 hover:border-blue-400 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400">
                        <Terminal className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-['Space_Grotesk'] text-base font-bold text-white">
                          Embedded Systems
                        </h4>
                        <span className="text-[11px] font-semibold text-blue-400 font-mono">
                          Hardware Integration
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {[
                        'Microcontroller-Based System Development',
                        'Embedded Hardware Integration',
                        'Sensor and Actuator Interfacing',
                        'Real-Time Embedded Applications',
                        'Hardware and Software Synchronization',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skill 3: UI/UX Design */}
                  <div className="p-6 rounded-2xl bg-slate-900/70 border border-purple-500/30 hover:border-purple-400 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400">
                        <Layers className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-['Space_Grotesk'] text-base font-bold text-white">
                          UI/UX Design
                        </h4>
                        <span className="text-[11px] font-semibold text-purple-400 font-mono">
                          User Experience Architecture
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {[
                        'User Interface & User Experience Design',
                        'Website Interface Design & Prototyping',
                        'Interactive Digital Experiences',
                        'User-Centered Design Principles',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skill 4: Artificial Intelligence (AI) – Creative Technologies */}
                  <div className="p-6 rounded-2xl bg-slate-900/70 border border-orange-500/30 hover:border-orange-400 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-950/80 border border-orange-500/40 flex items-center justify-center text-orange-400">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-['Space_Grotesk'] text-base font-bold text-white">
                          AI – Creative Technologies
                        </h4>
                        <span className="text-[11px] font-semibold text-orange-400 font-mono">
                          Generative Media Engineering
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {[
                        'AI-Powered Design Creation',
                        'AI Image & Video Generation',
                        'AI-Assisted Visual Content Creation',
                        'AI-Based Creative Concept Development',
                        'AI-Powered Digital Media Production',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skill 5: Creative & Digital Technologies */}
                  <div className="md:col-span-2 p-6 rounded-2xl bg-slate-900/70 border border-amber-500/30 hover:border-amber-400 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-400">
                        <Palette className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-['Space_Grotesk'] text-base font-bold text-white">
                          Creative & Digital Technologies
                        </h4>
                        <span className="text-[11px] font-semibold text-amber-400 font-mono">
                          Digital Brand & Content Assets
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                      {[
                        'Digital Content Creation',
                        'Creative Visual Design',
                        'AI-Assisted Multimedia Production',
                        'Visual Storytelling & Digital Branding Concepts',
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: MY VISION FOR THE FUTURE */}
            {activeTab === 'vision' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2.5">
                    <Target className="w-5 h-5 text-cyan-400" />
                    <span>Future Vision: Building a New Idea. Building a New India.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mb-6">
                    A multi-phase roadmap toward indigenous innovation, self-reliance, and advanced technological excellence.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: '1. Indigenous Technology Development',
                        desc: 'Encourage the development of original technologies and innovative products within India, reducing dependence on externally developed solutions wherever possible.',
                      },
                      {
                        title: '2. Advanced IoT Innovation',
                        desc: 'Explore intelligent connected systems, smart infrastructure, industrial IoT, and next-generation automation technologies.',
                      },
                      {
                        title: '3. Defence Technology Development',
                        desc: 'Develop an interest-driven pathway toward indigenous defence-oriented technology projects, focusing on engineering innovation, secure systems, and intelligent monitoring.',
                      },
                      {
                        title: '4. Research and Development',
                        desc: 'Encourage experimentation, applied research, physical prototyping, and continuous technological advancement.',
                      },
                      {
                        title: '5. Building a Strong Technology Organization',
                        desc: 'Develop Phoenix Tech Solution into an enterprise that seamlessly combines software engineering, hardware innovation, and creative digital technologies under one organization.',
                      },
                      {
                        title: '6. Contributing to India\'s Future',
                        desc: 'Support the broader vision of a technologically self-reliant India through original innovation, rigorous engineering, and indigenous product development.',
                      },
                    ].map((v, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                        <h4 className="font-['Space_Grotesk'] text-sm sm:text-base font-bold text-white mb-2 text-cyan-300">
                          {v.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                          {v.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 5: DEFENCE TECHNOLOGY ASPIRATION */}
            {activeTab === 'defence' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-orange-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-950/80 border border-orange-500/40 flex items-center justify-center text-orange-400">
                      <Radar className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold block">
                        Long-Term Aspiration
                      </span>
                      <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white">
                        Defence-Oriented Technology Exploration
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    Defence technology is one of Y D Mahendhra's important long-term areas of interest. He aspires to explore opportunities to develop indigenous technological solutions that can contribute to India's defence and security ecosystem through responsible research, engineering innovation, and indigenous development.
                  </p>

                  <h4 className="font-['Space_Grotesk'] text-sm font-bold text-white uppercase tracking-wider mb-4 text-cyan-400">
                    Potential Future Areas of Exploration:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Advanced IoT-Based Monitoring Systems',
                      'Secure Embedded Systems',
                      'Intelligent Surveillance Technologies',
                      'Hardware-Based Security Solutions',
                      'Sensor-Based Detection Systems',
                      'Secure Communication Technologies',
                      'Smart Monitoring and Automation',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300">
                        <Shield className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 italic">
                    *Presented strictly as a future research and innovation ambition for indigenous capability development.
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 6: LEADERSHIP PHILOSOPHY */}
            {activeTab === 'philosophy' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2.5">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <span>Leadership Mindset & Core Principles</span>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    "I believe that a successful technology company should not simply follow existing trends but should continuously explore new possibilities and create meaningful innovations. As Founder and CEO, my objective is to build an environment where creativity, engineering, and ambitious ideas come together."
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      'Innovation over imitation',
                      'Ideas into practical solutions',
                      'Continuous learning',
                      'Creative problem-solving',
                      'Engineering excellence',
                      'Research & experimentation',
                      'Long-term thinking',
                      'Building meaningful technology',
                    ].map((principle, i) => (
                      <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-center flex flex-col items-center justify-center">
                        <span className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center text-xs font-mono font-bold mb-2">
                          0{i + 1}
                        </span>
                        <span className="text-xs font-semibold text-slate-200">
                          {principle}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Mission & Signature Quote Footer */}
          <div className="mt-8 pt-8 border-t border-slate-800">
            {/* Personal Mission Statement */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0D1836] via-[#091228] to-[#120F24] border border-cyan-500/30 text-center mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-2">
                Personal Mission Statement
              </span>
              <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-semibold text-slate-100 max-w-3xl mx-auto leading-relaxed">
                "My mission is to transform innovative ideas into meaningful technologies, develop indigenous solutions, and contribute to building a stronger, smarter, and technologically advanced India."
              </p>
            </div>

            {/* Founder's Signature Quote */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div>
                <p className="font-['Syne'] text-base sm:text-lg font-extrabold text-white tracking-wide">
                  "Dream Beyond Limits. Innovate Beyond Boundaries. Build for the Future."
                </p>
                <span className="text-xs text-orange-400 font-semibold font-mono">
                  — Y D Mahendhra • Founder & CEO, Phoenix Tech Solution
                </span>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                Close Profile
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
