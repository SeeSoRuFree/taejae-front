'use client'

import Image from 'next/image'
import VideoCard from '@/components/ui/video-card'
import { useTranslation } from '@/lib/translations'
import { useLocaleStore } from '@/lib/store/locale-store'

interface VideoTestimonial {
  id: string
  thumbnailUrl: string
  videoUrl?: string
  altText: string
  studentName?: string
  program?: string
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 'video-1',
    thumbnailUrl: '/assets/voice-of-squad-video1.png',
    altText: 'Photo of a man in a room using a tablet computer',
    studentName: 'Taejae Student',
    program: 'Interdisciplinary Studies',
  },
  {
    id: 'video-2',
    thumbnailUrl: '/assets/voice-of-squad-video2.png',
    altText: 'Student sharing insights about global campus experience',
    studentName: 'Taejae Student',
    program: 'Global Program',
  },
]

export default function VoiceOfSquadSection() {
  const locale = useLocaleStore((state) => state.locale)
  const { t } = useTranslation(locale)

  const handleVideoPlay = (video: VideoTestimonial) => {
    // TODO: Implement video modal or navigation
    console.log('Playing video:', video.id)
    // For now, could open in a modal or redirect to video page
  }

  return (
    <section
      className="
        relative w-full
        flex flex-col items-center justify-start
        pt-[100px] pb-40 px-[50px]
        bg-white/90 bg-blend-overlay
        tablet:px-8 tablet:pt-20 tablet:pb-20
        mobile:px-5 mobile:pt-16 mobile:pb-16
      "
      style={{
        backgroundImage: `url('/assets/voice-of-squad-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-[1820px] flex flex-col gap-[100px] tablet:gap-20 mobile:gap-12">
        {/* Title Section */}
        <div className="w-full flex items-start justify-start px-0 py-2.5">
          <div className="flex-1 flex flex-col gap-11 tablet:gap-8 mobile:gap-6">
            <h2
              className="
              font-eb-garamond font-normal text-[44px] leading-[1.1] tracking-[-0.88px]
              text-[#111111] max-w-[1040px]
              tablet:text-[36px] tablet:tracking-[-0.72px]
              mobile:text-[28px] mobile:tracking-[-0.56px]
            "
            >
              {t('academics.whatLearn.voiceOfSquad.title')}
            </h2>
          </div>
        </div>

        {/* Description Section */}
        <div className="w-full flex gap-[339px] tablet:gap-20 mobile:gap-0">
          <div className="flex-1 max-w-[840px] flex flex-col gap-14 tablet:gap-8 mobile:gap-6">
            <div className="w-full flex flex-col gap-2">
              <p
                className="
                font-rethink-sans font-normal text-[22px] leading-[1.5] tracking-[-0.66px]
                text-[#111111]
                tablet:text-[18px] tablet:tracking-[-0.54px]
                mobile:text-[16px] mobile:tracking-[-0.48px]
              "
              >
                {t('academics.whatLearn.voiceOfSquad.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Video Cards */}
        <div
          className="w-full grid grid-cols-2 gap-8 
                        desktop:grid-cols-2 desktop:gap-8
                        tablet:grid-cols-2 tablet:gap-6  
                        mobile:grid-cols-1 mobile:gap-4"
        >
          {videoTestimonials.map((video) => (
            <VideoCard
              key={video.id}
              thumbnailUrl={video.thumbnailUrl}
              altText={video.altText}
              onPlay={() => handleVideoPlay(video)}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
