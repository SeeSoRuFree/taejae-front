'use client'

import { Hero } from '@/components/sections/hero'
import { PresidentBanner } from '@/components/sections/president-banner'
import { TaejaeImperatives } from '@/components/sections/taejae-imperatives'
import { GlobalCampuses } from '@/components/sections/global-campuses'
import { VoiceOfSquad } from '@/components/sections/voice-of-squad'
import { TaejaeNow } from '@/components/sections/taejae-now'
import { Footer } from '@/components/sections/footer'
import { Header } from '@/components/sections/header'

export default function HomePage() {
  const locale = 'ko'

  return (
    <div className="bg-white flex flex-col items-center justify-start relative w-full min-h-screen">
      <Header locale={locale} />
      <main className="w-full">
        <Hero locale={locale} />
        <TaejaeImperatives locale={locale} />
        <GlobalCampuses locale={locale} />
        <PresidentBanner locale={locale} />
        <VoiceOfSquad locale={locale} />
        <TaejaeNow locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}