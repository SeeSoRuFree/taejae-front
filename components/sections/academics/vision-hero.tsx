'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import Image from 'next/image'

interface VisionHeroProps {
  locale: Locale
}

export function VisionHero({ locale }: VisionHeroProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="w-full px-12 py-[100px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        {/* Title Section */}
        <div className="py-2.5">
          <h1 className="font-['EB_Garamond'] text-[64px] font-normal leading-[1.1] tracking-[-1.28px] text-[#111111] max-w-[720px]">
            Educational
            <br />
            <span className="text-[#1da597]">Visions & Goals</span>
          </h1>
        </div>

        {/* Infinity Card */}
        <div
          className="relative w-full h-[360px] rounded-[32px] overflow-hidden bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url('/assets/infinity-bg.png')` }}
        >
          <div className="text-center">
            <div className="font-['Bodoni_72'] italic text-[120px] leading-[1.1] tracking-[-2.4px] text-[#111111]">
              ∞
            </div>
            <p className="font-['Rethink_Sans'] text-[20px] font-normal leading-[1.5] tracking-[-0.6px] text-[#111111] mt-4">
              {locale === 'ko' ? (
                <>
                  태제에서 무한한 가능성을 탐험하세요.
                  <br />
                  당신만의 학문적 여정을 만들어가세요.
                  <br />
                  기하급수적으로 성장하세요.
                </>
              ) : (
                <>
                  Explore an infinite range of possibilities at Taejae.
                  <br />
                  Shape your own academic journey.
                  <br />
                  Grow exponentially.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
