'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'
import { VisionHero } from '@/components/sections/academics/vision-hero'
import { PhilosophySection } from '@/components/sections/academics/philosophy-section'
import { SocialImageSection } from '@/components/sections/academics/social-image-section'
import { EducationalPurposes } from '@/components/sections/academics/educational-purposes'
import { EducationalGoals } from '@/components/sections/academics/educational-goals'

export default function EducationalVisionsGoalsPage() {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen bg-white">
        <div className="max-w-[1920px] mx-auto">
          <VisionHero locale={locale} />
          <PhilosophySection locale={locale} />
          <SocialImageSection />
          <EducationalPurposes locale={locale} />
          <EducationalGoals locale={locale} />
        </div>
      </main>
      <Footer locale={locale} />
    </>
  )
}
