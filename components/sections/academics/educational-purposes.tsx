'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import Image from 'next/image'

interface EducationalPurposesProps {
  locale: Locale
}

const purposes = [
  {
    icon: '/assets/icons/globe-icon.svg',
    titleEn: 'A global leader',
    titleKo: '글로벌 리더',
    descriptionEn: 'who contributes to the harmony between East and West',
    descriptionKo: '동서양의 조화에 기여하는',
  },
  {
    icon: '/assets/icons/rocket-icon.svg',
    titleEn: 'A future trailblazer',
    titleKo: '미래 개척자',
    descriptionEn: 'who builds a more sustainable society',
    descriptionKo: '더 지속 가능한 사회를 구축하는',
  },
  {
    icon: '/assets/icons/lightbulb-icon.svg',
    titleEn: 'A self-driven innovator',
    titleKo: '자기주도적 혁신가',
    descriptionEn: 'who leads the era of lifelong learning in the 21st century',
    descriptionKo: '21세기 평생학습 시대를 이끄는',
  },
]

export function EducationalPurposes({ locale }: EducationalPurposesProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="w-full px-12 py-[100px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[100px]">
        {/* Section Title */}
        <div className="py-2.5">
          <h2 className="font-['EB_Garamond'] text-[44px] font-normal leading-[1.1] tracking-[-0.88px] text-[#111111] max-w-[720px]">
            {locale === 'ko' ? '우리의 교육 목적' : 'Our educational purposes'}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="flex gap-10 py-2.5">
          {/* Description Text */}
          <div className="flex-1 max-w-[840px]">
            <p className="font-['Rethink_Sans'] text-[20px] font-normal leading-[1.5] tracking-[-0.6px] text-[#111111] max-w-[685px]">
              {locale === 'ko'
                ? '우리는 교육이 목적을 가지고 성장할 수 있도록, 빠르게 변화하는 세계의 도전을 만나고, 중요한 미래를 형성할 수 있도록 힘을 실어주어야 한다고 믿습니다. 우리 사명의 중심에는 당신의 비전, 창의성, 책임감을 양성하여 문화와 세대를 넘어 지속적인 영향을 남길 수 있도록 하는 헌신이 있습니다:'
                : 'We believe that education should empower you to grow with purpose, meet the challenges of a rapidly changing world, and shape a future that matters. At the heart of our mission is a commitment to nurturing your vision, creativity, and sense of responsibility—so you may leave a lasting impact across cultures and generations, becoming:'}
            </p>
          </div>

          {/* Purpose List */}
          <div className="flex-1 max-w-[840px] flex flex-col gap-14">
            {purposes.map((purpose, index) => (
              <div key={index} className="flex gap-6 items-start">
                {/* Bullet Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-[#545454] rounded-full flex items-center justify-center">
                  <Image src={purpose.icon} alt="" width={28} height={28} className="w-7 h-7" />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="font-['Rethink_Sans'] text-[20px] font-normal leading-[1.5] tracking-[-0.6px] text-[#111111]">
                    {locale === 'ko' ? purpose.titleKo : purpose.titleEn}
                  </h3>
                  <p className="font-['Rethink_Sans'] text-[16px] font-normal leading-[1.5] tracking-[-0.48px] text-[#5b5b5b]">
                    {locale === 'ko' ? purpose.descriptionKo : purpose.descriptionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
