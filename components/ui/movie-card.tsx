'use client'

interface MovieCardProps {
  title: string
  description: string
  imageUrl?: string
  onPlay?: () => void
}

export default function MovieCard({ title, description, imageUrl, onPlay }: MovieCardProps) {
  return (
    <div className="bg-[#111111] flex items-center justify-between overflow-clip relative rounded-[24px] shrink-0 w-full">
      <div className="flex h-[268px] items-center justify-between relative shrink-0 w-full mobile:h-auto mobile:flex-col">
        <div className="box-border flex flex-col h-[328px] items-start justify-start px-12 py-16 relative shrink-0 w-full max-w-[750px] mobile:h-auto mobile:px-6 mobile:py-8">
          <div className="basis-0 flex flex-col grow items-center justify-between min-h-px min-w-px relative shrink-0 mobile:items-start mobile:justify-start mobile:gap-4">
            <div className="flex flex-col gap-1 items-start justify-start leading-[0] relative shrink-0 w-full">
              <h2 className="font-eb-garamond font-semibold relative shrink-0 text-[24px] md:text-[32px] text-white tracking-[-0.64px] leading-[1.3] whitespace-pre-wrap mobile:text-xl">
                {title}
              </h2>
              <p className="font-rethink-sans font-medium relative shrink-0 text-[#d8d8d8] text-[16px] md:text-[18px] tracking-[-0.36px] leading-[1.5] whitespace-pre-wrap mobile:text-sm">
                {description}
              </p>
            </div>
          </div>
          <button 
            onClick={onPlay}
            className="backdrop-blur-sm backdrop-filter bg-[rgba(68,68,68,0.7)] flex items-center justify-center relative rounded-full shrink-0 size-14 hover:bg-[rgba(68,68,68,0.9)] transition-colors mobile:size-12"
            aria-label="Play video"
          >
            <span className="font-sans font-normal relative shrink-0 text-[20px] text-white tracking-[-1px] leading-[1.21] mobile:text-lg">
              →
            </span>
          </button>
        </div>
        {imageUrl && (
          <div className="h-[328px] shrink-0 w-[594px] hidden md:block">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  )
}