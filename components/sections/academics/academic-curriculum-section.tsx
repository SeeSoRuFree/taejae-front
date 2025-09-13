'use client'

interface CourseCategory {
  title: string
  courses: string[]
}

interface AcademicCurriculumSectionProps {
  title: string
  subtitle: string
  backgroundImage: string
  categories: CourseCategory[]
  buttonText: string
  buttonHref?: string
}

export function AcademicCurriculumSection({
  title,
  subtitle,
  backgroundImage,
  categories,
  buttonText,
  buttonHref = '#'
}: AcademicCurriculumSectionProps) {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[50px] py-[100px] mobile:px-6 mobile:py-16">
        <div className="flex gap-28 items-start justify-end relative w-full mobile:flex-col mobile:gap-8">
          {/* Image Section */}
          <div 
            className="basis-0 grow min-h-[903px] relative rounded-[24px] overflow-hidden"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundPosition: '0% 0%, 50% 50%',
              backgroundSize: 'auto, cover',
              backgroundColor: 'rgba(255,255,255,0.9)'
            }}
          >
            {/* Bottom overlay image */}
            <div 
              className="absolute bg-center bg-cover bg-no-repeat h-[903px] left-[-13px] top-0 w-[456px]"
              style={{
                backgroundImage: `url('/assets/academics/ns-main-overlay.png')`
              }}
            />
            
            {/* Title overlay */}
            <div className="absolute font-eb-garamond font-normal text-[44px] text-black tracking-[-0.88px] left-9 top-[50px] w-[292px]">
              <p className="leading-[1.1]">
                {title.split(' ')[0]} 
                <br />
                {title.split(' ').slice(1).join(' ')}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-14 items-start justify-start relative w-[840px] mobile:w-full">
            <div className="flex flex-col gap-4 items-start justify-start relative">
              <div className="box-border flex flex-col gap-[25px] items-start justify-start pt-[30px] relative w-[840px] mobile:w-full">
                {/* First divider */}
                <div className="h-0 relative w-full">
                  <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                    <img alt="Icons" className="block max-w-none size-full" src="/assets/divider-line.svg" />
                  </div>
                </div>

                <a className="box-border cursor-pointer flex items-start justify-between overflow-visible p-0 relative w-full" href="#">
                  <div className="font-sans font-normal text-[#767676] text-[20px] tracking-[-1px] w-[200px] relative" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.21]">{categories[0]?.title || 'Fundamentals'}</p>
                  </div>
                  <div className="flex flex-col font-sans font-normal gap-[25px] items-center justify-center text-[20px] text-black tracking-[-1px] relative">
                    {categories[0]?.courses.map((course, index) => (
                      <div 
                        key={index}
                        className={index === 0 ? "relative w-[600px]" : "min-w-full relative"}
                        style={{ 
                          fontVariationSettings: "'wdth' 100",
                          width: index === 0 ? "600px" : "min-content"
                        }}
                      >
                        <p className="leading-[1.21]">{course}</p>
                      </div>
                    ))}
                  </div>
                </a>
                
                <div className="h-0 relative w-full">
                  <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                    <img alt="Icons" className="block max-w-none size-full" src="/assets/divider-line.svg" />
                  </div>
                </div>
                
                <a className="box-border cursor-pointer flex items-start justify-between overflow-visible p-0 relative w-full" href="#">
                  <div className="font-sans font-normal text-[#767676] text-[20px] tracking-[-1px] w-[200px] relative" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.21]">{categories[1]?.title || 'Advanced'}</p>
                  </div>
                  <div className="flex flex-col font-sans font-normal gap-[25px] items-center justify-center text-[20px] text-black tracking-[-1px] relative">
                    {categories[1]?.courses.map((course, index) => (
                      <div 
                        key={index}
                        className={index === 0 ? "relative w-[600px]" : "min-w-full relative"}
                        style={{ 
                          fontVariationSettings: "'wdth' 100",
                          width: index === 0 ? "600px" : "min-content"
                        }}
                      >
                        <p className="leading-[1.21]">{course}</p>
                      </div>
                    ))}
                  </div>
                </a>
                
                <div className="h-0 relative w-full">
                  <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                    <img alt="Icons" className="block max-w-none size-full" src="/assets/divider-line.svg" />
                  </div>
                </div>
                
                <a className="box-border cursor-pointer flex items-start justify-between overflow-visible p-0 relative w-full" href="#">
                  <div className="font-sans font-normal text-[#767676] text-[20px] tracking-[-1px] w-[200px] relative" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.21]">{categories[2]?.title || 'Interdisciplinary'}</p>
                  </div>
                  <div className="flex flex-col font-sans font-normal gap-[25px] items-center justify-center text-[20px] text-black tracking-[-1px] relative">
                    {categories[2]?.courses.map((course, index) => (
                      <div 
                        key={index}
                        className={index === 0 ? "relative w-[600px]" : "min-w-full relative"}
                        style={{ 
                          fontVariationSettings: "'wdth' 100",
                          width: index === 0 ? "600px" : "min-content"
                        }}
                      >
                        <p className="leading-[1.21]">{course}</p>
                      </div>
                    ))}
                  </div>
                </a>
                
                <div className="h-0 relative w-full">
                  <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                    <img alt="Icons" className="block max-w-none size-full" src="/assets/divider-line.svg" />
                  </div>
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="bg-[#111111] relative rounded-[50px]">
              <div className="box-border flex flex-col items-center justify-center overflow-hidden px-[22px] py-2.5 relative">
                <div 
                  className="font-rethink-sans font-medium text-[15px] text-white tracking-[-0.3px] relative"
                >
                  <p className="leading-[1.5] whitespace-pre">{buttonText}</p>
                </div>
              </div>
              <div className="absolute border border-[#111111] border-solid inset-[-0.5px] pointer-events-none rounded-[50.5px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}