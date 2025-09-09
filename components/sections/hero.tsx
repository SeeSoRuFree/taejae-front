'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { useState, useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

const imgHeroImage1 = '/assets/hero-image-1.png'
const imgHeroImage2 = '/assets/hero-image-2.png'
const imgHeroImage3 = '/assets/hero-image-3.png'
const imgHeroImage4 = '/assets/hero-image-4.png'

interface HeroProps {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  const { t } = useTranslation(locale)
  const [activeSlide, setActiveSlide] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  const slides = [
    { image: imgHeroImage1 },
    { image: imgHeroImage2 },
    { image: imgHeroImage3 },
    { image: imgHeroImage4 },
  ]

  const handleSlideClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index)
    }
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Swiper - Base Layer */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Content Area with Gradient, Text, and Pagination */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#2b1e1699] to-[#2b1e1600] z-10 pointer-events-none">
        {/* Fixed Text Content - positioned 60px above pagination */}
        <div className="absolute bottom-[100px] left-0 right-0 text-center px-4">
          {/* Subtitle */}
          <p className="font-sans text-[18px] font-normal text-white uppercase tracking-[1.8px] mb-6">
            Evolve to inspire
          </p>
          
          {/* Main Title */}
          <h1 className="text-[64px] font-normal text-white leading-[1.1] [text-shadow:0px_4px_42px_rgba(0,0,0,0.2)] flex gap-2 items-center justify-center">
            <span className="font-inter tracking-[-3.2px]">The</span>
            <span className="font-playfair italic">Next</span>
            <span className="font-inter tracking-[-3.2px]">Answer</span>
          </h1>
        </div>
        
        {/* Custom Pagination */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 pointer-events-auto">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideClick(index)}
              className={`rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? 'w-3 h-3 bg-transparent border border-white'
                  : 'w-2.5 h-2.5 bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}