'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'

const imgNews1 = "http://localhost:3845/assets/793a330fa24f0707650a4133583d9f4f87b6c832.png"
const imgNews2 = "http://localhost:3845/assets/bd0cf68aa19df3e25d87b93c5bdd9ffc501c617b.png"
const imgNews3 = "http://localhost:3845/assets/7ca2789f33150ddffa017aae82a529e524ee4704.png"

interface TaejaeNowProps {
  locale: Locale
}

interface NewsItem {
  id: string
  title: string
  date: string
  image: string
}

export function TaejaeNow({ locale }: TaejaeNowProps) {
  const { t } = useTranslation(locale)

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: "President Yeom Jae-ho attends the 'Digital Universities Asia 2025' conference as a panelist.",
      date: 'Jul 17. 2025',
      image: imgNews1
    },
    {
      id: '2', 
      title: 'The fellowship of Oxford x Stanford x Taejae continues',
      date: 'Jul 17. 2025',
      image: imgNews2
    },
    {
      id: '3',
      title: 'First place winners in CHI 2025!',
      date: 'Jul 17. 2025',
      image: imgNews3
    }
  ]

  return (
    <section className="flex flex-col gap-12 items-end justify-end px-12 py-[100px] w-full max-w-[1920px] mx-auto">
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
          <div
            key={item.id}
            className="basis-0 flex flex-col gap-5 grow items-start justify-start min-h-px min-w-px relative"
          >
            {/* News Image */}
            <div
              className="aspect-[413.333/239.799] bg-center bg-cover bg-no-repeat min-h-[143.88px] min-w-[248px] rounded-[24px] w-full"
              style={{ backgroundImage: `url('${item.image}')` }}
              aria-label={`News image for ${item.title}`}
            />

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
        ))}
      </div>
    </section>
  )
}