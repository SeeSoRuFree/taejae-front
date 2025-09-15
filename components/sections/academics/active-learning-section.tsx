'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { LearningStepCard } from '@/components/ui/learning-step-card'
import PlayButton from '@/components/ui/play-button'

interface ActiveLearningSectionProps {
  locale: Locale
}

export function ActiveLearningSection({ locale }: ActiveLearningSectionProps) {
  const { t } = useTranslation(locale)

  const handleVideoPlay = () => {
    console.log('Active Learning video play clicked')
  }

  const steps = t('academics.howLearn.activeLearning.steps') as Array<{
    id: string
    title: string
    description: string[]
  }>

  const learningProcess = t('academics.howLearn.activeLearning.learningProcess') as Array<{
    id: string
    title: string
    subtitle: string
  }>

  const introduction = t('academics.howLearn.activeLearning.introduction') as string[]

  return (
    <section className="py-[100px] px-[50px] max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-[100px]">
        {/* Title Section */}
        <div className="flex justify-start">
          <div className="max-w-[960px]">
            <h2 className="font-eb-garamond text-[64px] leading-[1.1] tracking-[-1.28px] text-black mobile:text-[44px] mobile:tracking-[-0.88px]">
              <span className="text-black">
                {t('academics.howLearn.activeLearning.titlePrefix')}
              </span>
              <span className="text-[#1da597]">
                {` ${t('academics.howLearn.activeLearning.titleHighlight')}`}
              </span>
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex gap-[100px] mobile:flex-col mobile:gap-[60px]">
          {/* Left Content */}
          <div className="flex-1 max-w-[960px]">
            {/* Introduction */}
            <div className="flex flex-col gap-[44px]">
              {introduction.map((text, index) => (
                <p
                  key={index}
                  className="font-rethink-sans text-[20px] leading-[1.5] tracking-[-0.6px] text-[#111111] mobile:text-[18px] mobile:tracking-[-0.54px]"
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Learning Steps */}
            <div className="flex flex-col gap-[44px] mt-[44px]">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col gap-4 max-w-[685px]">
                  <h3 className="font-eb-garamond text-[44px] leading-[1.1] tracking-[-0.88px] text-[#111111] mobile:text-[32px] mobile:tracking-[-0.64px]">
                    {step.title}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {step.description.map((desc, index) => (
                      <p
                        key={index}
                        className="font-rethink-sans text-[16px] leading-[1.5] tracking-[-0.48px] text-[#111111]"
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-[461px] shrink-0 mobile:w-full">
            <div className="flex flex-col gap-[56px]">
              {/* Learning Process Cards */}
              <div className="flex flex-col gap-6">
                {learningProcess.map((process) => (
                  <LearningStepCard
                    key={process.id}
                    title={process.title}
                    subtitle={process.subtitle}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Video Player - Full Width */}
        <div className="relative w-full aspect-[1400/788] bg-[#545454] rounded-[24px] mobile:aspect-video">
          <PlayButton
            onClick={handleVideoPlay}
            aria-label="액티브 러닝 비디오 재생"
          />
        </div>
      </div>
    </section>
  )
}