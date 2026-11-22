import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiPytorch,
  SiTensorflow,
  SiPython,
  SiOpenjdk,
  SiCplusplus,
  SiGithub
} from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import { HiSparkles, HiCodeBracket, HiCpuChip, HiWrenchScrewdriver } from 'react-icons/hi2';
import { portfolioData } from '../data/portfolioData';

// Map icon strings to icon components
const iconRegistry = {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiPytorch,
  TbBrandOpenai,
  SiTensorflow,
  SiPython,
  SiOpenjdk,
  SiCplusplus,
  SiGithub,
  VscCode
};

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills.list
    : skills.list.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-blue/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-3">
            <HiCpuChip className="w-3.5 h-3.5 text-brand-purple" />
            <span>02. TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools, Technologies &{' '}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              AI Frameworks
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Curated toolkit spanning modern full-stack web development, multimodal artificial intelligence, and developer tooling.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skills.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-lg shadow-purple-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComp = iconRegistry[skill.icon] || HiCodeBracket;

              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="glass-card p-5 border border-slate-800/80 hover:border-purple-500/50 hover:bg-slate-900/90 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Subtle hover gradient wash */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-purple-500/15 transition-all"></div>

                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-purple-500/40 transition-colors shadow-sm"
                      style={{ color: skill.color || '#8b5cf6' }}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-colors">
                      {skill.level}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-bold text-white text-base group-hover:text-purple-200 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Category Chip */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span className="capitalize">{skill.category}</span>
                    <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Proficient →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Multimodal AI Highlight Banner */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900/90 to-blue-950/40 border border-purple-800/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-purple-900/50 border border-purple-600/40 text-purple-300 shadow-md">
              <HiSparkles className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Multimodal AI Specialization
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Experienced in vision-language models (CLIP, LLaVA), high-dimensional embeddings, and fast vector search retrieval.
              </p>
            </div>
          </div>
          <a
            href="#experience"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-purple-500/40 transition shrink-0"
          >
            See IIT Delhi Work →
          </a>
        </div>
      </div>
    </section>
  );
}
