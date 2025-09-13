'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'

interface FutureConvergenceProps {
  locale: Locale
}

const convergencePrograms = [
  {
    schoolEn: 'Technology & Innovation',
    schoolKo: '기술과 혁신',
    programs: [
      { en: 'AI & Data Science', ko: 'AI 및 데이터 사이언스' },
      { en: 'Robotics & Automation', ko: '로보틱스 및 자동화' },
      { en: 'Blockchain & FinTech', ko: '블록체인 및 핀테크' },
      { en: 'Quantum Computing', ko: '양자 컴퓨팅' },
      { en: 'Cybersecurity & Privacy', ko: '사이버보안 및 프라이버시' },
    ],
  },
  {
    schoolEn: 'Sustainable Futures',
    schoolKo: '지속가능한 미래',
    programs: [
      { en: 'Climate Science & Policy', ko: '기후과학 및 정책' },
      { en: 'Renewable Energy Systems', ko: '재생에너지 시스템' },
      { en: 'Urban Planning & Smart Cities', ko: '도시계획 및 스마트시티' },
      { en: 'Circular Economy', ko: '순환경제' },
      { en: 'Environmental Biotechnology', ko: '환경 생명공학' },
    ],
  },
  {
    schoolEn: 'Human-Centered Design',
    schoolKo: '인간 중심 디자인',
    programs: [
      { en: 'UX/UI & Service Design', ko: 'UX/UI 및 서비스 디자인' },
      { en: 'Social Innovation Design', ko: '사회혁신 디자인' },
      { en: 'Digital Media Arts', ko: '디지털 미디어 아트' },
      { en: 'Game Design & Development', ko: '게임 디자인 및 개발' },
      { en: 'Fashion Technology', ko: '패션 테크놀로지' },
    ],
  },
  {
    schoolEn: 'Health & Wellness',
    schoolKo: '건강과 웰빙',
    programs: [
      { en: 'Digital Health & Telemedicine', ko: '디지털 헬스 및 원격의료' },
      { en: 'Bioinformatics', ko: '생물정보학' },
      { en: 'Neuroscience & Cognition', ko: '신경과학 및 인지' },
      { en: 'Public Health Innovation', ko: '공중보건 혁신' },
      { en: 'Sports Science & Technology', ko: '스포츠 과학 및 기술' },
    ],
  },
  {
    schoolEn: 'Business & Society',
    schoolKo: '비즈니스와 사회',
    programs: [
      { en: 'Social Entrepreneurship', ko: '사회적 기업가정신' },
      { en: 'Global Business Strategy', ko: '글로벌 비즈니스 전략' },
      { en: 'Digital Marketing & Analytics', ko: '디지털 마케팅 및 분석' },
      { en: 'Impact Investment', ko: '임팩트 투자' },
      { en: 'Platform Economy', ko: '플랫폼 경제' },
    ],
  },
  {
    schoolEn: 'Arts & Humanities',
    schoolKo: '예술과 인문학',
    programs: [
      { en: 'Digital Humanities', ko: '디지털 인문학' },
      { en: 'Cultural Studies & Media', ko: '문화연구 및 미디어' },
      { en: 'Creative Writing & Publishing', ko: '창의적 글쓰기 및 출판' },
      { en: 'Philosophy of Technology', ko: '기술 철학' },
      { en: 'Contemporary Art Practice', ko: '현대 예술 실습' },
    ],
  },
]

export function FutureConvergence({ locale }: FutureConvergenceProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24">
      <div className="mx-auto px-4 md:px-6 lg:px-8" style={{ maxWidth: MAX_CONTENT_WIDTH }}>
        <div className="mb-12">
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-medium leading-tight tracking-[-1.8px] md:tracking-[-2.8px] text-black mb-4">
            {locale === 'ko' ? '미래 융합 연구 학교' : 'School of Future Convergence Studies'}
          </h2>
          <p className="text-[18px] md:text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-gray-700 w-full">
            {locale === 'ko'
              ? '학문의 경계를 넘어서는 융합 프로그램으로 미래 사회가 필요로 하는 창의적 인재를 양성합니다.'
              : 'Cultivating creative talents for future society through convergence programs that transcend disciplinary boundaries.'}
          </p>
        </div>

        <div className="space-y-8">
          {convergencePrograms.map((school, index) => (
            <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
              <h3 className="text-[24px] font-medium tracking-[-0.72px] text-black mb-4">
                {locale === 'ko' ? school.schoolKo : school.schoolEn}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {school.programs.map((program, programIndex) => (
                  <div key={programIndex} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[16px] font-normal tracking-[-0.48px] text-gray-700">
                      {locale === 'ko' ? program.ko : program.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-purple-50 rounded-3xl">
          <h3 className="text-[20px] font-medium tracking-[-0.6px] text-purple-800 mb-4">
            {locale === 'ko' ? '자신만의 융합 전공 설계' : 'Design Your Own Convergence Major'}
          </h3>
          <p className="text-[16px] font-normal tracking-[-0.48px] text-gray-700 leading-[1.5] mb-6">
            {locale === 'ko' ? (
              <>
                태제대학교의 독특한 특징 중 하나는 학생들이 자신만의 융합 전공을 설계할 수 있다는
                것입니다. 두 개 이상의 분야를 결합하여 당신만의 독특한 학문적 경로를 만들어보세요.
              </>
            ) : (
              <>
                One of Taejae University&apos;s unique features is that students can design their
                own convergence major. Combine two or more fields to create your own unique academic
                path.
              </>
            )}
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white rounded-full text-[14px] font-medium text-purple-600">
              {locale === 'ko' ? 'AI + 예술' : 'AI + Arts'}
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-[14px] font-medium text-purple-600">
              {locale === 'ko' ? '비즈니스 + 지속가능성' : 'Business + Sustainability'}
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-[14px] font-medium text-purple-600">
              {locale === 'ko' ? '건강 + 디자인' : 'Health + Design'}
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-[14px] font-medium text-purple-600">
              {locale === 'ko' ? '기술 + 인문학' : 'Technology + Humanities'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
