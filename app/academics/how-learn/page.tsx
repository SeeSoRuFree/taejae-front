'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { PageLayout } from '@/components/layout/page-layout'
import { HowLearnHero } from '@/components/sections/academics/how-learn-hero'
import { ActiveLearningSection } from '@/components/sections/academics/active-learning-section'
import { ActiveLearningEssence } from '@/components/sections/academics/active-learning-essence'
import { EngageliSection } from '@/components/sections/academics/engageli-section'

export default function HowLearnPage() {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <PageLayout className="min-h-screen bg-white">
      <HowLearnHero locale={locale} />
      <ActiveLearningSection locale={locale} />
      <ActiveLearningEssence locale={locale} />
      <EngageliSection locale={locale} />
    </PageLayout>
  )
}
