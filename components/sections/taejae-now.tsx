'use client'

import Image from 'next/image'
import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'
import { AdaptiveCarousel } from '@/components/ui/adaptive-carousel'

interface TaejaeNowProps {
  locale: Locale
}

const imgImage11 = '/assets/taejae-now-1.png'
const imgImage12 = '/assets/taejae-now-2.png'
const imgImage13 = '/assets/taejae-now-3.png'

const newsItems = [
  {
    id: 1,
    title:
      "President Yeom Jae-ho attends the 'Digital Universities Asia 2025' conference as a panelist.",
    date: 'Jul 17. 2025',
    image: imgImage11,
    excerpt:
      'President Yeom Jae-ho of Taejae attended an event held at Lingnan University in Hong Kong from July 8-9.',
  },
  {
    id: 2,
    title: 'The fellowship of Oxford x Stanford x Taejae continues',
    date: 'Mar 20. 2025',
    image: imgImage12,
    excerpt:
      'Taejae University has selected eight students to participate in the 2025 Oxford-Stanford-Taejae Fellowship (OST Fellowship) program and held an congratulatory ceremony on March 17, 2025.',
  },
  {
    id: 3,
    title: 'First place winners in CHI 2025!',
    date: 'May 8. 2025',
    image: imgImage13,
    excerpt:
      'We are elated to announce that a team of four Taejae University students was awarded first place in the Student Design Competition at 2025 CHI (Conference on Human Factors in Computing Systems).',
  },
]

const NewsCard = ({ item }: { item: (typeof newsItems)[0] }) => (
  <article className="flex flex-col gap-5 w-full">
    <div
      className="aspect-[450/281] rounded-3xl bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${item.image})` }}
    />
    <div className="flex flex-col gap-1">
      <h3 data-key={`taejae-now-card-title-${item.id}`} className="text-[22px] font-['Instrument_Sans'] font-medium text-black tracking-[-0.66px] leading-[1.35]">
        {item.title}
      </h3>
      <p data-key={`taejae-now-card-date-${item.id}`} className="text-[20px] text-[#767676] font-['Instrument_Sans'] tracking-[-1px] leading-[1.21]">
        {item.date}
      </p>
    </div>
    <p data-key={`taejae-now-card-excerpt-${item.id}`} className="text-[16px] leading-[1.3] font-['Instrument_Sans'] text-black tracking-[-0.48px]">
      {item.excerpt}
    </p>
  </article>
)

export function TaejaeNow({ locale }: TaejaeNowProps) {
  const { t } = useTranslation(locale)

  const newsCards = newsItems.map((item) => <NewsCard key={item.id} item={item} />)

  return (
    <section className="py-20">
      <div className="mx-auto px-4" style={{ maxWidth: `${MAX_CONTENT_WIDTH}px` }}>
        <h2 data-key="taejae-now-title" className="text-[64px] font-['Instrument_Sans'] font-medium text-black tracking-[-3.2px] leading-[1] mb-12">
          Taejae Now
        </h2>

        <AdaptiveCarousel
          itemWidth={450}
          gap={20}
          maxWidth={MAX_CONTENT_WIDTH}
          carouselOptions={{
            align: 'start',
            loop: false,
            skipSnaps: false,
            containScroll: 'trimSnaps',
          }}
        >
          {newsCards}
        </AdaptiveCarousel>
      </div>
    </section>
  )
}
