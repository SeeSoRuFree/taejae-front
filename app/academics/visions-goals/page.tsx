'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { PageLayout } from '@/components/layout/page-layout'
import { VisionHero } from '@/components/sections/academics/vision-hero'
import { PhilosophySection } from '@/components/sections/academics/philosophy-section'
import { SocialImageSection } from '@/components/sections/academics/social-image-section'
import { EducationalPurposes } from '@/components/sections/academics/educational-purposes'
import { EducationalGoals } from '@/components/sections/academics/educational-goals'

export default function EducationalVisionsGoalsPage() {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <PageLayout className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto">
        <VisionHero locale={locale} />
        <PhilosophySection locale={locale} />
      </div>
      <SocialImageSection />
      <div className="max-w-[1440px] mx-auto">
        <EducationalPurposes locale={locale} />
        <EducationalGoals locale={locale} />
      </div>
    </PageLayout>
  )
}
