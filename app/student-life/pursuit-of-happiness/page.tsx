import { PageLayout } from '@/components/layout/page-layout'
import PursuitOfHappinessHero from '@/components/sections/student-life/pursuit-of-happiness-hero'
import ActivityGrid from '@/components/sections/student-life/activity-grid'
import PursuitVideoSection from '@/components/sections/student-life/pursuit-video-section'

export default function PursuitOfHappinessPage() {
  return (
    <PageLayout>
      <PursuitOfHappinessHero />
      <ActivityGrid />
      <PursuitVideoSection />
    </PageLayout>
  )
}