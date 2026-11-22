import React from 'react';
import { motion } from 'framer-motion';
import {
  HiBriefcase,
  HiCpuChip,
  HiSparkles,
  HiCheckCircle,
  HiArrowTopRightOnSquare,
  HiArrowsRightLeft,
  HiMagnifyingGlass,
  HiBolt
} from 'react-icons/hi2';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;
  const exp = experience[0]; // IIT Delhi internship

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-brand-purple/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-3">
            <HiBriefcase className="w-3.5 h-3.5 text-brand-purple" />
            <span>03. EXPERIENCE & RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Research Internship at{' '}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              IIT Delhi
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Pioneering multimodal vision-language architectures for intelligent fashion discovery and real-time similarity search.
          </p>
        </div>

        {/* Featured Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800/80 shadow-2xl overflow-hidden"
        >
          {/* Top subtle glow border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple via-brand-indigo to-brand-blue" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-slate-800/80">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-950/80 text-purple-300 border border-purple-800/50">
                  {exp.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {exp.location}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {exp.role}
              </h3>
              <p className="text-base sm:text-lg font-semibold text-purple-300 mt-1">
                {exp.organization} • <span className="text-slate-300 font-normal">{exp.projectTitle}</span>
              </p>
            </div>

            <div className="text-left lg:text-right">
              <span className="inline-block px-4 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-mono font-medium text-slate-300">
                {exp.period}
              </span>
            </div>
          </div>

          {/* Project Summary */}
          <div className="mt-8 text-slate-300 text-sm sm:text-base leading-relaxed">
            {exp.overview}
          </div>

          {/* Multimodal Architecture Breakdown (Interactive Diagram Box) */}
          <div className="mt-8 p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-4 flex items-center gap-2">
              <HiCpuChip className="w-4 h-4 text-brand-purple" />
              Multimodal Pipeline Architecture
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase font-mono mb-2">
                  <span className="w-5 h-5 rounded-full bg-blue-950 flex items-center justify-center text-[11px] border border-blue-800">1</span>
                  Vision-Language Encoding
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Utilized <strong className="text-white">OpenAI CLIP</strong> and <strong className="text-white">LLaVA</strong> to extract joint semantic representations from apparel images (patterns, fabric, cut) and natural language user intent.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase font-mono mb-2">
                  <span className="w-5 h-5 rounded-full bg-purple-950 flex items-center justify-center text-[11px] border border-purple-800">2</span>
                  Dense Vector Embeddings
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Generated 512/768-dimensional normalized <strong className="text-white">feature embeddings</strong> representing catalog apparel, eliminating manual metadata dependency with zero-shot generalization.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono mb-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-950 flex items-center justify-center text-[11px] border border-emerald-800">3</span>
                  Cosine Similarity Ranking
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Calculated real-time <strong className="text-white">Cosine Distance metric</strong> between query vectors and catalog embeddings to retrieve top-k aesthetically matched recommendations within &lt;150ms.
                </p>
              </div>
            </div>
          </div>

          {/* Key Contributions Checklist */}
          <div className="mt-8 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Key Engineering Deliverables & Contributions
            </h4>
            <div className="space-y-2.5">
              {exp.keyContributions.map((contrib, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs sm:text-sm text-slate-300 leading-relaxed"
                >
                  <HiCheckCircle className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                  <span>{contrib}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used Strip */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Tech Stack & Frameworks
              </span>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-purple-800/40 text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue hover:from-purple-500 hover:to-blue-500 shadow-md transition cursor-pointer"
            >
              <span>Explore AI T-Shirt Project</span>
              <HiArrowTopRightOnSquare className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
