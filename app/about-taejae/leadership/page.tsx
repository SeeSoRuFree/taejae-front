import { PageLayout } from '@/components/layout/page-layout'
import LeadershipHero from '@/components/sections/leadership/leadership-hero'
import LeadershipSection from '@/components/sections/leadership/leadership-section'

export default function LeadershipPage() {
  return (
    <PageLayout>
      <LeadershipHero />
      <LeadershipSection />
    </PageLayout>
  )
}