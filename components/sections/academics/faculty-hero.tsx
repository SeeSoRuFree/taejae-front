'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'

interface FacultyHeroProps {
  locale: Locale
}

export function FacultyHero({ locale }: FacultyHeroProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="relative w-full">
      <div
        className="mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        <div className="mb-12 md:mb-16">
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-tight tracking-[-2px] md:tracking-[-3.2px] text-black mb-12">
            {locale === 'ko' ? '누구에게 배우나?' : 'Who do you learn from?'}
          </h1>
        </div>

        <div className="max-w-[840px]">
          <p className="text-[18px] md:text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-black">
            {locale === 'ko' ? (
              <>
                태제대학교에서는 세계 최고의 지성들로부터 배울 수 있습니다. 우리의 교수진은 단순한
                교사가 아닙니다—그들은 당신의 성장에 깊이 헌신하는 명문 대학 출신의 글로벌 전문가,
                연구자, 그리고 멘토입니다.
                <br />
                <br />
                몰입형 온라인 교실에 있든, 실습 프로그램을 통해 실제 문제를 탐구하든, 그들은 모든
                단계에서 당신을 안내할 것입니다. 우리의 유연한 하이브리드 모델을 통해 어디서든
                이러한 세계적 수준의 교수진과 연결하고 진정으로 국제적이고 개인적인 교육을 경험할 수
                있습니다.
              </>
            ) : (
              <>
                At Taejae University, you&apos;ll learn from some of the brightest minds in the
                world. Our professors are more than teachers—they&apos;re global experts,
                researchers, and mentors from prestigious institutions who are deeply invested in
                your growth.
                <br />
                <br />
                Whether you&apos;re in an immersive online classroom or exploring real-world
                challenges through hands-on programs, they&apos;ll guide you every step of the way.
                With our flexible hybrid model, you can connect with these world-class faculty from
                anywhere, and experience a truly international and personal education.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
