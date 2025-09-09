'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { useState } from 'react'

interface GlobalCampusesProps {
  locale: Locale
}

interface CampusLocation {
  id: string
  country: string
  city: string
  position: { x: string; y: string }
  isActive?: boolean
}

const imgWorldMap = "http://localhost:3845/assets/4d9f1f847e2a6afb7f21a4939275f0313a05faad.svg"
const imgLocationIcon1 = "http://localhost:3845/assets/1ad2a0db83b6064f41250af237ae625fcdca57a4.svg"
const imgLocationIcon2 = "http://localhost:3845/assets/a54297e7d0006e935513f815dac205f945d76640.svg"

export function GlobalCampuses({ locale }: GlobalCampusesProps) {
  const { t } = useTranslation(locale)
  
  const [selectedCampus, setSelectedCampus] = useState<CampusLocation>({
    id: 'ny',
    country: 'USA',
    city: 'New York',
    position: { x: '60.56%', y: '14.5%' },
    isActive: true
  })

  const campusLocations: CampusLocation[] = [
    {
      id: 'ny',
      country: 'USA', 
      city: 'New York',
      position: { x: '60.56%', y: '14.5%' }
    },
    {
      id: 'europe1',
      country: 'Europe',
      city: 'Central', 
      position: { x: '51.49%', y: '21.5%' }
    },
    {
      id: 'europe2',
      country: 'Europe',
      city: 'Western',
      position: { x: '47.25%', y: '21.5%' }
    },
    {
      id: 'europe3',
      country: 'Europe',
      city: 'Eastern',
      position: { x: '44.12%', y: '34.25%' }
    },
    {
      id: 'europe4',
      country: 'Europe',
      city: 'Northern',
      position: { x: '43.23%', y: '21%' }
    },
    {
      id: 'asia',
      country: 'Asia',
      city: 'Pacific',
      position: { x: '72.47%', y: '15.75%' }
    }
  ]

  const handleMarkerClick = (campus: CampusLocation) => {
    setSelectedCampus(campus)
  }

  return (
    <section className="flex flex-col gap-20 items-center justify-start px-12 py-[100px] w-full max-w-[1920px] mx-auto">
      {/* Title */}
      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
        <h1 className="font-eb-garamond font-normal text-[44px] leading-[1.2] tracking-[-1.32px] text-[#111111] w-full">
          <span>Explore Our Campuses <br /></span>
          <span className="text-[#1da597]">Around the World and Grow Endlessly</span>
        </h1>
      </div>

      {/* World Map Container */}
      <div className="relative w-full max-w-[1200px] h-[400px] flex items-center justify-center">
        {/* World Map Image */}
        <div className="relative w-full h-full">
          <img 
            src={imgWorldMap} 
            alt="World map showing global campus locations"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Location Markers */}
        {campusLocations.map((campus) => (
          <button
            key={campus.id}
            onClick={() => handleMarkerClick(campus)}
            className="absolute w-12 h-12 bg-[#512d83] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#6a3d91] transition-colors duration-300 z-10 p-3"
            style={{
              left: campus.position.x,
              top: campus.position.y,
              transform: 'translate(-50%, -50%)'
            }}
            aria-label={`${campus.city}, ${campus.country}`}
          >
            <div className="relative w-6 h-6 overflow-hidden">
              <div className="absolute bottom-[5.72%] flex items-center justify-center left-[2.86%] right-[2.86%] top-0">
                <div className="flex-none rotate-[225deg] w-4 h-4">
                  <img alt="" className="block max-w-none w-full h-full" src={imgLocationIcon1} />
                </div>
              </div>
              <div className="absolute flex inset-[41.67%_43.75%_45.83%_43.75%] items-center justify-center">
                <div className="flex-none rotate-[90deg] w-[3px] h-[3px]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgLocationIcon2} />
                </div>
              </div>
            </div>
          </button>
        ))}

        {/* Campus Info Tag */}
        {selectedCampus && (
          <div 
            className="absolute bg-[#111111] rounded-[100px] flex gap-4 items-center justify-start pl-4 pr-5 py-4 z-20 pointer-events-none"
            style={{
              left: selectedCampus.position.x,
              top: `calc(${selectedCampus.position.y} + 60px)`,
              transform: 'translateX(-50%)'
            }}
          >
            {/* Location Icon in Tag */}
            <div className="bg-[#512d83] rounded-full p-3 flex items-center justify-center">
              <div className="relative w-6 h-6 overflow-hidden">
                <div className="absolute bottom-[5.72%] flex items-center justify-center left-[2.86%] right-[2.86%] top-0">
                  <div className="flex-none rotate-[225deg] w-4 h-4">
                    <img alt="" className="block max-w-none w-full h-full" src={imgLocationIcon1} />
                  </div>
                </div>
                <div className="absolute flex inset-[41.67%_43.75%_45.83%_43.75%] items-center justify-center">
                  <div className="flex-none rotate-[90deg] w-[3px] h-[3px]">
                    <img alt="" className="block max-w-none w-full h-full" src={imgLocationIcon2} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col items-start justify-start pr-6">
              <div className="font-inter font-semibold text-[12px] leading-[16px] text-white/50 min-w-max">
                {selectedCampus.country}
              </div>
              <div className="font-inter font-semibold text-[16px] leading-[24px] text-white whitespace-nowrap">
                Pace University, {selectedCampus.city}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}