'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'

interface EngageliSectionProps {
  locale: Locale
}

export function EngageliSection({ locale }: EngageliSectionProps) {
  const { t } = useTranslation(locale)

  const description = t('academics.howLearn.engageli.description') as string[]

  return (
    <section className="py-[100px] px-[50px] max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-[100px]">
        {/* Title Section */}
        <div className="flex items-start justify-start py-2.5 w-full">
          <div className="flex flex-col gap-11 w-full">
            <h2 className="font-eb-garamond font-normal leading-[1.1] max-w-[960px] text-[64px] text-black tracking-[-1.28px] mobile:text-[40px] mobile:tracking-[-0.8px]">
              <span className="text-black">
                {t('academics.howLearn.engageli.titlePrefix')}
              </span>
              <span className="text-[#1da597]">
                {t('academics.howLearn.engageli.titleHighlight')}
              </span>
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex gap-10 items-start justify-start py-2.5 w-full">
          <div className="flex flex-col gap-11 max-w-[960px] w-full">
            <div className="font-rethink-sans font-normal leading-[1.5] text-[#111111] text-[20px] tracking-[-0.6px] w-full mobile:text-[18px] mobile:tracking-[-0.54px]">
              {description.map((paragraph, index) => (
                <div key={index}>
                  <p className="mb-0" style={{ whiteSpace: 'pre-line' }}>
                    {paragraph}
                  </p>
                  {index < description.length - 1 && index !== description.length - 2 && (
                    <p className="mb-0">&nbsp;</p>
                  )}
                  {index === description.length - 2 && <p className="mb-0">&nbsp;</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}