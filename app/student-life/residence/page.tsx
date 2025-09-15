'use client'

import { PageLayout } from '@/components/layout/page-layout'
import ResidenceHeroSection from '@/components/sections/student-life/residence-hero'
import MoveInDayVideoSection from '@/components/sections/student-life/move-in-day-video'

export default function ResidencePage() {
  return (
    <PageLayout>
      <ResidenceHeroSection />
      <MoveInDayVideoSection />
    </PageLayout>
  )
}