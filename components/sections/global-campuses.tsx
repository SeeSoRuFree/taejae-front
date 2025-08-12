'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'

interface GlobalCampusesProps {
  locale: Locale
}

// 로컬에 저장된 이미지 사용
const imgVectorWorldMap11 = '/assets/world-map.png'

export function GlobalCampuses({ locale }: GlobalCampusesProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="py-20">
      <div className="mx-auto px-4" style={{ maxWidth: `${MAX_CONTENT_WIDTH}px` }}>
        <div className="mb-12">
          <h2
            data-key="global-campuses-title"
            className="text-5xl md:text-6xl font-medium leading-tight"
          >
            Global
            <br />
            Campuses
          </h2>
        </div>

        <div className="relative w-full" style={{ aspectRatio: '1410 / 799.7' }}>
          <div className="relative w-full h-full max-w-[1400px] mx-auto">
            <div
              className="bg-top bg-cover bg-no-repeat w-full h-full"
              style={{ backgroundImage: `url('${imgVectorWorldMap11}')` }}
            />
            <div className="absolute top-[25%] right-[8%] bg-[#7B7986] rounded-[24px] px-8 py-6 w-[285px] shadow-[rgba(56,38,193,0.07)_0px_119px_80px_0px,rgba(54,36,184,0.047)_0px_35.875px_48.082px_0px,rgba(64,50,171,0.047)_0px_14.901px_11.24px_0px,rgba(15,8,67,0.04)_0px_5.389px_1.02px_0px]">
              <div className="flex flex-col gap-2 font-['Instrument_Sans'] font-medium">
                <h3
                  data-key="global-campuses-korea"
                  className="text-white text-5xl md:text-6xl leading-none tracking-[-3.2px] font-medium"
                >
                  Korea
                </h3>
                <p
                  data-key="global-campuses-seoul"
                  className="text-white text-2xl md:text-3xl leading-[1.3] tracking-[-0.9px] font-medium"
                >
                  Seoul
                </p>
                <p
                  data-key="global-campuses-harmony"
                  className="text-[#DDDDDD] text-lg md:text-[22px] leading-[1.35] tracking-[-0.66px] font-medium"
                >
                  Harmony & Balance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
