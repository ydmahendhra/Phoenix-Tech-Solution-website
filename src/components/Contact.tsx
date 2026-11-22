import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from './SocialIcons';

interface ContactProps {
  prefilledSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: prefilledSubject || 'Software Solutions',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({ ...prev, service: prefilledSubject }));
    }
  }, [prefilledSubject]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setSubmitted(true);
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(`Inquiry: ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:phoenix.mahendhra@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Phoenix Tech Solution, I am ${formData.name}.\nService: ${formData.service}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/918220571972?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#05070E] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono font-medium tracking-widest text-slate-300 uppercase mb-4"
          >
            Contact
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Let's discuss your next project.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-400"
          >
            Get in touch for engineering consultations, software architecture, embedded IoT systems, or creative media projects.
          </motion.p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090D1A]/60 border border-white/10 backdrop-blur-xl space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Email
                </span>
                <a
                  href="mailto:phoenix.mahendhra@gmail.com"
                  className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>phoenix.mahendhra@gmail.com</span>
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Phone / WhatsApp
                </span>
                <a
                  href="tel:+918220571972"
                  className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <span>+91 8220571972</span>
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Location
                </span>
                <p className="text-sm sm:text-base font-semibold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Chennai, Tamil Nadu, India</span>
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Connect Online
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/phoenix-tech-solution-826b2a425"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#0077B5] text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href="https://www.instagram.com/phoenix.mahendhra?vrfl=MXYxZjg1ZWxqZmpjcw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-pink-600 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090D1A]/60 border border-white/10 backdrop-blur-xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Service Division
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090D1A] border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="Software Solutions">Software Solutions</option>
                      <option value="Hardware Solutions">Hardware Solutions</option>
                      <option value="Creative Solutions">Creative Solutions</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 shadow-lg transition-all cursor-pointer"
                    >
                      <span>Prepare Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-semibold tracking-wider uppercase text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-600 border border-emerald-500/30 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Direct</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
                    <Send className="w-5 h-5" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white">
                    Inquiry Details Ready
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Dispatch your message instantly via your preferred channel:
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                    <button
                      onClick={handleDirectEmail}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-cyan-600 hover:bg-cyan-500 transition-colors cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Official Email</span>
                    </button>
                    <button
                      onClick={handleWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send on WhatsApp</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
