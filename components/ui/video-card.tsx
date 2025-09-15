'use client'

import Image from 'next/image'
import PlayButton from './play-button'

interface VideoCardProps {
  thumbnailUrl: string
  videoUrl?: string
  altText: string
  onPlay?: () => void
  className?: string
}

export default function VideoCard({
  thumbnailUrl,
  videoUrl,
  altText,
  onPlay,
  className = '',
}: VideoCardProps) {
  const handlePlay = () => {
    if (onPlay) {
      onPlay()
    } else if (videoUrl) {
      window.open(videoUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div
      className={`
        relative w-full h-[372px] min-h-[240px] min-w-[248px]
        rounded-[24px] overflow-hidden
        group cursor-pointer
        ${className}
      `}
      onClick={handlePlay}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handlePlay()
        }
      }}
      aria-label={`비디오 재생: ${altText}`}
    >
      <Image
        src={thumbnailUrl}
        alt={altText}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-200" />

      <PlayButton onClick={() => handlePlay()} className="group-hover:scale-110" />
    </div>
  )
}
