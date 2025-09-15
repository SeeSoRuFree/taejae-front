import { PageLayout } from '@/components/layout/page-layout'
import StudentAchievementHero from '@/components/sections/student-life/student-achievement-hero'
import StudentAchievementVideos from '@/components/sections/student-life/student-achievement-videos'

export default function StudentAchievementPage() {
  return (
    <PageLayout>
      <StudentAchievementHero />
      <StudentAchievementVideos />
    </PageLayout>
  )
}