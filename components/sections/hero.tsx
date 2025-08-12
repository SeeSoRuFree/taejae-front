'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'

const imgHeroImage4 = '/assets/hero-image-4.png'
const imgHeroImage3 = '/assets/hero-image-3.png'
const imgHeroImage2 = '/assets/hero-image-2.png'
const imgHeroImage1 = '/assets/hero-image-1.png'

interface HeroProps {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  const { t } = useTranslation(locale)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: imgHeroImage1,
      title: 'The Next Answer',
      subtitle: ['Think differently', 'Feel passionately', 'Evolve to inspire'],
    },
    {
      image: imgHeroImage2,
      title: 'The Next Answer',
      subtitle: ['Think differently', 'Feel passionately', 'Evolve to inspire'],
    },
    {
      image: imgHeroImage3,
      title: 'The Next Answer',
      subtitle: ['Think differently', 'Feel passionately', 'Evolve to inspire'],
    },
    {
      image: imgHeroImage4,
      title: 'The Next Answer',
      subtitle: ['Think differently', 'Feel passionately', 'Evolve to inspire'],
    },
  ]

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div
          className="w-full h-full flex flex-col items-center justify-end pb-6"
          style={{ maxWidth: `${MAX_CONTENT_WIDTH}px` }}
        >
          {/* Text Content - positioned in lower center area */}
          <div className="flex flex-col items-center gap-6 px-4 py-10 w-full">
            <h1 data-key="hero-title" className="text-5xl md:text-6xl lg:text-[64px] font-medium text-white text-center leading-none [text-shadow:0px_4px_42px_rgba(0,0,0,0.2)]">
              {slides[currentSlide].title}
            </h1>
            <div className="text-center text-white max-w-[484px]">
              {slides[currentSlide].subtitle.map((line, index) => (
                <p
                  key={index}
                  data-key={`hero-subtitle-${index}`}
                  className="text-lg md:text-xl lg:text-[22px] font-medium leading-[1.35]"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - bottom left */}
          <div className="w-full px-14 pb-6">
            <div className="flex gap-2">
              <button
                onClick={handlePrevSlide}
                className="w-12 h-12 rounded-[12px] bg-white/80 backdrop-blur-[3px] flex items-center justify-center hover:bg-white/90 transition-colors"
                aria-label="Previous slide"
              >
                <ArrowRightIcon className="w-5 h-5 text-black rotate-180" />
              </button>
              <button
                onClick={handleNextSlide}
                className="w-12 h-12 rounded-[12px] bg-white/80 backdrop-blur-[3px] flex items-center justify-center hover:bg-white/90 transition-colors"
                aria-label="Next slide"
              >
                <ArrowRightIcon className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
