import React, { useState } from 'react';
import { Sparkles, Brain, Palette, Flame, User, CheckCircle2, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const pillars = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Fascinated by probabilistic models, neural networks, and how data algorithms can augment human potential.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Creative Artistry",
      description: "Practicing fine sketching and visual art, bringing aesthetic harmony, imagination, and empathy to tech.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Flame,
      title: "Athletic Tenacity",
      description: "Training in Karate and competing in Volleyball—cultivating resilience, reflexes, and unshakeable discipline.",
      color: "from-amber-500 to-rose-500",
    },
  ];

  const currentPhoto = personal.galleryPhotos ? personal.galleryPhotos[activePhotoIdx] : { url: personal.aboutPhoto, caption: "About Rashi" };

  return (
    <section id="about" className="py-24 relative bg-blue-50/40 dark:bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Introduction
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 flex items-center justify-center gap-2">
            <span>👩🏻 About Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Interactive Photo Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm h-96 sm:h-[420px] rounded-3xl overflow-hidden bg-white dark:bg-navy-950 border-4 border-white dark:border-navy-800 shadow-2xl relative group">
              <img
                src={currentPhoto.url}
                alt={currentPhoto.caption}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Photo Caption Pill */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 dark:bg-navy-950/90 backdrop-blur-md border border-white/40 dark:border-navy-800 shadow-lg text-xs">
                <p className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>{currentPhoto.caption}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-mono text-[10px]">
                    0{activePhotoIdx + 1}/0{personal.galleryPhotos.length}
                  </span>
                </p>
              </div>
            </div>

            {/* Photo Switcher Thumbnails */}
            {personal.galleryPhotos && personal.galleryPhotos.length > 1 && (
              <div className="flex space-x-2.5 mt-4">
                {personal.galleryPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                      activePhotoIdx === idx
                        ? 'border-blue-600 ring-2 ring-blue-400 scale-110 shadow-md'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo.url}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {personal.bio.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold">
              <div className="p-4 rounded-2xl bg-white dark:bg-navy-950 border border-blue-100 dark:border-navy-800 shadow-sm">
                <span className="text-blue-600 dark:text-blue-400 text-xs uppercase tracking-wider block mb-1">
                  Core Mindset
                </span>
                <span className="text-slate-900 dark:text-white">
                  Curious • Analytical • Disciplined
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-navy-950 border border-blue-100 dark:border-navy-800 shadow-sm">
                <span className="text-blue-600 dark:text-blue-400 text-xs uppercase tracking-wider block mb-1">
                  Primary Domain
                </span>
                <span className="text-slate-900 dark:text-white">
                  Artificial Intelligence & Machine Learning
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Identity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-navy-950 border border-blue-100/80 dark:border-navy-800/80 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-navy-700 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${pillar.color} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
