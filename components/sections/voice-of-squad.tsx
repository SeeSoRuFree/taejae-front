'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { useState } from 'react'

const imgStudentVideo1 = "http://localhost:3845/assets/59cd4b48515b4d8ecff141034cf10a9004317788.png"
const imgStudentVideo2 = "http://localhost:3845/assets/7d98901b4b160042798cba56a13aa9532428c212.png"
const imgStudentVideo3 = "http://localhost:3845/assets/01086c63e47ea12cad0d4edd37a83c6d58431899.png"
const imgPlayIcon = "http://localhost:3845/assets/5e6d6186390532bc766a9ede66ac36b22d5131d2.svg"

interface VoiceOfSquadProps {
  locale: Locale
}

interface StudentVideo {
  id: string
  name: string
  image: string
  videoUrl?: string
}

export function VoiceOfSquad({ locale }: VoiceOfSquadProps) {
  const { t } = useTranslation(locale)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  const studentVideos: StudentVideo[] = [
    {
      id: '1',
      name: 'Yijun Kim',
      image: imgStudentVideo1
    },
    {
      id: '2', 
      name: 'Yijun Kim',
      image: imgStudentVideo2
    },
    {
      id: '3',
      name: 'Shahar Bezalel',
      image: imgStudentVideo3
    }
  ]

  const handlePlayClick = (videoId: string) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId)
    // TODO: 실제 비디오 재생 로직 추가
  }

  return (
    <section className="flex gap-8 items-start justify-start px-12 py-[100px] w-full max-w-[1920px] mx-auto">
      {/* Left Content - Title and Description */}
      <div className="flex flex-col gap-14 items-start justify-start w-[312px] shrink-0 self-stretch">
        {/* Title */}
        <div className="font-eb-garamond font-normal text-[44px] leading-[1.2] tracking-[-1.32px] text-[#111111] whitespace-nowrap">
          <h1>
            <span>The Voice of<br /></span>
            <span className="text-[#1da597]">Taejae Squad</span>
          </h1>
        </div>

        {/* Description */}
        <div className="font-inter font-normal text-[20px] leading-[1.5] tracking-[-0.6px] text-[#111111] min-w-full">
          <p>
            Quick moment?<br />
            Meet our brightest minds and discover what it means to be a Taejaest under 3 minutes
          </p>
        </div>
      </div>

      {/* Right Content - Video Cards */}
      <div className="basis-0 flex gap-8 grow items-start justify-start min-h-px min-w-px">
        {studentVideos.map((student) => (
          <div
            key={student.id}
            className="flex flex-col gap-5 items-start justify-start relative w-full"
          >
            <div
              className="aspect-[413/734] flex flex-col items-center justify-start overflow-hidden p-8 rounded-[24px] w-full bg-cover bg-center relative"
              style={{ 
                backgroundImage: `url('${student.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              aria-label={`Video of ${student.name}`}
            >
              {/* Gradient Dimmer Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0000004d] from-[63.61%] to-[#000000e6] rounded-[24px]"></div>
              
              {/* Content - Above overlay */}
              <div className="relative z-10 flex flex-col h-full w-full">
                {/* Play Button Container - Centered */}
                <div className="basis-0 flex items-center justify-center grow w-full">
                  <button
                    onClick={() => handlePlayClick(student.id)}
                    className="backdrop-blur-sm bg-[rgba(17,17,17,0.5)] flex items-center justify-center p-3 rounded-full w-[72px] h-[72px] hover:bg-[rgba(17,17,17,0.6)] transition-colors duration-200"
                    aria-label={`Play video of ${student.name}`}
                  >
                    <img alt="" className="block w-8 h-8" src={imgPlayIcon} />
                  </button>
                </div>

                {/* Student Name - At bottom */}
                <div className="font-eb-garamond font-normal text-[24px] leading-[1.3] tracking-[-0.48px] text-white w-full">
                  <p>{student.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}