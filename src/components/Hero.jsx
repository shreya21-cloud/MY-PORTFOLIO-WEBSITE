import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDownTray, HiArrowRight, HiSparkles, HiCodeBracket, HiCpuChip } from 'react-icons/hi2';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const fullHeadline = personal.typingHeadlines[headlineIndex];
    const typingSpeed = isDeleting ? 40 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullHeadline.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullHeadline.length) {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting characters
        setCurrentText(fullHeadline.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setHeadlineIndex((prev) => (prev + 1) % personal.typingHeadlines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, headlineIndex, personal.typingHeadlines]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-brand-purple/20 via-brand-indigo/15 to-brand-blue/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-cyan/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-300 text-xs font-medium mb-6 shadow-sm shadow-purple-500/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.statusBadge}</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>

            {/* Dynamic Typing Subtitle */}
            <div className="mt-4 sm:mt-5 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 flex items-center justify-center lg:justify-start min-h-[44px]">
              <span className="text-purple-300 mr-2">&gt;</span>
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {currentText}
              </span>
              <span className="inline-block w-0.5 h-6 sm:h-8 bg-brand-purple ml-1 animate-pulse"></span>
            </div>

            {/* Short Introduction */}
            <p className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              BTech Computer Science Engineering student at{' '}
              <span className="text-purple-300 font-medium">GLA University, Mathura</span>.
              Passionate about building scalable full-stack applications and multimodal AI systems
              with research experience at{' '}
              <span className="text-blue-300 font-medium">IIT Delhi</span>.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-purple via-brand-indigo to-brand-blue hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>View Projects</span>
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-purple-500/40 transition-all backdrop-blur-md flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <HiArrowDownTray className="w-4 h-4 text-brand-purple" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links & Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-center lg:justify-start gap-6 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Connect With Me:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-purple-950/60 hover:text-white border border-slate-800 hover:border-purple-500/40 transition-all cursor-pointer shadow-sm"
                  title="Shreya Sharma on GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-blue-950/60 hover:text-blue-400 border border-slate-800 hover:border-blue-500/40 transition-all cursor-pointer shadow-sm"
                  title="Shreya Sharma on LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphic Visual Tech Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex-1 w-full max-w-lg"
          >
            <div className="relative">
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-purple/30 via-brand-indigo/20 to-brand-blue/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>

              {/* Glass Terminal Card */}
              <div className="relative rounded-2xl glass-panel p-6 sm:p-7 shadow-2xl">
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">developer-profile.ts</span>
                  </div>
                  <span className="text-[11px] font-mono text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">
                    BTech CSE
                  </span>
                </div>

                {/* Code Snippet in Terminal */}
                <div className="font-mono text-xs sm:text-[13px] space-y-2 text-slate-300 leading-relaxed">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-300">engineer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">"Shreya Sharma"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">university:</span>{' '}
                    <span className="text-emerald-300">"GLA University, Mathura"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">internship:</span>{' '}
                    <span className="text-emerald-300">"IIT Delhi (AI Research)"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">coreStack:</span> [
                    <span className="text-amber-300">"React.js"</span>,{' '}
                    <span className="text-amber-300">"Node.js"</span>,{' '}
                    <span className="text-amber-300">"MongoDB"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">aiFocus:</span> [
                    <span className="text-purple-300">"CLIP"</span>,{' '}
                    <span className="text-purple-300">"LLaVA"</span>,{' '}
                    <span className="text-purple-300">"Embeddings"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">openForRoles:</span>{' '}
                    <span className="text-cyan-400">true</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Mini Stats Grid inside the Card */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/70">
                    <div className="text-xs text-slate-400">Research Internship</div>
                    <div className="text-sm font-bold text-white mt-0.5">IIT Delhi</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/70">
                    <div className="text-xs text-slate-400">Certification</div>
                    <div className="text-sm font-bold text-white mt-0.5">NPTEL 12-Wk MIS</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
