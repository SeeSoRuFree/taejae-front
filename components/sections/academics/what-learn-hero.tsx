'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { DIMENSIONS } from '@/lib/constants'

interface WhatLearnHeroProps {
  locale: Locale
}

export function WhatLearnHero({ locale }: WhatLearnHeroProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="w-full bg-white pt-[66px]">
      <div className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-[50px] py-[100px]">
          <div className="flex flex-col gap-[100px] items-center justify-start">
            {/* Title */}
            <div className="flex items-start justify-start px-0 py-2.5 w-full">
              <div className="w-full">
                <div className="font-eb-garamond font-normal text-[#111111] text-[64px] tracking-[-1.28px] w-full">
                  <p className="leading-[1.1]">
                    <span>{t('academics.whatLearn.hero.titleMain')}</span>
                    <span className="text-[#1da597]">{` ${t('academics.whatLearn.hero.titleAccent')}`}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="flex items-start justify-start px-0 py-2.5 w-full">
              <div className="w-full">
                <div className="font-rethink-sans font-normal leading-[1.5] text-[#111111] text-[20px] tracking-[-0.6px]">
                  <p className="mb-0">{t('academics.whatLearn.hero.description1')}</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">{t('academics.whatLearn.hero.description2')}</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">{t('academics.whatLearn.hero.description3')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
