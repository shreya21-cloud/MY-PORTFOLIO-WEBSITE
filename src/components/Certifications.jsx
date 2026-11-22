import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckBadge, HiAcademicCap, HiArrowTopRightOnSquare, HiShieldCheck } from 'react-icons/hi2';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;
  const cert = certifications[0];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-brand-cyan/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-3">
            <HiCheckBadge className="w-3.5 h-3.5 text-brand-purple" />
            <span>05. VERIFIED CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic & Professional{' '}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Structured national certification demonstrating rigor in enterprise systems and IT governance.
          </p>
        </div>

        {/* Certification Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-9 border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gradient accent ribbon */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-inner shrink-0">
                <HiShieldCheck className="w-8 h-8 text-brand-purple" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950/50 border border-emerald-800/40">
                  {cert.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-purple-300 font-mono">
                  {cert.issuer} • {cert.duration}
                </p>
              </div>
            </div>

            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
                12-Week Rigorous Course
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {cert.description}
            </p>

            {/* Core Curriculum Modules */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Core Domains Mastered
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cert.keyTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/60 text-xs text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Relevance Note */}
            <div className="mt-4 p-4 rounded-xl bg-purple-950/30 border border-purple-800/30 text-xs text-purple-200">
              <strong className="text-white">Professional Value:</strong> {cert.relevance}
            </div>

            {/* Footer action */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-400 font-mono">
                Issued under Ministry of Education, Govt. of India (NPTEL-IIT)
              </span>

              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 font-semibold transition"
              >
                <span>Verify on NPTEL Portal</span>
                <HiArrowTopRightOnSquare className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
