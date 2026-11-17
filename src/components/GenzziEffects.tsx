import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';

export const GenzziEffects: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Mouse tracker
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Check if hovering over an interactive element
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('select') ||
          target.closest('.interactive-card'))
      ) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer Glow Halo following cursor */}
      <div
        className="fixed pointer-events-none z-40 transition-transform duration-100 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full transition-all duration-300 blur-2xl ${
            isHoveringInteractive
              ? 'w-44 h-44 bg-gradient-to-r from-orange-500/25 via-cyan-400/30 to-blue-500/25 opacity-100 scale-125'
              : 'w-32 h-32 bg-cyan-400/15 opacity-60 scale-100'
          }`}
        />
      </div>

      {/* Tiny Precision Neon Dot */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            isHoveringInteractive
              ? 'w-3.5 h-3.5 bg-orange-400 shadow-[0_0_12px_#FF6A00] ring-2 ring-cyan-400/60'
              : 'w-2 h-2 bg-cyan-400 shadow-[0_0_8px_#00E5FF]'
          }`}
        />
      </div>
    </>
  );
};
