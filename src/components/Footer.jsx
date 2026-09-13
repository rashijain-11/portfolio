import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-blue-100 dark:border-navy-800 bg-white dark:bg-navy-950 py-12 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
              R
            </div>
            <span className="font-bold text-slate-900 dark:text-white">
              {portfolioData.personal.name}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-xs">AI-ML Student & Creative</span>
          </div>

          <p className="text-xs text-center flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>& discipline • © {new Date().getFullYear()} {portfolioData.personal.name}</span>
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-blue-50 dark:bg-navy-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 text-xs font-semibold border border-blue-100 dark:border-navy-800 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
