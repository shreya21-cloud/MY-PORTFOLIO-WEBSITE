import React from 'react';
import { motion } from 'framer-motion';
import {
  HiAcademicCap,
  HiBriefcase,
  HiCodeBracket,
  HiCheckBadge,
  HiCommandLine,
  HiSparkles,
  HiArrowTrendingUp
} from 'react-icons/hi2';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  HiCodeBracket: HiCodeBracket,
  HiAcademicCap: HiAcademicCap,
  HiBriefcase: HiBriefcase,
  HiCheckBadge: HiCheckBadge,
};

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-3">
            <HiSparkles className="w-3.5 h-3.5 text-brand-purple" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Crafting Intelligent Solutions with{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Purpose & Code
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            An engineering journey combining rigorous academic fundamentals with real-world multimodal AI research.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative Story (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl border border-slate-800/80">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-purple"></span>
                BTech CSE Student @ GLA University, Mathura
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a passionate Computer Science and Engineering undergraduate at{' '}
                  <strong className="text-white font-semibold">GLA University, Mathura</strong>.
                  My fascination lies at the intersection of modern full-stack web architectures and applied artificial intelligence.
                </p>
                <p>
                  A defining milestone in my journey was my research internship at{' '}
                  <strong className="text-purple-300 font-semibold">IIT Delhi</strong>, where I worked on an
                  AI-Based T-Shirt Recommendation System leveraging state-of-the-art vision-language models like{' '}
                  <span className="text-blue-300 font-mono text-xs px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/40">CLIP</span>{' '}
                  and{' '}
                  <span className="text-blue-300 font-mono text-xs px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/40">LLaVA</span>.
                  Extracting high-dimensional image embeddings and computing real-time cosine similarity taught me how to transform complex machine learning models into practical web services.
                </p>
                <p>
                  I am constantly honing my programming skills, algorithmic thinking, and software craftsmanship—building scalable MERN applications, writing modular clean code, and preparing myself for impactful engineering roles.
                </p>
              </div>

              {/* Core Philosophy Badges */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2.5">
                <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <HiCommandLine className="w-4 h-4 text-brand-purple" /> Clean & Modular Code
                </span>
                <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <HiArrowTrendingUp className="w-4 h-4 text-brand-blue" /> Continuous Learning
                </span>
                <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <HiCodeBracket className="w-4 h-4 text-emerald-400" /> Full-Stack & AI Focus
                </span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personal.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl glass-panel text-center border border-slate-800/80 hover:border-purple-500/30 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Highlights Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {personal.highlights.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || HiSparkles;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-panel border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-800/40 text-brand-purple group-hover:scale-105 transition-transform shrink-0">
                      <IconComponent className="w-5 h-5 text-purple-300" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        {item.label}
                      </div>
                      <div className="text-base font-bold text-white mt-0.5 group-hover:text-purple-200 transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Academic Standout Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/40 via-slate-900/80 to-blue-950/40 border border-purple-700/30 shadow-lg">
              <h4 className="text-sm font-bold text-purple-200 mb-2 flex items-center gap-2">
                <HiAcademicCap className="w-4 h-4 text-purple-400" />
                GLA University CSE Highlights
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Immersed in comprehensive core computer science disciplines—Data Structures, Algorithms, Object-Oriented System Design, and Modern Web Architectures—with an unceasing drive to build projects that solve real societal and business challenges.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
