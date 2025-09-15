'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import SectionDivider from '@/components/ui/section-divider'

const careerColors = [
  'bg-career-1', // #a670f0
  'bg-career-2', // #9360db
  'bg-career-3', // #7d4ebe
  'bg-career-4', // #653b9e
  'bg-career-5', // #512d83
]

interface CareerDevelopmentProps {
  locale: Locale
}

export default function CareerDevelopment({ locale }: CareerDevelopmentProps) {
  const { t } = useTranslation(locale)

  const programs = t('academics.studentLife.studentSupportCareer.careerDevelopment.programs')

  return (
    <section className="relative w-full">
      <div className="max-w-[1340px] mx-auto px-[50px] pb-0 mobile:px-[20px]">
        <div className="relative min-h-[977px]">
          {/* Title */}
          <div className="flex flex-col gap-9 items-start justify-start w-full">
            <div className="flex items-start justify-start py-2.5 relative w-full">
              <div className="flex flex-col gap-11 grow items-start justify-start max-w-[720px] min-h-px min-w-px relative">
                <div className="font-eb-garamond font-normal leading-[0] max-w-[720px] relative w-full">
                  <h2 className="text-[44px] text-[#111111] tracking-[-0.88px] leading-[1.1] mobile:text-[32px] mobile:tracking-[-0.64px]">
                    {t('academics.studentLife.studentSupportCareer.careerDevelopment.title')}
                  </h2>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="flex gap-10 items-center justify-center py-2.5 relative w-full">
              <div className="flex flex-col gap-11 grow items-center justify-center max-w-[840px] min-h-px min-w-px relative">
                <div className="font-eb-garamond font-normal leading-normal max-w-[685px] relative text-[#111111] text-[32px] text-center w-full mobile:text-[24px]">
                  {t('academics.studentLife.studentSupportCareer.careerDevelopment.quote')
                    .split('\n')
                    .map((line: string, index: number) => (
                      <p key={index} className={index === 0 ? 'mb-0' : ''}>
                        {line}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content: Two Column Layout */}
          <div className="flex gap-20 mt-[68px] mobile:flex-col mobile:gap-10 mobile:mt-[40px]">
            {/* Left Column - Description Text */}
            <div className="w-[749px] mobile:w-full">
              <div className="font-rethink-sans font-normal leading-[0] text-[#111111] text-[0px]">
                <div className="space-y-0">
                  <p className="font-semibold leading-[30px] mb-0 text-[20px] mobile:text-[16px]">
                    At Taejae University, self-directed learning isn't just something you practice
                  </p>
                  <p className="font-semibold leading-[30px] mb-0 text-[20px] mobile:text-[16px]">
                    while you're a student. It becomes even more important after you graduate.
                  </p>
                  <p className="leading-[30px] mb-0 text-[20px] mobile:text-[16px]">&nbsp;</p>
                  <p className="leading-[30px] mb-0 text-[20px] mobile:text-[16px]">
                    Your career isn't just about picking a job. It's about asking yourself
                  </p>
                  <div className="leading-[30px] text-[20px] mobile:text-[16px] whitespace-pre-wrap">
                    <span>big questions like:</span>
                    <br />
                    <span className="font-medium italic"> </span>
                    <span className="font-medium italic">
                      "What kind of life do I want to live?"
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;"Who do I want to become?"
                    </span>
                    <span className="italic">
                      <br />
                      And then actively exploring the answers.
                    </span>
                  </div>
                  <p className="leading-[30px] mb-0 text-[20px] mobile:text-[16px]">&nbsp;</p>
                  <p className="leading-[30px] mb-0 text-[20px] mobile:text-[16px]">
                    That's where our Career Design Program (C.D.P.) comes in. Through C.D.P., you'll
                    work with real-world professionals who'll mentor you in understanding how your
                    strengths and interests align with different career paths (Job-Person Fit), and
                    what skills you might need to build along the way.
                  </p>
                  <p className="leading-[30px] mb-0 text-[20px] mobile:text-[16px]">&nbsp;</p>
                  <p className="leading-[30px] mb-0 text-[20px] mobile:text-[16px]">
                    This isn't just about getting a job - it's about growing into someone who keeps
                    learning, keeps challenging themselves, and ultimately makes a difference in the
                    world. C.D.P. is here to help you succeed - not only by building your personal
                    strengths, but also by preparing you to become someone who contributes
                    meaningfully to society.
                  </p>
                  <p className="leading-[30px] text-[20px] mobile:text-[16px]">
                    <br />
                    <span className="font-bold">That's what Student Success means to us.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Program Cards */}
            <div className="relative mobile:w-full">
              {/* Title Above Cards */}
              <div className="absolute font-rethink-sans font-bold leading-[0] left-[160px] transform -translate-x-1/2 text-[20px] text-black text-center text-nowrap top-[430px] tracking-[-0.6px] mobile:relative mobile:left-auto mobile:transform-none mobile:top-auto mobile:mb-6 mobile:text-center">
                <p className="leading-[1.5] whitespace-pre">Career Development Program</p>
              </div>

              {/* Cards Stack */}
              <div className="space-y-[14px] mobile:space-y-3">
                {programs.map((program: any, index: number) => (
                  <div
                    key={index}
                    className={`${careerColors[index]} h-[70px] w-80 overflow-hidden rounded-[200px] relative mobile:w-full mobile:h-[60px]`}
                  >
                    <div className="absolute font-rethink-sans font-medium leading-[0] text-[20px] text-center text-nowrap text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mobile:text-[16px]">
                      <p className="leading-normal whitespace-pre">{program.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="max-w-[1340px] mx-auto px-[50px] mt-[93px] mb-[35px] mobile:px-[20px] mobile:mt-[50px] mobile:mb-[20px]">
        <SectionDivider />
      </div>
    </section>
  )
}
