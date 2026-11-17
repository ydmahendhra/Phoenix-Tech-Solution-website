import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveWaveCanvas } from './components/InteractiveWaveCanvas';
import { About } from './components/About';
import { Services } from './components/Services';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GenzziEffects } from './components/GenzziEffects';

export function App() {
  const [prefilledContactSubject, setPrefilledContactSubject] = useState<string>('');

  const handleSelectServiceForInquiry = (serviceName: string) => {
    setPrefilledContactSubject(serviceName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-orange-500/30 selection:text-white overflow-x-hidden">
      {/* Genzzi.in-inspired Smooth Kinetic Scroll & Cursor Glow Trail */}
      <GenzziEffects />

      {/* Interactive 3D Technology Wave Canvas (Parallax / Ambient Wireframe) */}
      <InteractiveWaveCanvas />

      {/* Modern Sticky Navigation */}
      <Navbar />

      {/* Main Content Container */}
      <main className="relative z-10">
        {/* 1. Hero Section with Cinematic Phoenix Video Background */}
        <Hero />

        {/* 2. About Our Company */}
        <About />

        {/* 3. Our Services – Three Main Divisions (Software, Hardware, Creative) */}
        <Services onSelectService={handleSelectServiceForInquiry} />

        {/* 4. Executive Leadership – Founder & CEO (Y D Mahendhra) and Co-Founder & CFO (Praveen Kumar P) */}
        <Leadership />

        {/* 5. Contact Section & Direct Communication Desk */}
        <Contact prefilledSubject={prefilledContactSubject} />
      </main>

      {/* Premium Footer */}
      <Footer onSelectService={handleSelectServiceForInquiry} />
    </div>
  );
}

export default App;
