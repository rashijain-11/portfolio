import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check, MessageSquare, ArrowUpRight, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Connect() {
  const { personal, socials } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleCopyPhone = () => {
    if (!personal.phone) return;
    navigator.clipboard.writeText(personal.phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setFormSent(true);
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' });
      setFormSent(false);
    }, 4000);
  };

  return (
    <section id="connect" className="py-24 relative bg-blue-50/40 dark:bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Reach Out
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 flex items-center justify-center gap-2">
            <span>🔗 Connect With Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Interested in discussing AI research, student collaborations, or internship opportunities? Let's connect!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Left Column: Direct Links & Fast Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-navy-950 border border-blue-100 dark:border-navy-800 shadow-md space-y-5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Social Profiles & Direct Email
              </h3>

              {/* Email fast copy */}
              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-navy-900 border border-blue-100 dark:border-navy-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span className="flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>Email Address</span>
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:underline font-bold"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="font-mono text-sm font-bold text-slate-800 dark:text-white break-all hover:text-blue-600 transition-colors block"
                >
                  {personal.email}
                </a>
              </div>

              {/* Phone / Contact Number Card */}
              {personal.phone && (
                <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-navy-900 border border-blue-100 dark:border-navy-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <span className="flex items-center space-x-1.5">
                      <Phone className="w-3.5 h-3.5 text-blue-600" />
                      <span>Contact Number</span>
                    </span>
                    <div className="flex items-center space-x-3">
                      <a
                        href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Call
                      </a>
                      <button
                        onClick={handleCopyPhone}
                        className="inline-flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:underline font-bold"
                      >
                        {phoneCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-500">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  <a
                    href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                    className="font-mono text-sm font-bold text-slate-800 dark:text-white hover:text-blue-600 transition-colors block"
                  >
                    {personal.phone}
                  </a>
                </div>
              )}

              {/* LinkedIn Button */}
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-navy-900 border border-blue-100 dark:border-navy-800 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-navy-800/80 transition-all group shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                      LinkedIn
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Professional network & updates
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </a>

              {/* GitHub Button */}
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-navy-900 border border-blue-100 dark:border-navy-800 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-navy-800/80 transition-all group shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                      GitHub
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Repositories & code experiments
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white dark:bg-navy-950 border border-blue-100 dark:border-navy-800 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Send a Direct Message</span>
              </h3>

              {formSent ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
                  <Check className="w-8 h-8 text-emerald-500 mx-auto" />
                  <h4 className="font-bold text-emerald-900 dark:text-emerald-200">
                    Message Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-400">
                    Thanks for reaching out, Rashi will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Hi Rashi, loved your portfolio! Let's collaborate..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl text-white font-bold bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5"
                  >
                    <span>Send Note</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
