'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'
import Image from 'next/image'

interface EducationalPurposesProps {
  locale: Locale
}

const purposes = [
  {
    titleEn: 'A global leader',
    titleKo: '글로벌 리더',
    descriptionEn: 'who contributes to the harmony between East and West',
    descriptionKo: '동서양의 조화에 기여하는',
  },
  {
    titleEn: 'A future trailblazer',
    titleKo: '미래 개척자',
    descriptionEn: 'who builds a more sustainable society',
    descriptionKo: '더 지속 가능한 사회를 구축하는',
  },
  {
    titleEn: 'A self-driven innovator',
    titleKo: '자기주도적 혁신가',
    descriptionEn: 'who leads the era of lifelong learning in the 21st century',
    descriptionKo: '21세기 평생학습 시대를 이끄는',
  },
]

export function EducationalPurposes({ locale }: EducationalPurposesProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="relative w-full">
      <div
        className="mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        {/* Section Title */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-tight tracking-[-2px] md:tracking-[-3.2px] text-black mb-8">
            {locale === 'ko' ? '우리의 교육 목적' : 'Our educational purposes'}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Description Text */}
          <div className="max-w-[685px]">
            <p className="text-[18px] md:text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-black">
              {locale === 'ko'
                ? '우리는 교육이 목적을 가지고 성장할 수 있도록, 빠르게 변화하는 세계의 도전을 만나고, 중요한 미래를 형성할 수 있도록 힘을 실어주어야 한다고 믿습니다. 우리 사명의 중심에는 당신의 비전, 창의성, 책임감을 양성하여 문화와 세대를 넘어 지속적인 영향을 남길 수 있도록 하는 헌신이 있습니다:'
                : 'We believe that education should empower you to grow with purpose, meet the challenges of a rapidly changing world, and shape a future that matters. At the heart of our mission is a commitment to nurturing your vision, creativity, and sense of responsibility—so you may leave a lasting impact across cultures and generations, becoming:'}
            </p>
          </div>

          {/* Purpose List */}
          <div className="space-y-8 md:space-y-10">
            {purposes.map((purpose, index) => (
              <div key={index} className="flex gap-4 md:gap-6">
                {/* Bullet Icon */}
                <div className="flex-shrink-0 w-[72px] h-[72px] relative">
                  <Image
                    src="/assets/bullet-icon.svg"
                    alt=""
                    width={72}
                    height={72}
                    className="w-full h-full"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-[28px] md:text-[32px] lg:text-[37px] font-medium leading-[1.3] tracking-[-1.11px] text-black mb-2">
                    {locale === 'ko' ? purpose.titleKo : purpose.titleEn}
                  </h3>
                  <p className="text-[14px] md:text-[16px] font-normal leading-[1.3] tracking-[-0.48px] text-gray-600">
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
