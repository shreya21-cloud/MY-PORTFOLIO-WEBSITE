import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark, HiArrowDownTray, HiPrinter, HiAcademicCap, HiBriefcase, HiSparkles, HiEnvelope, HiPhone } from 'react-icons/hi2';
import { portfolioData } from '../data/portfolioData';
import { downloadResume } from '../utils/resumeGenerator';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, experience, projects, skills, education, certifications } = portfolioData;

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

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden text-slate-100"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-brand-purple/20 text-brand-purple">
                  <HiBriefcase className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-bold text-lg text-white">Curriculum Vitae</h3>
                  <p className="text-xs text-slate-400">ATS-Formatted Recruiter Preview • {personal.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={downloadResume}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-purple to-brand-blue hover:from-purple-500 hover:to-blue-500 text-white rounded-lg text-xs font-semibold shadow-lg shadow-purple-500/20 transition-all cursor-pointer"
                >
                  <HiArrowDownTray className="w-4 h-4" />
                  <span>Download / Print</span>
                </button>
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                >
                  <HiXMark className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-950/60 font-sans text-sm">
              {/* Profile Header */}
              <div className="border-b border-slate-800 pb-6 text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{personal.name}</h1>
                <p className="text-brand-purple font-medium mt-1">{personal.title}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 mt-3 justify-center sm:justify-start">
                  <span>📍 {personal.location}</span>
                  <span>📧 {personal.email}</span>
                  <span>🔗 {personal.linkedin.replace('https://', '')}</span>
                  <span>💻 {personal.github.replace('https://', '')}</span>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 border-b border-slate-800/80 pb-2 mb-3 flex items-center gap-2">
                  <HiAcademicCap className="w-4 h-4 text-brand-purple" /> Education
                </h2>
                <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-semibold text-white">{education[0].degree}</span>
                    <span className="text-xs text-brand-purple font-mono">{education[0].status}</span>
                  </div>
                  <div className="text-xs text-slate-400">{education[0].institution}, {education[0].location}</div>
                  <p className="text-xs text-slate-300 mt-2">
                    <strong className="text-slate-200">Relevant Coursework:</strong> {education[0].coursework.join(', ')}
                  </p>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 border-b border-slate-800/80 pb-2 mb-3">
                  Technical Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                    <span className="font-semibold text-slate-200 block mb-1">Languages:</span>
                    <span className="text-slate-400">Python, JavaScript (ES6+), Java (Basics), C/C++ Basics, HTML5, CSS3</span>
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                    <span className="font-semibold text-slate-200 block mb-1">Frontend:</span>
                    <span className="text-slate-400">React.js, Tailwind CSS, Responsive Design, UI/UX Fundamentals</span>
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                    <span className="font-semibold text-slate-200 block mb-1">Backend & Database:</span>
                    <span className="text-slate-400">Node.js, Express.js, MongoDB, RESTful APIs, Token Authentication</span>
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                    <span className="font-semibold text-slate-200 block mb-1">AI & Multimodal:</span>
                    <span className="text-slate-400">OpenAI CLIP, LLaVA, Image Embeddings, Cosine Similarity, Vector Search</span>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 border-b border-slate-800/80 pb-2 mb-3 flex items-center gap-2">
                  <HiBriefcase className="w-4 h-4 text-brand-purple" /> Experience
                </h2>
                <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-semibold text-white">{experience[0].role}</span>
                    <span className="text-xs text-brand-blue font-mono">{experience[0].period}</span>
                  </div>
                  <div className="text-xs text-purple-300 mb-2">{experience[0].organization} • {experience[0].projectTitle}</div>
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300">
                    {experience[0].keyContributions.map((point, idx) => (
                      <li key={idx} className="leading-relaxed">{point}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {experience[0].technologies.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/60 text-purple-300 border border-purple-800/40">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 border-b border-slate-800/80 pb-2 mb-3">
                  Selected Engineering Projects
                </h2>
                <div className="space-y-3">
                  {projects.map((proj) => (
                    <div key={proj.id} className="p-3.5 bg-slate-900/40 rounded-xl border border-slate-800/60">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <span className="font-semibold text-white text-sm">{proj.title}</span>
                        <span className="text-[11px] text-slate-400 font-mono">{proj.techStack.slice(0, 3).join(', ')}</span>
                      </div>
                      <p className="text-xs text-slate-300 mb-2">{proj.summary}</p>
                      <ul className="list-disc list-inside text-[11px] text-slate-400 space-y-1">
                        {proj.features.slice(0, 2).map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 border-b border-slate-800/80 pb-2 mb-3">
                  Certifications
                </h2>
                <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/60 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">{certifications[0].title}</span>
                    <span className="text-brand-purple font-mono">{certifications[0].duration}</span>
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">{certifications[0].issuer} • {certifications[0].organization}</div>
                  <p className="text-slate-300 mt-2">{certifications[0].description}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex justify-between items-center">
              <span className="text-xs text-slate-500">GLA University, Mathura • Computer Science & Engineering</span>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
