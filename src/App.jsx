import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import BeyondAcademics from './components/BeyondAcademics';
import TechLearning from './components/TechLearning';
import Connect from './components/Connect';
import Footer from './components/Footer';
import PhotoHelperModal from './components/PhotoHelperModal';

export default function App() {
  // Default to light mode (white + blue palette) as requested by user, with dark mode toggleable
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return false; // clean white + shades of blue as default!
    }
    return false;
  });

  const [photoModalOpen, setPhotoModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-blue-600 selection:text-white">
      {/* Subtle background decorative grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(#2563eb 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openPhotoModal={() => setPhotoModalOpen(true)}
      />

      <main className="relative z-10">
        <Hero onOpenPhotoGuide={() => setPhotoModalOpen(true)} />
        <About />
        <Academics />
        <BeyondAcademics />
        <TechLearning />
        <Connect />
      </main>

      <Footer />

      <PhotoHelperModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
      />
    </div>
  );
}
