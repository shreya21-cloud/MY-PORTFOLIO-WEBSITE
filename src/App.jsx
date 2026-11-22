import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 selection:bg-brand-purple/30 selection:text-purple-200">
      {/* Global Navbar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global ATS Resume Preview / Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
