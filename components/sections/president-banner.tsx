'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { useState } from 'react'

const imgPresidentPhoto = "http://localhost:3845/assets/57e42af2f57d23dac165321f4a3d8b4f288cc16a.png"
const imgPlayButton = "http://localhost:3845/assets/07b92139363e82294cd356835265bf297d58bdec.svg"

interface PresidentBannerProps {
  locale: Locale
}

export function PresidentBanner({ locale }: PresidentBannerProps) {
  const { t } = useTranslation(locale)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying)
    // TODO: 비디오/오디오 재생 로직 추가
  }

  return (
    <section className="flex gap-14 items-center justify-start px-12 py-[100px] w-full max-w-[1920px] mx-auto">
      <div className="basis-0 bg-[#111111] flex grow items-center justify-between min-h-px min-w-px overflow-hidden rounded-[24px] relative">
        {/* Image Section */}
        <div className="h-[328px] relative w-[594px] shrink-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${imgPresidentPhoto}')` }}
          />
          <div className="absolute bg-gradient-to-r from-transparent to-[#111111] bottom-0 right-0 top-0 w-[200px]" />
        </div>

        {/* Content Section */}
        <div className="basis-0 flex grow items-center self-stretch">
          <div className="basis-0 flex flex-col grow h-full items-center justify-between min-h-px min-w-px px-12 py-16 relative">
            <div className="basis-0 flex flex-col grow items-center justify-between min-h-px min-w-px relative w-full">
              {/* Quote Text */}
              <div className="font-eb-garamond font-normal italic leading-[1.2] text-[38px] text-white tracking-[-0.76px] w-full">
                <blockquote className="block mb-0">
                  "Great movements often begin small,
                </blockquote>
                <blockquote className="block">
                  propelled by great minds and powerful ideas."
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <div className="font-eb-garamond font-normal text-[24px] text-white tracking-[-0.48px]">
                  <h3 className="block leading-[1.3] whitespace-nowrap">Jaeho Yeom</h3>
                </div>
                <div className="font-inter font-medium text-[#888888] text-[15px] tracking-[-0.3px]">
                  <p className="block leading-[1.5] whitespace-nowrap">President, Taejae University</p>
                </div>
              </div>
            </div>

            {/* Play Button */}
            <button
              onClick={handlePlayClick}
              className="absolute backdrop-blur-sm bg-[rgba(68,68,68,0.7)] bottom-14 flex items-center justify-center right-12 rounded-full w-14 h-14 hover:bg-[rgba(68,68,68,0.8)] transition-colors duration-200"
              aria-label="Play video"
            >
              <img alt="" className="block max-w-none w-6 h-6" src={imgPlayButton} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}