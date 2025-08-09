'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'

interface VisionHeroProps {
  locale: Locale
}

export function VisionHero({ locale }: VisionHeroProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="relative w-full">
      <div
        className="mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        {/* Title Section */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-tight tracking-[-2px] md:tracking-[-3.2px] text-black mb-8">
            Educational
            <br />
            Visions & Goals
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="max-w-[685px]">
            <p className="text-[18px] md:text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-black mb-6">
              {locale === 'ko'
                ? '우리의 교육 철학은 글로벌 조화와 지속가능성을 위한 당신의 비판적이고 창의적인 사고를 육성하는 것입니다. 우리는 빠르게 변화하는 세계를 탐색하고 형성할 비전, 민첩성, 그리고 성실성을 갖춘 글로벌 리더로 당신을 양성하는 데 전념하고 있습니다.'
                : 'It is our educational philosophy to foster your critical and creative thinking for global harmony and sustainability. We are committed to nurturing you as global leaders equipped with the vision, agility, and integrity to navigate and shape a rapidly evolving world.'}
            </p>
            <p className="text-[18px] md:text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-black">
              {locale === 'ko'
                ? '인류를 하나로 묶는 교육의 힘에 대한 우리의 믿음에 기반하여, 우리는 동서양 문화를 연결하고, 지속 가능한 미래에 기여하며, 공감과 혁신으로 이끄는 리더로 당신을 양성하는 데 전념하고 있습니다.'
                : 'Grounded in our belief in the power of education to unite humanity, we are committed to nurturing you into a leader who bridges Eastern and Western cultures, contributes to a sustainable future, and leads with empathy and innovation.'}
            </p>
          </div>

          {/* Visual Element - Glassmorphism Card */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full lg:max-w-[685px] h-[360px] bg-[#F1F1F1]/30 backdrop-blur-sm rounded-3xl flex items-center justify-center overflow-hidden">
              <div className="text-center px-8 md:px-12 py-8">
                <div className="text-[120px] md:text-[166px] leading-[0.7] tracking-[-8.3px] mb-8 font-normal">
                  ∞
                </div>
                <p className="text-[20px] md:text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black">
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
        </div>
      </div>
    </section>
  )
}
