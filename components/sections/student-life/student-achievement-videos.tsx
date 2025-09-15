'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { useTranslation } from '@/lib/translations'
import MovieCard from '@/components/ui/movie-card'
import Image from 'next/image'

export default function StudentAchievementVideos() {
  const locale = useLocaleStore((state) => state.locale)
  const { t } = useTranslation(locale)

  const handlePlayVideo = (videoId: string) => {
    // TODO: Implement video play functionality
    console.log('Playing video:', videoId)
  }

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[50px] pb-[100px] mobile:px-6 mobile:pb-16">
        <div className="flex flex-col gap-14 items-start justify-center relative w-full">
          <MovieCard
            title={t('academics.studentLife.studentAchievement.videos.first.title')}
            description={t('academics.studentLife.studentAchievement.videos.first.description')}
            onPlay={() => handlePlayVideo('first')}
          />
          
          <MovieCard
            title={t('academics.studentLife.studentAchievement.videos.second.title')}
            description={t('academics.studentLife.studentAchievement.videos.second.description')}
            onPlay={() => handlePlayVideo('second')}
          />
        </div>
      </div>
      
      {/* Dividers */}
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.53px] left-0 right-0 top-[-0.53px]">
          <Image 
            src="/assets/divider.svg" 
            alt="" 
            width={1920} 
            height={1} 
            className="block max-w-none w-full h-auto"
          />
        </div>
      </div>
      
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.53px] left-0 right-0 top-[-0.53px]">
          <Image 
            src="/assets/divider.svg" 
            alt="" 
            width={1920} 
            height={1} 
            className="block max-w-none w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}