'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import PlayButton from '@/components/ui/play-button'

interface HowLearnHeroProps {
  locale: Locale
}

export function HowLearnHero({ locale }: HowLearnHeroProps) {
  const { t } = useTranslation(locale)

  const handleVideoPlay = () => {
    console.log('Video play clicked')
  }

  return (
    <section className="pt-[100px] pb-[100px] px-[50px] max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-[100px]">
        {/* Title Section */}
        <div className="flex justify-start py-2.5">
          <div className="flex flex-col gap-11 max-w-[720px]">
            <h1 className="font-eb-garamond text-[64px] leading-[1.1] tracking-[-1.28px] text-black max-w-[960px] mobile:text-[40px] mobile:tracking-[-0.8px]">
              <span className="text-black">{t('academics.howLearn.hero.titleMain')}</span>
              <span className="text-[#1da597]">{t('academics.howLearn.hero.titleAccent')}</span>
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex gap-10 py-2.5 mobile:flex-col mobile:gap-8">
          {/* Text Content */}
          <div className="flex flex-col gap-11 max-w-[960px] flex-1 mobile:max-w-none">
            <div className="font-rethink-sans text-[20px] leading-[1.5] tracking-[-0.6px] text-[#111111] mobile:text-[18px] mobile:tracking-[-0.54px]">
              <p className="mb-0">
                {t('academics.howLearn.hero.description1')}
                <br />
                {t('academics.howLearn.hero.description2')}
                <br />
                {t('academics.howLearn.hero.description3')}
                <br />
                {t('academics.howLearn.hero.description4')}
              </p>
              <p className="mt-4">{t('academics.howLearn.hero.description5')}</p>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative w-[688px] h-[387px] shrink-0 mobile:w-full mobile:h-[250px] tablet:w-[500px] tablet:h-[281px]">
            <div className="absolute inset-0 bg-[#545454] rounded-[24px]" />
            <PlayButton
              onClick={handleVideoPlay}
              aria-label={t('academics.whatLearn.voiceOfSquad.playVideo')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
