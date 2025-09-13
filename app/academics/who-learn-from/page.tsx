'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { PageLayout } from '@/components/layout/page-layout'
import { WhoLearnFrom } from '@/components/sections/academics/who-learn-from'
import Image from 'next/image'

export default function WhoLearnFromPage() {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <PageLayout className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Decoration - Gradient Glass */}
      <Image
        src="/assets/gradient-glass-18.png"
        alt=""
        width={989}
        height={989}
        className="absolute 
          -top-[100px] -right-[100px] w-[400px] 
          md:-top-[150px] md:-right-[150px] md:w-[600px] 
          lg:-top-[300px] lg:-right-[200px] lg:w-[989px] 
          h-auto pointer-events-none z-0"
      />

      <div className="relative z-10">
        <WhoLearnFrom locale={locale} />
      </div>
    </PageLayout>
  )
}
