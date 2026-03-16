import React, { useState } from 'react';
import { FadeIn } from './FadeIn';

// ─── Primitives ───────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-widest text-gray-light mb-6">
      {children}
    </p>
  );
}

function Divider() {
  return <hr className="border-t border-gray-divider my-16" />;
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 rounded-lg px-6 py-5 border border-gray-200">
      <p className="text-gray-body leading-relaxed">{children}</p>
    </div>
  );
}

function LeftRule({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-gray-300 pl-5 py-0.5">
      <p className="text-gray-body leading-relaxed italic">{children}</p>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export function CaseStudyContent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  return (
    <div className="py-4">

      {/* ════════════════════════════════════════
          DISTRIBUTION CHANNELS
      ════════════════════════════════════════ */}
      <section>
        <FadeIn>
          <SectionLabel>Distribution Channels</SectionLabel>

          <p className="text-gray-body leading-relaxed mb-4">
            The content strategy leveraged BHT's experience and skills to create and give away real value the market sought after, and developing the right audience on platforms.
          </p>
          <p className="text-gray-body leading-relaxed mb-4">
            <span className="inline-flex items-center gap-2 font-semibold text-gray-900">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              YouTube
            </span> was used for Long-form content with educational deep-dives. These were timeless pieces of content our audience took notes on, re-watched and saved.
          </p>
          <p className="text-gray-body leading-relaxed mb-4">
            <span className="inline-flex items-center gap-2 font-semibold text-gray-900">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              X (Twitter)
            </span> was used for Viral Content Marketing and also Social Listening. This started by giving away digestable short-form free value at scale through PDFs, documentations and threads. This built reputation that flowed over to other platforms like Youtube and Instagram.
          </p>
          <p className="text-gray-body leading-relaxed mb-6">
            <span className="inline-flex items-center gap-2 font-semibold text-gray-900">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              EmailOps (Newsletter)
            </span> took place with scheduled Weekly Issues. Each issue was long and engaging, delivering a psychological edge for the week ahead. Subscribers routinized our issues leading to an high and consistent open-rate of 35%-39%
          </p>

          <p className="text-gray-body leading-relaxed mb-4">
            In this video, I explain how Braveheart Trading generated $200k+, from explaining the thought processes behind the landing pages and websites, to walking through the customer journey as an ideal avatar from content strategies.
          </p>

          <div className="rounded-xl overflow-hidden border border-gray-divider shadow-sm bg-gray-badge mb-8">
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
        </FadeIn>
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          DEEP DIVE — PILLAR 3: THE FLYWHEEL
      ════════════════════════════════════════ */}
      <section>
        <FadeIn>
          <SectionLabel>Deep Dive</SectionLabel>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">The "Flywheel" Concept</h2>

          <p className="text-gray-body leading-relaxed mb-10">
            The flywheel is a business model principle used by compounding organisations to achieve
            exponential growth — where momentum builds on itself rather than requiring constant new
            effort to sustain it.
          </p>

          {/* Flywheel Business Model Image */}
          <div className="mb-10">
            <img 
              src="/flywheel-business-model@2x.png" 
              alt="Flywheel Business Model" 
              className="w-full max-w-72 mx-auto rounded-lg"
            />
          </div>

          {/* Linear vs Flywheel */}
          <div className="grid md:grid-cols-2 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200 mb-10">
            <div className="bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-light mb-3">The Linear Model</p>
              <p className="text-sm text-gray-body leading-relaxed">
                A standard business demands proportional effort for proportional return. Double the
                output requires double the input — effort has a ceiling, and so does revenue. Scale
                becomes a constraint, not a feature.
              </p>
            </div>
            <div className="bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-3">The Flywheel Model</p>
              <p className="text-sm text-gray-body leading-relaxed">
                A flywheel compounds. Each action reinforces the next — momentum is stored, not
                spent. The same effort at month twelve produces exponentially more output than at
                month one, because the system is already in motion.
              </p>
            </div>
          </div>

          <p className="text-gray-body leading-relaxed mb-6">
            To apply this at Braveheart Trading, the focus narrowed to three initial points the
            business could actually control and prove:
          </p>

          {/* Three focus points */}
          <div className="grid md:grid-cols-3 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200 mb-10">
            {[
              { num: '01', title: 'The Right Avatar', body: 'A passionate, driven aspiring trader who genuinely wanted to develop — not someone chasing shortcuts.' },
              { num: '02', title: 'A Great Product', body: 'Educational content and community built to actually produce results, not just consume attention.' },
              { num: '03', title: 'A Satisfied Customer', body: 'Someone who experienced real transformation — a trader who passed a funded challenge, withdrew profits, or levelled up their consistency.' },
            ].map(({ num, title, body }) => (
              <div key={num} className="bg-white p-6">
                <span className="text-xs font-black text-gray-300 mb-3 block">{num}</span>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">{title}</h4>
                <p className="text-sm text-gray-body leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Feedback Loop */}
          <p className="text-xs font-bold uppercase tracking-widest text-gray-light mb-2">The Feedback Loop</p>
          <p className="text-gray-body leading-relaxed mb-5">
            Once proof of concept was established, the cycle revealed itself.
          </p>
          <div className="space-y-2 mb-10">
            {[
              'A satisfied customer generated feedback that sharpened the product.',
              'A better product produced more satisfied customers.',
              'Each transformation gave us a clearer picture of the ideal avatar.',
              'A clearer avatar made the content strategy more precise and more magnetic.',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 border border-gray-200 rounded-md px-4 py-3 bg-white">
                <span className="text-gray-300 font-bold text-xs shrink-0 mt-0.5">→</span>
                <p className="text-sm text-gray-body leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-body leading-relaxed mb-4">
            As growth compounded on the front-end — YouTube views climbing, Twitter impressions
            scaling organically — the back-end experience inside the Discord community improved in
            parallel. More proven members. More documented results. More peer accountability.
          </p>
          <p className="text-gray-body leading-relaxed mb-8">
            The flywheel didn't just grow the business — it built a self-sustaining ecosystem where
            every satisfied trader became the starting point for the next cycle. Community was not a
            product feature. It was the engine.
          </p>

          <Highlight>
            Applying the flywheel concept allowed Braveheart Trading to leverage group dynamics and
            build a holistic online ecosystem — one where{' '}
            <strong className="text-gray-900">
              trust compounded, authority accumulated, and growth became self-reinforcing
            </strong>{' '}
            without paid advertising, influencer partnerships, or brand affiliations.
          </Highlight>

          {/* 8-Step Vertical Timeline */}
          <div className="mt-12">
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-4">Concept Application</h3>
            <p className="text-gray-body leading-relaxed mb-8">
              An 8 step customer to traffic to student journey was developed to turn content into
              community, and community into revenue and growth.
            </p>

            {/* Flywheel Diagram — inline SVG */}
            <div className="w-full max-w-2xl mx-auto">
              <svg
                width="100%"
                viewBox="0 0 680 940"
                xmlns="http://www.w3.org/2000/svg"
                overflow="visible"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              >
                <defs>
                  <marker id="cs-arrow" viewBox="0 0 10 10" refX="9" refY="5"
                    markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M2 2L8 5L2 8" fill="none" stroke="#1d4ed8"
                      strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </marker>
                  <marker id="cs-arrow-gray" viewBox="0 0 10 10" refX="9" refY="5"
                    markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M2 2L8 5L2 8" fill="none" stroke="#94a3b8"
                      strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </marker>
                </defs>

                {/* ── Hub: Content Strategy ── */}
                <rect x="160" y="24" width="360" height="56" rx="10"
                  fill="#EFF6FF" stroke="#1d4ed8" strokeWidth="1.5"/>
                <rect x="160" y="24" width="5" height="56" rx="0" fill="#1d4ed8"/>
                <text x="192" y="45" fontSize="14" fontWeight="700" fill="#1e3a8a">Content Strategy</text>
                <text x="192" y="64" fontSize="11" fill="#3b82f6">A plan to generate content and drive growth and revenue</text>

                {/* Hub → Step 1 */}
                <line x1="340" y1="80" x2="340" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cs-arrow-gray)"/>

                {/* ── Step 1: Traffic ── y=103 h=68 */}
                <rect x="160" y="103" width="360" height="68" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.75"/>
                <circle cx="188" cy="137" r="14" fill="#1d4ed8" opacity="0.85"/>
                <text x="188" y="137" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="#ffffff">1</text>
                <text x="214" y="120" fontSize="12" fontWeight="700" fill="#1e293b">Cold Traffic</text>
                <text x="214" y="137" fontSize="10.5" fill="#64748b">Leveraging social media platforms</text>
                <text x="214" y="153" fontSize="10.5" fill="#64748b">to create an inflow of traffic organically</text>

                <line x1="340" y1="171" x2="340" y2="191" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cs-arrow-gray)"/>

                {/* ── Step 2: Subscribers ── y=194 h=68 */}
                <rect x="160" y="194" width="360" height="68" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.75"/>
                <circle cx="188" cy="228" r="14" fill="#1d4ed8" opacity="0.85"/>
                <text x="188" y="228" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="#ffffff">2</text>
                <text x="214" y="211" fontSize="12" fontWeight="700" fill="#1e293b">Parasocial Trust</text>
                <text x="214" y="228" fontSize="10.5" fill="#64748b">Turning traffic into subscribers</text>
                <text x="214" y="244" fontSize="10.5" fill="#64748b">and building a relationship based on value</text>

                <line x1="340" y1="262" x2="340" y2="282" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cs-arrow-gray)"/>

                {/* ── Step 3: Ideal Avatar ── y=285 h=68 */}
                <rect x="160" y="285" width="360" height="68" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.75"/>
                <circle cx="188" cy="319" r="14" fill="#1d4ed8" opacity="0.85"/>
                <text x="188" y="319" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="#ffffff">3</text>
                <text x="214" y="302" fontSize="12" fontWeight="700" fill="#1e293b">Problem & Ideal Avatar</text>
                <text x="214" y="319" fontSize="10.5" fill="#64748b">Speaking to the right audience by</text>
                <text x="214" y="335" fontSize="10.5" fill="#64748b">identifying methods to help their situation</text>

                <line x1="340" y1="353" x2="340" y2="373" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cs-arrow-gray)"/>

                {/* ── Step 4: Product / Service / Offer ── y=376 h=68 */}
                <rect x="160" y="376" width="360" height="68" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.75"/>
                <circle cx="188" cy="410" r="14" fill="#1d4ed8" opacity="0.85"/>
                <text x="188" y="410" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="#ffffff">4</text>
                <text x="214" y="393" fontSize="12" fontWeight="700" fill="#1e293b">Solution-based Offer</text>
                <text x="214" y="410" fontSize="10.5" fill="#64748b">Building a product/service revolved</text>
                <text x="214" y="426" fontSize="10.5" fill="#64748b">around problems in our level of expertise</text>

                <line x1="340" y1="444" x2="340" y2="464" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cs-arrow-gray)"/>

                {/* ── Step 5: Brand Positioning ── y=467 h=68 */}
                <rect x="160" y="467" width="360" height="68" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.75"/>
                <circle cx="188" cy="501" r="14" fill="#1d4ed8" opacity="0.85"/>
                <text x="188" y="501" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="#ffffff">5</text>
                <text x="214" y="484" fontSize="12" fontWeight="700" fill="#1e293b">Positioning & Expertise</text>
                <text x="214" y="501" fontSize="10.5" fill="#64748b">Establishing and standing out as a</text>
                <text x="214" y="517" fontSize="10.5" fill="#64748b">viable product/service in a competitive market</text>

                <line x1="340" y1="535" x2="340" y2="555" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cs-arrow-gray)"/>

                {/* ── Step 6: Conversion / Acquisition ── y=558 h=68 */}
                <rect x="160" y="558" width="360" height="68" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.75"/>
                <circle cx="188" cy="592" r="14" fill="#1d4ed8" opacity="0.85"/>
                <text x="188" y="592" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="#ffffff">6</text>
                <text x="214" y="575" fontSize="12" fontWeight="700" fill="#1e293b">Conversion / Acquisition</text>
                <text x="214" y="592" fontSize="10.5" fill="#64748b">Using direct response copy to induce</text>
                <text x="214" y="608" fontSize="10.5" fill="#64748b">action-taking driven by trust and commitment</text>

                <line x1="340" y1="626" x2="340" y2="646" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cs-arrow-gray)"/>

                {/* ── Step 7: Service Delivery ── y=649 h=68 */}
                <rect x="160" y="649" width="360" height="68" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.75"/>
                <circle cx="188" cy="683" r="14" fill="#1d4ed8" opacity="0.85"/>
                <text x="188" y="683" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="#ffffff">7</text>
                <text x="214" y="666" fontSize="12" fontWeight="700" fill="#1e293b">Service & Results</text>
                <text x="214" y="683" fontSize="10.5" fill="#64748b">Guiding the acquisition through a</text>
                <text x="214" y="699" fontSize="10.5" fill="#64748b">proven process designed for client successes</text>

                <line x1="340" y1="717" x2="340" y2="737" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cs-arrow-gray)"/>

                {/* ── Step 8: Testimonials ── y=740 h=68 accent purple */}
                <rect x="160" y="740" width="360" height="68" rx="8" fill="#f8f7ff" stroke="#4338ca" strokeWidth="0.75"/>
                <circle cx="188" cy="774" r="14" fill="#4338ca"/>
                <text x="188" y="774" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="#ffffff">8</text>
                <text x="214" y="757" fontSize="12" fontWeight="700" fill="#312e81">Testimonial & Social Proof</text>
                <text x="214" y="774" fontSize="10.5" fill="#64748b">Data on services and expectations that</text>
                <text x="214" y="790" fontSize="10.5" fill="#64748b">become social proof and drive exponential growth</text>

                {/* ── Loop-back dashed arrow ── right of step 8 → rail → up → hub */}
                <path
                  d="M 520 774 L 572 774 L 572 52 L 522 52"
                  fill="none"
                  stroke="#1d4ed8"
                  strokeWidth="1.6"
                  strokeDasharray="6 4"
                  markerEnd="url(#cs-arrow)"
                  opacity="0.55"
                />

                {/* CYCLE REPEATS label */}
                <text
                  x="585" y="413"
                  textAnchor="middle" dominantBaseline="central"
                  fontSize="10" fill="#3b82f6" letterSpacing="1.2"
                  transform="rotate(90, 585, 413)"
                >
                  CYCLE REPEATS
                </text>
              </svg>
            </div>

            {/* Metrics Header */}
            <p className="text-center text-sm font-semibold text-gray-900 mb-6">
              Real numbers. Every metric is verified.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-4 mt-8 max-w-2xl mx-auto">
              {[
                { value: '398K', label: 'YT Views' },
                { value: '17K+', label: 'YT Subs' },
                { value: '33K+', label: 'X Followers' },
                { value: '+1M', label: 'X Impressions' },
                { value: '+6.5K', label: 'Newsletter List' },
                { value: '39.6%', label: 'Email Open Rate' },
                { value: '$0', label: 'Paid Advertising' },
                { value: '+$200K', label: 'Total Revenue' },
              ].map((metric, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 min-w-[160px] justify-center">
                  <span className="text-base font-bold text-navy-dark">
                    {metric.value}
                  </span>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Proof & Evidence */}
          <div className="mt-16">
            <SectionLabel>Proof &amp; Evidence</SectionLabel>
            <p className="text-gray-body leading-relaxed mb-10 max-w-2xl">
              Real results from every stage of the flywheel — verified metrics, documented wins, and 
              testimonials that speak for themselves.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  platform: 'YouTube',
                  stage: 'Content Strategy + Cold Traffic',
                  image: '/Grid Images/youtube_analytics.png',
                  metric: '398K views · 17K+ subscribers',
                  detail: 'Long-form educational content that built authority and attracted cold traffic organically.',
                },
                {
                  platform: 'X (Twitter)',
                  stage: 'Cold Traffic + Warm Subscribers',
                  image: '/Grid Images/twitter_post_anayltics.png',
                  metric: '33K+ followers · 292K impressions',
                  detail: 'Short-form content and threads converted cold audiences into warm subscribers.',
                },
                {
                  platform: 'Newsletter',
                  stage: 'Warm Subscribers + Brand Positioning',
                  image: '/email_newsletter_performance.png',
                  metric: '6.5K+ subscribers · 39.6% open rate',
                  detail: 'Weekly issues nurtured trust and reinforced brand positioning through consistent value.',
                },
                {
                  platform: 'Gumroad',
                  stage: 'Conversion',
                  image: '/gumroad.png',
                  metric: '$41,310 revenue · 272 sales',
                  detail: 'Digital product sales demonstrated product-market fit and conversion capability.',
                },
                {
                  platform: 'Community',
                  stage: 'Student Journey & Social Proof',
                  image: '/Grid Images/community.jpg',
                  metric: '~300 members · Active Discord',
                  detail: 'Real student transformations served as powerful social proof to fuel the flywheel.',
                },
                {
                  platform: 'Total Verified Payouts',
                  stage: 'Results & Outcomes',
                  image: '/Grid Images/payouts.jpg',
                  metric: '$256K+ documented payouts',
                  detail: 'Verified withdrawal results across FTMO, Fidelcrest, FXify, TopStep, Alpha Capital.',
                },
              ].map(({ platform, stage, image, metric, detail }) => (
                <div
                  key={platform}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-300 cursor-pointer"
                  onClick={() => image && setSelectedImage(image)}
                >
                  {/* Image */}
                  {image && (
                    <div className="relative w-full h-44 overflow-hidden">
                      <img
                        src={image}
                        alt={platform}
                        className="w-full h-full object-cover blur-sm group-hover:blur-none transition-all duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        <span className="text-white text-xs font-semibold px-3 py-1.5 bg-black/50 rounded-md">
                          Click to view
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{platform}</span>
                      <span className="text-gray-300 text-xs">·</span>
                      <span className="text-xs text-gray-400">{stage}</span>
                    </div>
                    <p className="font-bold text-gray-900 text-base mb-1">{metric}</p>
                    <p className="text-gray-body text-xs leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* The Three-phase Offer */}
      <section className="mt-12">
        <FadeIn>
          <SectionLabel>The Three-Phase Offer</SectionLabel>
          
          <p className="text-gray-body leading-relaxed mb-6 text-sm">
            Braveheart Trading ran an offer that evolved with three phases. This was possible because of listening to feedback and further optimizing our product and content strategies.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="border border-gray-200 p-4 rounded-lg">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Phase 1: 2022-2023</span>
              <p className="font-semibold text-gray-900 mt-1">Subscription $150/qtr</p>
              <p className="text-gray-body text-xs mt-1">Educational trading courses and resources with structured learning and community access</p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Phase 2: 2023-2024</span>
              <p className="font-semibold text-gray-900 mt-1">Subscription + Coaching</p>
              <p className="text-gray-body text-xs mt-1">Continued subscription offer but with additional access to 1o1 coaching and done-with-you</p>
            </div>

            <div className="border border-gray-200 p-4 rounded-lg">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Phase 3: 2024-2025</span>
              <p className="font-semibold text-gray-900 mt-1">High-ticket Mentorship</p>
              <p className="text-gray-body text-xs mt-1">Directed low-ticket offers to high-ticket and leveraged testimonials for done-with-you clients</p>
            </div>
          </div>

          <p className="text-sm text-gray-body">
            Across all three phases: <strong className="text-gray-900">300</strong> customers were served, <strong className="text-gray-900">$200k+</strong> was generated and with <strong className="text-gray-900">no paid ads</strong>.
          </p>
        </FadeIn>
      </section>

      <Divider />

      {/* Operational Lessons */}
      <section>
        <FadeIn>
          <SectionLabel>Operational Lessons</SectionLabel>

          <div className="space-y-6">
            <div>
              <p className="font-bold text-gray-900 mb-1">Trust and genuine value are the foundation of every relationship.</p>
              <p className="text-gray-body text-sm leading-relaxed">Every sale was a byproduct of trust built before the ask. Giving real value without conditions was the only growth strategy that held long-term.</p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-1">Organic growth compounds on AI-controlled platforms.</p>
              <p className="text-gray-body text-sm leading-relaxed">Algorithms reward genuine engagement over optimised reach. Understanding that distinction was why organic growth became self-sustaining.</p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-1">Systems scale better than individuals.</p>
              <p className="text-gray-body text-sm leading-relaxed">Effort has a ceiling — systems don't. The lesson from running this solo was to build the system first and operate efficiently within it.</p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-1">Specialisation drives output quality and efficiency.</p>
              <p className="text-gray-body text-sm leading-relaxed">Doing everything simultaneously meant quality suffered everywhere. Specialised focus produces faster, better output — that directly shapes how I approach team-based work now.</p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-1">Standards and consistency define the brand.</p>
              <p className="text-gray-body text-sm leading-relaxed">The standard you hold yourself to over time becomes what the brand stands for. Consistency in tone, quality and responsiveness — even when no one was watching — was what made the community feel worth being part of.</p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-1">The customer is the flywheel.</p>
              <p className="text-gray-body text-sm leading-relaxed">Satisfied customers were the most efficient marketing asset — they shortened the trust-building cycle for every new person who found the brand. Prioritising customer experience wasn't a service decision, it was a growth decision.</p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-1">Community creates accountability, momentum and retention.</p>
              <p className="text-gray-body text-sm leading-relaxed">People who participated became more consistent, more results-oriented, and more likely to succeed — which produced the student outcomes that made the brand credible to new audiences. Community wasn't a product feature, it was the engine.</p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-1">Brand presence is the cost of entry in skeptical markets.</p>
              <p className="text-gray-body text-sm leading-relaxed">Before a new visitor read a single piece of content, they were already making a trust judgment on profile quality, visual consistency and perceived authority. A strong, consistent brand reduces the friction that stops cold audiences from converting.</p>
            </div>
          </div>

          {/* Closing Line */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-body text-sm leading-relaxed italic">
              Everything built here — the content systems, the audience, the revenue — came from applying the same thinking I'd bring to any brand: understand who you're trying to reach, earn their trust before asking for anything, and build systems that compound over time. That's the work I'm looking to do next.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-full max-h-full w-full h-full flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Zoomable image container */}
            <div 
              className="relative transition-transform duration-200"
              style={{ transform: `scale(${zoom})` }}
            >
              <img 
                src={selectedImage} 
                alt="Full size view" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors z-10"
              onClick={() => {
                setSelectedImage(null);
                setZoom(1);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Zoom controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
              <button 
                className="text-white hover:text-blue-400 p-1 transition-colors"
                onClick={() => setZoom(Math.max(0.5, zoom - 0.25))}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="text-white text-sm min-w-[60px] text-center">{Math.round(zoom * 100)}%</span>
              <button 
                className="text-white hover:text-blue-400 p-1 transition-colors"
                onClick={() => setZoom(Math.min(3, zoom + 0.25))}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <button 
                className="text-white hover:text-blue-400 p-1 transition-colors ml-2"
                onClick={() => setZoom(1)}
                title="Reset zoom"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
