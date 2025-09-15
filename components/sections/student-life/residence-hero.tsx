'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { useTranslation } from '@/lib/translations'
import koMessages from '@/messages/ko.json'
import enMessages from '@/messages/en.json'

interface ImageCardProps {
  backgroundImage: string
  overlayImage: string
  overlayPosition: {
    width: string
    height: string
    left: string
    top: string
  }
}

function ImageCard({ backgroundImage, overlayImage, overlayPosition }: ImageCardProps) {
  return (
    <div 
      className="relative w-[480px] h-80 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.9)] from-[63.61%] overflow-hidden mobile:w-full mobile:h-64"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 63.61%, rgba(0,0,0,0.9)), url('${backgroundImage}')`,
        backgroundSize: 'auto, cover',
        backgroundPosition: '0% 0%, 50% 50%'
      }}
      aria-label="Residence life photo"
    >
      <div 
        className="absolute bg-center bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url('${overlayImage}')`,
          width: overlayPosition.width,
          height: overlayPosition.height,
          left: overlayPosition.left,
          top: overlayPosition.top
        }}
      />
    </div>
  )
}

export default function ResidenceHeroSection() {
  const { locale } = useLocaleStore()
  
  // Direct access to translation data
  const messages = locale === 'ko' ? koMessages : enMessages
  const residenceData = messages.studentLife?.residence || {
    title: 'Residence',
    subtitle: {
      question: 'No Campus at Taejae University?',
      answer: 'Think again.'
    },
    description: "Taejae University is a hybrid university\nwhere students experience a four-year journey that blends both online and offline learning. While academic courses are delivered online, all students live together in shared residences from admission to graduation.  These dormitories are the very campus of Taejae University.\nThroughout their studies, students rotate across seven cities in five countries—\nKorea, the United States, China, Russia, and Japan—\nresiding in partner universities' dormitories or nearby residential facilities.  They don't just take classes—they live, learn, and grow together.\nMuch of the learning at Taejae is team-based.\nStudents engage in group discussions, tackle assignments collaboratively, and design and implement Civic Projects that address real-world issues.\n\nBeyond academics they cook and dine together, join clubs with peers who share similar interests, and participate in sports and other activities.\n \nThrough this immersive community life, students develop vital competencies such as social relationships, communication skills, and—most crucially for the future—integrative problem-solving abilities.\n \nThe bonds formed through four years of shared experiences create a strong sense of collective identity and lasting friendships. \nThis is what we call the Taejae Spirit—a lifelong source of support for our graduates, wherever their paths may lead."
  }

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[50px] py-[100px] mobile:px-6 mobile:py-16">
        <div className="flex flex-col gap-16 items-start justify-start relative w-full">
          
          {/* Title Section */}
          <div className="flex items-start justify-start py-2.5 relative w-full">
            <div className="flex flex-col gap-5 items-start justify-start max-w-[720px] relative">
              <h1 className="font-eb-garamond font-normal text-black text-[64px] leading-[1.1] tracking-[-1.28px] w-full mobile:text-4xl">
                {residenceData.title}
              </h1>
              <div className="font-eb-garamond font-normal text-[48px] leading-normal w-full mobile:text-3xl">
                <p className="mb-0 text-[#1da597]">{residenceData.subtitle.question}</p>
                <p className="mb-0 text-[#111111]">{residenceData.subtitle.answer}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex gap-44 items-start justify-start relative shrink-0 w-full mobile:flex-col mobile:gap-12">
            
            {/* Text Content */}
            <div className="box-border flex gap-20 items-center justify-start px-0 py-2.5 relative shrink-0 w-[685px] mobile:w-full">
              <div className="flex flex-row items-center self-stretch">
                <div className="flex gap-11 h-full items-center justify-start relative shrink-0">
                  <div className="font-rethink-sans font-normal leading-[1.5] max-w-[685px] relative shrink-0 text-[#111111] text-[20px] tracking-[-0.6px] mobile:text-lg mobile:max-w-none">
                    {typeof residenceData.description === 'string' ? (
                      <div dangerouslySetInnerHTML={{ __html: residenceData.description.replace(/\n/g, '<br>') }} />
                    ) : (
                      residenceData.description.map((paragraph: string, index: number) => (
                        <p key={index} className="mb-0">
                          {paragraph}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="flex flex-col gap-5 items-end justify-start relative shrink-0 w-[480px] mobile:w-full mobile:items-center">
              <div className="relative w-full h-80 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.9)] from-[63.61%] overflow-hidden mobile:h-64 tablet:h-72">
                <div 
                  className="absolute bg-center bg-cover bg-no-repeat h-[412px] left-[-69px] top-[-46px] w-[618px] tablet:w-[500px] tablet:h-[350px] tablet:left-[-50px] tablet:top-[-30px]"
                  style={{ backgroundImage: `url('/assets/residence-image1.png')` }}
                />
              </div>
              
              <div className="relative w-full h-80 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.9)] from-[63.61%] overflow-hidden mobile:h-64 tablet:h-72">
                <div 
                  className="absolute bg-center bg-cover bg-no-repeat h-[412px] left-[-69px] top-[-46px] w-[618px] tablet:w-[500px] tablet:h-[350px] tablet:left-[-50px] tablet:top-[-30px]"
                  style={{ backgroundImage: `url('/assets/residence-image2.png')` }}
                />
              </div>
              
              <div className="relative w-full h-80 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.9)] from-[63.61%] overflow-hidden mobile:h-64 tablet:h-72">
                <div 
                  className="absolute bg-center bg-cover bg-no-repeat h-[379px] left-[-44px] top-[-39px] w-[568px] tablet:w-[480px] tablet:h-[320px] tablet:left-[-30px] tablet:top-[-25px]"
                  style={{ backgroundImage: `url('/assets/residence-image3.png')` }}
                />
              </div>
              
              <div className="relative w-full h-80 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.9)] from-[63.61%] overflow-hidden mobile:h-64 tablet:h-72">
                <div 
                  className="absolute bg-center bg-cover bg-no-repeat h-[412px] left-[-69px] top-[-92px] w-[618px] tablet:w-[500px] tablet:h-[350px] tablet:left-[-50px] tablet:top-[-60px]"
                  style={{ backgroundImage: `url('/assets/residence-image4.png')` }}
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}