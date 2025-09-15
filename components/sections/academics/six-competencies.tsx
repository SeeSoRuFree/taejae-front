'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import Image from 'next/image'

interface SixCompetenciesProps {
  locale: Locale
}

interface Competency {
  id: string
  title: string
  description: string
}

export function SixCompetencies({ locale }: SixCompetenciesProps) {
  const { t } = useTranslation(locale)

  const competencies: Competency[] = [
    {
      id: 'criticalThinking',
      title: t('academics.whatLearn.competencies.criticalThinking.title'),
      description: t('academics.whatLearn.competencies.criticalThinking.description'),
    },
    {
      id: 'creativeThinking',
      title: t('academics.whatLearn.competencies.creativeThinking.title'),
      description: t('academics.whatLearn.competencies.creativeThinking.description'),
    },
    {
      id: 'selfDirectedLearning',
      title: t('academics.whatLearn.competencies.selfDirectedLearning.title'),
      description: t('academics.whatLearn.competencies.selfDirectedLearning.description'),
    },
    {
      id: 'globalHarmony',
      title: t('academics.whatLearn.competencies.globalHarmony.title'),
      description: t('academics.whatLearn.competencies.globalHarmony.description'),
    },
    {
      id: 'communicationCollaboration',
      title: t('academics.whatLearn.competencies.communicationCollaboration.title'),
      description: t('academics.whatLearn.competencies.communicationCollaboration.description'),
    },
    {
      id: 'diversityEmpathy',
      title: t('academics.whatLearn.competencies.diversityEmpathy.title'),
      description: t('academics.whatLearn.competencies.diversityEmpathy.description'),
    },
  ]

  const firstRow = competencies.slice(0, 3)
  const secondRow = competencies.slice(3, 6)

  return (
    <section className="w-full relative">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/assets/academics/our-team-section-bg.png')`,
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* White Overlay */}
      <div className="absolute inset-0 bg-white opacity-90" />

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-[1440px] mx-auto px-[50px] py-[100px] mobile:px-6 mobile:py-16">
          <div className="flex flex-col gap-[100px] items-center justify-start relative w-full mobile:gap-16">
            {/* Title */}
            <div className="flex items-start justify-start px-0 py-2.5 relative w-full">
              <div className="flex flex-col gap-11 items-start justify-start max-w-[720px] relative w-full">
                <h2 className="font-eb-garamond font-normal text-[64px] text-[#111111] leading-[1.1] tracking-[-1.28px] w-full mobile:text-4xl">
                  {t('academics.whatLearn.competencies.title').split(' ').slice(0, 2).join(' ')}{' '}
                  <br className="mobile:hidden" />
                  <span className="text-[#1da597]">
                    {t('academics.whatLearn.competencies.title').split(' ').slice(2).join(' ')}
                  </span>
                </h2>
              </div>
            </div>

            {/* Diagram Section */}
            <div
              className="bg-center bg-cover bg-no-repeat h-[566px] w-[777px] shrink-0"
              style={{
                backgroundImage: `url('/assets/academics/competencies-diagram.png')`,
              }}
            />

            {/* First Row Cards */}
            <div className="flex gap-12 items-start justify-start max-w-[1920px] relative w-full mobile:flex-col mobile:gap-8">
              {firstRow.map((competency) => (
                <div
                  key={competency.id}
                  className="flex-1 basis-0 box-border flex flex-col gap-6 items-start justify-start max-w-[840px] relative pt-6"
                >
                  <div className="absolute border-t border-black border-solid inset-0 pointer-events-none" />
                  <div className="font-eb-garamond font-medium text-[32px] text-[#111111] leading-[1.3] tracking-[-0.64px] max-w-[685px] relative w-full">
                    {competency.title}
                  </div>
                  <div className="font-rethink-sans font-normal leading-[1.5] text-[#111111] text-[16px] tracking-[-0.48px] max-w-[685px] relative w-full">
                    {competency.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row Cards */}
            <div className="flex gap-12 items-start justify-start max-w-[1920px] relative w-full mobile:flex-col mobile:gap-8">
              {secondRow.map((competency) => (
                <div
                  key={competency.id}
                  className="flex-1 basis-0 box-border flex flex-col gap-6 items-start justify-start max-w-[840px] relative pt-6"
                >
                  <div className="absolute border-t border-black border-solid inset-0 pointer-events-none" />
                  <div className="font-eb-garamond font-medium text-[32px] text-[#111111] leading-[1.3] tracking-[-0.64px] max-w-[685px] relative w-full">
                    {competency.title}
                  </div>
                  <div className="font-rethink-sans font-normal leading-[1.5] text-[#111111] text-[16px] tracking-[-0.48px] max-w-[685px] relative w-full">
                    {competency.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
