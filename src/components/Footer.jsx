import React from 'react';
import { HiArrowUp, HiHeart } from 'react-icons/hi2';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-xl relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center font-extrabold text-white text-sm shadow-md shadow-purple-500/20">
                S
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                {personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2 max-w-sm">
              BTech Computer Science Engineering • GLA University, Mathura. Dedicated to full-stack engineering & multimodal AI innovation.
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#certifications" className="hover:text-purple-400 transition">Certifications</a>
            <a href="#education" className="hover:text-purple-400 transition">Education</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/40 transition"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="p-2.5 rounded-lg bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:opacity-90 shadow-md shadow-purple-500/20 transition cursor-pointer"
              title="Back to Top"
            >
              <HiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <span>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </span>
          <span className="flex items-center gap-1">
            Engineered with React, Tailwind CSS & Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}
