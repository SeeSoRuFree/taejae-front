'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { PageLayout } from '@/components/layout/page-layout'
import { WhoLearnFromHero } from '@/components/sections/academics/who-learn-from-hero'
import { WhoLearnFrom } from '@/components/sections/academics/who-learn-from'
import { FacultyImageSection } from '@/components/sections/academics/faculty-image-section'

export default function WhoLearnFromPage() {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <PageLayout className="min-h-screen bg-white">
      <WhoLearnFromHero locale={locale} />

      {/* Full-width faculty image with stronger breakout */}
      <div className="w-screen relative left-1/2 -translate-x-1/2">
        <FacultyImageSection />
      </div>

      <WhoLearnFrom locale={locale} />
    </PageLayout>
  )
}
