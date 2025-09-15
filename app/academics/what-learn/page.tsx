'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { useTranslation } from '@/lib/translations'
import { PageLayout } from '@/components/layout/page-layout'
import { WhatLearnHero } from '@/components/sections/academics/what-learn-hero'
import { SixCompetencies } from '@/components/sections/academics/six-competencies'
import { InnovationFoundations } from '@/components/sections/academics/innovation-foundations'
import { FutureConvergence } from '@/components/sections/academics/future-convergence'
import { AcademicCurriculumSection } from '@/components/sections/academics/academic-curriculum-section'
import VoiceOfSquadSection from '@/components/sections/voice-of-squad'

export default function WhatLearnPage() {
  const locale = useLocaleStore((state) => state.locale)
  const { t } = useTranslation(locale)

  // Curriculum data for all 4 sections
  const curriculumSections = [
    {
      title: t('academics.whatLearn.curriculum.naturalSciences.title'),
      subtitle: t('academics.whatLearn.curriculum.naturalSciences.subtitle'),
      backgroundImage: '/assets/academics/ns-background.png',
      categories: [
        {
          title: t('academics.whatLearn.curriculum.naturalSciences.fundamentals'),
          courses: t(
            'academics.whatLearn.curriculum.naturalSciences.courses.fundamentals'
          ) as string[],
        },
        {
          title: t('academics.whatLearn.curriculum.naturalSciences.advanced'),
          courses: t('academics.whatLearn.curriculum.naturalSciences.courses.advanced') as string[],
        },
        {
          title: t('academics.whatLearn.curriculum.naturalSciences.interdisciplinary'),
          courses: t(
            'academics.whatLearn.curriculum.naturalSciences.courses.interdisciplinary'
          ) as string[],
        },
      ],
      buttonText: t('academics.whatLearn.curriculum.naturalSciences.buttonText'),
      buttonHref: '/academics/natural-sciences',
    },
    {
      title: t('academics.whatLearn.curriculum.naturalSciences2.title'),
      subtitle: t('academics.whatLearn.curriculum.naturalSciences2.subtitle'),
      backgroundImage: '/assets/academics/social-sciences-bg.png',
      decorativeImage: '/assets/academics/social-sciences-decoration.png',
      categories: [
        {
          title: t('academics.whatLearn.curriculum.naturalSciences2.fundamentals'),
          courses: t(
            'academics.whatLearn.curriculum.naturalSciences2.courses.fundamentals'
          ) as string[],
        },
        {
          title: t('academics.whatLearn.curriculum.naturalSciences2.advanced'),
          courses: t(
            'academics.whatLearn.curriculum.naturalSciences2.courses.advanced'
          ) as string[],
        },
        {
          title: t('academics.whatLearn.curriculum.naturalSciences2.interdisciplinary'),
          courses: t(
            'academics.whatLearn.curriculum.naturalSciences2.courses.interdisciplinary'
          ) as string[],
        },
      ],
      buttonText: t('academics.whatLearn.curriculum.naturalSciences2.buttonText'),
      buttonHref: '/academics/natural-sciences-2',
    },
    {
      title: t('academics.whatLearn.curriculum.dataScienceAI.title'),
      subtitle: t('academics.whatLearn.curriculum.dataScienceAI.subtitle'),
      backgroundImage: '/assets/academics/data-science-bg.png',
      decorativeImage: '/assets/academics/data-science-robot.png',
      categories: [
        {
          title: t('academics.whatLearn.curriculum.dataScienceAI.fundamentals'),
          courses: t(
            'academics.whatLearn.curriculum.dataScienceAI.courses.fundamentals'
          ) as string[],
        },
        {
          title: t('academics.whatLearn.curriculum.dataScienceAI.advanced'),
          courses: t('academics.whatLearn.curriculum.dataScienceAI.courses.advanced') as string[],
        },
        {
          title: t('academics.whatLearn.curriculum.dataScienceAI.interdisciplinary'),
          courses: t(
            'academics.whatLearn.curriculum.dataScienceAI.courses.interdisciplinary'
          ) as string[],
        },
      ],
      buttonText: t('academics.whatLearn.curriculum.dataScienceAI.buttonText'),
      buttonHref: '/academics/data-science-ai',
    },
    {
      title: t('academics.whatLearn.curriculum.businessInnovation.title'),
      subtitle: t('academics.whatLearn.curriculum.businessInnovation.subtitle'),
      backgroundImage: '/assets/academics/business-innovation-bg.png',
      decorativeImage: '/assets/academics/business-innovation-decoration.png',
      categories: [
        {
          title: t('academics.whatLearn.curriculum.businessInnovation.fundamentals'),
          courses: t(
            'academics.whatLearn.curriculum.businessInnovation.courses.fundamentals'
          ) as string[],
        },
        {
          title: t('academics.whatLearn.curriculum.businessInnovation.advanced'),
          courses: t(
            'academics.whatLearn.curriculum.businessInnovation.courses.advanced'
          ) as string[],
        },
        {
          title: t('academics.whatLearn.curriculum.businessInnovation.interdisciplinary'),
          courses: t(
            'academics.whatLearn.curriculum.businessInnovation.courses.interdisciplinary'
          ) as string[],
        },
      ],
      buttonText: t('academics.whatLearn.curriculum.businessInnovation.buttonText'),
      buttonHref: '/academics/business-innovation',
    },
  ]

  return (
    <PageLayout className="min-h-screen bg-white">
      <WhatLearnHero locale={locale} />
      <SixCompetencies locale={locale} />
      <InnovationFoundations locale={locale} />
      <FutureConvergence locale={locale} />
      {curriculumSections.map((section, index) => (
        <AcademicCurriculumSection key={index} {...section} hideImageTitle={index === 0} />
      ))}
      <VoiceOfSquadSection />
    </PageLayout>
  )
}
