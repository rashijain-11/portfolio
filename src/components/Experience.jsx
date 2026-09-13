import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Quote } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience, education, testimonials } = portfolioData;

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            Journey & Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Experience & Education
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Experience Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-200 dark:border-indigo-900/60 space-y-10">
              {experience.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-white dark:ring-dark-bg group-hover:scale-125 transition-transform" />

                  <div className="glass-card p-6 rounded-2xl shadow-sm space-y-3 hover:border-indigo-500/40 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h4>
                      <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {item.period}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {item.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="space-y-1.5 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 list-disc list-inside">
                        {item.highlights.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Testimonials Column */}
          <div className="lg:col-span-5 space-y-12">
            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Education
                </h3>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="glass-card p-6 rounded-2xl shadow-sm space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {edu.institution}
                  </p>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {edu.grade}
                  </p>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            {testimonials && testimonials.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400">
                    <Quote className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Endorsements
                  </h3>
                </div>

                <div className="space-y-4">
                  {testimonials.map((t, idx) => (
                    <div key={idx} className="glass-card p-6 rounded-2xl shadow-sm space-y-3 relative">
                      <p className="text-sm italic text-slate-600 dark:text-slate-300">
                        "{t.quote}"
                      </p>
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">
                          {t.author}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {t.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
