'use client'

import { PageLayout } from '@/components/layout/page-layout'
import { GlobalRotationsHero } from '@/components/sections/global-rotations/global-rotations-hero'
import { EuropeGrandTourImage } from '@/components/sections/global-rotations/europe-grand-tour-image'
import { GlobalCampusMap } from '@/components/sections/global-rotations/global-campus-map'
import { useLocaleStore } from '@/lib/store/locale-store'

export default function GlobalRotationsPage() {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <PageLayout>
      <GlobalRotationsHero locale={locale} />
      <EuropeGrandTourImage />
      <GlobalCampusMap locale={locale} />
    </PageLayout>
  )
}
