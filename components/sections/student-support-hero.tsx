'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import SectionDivider from '@/components/ui/section-divider'

interface StudentSupportHeroProps {
  locale: Locale
}

export default function StudentSupportHero({ locale }: StudentSupportHeroProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="relative w-full">
      {/* Hero Section */}
      <div className="max-w-[1340px] mx-auto px-[50px] pt-[100px] pb-0 mobile:px-[20px] mobile:pt-[50px]">
        <div className="flex flex-col items-start justify-start py-2.5">
          <div className="flex h-auto items-start justify-start py-2.5 relative w-full">
            <div className="flex flex-col font-eb-garamond font-normal gap-5 grow items-start justify-start leading-[0] min-h-px min-w-px relative">
              {/* Title */}
              <div className="max-w-[720px] relative w-full">
                <h1 className="text-[64px] text-black tracking-[-1.28px] leading-[1.1] mobile:text-[40px] mobile:tracking-[-0.8px]">
                  {t('academics.studentLife.studentSupportCareer.hero.title')}
                </h1>
              </div>

              {/* Subtitle */}
              <div className="leading-normal relative w-full">
                <p className="mb-0 text-[48px] text-[#111111] mobile:text-[32px]">
                  {t('academics.studentLife.studentSupportCareer.hero.subtitle')}
                </p>
                <p className="mb-0 text-[48px] text-[#1da597] mobile:text-[32px]">
                  {t('academics.studentLife.studentSupportCareer.hero.subtitleHighlight')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-[1340px] mx-auto px-[50px] pt-[84px] pb-0 mobile:px-[20px] mobile:pt-[40px]">
        <div className="flex gap-20 items-center justify-start">
          <div className="flex flex-col grow items-start justify-start min-h-px min-w-px relative">
            <div className="flex flex-col items-start justify-start relative w-full">
              <div className="flex gap-10 items-start justify-start py-2.5 relative w-full">
                <div className="font-rethink-sans font-normal leading-[1.5] relative text-[#111111] text-[20px] tracking-[-0.6px] w-[835px] mobile:w-full mobile:text-[16px]">
                  {t('academics.studentLife.studentSupportCareer.introduction.text')
                    .split('\n')
                    .map((line: string, index: number) => (
                      <p key={index} className="mb-0">
                        {line}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1340px] mx-auto px-[50px] mt-[32px] mb-[72px] mobile:px-[20px] mobile:mt-[20px] mobile:mb-[40px]">
        <SectionDivider />
      </div>

      {/* Global Language Programs Section */}
      <div className="max-w-[1340px] mx-auto px-[50px] pb-0 mobile:px-[20px]">
        <div className="flex gap-20 items-center justify-start py-2.5">
          <div className="flex flex-col grow items-start justify-start min-h-px min-w-px relative">
            <div className="relative w-full">
              {/* Title */}
              <div className="flex items-start justify-start py-2.5 relative w-full mb-[73px]">
                <div className="flex flex-col gap-11 grow items-start justify-start max-w-[720px] min-h-px min-w-px relative">
                  <div className="font-eb-garamond font-normal leading-[0] max-w-[720px] relative w-full">
                    <h2 className="text-[44px] text-[#111111] tracking-[-0.88px] leading-[1.1] mobile:text-[32px] mobile:tracking-[-0.64px]">
                      {t('academics.studentLife.studentSupportCareer.globalLanguage.title')}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="font-rethink-sans font-normal leading-[1.5] text-[#111111] text-[20px] tracking-[-0.6px] w-[973px] mobile:w-full mobile:text-[16px]">
                {t('academics.studentLife.studentSupportCareer.globalLanguage.description')
                  .split('\n')
                  .map((line: string, index: number) => (
                    <p key={index} className="mb-0">
                      {line}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="max-w-[1340px] mx-auto px-[50px] mt-[61px] mb-[70px] mobile:px-[20px] mobile:mt-[30px] mobile:mb-[40px]">
        <SectionDivider />
      </div>
    </section>
  )
}
