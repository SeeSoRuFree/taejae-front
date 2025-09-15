'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { PageLayout } from '@/components/layout/page-layout'
import StudentSupportHero from '@/components/sections/student-support-hero'
import CareerDevelopment from '@/components/sections/career-development'
import MentalHealthSupport from '@/components/sections/mental-health-support'

export default function StudentSupportCareerPage() {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <PageLayout>
      <StudentSupportHero locale={locale} />
      <CareerDevelopment locale={locale} />
      <MentalHealthSupport locale={locale} />
    </PageLayout>
  )
}
