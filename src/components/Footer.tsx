import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Sparkles, ExternalLink, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
  onSelectService?: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, serviceName: string) => {
    e.preventDefault();
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#02050E] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Subtle Bottom Glows */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-cyan-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[250px] bg-orange-950/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800/80">
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl overflow-hidden p-[1px] bg-gradient-to-br from-orange-500 via-amber-400 to-cyan-400 shadow-[0_0_15px_rgba(255,106,0,0.3)]">
                <img
                  src="/assets/phoenix-logo.jpg"
                  alt="Phoenix Tech Solution Logo"
                  className="w-full h-full object-cover rounded-[11px]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-['Syne'] font-extrabold text-xl tracking-wider text-white">
                  PHOENIX
                </span>
                <span className="font-['Space_Grotesk'] text-xs tracking-[0.25em] font-semibold text-cyan-400 uppercase">
                  Tech Solution
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Engineering innovation. Building the future. Delivering high-impact Software Development, Hardware Engineering, and Creative Digital Solutions.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Build a New Idea. Build a New India.</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-sm font-bold text-white uppercase tracking-wider mb-4 text-cyan-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, 'hero')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#leadership"
                  onClick={(e) => handleNavClick(e, 'leadership')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Divisions & Services */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-sm font-bold text-white uppercase tracking-wider mb-4 text-orange-400">
              Divisions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleServiceClick(e, 'Software Solutions')}
                  className="text-slate-400 hover:text-white transition-colors block"
                >
                  Software Solutions
                </a>
                <span className="text-[10px] text-slate-500">Web, UI/UX, Automation</span>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleServiceClick(e, 'Hardware Solutions')}
                  className="text-slate-400 hover:text-white transition-colors block"
                >
                  Hardware Solutions
                </a>
                <span className="text-[10px] text-slate-500">IoT, PCB & Automation</span>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleServiceClick(e, 'Creative Solutions')}
                  className="text-slate-400 hover:text-white transition-colors block"
                >
                  Creative Solutions
                </a>
                <span className="text-[10px] text-slate-500">Content, AI Video & Image</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact & Social Coordinates */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-sm font-bold text-white uppercase tracking-wider mb-4 text-blue-400">
              Official Contact Desk
            </h4>
            <ul className="space-y-3 text-xs text-slate-300 mb-6">
              <li>
                <a
                  href="mailto:phoenix.mahendhra@gmail.com"
                  className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span className="break-all">phoenix.mahendhra@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918220571972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-orange-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                  <span>+91 8220571972 (Call & WhatsApp)</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </li>
            </ul>

            <span className="text-[11px] font-semibold text-slate-400 block mb-2 uppercase font-mono">
              Connect With Us:
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              <a
                href="https://www.linkedin.com/in/phoenix-tech-solution-826b2a425"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 text-cyan-400" />
              </a>
              <a
                href="https://www.instagram.com/phoenix.mahendhra?vrfl=MXYxZjg1ZWxqZmpjcw=="
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-pink-400 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Instagram</span>
                <ExternalLink className="w-2.5 h-2.5 text-pink-400" />
              </a>
              <a
                href="https://wa.me/918220571972"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-emerald-400 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              >
                <MessageCircle className="w-2.5 h-2.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Phoenix Tech Solution. All rights reserved. • Chennai, India</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-600">
              Corporate Profile & Engineering Portfolio
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-md"
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
