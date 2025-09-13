'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { PageLayout } from '@/components/layout/page-layout'
import { VisionHero } from '@/components/sections/academics/vision-hero'
import { SocialImageSection } from '@/components/sections/academics/social-image-section'
import { EducationalPurposes } from '@/components/sections/academics/educational-purposes'
import { EducationalGoals } from '@/components/sections/academics/educational-goals'

export default function EducationalVisionsGoalsPage() {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <PageLayout className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto">
        <VisionHero locale={locale} />
      </div>

      {/* Full-width image section - breaks out of container */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <SocialImageSection />
      </div>

      <div className="max-w-[1440px] mx-auto">
        <EducationalPurposes locale={locale} />
        <EducationalGoals locale={locale} />
      </div>
    </PageLayout>
  )
}
