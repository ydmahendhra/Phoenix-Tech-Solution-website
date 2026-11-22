import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
  onSelectService?: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
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

  return (
    <footer className="relative bg-[#03050A] border-t border-white/5 py-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand Wordmark (No oversized duplicated logo) */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-['Syne'] font-extrabold text-base tracking-wider text-white">
              PHOENIX TECH SOLUTION
            </span>
            <span className="text-[11px] font-mono text-slate-500 tracking-wider">
              Engineering Innovation. Building the Future.
            </span>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#leadership"
              onClick={(e) => handleNavClick(e, 'leadership')}
              className="hover:text-white transition-colors"
            >
              Leadership
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10 cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Copyright & Location */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Phoenix Tech Solution. All rights reserved.</p>
          <p>Chennai, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
};
