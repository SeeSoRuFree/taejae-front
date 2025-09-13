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

  const courses: Course[] = [
    { code: 'F 101', title: 'Critical and Rational Thinking' },
    { code: 'F 113', title: 'Creative Problem Solving' },
    { code: 'F 103', title: 'Diversity, Empathy, and Global Citizenship' },
    { code: 'F 111', title: 'Empowered Learning' },
    { code: 'F 107', title: 'Data Analysis and Storytelling' },
    { code: 'F 108', title: 'Judgment and Decision-Making' },
    { code: 'F 112', title: 'Rhetoric and Persuasion' },
    { code: 'F 104', title: 'Leadership and Collaboration' },
    { code: 'F 110', title: 'Navigating Social Systems' },
    { code: 'F 106', title: 'Sustainability and Equity' },
  ]

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[50px] py-[100px] mobile:px-6 mobile:py-16">
        <div className="flex flex-col gap-[100px] items-center justify-start relative w-full mobile:gap-16">
          {/* Title Section */}
          <div className="flex items-start justify-start px-0 py-2.5 relative w-full">
            <div className="flex flex-col gap-11 items-start justify-start relative w-full">
              <div className="w-full">
                <h2 className="font-eb-garamond font-normal text-[64px] text-black leading-[1.1] tracking-[-1.28px] w-full mobile:text-4xl">
                  <span>School of </span>
                  <span className="text-[#1da597]">Innovation Foundations</span>
                </h2>
              </div>
              <div className="w-full">
                <h3 className="font-eb-garamond font-normal text-[44px] text-black leading-[1.1] tracking-[-0.88px] w-full mobile:text-2xl">
                  Begin your learning journey with six key competencies
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
                  At the School of Innovation Foundations, your learning experience starts with you. As a first-year student, you'll begin with Innovative Foundation—a one-year mandatory module designed to help you thrive in a rapidly changing world. This foundational program focuses on six key competencies: critical thinking, creative thinking, self-directed learning, empathy and diversity, communication and collaboration, and global harmony and sustainability.
                </p>
                <p className="mb-0">&nbsp;</p>
                <p className="mb-0">
                  Through this module, you'll gain the tools to think deeply, act thoughtfully, and lead with purpose. You'll build not only a strong academic base but also the mindset and skills needed to engage meaningfully with others and create positive change.
                </p>
                <p className="mb-0">
                  Learning here is anything but passive. You'll dive into hands-on projects, group challenges, and real-world case studies that turn ideas into action. Our classrooms are dynamic, collaborative spaces where you're encouraged to question, create, and grow.
                </p>
                <p className="mb-0">&nbsp;</p>
                <p>
                  Whether you're discovering new passions or preparing for a specific path, the School of Innovation Foundations is where your journey as a future-ready, globally minded changemaker truly begins.
                </p>
              </div>
            </div>

            {/* Course List */}
            <div className="flex flex-col gap-4 items-start justify-start relative w-[840px] mobile:w-full">
              <h4 className="font-eb-garamond font-normal text-[44px] text-black leading-[1.1] tracking-[-0.88px] w-full mobile:text-2xl">
                Here are what you'll learn…
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
                  Learn more 
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