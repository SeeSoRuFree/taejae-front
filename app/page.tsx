'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { TaejaeImperatives } from '@/components/sections/taejae-imperatives'
import { GlobalCampuses } from '@/components/sections/global-campuses'
import { VoiceOfSquad } from '@/components/sections/voice-of-squad'
import { TaejaeNow } from '@/components/sections/taejae-now'
import { Footer } from '@/components/sections/footer'

export default function HomePage() {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen">
        <Hero locale={locale} />
        <TaejaeImperatives locale={locale} />
        <GlobalCampuses locale={locale} />
        <VoiceOfSquad locale={locale} />
        <TaejaeNow locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  )
}
