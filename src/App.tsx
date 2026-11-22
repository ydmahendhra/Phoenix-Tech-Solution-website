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
    <div className="relative min-h-screen bg-[#05070E] text-slate-100 selection:bg-orange-500/30 selection:text-white overflow-x-hidden">
      {/* Smooth Kinetic Scroll & Subtle Glow Trail */}
      <GenzziEffects />

      {/* Subtle Interactive 3D Ambient Wave Canvas */}
      <InteractiveWaveCanvas />

      {/* Header - The ONLY place the company logo is displayed */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero with Cinematic Phoenix Video Background */}
        <Hero />

        {/* 2. About Company - Concise, professional, no fluff */}
        <About />

        {/* 3. Services - Three Core Divisions in The Goat Scale structured layout */}
        <Services onSelectService={handleSelectServiceForInquiry} />

        {/* 4. Leadership - Founder & CEO and Co-Founder & COO */}
        <Leadership />

        {/* 5. Contact Section - Clean, direct, minimal */}
        <Contact prefilledSubject={prefilledContactSubject} />
      </main>

      {/* 6. Minimal Footer */}
      <Footer onSelectService={handleSelectServiceForInquiry} />
    </div>
  );
}

export default App;
