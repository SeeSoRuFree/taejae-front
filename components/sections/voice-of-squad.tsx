'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { useState } from 'react'
import Image from 'next/image'

const imgStudentVideo1 = '/images/student-video-1.png'
const imgStudentVideo2 = '/images/student-video-2.png'
const imgStudentVideo3 = '/images/student-video-3.png'
const imgPlayIcon = '/images/play-icon.svg'

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
      image: imgStudentVideo1,
    },
    {
      id: '2',
      name: 'Yijun Kim',
      image: imgStudentVideo2,
    },
    {
      id: '3',
      name: 'Shahar Bezalel',
      image: imgStudentVideo3,
    },
  ]

  const handlePlayClick = (videoId: string) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId)
    // TODO: 실제 비디오 재생 로직 추가
  }

  return (
    <section className="flex gap-8 items-start justify-start px-12 py-24 w-full max-w-[1440px] mx-auto">
      {/* Left Content - Title and Description */}
      <div className="flex flex-col gap-14 items-start justify-start w-[312px] shrink-0 self-stretch">
        {/* Title */}
        <div className="font-eb-garamond font-normal text-[44px] leading-[1.2] tracking-[-1.32px] text-[#111111] whitespace-nowrap">
          <h1>
            <span>
              The Voice of
              <br />
            </span>
            <span className="text-[#1da597]">Taejae Squad</span>
          </h1>
        </div>

        {/* Description */}
        <div className="font-inter font-normal text-[20px] leading-[1.5] tracking-[-0.6px] text-[#111111] min-w-full">
          <p>
            Quick moment?
            <br />
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
              className="aspect-[413/734] flex flex-col items-center justify-start overflow-hidden p-8 rounded-[24px] w-full relative"
              aria-label={`Video of ${student.name}`}
            >
              {/* Background Image */}
              <Image
                src={student.image}
                alt={`Video thumbnail of ${student.name}`}
                fill
                className="object-cover rounded-[24px]"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
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
                    <Image
                      alt="Play icon"
                      className="block w-8 h-8"
                      src={imgPlayIcon}
                      width={32}
                      height={32}
                    />
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
