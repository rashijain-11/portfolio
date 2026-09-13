import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, User, Camera } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenPhotoGuide }) {
  const { personal, socials } = portfolioData;
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-b from-blue-200/40 via-blue-100/20 to-transparent dark:from-blue-900/20 dark:via-navy-900/10 dark:to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Greeting & Taglines */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>{personal.availability}</span>
            </div>

            {/* Main Greeting */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  {personal.name}.
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-lg sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 tracking-tight">
                {personal.tagline}
              </p>
            </div>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personal.headline}
            </p>

            {/* Social & Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 shadow-md transition-all hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href="#connect"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:bg-blue-50 dark:hover:bg-navy-800 transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Say Hello</span>
              </a>
            </div>

            {/* Quick Micro-pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
                🤖 AI & Machine Learning
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
                🎨 Creative Sketching
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
                🥋 Karate & Volleyball
              </span>
            </div>
          </div>

          {/* Right Column: Sleek Portrait Photo Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Outer soft glowing rings */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500" />

              {/* Photo Card Container */}
              <div className="relative w-72 sm:w-80 h-96 sm:h-[420px] rounded-3xl overflow-hidden bg-white dark:bg-navy-900 border-4 border-white dark:border-navy-800 shadow-2xl flex items-center justify-center">
                {!imgError ? (
                  <img
                    src={personal.heroPhoto}
                    alt={personal.name}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  // Elegant Fallback Avatar
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-blue-50 to-blue-100/70 dark:from-navy-900 dark:to-navy-950">
                    <div className="w-24 h-24 rounded-full bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 border border-blue-200 dark:border-blue-800 shadow-inner">
                      <User className="w-12 h-12" />
                    </div>
                    <p className="font-bold text-slate-800 dark:text-white text-lg">
                      {personal.name}'s Portrait
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-[200px]">
                      Add <code className="text-blue-600 font-mono">hero.jpg</code> in <code className="text-blue-600 font-mono">public/images/</code> to display your photo here!
                    </p>
                  </div>
                )}

                {/* Floating pill badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 dark:bg-navy-950/90 backdrop-blur-md border border-white/40 dark:border-navy-800 shadow-lg flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <div className="text-xs">
                    <p className="font-bold text-slate-900 dark:text-white">Rashi</p>
                    <p className="text-slate-500 dark:text-slate-400">AI-ML Undergrad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Helper text below photo */}
            <p className="mt-3 text-xs text-slate-400 dark:text-slate-500 flex items-center space-x-1">
              <Camera className="w-3.5 h-3.5 mr-1" />
              <span>Drop <code>hero.jpg</code> in <code>public/images/</code></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
