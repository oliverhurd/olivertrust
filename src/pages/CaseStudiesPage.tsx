import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

interface CaseStudiesPageProps {
  setPage: (page: string) => void;
}

export function CaseStudiesPage({ setPage }: CaseStudiesPageProps) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 animate-in fade-in duration-500">

      {/* ── Page header ── */}
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Case Studies
        </h1>
        <p className="text-lg text-gray-body leading-relaxed max-w-2xl">
          Deep dives into real projects — strategy, execution, and results.
        </p>
      </div>

      <hr className="border-gray-divider mb-16" />

      {/* ── Cards ── */}
      <div className="space-y-6">

        {/* Braveheart Trading */}
        <div
          onClick={() => setPage('case-study-braveheart')}
          className="border border-gray-divider rounded-xl p-8 md:p-10 hover:shadow-sm transition-shadow duration-200 bg-white cursor-pointer group"
        >
          {/* Logo + title row */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 overflow-hidden flex-shrink-0">
              <img
                src="/Icons/Braveheart Trading Icon.png"
                alt="Braveheart Trading"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Braveheart Trading</h2>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 mb-3">
            {['Community', 'Organic Growth', 'Education'].map((tag, i, arr) => (
              <React.Fragment key={tag}>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{tag}</span>
                {i < arr.length - 1 && <span className="text-xs text-gray-300">·</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-body leading-relaxed mb-6 max-w-xl text-sm">
            Building trust in a trustless market through organic content and
            community growth. $200K+ revenue, zero paid advertising.
          </p>

          {/* CTA */}
          <div className="inline-flex items-center text-sm text-gray-body font-medium group-hover:text-gray-900 transition-colors duration-200">
            View Case Study
            <ArrowRightIcon className="ml-2 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </div>
        </div>

        {/* Tookjai Review */}
        <div
          onClick={() => setPage('case-study-tookjai')}
          className="border border-gray-divider rounded-xl p-8 md:p-10 hover:shadow-sm transition-shadow duration-200 bg-white cursor-pointer group"
        >
          {/* Logo + title row */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 overflow-hidden flex-shrink-0">
              <img
                src="/Icons/tookjai review logo icon.png"
                alt="Tookjai Review"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Tookjai Review</h2>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 mb-3">
            {['Media Buying', 'FB Ads', 'Affiliate Marketing'].map((tag, i, arr) => (
              <React.Fragment key={tag}>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{tag}</span>
                {i < arr.length - 1 && <span className="text-xs text-gray-300">·</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-body leading-relaxed mb-6 max-w-xl text-sm">
            AI-generated creatives and customer research-based targeted landing
            pages for Facebook media buying and paid ads management.
          </p>

          {/* CTA */}
          <div className="inline-flex items-center text-sm text-gray-body font-medium group-hover:text-gray-900 transition-colors duration-200">
            View Case Study
            <ArrowRightIcon className="ml-2 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </div>
        </div>

      </div>
    </main>
  );
}
