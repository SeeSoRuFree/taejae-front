'use client'

import Image from 'next/image'

interface ActivityCardProps {
  title: string
  image: string
  imageAlt?: string
}

export default function ActivityCard({ title, image, imageAlt }: ActivityCardProps) {
  return (
    <div className="flex flex-col items-start justify-start relative w-full max-w-[402px]">
      {/* Image Container */}
      <div className="aspect-[305/301] overflow-clip relative shrink-0 w-full">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Caption */}
      <div className="flex flex-col h-[70px] items-start justify-between relative shrink-0 w-full">
        <div className="box-border flex flex-col gap-[30px] items-start justify-start px-0 py-4 relative shrink-0 w-full">
          <div className="flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
            <h3 className="font-eb-garamond font-normal leading-[1.3] relative shrink-0 text-[#111111] text-[24px] tracking-[-0.48px] w-full">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}