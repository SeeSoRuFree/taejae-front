'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { useTranslation } from '@/lib/translations'

export default function StudentAchievementHero() {
  const locale = useLocaleStore((state) => state.locale)
  const { t } = useTranslation(locale)
  
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[50px] py-[100px] mobile:px-6 mobile:py-16">
        <div className="flex items-start justify-start py-2.5 relative w-full">
          <div className="flex flex-col gap-5 items-start justify-start max-w-[720px] relative">
            <h1 className="font-eb-garamond font-normal text-black text-[64px] leading-[1.1] tracking-[-1.28px] w-full mobile:text-4xl">
              {t('academics.studentLife.studentAchievement.title')}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}