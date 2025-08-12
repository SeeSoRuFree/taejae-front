'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'
import { AdaptiveCarousel } from '@/components/ui/adaptive-carousel'

interface ImperativesProps {
  locale: Locale
}

const imgImage = '/assets/imperative-1.png'
const imgImage1 = '/assets/imperative-2.png'
const imgImage2 = '/assets/imperative-3.png'
const imgImage3 = '/assets/imperative-4.png'
const imgImage4 = '/assets/imperative-5.png'
const imgVectorStroke = '/assets/arrow-right.svg'

const imperativeImages = [imgImage, imgImage1, imgImage2, imgImage3, imgImage4]

function HeroiconsSolidArrowRight() {
  return (
    <div className="relative size-full">
      <img alt="arrow-right" className="block max-w-none size-full" src={imgVectorStroke} />
    </div>
  )
}

export function TaejaeImperatives({ locale }: ImperativesProps) {
  const { t, messages } = useTranslation(locale)
  const imperativesData = (messages as any).imperatives.items

  return (
    <section className="flex flex-col gap-12 h-full items-start justify-start pb-[100px] pt-[50px] relative w-full">
      <div className="mx-auto px-4 w-full" style={{ maxWidth: `${MAX_CONTENT_WIDTH}px` }}>
        <div className="flex flex-row items-start justify-start overflow-visible py-[10px] relative w-full">
          <div className="flex flex-col gap-[44px] grow items-start justify-start max-w-[720px]">
            <h1
              data-key="imperatives-title"
              className="font-['Instrument_Sans'] font-medium text-4xl sm:text-5xl md:text-[64px] leading-none tracking-[-1.6px] sm:tracking-[-2.4px] md:tracking-[-3.2px] text-black"
            >
              {t('imperatives.title')}
              <br />
              {t('imperatives.subtitle')}
            </h1>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="mx-auto px-4 w-full" style={{ maxWidth: `${MAX_CONTENT_WIDTH}px` }}>
        <AdaptiveCarousel itemWidth={262} gap={20} maxWidth={MAX_CONTENT_WIDTH}>
          {imperativesData.map((item: any, index: number) => (
            <div key={index} className="flex flex-col gap-2 overflow-visible relative w-full">
              <div
                className="bg-center bg-cover bg-no-repeat flex items-center justify-center h-[160px] overflow-visible relative rounded-[24px] w-full"
                style={{ backgroundImage: `url(${imperativeImages[index]})` }}
              >
                <p
                  data-key={`imperatives-symbol-${index}`}
                  className={
                    item.symbol === '∞'
                      ? 'font-["Noto_Sans_Math"] font-medium text-[100px] md:text-[136px] text-white tracking-[-5px] md:tracking-[-6.8px] leading-none'
                      : 'font-["Instrument_Sans"] font-medium text-[60px] md:text-[80px] text-white tracking-[-3px] md:tracking-[-4px] leading-none'
                  }
                >
                  {item.symbol}
                </p>
              </div>

              <div className="flex flex-col gap-5 items-start justify-start overflow-visible relative w-full">
                <div className="bg-[#F3F4F6] flex flex-col h-[320px] items-start justify-between overflow-visible p-6 relative rounded-[24px] w-full">
                  <div className="flex flex-col font-['Instrument_Sans'] font-normal justify-center leading-none min-w-full relative text-black text-left">
                    <p
                      data-key={`imperatives-description-${index}`}
                      className="text-[14px] sm:text-[16px] leading-[1.3] tracking-[-0.28px] sm:tracking-[-0.48px] whitespace-pre-wrap"
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-row items-center gap-2 overflow-visible relative">
                    <button className="backdrop-blur-[3px] backdrop-filter bg-white flex flex-row items-center justify-center overflow-visible px-3 py-[11px] relative rounded-[100px] hover:bg-gray-50 transition-colors">
                      <span
                        data-key="imperatives-learn-more"
                        className="font-['Instrument_Sans'] font-medium text-[14px] sm:text-[16px] leading-[1.1] text-black text-left tracking-[-0.28px] sm:tracking-[-0.48px] whitespace-nowrap"
                      >
                        {t('imperatives.learnMore')}
                      </span>
                    </button>

                    <button className="backdrop-blur-[3px] backdrop-filter bg-white flex flex-row h-10 items-center justify-center overflow-visible p-[10px] relative rounded-[100px] w-10 hover:bg-gray-50 transition-colors">
                      <div className="block h-5 overflow-visible relative w-5">
                        <HeroiconsSolidArrowRight />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AdaptiveCarousel>
      </div>
    </section>
  )
}
