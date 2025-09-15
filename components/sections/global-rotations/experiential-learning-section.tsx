'use client'

import Image from 'next/image'
import { useTranslation } from '@/lib/translations'

interface ExperientialLearningSectionProps {
  locale: string
}

interface Professor {
  id: string
  name: string
  degree: string
  field: string
  university: string
  imageUrl: string
  imageAlt: string
}

export function ExperientialLearningSection({ locale }: ExperientialLearningSectionProps) {
  const { t } = useTranslation(locale)

  const professors: Professor[] = [
    {
      id: 'youngdae-kim',
      name: 'Youngdae Kim',
      degree: 'Ph D.',
      field: 'Public Administration',
      university: 'Korea University',
      imageUrl: '/assets/professor-portrait.png',
      imageAlt: 'Portrait of Youngdae Kim'
    },
    {
      id: 'sungshik-yoon',
      name: 'Sungshik Yoon',
      degree: 'Ph D.',
      field: 'Policy of Science and Technology',
      university: 'Korea University',
      imageUrl: '/assets/professor-portrait.png',
      imageAlt: 'Portrait of Sungshik Yoon'
    },
    {
      id: 'jisoo-hyun',
      name: 'Jisoo Hyun',
      degree: 'Ph D.',
      field: 'Education',
      university: 'University of Washington',
      imageUrl: '/assets/professor-portrait.png',
      imageAlt: 'Portrait of Jisoo Hyun'
    }
  ]

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[50px] py-[100px] mobile:px-6 mobile:py-16">
        <div className="flex flex-col gap-16 items-start justify-start relative w-full">
          
          {/* Title Section */}
          <div className="flex items-start justify-start py-2.5 relative w-full">
            <div className="flex flex-col items-start justify-between h-[88px] max-w-[720px] relative">
              <h1 className="font-eb-garamond font-normal text-[64px] text-[#111111] leading-[1.1] tracking-[-1.28px] mobile:text-4xl">
                <span>Experiential </span>
                <span className="text-[#1da597]">Learning</span>
              </h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex items-start justify-start relative w-full mobile:flex-col mobile:gap-8">
            
            {/* Left: Professors Title */}
            <div className="flex-grow flex items-start justify-start py-2.5 relative">
              <div className="flex flex-col gap-11 items-start justify-start max-w-[720px] relative mobile:max-w-none">
                <h2 className="font-eb-garamond font-normal text-[44px] text-[#111111] leading-[1.1] tracking-[-0.88px] max-w-[720px] w-full mobile:text-3xl">
                  Professors
                </h2>
              </div>
            </div>

            {/* Right: Professor Cards */}
            <div className="flex flex-col gap-[60px] items-start justify-start relative mobile:gap-8 flex-shrink-0">
              
              {/* First Row - Two Professors */}
              <div className="flex gap-5 items-center justify-start relative mobile:flex-col mobile:gap-8">
                
                {/* Youngdae Kim */}
                <div className="flex flex-col items-start justify-start relative">
                  <div className="relative w-[340px] h-[336px] bg-center bg-cover bg-no-repeat mobile:w-[280px] mobile:h-[276px]">
                    <Image
                      src={professors[0].imageUrl}
                      alt={professors[0].imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 280px, 340px"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start pt-5 pb-4 px-0 relative w-60 mobile:w-full">
                    <div className="flex flex-col gap-1 items-start justify-start relative w-full">
                      <div className="font-rethink-sans font-normal text-[20px] text-[#111111] tracking-[-0.6px] leading-[1.5] w-full mobile:text-lg">
                        {professors[0].name}
                      </div>
                      <div className="font-rethink-sans font-normal text-[16px] text-[#5b5b5b] tracking-[-0.48px] leading-[1.5] w-full">
                        {professors[0].degree}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start text-[#111111] text-[16px] tracking-[-0.48px] leading-[1.5] w-full">
                      <div className="font-rethink-sans font-normal min-w-full relative">
                        {professors[0].field}
                      </div>
                      <div className="font-rethink-sans font-normal relative text-nowrap">
                        {professors[0].university}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sungshik Yoon */}
                <div className="flex flex-col items-start justify-start relative">
                  <div className="relative w-[340px] h-[336px] bg-center bg-cover bg-no-repeat mobile:w-[280px] mobile:h-[276px]">
                    <Image
                      src={professors[1].imageUrl}
                      alt={professors[1].imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 280px, 340px"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start pt-5 pb-4 px-0 relative w-60 mobile:w-full">
                    <div className="flex flex-col gap-1 items-start justify-start relative w-full">
                      <div className="font-rethink-sans font-normal text-[20px] text-[#111111] tracking-[-0.6px] leading-[1.5] w-full mobile:text-lg">
                        {professors[1].name}
                      </div>
                      <div className="font-rethink-sans font-normal text-[16px] text-[#5b5b5b] tracking-[-0.48px] leading-[1.5] w-full">
                        {professors[1].degree}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start text-[#111111] text-[16px] tracking-[-0.48px] leading-[1.5] w-full">
                      <div className="font-rethink-sans font-normal min-w-full relative">
                        {professors[1].field}
                      </div>
                      <div className="font-rethink-sans font-normal relative text-nowrap">
                        {professors[1].university}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Divider */}
              <div className="h-0 relative w-full">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <Image
                    src="/assets/divider-line-long.svg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Jisoo Hyun */}
              <div className="flex flex-col items-start justify-start relative">
                <div className="relative w-[340px] h-[336px] bg-center bg-cover bg-no-repeat mobile:w-[280px] mobile:h-[276px]">
                  <Image
                    src={professors[2].imageUrl}
                    alt={professors[2].imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 340px"
                  />
                </div>
                <div className="flex flex-col gap-[30px] items-start justify-start py-4 px-0 relative w-60 mobile:w-full">
                  <div className="flex flex-col gap-1 items-start justify-start relative w-full">
                    <div className="font-rethink-sans font-normal text-[20px] text-[#111111] tracking-[-0.6px] leading-[1.5] w-full mobile:text-lg">
                      {professors[2].name}
                    </div>
                    <div className="font-rethink-sans font-normal text-[16px] text-[#5b5b5b] tracking-[-0.48px] leading-[1.5] w-full">
                      {professors[2].degree}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start text-[#111111] text-[16px] tracking-[-0.48px] leading-[1.5] w-full">
                    <div className="font-rethink-sans font-normal min-w-full relative">
                      {professors[2].field}
                    </div>
                    <div className="font-rethink-sans font-normal relative text-nowrap">
                      {professors[2].university}
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Divider */}
              <div className="h-0 relative w-full">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <Image
                    src="/assets/divider-line-long.svg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}