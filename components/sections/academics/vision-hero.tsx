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
    <section className="w-full px-12 py-[100px] mt-[66px]">
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
          className="relative w-full h-[360px] rounded-[32px] overflow-hidden flex items-center justify-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/assets/infinity-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute flex flex-col items-center justify-center text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-[685px] relative shrink-0">
              <div className="font-bodoni italic text-[120px] leading-[1.1] tracking-[-2.4px] text-[#111111] mb-0">
                ∞
              </div>
            </div>
            <div className="w-[685px] relative shrink-0">
              {locale === 'ko' ? (
                <>
                  <p className="font-rethink-sans font-normal text-[20px] leading-[1.5] tracking-[-0.6px] text-[#111111] mb-0">
                    태제에서 무한한 가능성을 탐험하세요.
                  </p>
                  <p className="font-rethink-sans font-normal text-[20px] leading-[1.5] tracking-[-0.6px] text-[#111111] mb-0">
                    당신만의 학문적 여정을 만들어가세요.
                  </p>
                  <p className="font-rethink-sans font-normal text-[20px] leading-[1.5] tracking-[-0.6px] text-[#111111]">
                    기하급수적으로 성장하세요.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-rethink-sans font-normal text-[20px] leading-[1.5] tracking-[-0.6px] text-[#111111] mb-0">
                    Explore an infinite range of possibilities at Taejae.
                  </p>
                  <p className="font-rethink-sans font-normal text-[20px] leading-[1.5] tracking-[-0.6px] text-[#111111] mb-0">
                    Shape your own academic journey.
                  </p>
                  <p className="font-rethink-sans font-normal text-[20px] leading-[1.5] tracking-[-0.6px] text-[#111111]">
                    Grow exponentially.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
