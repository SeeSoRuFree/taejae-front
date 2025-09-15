'use client'

import { PageLayout } from '@/components/layout/page-layout'
import { ExperientialLearningSection } from '@/components/sections/global-rotations/experiential-learning-section'
import { CivicProjectsSection } from '@/components/sections/global-rotations/civic-projects-section'
import GlobalStudyEngagementSection from '@/components/sections/global-rotations/global-study-engagement'
import { useLocaleStore } from '@/lib/store/locale-store'

export default function ExperientialLearningPage() {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <PageLayout>
      <ExperientialLearningSection locale={locale} />
      <CivicProjectsSection locale={locale} />
      <GlobalStudyEngagementSection />
    </PageLayout>
  )
}