import React from 'react';
import { FadeIn } from './FadeIn';
export function CaseStudyMetrics() {
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
  }];

  return (
    <section className="py-16 border-t border-gray-divider">
      <FadeIn>
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-light mb-8">
          Growth Metrics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) =>
          <FadeIn
            key={index}
            delay={index * 0.1}
            className="bg-gray-badge border border-gray-divider rounded-xl p-8 flex flex-col justify-center items-center text-center">

              <div className="text-3xl font-bold text-navy-dark mb-3">
                {metric.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-light">
                {metric.label}
              </div>
            </FadeIn>
          )}
        </div>
      </FadeIn>
    </section>);

}