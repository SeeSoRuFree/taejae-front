'use client'

import { useState } from 'react'

export default function MoveInDayVideoSection() {
  const [isHovered, setIsHovered] = useState(false)

  const handlePlay = () => {
    console.log('Playing Move-In Day video')
    // TODO: Implement video play functionality
  }

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[50px] py-[100px] mobile:px-6 mobile:py-16">
        <div 
          className="bg-[#111111] overflow-hidden relative rounded-[24px] h-[268px] cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handlePlay}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handlePlay()
            }
          }}
          aria-label="Play 2025 Taejae Move-In Day video"
        >
          {/* Background Image with fade effect */}
          <div 
            className="absolute right-0 top-0 w-[60%] h-full mobile:w-[70%]"
            style={{ 
              backgroundImage: `linear-gradient(to right, rgba(17,17,17,1) 0%, rgba(17,17,17,0.8) 30%, rgba(17,17,17,0.4) 60%, transparent 100%), url('/assets/move-in-day-video.png')`,
              backgroundPosition: '0% 0%, center center',
              backgroundSize: 'auto, cover',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Text and Play Button - 세로로 중앙 배치 */}
          <div className="absolute left-12 top-1/2 transform -translate-y-1/2 z-20 mobile:left-6 flex flex-col items-start gap-4">
            <h1 className="font-eb-garamond font-semibold text-[40px] text-white tracking-[-0.8px] leading-[1.2] mobile:text-3xl">
              2025 Taejae Move-In Day
            </h1>
            
            <div 
              className={`backdrop-blur-sm bg-[rgba(255,255,255,0.2)] flex items-center justify-center rounded-full w-14 h-14 transition-all duration-200 ${
                isHovered ? 'scale-110 bg-[rgba(255,255,255,0.3)]' : 'scale-100'
              }`}
            >
              <div className="font-sans font-normal text-[20px] text-white tracking-[-1px]">
                <p className="leading-[1.21]">→</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
