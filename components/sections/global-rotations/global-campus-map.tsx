'use client'

import Image from 'next/image'
import { useTranslation } from '@/lib/translations'

interface GlobalCampusMapProps {
  locale: string
}

export function GlobalCampusMap({ locale }: GlobalCampusMapProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[50px] py-[100px] mobile:px-6 mobile:py-16">
        <div className="flex flex-col gap-16 items-start justify-start relative w-full">
        
        {/* Title Section */}
        <div className="flex items-start justify-start px-0 py-2.5 w-full">
          <div className="flex h-[108px] items-start justify-start px-0 py-2.5 w-[720px] mobile:w-full">
            <h1 className="font-eb-garamond font-normal text-[64px] leading-[1.1] tracking-[-1.28px] text-[#111111] w-[720px] mobile:text-4xl mobile:w-full">
              Global <span className="text-[#1da597]">Campuses</span>
            </h1>
          </div>
        </div>

        {/* Map Section */}
        <div className="h-[620px] relative w-full mobile:h-[400px]">
          
          {/* Pins Container - positioned absolutely within map */}
          <div className="absolute inset-[19.36%_29.33%_57.74%_7.54%] mobile:inset-[10%_5%_40%_5%]">
            
            {/* Europe Grand Tour - Cyan Pin */}
            <div className="absolute bottom-[67.26%] left-[11.27%] right-[85.15%] top-1/4">
              <div className="bg-[#1da597] flex items-center justify-center overflow-hidden p-3 rounded-full">
                <div className="relative w-6 h-6 overflow-hidden">
                  <div className="absolute bottom-[5.72%] left-[2.86%] right-[2.86%] top-0 flex items-center justify-center">
                    <div className="w-4 h-4 rotate-[225deg]">
                      <Image 
                        src="/assets/location-pin-outline.svg" 
                        alt="" 
                        width={16} 
                        height={16} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-[41.67%_43.75%_45.83%_43.75%] flex items-center justify-center">
                    <div className="w-[3px] h-[3px] rotate-90">
                      <Image 
                        src="/assets/location-pin-center.svg" 
                        alt="" 
                        width={3} 
                        height={3} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Purple Pins */}
            <div className="absolute inset-[29.84%_29.33%_62.42%_67.09%]">
              <div className="bg-[#512d83] flex items-center justify-center overflow-hidden p-3 rounded-full">
                <div className="relative w-6 h-6 overflow-hidden">
                  <div className="absolute bottom-[5.72%] left-[2.86%] right-[2.86%] top-0 flex items-center justify-center">
                    <div className="w-4 h-4 rotate-[225deg]">
                      <Image 
                        src="/assets/location-pin-outline.svg" 
                        alt="" 
                        width={16} 
                        height={16} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-[41.67%_43.75%_45.83%_43.75%] flex items-center justify-center">
                    <div className="w-[3px] h-[3px] rotate-90">
                      <Image 
                        src="/assets/location-pin-center.svg" 
                        alt="" 
                        width={3} 
                        height={3} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-[25.16%_49.55%_67.1%_46.87%]">
              <div className="bg-[#512d83] flex items-center justify-center overflow-hidden p-3 rounded-full">
                <div className="relative w-6 h-6 overflow-hidden">
                  <div className="absolute bottom-[5.72%] left-[2.86%] right-[2.86%] top-0 flex items-center justify-center">
                    <div className="w-4 h-4 rotate-[225deg]">
                      <Image 
                        src="/assets/location-pin-outline.svg" 
                        alt="" 
                        width={16} 
                        height={16} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-[41.67%_43.75%_45.83%_43.75%] flex items-center justify-center">
                    <div className="w-[3px] h-[3px] rotate-90">
                      <Image 
                        src="/assets/location-pin-center.svg" 
                        alt="" 
                        width={3} 
                        height={3} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-[26.13%_53.28%_66.13%_43.13%]">
              <div className="bg-[#512d83] flex items-center justify-center overflow-hidden p-3 rounded-full">
                <div className="relative w-6 h-6 overflow-hidden">
                  <div className="absolute bottom-[5.72%] left-[2.86%] right-[2.86%] top-0 flex items-center justify-center">
                    <div className="w-4 h-4 rotate-[225deg]">
                      <Image 
                        src="/assets/location-pin-outline.svg" 
                        alt="" 
                        width={16} 
                        height={16} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-[41.67%_43.75%_45.83%_43.75%] flex items-center justify-center">
                    <div className="w-[3px] h-[3px] rotate-90">
                      <Image 
                        src="/assets/location-pin-center.svg" 
                        alt="" 
                        width={3} 
                        height={3} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-[34.52%_53.36%_57.74%_43.06%]">
              <div className="bg-[#512d83] flex items-center justify-center overflow-hidden p-3 rounded-full">
                <div className="relative w-6 h-6 overflow-hidden">
                  <div className="absolute bottom-[5.72%] left-[2.86%] right-[2.86%] top-0 flex items-center justify-center">
                    <div className="w-4 h-4 rotate-[225deg]">
                      <Image 
                        src="/assets/location-pin-outline.svg" 
                        alt="" 
                        width={16} 
                        height={16} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-[41.67%_43.75%_45.83%_43.75%] flex items-center justify-center">
                    <div className="w-[3px] h-[3px] rotate-90">
                      <Image 
                        src="/assets/location-pin-center.svg" 
                        alt="" 
                        width={3} 
                        height={3} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-[19.36%_88.88%_72.9%_7.54%]">
              <div className="bg-[#512d83] flex items-center justify-center overflow-hidden p-3 rounded-full">
                <div className="relative w-6 h-6 overflow-hidden">
                  <div className="absolute bottom-[5.72%] left-[2.86%] right-[2.86%] top-0 flex items-center justify-center">
                    <div className="w-4 h-4 rotate-[225deg]">
                      <Image 
                        src="/assets/location-pin-outline.svg" 
                        alt="" 
                        width={16} 
                        height={16} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-[41.67%_43.75%_45.83%_43.75%] flex items-center justify-center">
                    <div className="w-[3px] h-[3px] rotate-90">
                      <Image 
                        src="/assets/location-pin-center.svg" 
                        alt="" 
                        width={3} 
                        height={3} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-[25.97%_45.82%_66.29%_50.6%]">
              <div className="bg-[#512d83] flex items-center justify-center overflow-hidden p-3 rounded-full">
                <div className="relative w-6 h-6 overflow-hidden">
                  <div className="absolute bottom-[5.72%] left-[2.86%] right-[2.86%] top-0 flex items-center justify-center">
                    <div className="w-4 h-4 rotate-[225deg]">
                      <Image 
                        src="/assets/location-pin-outline.svg" 
                        alt="" 
                        width={16} 
                        height={16} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-[41.67%_43.75%_45.83%_43.75%] flex items-center justify-center">
                    <div className="w-[3px] h-[3px] rotate-90">
                      <Image 
                        src="/assets/location-pin-center.svg" 
                        alt="" 
                        width={3} 
                        height={3} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* USA Tag */}
          <div className="absolute inset-[22.9%_4.78%_64.19%_72.16%] mobile:inset-[15%_2%_50%_60%]">
            <div className="bg-[#111111] flex gap-4 items-center justify-start pl-4 pr-5 py-4 rounded-full">
              <div className="bg-[#512d83] flex items-center justify-center overflow-hidden p-3 rounded-full shrink-0">
                <div className="relative w-6 h-6 overflow-hidden">
                  <div className="absolute bottom-[5.72%] left-[2.86%] right-[2.86%] top-0 flex items-center justify-center">
                    <div className="w-4 h-4 rotate-[225deg]">
                      <Image 
                        src="/assets/location-pin-outline.svg" 
                        alt="" 
                        width={16} 
                        height={16} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-[41.67%_43.75%_45.83%_43.75%] flex items-center justify-center">
                    <div className="w-[3px] h-[3px] rotate-90">
                      <Image 
                        src="/assets/location-pin-center.svg" 
                        alt="" 
                        width={3} 
                        height={3} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pl-0 pr-6 py-0">
                <div className="font-rethink-sans font-semibold text-[12px] leading-[16px] text-white/50 min-w-max">
                  USA
                </div>
                <div className="flex gap-1 items-center justify-start">
                  <div className="font-rethink-sans font-semibold text-[16px] leading-[24px] text-white whitespace-pre">
                    Pace University, New York
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Europe Grand Tour Tag */}
          <div className="absolute inset-[35.65%_71.64%_51.45%_10%] mobile:inset-[25%_40%_60%_5%]">
            <div className="bg-[#111111] flex gap-4 items-center justify-start pl-4 pr-5 py-4 rounded-full">
              <div className="bg-[#1da597] flex items-center justify-center overflow-hidden p-3 rounded-full shrink-0">
                <div className="relative w-6 h-6 overflow-hidden">
                  <div className="absolute bottom-[5.72%] left-[2.86%] right-[2.86%] top-0 flex items-center justify-center">
                    <div className="w-4 h-4 rotate-[225deg]">
                      <Image 
                        src="/assets/location-pin-outline.svg" 
                        alt="" 
                        width={16} 
                        height={16} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-[41.67%_43.75%_45.83%_43.75%] flex items-center justify-center">
                    <div className="w-[3px] h-[3px] rotate-90">
                      <Image 
                        src="/assets/location-pin-center.svg" 
                        alt="" 
                        width={3} 
                        height={3} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pl-0 pr-6 py-0">
                <div className="flex gap-1 items-center justify-start">
                  <div className="font-rethink-sans font-semibold text-[16px] leading-[24px] text-white whitespace-pre">
                    Europe Grand Tour
                  </div>
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