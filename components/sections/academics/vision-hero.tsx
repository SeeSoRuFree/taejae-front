'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { ASSETS, DIMENSIONS } from '@/lib/constants'

interface VisionHeroProps {
  locale: Locale
}

export function VisionHero({ locale }: VisionHeroProps) {
  const { t } = useTranslation(locale)

  return (
    <section
      className="w-full px-12 mt-[66px]"
      style={{
        paddingTop: DIMENSIONS.SECTION_SPACING.LARGE,
        paddingBottom: DIMENSIONS.SECTION_SPACING.LARGE,
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-16">
          {/* Title Section */}
          <div className="px-0 py-2.5 w-full">
            <div className="w-full">
              <h1 className="font-['EB_Garamond'] text-[64px] font-normal leading-[1.1] tracking-[-1.28px] text-[#111111] w-full">
                <p className="mb-0">Educational </p>
                <p className="text-[#1da597]">Visions & Goals</p>
              </h1>
            </div>
          </div>

          {/* Infinity Card */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              height: DIMENSIONS.COMPONENTS.INFINITY_CARD_HEIGHT,
              borderRadius: DIMENSIONS.COMPONENTS.CARD_BORDER_RADIUS,
            }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('${ASSETS.BACKGROUNDS.INFINITY_VISION_BG}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            {/* White Overlay */}
            <div className="absolute inset-0 bg-[#ffffffe6]" />

            <div className="absolute flex flex-col items-center justify-center text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-[685px] relative shrink-0">
                <div className="font-['Bodoni_72'] not-italic text-[120px] leading-[1.1] tracking-[-2.4px] text-[#111111]">
                  ∞
                </div>
              </div>
              <div className="w-[685px] relative shrink-0">
                <div className="font-['Rethink_Sans'] font-normal text-[20px] leading-[1.5] tracking-[-0.6px] text-[#111111]">
                  <p className="mb-0">{t('academics.visionsGoals.hero.infinityText')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description Text Section */}
          <div className="px-0 py-2.5 w-full">
            <div className="flex gap-20 items-start justify-start">
              <div className="flex gap-11 items-start justify-start min-h-px min-w-px flex-1">
                <div className="font-['Rethink_Sans'] font-normal text-[20px] leading-[1.5] tracking-[-0.6px] text-[#111111] w-[960px]">
                  <p className="mb-0">{t('academics.visions.philosophy.description1')}</p>
                  <p className="mb-0">&nbsp;</p>
                  <p>{t('academics.visions.philosophy.description2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
