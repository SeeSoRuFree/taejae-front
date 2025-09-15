'use client'

import Image from 'next/image'
import { useTranslation } from '@/lib/translations'

interface CivicProjectsSectionProps {
  locale: string
}

interface Step {
  number: number
  description: string
  circleImageUrl: string
}

export function CivicProjectsSection({ locale }: CivicProjectsSectionProps) {
  const { t } = useTranslation(locale)

  const steps: Step[] = [
    {
      number: 1,
      description: "Exploring a range of topics tailored to each city's unique characteristics",
      circleImageUrl: '/assets/step-circle-1.svg'
    },
    {
      number: 2,
      description: "Forming a team of 1 to 3 students & Choosing a project topic",
      circleImageUrl: '/assets/step-circle-2.svg'
    },
    {
      number: 3,
      description: "Developing a project plan and presenting it to others",
      circleImageUrl: '/assets/step-circle-3.svg'
    },
    {
      number: 4,
      description: "Working on your project through weekly meetings with your supervising professor",
      circleImageUrl: '/assets/step-circle-4.svg'
    },
    {
      number: 5,
      description: "Sharing your team's findings through presentations and submitting a final report",
      circleImageUrl: '/assets/step-circle-5.svg'
    },
    {
      number: 6,
      description: "Final feedback",
      circleImageUrl: '/assets/step-circle-6.svg'
    }
  ]

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto pb-[100px] pt-[60px] px-[50px] mobile:px-6 mobile:py-16">
        <div className="flex flex-col gap-[100px] items-start justify-start relative w-full">
          
          {/* Header Section */}
          <div className="flex flex-col gap-5 h-[183px] items-start justify-start max-w-[720px] relative w-[670px] mobile:w-full mobile:h-auto">
            <h2 className="font-eb-garamond font-normal text-[44px] text-[#111111] leading-[1.1] tracking-[-0.88px] max-w-[720px] w-full mobile:text-3xl">
              <span>Civic </span>
              <span className="text-[#1da597]">Projects</span>
            </h2>
            <div className="font-rethink-sans font-normal text-[20px] text-[#111111] leading-[1.5] tracking-[-0.6px] max-w-[685px] w-full mobile:text-lg">
              During the Civic Project, you will live in seven different cities to explore local issues firsthand. Through on-site research, you will collaborate with your peers to identify problems and develop practical solutions. The project follows these steps:
            </div>
          </div>

          {/* Steps Section */}
          <div className="h-[682px] relative w-full mobile:h-auto">
            
            {/* Top Row - Steps 1-3 */}
            <div className="absolute flex gap-5 items-start justify-start left-[60px] top-0 mobile:static mobile:flex-col mobile:gap-8 mobile:left-0">
              {steps.slice(0, 3).map((step) => (
                <div key={step.number} className="flex flex-col gap-6 items-start justify-start relative w-[244px] mobile:w-full">
                  <div className="overflow-hidden relative w-[180px] h-[180px] mobile:mx-auto">
                    <div className="absolute left-1/2 top-1/2 w-[180px] h-[180px] transform -translate-x-1/2 -translate-y-1/2">
                      <Image
                        src={step.circleImageUrl}
                        alt={`Step ${step.number} circle`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div 
                      className="absolute font-eb-garamond font-normal italic text-[90px] text-center text-white transform -translate-x-1/2"
                      style={{ 
                        top: 'calc(50% - 65px)', 
                        left: 'calc(50% - 3px)' 
                      }}
                    >
                      <p className="leading-normal whitespace-pre">{step.number}</p>
                    </div>
                  </div>
                  <div className="font-rethink-sans font-normal text-[20px] text-[#111111] leading-[1.5] tracking-[-0.6px] min-w-full mobile:text-center mobile:text-lg">
                    {step.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row - Steps 4-6 */}
            <div className="absolute flex gap-5 items-center justify-start left-[588px] top-[363px] mobile:static mobile:flex-col mobile:gap-8 mobile:left-0 mobile:mt-8">
              {steps.slice(3, 6).map((step) => (
                <div key={step.number} className="flex flex-col gap-6 items-start justify-start relative w-[244px] mobile:w-full">
                  <div className="overflow-hidden relative w-[180px] h-[180px] mobile:mx-auto">
                    <div className="absolute left-1/2 top-1/2 w-[180px] h-[180px] transform -translate-x-1/2 -translate-y-1/2">
                      <Image
                        src={step.circleImageUrl}
                        alt={`Step ${step.number} circle`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div 
                      className="absolute font-eb-garamond font-normal italic text-[90px] text-center text-white transform -translate-x-1/2"
                      style={{ 
                        top: 'calc(50% - 65px)', 
                        left: 'calc(50% - 3px)' 
                      }}
                    >
                      <p className="leading-normal whitespace-pre">{step.number}</p>
                    </div>
                  </div>
                  <div className="font-rethink-sans font-normal text-[20px] text-[#111111] leading-[1.5] tracking-[-0.6px] min-w-full mobile:text-center mobile:text-lg">
                    {step.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="flex gap-[50px] h-[400px] items-start justify-start relative w-[1340px] mobile:flex-col mobile:gap-8 mobile:w-full mobile:h-auto">
            
            {/* First Video Card */}
            <div className="flex-1 flex flex-col gap-6 items-start justify-start relative mobile:w-full">
              <div 
                className="bg-center bg-cover bg-no-repeat h-80 min-h-[239.799px] min-w-[248px] overflow-hidden relative w-full mobile:h-60"
                style={{ backgroundImage: `url('/assets/civic-video-1-bg.png')` }}
              >
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/20" />
                <div 
                  className="absolute backdrop-blur-sm bg-[rgba(119,119,119,0.5)] flex items-center justify-center p-3 rounded-full w-[72px] h-[72px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:bg-[rgba(119,119,119,0.7)] transition-colors"
                  style={{ left: 'calc(50% + 0.5px)' }}
                >
                  <div className="relative w-8 h-8 overflow-hidden">
                    <div className="absolute inset-[15.73%_17.54%_15.73%_18.75%]">
                      <Image
                        src="/assets/play-arrow-white.svg"
                        alt="Play"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center relative w-full">
                <div className="font-rethink-sans font-normal text-[20px] text-[#111111] leading-[1.5] tracking-[-0.6px] w-full mobile:text-lg">
                  The name of this movie clip
                </div>
              </div>
            </div>

            {/* Second Video Card */}
            <div className="flex-1 flex flex-col gap-6 items-start justify-start relative mobile:w-full">
              <div 
                className="bg-center bg-cover bg-no-repeat h-80 min-h-[239.801px] min-w-[248px] overflow-hidden relative w-full mobile:h-60"
                style={{ backgroundImage: `url('/assets/civic-video-2-bg.png')` }}
                aria-label="Photo of a man in a room using a tablet computer"
              >
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/20" />
                <div 
                  className="absolute backdrop-blur-sm bg-[rgba(119,119,119,0.5)] flex items-center justify-center p-3 rounded-full w-[72px] h-[72px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:bg-[rgba(119,119,119,0.7)] transition-colors"
                  style={{ left: 'calc(50% + 0.5px)' }}
                >
                  <div className="relative w-8 h-8 overflow-hidden">
                    <div className="absolute inset-[15.73%_17.54%_15.73%_18.75%]">
                      <Image
                        src="/assets/play-arrow-white.svg"
                        alt="Play"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-start justify-center relative w-full">
                <div className="font-rethink-sans font-normal text-[20px] text-[#111111] leading-[1.5] tracking-[-0.6px] w-full mobile:text-lg">
                  The name of this movie clip - sample of civic projects
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}