'use client'

import { PageLayout } from '@/components/layout/page-layout'
import { GlobalRotationsHero } from '@/components/sections/global-experience/global-rotations-hero'
import { GlobalCampusMap } from '@/components/sections/global-experience/global-campus-map'
import { useLocaleStore } from '@/lib/store/locale-store'

export default function GlobalExperiencePage() {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <PageLayout>
      <GlobalRotationsHero locale={locale} />
      <GlobalCampusMap locale={locale} />
    </PageLayout>
  )
}