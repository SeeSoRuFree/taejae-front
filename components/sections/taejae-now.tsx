'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { memo } from 'react'
import Image from 'next/image'

const imgNews1 = '/images/news-1.png'
const imgNews2 = '/images/news-2.png'
const imgNews3 = '/images/news-3.png'

interface TaejaeNowProps {
  locale: Locale
}

interface NewsItem {
  id: string
  title: string
  date: string
  image: string
}

const NewsCard = memo(function NewsCard({ item }: { item: NewsItem }) {
  return (
    <div className="basis-0 flex flex-col gap-5 grow items-start justify-start min-h-px min-w-px relative">
      {/* News Image */}
      <div className="aspect-[413.333/239.799] min-h-[143.88px] min-w-[248px] rounded-[24px] w-full overflow-hidden relative">
        <Image
          src={item.image}
          alt={`News image for ${item.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
        />
      </div>

      {/* News Content */}
      <div className="flex flex-col gap-2 items-start justify-center w-full">
        {/* Title */}
        <div className="font-eb-garamond font-normal text-[24px] leading-[1.3] tracking-[-0.48px] text-[#111111] w-full">
          <h3>{item.title}</h3>
        </div>

        {/* Date */}
        <div className="font-inter font-normal text-[16px] leading-[1.5] text-[#5b5b5b] w-full">
          <p>{item.date}</p>
        </div>
      </div>
    </div>
  )
})

export function TaejaeNow({ locale }: TaejaeNowProps) {
  const { t } = useTranslation(locale)

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title:
        "President Yeom Jae-ho attends the 'Digital Universities Asia 2025' conference as a panelist.",
      date: 'Jul 17. 2025',
      image: imgNews1,
    },
    {
      id: '2',
      title: 'The fellowship of Oxford x Stanford x Taejae continues',
      date: 'Jul 17. 2025',
      image: imgNews2,
    },
    {
      id: '3',
      title: 'First place winners in CHI 2025!',
      date: 'Jul 17. 2025',
      image: imgNews3,
    },
  ]

  return (
    <section className="flex flex-col gap-12 items-end justify-end px-12 py-24 w-full max-w-[1440px] mx-auto">
      {/* Header with Title and Learn More Button */}
      <div className="flex items-end justify-between w-full">
        {/* Title */}
        <div className="font-eb-garamond font-normal text-[44px] leading-[1.2] tracking-[-1.32px] text-[#111111] whitespace-nowrap">
          <h1>
            <span>Taejae </span>
            <span className="text-[#1da597]">Now</span>
          </h1>
        </div>

        {/* Learn More Button */}
        <div className="bg-white rounded-[50px] relative">
          <div className="flex flex-col items-center justify-center overflow-hidden px-[22px] py-2.5">
            <div className="font-inter font-medium text-[15px] leading-[1.5] tracking-[-0.3px] text-[#111111] whitespace-nowrap">
              Learn more
            </div>
          </div>
          <div className="absolute border border-neutral-200 inset-[-0.5px] pointer-events-none rounded-[50.5px]" />
        </div>
      </div>

      {/* News Cards Grid */}
      <div className="flex gap-8 items-start justify-start w-full">
        {newsItems.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
