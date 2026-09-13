import React, { useState } from 'react';
import { Palette, Flame, Trophy, Maximize2, X, Sparkles, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function BeyondAcademics() {
  const { passions } = portfolioData;
  const { sketching, karate, volleyball } = passions;

  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedSketchIndex, setSelectedSketchIndex] = useState(null);

  const categories = ['All', 'Portraits & Realism', 'Mandalas & Ink Art'];

  const filteredSketches = activeFilter === 'All'
    ? sketching.sketches
    : sketching.sketches.filter(s => s.category === activeFilter);

  const handleOpenModal = (sketch) => {
    const idx = sketching.sketches.findIndex(s => s.id === sketch.id);
    setSelectedSketchIndex(idx);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedSketchIndex((prev) =>
      prev === 0 ? sketching.sketches.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedSketchIndex((prev) =>
      prev === sketching.sketches.length - 1 ? 0 : prev + 1
    );
  };

  const currentModalSketch = selectedSketchIndex !== null ? sketching.sketches[selectedSketchIndex] : null;

  return (
    <section id="beyond" className="py-24 relative bg-blue-50/40 dark:bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Creative & Athletic Pursuits
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 flex items-center justify-center gap-2">
            <span>🎨 Beyond Academics</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Where precision meets creativity. Fine art sharpens observation, mathematical symmetry, and patience; martial arts and sports cultivate tenacity and teamwork.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* --- PART 1: SKETCHING & FINE ART GALLERY --- */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-1">
                <Palette className="w-4 h-4" />
                <span>Original Artworks by Rashi</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Sketching & Mandala Gallery ✏️
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
                {sketching.description}
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeFilter === cat
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-white dark:bg-navy-950 text-slate-600 dark:text-slate-300 border border-blue-100 dark:border-navy-800 hover:border-blue-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Artworks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSketches.map((sketch) => (
              <div
                key={sketch.id}
                onClick={() => handleOpenModal(sketch)}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-navy-950 border-2 border-blue-100 dark:border-navy-800 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1.5"
              >
                {/* Artwork Container */}
                <div className="relative h-80 overflow-hidden bg-slate-100 dark:bg-navy-900 flex items-center justify-center">
                  <img
                    src={sketch.image}
                    alt={sketch.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Hover inspection button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/95 text-slate-900 font-bold text-xs shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-4 h-4 text-blue-600" />
                      <span>Inspect Artwork</span>
                    </div>
                  </div>

                  {/* Top corner medium pill */}
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/75 text-white backdrop-blur-md border border-white/20">
                    {sketch.medium}
                  </span>
                </div>

                {/* Artwork Description Bar */}
                <div className="p-5 bg-white dark:bg-navy-950 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                      {sketch.category}
                    </span>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {sketch.title}
                    </h4>
                    {sketch.notes && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                        {sketch.notes}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Click for full view</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">View Study &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- PART 2: ATHLETICS (KARATE & VOLLEYBALL) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Karate Card */}
          <div className="rounded-3xl p-8 bg-white dark:bg-navy-950 border-2 border-blue-100 dark:border-navy-800 shadow-lg relative overflow-hidden flex flex-col justify-between group hover:border-blue-400 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 flex items-center justify-center shadow-sm">
                  <Flame className="w-6 h-6" />
                </div>
                <span className="text-3xl">🥋</span>
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-red-600 dark:text-red-400">
                  Martial Arts
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Karate
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {karate.tagline}
                </p>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {karate.description}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {karate.badges.map((b, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold rounded-xl bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 border border-red-100 dark:border-red-900/60"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-navy-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Mental discipline under pressure</span>
              <span className="font-mono text-red-500 font-bold">Focus & Resilience</span>
            </div>
          </div>

          {/* Volleyball Card */}
          <div className="rounded-3xl p-8 bg-white dark:bg-navy-950 border-2 border-blue-100 dark:border-navy-800 shadow-lg relative overflow-hidden flex flex-col justify-between group hover:border-blue-400 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-sm">
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="text-3xl">🏐</span>
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400">
                  Team Sports
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Volleyball
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {volleyball.tagline}
                </p>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {volleyball.description}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {volleyball.badges.map((b, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/60"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-navy-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Agility & seamless team coordination</span>
              <span className="font-mono text-blue-500 font-bold">Team Synergy</span>
            </div>
          </div>
        </div>

        {/* Modal Lightbox with Next / Previous Navigation */}
        {currentModalSketch && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
            onClick={() => setSelectedSketchIndex(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white dark:bg-navy-950 rounded-3xl overflow-hidden shadow-2xl border border-blue-100 dark:border-navy-800 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSketchIndex(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors z-20 shadow-lg"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-navy-900/90 text-slate-900 dark:text-white hover:bg-white transition-all shadow-xl z-20"
                aria-label="Previous sketch"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-navy-900/90 text-slate-900 dark:text-white hover:bg-white transition-all shadow-xl z-20"
                aria-label="Next sketch"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Display */}
              <div className="max-h-[75vh] bg-neutral-950 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
                <img
                  src={currentModalSketch.image}
                  alt={currentModalSketch.title}
                  className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Caption Bar */}
              <div className="p-6 bg-white dark:bg-navy-950 border-t border-slate-100 dark:border-navy-800">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-0.5">
                      {currentModalSketch.category} • Study {selectedSketchIndex + 1} of {sketching.sketches.length}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {currentModalSketch.title}
                    </h4>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-navy-800 text-blue-700 dark:text-blue-300">
                    {currentModalSketch.medium}
                  </span>
                </div>
                {currentModalSketch.notes && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {currentModalSketch.notes}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
