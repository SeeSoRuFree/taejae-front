'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { PageLayout } from '@/components/layout/page-layout'
import { WhatLearnHero } from '@/components/sections/academics/what-learn-hero'
import { SixCompetencies } from '@/components/sections/academics/six-competencies'
import { InnovationFoundations } from '@/components/sections/academics/innovation-foundations'
import { FutureConvergence } from '@/components/sections/academics/future-convergence'
import { AcademicCurriculumSection } from '@/components/sections/academics/academic-curriculum-section'

export default function WhatLearnPage() {
  const locale = useLocaleStore((state) => state.locale)

  // Natural Sciences curriculum data (피그마에서 가져온 정확한 데이터)
  const naturalSciencesData = {
    title: 'Natural Sciences',
    subtitle: 'Explore the fundamental principles of the natural world',
    backgroundImage: '/assets/academics/ns-background.png',
    categories: [
      {
        title: 'Fundamentals',
        courses: [
          'Perspectives on Humans and Society',
          'Global History I',
          'Global Narratives',
          'Domestic and International Politics'
        ]
      },
      {
        title: 'Advanced',
        courses: [
          'Global History II',
          'Global Philosophy',
          'Humanities Special Seminar I & II',
          'Social Science Special Seminar II'
        ]
      },
      {
        title: 'Interdisciplinary',
        courses: [
          'Literary and Cultural Connections',
          'Creative Digital Humanities',
          'Domestic Problems and Social Changes',
          'Global Challenges and Governance',
          'Navigating Tomorrow : Emerging Technologies and Future Society',
          'Special Cross-disciplinary Seminar I & II'
        ]
      }
    ],
    buttonText: 'Learn more ',
    buttonHref: '/academics/natural-sciences'
  }

  return (
    <PageLayout className="min-h-screen bg-white">
      <WhatLearnHero locale={locale} />
      <SixCompetencies locale={locale} />
      <InnovationFoundations locale={locale} />
      <FutureConvergence locale={locale} />
      <AcademicCurriculumSection {...naturalSciencesData} />
    </PageLayout>
  )
}