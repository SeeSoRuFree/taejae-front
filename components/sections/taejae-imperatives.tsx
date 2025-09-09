'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'

interface ImperativesProps {
  locale: Locale
}

export function TaejaeImperatives({ locale }: ImperativesProps) {
  const { t } = useTranslation(locale)

  const imperativesData = [
    {
      number: '1',
      title: 'TAEJAE',
      description: "Where Boundless Learning Begins - Korea's First Hybrid University",
    },
    {
      number: '3',
      title: 'TALENTS',
      description: ['Think differently', 'Feel passionately', 'Change the world'],
    },
    {
      number: '7',
      title: 'CAMPUSES',
      description: ['Travel', 'Learn', 'Grow', 'Across Seven Campuses Around the World'],
    },
    {
      number: '100',
      title: 'ACHIEVEMENTS',
      description: [
        'Discover who you are',
        'Dare to dream',
        'Claim your future',
        'Unleash your full potential.',
      ],
      isFixed: true,
    },
    {
      number: '∞',
      title: 'EDUCATION',
      description: ['Design your own academic paths', 'Unlock infinite possibilities!'],
    },
  ]

  return (
    <section className="flex flex-col gap-14 items-center justify-start px-12 py-24 w-full max-w-[1440px] mx-auto">
      {/* Title */}
      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
        <h1 className="font-eb-garamond font-normal text-[44px] leading-[1.2] tracking-[-1.32px] text-[#111111] w-full">
          <span>Taejae </span>
          <span className="text-[#1da597]">Imperatives</span>
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="flex gap-8 items-center justify-start w-full">
        {imperativesData.map((item, index) => (
          <div
            key={index}
            className={`
              group flex flex-col justify-between items-end h-[459px] p-[24px] rounded-[24px] relative cursor-pointer
              transition-colors duration-300 hover:bg-[#f2f2f2]
              ${item.isFixed ? 'w-[287px]' : 'basis-0 grow min-w-0'}
            `}
          >
            {/* Content */}
            <div className="flex flex-col gap-10 items-start justify-start w-full overflow-hidden">
              {/* Number */}
              <div className="font-playfair text-[80px] leading-[1.1] tracking-[-1.6px] text-[#111111] whitespace-nowrap">
                {item.number}
              </div>

              {/* Text Content */}
              <div className="w-full relative">
                <div className="flex flex-col gap-8 items-start justify-start pt-4 w-full">
                  {/* Title */}
                  <div className="font-eb-garamond font-medium text-[29px] leading-[1.3] tracking-[-0.58px] text-[#111111] w-full">
                    {item.title}
                  </div>

                  {/* Description */}
                  <div className="font-inter font-normal text-[16px] leading-[1.5] tracking-[-0.48px] text-[#111111] w-full">
                    {Array.isArray(item.description) ? (
                      item.description.map((line, lineIndex) => (
                        <p
                          key={lineIndex}
                          className={lineIndex < item.description.length - 1 ? 'mb-0' : ''}
                        >
                          {line}
                        </p>
                      ))
                    ) : (
                      <p>{item.description}</p>
                    )}
                  </div>
                </div>

                {/* Border top */}
                <div className="absolute top-0 left-0 right-0 border-t border-[#111111]" />
              </div>
            </div>

            {/* Learn More Button (appears on hover) */}
            <div className="bg-[#111111] rounded-[50px] relative opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col items-center justify-center px-[22px] py-2.5">
                <div className="font-inter font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-white whitespace-nowrap">
                  Learn more
                </div>
              </div>
              <div className="absolute inset-[-0.5px] border border-[#111111] rounded-[50.5px] pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
