'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'

interface WhoLearnFromHeroProps {
  locale: Locale
}

export function WhoLearnFromHero({ locale }: WhoLearnFromHeroProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="w-full bg-white">
      {/* Title and Description Section - Matching Figma Design */}
      <div className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-[50px] py-[100px]">
          <div className="flex flex-col gap-[100px] items-center justify-start">
            {/* Title */}
            <div className="flex items-start justify-start px-0 py-2.5 w-full">
              <div className="w-full">
                <div className="font-['EB_Garamond'] font-normal text-[#111111] text-[64px] tracking-[-1.28px] w-full">
                  <p className="leading-[1.1]">
                    {locale === 'ko' ? (
                      <>
                        <span>누구에게</span>
                        <span className="text-[#1da597]">{` 배우나?`}</span>
                      </>
                    ) : (
                      <>
                        <span>Who do you</span>
                        <span className="text-[#1da597]">{` learn from?`}</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="flex items-start justify-start px-0 py-2.5 w-full">
              <div className="w-full">
                <div className="font-['Rethink_Sans'] font-normal leading-[1.5] text-[#111111] text-[20px] tracking-[-0.6px]">
                  <p className="mb-0">{t('academics.whoLearnFrom.hero.description1')}</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">{t('academics.whoLearnFrom.hero.description2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
