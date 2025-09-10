'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import Image from 'next/image'

interface EducationalGoalsProps {
  locale: Locale
}

const goals = [
  {
    icon: '/assets/icons/global-icon.svg',
    titleEn: 'Global Leadership',
    titleKo: '글로벌 리더십',
    descriptionEn: 'who contributes to the harmony between East and West',
    descriptionKo: '동서양의 조화에 기여하는',
  },
  {
    icon: '/assets/icons/communication-icon.svg',
    titleEn: 'Communication & Collaboration',
    titleKo: '소통과 협업',
    descriptionEn: 'who contributes to the harmony between East and West',
    descriptionKo: '동서양의 조화에 기여하는',
  },
  {
    icon: '/assets/icons/creative-icon.svg',
    titleEn: 'Creative & Critical Thinking',
    titleKo: '창의적 비판적 사고',
    descriptionEn: 'who contributes to the harmony between East and West',
    descriptionKo: '동서양의 조화에 기여하는',
  },
  {
    icon: '/assets/icons/lifelong-icon.svg',
    titleEn: 'Lifelong Learning',
    titleKo: '평생 학습',
    descriptionEn: 'who contributes to the harmony between East and West',
    descriptionKo: '동서양의 조화에 기여하는',
  },
]

export function EducationalGoals({ locale }: EducationalGoalsProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="w-full px-12 py-[100px] mb-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[120px]">
        {/* Section Title */}
        <div className="py-2.5">
          <div className="flex flex-col gap-2.5 max-w-[720px]">
            <h2 className="font-['EB_Garamond'] text-[44px] font-normal leading-[1.1] tracking-[-0.88px] text-[#111111]">
              {locale === 'ko' ? '우리의 교육 목표' : 'Our educational goals'}
            </h2>
            <p className="font-['Rethink_Sans'] text-[20px] font-normal leading-[1.5] tracking-[-0.6px] text-[#111111] max-w-[685px]">
              {locale === 'ko'
                ? '글로벌 리더이자 변화를 만드는 사람이 되도록 준비시키기 위해.'
                : 'To equip you to become a global leader and changemaker.'}
            </p>
          </div>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-[#f2f2f2] rounded-[24px] px-12 py-14 flex flex-col gap-10"
            >
              {/* Icon */}
              <div className="w-[100px] h-[100px] relative">
                <Image src={goal.icon} alt="" fill className="object-contain" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2">
                <h3 className="font-['EB_Garamond'] text-[30px] font-normal leading-[1.3] tracking-[-0.6px] text-[#111111]">
                  {locale === 'ko' ? goal.titleKo : goal.titleEn}
                </h3>
                <p className="font-['Rethink_Sans'] text-[16px] font-normal leading-[1.5] tracking-[-0.48px] text-[#5b5b5b] max-w-[280px]">
                  {locale === 'ko' ? goal.descriptionKo : goal.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
