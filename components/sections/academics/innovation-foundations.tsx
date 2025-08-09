'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'

interface InnovationFoundationsProps {
  locale: Locale
}

const foundationCourses = [
  {
    categoryEn: 'Communication & Language',
    categoryKo: '커뮤니케이션 & 언어',
    courses: [
      { en: 'Academic Writing & Research', ko: '학술 작문 및 연구' },
      { en: 'Global English Communication', ko: '글로벌 영어 커뮤니케이션' },
      { en: 'Digital Storytelling', ko: '디지털 스토리텔링' },
      { en: 'Cross-cultural Communication', ko: '다문화 커뮤니케이션' },
    ],
  },
  {
    categoryEn: 'Analytical Thinking',
    categoryKo: '분석적 사고',
    courses: [
      { en: 'Data Analysis & Statistics', ko: '데이터 분석 및 통계' },
      { en: 'Logic & Critical Reasoning', ko: '논리 및 비판적 추론' },
      { en: 'Systems Thinking', ko: '시스템 사고' },
      { en: 'Research Methodology', ko: '연구 방법론' },
    ],
  },
  {
    categoryEn: 'Digital Foundations',
    categoryKo: '디지털 기초',
    courses: [
      { en: 'Introduction to AI & Machine Learning', ko: 'AI 및 머신러닝 입문' },
      { en: 'Computational Thinking', ko: '컴퓨팅 사고' },
      { en: 'Digital Ethics & Society', ko: '디지털 윤리와 사회' },
      { en: 'Web Technologies & Platforms', ko: '웹 기술과 플랫폼' },
    ],
  },
  {
    categoryEn: 'Innovation & Creativity',
    categoryKo: '혁신과 창의성',
    courses: [
      { en: 'Design Thinking Workshop', ko: '디자인 사고 워크숍' },
      { en: 'Entrepreneurship Fundamentals', ko: '기업가정신 기초' },
      { en: 'Creative Problem Solving', ko: '창의적 문제 해결' },
      { en: 'Innovation Lab', ko: '혁신 실험실' },
    ],
  },
]

export function InnovationFoundations({ locale }: InnovationFoundationsProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="mx-auto px-4 md:px-6 lg:px-8" style={{ maxWidth: MAX_CONTENT_WIDTH }}>
        <div className="mb-12">
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-medium leading-tight tracking-[-1.8px] md:tracking-[-2.8px] text-black mb-4">
            {locale === 'ko' ? '혁신 기초 학교' : 'School of Innovation Foundations'}
          </h2>
          <p className="text-[18px] md:text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-gray-700 max-w-[800px]">
            {locale === 'ko'
              ? '모든 학생들이 미래를 준비할 수 있도록 필수적인 기초 역량을 구축하는 핵심 교육과정입니다.'
              : 'Core curriculum that builds essential foundational competencies to prepare all students for the future.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {foundationCourses.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8">
              <h3 className="text-[22px] font-medium tracking-[-0.66px] text-purple-600 mb-6">
                {locale === 'ko' ? category.categoryKo : category.categoryEn}
              </h3>
              <ul className="space-y-3">
                {category.courses.map((course, courseIndex) => (
                  <li key={courseIndex} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-[16px] font-normal tracking-[-0.48px] text-gray-700 leading-[1.5]">
                      {locale === 'ko' ? course.ko : course.en}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[16px] font-normal tracking-[-0.48px] text-gray-600 leading-[1.5]">
            {locale === 'ko'
              ? '* 모든 Foundation 과정은 온라인과 오프라인 하이브리드 형태로 제공됩니다.'
              : '* All Foundation courses are offered in hybrid online-offline format.'}
          </p>
        </div>
      </div>
    </section>
  )
}
