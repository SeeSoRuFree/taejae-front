'use client'

import Image from 'next/image'
import { useState } from 'react'

interface BoardMemberCardProps {
  name: string
  role: string
  image: string
  hasVideo?: boolean
  onVideoPlay?: () => void
}

export default function BoardMemberCard({
  name,
  role,
  image,
  hasVideo = false,
  onVideoPlay
}: BoardMemberCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <div className="flex flex-col max-w-[434px] w-full">
      <div className="relative aspect-[305/301] w-full overflow-hidden group cursor-pointer" onClick={onVideoPlay}>
        <Image
          src={image}
          alt={`Portrait of ${name}`}
          fill
          className="object-cover"
          onLoad={() => setIsImageLoaded(true)}
        />
        
        {/* Video Overlay - shows on hover for all members */}
        <div className="absolute inset-0 bg-purple-700/80 flex flex-col justify-between p-8 mobile:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Name and Role */}
          <div className="flex flex-col gap-1">
            <h2 className="font-eb-garamond text-[36px] mobile:text-[28px] font-semibold text-white leading-[1.3] tracking-[-0.72px] mobile:tracking-[-0.56px]">
              {name}
            </h2>
            <p className="font-rethink-sans text-[24px] mobile:text-[18px] font-medium text-gray-200 leading-[1.5] tracking-[-0.48px] mobile:tracking-[-0.36px]">
              {role}
            </p>
          </div>
          
          {/* Play Button */}
          <div className="self-start">
            <div className="w-14 h-14 mobile:w-12 mobile:h-12 flex items-center justify-center bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
              <div className="font-sans font-normal text-[20px] text-white tracking-[-1px] leading-[1.21]">
                →
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-[100px] mobile:h-[80px] flex flex-col justify-between py-4 mobile:py-3">
        <div className="flex flex-col gap-1">
          <h3 className="font-eb-garamond text-[24px] mobile:text-[20px] font-normal text-[#111111] leading-[1.3] tracking-[-0.48px] mobile:tracking-[-0.4px]">
            {name}
          </h3>
          <p className="font-rethink-sans text-[16px] mobile:text-[14px] font-normal text-[#111111] leading-[1.5]">
            {role}
          </p>
        </div>
      </div>
    </div>
  )
}
