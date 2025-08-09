'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'
import { FacultyHero } from '@/components/sections/academics/faculty-hero'
import { FacultyGrid } from '@/components/sections/academics/faculty-grid'

export default function WhoLearnFromPage() {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen bg-white relative overflow-hidden">
        {/* Background Decoration - Gradient Glass */}
        <img
          src="/assets/gradient-glass-18.png"
          alt=""
          className="absolute 
            -top-[100px] -right-[100px] w-[400px] 
            md:-top-[150px] md:-right-[150px] md:w-[600px] 
            lg:-top-[300px] lg:-right-[200px] lg:w-[989px] 
            h-auto pointer-events-none z-0"
        />

        <div className="relative z-10">
          <FacultyHero locale={locale} />
          <FacultyGrid locale={locale} />
        </div>
      </main>
      <Footer locale={locale} />
    </>
  )
}
