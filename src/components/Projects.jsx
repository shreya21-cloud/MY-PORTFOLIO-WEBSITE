import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiCodeBracket,
  HiArrowTopRightOnSquare,
  HiSparkles,
  HiEye,
  HiCpuChip,
  HiHeart,
  HiBuildingOffice2,
  HiGlobeAlt
} from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

// Category icons for visual card flair
const projectVisualIcons = {
  'ai-tshirt': HiCpuChip,
  'foodsaathi': HiHeart,
  'nexthire': HiBuildingOffice2,
  'eseva-india': HiGlobeAlt,
};

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/50">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-brand-indigo/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-3">
            <HiCodeBracket className="w-3.5 h-3.5 text-brand-purple" />
            <span>04. FEATURED ENGINEERING PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built with Purpose,{' '}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Precision & Scale
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            From IIT Delhi research in multimodal AI to production-grade full-stack web platforms.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => {
            const VisualIcon = projectVisualIcons[project.id] || HiCodeBracket;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl border border-slate-800/80 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:-translate-y-1"
              >
                {/* Visual Banner Header */}
                <div className="relative p-6 sm:p-7 bg-gradient-to-br from-slate-900/90 via-slate-900/40 to-purple-950/30 border-b border-slate-800/80">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-purple-950/70 text-purple-300 border border-purple-800/40">
                      {project.category}
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:text-purple-300 transition-all shadow-inner">
                      <VisualIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-purple-300/80 font-mono mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Key Metrics or Highlights */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {project.metrics.map((m, i) => (
                          <div key={i} className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-center">
                            <span className="text-[10px] text-slate-400 block font-mono">{m.label}</span>
                            <span className="text-xs font-bold text-slate-200 block mt-0.5">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Feature bullets */}
                    <div className="space-y-1.5 pt-1">
                      {project.features.slice(0, 2).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="text-purple-400 mt-0.5">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-4 border-t border-slate-800/60">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-900/90 text-blue-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons Row */}
                    <div className="flex items-center justify-between gap-3 pt-2">
                      <div className="flex items-center gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:text-white transition cursor-pointer"
                          title="View GitHub Repository"
                        >
                          <FaGithub className="w-4 h-4" />
                          <span>Code</span>
                        </a>

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-sm hover:opacity-95 transition cursor-pointer"
                          title="Open Live Project / Demo"
                        >
                          <span>Explore</span>
                          <HiArrowTopRightOnSquare className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition cursor-pointer"
                      >
                        <HiEye className="w-4 h-4" />
                        <span>Architecture</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
