'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'
import Link from 'next/link'

interface CuriousSectionProps {
  locale: Locale
}

export function CuriousSection({ locale }: CuriousSectionProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="relative w-full py-20 md:py-24 lg:py-32 bg-gray-900">
      <div
        className="mx-auto px-4 md:px-6 lg:px-8 text-center"
        style={{ maxWidth: MAX_CONTENT_WIDTH }}
      >
        <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-medium leading-tight tracking-[-1.8px] md:tracking-[-2.8px] text-white mb-6">
          {locale === 'ko'
            ? '우리가 무엇을 배울지 궁금하신가요?'
            : "Curious about what we'll learn in our interdisciplinary journey to solve humanity&apos;s challenges?"}
        </h2>

        <p className="text-[18px] md:text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-gray-300 w-full mx-auto mb-12">
          {locale === 'ko'
            ? '태제대학교의 혁신적인 커리큘럼과 프로그램에 대해 더 알아보고 싶으시다면 연락해주세요.'
            : 'Get in touch to learn more about Taejae University&apos;s innovative curriculum and programs.'}
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link
            href="/academics/curriculum-guide"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-medium text-[18px] rounded-full transition-colors duration-200 min-w-[200px]"
          >
            {locale === 'ko' ? '커리큘럼 가이드 보기' : 'View Curriculum Guide'}
          </Link>

          <Link
            href="/admissions/inquiry"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-medium text-[18px] rounded-full transition-colors duration-200 min-w-[200px]"
          >
            {locale === 'ko' ? '입학 상담 신청' : 'Request Admissions Consultation'}
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-[48px] font-bold text-red-400 mb-2">50+</div>
            <p className="text-[16px] text-gray-400">
              {locale === 'ko' ? '융합 전공 프로그램' : 'Convergence Programs'}
            </p>
          </div>
          <div className="text-center">
            <div className="text-[48px] font-bold text-red-400 mb-2">200+</div>
            <p className="text-[16px] text-gray-400">
              {locale === 'ko' ? '혁신적인 과목들' : 'Innovative Courses'}
            </p>
          </div>
          <div className="text-center">
            <div className="text-[48px] font-bold text-red-400 mb-2">∞</div>
            <p className="text-[16px] text-gray-400">
              {locale === 'ko' ? '무한한 가능성' : 'Infinite Possibilities'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
