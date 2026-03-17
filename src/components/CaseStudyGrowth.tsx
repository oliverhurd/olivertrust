import React from 'react';
import { FadeIn } from './FadeIn';
export function CaseStudyGrowth() {
  const steps = [
  {
    num: '01',
    title: 'Market Insight',
    color: 'text-amber-600',
    desc: 'Aspiring traders struggling with inconsistency in an oversaturated, low-trust education market.'
  },
  {
    num: '02',
    title: 'Authority Content',
    color: 'text-amber-600',
    desc: 'High-signal educational posts across trading psychology, strategy, and real market commentary — substance over hype.'
  },
  {
    num: '03',
    title: 'Platform Distribution',
    color: 'text-blue-500',
    desc: 'Content distributed natively across Twitter, YouTube, Instagram, and Newsletter — each platform feeding the next.'
  },
  {
    num: '04',
    title: 'Audience Capture',
    color: 'text-blue-500',
    desc: 'Cold readers converted into followers and newsletter subscribers through consistent free value.'
  },
  {
    num: '05',
    title: 'Community Trust',
    color: 'text-emerald-600',
    desc: 'Transparency, ongoing learning, and peer interaction built long-term habitual engagement — not just passive consumption.'
  },
  {
    num: '06',
    title: 'Product Conversion',
    color: 'text-emerald-600',
    desc: 'Audience converts into course students and premium subscribers — driven by trust earned over time, not sales pressure.'
  },
  {
    num: '07',
    title: 'Social Proof Loop',
    color: 'text-purple-500',
    desc: 'Student results and testimonials attract new traders and reinforce authority — restarting the entire cycle organically.'
  }];

  return (
    <div className="space-y-24 py-20">
      <section className="border-t border-gray-divider pt-16">
        <FadeIn>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-light mb-10">
            Growth System
          </h2>
          <p className="text-gray-body leading-relaxed mb-12 max-w-2xl">
            A seven-stage flywheel — each step feeds the next, compounding over time without paid acquisition.
          </p>
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.07}>
                <div className={`flex gap-6 pb-10 relative ${idx !== steps.length - 1 ? 'border-l border-gray-200 ml-5' : 'ml-5'}`}>
                  {/* Step number dot */}
                  <div className={`absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-xs font-bold ${step.color}`}>{step.num}</span>
                  </div>
                  {/* Content */}
                  <div className="pl-8">
                    <h3 className={`text-base font-bold mb-1.5 ${step.color}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-body leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}