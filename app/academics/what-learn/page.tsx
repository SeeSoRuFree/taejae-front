'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { PageLayout } from '@/components/layout/page-layout'
import { useTranslation } from '@/lib/translations'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'
import { Locale } from '@/lib/types/locale'
import Image from 'next/image'

function HeroSection({ locale }: { locale: Locale }) {
  const { t } = useTranslation(locale)

  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto px-4 md:px-6 lg:px-8" style={{ maxWidth: MAX_CONTENT_WIDTH }}>
        <div className="max-w-[720px]">
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-tight tracking-[-2px] md:tracking-[-3.2px] text-black mb-12">
            {t('academics.whatLearn.hero.title')}
          </h1>
        </div>

        <div className="max-w-[840px]">
          <div className="text-[18px] md:text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-black space-y-5">
            <p>{t('academics.whatLearn.hero.description1')}</p>
            <p>{t('academics.whatLearn.hero.description2')}</p>
            <p>{t('academics.whatLearn.hero.description3')}</p>
            <p>{t('academics.whatLearn.hero.description4')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CompetenciesDiagram({ locale }: { locale: Locale }) {
  const { t } = useTranslation(locale)

  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto px-4 md:px-6 lg:px-8" style={{ maxWidth: MAX_CONTENT_WIDTH }}>
        <div className="max-w-[720px] mb-12">
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-tight tracking-[-2px] md:tracking-[-3.2px] text-black">
            {t('academics.whatLearn.competencies.title')}
          </h2>
        </div>

        <div className="flex justify-center mb-16">
          <div className="relative w-[707px] h-[707px]">
            {/* Hexagon diagram container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[596px] h-[596px]">
                {/* Background ellipse */}
                <Image
                  src="/assets/ellipse-shape.svg"
                  alt=""
                  width={596}
                  height={596}
                  className="absolute inset-0"
                />
                {/* Mask overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/assets/mask-shape.png"
                    alt=""
                    width={615}
                    height={615}
                    className="relative"
                  />
                </div>
                {/* Color overlay with mask */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    maskImage: 'url(/assets/update-color.png)',
                    maskSize: '615px 615px',
                    maskPosition: 'center',
                    maskRepeat: 'no-repeat',
                  }}
                >
                  <div className="w-[540px] h-[540px] rounded-full bg-[#B69FFF] mix-blend-overlay"></div>
                </div>
              </div>
            </div>

            {/* Competency labels positioned around the hexagon */}
            <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2">
              <div className="text-center text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black whitespace-nowrap">
                {t('academics.whatLearn.competencies.criticalThinking.title')}
              </div>
            </div>

            <div className="absolute top-[150px] right-[80px]">
              <div className="text-center text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black whitespace-nowrap">
                {t('academics.whatLearn.competencies.creativeThinking.title')}
              </div>
            </div>

            <div className="absolute bottom-[150px] right-[80px]">
              <div className="text-center text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black whitespace-nowrap">
                {locale === 'ko' ? (
                  t('academics.whatLearn.competencies.communicationCollaboration.title')
                ) : (
                  <>
                    Communication
                    <br />& Collaboration
                  </>
                )}
              </div>
            </div>

            <div className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2">
              <div className="text-center text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black whitespace-nowrap">
                {t('academics.whatLearn.competencies.diversityEmpathy.title')}
              </div>
            </div>

            <div className="absolute bottom-[150px] left-[80px]">
              <div className="text-center text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black whitespace-nowrap">
                {t('academics.whatLearn.competencies.selfDirectedLearning.title')}
              </div>
            </div>

            <div className="absolute top-[150px] left-[60px]">
              <div className="text-center text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black whitespace-nowrap">
                {locale === 'ko' ? (
                  <>
                    글로벌 조화와
                    <br />
                    지속가능성
                  </>
                ) : (
                  <>
                    Global Harmony
                    <br />& Sustainability
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Competency details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1380px]">
          <div className="space-y-2">
            <h3 className="text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black">
              {t('academics.whatLearn.competencies.criticalThinking.title')}
            </h3>
            <p className="text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-black">
              {t('academics.whatLearn.competencies.criticalThinking.description')}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black">
              {t('academics.whatLearn.competencies.creativeThinking.title')}
            </h3>
            <p className="text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-black">
              {t('academics.whatLearn.competencies.creativeThinking.description')}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black">
              {t('academics.whatLearn.competencies.selfDirectedLearning.title')}
            </h3>
            <p className="text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-black">
              {t('academics.whatLearn.competencies.selfDirectedLearning.description')}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black">
              {t('academics.whatLearn.competencies.communicationCollaboration.title')}
            </h3>
            <p className="text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-black">
              {t('academics.whatLearn.competencies.communicationCollaboration.description')}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black">
              {t('academics.whatLearn.competencies.diversityEmpathy.title')}
            </h3>
            <p className="text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-black">
              {t('academics.whatLearn.competencies.diversityEmpathy.description')}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black">
              {t('academics.whatLearn.competencies.globalHarmony.title')}
            </h3>
            <p className="text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-black">
              {t('academics.whatLearn.competencies.globalHarmony.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function InterdisciplinarySection({ locale }: { locale: Locale }) {
  const { t } = useTranslation(locale)

  return (
    <>
      <div className="w-full">
        <Image
          src="/assets/divider-what-learn.svg"
          alt=""
          width={1920}
          height={1}
          className="w-full h-auto"
        />
      </div>

      <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto px-4 md:px-6 lg:px-8" style={{ maxWidth: MAX_CONTENT_WIDTH }}>
          <div className="mb-16">
            <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-tight tracking-[-2px] md:tracking-[-3.2px] text-black max-w-[1040px]">
              {t('academics.whatLearn.interdisciplinary.title')}
            </h2>
          </div>

          <div className="mb-12">
            <h3 className="text-[37px] font-medium leading-[1.3] tracking-[-1.11px] text-black max-w-[840px]">
              {t('academics.whatLearn.interdisciplinary.subtitle')}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Video placeholders - these would be actual embedded videos */}
            <div className="aspect-[3/2] bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-6 border-r-0 border-t-4 border-b-4 border-l-white border-t-transparent border-b-transparent ml-1"></div>
              </div>
            </div>

            <div className="aspect-[3/2] bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-6 border-r-0 border-t-4 border-b-4 border-l-white border-t-transparent border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default function WhatLearnPage() {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <PageLayout className="min-h-screen bg-white">
      <HeroSection locale={locale} />
      <CompetenciesDiagram locale={locale} />
      <InterdisciplinarySection locale={locale} />
    </PageLayout>
  )
}
