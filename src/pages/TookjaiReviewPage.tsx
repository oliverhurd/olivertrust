import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TookjaiReviewPageProps {
  setPage: (page: string) => void;
}

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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-gray-body">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0 mt-2" />
          <span className="text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export function TookjaiReviewPage({ setPage }: TookjaiReviewPageProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const images = {
    productStrategy: '/Stratedgy_for_finding_winning_products.png',
    aiResearch: '/Ai_market_research,_landing_pages_and_copywriting_for_Affiliate_Marketing.png',
    aiCreatives: '/AI_image_video_generation_and_product_replacement_to_Affiliate_Marketing.png',
    fbAdsMetrics: '/FB_Ads_and_Metrics_for_beauty_product_post_pixel_warm_up.png',
    pixelWarmup: '/FB_Ads_for_high_engagement_and_pixel_warm_up.png',
  };

  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-24 animate-in fade-in duration-500">

      {/* ── Back ── */}
      <button
        onClick={() => setPage('case-studies')}
        className="inline-flex items-center text-sm text-gray-light hover:text-gray-900 transition-colors mb-12"
      >
        <ArrowLeftIcon className="w-3.5 h-3.5 mr-2" />
        Back to Case Studies
      </button>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-5">
          {['Media Buying', 'FB Ads', 'Affiliate Marketing'].map((tag, i, arr) => (
            <React.Fragment key={tag}>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{tag}</span>
              {i < arr.length - 1 && <span className="text-xs text-gray-300">·</span>}
            </React.Fragment>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
          Tookjai Review
        </h1>

        <blockquote className="border-l-2 border-gray-900 pl-5 mb-8">
          <p className="text-lg text-gray-900 leading-relaxed">
            AI-Assisted Performance Marketing &amp; Affiliate Funnel Experiment
          </p>
        </blockquote>

        <p className="text-gray-body leading-relaxed mb-4">
          Tookjai Review is a homelab experiment exploring how AI-assisted research, creative generation,
          and paid acquisition can be combined to test affiliate marketing opportunities in Southeast Asian ecommerce.
        </p>
        <p className="text-gray-body leading-relaxed">
          The project focused on building a repeatable performance marketing workflow for identifying
          high-potential ecommerce products and validating them through paid acquisition experiments.
        </p>
      </section>

      {/* ════════════════════════════════════════
          PROJECT OBJECTIVE
      ════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionLabel>Project Objective</SectionLabel>
        <p className="text-gray-body leading-relaxed mb-6">
          The goal was to build a repeatable framework for affiliate marketing:
        </p>
        <BulletList items={[
          'Finding winning products doing well overseas and testing them in Thai markets',
          'Generating high-quality ad creatives using AI workflows and refining winners to scale asymmetrically',
          'Building deep market research to generate direct sales copy for landing pages',
          'Creating a performance marketing edge with Meta Ads paid advertising platform',
        ]} />
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          TRAFFIC & CONVERSION ARCHITECTURE
      ════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionLabel>Traffic &amp; Conversion Architecture</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Traffic &amp; Conversion Architecture</h2>
        <p className="text-gray-body leading-relaxed mb-8">
          Instead of sending traffic directly to ecommerce listings, users were first directed to educational/authoritative advertorials and listicles with attention-grabbing headlines and engaging copy to continue reading. This allowed for pre-sell and increased purchase intent before bridging high-intent traffic to a Shopee product with an affiliate link. If done correctly, affiliate commissions will outweigh the costs per click.
        </p>

        {/* Funnel flow */}
        <div className="max-w-sm mx-auto">
          {[
            { label: 'Meta Ads', sub: 'Facebook & Instagram' },
            { label: 'Advertorial Landing Page', sub: 'Conversion-Optimised Content' },
            { label: 'AffiliateClick Event', sub: 'Meta Pixel Tracking' },
            { label: 'Shopee Product Page', sub: 'Marketplace Listing' },
          ].map(({ label, sub }, i, arr) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-full border border-gray-200 rounded-lg px-6 py-4 text-center bg-white">
                <p className="font-semibold text-gray-900 text-sm">{label}</p>
                <p className="text-xs text-gray-light mt-0.5">{sub}</p>
              </div>
              {i < arr.length - 1 && (
                <div className="py-2">
                  <ArrowRightIcon className="w-3.5 h-3.5 text-gray-300 rotate-90" />
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col items-center">
            <div className="py-2">
              <ArrowRightIcon className="w-3.5 h-3.5 text-gray-300 rotate-90" />
            </div>
            <div className="w-full border border-gray-200 rounded-lg px-6 py-4 text-center bg-gray-50">
              <p className="font-semibold text-gray-900 text-sm">Affiliate Commission</p>
              <p className="text-xs text-gray-light mt-0.5">Revenue Generated</p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          PRODUCT TEST
      ════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionLabel>Product Test</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Product Test: Microcurrent Gua Sha Device
        </h2>
        <p className="text-gray-body leading-relaxed mb-6">
          This product was doing very well overseas in the US markets, so I wanted to see how it would do in Southeast Asian markets, where there is an untapped market on the Thai Facebook ad marketplace. This creates an arbitrage opportunity once discovered, tested, and proven.
        </p>
        <div className="rounded-lg border border-gray-200 p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-light mb-3">Target Audience</p>
          <p className="text-gray-body text-sm leading-relaxed">
            Thai beauty and skincare consumers — specifically busy women looking for quick 5-minute Gua Sha routines or night-time skin-care routines for morning glow. While focusing on the beauty niche, creatives and copy were generated based on different marketing angles.
          </p>
        </div>
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          MARKET RESEARCH
      ════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionLabel>Market Research</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Market Research &amp; Customer Analysis
        </h2>
        <p className="text-gray-body leading-relaxed mb-6">
          Before testing any product, a structured research workflow was used to validate market opportunity:
        </p>
        <div className="mb-8">
          <BulletList items={[
            'Used webtools like SimilarWeb to check how much traffic overseas websites were getting for a particular product — once it met a threshold and was validated with other confluences, proceed to the next step',
            'Studied winning ads on Facebook Ads Library, filtering the best ads to identify winning products with multiple creatives by the same advertiser',
            'Once passing these filters, started deep market research with AI workflows to ensure the product would fit the Thai market if positioned correctly',
            'Created customer avatar sheets to understand pain points and desires',
            'Developed offer briefs and mapped belief and persuasion frameworks',
          ]} />
        </div>
        <p className="text-gray-body leading-relaxed mb-8">
          These documents were combined into a{' '}
          <strong className="text-gray-900">Master Research Document</strong>, which served as
          the core knowledge asset for the campaign.
        </p>
        <ImageBlock
          label="Shopee Product Listing Example"
          src={images.productStrategy}
          alt="Shopee Product Listing and Strategy"
          onClick={() => setLightboxImage(images.productStrategy)}
        />
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          AI-ASSISTED WORKFLOW
      ════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionLabel>AI-Assisted Workflow</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          AI-Assisted Workflows with Master Research Docs
        </h2>
        <p className="text-gray-body leading-relaxed mb-8">
          In order to build the best creatives and copy for testing, constructing high-probability market research was crucial. All AI workflows stemmed from a single document to ensure the potential of AI can craft the perfect ad/copy for testing — and later on for scaling.
        </p>

        {/* Research flow */}
        <div className="max-w-sm mx-auto mb-8">
          {[
            'Market Research',
            'Avatar Sheet Development',
            'Offer Brief Creation',
            'Deep Research Analysis',
          ].map((step, i, arr) => (
            <div key={step} className="flex flex-col items-center">
              <div className="w-full border border-gray-200 rounded-lg px-6 py-3 text-center bg-white">
                <p className="font-semibold text-gray-900 text-sm">{step}</p>
              </div>
              {i < arr.length - 1 && (
                <div className="py-2">
                  <ArrowRightIcon className="w-3.5 h-3.5 text-gray-300 rotate-90" />
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col items-center">
            <div className="py-2">
              <ArrowRightIcon className="w-3.5 h-3.5 text-gray-300 rotate-90" />
            </div>
            <div className="w-full border border-gray-200 rounded-lg px-6 py-3 text-center bg-gray-50">
              <p className="font-semibold text-gray-900 text-sm">Master Research Document</p>
            </div>
          </div>
        </div>

        <p className="text-gray-body leading-relaxed mb-4">
          The results of each ad/copy/creative produced depends heavily on the valid market research. SOPs were included to ensure no AI slop or random fluff or jargon was included, to keep the Master Research Document as an asset to the affiliate marketing business holistically.
        </p>
        <p className="text-gray-body leading-relaxed mb-4">
          From this single source, AI tools were able to generate:
        </p>
        <div className="mb-8">
          <BulletList items={[
            'Ad creative ideas and angles',
            'World-class direct response copywriting',
            'Appropriate landing page structures and sequences',
            'Educational and authoritative advertorial/listicle pages',
          ]} />
        </div>
        <ImageBlock
          label="AI Research & Copywriting Workflow"
          src={images.aiResearch}
          alt="AI Research & Copywriting Workflow"
          onClick={() => setLightboxImage(images.aiResearch)}
        />
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          CREATIVE TESTING
      ════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionLabel>Creative Testing</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Creative Testing Strategy</h2>
        <p className="text-gray-body leading-relaxed mb-4">
          The campaign used rapid creative testing across multiple styles:
        </p>
        <div className="mb-8">
          <BulletList items={[
            'Lifestyle beauty creatives',
            'Product demonstration visuals',
            'UGC-style videos',
            'Problem-solution messaging',
          ]} />
        </div>
        <ImageBlock
          label="Facebook Ad Creative Testing"
          src={images.aiCreatives}
          alt="Facebook Ad Creative Examples"
          onClick={() => setLightboxImage(images.aiCreatives)}
        />
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          LANDING PAGE STRATEGY
      ════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionLabel>Landing Page Strategy</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Landing Page Conversion Strategy</h2>
        <p className="text-gray-body leading-relaxed mb-4">
          Advertorial landing pages were designed to pre-sell the product before redirecting to Shopee. Each page included:
        </p>
        <div className="mb-8">
          <BulletList items={[
            'Educational content explaining microcurrent technology',
            'Social proof and customer testimonials',
            'Before-and-after visual comparisons',
            'Product demonstrations',
            'Multiple call-to-action buttons',
          ]} />
        </div>
        <ImageBlock
          label="Advertorial Landing Page Structure"
          src={images.aiResearch}
          alt="Advertorial Landing Page Structure"
          onClick={() => setLightboxImage(images.aiResearch)}
        />
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          PIXEL TRACKING
      ════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionLabel>Pixel Tracking &amp; Warm-Up</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Meta Pixel Tracking &amp; Warm-Up</h2>
        <p className="text-gray-body leading-relaxed mb-4">
          A Meta Pixel tracking system was implemented including domain verification, base pixel installation,
          and a custom conversion event called{' '}
          <code className="text-sm bg-gray-100 border border-gray-200 px-2 py-0.5 rounded font-mono">
            AffiliateClick
          </code>{' '}
          to track when users clicked outbound affiliate links to Shopee.
        </p>
        <p className="text-gray-body leading-relaxed mb-8">
          Before launching beauty campaigns, viral engagement posts were used to warm up the Pixel at low cost.
          Once sufficient signals were collected, targeting shifted to beauty-focused audiences.
        </p>
        <ImageBlock
          label="Pixel Warm-Up Engagement Campaign"
          src={images.pixelWarmup}
          alt="Pixel Warm-Up Engagement Campaign"
          onClick={() => setLightboxImage(images.pixelWarmup)}
        />
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          CAMPAIGN PERFORMANCE
      ════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionLabel>Campaign Performance</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Campaign Performance</h2>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200 mb-8">
          {[
            { value: '2–3%', label: 'CTR' },
            { value: '฿8–9', label: 'Avg CPC' },
            { value: '35–54', label: 'Top Age Range' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-white px-5 py-6 text-center">
              <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
              <p className="text-xs font-bold text-gray-light uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-body leading-relaxed mb-8">
          The strongest engagement came from{' '}
          <strong className="text-gray-900">women aged 35–54</strong>, which helped refine
          creative direction and audience targeting.
        </p>
        <ImageBlock
          label="Ads Manager Campaign Metrics"
          src={images.fbAdsMetrics}
          alt="Facebook Ads Manager Performance Metrics"
          onClick={() => setLightboxImage(images.fbAdsMetrics)}
        />
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          KEY INSIGHTS
      ════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionLabel>Key Insights</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Insights</h2>
        <div className="space-y-2">
          {[
            'Creative testing is the primary driver of paid media performance.',
            'Pre-selling traffic through advertorial pages improves affiliate click quality.',
            'Meta Pixel optimisation requires sufficient engagement signals before refining targeting.',
            'AI tools significantly accelerate research, creative production, and landing page generation.',
            'Affiliate campaigns require careful analysis of conversion economics to determine whether commission margins can support paid acquisition.',
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3 border border-gray-200 rounded-md px-4 py-3 bg-white">
              <span className="text-gray-300 font-bold text-xs shrink-0 mt-0.5">→</span>
              <p className="text-sm text-gray-body leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          FUTURE EXPERIMENTS
      ════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionLabel>Future Experiments</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Future Experiments</h2>
        <BulletList items={[
          'Testing lower-ticket beauty products better suited for impulse purchases',
          'Introducing retargeting campaigns for users who visited the landing page',
          'Testing additional creative formats including UGC-style video ads',
          'Expanding experiments into TikTok Ads for broader traffic testing',
        ]} />
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          SKILLS DEMONSTRATED
      ════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionLabel>Skills Demonstrated</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {[
            'Performance Marketing',
            'Affiliate Marketing',
            'Meta Ads Campaign Management',
            'Creative Testing Strategy',
            'Conversion Funnel Design',
            'AI-Assisted Marketing Workflows',
            'Customer Research & Market Analysis',
            'Landing Page Conversion Optimisation',
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 border border-gray-200 rounded-full text-sm text-gray-body hover:border-gray-400 hover:text-gray-900 transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ── Bottom Nav ── */}
      <div className="flex items-center justify-between border-t border-gray-divider pt-12">
        <button
          onClick={() => setPage('case-studies')}
          className="inline-flex items-center text-sm text-gray-light hover:text-gray-900 transition-colors"
        >
          <ArrowLeftIcon className="w-3.5 h-3.5 mr-2" />
          All Case Studies
        </button>
        <button
          onClick={() => setPage('case-study-braveheart')}
          className="inline-flex items-center text-sm text-gray-light hover:text-gray-900 transition-colors"
        >
          Braveheart Trading
          <ArrowRightIcon className="w-3.5 h-3.5 ml-2" />
        </button>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            >
              <XIcon className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={lightboxImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}

// ─── Image Block ──────────────────────────────────────────────────────────────

function ImageBlock({
  label, src, alt, onClick,
}: {
  label: string;
  src: string;
  alt: string;
  onClick: () => void;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-gray-light mb-3">{label}</p>
      <div
        onClick={onClick}
        className="group relative rounded-lg overflow-hidden cursor-pointer border border-gray-200"
      >
        <img
          src={src}
          alt={alt}
          className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-gray-900">
            Click to expand
          </span>
        </div>
      </div>
    </div>
  );
}
