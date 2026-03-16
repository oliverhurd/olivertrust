import React from 'react';
import { CaseStudyHero } from '../components/CaseStudyHero';
import { CaseStudyContent } from '../components/CaseStudyContent';
interface CaseStudyPageProps {
  setPage: (page: string) => void;
}
export function CaseStudyPage({ setPage }: CaseStudyPageProps) {
  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 animate-in fade-in duration-500">
      <CaseStudyHero setPage={setPage} />
      <CaseStudyContent />
    </main>);

}
