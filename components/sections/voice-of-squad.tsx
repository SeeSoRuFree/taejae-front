'use client'

import Image from 'next/image'
import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'

interface VoiceOfSquadProps {
  locale: Locale
}

const imgImage5 = 'http://localhost:3845/assets/c313508bda138d3d0e3deb88e04ae8574a3171b9.png'
const imgImage6 = 'http://localhost:3845/assets/00be3371a2ef2f2055e0831249468fd230d30c95.png'
const imgImage7 = 'http://localhost:3845/assets/7d98901b4b160042798cba56a13aa9532428c212.png'
const imgImage8 = 'http://localhost:3845/assets/01086c63e47ea12cad0d4edd37a83c6d58431899.png'
const imgImage9 = 'http://localhost:3845/assets/5c233a7be586c7be57b4a2a05547d88b69ff1dc9.png'
const imgImage10 = 'http://localhost:3845/assets/b09425c63da7d56d2db17fd6eb397f9448683bad.png'

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
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : squadMembers.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < squadMembers.length - 1 ? prev + 1 : 0))
  }

  return (
    <section className="py-20">
      <div className="mx-auto px-4" style={{ maxWidth: `${MAX_CONTENT_WIDTH}px` }}>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl md:text-6xl font-medium leading-tight mb-4">
              The Voice of Taejae Squad
            </h2>
            <p className="text-xl text-gray-600">
              Quick moment? Meet our brightest minds and discover what it means to be a Taejaest
              under 3 minutes
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="bg-gray-200/80 rounded-xl p-3 hover:bg-gray-300/80 transition-colors"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-200/80 rounded-xl p-3 hover:bg-gray-300/80 transition-colors"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 282}px)` }}
          >
            {squadMembers.map((member) => (
              <div key={member.id} className="flex-shrink-0 w-[262px] flex flex-col gap-5">
                <div
                  className="aspect-square rounded-3xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-lg text-gray-600">{member.classYear}</p>
                </div>
                <p className="text-base leading-relaxed">{member.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
