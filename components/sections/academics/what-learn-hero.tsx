'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'

interface WhatLearnHeroProps {
  locale: Locale
}

export function WhatLearnHero({ locale }: WhatLearnHeroProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="relative w-full">
      <div
        className="mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        <div className="mb-12 md:mb-16">
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-tight tracking-[-2px] md:tracking-[-3.2px] text-black mb-12">
            {locale === 'ko' ? '무엇을 배우나?' : 'What do you learn?'}
          </h1>
        </div>

        <div className="w-full">
          <p className="text-[18px] md:text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-black">
            {locale === 'ko' ? (
              <>
                태제대학교에서는 급변하는 세계에서 성공하는 데 필요한 역량을 갖추도록 설계된
                변혁적이고 학제간 교육을 경험하게 됩니다. 우리의 커리큘럼은 전통적인 경계를 넘어
                광범위한 기초 지식과 깊은 전문 지식을 결합합니다.
                <br />
                <br />
                비판적 사고와 혁신 기초를 마스터하는 것부터 융합 연구의 최전선을 탐구하는 것까지,
                당신은 복잡한 도전을 해결하고 의미 있는 영향을 만들 준비를 하게 될 것입니다. 우리의
                유연한 학습 모델을 통해 당신의 열정을 추구하고, 학문 분야를 연결하며, 당신만의
                독특한 교육 여정을 만들 수 있습니다.
              </>
            ) : (
              <>
                At Taejae University, you&apos;ll experience a transformative, interdisciplinary
                education designed to equip you with the competencies needed to thrive in our
                rapidly changing world. Our curriculum transcends traditional boundaries, combining
                broad foundational knowledge with deep specialized expertise.
                <br />
                <br />
                From mastering critical thinking and innovation foundations to exploring the
                frontiers of convergence studies, you&apos;ll be prepared to tackle complex
                challenges and create meaningful impact. With our flexible learning model, you can
                pursue your passions, connect disciplines, and craft your own unique educational
                journey.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
