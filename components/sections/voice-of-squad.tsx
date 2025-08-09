'use client'

import Image from 'next/image'
import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'
import useEmblaCarousel from 'embla-carousel-react'
import { SquadMemberCard } from '@/components/ui/squad-member-card'

interface VoiceOfSquadProps {
  locale: Locale
}

const imgImage5 = '/assets/voice-1.png'
const imgImage6 = '/assets/voice-2.png'
const imgImage7 = '/assets/voice-3.png'
const imgImage8 = '/assets/voice-4.png'
const imgImage9 = '/assets/voice-5.png'
const imgImage10 = '/assets/voice-6.png'
const imgArrowIcon = '/assets/arrow-left.svg'

const squadMembers = [
  {
    id: 1,
    name: 'Lina Jelibi',
    classYear: 'Class of 2023',
    image: imgImage5,
    topic: 'Motivation for Applying to Taejae University',
  },
  {
    id: 2,
    name: 'Minwoo Choi',
    classYear: 'Class of 2023',
    image: imgImage6,
    topic: 'How I expanded the scope of knowledge through active learning',
  },
  {
    id: 3,
    name: 'Yijun Kim',
    classYear: 'Class of 2023',
    image: imgImage7,
    topic: 'Reach for the world with knowledge in my hands',
  },
  {
    id: 4,
    name: 'Shahar Bezalel',
    classYear: 'Class of 2023',
    image: imgImage8,
    topic: 'Aspiring to Serve as a Bridge between Eastern and Western Cultures',
  },
  {
    id: 5,
    name: 'Hyein Kim',
    classYear: 'Class of 2023',
    image: imgImage9,
    topic: 'What I Aspire to',
  },
  {
    id: 6,
    name: 'Kevin Kim',
    classYear: 'Class of 2023',
    image: imgImage10,
    topic: 'My Dream',
  },
]

export function VoiceOfSquad({ locale }: VoiceOfSquadProps) {
  const { t } = useTranslation(locale)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
    containScroll: 'trimSnaps',
  })

  const handlePrev = () => {
    if (emblaApi) emblaApi.scrollPrev()
  }

  const handleNext = () => {
    if (emblaApi) emblaApi.scrollNext()
  }

  return (
    <section className="py-20">
      <div className="mx-auto px-4" style={{ maxWidth: `${MAX_CONTENT_WIDTH}px` }}>
        <div className="mb-12 flex justify-between items-end">
          <div className="max-w-[960px]">
            <h2 className="text-5xl md:text-6xl font-medium leading-tight mb-4 font-['Instrument_Sans'] tracking-[-3.2px]">
              The Voice of Taejae Squad
            </h2>
            <p className="text-xl text-gray-600 font-['Instrument_Sans']">
              Quick moment? Meet our brightest minds and discover what it means to be a Taejaest
              under 3 minutes
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-[rgba(238,238,238,0.8)] rounded-[12px] flex items-center justify-center hover:bg-[rgba(238,238,238,1)] transition-colors p-[10px]"
              aria-label="Previous"
            >
              <img src={imgArrowIcon} alt="Previous" className="w-5 h-5 rotate-180" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-[rgba(238,238,238,0.8)] rounded-[12px] flex items-center justify-center hover:bg-[rgba(238,238,238,1)] transition-colors p-[10px]"
              aria-label="Next"
            >
              <img src={imgArrowIcon} alt="Next" className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {squadMembers.map((member) => (
              <SquadMemberCard
                key={member.id}
                name={member.name}
                classYear={member.classYear}
                image={member.image}
                topic={member.topic}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
