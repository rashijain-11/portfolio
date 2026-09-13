import React from 'react';
import { Terminal, Code2, Cpu, GitBranch, Compass, Sparkles, BookOpen, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TechLearning() {
  const { techLearning } = portfolioData;

  const coreFocus = [
    { name: "Python", desc: "Core language for ML algorithms, data wrangling, and scripting.", tag: "Primary" },
    { name: "AI / Machine Learning", desc: "Supervised models, deep neural nets, and statistical math.", tag: "Specialization" },
    { name: "Web Development", desc: "Building intuitive interfaces with modern JavaScript & React.", tag: "Frontend & Full Stack" },
    { name: "Git & GitHub", desc: "Version control, collaborative branching, and open source.", tag: "Workflow" },
  ];

  return (
    <section id="tech" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Technical Foundations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 flex items-center justify-center gap-2">
            <span>💻 Tech & Learning Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            {techLearning.intro}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Currently Exploring Hero Strip */}
        <div className="mb-14 p-8 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-blue-100/40 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 border-2 border-blue-200/80 dark:border-navy-800 shadow-md">
          <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
            <Compass className="w-4 h-4 animate-spin" />
            <span>Currently Active Focus</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFocus.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-blue-100 dark:border-navy-800 shadow-sm space-y-2 hover:border-blue-400 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-lg">
                    {item.name}
                  </h4>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-navy-800 text-blue-700 dark:text-blue-300">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {techLearning.skills.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-navy-950 border border-blue-100 dark:border-navy-800 shadow-sm space-y-4"
            >
              <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center space-x-2">
                <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>{group.category}</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-navy-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-navy-800 hover:border-blue-500 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* What I'm Building Next & Future Roadmaps */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Learning Roadmaps & Future Builds
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techLearning.currentlyExploring.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-navy-950 border border-blue-100 dark:border-navy-800 shadow-sm space-y-3 relative group hover:border-blue-400 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                    Step 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    {exp.status}
                  </span>
                </div>

                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  {exp.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Transparent note */}
          <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-navy-900/60 border border-blue-100 dark:border-navy-800 text-center">
            <p className="text-xs text-slate-600 dark:text-slate-400">
              💡 <span className="font-semibold text-slate-800 dark:text-slate-200">Building in the open:</span> As projects reach prototype and deployment stages, interactive demos and GitHub links will be highlighted right here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
