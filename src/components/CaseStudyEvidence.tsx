import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';
export function CaseStudyEvidence() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const evidenceCards = [
    {
      title: 'Gumroad Sales Platform',
      desc: 'Digital product sales through Gumroad marketplace',
      img: "/Grid Images/gumroad.png"
    },
    {
      title: 'Newsletter Global Reach',
      desc: 'Audience distribution across multiple countries',
      img: "/Grid Images/newsletter_performance_in_countries.png"
    },
    {
      title: 'Twitter Analytics',
      desc: 'Social media performance tracking',
      img: "/Grid Images/twitter_post_anayltics.png"
    },
    {
      title: 'YouTube Analytics',
      desc: 'Video content performance metrics',
      img: "/Grid Images/youtube_analytics.png"
    },
    {
      title: 'Community Engagement',
      desc: 'Active community members and interactions',
      img: "/Grid Images/community.jpg"
    },
    {
      title: 'Student Payouts',
      desc: 'Documented student withdrawal records',
      img: "/Grid Images/payouts.jpg"
    }];

  return (
    <div className="space-y-24 py-20">
      {/* Proof & Evidence */}
      <section className="border-t border-gray-divider pt-16">
        <FadeIn>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-light mb-8">
            Proof & Evidence
          </h2>
          <p className="text-gray-body leading-relaxed mb-10">
            Platform-native data from across the growth period. Click any image
            to view full size.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {evidenceCards.map((card, idx) =>
            <FadeIn key={idx} delay={idx * 0.08}>
                <div
                className="group cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedImage(card.img)}>

                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500" />

                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase text-gray-body opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to expand
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-navy-dark mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </FadeIn>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.2
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 cursor-zoom-out backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}>

            <motion.img
            initial={{
              scale: 0.92,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.92,
              opacity: 0
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300
            }}
            src={selectedImage}
            alt="Expanded view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />

            <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors text-sm tracking-widest uppercase font-medium"
            onClick={() => setSelectedImage(null)}>

              ✕ Close
            </button>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}
