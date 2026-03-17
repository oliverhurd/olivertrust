import React, { useState } from 'react';

export function NotesPage() {
  const [activeNote, setActiveNote] = useState<string>('first-principles');

  return (
    <main className="max-w-5xl mx-auto px-6 py-24 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row gap-16">

        {/* Sidebar */}
        <aside className="w-full md:w-[250px] shrink-0">
          <h1 className="text-3xl font-serif font-bold text-navy-dark mb-10">Notes</h1>

          <div className="space-y-8">

            <div>
              <div className="flex items-center text-xs font-bold text-gray-light tracking-wider uppercase mb-3">
                <span className="mr-2">📁</span> MENTAL MODELS
              </div>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setActiveNote('first-principles')}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      activeNote === 'first-principles'
                        ? 'bg-gray-badge text-navy-dark font-medium'
                        : 'text-gray-body hover:bg-gray-50 hover:text-navy-dark'
                    }`}
                  >
                    First Principles Thinking
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center text-xs font-bold text-gray-light tracking-wider uppercase mb-3">
                <span className="mr-2">📁</span> MONETIZATION
              </div>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setActiveNote('high-ticket')}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      activeNote === 'high-ticket'
                        ? 'bg-gray-badge text-navy-dark font-medium'
                        : 'text-gray-body hover:bg-gray-50 hover:text-navy-dark'
                    }`}
                  >
                    High-Ticket Monetization
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center text-xs font-bold text-gray-light tracking-wider uppercase mb-3">
                <span className="mr-2">📁</span> PLATFORM PLAYBOOKS
              </div>
              <ul className="space-y-1">
                {[
                  { label: 'YouTube Strategy', key: 'youtube-strategy' },
                  { label: 'Algorithm Calibration', key: 'algorithm-calibration' },
                  { label: 'Twitter/X Growth', key: 'twitter-growth' },
                  { label: 'Newsletter System', key: 'newsletter-system' },
                ].map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => setActiveNote(item.key)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        activeNote === item.key
                          ? 'bg-gray-badge text-navy-dark font-medium'
                          : 'text-gray-body hover:bg-gray-50 hover:text-navy-dark'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </aside>

        {/* FIRST PRINCIPLES NOTE */}
        {activeNote === 'first-principles' && (
          <article className="flex-1 max-w-2xl">
            <header className="mb-10">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-dark mb-4">First Principles Thinking</h1>
              <div className="text-sm text-gray-light">Last updated March 2024 · 8 min read</div>
            </header>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-gray-body leading-relaxed mb-6 border-l-2 border-amber-400 pl-5 text-lg">
                Every billionaire, every genuine innovator, operates from the same cognitive foundation: they don't borrow logic from analogies — they build it from the ground up.
              </p>
              <p className="text-gray-body leading-relaxed mb-10">
                Most people reason by analogy. They observe patterns, inherit assumptions, and apply borrowed frameworks to new problems. It's fast, low-effort, and almost always wrong in novel situations. The alternative is reasoning from{' '}
                <strong className="font-semibold text-navy-dark">first principles</strong>.
              </p>
              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-4 mt-12">Two Modes of Reasoning</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-amber-500 mb-2">Mode 1</p>
                  <h4 className="font-serif font-semibold text-navy-dark mb-2">Reasoning by Analogy</h4>
                  <p className="text-sm text-gray-body leading-relaxed">"Meat causes cancer — my parents always said so." No interrogation of the underlying mechanism. Just inherited belief passed forward.</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-amber-500 mb-2">Mode 2</p>
                  <h4 className="font-serif font-semibold text-navy-dark mb-2">Reasoning from First Principles</h4>
                  <p className="text-sm text-gray-body leading-relaxed">Tracing back to core, unquestionable truths — then reconstructing from there. Slower upfront. Exponentially more accurate long-term.</p>
                </div>
              </div>
              <p className="text-gray-body leading-relaxed mb-10">Analogy-based reasoning borrows someone else's map. First-principles reasoning surveys the actual terrain.</p>
              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-4 mt-12">Subjective vs. Objective Reality</h3>
              <p className="text-gray-body leading-relaxed mb-6">There are two layers of reality every person navigates simultaneously. The goal isn't to pick one — it's to maximise their overlap. The more your subjective beliefs align with what is objectively true, the higher your probability of being right. And the more right you are than wrong, the better every decision compounds — in business, in marketing, in life.</p>
              <blockquote className="border-l-2 border-gray-divider pl-6 italic text-gray-light text-lg my-10">"A first principle is a statement of truth that cannot be further questioned. Everything else is built from it."</blockquote>
              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-4 mt-12">What a First Principle Actually Is</h3>
              <p className="text-gray-body leading-relaxed mb-6">Math is the clearest example: <strong className="font-semibold text-navy-dark">1 + 1 = 2</strong>. You cannot argue with it. It doesn't depend on context, culture, or opinion. It simply is.</p>
              <p className="text-gray-body leading-relaxed mb-10">Any reasoning that doesn't trace back to first principles is reasoning on a cracked foundation. Get the principles wrong, and everything built on top — your strategy, your product, your marketing — is wrong too.</p>
              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-6 mt-12">The Framework in Practice</h3>
              <div className="space-y-5 mb-10">
                <div className="border border-gray-200 rounded-lg p-6">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-gray-light mb-2">Case Study — Amazon</p>
                  <h4 className="font-serif font-semibold text-navy-dark mb-3">What does the ideal customer actually want?</h4>
                  <p className="text-sm text-gray-body leading-relaxed mb-2">Jeff Bezos didn't ask "what do retailers do?" He asked: what is fundamentally true about what customers value?</p>
                  <p className="text-sm text-gray-body leading-relaxed">→ Fastest shipping. Widest selection. Lowest prices.</p>
                  <p className="text-sm text-gray-body leading-relaxed mt-2">Every Amazon system and product was fractalled out from those three truths — not from what competitors were doing.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-gray-light mb-2">Case Study — Tesla</p>
                  <h4 className="font-serif font-semibold text-navy-dark mb-3">Why are electric vehicles expensive?</h4>
                  <p className="text-sm text-gray-body leading-relaxed mb-2">The prevailing assumption: "batteries are expensive — that's just the reality." Elon Musk asked instead: <em>what are batteries made of, and what does each component cost at commodity prices?</em></p>
                  <p className="text-sm text-gray-body leading-relaxed mb-3">The materials weren't the problem. The manufacturing process was. By internalising production, Tesla broke the assumed cost ceiling.</p>
                  <p className="font-serif text-2xl text-amber-500">$600/kWh → $80/kWh</p>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-6 mt-12">The Two-Step Method</h3>
              <div className="space-y-6 mb-8">
                <div className="flex gap-5">
                  <span className="font-serif text-3xl text-amber-400 leading-none flex-shrink-0 w-7">1</span>
                  <div>
                    <p className="font-medium text-navy-dark mb-1">Deconstruct</p>
                    <p className="text-sm text-gray-body leading-relaxed">Break the problem to its irreducible core. Strip away assumptions, analogies, and inherited conventions until only unquestionable truths remain.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <span className="font-serif text-3xl text-amber-400 leading-none flex-shrink-0 w-7">2</span>
                  <div>
                    <p className="font-medium text-navy-dark mb-1">Reconstruct</p>
                    <p className="text-sm text-gray-body leading-relaxed">Build back up from those core truths. Don't patch the old system — design a new one from the foundation. Fractal outward. Every element should trace back to a principle you can defend.</p>
                  </div>
                </div>
              </div>
              <blockquote className="border-l-2 border-gray-divider pl-6 italic text-gray-light text-lg my-10">"If you reason from analogy, you inherit someone else's ceiling. First principles give you your own floor."</blockquote>
            </div>
          </article>
        )}

        {/* HIGH-TICKET NOTE */}
        {activeNote === 'high-ticket' && (
          <article className="flex-1 max-w-2xl">
            <header className="mb-10">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-dark mb-4">
                High-Ticket Monetization
              </h1>
              <div className="text-sm text-gray-light">Last updated March 2024 · 10 min read</div>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">

              <p className="text-gray-body leading-relaxed mb-6 border-l-2 border-amber-400 pl-5 text-lg">
                A small, engaged audience is worth more than a massive, passive one — if you know how to monetize it correctly. This is what I learned building the back-end marketing system for Braveheart Trading.
              </p>

              <p className="text-gray-body leading-relaxed mb-10">
                Most creators chase audience size. They assume reach equals revenue. It doesn't. What drives revenue is the ability to identify a specific person's core desire and build an offer so well-fitted to that desire that the sale becomes almost inevitable. Here's the framework I used.
              </p>

              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-4 mt-12">
                Step 1: Find a High-Ticket Problem to Solve
              </h3>

              <p className="text-gray-body leading-relaxed mb-6">
                The biggest mistake I see — and one I made early on — is building vague offers for vague people. "I help young men improve their habits." That's not an offer. That's a category. Nobody buys a category.
              </p>

              <p className="text-gray-body leading-relaxed mb-4">
                Every high-ticket offer that actually closes follows the <strong className="font-semibold text-navy-dark">3P Rule</strong>:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Person', desc: 'Exactly who you serve. Not "entrepreneurs" — a specific type with a specific situation.' },
                  { label: 'Problem', desc: "The core desire they'd pay anything to solve. Not a surface inconvenience — the thing keeping them up at night." },
                  { label: 'Path', desc: 'Your specific method for solving it. Your mechanism, your edge, your process.' },
                ].map(({ label, desc }) => (
                  <div key={label} className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-amber-500 mb-2">Specific</p>
                    <h4 className="font-serif font-semibold text-navy-dark mb-2">{label}</h4>
                    <p className="text-sm text-gray-body leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-body leading-relaxed mb-10">
                The strength of the Person + Problem combination determines the ceiling of your offer. Get both right, and you have a grand slam offer. Get either wrong, and no amount of copywriting or funnel optimisation will save you.
              </p>

              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-4 mt-12">
                Core Desire: The Pricing Multiplier
              </h3>

              <p className="text-gray-body leading-relaxed mb-6">
                Not all problems are created equal. The intensity of the desire your offer fulfils directly determines what someone will pay. I've seen this play out consistently across every project I've worked on.
              </p>

              <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-5 py-3 font-semibold text-navy-dark">Intensity of Desire</th>
                      <th className="text-left px-5 py-3 font-semibold text-navy-dark">Price Prospect Pays</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['1/5', '$5'],
                      ['2/5', '$50'],
                      ['3/5', '$500'],
                      ['4/5', '$5,000'],
                      ['5/5 — Core Desire', '$50,000'],
                    ].map(([intensity, price]) => (
                      <tr key={intensity} className={intensity.includes('Core') ? 'bg-amber-50' : ''}>
                        <td className={`px-5 py-3 ${intensity.includes('Core') ? 'font-semibold text-amber-700' : 'text-gray-body'}`}>{intensity}</td>
                        <td className={`px-5 py-3 ${intensity.includes('Core') ? 'font-semibold text-amber-700' : 'text-gray-body'}`}>{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-body leading-relaxed mb-10">
                At Braveheart Trading, the surface-level ask was "help us grow our YouTube channel." But the core desire of their audience was financial freedom — a trading system that gave them control over their time and income. That's a 5/5 desire. That's why the back-end converted.
              </p>

              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-4 mt-12">
                How to Find the Core Desire: Market Research Calls
              </h3>

              <p className="text-gray-body leading-relaxed mb-6">
                You don't guess what people want. You ask them. The market research call is the most underused and highest-leverage tool in monetization. Every time I've done this phase properly before building an offer, conversion has been significantly higher than when I skipped it.
              </p>

              <p className="text-gray-body leading-relaxed mb-4">On every research call, I'm mapping three things:</p>

              <div className="space-y-3 mb-8">
                {[
                  { n: '1', title: 'Current Situation', desc: "Where are they right now? What does their day-to-day actually look like? What have they already tried?" },
                  { n: '2', title: 'Desired Situation', desc: "Where do they want to be? Not the polished version they tell themselves — the real one. What does success actually look like?" },
                  { n: '3', title: 'The Gap', desc: "What's standing between where they are and where they want to be? This is where your offer lives." },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex gap-5 items-start border border-gray-200 rounded-lg p-5">
                    <span className="font-serif text-2xl text-amber-400 leading-none flex-shrink-0 w-6">{n}</span>
                    <div>
                      <p className="font-medium text-navy-dark mb-1">{title}</p>
                      <p className="text-sm text-gray-body leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-2 border-gray-divider pl-6 italic text-gray-light text-lg my-10">
                "There's money in every member. You just need to find out what it is they value enough to pay for."
              </blockquote>

              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-4 mt-12">
                Step 2: Build Goodwill Before You Sell
              </h3>

              <p className="text-gray-body leading-relaxed mb-6">
                This is where most people get impatient and blow the sale. They find a hot lead and immediately pitch them. It rarely works unless you're exceptional at sales. The better play — especially early on — is to build goodwill first.
              </p>

              <p className="text-gray-body leading-relaxed mb-6">
                At Braveheart Trading, the entire content ecosystem was built on this principle. The YouTube channel, the newsletter, the free community content — none of it sold anything directly. It gave away frameworks, analysis, and genuine insight for free. By the time an offer was made, the audience already trusted the thinking behind it. Closing became a formality.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-light mb-3">The Goodwill Equation</p>
                <div className="space-y-2 text-sm text-gray-body">
                  <p>❌ No goodwill + wrong offer = nothing</p>
                  <p>❌ No goodwill + right offer = occasional sale, low trust</p>
                  <p className="text-navy-dark font-medium">✓ Goodwill + core desire offer = high conversion, retention, referrals</p>
                </div>
              </div>

              <ul className="space-y-3 mb-10">
                {[
                  "Study the problems your audience has — become a genuine expert, not a proxy for someone else's ideas.",
                  "Publish 3–7 posts per week that directly address those problems. Give the information away freely.",
                  "Reply to every comment. Every one. This compounds trust faster than any ad spend.",
                  "Give information, sell implementation. Give information, sell personalisation.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0"></span>
                    <p className="text-sm text-gray-body leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-4 mt-12">
                The Simple Truth
              </h3>

              <p className="text-gray-body leading-relaxed mb-6">
                Get people into your world. Find out what they actually want. Help them for free until they trust you. Then sell them the thing they've already told you they need.
              </p>

              <p className="text-gray-body leading-relaxed mb-10">
                It sounds simple because it is. The difficulty isn't the framework — it's the patience to execute it properly when every instinct is telling you to just start selling. The creators and businesses I've seen scale past £10k/month all had one thing in common: they built genuine trust before they asked for money.
              </p>

              <blockquote className="border-l-2 border-gray-divider pl-6 italic text-gray-light text-lg my-10">
                "Money hates desperation. Think long-term. Build the relationship, add value, and when the time is right the sale becomes effortless."
              </blockquote>

            </div>
          </article>
        )}

        {/* YOUTUBE STRATEGY NOTE */}
        {activeNote === 'youtube-strategy' && (
          <article className="flex-1 max-w-2xl">
            <header className="mb-10">
              <div className="text-xs font-bold text-gray-light tracking-wider uppercase mb-3">Platform Playbooks</div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-dark mb-4">YouTube Strategy</h1>
              <div className="text-sm text-gray-light">Braveheart Trading · 5 parts · 15 min read</div>
            </header>

            <div className="prose prose-lg prose-slate max-w-none">

              <p className="text-gray-body leading-relaxed mb-6 border-l-2 border-amber-400 pl-5 text-lg">
                Spend 1 hour per week on YouTube consistently and it feeds everything — authority, trust, positioning, and revenue. It's the most asymmetric thing you can do for your business.
              </p>

              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-4 mt-12">Part 1: The System</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Channel as System', desc: 'See the channel as a system, not a personal brand. You are a business owner with a product — the channel serves the market, not your ego.' },
                  { label: 'Niche First', desc: 'Build everything around your niche. The better you understand them, the more they click, watch, and find things valuable.' },
                  { label: 'Long-term Thinking', desc: "YouTube is a 1–2 year game minimum. Build something for the next 10 years, not for recent causes." },
                  { label: 'Input Goals', desc: "Don't set subscriber goals (outputs). Set content volume goals (inputs). Control what you can control." },
                ].map(({ label, desc }) => (
                  <div key={label} className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <h4 className="font-serif font-semibold text-navy-dark mb-2">{label}</h4>
                    <p className="text-sm text-gray-body leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-light mb-3">The Success Formula</p>
                <p className="text-navy-dark font-semibold text-lg mb-2">YT Success = (CTR × Watch Time) / (Value × Volume) ^ time</p>
                <div className="space-y-1 text-sm text-gray-body">
                  <p><strong className="text-navy-dark">CTR</strong> — Getting people to click. Most important.</p>
                  <p><strong className="text-navy-dark">Watch Time</strong> — Getting people to stay. Most important.</p>
                  <p><strong className="text-navy-dark">Value × Volume</strong> — Consistently valuable content.</p>
                  <p><strong className="text-navy-dark">Time</strong> — The compounding multiplier. Cannot be skipped.</p>
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-4 mt-12">Part 2: The Value Fountain</h3>
              <p className="text-gray-body leading-relaxed mb-5">The less your channel is about value, the more it starts to die. Every video should contain as many of these factors as possible:</p>

              <div className="space-y-2 mb-8">
                {[
                  ['Solution', 'Helps the market solve a painful problem or potential problem'],
                  ['Information', 'Helps the market acquire useful or interesting knowledge'],
                  ['Perspective', 'Gives a unique or new lens on something familiar'],
                  ['Understood', 'Makes the market feel someone genuinely gets them'],
                  ['Motivation', 'Makes the market feel pumped up or excited to act'],
                  ['Resonance', 'Meets the market where it actually is emotionally'],
                  ['Entertainment', 'Cures boredom — keeps people watching'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-4 border border-gray-200 rounded-lg p-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-amber-500 w-24 shrink-0 pt-0.5">{title}</span>
                    <p className="text-sm text-gray-body leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-2 border-gray-divider pl-6 italic text-gray-light text-lg my-10">
                "If you can contain all seven factors in one video, you have a superb video the market thirsts over."
              </blockquote>

              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-4 mt-12">Part 3: Ideation System</h3>
              <p className="text-gray-body leading-relaxed mb-5">
                Ideation is the most important process on YouTube. Great ideas with great packaging and distribution are what produce appointments and enrollments.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-light mb-3">The Golden Idea Principle</p>
                <p className="text-sm text-gray-body leading-relaxed">An idea you understand well enough to articulate for 5–20 minutes <em>and</em> one the market finds valuable. Both conditions must be met.</p>
              </div>

              <p className="text-gray-body leading-relaxed mb-4">Four proven ideation methods:</p>
              <div className="space-y-3 mb-8">
                {[
                  { n: '01', title: 'Grab & Twist', desc: "Take a competitor's popular idea and add your unique spin or angle." },
                  { n: '02', title: 'Series Ideation', desc: 'Create a static series — e.g. one cognitive bias per week. 100 biases = 2 years of content.' },
                  { n: '03', title: 'Comment-based', desc: 'Ask viewers to comment problems or requests relevant to your content pillars.' },
                  { n: '04', title: 'Strange Latticework', desc: 'Use frameworks from unrelated disciplines (physics, biology, chess) to explain your topic.' },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex gap-5 items-start border border-gray-200 rounded-lg p-5">
                    <span className="font-serif text-xl text-amber-400 leading-none shrink-0 w-8">{n}</span>
                    <div>
                      <p className="font-medium text-navy-dark mb-1">{title}</p>
                      <p className="text-sm text-gray-body leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-4 mt-12">Part 4: Packaging System</h3>
              <p className="text-gray-body leading-relaxed mb-5">
                70% is the value from the video. 30% is packaging for initial and continuous interest. View your video like a product in a supermarket — good packaging sells the most.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-amber-500 mb-2">Titles</p>
                  <ul className="space-y-1 text-sm text-gray-body">
                    {['Incentives', 'Negativity', 'Lists', 'Curiosity', 'Timelines', 'Beginner', 'Objections', 'Authority', 'Desire'].map(t => (
                      <li key={t} className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full shrink-0" />{t}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-light mt-3">Viral titles combine multiple types. Include buzzwords often.</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-amber-500 mb-2">Thumbnails</p>
                  <ul className="space-y-1 text-sm text-gray-body">
                    {['Always show face + emotion (left side)', 'Thumbnail supports the title', 'Gives the title visual context', 'Create 20–30 different head/shoulder selfies'].map(t => (
                      <li key={t} className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 bg-gray-400 rounded-full shrink-0" />{t}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <blockquote className="border-l-2 border-gray-divider pl-6 italic text-gray-light text-lg my-10">
                "Promise insane value — and actually deliver it. That's the entire YouTube strategy."
              </blockquote>

              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-4 mt-12">Part 5: Consistency</h3>
              <p className="text-gray-body leading-relaxed mb-5">
                Get it done every week, come hell or high water. Consistency is rewarded. Inconsistency is punished. The algorithm gives you things over time — and when you stop, those things fade.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { title: 'Stay ahead', desc: 'Always be 2 weeks ahead on your upload schedule. Never leave a video to the last minute.' },
                  { title: 'Embrace imperfection', desc: 'Content does not need to be perfect. You are a business owner, not a YouTuber. Just get it done.' },
                  { title: 'Linear before exponential', desc: 'You can only achieve exponential growth by deserving it first. The game is slow, linear, compounding.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-4 border border-gray-200 rounded-lg p-5">
                    <span className="mt-1 w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0"></span>
                    <div>
                      <p className="font-medium text-navy-dark mb-1">{title}</p>
                      <p className="text-sm text-gray-body leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </article>
        )}

      </div>
    </main>
  );
}
