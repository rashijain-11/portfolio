import React from 'react';
import { X, Image, FolderOpen, CheckCircle, Info } from 'lucide-react';

export default function PhotoHelperModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const photoList = [
    { name: 'hero.jpg', section: 'Hero Section (Portrait / Best Photo)', desc: 'Displays prominently in the main introduction card.' },
    { name: 'about.jpg', section: 'About Me Section', desc: 'A natural, casual, or campus photo.' },
    { name: 'sketch1.jpg to sketch4.jpg', section: 'Sketching Gallery', desc: 'Photos or scans of your best pencil/ink sketches.' },
    { name: 'karate.jpg & volleyball.jpg', section: 'Sports & Athletics (Optional)', desc: 'Photos during training, tournament, or on the court.' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-navy-950 rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-blue-100 dark:border-navy-800 shadow-2xl relative space-y-6 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 text-blue-600 dark:text-blue-400">
          <Image className="w-7 h-7" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            How to Add Your Photos
          </h3>
        </div>

        <div className="p-4 rounded-2xl bg-blue-50 dark:bg-navy-900/80 border border-blue-100 dark:border-navy-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1">
          <p className="font-semibold flex items-center space-x-1.5 text-blue-700 dark:text-blue-300">
            <FolderOpen className="w-4 h-4" />
            <span>Folder Location:</span>
          </p>
          <code className="block p-2 rounded-lg bg-white dark:bg-navy-950 font-mono text-xs text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-navy-800 break-all select-all">
            c:\Users\rashi\Desktop\portfolio\public\images\
          </code>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Filename Guide:
          </h4>
          <div className="space-y-2">
            {photoList.map((p, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-navy-900/60 border border-slate-100 dark:border-navy-800/80 flex items-start space-x-3 text-xs">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{p.name}</span>
                  <span className="text-slate-500 dark:text-slate-400"> — {p.section}</span>
                  <p className="text-slate-500 dark:text-slate-400 mt-0.5">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all text-sm"
          >
            Got it, looks great!
          </button>
        </div>
      </div>
    </div>
  );
}
