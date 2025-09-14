'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'

interface InnovationFoundationsProps {
  locale: Locale
}

interface Course {
  code: string
  title: string
  url?: string
}

export function InnovationFoundations({ locale }: InnovationFoundationsProps) {
  const { t } = useTranslation(locale)

  const courses = t('academics.whatLearn.innovationFoundations.courses') as Course[]

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[50px] py-[100px] mobile:px-6 mobile:py-16">
        <div className="flex flex-col gap-[100px] items-center justify-start relative w-full mobile:gap-16">
          {/* Title Section */}
          <div className="flex items-start justify-start px-0 py-2.5 relative w-full">
            <div className="flex flex-col gap-11 items-start justify-start relative w-full">
              <div className="w-full">
                <h2 className="font-eb-garamond font-normal text-[64px] text-black leading-[1.1] tracking-[-1.28px] w-full mobile:text-4xl">
                  <span>{t('academics.whatLearn.innovationFoundations.title').split(' ').slice(0, 2).join(' ')} </span>
                  <span className="text-[#1da597]">{t('academics.whatLearn.innovationFoundations.title').split(' ').slice(2).join(' ')}</span>
                </h2>
              </div>
              <div className="w-full">
                <h3 className="font-eb-garamond font-normal text-[44px] text-black leading-[1.1] tracking-[-0.88px] w-full mobile:text-2xl">
                  {t('academics.whatLearn.innovationFoundations.subtitle')}
                </h3>
              </div>
            </div>
          </div>

          {/* Content with right alignment and gap */}
          <div className="flex gap-[339px] items-start justify-end relative w-full mobile:justify-start mobile:gap-0">
          <div className="flex flex-col gap-14 items-start justify-center max-w-[840px] w-[840px] relative mobile:w-full mobile:max-w-none">
            {/* Description Text */}
            <div className="flex flex-col gap-4 items-start justify-start relative w-[840px] mobile:w-full">
              <div className="font-rethink-sans font-normal leading-[1.5] text-[#111111] text-[20px] tracking-[-0.6px] w-full mobile:text-lg">
                <p className="mb-0">
                  {t('academics.whatLearn.innovationFoundations.description1')}
                </p>
                <p className="mb-0">&nbsp;</p>
                <p className="mb-0">
                  {t('academics.whatLearn.innovationFoundations.description2')}
                </p>
                <p className="mb-0">
                  {t('academics.whatLearn.innovationFoundations.description3')}
                </p>
                <p className="mb-0">&nbsp;</p>
                <p>
                  {t('academics.whatLearn.innovationFoundations.description4')}
                </p>
              </div>
            </div>

            {/* Course List */}
            <div className="flex flex-col gap-4 items-start justify-start relative w-[840px] mobile:w-full">
              <h4 className="font-eb-garamond font-normal text-[44px] text-black leading-[1.1] tracking-[-0.88px] w-full mobile:text-2xl">
                {t('academics.whatLearn.innovationFoundations.coursesTitle')}
              </h4>
              
              <div className="flex flex-col gap-6 items-start justify-start pt-8 relative w-full">
                {courses.map((course, index) => (
                  <div key={course.code} className="w-full">
                    {index === 0 && (
                      <div className="h-0 relative w-full mb-6">
                        <img 
                          alt="Divider" 
                          className="block max-w-none w-full h-px" 
                          src="/assets/divider-line.svg" 
                        />
                      </div>
                    )}
                    <a 
                      href="#"
                      className="flex font-rethink-sans font-normal items-center justify-between text-[18px] tracking-[-0.54px] w-full hover:text-[#1da597] transition-colors mobile:text-base"
                    >
                      <div className="text-[#767676] w-20 shrink-0">
                        <p className="leading-[1.5]">{course.code}</p>
                      </div>
                      <div className="basis-0 grow max-w-[600px] text-black">
                        <p className="leading-[1.5]">{course.title}</p>
                      </div>
                    </a>
                    <div className="h-0 relative w-full mt-6">
                      <img 
                        alt="Divider" 
                        className="block max-w-none w-full h-px" 
                        src="/assets/divider-line.svg" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learn More Button */}
            <div className="bg-[#111111] relative rounded-[50px] shrink-0">
              <div className="flex flex-col items-center justify-center px-[22px] py-2.5 relative">
                <p className="font-rethink-sans font-medium text-[15px] leading-[1.5] text-white tracking-[-0.3px] whitespace-pre">
                  {t('academics.whatLearn.innovationFoundations.buttonText')} 
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}