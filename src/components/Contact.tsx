import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, AlertCircle, Globe, ExternalLink, MessageCircle } from 'lucide-react';

interface ContactProps {
  prefilledSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: prefilledSubject || 'Software Solutions Inquiry',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Update subject if prop changes
  React.useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({ ...prev, subject: prefilledSubject }));
    }
  }, [prefilledSubject]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setStatusMessage('Please complete all required fields.');
      return;
    }

    setFormStatus('submitting');

    // Simulate preparation & direct dispatch option
    setTimeout(() => {
      setFormStatus('submitted');
      setStatusMessage(
        'Inquiry details compiled. Click below to instantly dispatch your message directly to phoenix.mahendhra@gmail.com or connect via WhatsApp.'
      );
    }, 600);
  };

  const handleDirectEmailDispatch = () => {
    const mailtoUrl = `mailto:phoenix.mahendhra@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleWhatsAppDispatch = () => {
    const text = `Hello Phoenix Tech Solution, I am ${formData.name} (${formData.email}).\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/918220571972?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-orange-500/30 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-4 shadow-[0_0_15px_rgba(255,106,0,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Consultation & Inquiries</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Syne'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6"
          >
            CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400">PHOENIX TECH SOLUTION</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed font-['Plus_Jakarta_Sans']"
          >
            Connect directly with our engineering and technical divisions for software development, hardware solutions, and creative media initiatives.
          </motion.p>
        </div>

        {/* Contact Grid: Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Official Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#070D1E]/90 border border-cyan-500/20 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Corporate Communication Desk</span>
              </div>
              <h3 className="font-['Syne'] text-2xl font-bold text-white mb-2">
                Official Contact Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-8 leading-relaxed">
                Reach out directly via phone, WhatsApp, official email, or visit our headquarters in Chennai.
              </p>

              {/* Channels List */}
              <div className="space-y-4">
                {/* Email Link */}
                <a
                  href="mailto:phoenix.mahendhra@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:text-cyan-300 transition-all flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-mono text-slate-400 block mb-0.5">
                      Official Company Email
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors block break-all">
                      phoenix.mahendhra@gmail.com
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Primary corporate & project inquiries
                    </span>
                  </div>
                </a>

                {/* Phone / WhatsApp Link */}
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/50 hover:bg-slate-900/90 transition-all duration-300 group">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-orange-950/70 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-105 group-hover:text-orange-300 transition-all flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-mono text-slate-400 block mb-0.5">
                        Company Phone & WhatsApp
                      </span>
                      <a
                        href="tel:8220571972"
                        className="text-sm font-semibold text-white hover:text-orange-400 transition-colors block font-mono"
                      >
                        +91 8220571972
                      </a>
                      <span className="text-[11px] text-slate-500">
                        Available for direct calls & WhatsApp messaging
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
                    <a
                      href="https://wa.me/918220571972"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-500/40 text-emerald-300 hover:text-white text-xs font-semibold transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <a
                      href="tel:8220571972"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all"
                    >
                      <Phone className="w-3 h-3 text-cyan-400" />
                      <span>Direct Call</span>
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-blue-950/70 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block mb-0.5">
                      Company Headquarters
                    </span>
                    <span className="text-sm font-semibold text-white block">
                      Chennai, Tamil Nadu, India
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Corporate Operations & Engineering Lab
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6 mt-6 border-t border-slate-800">
              <span className="text-xs font-medium text-slate-400 block mb-3 font-mono uppercase tracking-wider">
                Official Social Profiles:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/phoenix-tech-solution-826b2a425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-[#0077B5] border border-cyan-500/30 hover:border-transparent text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all duration-300 shadow-sm"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/phoenix.mahendhra?vrfl=MXYxZjg1ZWxqZmpjcw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 border border-orange-500/30 hover:border-transparent text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all duration-300 shadow-sm"
                >
                  <span>Instagram @phoenix.mahendhra</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                {/* WhatsApp Direct */}
                <a
                  href="https://wa.me/918220571972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 border border-emerald-500/30 hover:border-transparent text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all duration-300 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 hover:text-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#070D1E]/90 border border-orange-500/20 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <div className="mb-6">
              <h3 className="font-['Syne'] text-2xl font-bold text-white mb-1">
                Send a Direct Technical Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Inquire about custom software development, hardware automation, or AI creative media services.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                    Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                    Email Address <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@organization.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                  Subject / Division Focus <span className="text-orange-500">*</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                >
                  <optgroup label="Division Focus">
                    <option value="Software Solutions Inquiry">Software Solutions Inquiry</option>
                    <option value="Hardware Solutions Inquiry">Hardware Solutions Inquiry</option>
                    <option value="Creative Solutions Inquiry">Creative Solutions Inquiry</option>
                  </optgroup>
                  <optgroup label="Specific Services">
                    <option value="Software Solutions - Web Development">Web Development</option>
                    <option value="Software Solutions - UI/UX Designing">UI/UX Designing</option>
                    <option value="Software Solutions - Web & Workflow Automation">Web & Workflow Automation</option>
                    <option value="Software Solutions - SOP Development">SOP Development</option>
                    <option value="Hardware Solutions - IoT Projects">IoT Projects</option>
                    <option value="Hardware Solutions - PCB Design">PCB Design</option>
                    <option value="Hardware Solutions - Industrial & Home Automation">Industrial & Home Automation</option>
                    <option value="Creative Solutions - AI Video & Image Creation">AI Video & Image Creation</option>
                    <option value="Creative Solutions - Content Creation">Content Creation</option>
                  </optgroup>
                  <option value="General Corporate Consultation">General Corporate Consultation</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                  Message & Technical Requirements <span className="text-orange-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Detail your project specifications, scope, or inquiry..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                />
              </div>

              {/* Status Message Notification */}
              {formStatus === 'submitted' && (
                <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/40 text-slate-200 text-xs sm:text-sm space-y-3">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleDirectEmailDispatch}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-colors shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send to phoenix.mahendhra@gmail.com</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppDispatch}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Send via WhatsApp (+91 8220571972)</span>
                    </button>
                  </div>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs sm:text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 shadow-[0_0_25px_rgba(255,106,0,0.35)] transition-all duration-300 hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {formStatus === 'submitting' ? (
                  <span>Processing Inquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Technical Inquiry</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-500 text-center font-mono">
                Official Inquiries Desk: phoenix.mahendhra@gmail.com • WhatsApp: +91 8220571972
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
