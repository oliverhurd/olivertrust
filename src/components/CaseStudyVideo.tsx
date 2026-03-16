import React from 'react';
import { FadeIn } from './FadeIn';
export function CaseStudyVideo() {
  const metrics = [
    {
      value: '398K',
      label: 'YouTube Views'
    },
    {
      value: '17K+',
      label: 'YouTube Subscribers'
    },
    {
      value: '33K+',
      label: 'Twitter Followers'
    },
    {
      value: '6.5K+',
      label: 'Newsletter Subscribers'
    },
    {
      value: '39.6%',
      label: 'Email Open Rate'
    },
    {
      value: '$0',
      label: 'Paid Advertising'
    }
  ];

  return (
    <section className="py-12 border-t border-gray-divider">
      <FadeIn>
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-navy-dark mb-3">
            What I Built
          </h3>
          <p className="text-gray-body leading-relaxed max-w-2xl">
            The entire business was built on one content principle: give away so much real value that the right audience self-selects in.
            That meant long-form YouTube content that was genuinely educational. Twitter for short-form reach. A weekly newsletter that wasn't a sales email. And email sequences that nurtured cold audiences into warm ones before ever asking for anything.
            No paid ads. No influencer partnerships. No brand affiliations.
            The platform algorithms — YouTube's recommendation system, Twitter's engagement signals — did the distribution work once the content earned it.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-gray-divider shadow-sm bg-gray-badge mb-12">
          <div
            className="relative w-full"
            style={{
              padding: '56.25% 0 0 0'
            }}>

            <iframe
              src="https://www.loom.com/embed/857a5d9b9bc941a0b36d000b5b8b5281?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              title="Braveheart Trading Growth System Walkthrough" />

          </div>
        </div>

        <FadeIn>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {metrics.map((metric, index) =>
            <FadeIn
              key={index}
              delay={index * 0.05}
              className="bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 min-w-[180px] justify-center">

                <span className="w-5 h-5 flex items-center justify-center text-gray-400">
                  {/* Icon placeholder - TODO: Add specific icon */}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="text-base font-bold text-navy-dark">
                  {metric.value}
                </span>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {metric.label}
                </span>
              </FadeIn>
            )}
          </div>
        </FadeIn>
      </FadeIn>
    </section>);

}