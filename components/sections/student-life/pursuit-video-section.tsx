'use client'

import Image from 'next/image'

export default function PursuitVideoSection() {
  const handlePlayVideo = () => {
    // TODO: Implement video play functionality
    console.log('Playing pursuit of happiness video')
  }

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[50px] pb-[100px] mobile:px-6 mobile:pb-16">
        <div className="flex gap-[50px] items-center justify-start relative w-full">
          <div className="bg-black h-[302px] overflow-clip relative rounded-[24px] shrink-0 w-full max-w-[1250px] mx-auto">
            {/* Video Background */}
            <div className="absolute bg-[rgba(0,0,0,0.2)] h-[325px] left-0 overflow-clip rounded-[24px] top-0 w-full">
              <Image
                src="/assets/pursuit-video-bg.png"
                alt="Pursuit of happiness video thumbnail"
                fill
                className="object-cover"
                style={{ 
                  backgroundPosition: '0% 0%, 50% 50%',
                  backgroundSize: 'auto, cover'
                }}
              />
            </div>
            
            {/* Play Button */}
            <button
              onClick={handlePlayVideo}
              className="absolute backdrop-blur-sm backdrop-filter bg-[rgba(119,119,119,0.5)] flex items-center justify-center p-3 rounded-full size-[72px] translate-x-[-50%] translate-y-[-50%] hover:bg-[rgba(119,119,119,0.7)] transition-colors"
              style={{ 
                top: "calc(50% + 71.301px)", 
                left: "calc(50% + 565px)"
              }}
              aria-label="Play pursuit of happiness video"
            >
              <div className="overflow-clip relative shrink-0 size-8">
                <Image
                  src="/assets/play-arrow-icon.svg"
                  alt="Play icon"
                  width={32}
                  height={32}
                  className="inset-[15.73%_17.54%_15.73%_18.75%]"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}