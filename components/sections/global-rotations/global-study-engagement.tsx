'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLocaleStore } from '@/lib/store/locale-store'
import { useTranslation } from '@/lib/translations'

interface VideoCardProps {
  id: string
  thumbnail: string
  overlayImage?: string
  title: string
  onPlay: () => void
}

function VideoCard({ thumbnail, overlayImage, title, onPlay }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full h-[460px] bg-cover bg-center overflow-hidden cursor-pointer group"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 63.61%, rgba(0,0,0,0.9)), url('${thumbnail}')`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onPlay}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onPlay()
        }
      }}
      aria-label={`Play video: ${title}`}
    >
      
      <div 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] backdrop-blur-sm bg-black/50 rounded-full flex items-center justify-center transition-transform duration-200 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      >
        <Image
          src="/assets/play-arrow-white.svg"
          alt="Play"
          width={32}
          height={32}
          className="text-white"
        />
      </div>
      
      <div className="absolute bottom-10 left-10 right-10">
        <h3 className="font-eb-garamond text-[32px] text-white leading-normal">
          {title}
        </h3>
      </div>
    </div>
  )
}

interface ProgramCardProps {
  title: string
  highlightedWord: string
  description: string[]
  videos?: {
    id: string
    title: string
    thumbnail: string
    overlayImage?: string
  }[]
}

function ProgramCard({ title, highlightedWord, description, videos }: ProgramCardProps) {
  const handleVideoPlay = (videoId: string) => {
    console.log('Playing video:', videoId)
  }

  // If no videos, use full width layout for text
  if (!videos || videos.length === 0) {
    return (
      <div className="w-full flex flex-col gap-16">
        <div className="py-2.5">
          <div className="max-w-[720px]">
            <h2 className="font-eb-garamond text-2xl md:text-4xl lg:text-[48px] leading-[1.1] text-gray-900 tracking-[-0.96px]">
              <span>{title.replace(highlightedWord, '').trim()} </span>
              <span className="text-teal-600">{highlightedWord}</span>
            </h2>
          </div>
        </div>
        
        <div className="w-full font-rethink-sans text-[22px] leading-[1.5] text-gray-900 tracking-[-0.66px]">
          {description.map((paragraph, index) => (
            <p key={index} className="mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    )
  }

  // Layout with videos
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-[119px] items-start">
      <div className="w-full lg:w-[582px] flex flex-col gap-16">
        <div className="py-2.5">
          <div className="max-w-[720px]">
            <h2 className="font-eb-garamond text-2xl md:text-4xl lg:text-[48px] leading-[1.1] text-gray-900 tracking-[-0.96px]">
              <span>{title.replace(highlightedWord, '').trim()} </span>
              <span className="text-teal-600">{highlightedWord}</span>
            </h2>
          </div>
        </div>
        
        <div className="flex flex-col gap-6 font-rethink-sans text-[22px] leading-[1.5] text-gray-900 tracking-[-0.66px]">
          {description.map((paragraph, index) => (
            <p key={index} className="mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      
      <div className="w-full lg:w-[640px] flex flex-col gap-6 lg:pt-[140px]">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            thumbnail={video.thumbnail}
            overlayImage={video.overlayImage}
            title={video.title}
            onPlay={() => handleVideoPlay(video.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default function GlobalStudyEngagementSection() {
  const { locale } = useLocaleStore()
  const { t } = useTranslation(locale)
  
  const globalStudyData = t('academics.globalRotations.experientialLearning.globalStudyEngagement')
  const europeData = t('academics.globalRotations.experientialLearning.europeGrandTour')

  const videoData = [
    {
      id: 'gse-video-1',
      title: globalStudyData.videoTitles[0],
      thumbnail: '/assets/global-study-video1-overlay.png',
      overlayImage: undefined
    },
    {
      id: 'gse-video-2', 
      title: globalStudyData.videoTitles[1],
      thumbnail: '/assets/global-study-video2-overlay.png',
      overlayImage: undefined
    }
  ]

  return (
    <>
      <section className="w-full bg-white">
        <div className="max-w-[1920px] mx-auto px-[50px] py-[100px] mobile:px-6 mobile:py-16">
          <div className="flex flex-col gap-[100px] items-center justify-start relative w-full">
            <ProgramCard
              title={globalStudyData.title}
              highlightedWord="Study and Engagement"
              description={globalStudyData.description}
              videos={videoData}
            />
            
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[1340px]">
                <ProgramCard
                  title={europeData.title}
                  highlightedWord="Grand Tour"
                  description={europeData.description}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Europe Grand Tour Image Section - Full Width */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-center bg-cover bg-no-repeat mb-[150px]" 
           style={{ backgroundImage: `url('/assets/europe-grand-tour-bg.png')` }}>
      </div>
    </>
  )
}