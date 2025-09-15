'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { useTranslation } from '@/lib/translations'

export default function GovernanceHero() {
  const locale = useLocaleStore((state) => state.locale)
  const { t } = useTranslation(locale)

  return (
    <section className="relative w-full">
      <div className="max-w-[1440px] mx-auto px-12 mobile:px-6 py-[100px] mobile:py-16">
        <div className="max-w-[720px]">
          <h1 className="font-eb-garamond text-[64px] mobile:text-4xl leading-[1.1] tracking-[-1.28px] font-normal text-black">
            {t('governance.title.main')}
            <br />
            <span className="text-[#1da597]">
              {t('governance.title.subtitle')}
            </span>
          </h1>
        </div>
      </div>
    </section>
  )
}
