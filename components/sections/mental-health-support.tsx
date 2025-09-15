'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'

interface MentalHealthSupportProps {
  locale: Locale
}

export default function MentalHealthSupport({ locale }: MentalHealthSupportProps) {
  const { t } = useTranslation(locale)

  const services = t('academics.studentLife.studentSupportCareer.mentalHealth.services')

  return (
    <section className="relative w-full">
      <div className="max-w-[1340px] mx-auto px-[50px] pb-0 mobile:px-[20px]">
        <div className="rounded-[30px] relative">
          <div className="pt-[47px] pb-[60px]">
            {/* Title */}
            <div className="flex items-start justify-start py-2.5 relative w-full">
              <div className="flex flex-col gap-11 grow items-start justify-start max-w-[720px] min-h-px min-w-px relative">
                <div className="font-eb-garamond font-normal leading-[0] max-w-[720px] relative w-full">
                  <h2 className="text-[44px] text-[#111111] tracking-[-0.88px] leading-[1.1] mobile:text-[32px] mobile:tracking-[-0.64px]">
                    {t('academics.studentLife.studentSupportCareer.mentalHealth.title')}
                  </h2>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="font-rethink-sans font-normal leading-[1.5] text-[#111111] text-[20px] tracking-[-0.6px] w-[947px] mt-[38px] mobile:w-full mobile:text-[16px]">
              {t('academics.studentLife.studentSupportCareer.mentalHealth.description')
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

      {/* Service Cards Grid */}
      <div className="max-w-[1340px] mx-auto px-[50px] mt-[16px] pb-[67px] mobile:px-[20px] mobile:mt-[12px]">
        <div className="grid grid-cols-4 gap-[11.61px] mobile:grid-cols-1 mobile:gap-4 tablet:grid-cols-2">
          {services.map((service: any, index: number) => (
            <div
              key={index}
              className="h-[274px] rounded-[30px] relative border-[1.4px] border-black border-solid mobile:h-[220px]"
            >
              <div className="h-[274px] overflow-hidden relative w-full mobile:h-[220px]">
                <div className="absolute flex flex-col gap-4 items-center justify-start leading-[0] text-[#111111] text-center top-[42px] left-1/2 transform -translate-x-1/2 w-[166px] mobile:top-[32px] mobile:w-[140px]">
                  <div className="font-eb-garamond font-bold leading-[30px] relative text-[28px] text-nowrap whitespace-pre mobile:text-[24px] mobile:leading-[26px]">
                    {service.title.split('\n').map((line: string, lineIndex: number) => (
                      <p key={lineIndex} className={lineIndex === 0 ? 'mb-0' : ''}>
                        {line}
                      </p>
                    ))}
                  </div>
                  <div
                    className="font-rethink-sans font-normal min-w-full relative text-[16px] tracking-[-0.48px] mobile:text-[14px]"
                    style={{ width: 'min-content' }}
                  >
                    <p className="leading-[1.5]">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
