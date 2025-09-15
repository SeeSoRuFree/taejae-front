'use client'

import Image from 'next/image'
import { useTranslation } from '@/lib/translations'

interface GlobalRotationsHeroProps {
  locale: string
}

export function GlobalRotationsHero({ locale }: GlobalRotationsHeroProps) {
  const { t } = useTranslation(locale)

  const gradientStyle = {
    background: `radial-gradient(circle at center, 
      rgba(100,38,187,1) 0%, 
      rgba(90,63,191,1) 9.7%, 
      rgba(80,88,194,1) 19.5%, 
      rgba(60,138,202,1) 38.9%, 
      rgba(40,188,209,1) 58.4%, 
      rgba(20,238,216,1) 77.9%, 
      rgba(45,243,185,1) 83.4%, 
      rgba(70,247,155,1) 88.9%, 
      rgba(95,251,124,1) 94.5%, 
      rgba(120,255,94,1) 100%)`
  }

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[50px] py-[100px] mobile:px-6 mobile:py-16">
        <div className="flex flex-col gap-16 items-start justify-start relative w-full">
          {/* Title Section */}
          <div className="flex items-start justify-start py-2.5 relative w-full">
            <div className="flex flex-col items-start justify-between h-[88px] max-w-[720px] relative">
              <h1 className="font-eb-garamond font-normal text-[64px] text-[#111111] leading-[1.1] tracking-[-1.28px] mobile:text-4xl">
                <span>Global </span>
                <span className="text-[#1da597]">Rotations</span>
              </h1>
            </div>
          </div>

          {/* Body Section */}
          <div className="flex gap-[76px] items-center justify-start py-2.5 relative w-full mobile:flex-col mobile:gap-8">
            {/* Description Text */}
            <div className="flex items-center">
              <div className="flex gap-11 items-center justify-start h-full relative">
                <div className="font-rethink-sans font-normal text-[20px] text-[#111111] leading-[1.5] tracking-[-0.6px] max-w-[685px] mobile:text-lg mobile:max-w-none whitespace-pre-line">
                  <p className="mb-0">Taejae students embark on the Global Rotation, </p>
                  <p className="mb-0">starting from the second semester of their sophomore year – </p>
                  <p className="mb-0">a journey across seven global campuses in five countries.</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">These campuses are hosted by seven local universities with which Taejae University has signed MOUs. You will participate in co-hosted courses and programs jointly operated by both institutions.</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">In addition, you will engage in the Civic Project, where you can explore pressing socio-cultural issues faced by the cities hosting the global campuses and propose innovative solutions. They also take part in Global Study and Engagement, a program designed to immerse them in the local history and culture of each region.</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">Through these experiences, students develop a deep understanding of local societies and cultures while cultivating creative problem-solving skills through critical analysis and engagement.</p>
                  <p>&nbsp;</p>
                </div>
              </div>
            </div>

            {/* Feature Card */}
            <div className="flex flex-col gap-11 h-[470px] items-end justify-start max-w-[580px] w-[580px] relative mobile:w-full mobile:max-w-none mobile:h-auto">
              <div 
                className="flex-1 min-h-0 overflow-hidden relative rounded-[24px] w-full"
                style={gradientStyle}
              >
                {/* Background Image with overlay */}
                <div 
                  className="absolute h-[583px] left-[-228px] top-[-57px] w-[1036px]"
                  style={{
                    backgroundImage: `url('/assets/global-experience-main-bg.png')`,
                    backgroundPosition: '0% 0%, 50% 50%',
                    backgroundSize: 'auto, cover',
                    backgroundColor: 'rgba(23, 67, 162, 0.16)'
                  }}
                />
                
                {/* Centered Text Content */}
                <div className="absolute left-1/2 top-[calc(50%-5px)] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 items-center justify-center text-center text-white p-[10px]">
                  <div className="font-sans font-normal text-[120px] tracking-[-6px] leading-[1.1] mobile:text-[80px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.1] text-nowrap whitespace-pre">7</p>
                  </div>
                  <div className="font-sans font-semibold text-[20px] leading-[30px] mobile:text-lg whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="mb-0">The only university in Korea that offers </p>
                    <p className="mb-0">an innovative Global Rotation Program</p>
                    <p className="mb-0">taking students across seven global campuses </p>
                    <p>to explore diverse cultures and values around the world!</p>
                  </div>
                  <div className="font-sans font-bold text-[30px] mobile:text-2xl" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[30px] text-nowrap whitespace-pre">That's Taejae University.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}