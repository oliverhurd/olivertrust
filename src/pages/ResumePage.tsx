import React from 'react';
import { DownloadIcon } from 'lucide-react';
interface ResumePageProps {
  setPage: (page: string) => void;
}
export function ResumePage({ setPage }: ResumePageProps) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-serif font-bold text-navy-dark mb-2">
          Hi, I'm Oliver!
        </h1>
        <p className="text-base text-gray-body leading-relaxed max-w-2xl mx-auto">
          I build content systems that develop audiences to monetize and grow revenue.
        </p>
        <div className="mt-3 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/Oliver_Hurd_Resume.pdf"
            download="Oliver_Hurd_Resume.pdf"
            className="px-6 py-3 bg-white text-navy-dark border border-navy-dark rounded-md font-medium hover:bg-navy-dark hover:text-white transition-all duration-200 text-sm"
          >
            Download my resume
          </a>
        </div>
      </div>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-xs font-bold text-gray-light tracking-wider uppercase mb-6 border-b border-gray-divider pb-2">
          ABOUT
        </h2>
        <div className="flex-1">
          <p className="text-base text-gray-body leading-relaxed">
            I spent five years building Braveheart Trading from zero — handling content strategy, audience development, back-end systems like newsletters and email marketing, community, and client delivery as a solo operator.
          </p>
          <p className="text-base text-gray-body leading-relaxed mt-4">
            That experience taught me how to think across the entire spectrum, not just one part of it.
          </p>
          <p className="text-base text-gray-body leading-relaxed mt-4">
            I'm now looking to bring that same systems thinking to a team environment — contributing to content strategy and growth inside a brand that's serious about developing an audience and build revenue systems that actually convert.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-xs font-bold text-gray-light tracking-wider uppercase mb-6 border-b border-gray-divider pb-2">
          EXPERIENCE
        </h2>

        <div className="space-y-8">
          {/* Entry 1 — Braveheart Trading */}
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
              <img 
                src="/Icons/Braveheart Trading Icon.png" 
                alt="Braveheart Trading Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                <h3 className="text-lg font-serif font-bold text-navy-dark">
                  Founder &amp; Lead Strategist
                </h3>
                <span className="text-sm text-gray-light font-medium">2020 — 2025</span>
              </div>
              <div className="text-sm text-navy-blue font-medium mb-2">
                Braveheart Trading | Online Trading Educational Ecosystem
              </div>
              <ul className="space-y-1 text-sm text-gray-body leading-relaxed pl-4 list-disc marker:text-gray-light">
                <li>Built and scaled a cross-platform content ecosystem from zero to 50K+ combined subscribers across YouTube, X (Twitter), and Email — entirely through organic strategy, zero paid ads.</li>
                <li>Designed the content strategy, brand positioning, and audience architecture that drove $200K+ in revenue across three offer phases.</li>
                <li>Operated a weekly newsletter with a consistent 39.6% open rate, built on lead-gen and acquisitional email systems that compound traffic long after publication.</li>
                <li>Built full sales pipelines and conversion funnels — from cold content audience to warm subscriber to paying customer — using market research and Go-to-Market strategy.</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-divider" />

          {/* Entry 2 — Bitkub */}
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
              <img 
                src="/Icons/Bitkub Icon.png" 
                alt="Bitkub Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                <h3 className="text-lg font-serif font-bold text-navy-dark">
                  Marketing Intern
                </h3>
                <span className="text-sm text-gray-light font-medium">2018</span>
              </div>
              <div className="text-sm text-navy-blue font-medium mb-2">
                Bitkub | Thailand's Leading Digital Asset Exchange
              </div>
              <ul className="space-y-1 text-sm text-gray-body leading-relaxed pl-4 list-disc marker:text-gray-light">
                <li>Joined the marketing team during Bitkub's startup phase, supporting campaign coordination and social media content strategy directly under the Head of Marketing.</li>
                <li>Contributed to market research and positioning for Bitkub's introduction of blockchain and digital asset technology to new users in Thailand.</li>
                <li>Assisted in translating complex blockchain concepts into accessible content for mainstream Thai audiences — supporting early user education and brand trust initiatives.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-xs font-bold text-gray-light tracking-wider uppercase mb-6 border-b border-gray-divider pb-2">
          SKILLS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-3">Growth Strategy</h3>
            <div className="flex flex-col gap-1.5">
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Brand Positioning</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Value Proposition</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Go-to-Market</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Market Research</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-3">Content Strategy</h3>
            <div className="flex flex-col gap-1.5">
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Content Calendar Management</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Copywriting &amp; Newsletters</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Content Promotion</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Websites &amp; Landing Pages</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-3">Distribution Channels</h3>
            <div className="flex flex-col gap-1.5">
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Social Media Strategy</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">YouTube &amp; X (Twitter)</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Email Marketing</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Owned Communities</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-3">RevOps</h3>
            <div className="flex flex-col gap-1.5">
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Acquisitional Systems</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Pipelines &amp; Sales Funnels</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Organic &amp; Paid Inbound</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">High &amp; Low Ticket Sales</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-3">CommunityOps</h3>
            <div className="flex flex-col gap-1.5">
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Community Management</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Audience Development</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Resources &amp; Documentation</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Customer Support</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-3">ClientOps</h3>
            <div className="flex flex-col gap-1.5">
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Client Onboarding</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Problem Solving</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Client Service Design</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Client Service Mgmt</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-xs font-bold text-gray-light tracking-wider uppercase mb-6 border-b border-gray-divider pb-2">
          EDUCATION
        </h2>
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          <div className="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200 flex items-center justify-center">
            <img 
              src="/Icons/KasetsartBBAicon.png" 
              alt="Kasetsart University Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
              <h3 className="text-lg font-serif font-bold text-navy-dark">Kasetsart University</h3>
              <span className="text-sm text-gray-light font-medium">2017 — 2018</span>
            </div>
            <div className="text-sm text-gray-light font-medium">
              Business Administration in Marketing
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
