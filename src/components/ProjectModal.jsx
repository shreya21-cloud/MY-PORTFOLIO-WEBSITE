import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark, HiArrowTopRightOnSquare, HiCheckCircle, HiCpuChip, HiCube, HiShieldCheck } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa6';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-700/70 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden text-slate-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-semibold px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-800/40">
                  {project.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5">{project.title}</h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              >
                <HiXMark className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-slate-950/60">
              {/* Tagline / Subtitle */}
              <p className="text-base text-slate-200 font-medium leading-relaxed">
                {project.tagline}
              </p>

              {/* Metrics strip */}
              {project.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                      <div className="text-xs text-slate-400">{metric.label}</div>
                      <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mt-0.5">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Problem vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span> The Challenge
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.problem}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> The Engineering Solution
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-1.5">
                  <HiCpuChip className="w-4 h-4 text-brand-purple" /> Architectural Highlights & Capabilities
                </h4>
                <div className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/50 text-xs text-slate-300">
                      <HiCheckCircle className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/80 text-blue-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notice */}
              {project.demoNotice && (
                <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-800/40 text-xs text-purple-300">
                  💡 {project.demoNotice}
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-medium transition cursor-pointer border border-slate-700"
              >
                <FaGithub className="w-4 h-4" />
                <span>View Source Code</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-purple to-brand-blue hover:from-purple-500 hover:to-blue-500 text-white rounded-lg text-xs font-semibold shadow-lg shadow-purple-500/20 transition cursor-pointer"
                >
                  <span>Explore Repository</span>
                  <HiArrowTopRightOnSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
