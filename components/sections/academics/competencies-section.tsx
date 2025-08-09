'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'
import Image from 'next/image'

interface CompetenciesSectionProps {
  locale: Locale
}

const competencies = [
  {
    titleEn: 'Global Communication',
    titleKo: '글로벌 커뮤니케이션',
    descriptionEn: 'Master multilingual and multicultural communication skills',
    descriptionKo: '다국어 및 다문화 커뮤니케이션 기술 마스터',
  },
  {
    titleEn: 'Critical Thinking',
    titleKo: '비판적 사고',
    descriptionEn: 'Develop analytical and problem-solving capabilities',
    descriptionKo: '분석 및 문제 해결 능력 개발',
  },
  {
    titleEn: 'Digital Literacy',
    titleKo: '디지털 리터러시',
    descriptionEn: 'Navigate and leverage emerging technologies',
    descriptionKo: '신기술 탐색 및 활용',
  },
  {
    titleEn: 'Creative Innovation',
    titleKo: '창의적 혁신',
    descriptionEn: 'Foster entrepreneurial mindset and design thinking',
    descriptionKo: '기업가 정신과 디자인 사고 육성',
  },
  {
    titleEn: 'Ethical Leadership',
    titleKo: '윤리적 리더십',
    descriptionEn: 'Build sustainable and responsible decision-making skills',
    descriptionKo: '지속 가능하고 책임감 있는 의사결정 기술 구축',
  },
  {
    titleEn: 'Adaptive Learning',
    titleKo: '적응적 학습',
    descriptionEn: 'Cultivate lifelong learning and resilience',
    descriptionKo: '평생 학습과 회복력 함양',
  },
]

export function CompetenciesSection({ locale }: CompetenciesSectionProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24">
      <div className="mx-auto px-4 md:px-6 lg:px-8" style={{ maxWidth: MAX_CONTENT_WIDTH }}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Title and Cube Image */}
          <div className="flex-shrink-0 lg:max-w-[400px]">
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-medium leading-tight tracking-[-1.8px] md:tracking-[-2.8px] text-black mb-8">
              {locale === 'ko' ? '우리의 역량은 무엇인가?' : 'What are our competencies?'}
            </h2>

            {/* Purple Cube Placeholder - will replace with actual image */}
            <div className="relative w-full max-w-[350px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl opacity-40"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-purple-300 to-purple-500 rounded-xl"></div>
            </div>
          </div>

          {/* Competencies List */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {competencies.map((comp, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="text-[20px] font-medium tracking-[-0.6px] text-black">
                    {locale === 'ko' ? comp.titleKo : comp.titleEn}
                  </h3>
                  <p className="text-[16px] font-normal tracking-[-0.48px] text-gray-600 leading-[1.35]">
                    {locale === 'ko' ? comp.descriptionKo : comp.descriptionEn}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-purple-50 rounded-2xl">
              <p className="text-[16px] font-normal tracking-[-0.48px] text-black leading-[1.5]">
                {locale === 'ko' ? (
                  <>
                    이러한 핵심 역량은 우리 커리큘럼의 모든 측면에 통합되어 있으며, 당신이 다양한
                    분야에서 적응하고 리드할 수 있는 다재다능한 전문가가 되도록 준비시킵니다.
                  </>
                ) : (
                  <>
                    These core competencies are integrated throughout every aspect of our
                    curriculum, preparing you to become a versatile professional who can adapt and
                    lead across diverse fields.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
