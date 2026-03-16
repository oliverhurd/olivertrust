import React from 'react';
import { FadeIn } from './FadeIn';

interface CaseStudyHeroProps {
  setPage: (page: string) => void;
}

export function CaseStudyHero({ setPage }: CaseStudyHeroProps) {
  return (
    <section className="pt-12 pb-16">

      {/* ── Back link ── */}
      <FadeIn>
        <button
          onClick={() => setPage('case-studies')}
          className="inline-flex items-center text-sm text-gray-light hover:text-gray-900 transition-colors mb-8"
        >
          <span className="mr-2">←</span> All Case Studies
        </button>
      </FadeIn>

      {/* ── Tags ── */}
      <FadeIn delay={0.1}>
        <div className="flex items-center gap-2 mb-6">
          {['Organic', 'Community', 'Education'].map((tag, i, arr) => (
            <React.Fragment key={tag}>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{tag}</span>
              {i < arr.length - 1 && <span className="text-gray-300 text-xs">·</span>}
            </React.Fragment>
          ))}
        </div>
      </FadeIn>

      {/* ── Title + subtitle + intro ── */}
      <FadeIn delay={0.2}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-navy-dark mb-6 leading-tight">
          Braveheart Trading
        </h1>
        <blockquote className="border-l-2 border-gray-900 pl-5 mb-16">
          <p className="text-lg text-gray-900 leading-relaxed">
            $200K+ organic revenue, built from zero, no paid ads.
          </p>
        </blockquote>
      </FadeIn>

      {/* ════════════════════════════════════════
          ROLE
      ════════════════════════════════════════ */}
      <div className="border-t border-gray-divider pt-16 mb-16">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-light mb-6">Role</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">Founder &amp; Lead Strategist</h2>
          <p className="text-gray-body leading-relaxed max-w-2xl mb-10">
            I ran everything from content strategy and brand positioning to email systems and client delivery. Started solo, scaled with systems.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 mb-8">
            {[
              'Content Strategy',
              'Audience Development',
              'Brand Positioning',
              'Email Marketing',
              'Conversion Funnels',
              'Service Delivery',
              'Client Success Design',
              'Client Success Management',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm text-gray-body">
                <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* ════════════════════════════════════════
          EXECUTIVE SUMMARY
      ════════════════════════════════════════ */}
      <div className="border-t border-gray-divider pt-16">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-light mb-3">
            Executive Summary
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">The Problem</h2>

          <p className="text-gray-body leading-relaxed mb-5">
            I built Braveheart Trading into a $200K+ revenue business in one of the hardest niches online — trading education. Low trust, high skepticism, saturated with noise. The standard playbook of paid ads and influencer deals was an option, but it didn't align with Braveheart's Trading MVP (Mission, Vision and Purpose).
          </p>
          <p className="text-gray-body leading-relaxed mb-8">
            I needed a different model — one built on genuine value, not hype. The goal was to attract the right person, earn their trust over time, and convert that trust into revenue (without shortcuts).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-8">The Solution</h2>

          <p className="text-gray-body leading-relaxed mb-5">
            Knowing the inherent challenges of the industry (e.g low trust), it was paramount for proper brand positioning.
          </p>
          <p className="text-gray-body leading-relaxed mb-5">
            We identified an Ideal Avatar, and directed all content strategy campaigns towards:
          </p>
          <div className="space-y-2.5 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full border border-gray-300 text-gray-500 text-xs flex items-center justify-center shrink-0 font-semibold">
                1
              </span>
              <span className="text-gray-body text-sm">Making them feel understood</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full border border-gray-300 text-gray-500 text-xs flex items-center justify-center shrink-0 font-semibold">
                2
              </span>
              <span className="text-gray-body text-sm">Becoming aware of the situation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full border border-gray-300 text-gray-500 text-xs flex items-center justify-center shrink-0 font-semibold">
                3
              </span>
              <span className="text-gray-body text-sm">Believing that change is possible</span>
            </div>
          </div>
          <p className="text-gray-body leading-relaxed mb-5">
            And by offering value as the main driver behind campaigns, Braveheart Trading was able to bypass forex, futures and crypto marketing industry difficulties.
          </p>
          <p className="text-gray-body leading-relaxed mb-5">
            And our campaigns were directly linked to offering value.
          </p>
        </FadeIn>
      </div>

    </section>
  );
}
