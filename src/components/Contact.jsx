import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiEnvelope,
  HiMapPin,
  HiPaperAirplane,
  HiCheckCircle,
  HiClipboardDocument,
  HiClipboardDocumentCheck,
  HiSparkles,
  HiExclamationCircle
} from 'react-icons/hi2';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contact, personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Real-time field validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (minimum 2 characters)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject should be at least 3 characters long';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please write a message with at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // Fallback silently if canvas-confetti is not loaded
      }
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/3 w-[550px] h-[550px] bg-brand-purple/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-3">
            <HiEnvelope className="w-3.5 h-3.5 text-brand-purple" />
            <span>07. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Remarkable
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            {contact.subheading}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Communication Channels (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card with Quick Copy */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-800/80 hover:border-purple-500/40 transition shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-950/70 border border-purple-800/50 text-purple-300">
                    <HiEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Direct Email
                    </h3>
                    <p className="text-sm font-bold text-white mt-0.5 select-all">
                      {personal.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-700/80 hover:bg-slate-800 text-slate-300 hover:text-white transition cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <HiClipboardDocumentCheck className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <HiClipboardDocument className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-xs">
                <span className="text-slate-400">Response time: &lt; 24h</span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-purple-400 hover:text-purple-300 font-semibold"
                >
                  Open Mail Client →
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel border border-slate-800/80 hover:border-blue-500/40 transition block shadow-lg group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-950/70 border border-blue-800/50 text-blue-400 group-hover:scale-105 transition-transform">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      LinkedIn Network
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors mt-0.5">
                      linkedin.com/in/shreya-sharma-cse
                    </div>
                  </div>
                </div>
                <span className="text-slate-500 group-hover:text-blue-400 transition-colors">↗</span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel border border-slate-800/80 hover:border-purple-500/40 transition block shadow-lg group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 group-hover:scale-105 transition-transform">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      GitHub Profile
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors mt-0.5">
                      github.com/shreyasharma
                    </div>
                  </div>
                </div>
                <span className="text-slate-500 group-hover:text-purple-400 transition-colors">↗</span>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-800/80 shadow-lg">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800/40 text-rose-400">
                  <HiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Location & Mobility
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    GLA University, Mathura, UP
                  </div>
                  <div className="text-xs text-emerald-400 mt-0.5 font-medium">
                    ✓ Open to on-site, hybrid and remote roles
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-9 border border-slate-800/80 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-1.5 flex items-center gap-2">
                <span>Send a Message</span>
                <HiSparkles className="w-5 h-5 text-brand-purple" />
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Have a job opening, internship opportunity, or project inquiry? Fill out the form below.
              </p>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-purple-950/50 to-blue-950/50 border border-purple-500/40 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                      <HiCheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Thank You, {formData.name}!</h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your message has been captured. I will review your note and respond back to <span className="text-purple-300 font-semibold">{formData.email}</span> shortly.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    noValidate
                  >
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                          Your Name <span className="text-purple-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Verma"
                          className={`w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm ${
                            errors.name ? 'border-rose-500/80 focus:border-rose-500' : ''
                          }`}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <HiExclamationCircle className="w-3.5 h-3.5" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                          Your Email <span className="text-purple-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. rahul@company.com"
                          className={`w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm ${
                            errors.email ? 'border-rose-500/80 focus:border-rose-500' : ''
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <HiExclamationCircle className="w-3.5 h-3.5" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Subject <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Internship Opportunity / Full-Stack Project Collaboration"
                        className={`w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm ${
                          errors.subject ? 'border-rose-500/80 focus:border-rose-500' : ''
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <HiExclamationCircle className="w-3.5 h-3.5" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message Area */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Message <span className="text-purple-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share details regarding your requirements, team role, or project inquiry..."
                        className={`w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm resize-none ${
                          errors.message ? 'border-rose-500/80 focus:border-rose-500' : ''
                        }`}
                      ></textarea>
                      {errors.message && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <HiExclamationCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-purple via-brand-indigo to-brand-blue hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/25 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <HiPaperAirplane className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
