'use client'

import Image from 'next/image'
import { useLocaleStore } from '@/lib/store/locale-store'
import { useTranslation } from '@/lib/translations'
import { ASSETS } from '@/lib/constants/assets'

export default function AboutTaejaeHero() {
  const locale = useLocaleStore((state) => state.locale)
  const { t } = useTranslation(locale)

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[50px] py-[100px] mobile:px-6 mobile:py-16">
        <div className="flex flex-col gap-16 items-start justify-start relative w-full">
          {/* Title Section */}
          <div className="flex items-start justify-start py-2.5 relative w-full">
            <div className="flex flex-col gap-5 items-start justify-start max-w-[720px] relative">
              <h1 className="font-eb-garamond font-normal text-black text-[64px] leading-[1.1] tracking-[-1.28px] w-full mobile:text-4xl">
                <span>{t('about.title.prefix')}</span>
                <span className="text-[#1da597]">{t('about.title.highlight')}</span>
              </h1>
            </div>
          </div>

          {/* Description and Logo Section */}
          <div className="flex flex-col gap-6 items-start justify-start relative w-full">
            {/* Main Description */}
            <div className="flex gap-10 items-start justify-start py-2.5 relative w-full">
              <div className="flex flex-col gap-11 grow items-start justify-start max-w-[960px] relative">
            <div className="font-rethink-sans font-normal leading-[1.5] relative shrink-0 text-[#111111] text-[20px] md:text-[18px] sm:text-[16px] tracking-[-0.6px] w-full">
              <p className="mb-4">
                {t('about.description.paragraph1')}
              </p>
              <p className="mb-4">
                {t('about.description.paragraph2')}
              </p>
              <p className="mb-4">
                {t('about.description.paragraph3')}
              </p>
              <p className="mb-4">
                {t('about.description.paragraph4')}
              </p>
              <p className="mb-4">
                {t('about.description.paragraph5')}
              </p>
              <p className="mb-4">
                {t('about.description.paragraph6')}
              </p>
              <p className="mb-6">
                {t('about.description.paragraph7')}
              </p>
              <p className="font-medium">
                {t('about.description.tagline')}
              </p>
            </div>
          </div>
        </div>

            {/* Logo and Tagline Section */}
            <div className="flex gap-6 items-center justify-start relative">
              <div className="shrink-0 size-[58px] relative">
                <Image
                  src={ASSETS.ABOUT_TAEJAE.TJ_LOGO}
                  alt={t('about.logo.alt')}
                  width={58}
                  height={58}
                  className="object-cover"
                />
              </div>
              <div className="font-eb-garamond font-semibold leading-[41px] relative shrink-0 text-[34px] mobile:text-[28px] text-black tracking-[-0.25px]">
                <span>{t('about.tagline.the')}</span>
                <span className="text-[#1da597]">{t('about.tagline.next')}</span>
                <span>{t('about.tagline.answer')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
