'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'

interface FutureConvergenceProps {
  locale: Locale
}

interface Program {
  name: string
  url?: string
}

export function FutureConvergence({ locale }: FutureConvergenceProps) {
  const { t } = useTranslation(locale)

  const programs: Program[] = [
    { name: 'Humanities and Social Sciences' },
    { name: 'Natural Sciences' },
    { name: 'Data Science and Artificial Intelligence' },
    { name: 'Business and Innovation' },
  ]

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[50px] py-[100px] mobile:px-6 mobile:py-16">
        <div className="flex flex-col gap-[100px] items-center justify-start relative w-full mobile:gap-16">
          {/* Title Section */}
          <div className="flex items-start justify-start px-0 py-2.5 relative w-full">
            <div className="flex flex-col gap-11 items-start justify-start relative w-full">
              <div className="max-w-[720px] w-full">
                <h2 className="font-eb-garamond font-normal text-[64px] text-black leading-[1.1] tracking-[-1.28px] w-full mobile:text-4xl">
                  <p className="leading-[1.1]">
                    <span>School of </span>
                    <span className="text-[#1da597]">Future</span>
                    <br />
                    <span className="text-[#1da597]">Convergence Studies</span>
                  </p>
                </h2>
              </div>
              <div className="w-full">
                <h3 className="font-eb-garamond font-normal text-[44px] text-black leading-[1.1] tracking-[-0.88px] w-full mobile:text-2xl">
                  <p className="leading-[1.1]">Design your own learning pathway from Year 2 to Year 4</p>
                </h3>
              </div>
            </div>
          </div>

          {/* Diagram Section */}
          <div className="h-[594px] overflow-hidden relative w-[590px] mobile:w-full mobile:h-auto">
            <div 
              className="absolute bg-center bg-cover bg-no-repeat h-[594px] left-0 top-0 w-[1175px] mobile:relative mobile:w-full mobile:h-auto"
              style={{
                backgroundImage: `url('/assets/academics/future-convergence-diagram.png')`
              }}
            />
          </div>

          {/* Content Section */}
          <div className="flex gap-[339px] items-start justify-start relative w-full mobile:justify-start mobile:gap-0">
            <div className="flex flex-col gap-14 items-start justify-center max-w-[840px] w-[840px] relative mobile:w-full mobile:max-w-none">
              {/* Description Text */}
              <div className="flex flex-col gap-2 items-start justify-start relative w-[840px] mobile:w-full">
                <div className="font-sans font-normal text-[20px] text-black tracking-[-0.6px] w-full mobile:text-lg" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[1.35]">Beginning in your second year, you'll shape your own academic journey by choosing courses that align with your interests and aspirations. These courses are offered across four interdisciplinary academic programmes:</p>
                </div>
              </div>

              {/* Program Links */}
              <div className="flex flex-col gap-[25px] items-start justify-start relative w-full">
                <div className="h-0 relative w-full">
                  <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                    <img alt="Icons" className="block max-w-none size-full" src="/assets/divider-line.svg" />
                  </div>
                </div>
                
                <a className="box-border cursor-pointer flex font-sans font-normal items-center justify-between text-black tracking-[-1px] w-full hover:text-[#1da597] transition-colors p-0 relative overflow-visible" href="#" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <div className="basis-0 grow max-w-[600px] min-h-px min-w-px relative text-[20px] mobile:text-lg" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.21]">Humanities and Social Sciences</p>
                  </div>
                  <div className="relative text-[0px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="cursor-pointer font-sans font-normal leading-[1.21] text-[20px] tracking-[-1px] whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
                      →
                    </p>
                  </div>
                </a>
                
                <div className="h-0 relative w-full">
                  <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                    <img alt="Icons" className="block max-w-none size-full" src="/assets/divider-line.svg" />
                  </div>
                </div>
                
                <a className="box-border cursor-pointer flex font-sans font-normal items-center justify-between text-black tracking-[-1px] w-full hover:text-[#1da597] transition-colors p-0 relative overflow-visible" href="#" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <div className="basis-0 grow max-w-[600px] min-h-px min-w-px relative text-[20px] mobile:text-lg" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.21]">Natural Sciences</p>
                  </div>
                  <div className="relative text-[0px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="cursor-pointer font-sans font-normal leading-[1.21] text-[20px] tracking-[-1px] whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
                      →
                    </p>
                  </div>
                </a>
                
                <div className="h-0 relative w-full">
                  <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                    <img alt="Icons" className="block max-w-none size-full" src="/assets/divider-line.svg" />
                  </div>
                </div>
                
                <a className="box-border cursor-pointer flex font-sans font-normal items-center justify-between text-black tracking-[-1px] w-full hover:text-[#1da597] transition-colors p-0 relative overflow-visible" href="#" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <div className="basis-0 grow max-w-[600px] min-h-px min-w-px relative text-[20px] mobile:text-lg" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.21]">Data Science and Artificial Intelligence</p>
                  </div>
                  <div className="relative text-[0px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="cursor-pointer font-sans font-normal leading-[1.21] text-[20px] tracking-[-1px] whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
                      →
                    </p>
                  </div>
                </a>
                
                <div className="h-0 relative w-full">
                  <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                    <img alt="Icons" className="block max-w-none size-full" src="/assets/divider-line.svg" />
                  </div>
                </div>
                
                <a className="box-border cursor-pointer flex font-sans font-normal items-center justify-between text-black tracking-[-1px] w-full hover:text-[#1da597] transition-colors p-0 relative overflow-visible" href="#" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <div className="basis-0 grow max-w-[600px] min-h-px min-w-px relative text-[20px] mobile:text-lg" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.21]">Business and Innovation</p>
                  </div>
                  <div className="relative text-[0px] text-nowrap text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="cursor-pointer font-sans font-normal leading-[1.21] text-[20px] tracking-[-1px] whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
                      →
                    </p>
                  </div>
                </a>
                
                <div className="h-0 relative w-full">
                  <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                    <img alt="Icons" className="block max-w-none size-full" src="/assets/divider-line.svg" />
                  </div>
                </div>
              </div>

              {/* Closing Text */}
              <div className="flex flex-col gap-2 items-start justify-start relative w-[840px] mobile:w-full">
                <div className="font-sans font-normal text-[20px] text-black tracking-[-0.6px] w-full mobile:text-lg" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[1.35]">With support and mentorship from dedicated faculty, you'll design a personalized learning pathway that reflects your goals. At Taejae, your education is not predefined—you have the freedom to explore, combine, and deepen your areas of focus as you choose. This is your opportunity to create an academic track that's uniquely yours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}