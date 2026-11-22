import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiMapPin, HiBookOpen, HiCheckCircle, HiSparkles } from 'react-icons/hi2';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;
  const edu = education[0];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-purple/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-3">
            <HiAcademicCap className="w-3.5 h-3.5 text-brand-purple" />
            <span>06. ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Theoretical{' '}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Grounding
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Undergraduate computer science education shaping algorithmic logic, system design and engineering practices.
          </p>
        </div>

        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800/80 shadow-2xl relative overflow-hidden"
        >
          {/* Top header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-inner shrink-0 mt-1">
                <HiAcademicCap className="w-8 h-8 text-brand-purple" />
              </div>
              <div>
                <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider block">
                  Undergraduate Degree
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {edu.degree}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-purple-300 mt-0.5">
                  {edu.field}
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-slate-400">
                  <span className="font-medium text-slate-200">{edu.institution}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <HiMapPin className="w-3.5 h-3.5 text-rose-400" />
                    {edu.location}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-xl bg-purple-950/70 border border-purple-800/50 text-xs font-mono text-purple-300 font-semibold">
                {edu.status}
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="mt-8 space-y-6">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {edu.description}
            </p>

            {/* Coursework Grid */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                <HiBookOpen className="w-4 h-4 text-brand-purple" />
                Key Computer Science Coursework
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                {edu.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 font-medium hover:border-purple-500/30 transition-colors"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights bullet points */}
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Campus Involvements & Highlights
              </h4>
              <div className="space-y-2">
                {edu.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                  >
                    <HiCheckCircle className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
