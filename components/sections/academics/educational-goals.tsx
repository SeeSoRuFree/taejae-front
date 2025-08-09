'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'
import Image from 'next/image'

interface EducationalGoalsProps {
  locale: Locale
}

const goals = [
  {
    titleEn: 'Global Leadership',
    titleKo: '글로벌 리더십',
    descriptionEn: 'who contributes to the harmony between East and West',
    descriptionKo: '동서양의 조화에 기여하는',
    image: '/assets/gradient-glass-20.png',
    imageWidth: 156,
    imageHeight: 168,
  },
  {
    titleEn: 'Communication & Collaboration',
    titleKo: '소통과 협업',
    descriptionEn: 'who contributes to the harmony between East and West',
    descriptionKo: '동서양의 조화에 기여하는',
    image: '/assets/gradient-glass-16.png',
    imageWidth: 173,
    imageHeight: 168,
  },
  {
    titleEn: 'Creative & Critical Thinking',
    titleKo: '창의적 비판적 사고',
    descriptionEn: 'who contributes to the harmony between East and West',
    descriptionKo: '동서양의 조화에 기여하는',
    image: '/assets/gradient-glass-11.png',
    imageWidth: 162,
    imageHeight: 168,
  },
  {
    titleEn: 'Lifelong Learning',
    titleKo: '평생 학습',
    descriptionEn: 'who contributes to the harmony between East and West',
    descriptionKo: '동서양의 조화에 기여하는',
    image: '/assets/gradient-glass-2.png',
    imageWidth: 224,
    imageHeight: 168,
  },
]

export function EducationalGoals({ locale }: EducationalGoalsProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="relative w-full">
      <div
        className="mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        {/* Section Title */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-tight tracking-[-2px] md:tracking-[-3.2px] text-black mb-4">
            {locale === 'ko' ? '우리의 교육 목표' : 'Our educational goals'}
          </h2>
          <p className="text-[18px] md:text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-black max-w-[685px]">
            {locale === 'ko'
              ? '글로벌 리더이자 변화를 만드는 사람이 되도록 준비시키기 위해.'
              : 'To equip you to become a global leader and changemaker.'}
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="relative bg-[#121212] rounded-3xl p-8 md:p-12 lg:p-14 h-[320px] md:h-[360px] lg:h-[380px] flex flex-col justify-between overflow-hidden"
            >
              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-[28px] md:text-[32px] lg:text-[37px] font-medium leading-[1.3] tracking-[-1.11px] text-white mb-3 max-w-[320px]">
                  {locale === 'ko' ? goal.titleKo : goal.titleEn}
                </h3>
                <p className="text-[14px] md:text-[16px] font-normal leading-[1.3] tracking-[-0.48px] text-white/80 max-w-[280px]">
                  {locale === 'ko' ? goal.descriptionKo : goal.descriptionEn}
                </p>
              </div>

              {/* Gradient Glass Image */}
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-14 lg:right-14">
                <Image
                  src={goal.image}
                  alt=""
                  width={goal.imageWidth}
                  height={goal.imageHeight}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
