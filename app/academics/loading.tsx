import { HeroSkeleton } from '@/components/ui/skeleton'
import { PageLayout } from '@/components/layout/page-layout'

export default function AcademicsLoading() {
  return (
    <PageLayout className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-[50px] py-[100px]">
        <HeroSkeleton />
      </div>
    </PageLayout>
  )
}
