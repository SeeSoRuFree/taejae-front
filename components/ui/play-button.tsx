'use client'

import Image from 'next/image'

interface PlayButtonProps {
  onClick?: () => void
  className?: string
  'aria-label'?: string
}

export default function PlayButton({
  onClick,
  className = '',
  'aria-label': ariaLabel = '비디오 재생',
}: PlayButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        flex items-center justify-center
        w-[72px] h-[72px] p-3
        bg-[rgba(17,17,17,0.5)] backdrop-blur-sm rounded-full
        transition-all duration-200 ease-out
        hover:bg-[rgba(17,17,17,0.7)] hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/20
        active:scale-95
        ${className}
      `}
    >
      <Image src="/assets/play-arrow-icon.svg" alt="" width={32} height={32} className="w-8 h-8" />
    </button>
  )
}
