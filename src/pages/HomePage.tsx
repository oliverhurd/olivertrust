import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
interface HomePageProps {
  setPage: (page: string) => void;
}
export function HomePage({ setPage }: HomePageProps) {
  return (
    <main className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy-dark leading-tight mb-6">
          I build brands people trust.
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <span className="px-4 py-1.5 bg-navy-blue/10 text-navy-blue text-sm font-medium rounded-full">
            Content Strategist
          </span>
          <span className="px-4 py-1.5 bg-navy-blue/10 text-navy-blue text-sm font-medium rounded-full">
            Growth Operator
          </span>
          <span className="px-4 py-1.5 bg-navy-blue/10 text-navy-blue text-sm font-medium rounded-full">
            Digital Marketing
          </span>
        </div>
        <p className="text-lg text-gray-body leading-relaxed mb-10 max-w-xl mx-auto">
          Turning attention into trust, and trust into revenue —<br className="hidden md:inline" />
          through front-end and back-end marketing systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setPage('case-studies')}
            className="px-6 py-3 bg-navy-dark text-white border border-navy-dark rounded-md font-medium hover:bg-navy-dark/90 transition-all duration-200 text-sm">
            See my work
          </button>
          <button
            onClick={() => setPage('contact')}
            className="px-6 py-3 bg-white text-navy-dark border border-navy-dark rounded-md font-medium hover:bg-navy-dark hover:text-white transition-all duration-200 text-sm">
            Get in touch
          </button>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-gray-divider" />
      </div>

      {/* Featured Work Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-xs font-bold text-gray-light tracking-[0.15em] uppercase mb-8">
          FEATURED WORK
        </h2>

        <div
          onClick={() => setPage('case-study-braveheart')}
          className="border border-gray-divider rounded-xl p-8 md:p-10 hover:shadow-sm transition-shadow cursor-pointer group">

          <h3 className="text-3xl font-serif font-bold text-navy-dark mb-2 group-hover:text-navy-blue transition-colors">
            Braveheart Trading
          </h3>
          <div className="text-xs text-navy-blue uppercase tracking-widest font-normal mb-4">
            ORGANIC · COMMUNITY · EDUCATION
          </div>
          <p className="text-gray-body mb-8 max-w-3xl leading-relaxed">
            An online trading educational brand offering value, development, and community globally.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-badge border border-gray-divider rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy-dark mb-1">$200K+</div>
              <div className="text-[10px] font-bold text-gray-light tracking-wider uppercase">
                REVENUE
              </div>
            </div>
            <div className="bg-gray-badge border border-gray-divider rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy-dark mb-1">6.5K+</div>
              <div className="text-[10px] font-bold text-gray-light tracking-wider uppercase">
                NEWSLETTER
              </div>
            </div>
            <div className="bg-gray-badge border border-gray-divider rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy-dark mb-1">33K+</div>
              <div className="text-[10px] font-bold text-gray-light tracking-wider uppercase">
                X (Twitter)
              </div>
            </div>
            <div className="bg-gray-badge border border-gray-divider rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy-dark mb-1">17K+</div>
              <div className="text-[10px] font-bold text-gray-light tracking-wider uppercase">
                YOUTUBE
              </div>
            </div>
          </div>

          <div className="inline-flex items-center text-navy-blue font-medium group-hover:opacity-80 transition-opacity">
            View this Case Study
            <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-gray-divider" />
      </div>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-dark mb-6">
          Let's build something together.
        </h2>
        <p className="text-gray-body text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Open to full-time roles and select projects in content strategy,<br className="hidden md:inline" />
          brand building, and growth — remote or relocated.
        </p>
        <button
          onClick={() => setPage('contact')}
          className="px-8 py-3 bg-white text-navy-dark border border-navy-dark rounded-md font-medium hover:bg-navy-dark hover:text-white transition-all duration-200">
          Get in touch
        </button>
      </section>
    </main>);

}