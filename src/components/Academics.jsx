import React from 'react';
import { Trophy, Award, TrendingUp, Sparkles, CheckCircle, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Academics() {
  const { academics } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'TrendingUp':
        return TrendingUp;
      case 'Award':
        return Award;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="academics" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Scholastic Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 flex items-center justify-center gap-2">
            <span>🏆 Academic Achievements</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            A consistent record of academic discipline, analytical rigor, and competitive problem-solving.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Prominent Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {academics.map((item, index) => {
            const IconComponent = getIcon(item.icon);
            return (
              <div
                key={index}
                className="relative rounded-3xl p-8 bg-white dark:bg-navy-950 border-2 border-blue-100 dark:border-navy-800 shadow-lg hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform" />

                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-navy-900 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-100/70 dark:bg-navy-800 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-navy-700">
                      {item.badge}
                    </span>
                  </div>

                  {/* Big Bold Score */}
                  <div className="space-y-1 mb-4">
                    <span className="text-xs uppercase font-semibold text-slate-400 dark:text-slate-500 tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 bg-clip-text text-transparent pt-2">
                      {item.score}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-2">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Verification Indicator */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-navy-800/80 flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 space-x-1.5">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified Distinction</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Foundation Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold">Strong STEM & Mathematics Foundation</h4>
            <p className="text-blue-100 text-sm max-w-2xl">
              Equipped with deep fundamentals in Calculus, Probability, and Analytical Logic—the essential building blocks for modern Machine Learning models.
            </p>
          </div>
          <a
            href="#tech"
            className="px-6 py-3 rounded-2xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm shadow-md transition-all hover:scale-105 flex-shrink-0"
          >
            Explore Tech Roadmap &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
