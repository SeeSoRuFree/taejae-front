'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'
import { VisionHero } from '@/components/sections/academics/vision-hero'
import { EducationalPurposes } from '@/components/sections/academics/educational-purposes'
import { EducationalGoals } from '@/components/sections/academics/educational-goals'
import Image from 'next/image'

export default function EducationalVisionsGoalsPage() {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen bg-white relative">
        {/* Background Decoration - Responsive positioning */}
        <img
          src="/assets/gradient-glass-16.png"
          alt=""
          className="absolute 
            top-[550px] -right-10 w-[400px] 
            md:top-[450px] md:-right-[200px] md:w-[600px] 
            lg:-top-20 lg:-right-20 lg:w-[900px] 
            h-auto pointer-events-none z-0"
        />

        <div className="relative">
          <VisionHero locale={locale} />
          <EducationalPurposes locale={locale} />
          <EducationalGoals locale={locale} />
        </div>
      </main>
      <Footer locale={locale} />
    </>
  )
}
