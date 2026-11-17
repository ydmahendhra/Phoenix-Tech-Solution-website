import React, { useEffect, useRef } from 'react';

export const InteractiveWaveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Particle nodes
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      glow: string;
      baseAlpha: number;
    }

    const particleCount = Math.min(50, Math.floor(width / 35));
    const particles: Particle[] = [];

    const colors = [
      { fill: '#FF6A00', glow: 'rgba(255, 106, 0, 0.6)' },
      { fill: '#FFAA00', glow: 'rgba(255, 170, 0, 0.5)' },
      { fill: '#00E5FF', glow: 'rgba(0, 229, 255, 0.6)' },
      { fill: '#38BDF8', glow: 'rgba(56, 189, 248, 0.5)' },
    ];

    for (let i = 0; i < particleCount; i++) {
      const c = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.8,
        color: c.fill,
        glow: c.glow,
        baseAlpha: Math.random() * 0.5 + 0.25,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle perspective wireframe wave across the bottom
      const cols = 28;
      const rows = 12;
      const gridW = width * 1.2;
      const startX = -width * 0.1;
      const startY = height * 0.55;
      const stepX = gridW / cols;
      const stepY = (height * 0.48) / rows;

      ctx.lineWidth = 1;

      // Draw horizontal undulating lines
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        const rowProg = r / rows;
        // Color transition from deep cyan/blue to warm orange at crest
        const strokeColor = r % 2 === 0
          ? `rgba(255, 120, 20, ${0.08 + rowProg * 0.12})`
          : `rgba(0, 200, 255, ${0.06 + (1 - rowProg) * 0.1})`;
        ctx.strokeStyle = strokeColor;

        for (let c = 0; c <= cols; c++) {
          const x = startX + c * stepX;
          const distToMouse = Math.hypot(x - mouseX, (startY + r * stepY) - mouseY);
          const mouseFactor = Math.max(0, 1 - distToMouse / 400);

          const wave1 = Math.sin(c * 0.35 + time + r * 0.4) * 18;
          const wave2 = Math.cos(c * 0.2 - time * 0.8) * 12;
          const elevation = (wave1 + wave2) * (0.8 + rowProg * 0.6) - mouseFactor * 25;
          const y = startY + r * stepY + elevation;

          if (c === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Draw floating nodes & connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.save();
        ctx.shadowColor = p.glow;
        ctx.shadowBlur = 10;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.baseAlpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.15;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-70 transition-opacity duration-1000"
      style={{ willChange: 'transform' }}
    />
  );
};
