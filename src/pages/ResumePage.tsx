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
          Resume
        </h1>
        <p className="text-base text-gray-body leading-relaxed max-w-2xl mx-auto">
          Growth and Content Strategist specializing in front-end and back-end marketing,<br className="md:inline" /> and building revenue systems with audiences.
        </p>
        <div className="mt-3 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/cashcow.png"
            download="Oliver-Resume.pdf"
            className="px-6 py-3 bg-white text-navy-dark border border-navy-dark rounded-md font-medium hover:bg-navy-dark hover:text-white transition-all duration-200 text-sm"
          >
            Download my resume
          </a>
        </div>
      </div>

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
                <span className="text-sm text-gray-light font-medium">
                  2020 — 2025
                </span>
              </div>
              <div className="text-sm text-navy-blue font-medium mb-2">
                Braveheart Trading | Online Trading Educational Eco-system
              </div>

            <ul className="space-y-1 text-sm text-gray-body leading-relaxed pl-4 list-disc marker:text-gray-light">
              <li>
                Designed and built cross-platform content strategy and audience building with value propositioning across YouTube, X (Twitter), and Email Marketing for a combined audience of 50k+ subscribers starting from zero.
              </li>
              <li>
                Operated a weekly newsletter, integrated with lead-gen and aquisitional systems, with a consistent 39.6% open-rate across 6.5k+ subscribers with timeless material that drives traffic after its publication.
              </li>
              <li>
                Built Sales Pipelines and Sales Funnels generating $200k+ in conversions with market research and Go-to-Market strategies all done organically -- zero paid ads.
              </li>
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
                <li>
                  Supported and participated in the marketing team during the startup phase of Thailand's leading digital asset exchange.
                </li>
                <li>
                  Worked directly with the Head of Marketing on social media content strategies and campaign coordination.
                </li>
                <li>
                  Contributed to market research and positioning Bitkub's introduction of blockchain and digital asset technology to new users.
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-divider" />

          {/* Entry 3 — ShoppingDoneSmart */}
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200">
              <img 
                src="/Icons/ShoppingDoneSmartIcon.png" 
                alt="ShoppingDoneSmart Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                <h3 className="text-lg font-serif font-bold text-navy-dark">
                  Digital Marketing &amp; E-commerce Manager
                </h3>
                <span className="text-sm text-gray-light font-medium">
                  2016 — 2017
                </span>
              </div>
              <div className="text-sm text-navy-blue font-medium mb-2">
                ShoppingDoneSmart | Global E-com Store
              </div>

              <ul className="space-y-1 text-sm text-gray-body leading-relaxed pl-4 list-disc marker:text-gray-light">
              <li>
                Built and operated a Business to Consumer e-com store selling wholesale products to untapped markets through the medium of influencer marketing.
              </li>
              <li>
                Managed end-to-end operations including research, sourcing, listing, marketing and manual fulfillment with coding and programs.
              </li>
              <li>
                Gained the foundational experience in marketing in the field of global e-commerce, consumer behaviour and psychology, customer journeys and conversion rate optimization.
              </li>
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
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-3">
              Growth Strategy
            </h3>
            <div className="flex flex-col gap-1.5">
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Brand Positioning</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Value Proposition</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Go-to-Market</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Market Research</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-3">
              Content Strategy
            </h3>
            <div className="flex flex-col gap-1.5">
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">User Research &amp; Journey</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Copywriting &amp; Newsletters</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Long/Short-form Formats</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Websites &amp; Landing Pages</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-3">
              Distribution Channels
            </h3>
            <div className="flex flex-col gap-1.5">
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">YouTube</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">X (Twitter)</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Email Marketing</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Owned Communities</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-3">
              RevOps
            </h3>
            <div className="flex flex-col gap-1.5">
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Acquisitional Systems</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Pipelines &amp; Sales Funnels</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Organic &amp; Paid Inbound</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">High &amp; Low Ticket Sales</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-3">
              CommunityOps
            </h3>
            <div className="flex flex-col gap-1.5">
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Community Management</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Audience Development</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Resources &amp; Documentation</span>
              <span className="px-2.5 py-1 bg-white text-gray-body text-xs rounded-full w-fit border border-gray-200">Customer Support</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h3 className="font-serif font-semibold text-sm text-navy-dark mb-3">
              ClientOps
            </h3>
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

        <div>
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
                <h3 className="text-lg font-serif font-bold text-navy-dark">
                  Kasetsart University
                </h3>
                <span className="text-sm text-gray-light font-medium">
                  2017 — 2018
                </span>
              </div>
              <div className="text-sm text-gray-light font-medium">
                Bachelor of Business Administration in Marketing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-12">
        <h2 className="text-xs font-bold text-gray-light tracking-wider uppercase mb-6 border-b border-gray-divider pb-2">
          CERTIFICATIONS
        </h2>

        <div>
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-200 flex items-center justify-center">
              <img 
                src="/Icons/GoogleITProIcon.png" 
                alt="Google IT Support Certificate Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                <h3 className="text-lg font-serif font-bold text-navy-dark">
                  Google IT Support Professional Certificate
                </h3>
                <span className="text-sm text-gray-light font-medium">
                  Jan — 2026
                </span>
              </div>
              <div className="text-sm text-gray-light font-medium">
                Troubleshooting, Networking, Sys Admin, Customer Service
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>);

}