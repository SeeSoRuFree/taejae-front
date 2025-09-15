'use client'

import Image from 'next/image'

interface LeaderCardProps {
  name: string
  title: string
  image: string
  onViewDetails?: () => void
}

export default function LeaderCard({ name, title, image, onViewDetails }: LeaderCardProps) {
  return (
    <div className="bg-[#111111] flex items-center justify-between overflow-clip relative rounded-[24px] shrink-0 w-full">
      <div className="flex h-[268px] items-center justify-between relative shrink-0 w-full max-w-[1344px] mx-auto">
        <div className="box-border flex flex-col h-[268px] items-start justify-start px-12 py-16 relative shrink-0 w-full max-w-[750px] mobile:h-auto mobile:px-6 mobile:py-8">
          <div className="basis-0 flex flex-col grow items-center justify-between min-h-px min-w-px relative shrink-0 mobile:items-start mobile:justify-start mobile:gap-4">
            <div className="flex flex-col gap-1 items-start justify-start leading-[0] relative shrink-0 w-full">
              <h2 className="font-eb-garamond font-semibold relative shrink-0 text-[32px] text-white tracking-[-0.64px] leading-[1.3] whitespace-pre-wrap mobile:text-xl">
                {name}
              </h2>
              <p className="font-rethink-sans font-medium relative shrink-0 text-[#d8d8d8] text-[18px] tracking-[-0.36px] leading-[1.5] whitespace-pre-wrap mobile:text-sm">
                {title}
              </p>
            </div>
          </div>
          <button 
            onClick={onViewDetails}
            className="backdrop-blur-sm backdrop-filter bg-[rgba(68,68,68,0.7)] flex items-center justify-center relative rounded-full shrink-0 size-14 hover:bg-[rgba(68,68,68,0.9)] transition-colors mobile:size-12"
            aria-label={`View details for ${name}`}
          >
            <span 
              className="font-sans font-normal relative shrink-0 text-[20px] text-white tracking-[-1px] leading-[1.21] mobile:text-lg"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              →
            </span>
          </button>
        </div>
        
        {/* Image with Gradient Overlay */}
        <div className="absolute top-0 right-0 h-[268px] w-[594px] overflow-clip hidden md:block">
          {/* Background Image - always sticks to right and fills height */}
          <div 
            className="absolute h-full w-[400px] top-0 right-0 bg-center bg-cover z-0"
            style={{ backgroundImage: `url('${image}')` }}
          />
          {/* Gradient Fade Effect - positioned to overlap with image */}
          <div 
            className="absolute top-0 h-full w-[300px] z-10" 
            style={{ 
              right: '200px',
              background: 'linear-gradient(to right, #111111 0%, #111111 50%, transparent 100%)' 
            }}
          />
        </div>
      </div>
    </div>
  )
}