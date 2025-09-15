'use client'

import { Hero } from '@/components/sections/hero'
import { PresidentBanner } from '@/components/sections/president-banner'
import { TaejaeImperatives } from '@/components/sections/taejae-imperatives'
import { GlobalCampuses } from '@/components/sections/global-campuses'
import VoiceOfSquadSection from '@/components/sections/voice-of-squad'
import { TaejaeNow } from '@/components/sections/taejae-now'
import { PageLayout } from '@/components/layout/page-layout'
import { useLocaleStore } from '@/lib/store/locale-store'

export default function HomePage() {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <PageLayout isHomePage={true}>
      <Hero locale={locale} />
      <TaejaeImperatives locale={locale} />
      <GlobalCampuses locale={locale} />
      <PresidentBanner locale={locale} />
      <VoiceOfSquadSection />
      <TaejaeNow locale={locale} />
    </PageLayout>
  )
}
