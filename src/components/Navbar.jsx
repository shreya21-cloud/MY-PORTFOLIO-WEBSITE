import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBars3, HiXMark, HiArrowDownTray, HiSparkles } from 'react-icons/hi2';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';

const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for glass styling and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Detect active section
      const sections = ['about', 'skills', 'experience', 'projects', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple via-brand-indigo to-brand-blue flex items-center justify-center font-extrabold text-white text-lg shadow-lg shadow-purple-500/25 group-hover:scale-105 transition-transform duration-300">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-base tracking-tight group-hover:text-purple-300 transition-colors">
                Shreya Sharma
              </span>
              <span className="text-[11px] text-slate-400 font-mono -mt-0.5">
                GLA University CSE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/60 rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-brand-purple/40 to-brand-blue/40 border border-purple-500/40 rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 pr-2 border-r border-slate-800">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/80 rounded-lg transition"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue hover:from-purple-500 hover:to-blue-500 transition-all shadow-md shadow-purple-500/20 hover:shadow-purple-500/30 cursor-pointer active:scale-95"
            >
              <HiArrowDownTray className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 text-xs font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue rounded-lg shadow-sm"
              title="Resume"
            >
              <HiArrowDownTray className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              {mobileMenuOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 p-4 bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-purple-300 transition flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-xs text-slate-500">→</span>
                </a>
              ))}

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between px-2">
                <div className="flex items-center gap-3">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 text-slate-300 hover:text-blue-400 border border-slate-800"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-xl text-xs font-semibold"
                >
                  <HiArrowDownTray className="w-4 h-4" />
                  <span>View Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
