import React, { useState } from 'react';
import { Layout, Server, Database, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: Layout, skills: portfolioData.skills.frontend },
    { id: 'backend', name: 'Backend', icon: Server, skills: portfolioData.skills.backend },
    { id: 'database', name: 'Databases', icon: Database, skills: portfolioData.skills.database },
    { id: 'devopsAndTools', name: 'DevOps & Tools', icon: Wrench, skills: portfolioData.skills.devopsAndTools },
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Skills & Competencies
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                    : 'glass-card text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentCategory.skills.map((skill, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl glass-card hover:border-indigo-500/30 transition-all duration-300 space-y-3"
            >
              <div className="flex justify-between items-center text-sm font-semibold text-slate-800 dark:text-slate-200">
                <span>{skill.name}</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-mono">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tech Cloud */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest font-semibold text-slate-400 dark:text-slate-500 mb-6">
            Technologies I use on a daily basis
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto">
            {[
              "React", "TypeScript", "Next.js", "Node.js", "Express", "Tailwind CSS",
              "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Git", "REST APIs", "GraphQL"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg text-xs font-semibold tracking-wide bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:border-indigo-500 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
