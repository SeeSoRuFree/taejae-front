'use client'

import Image from 'next/image'
import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'

interface TaejaeNowProps {
  locale: Locale
}

const imgImage11 = 'http://localhost:3845/assets/793a330fa24f0707650a4133583d9f4f87b6c832.png'
const imgImage12 = 'http://localhost:3845/assets/bd0cf68aa19df3e25d87b93c5bdd9ffc501c617b.png'
const imgImage13 = 'http://localhost:3845/assets/7ca2789f33150ddffa017aae82a529e524ee4704.png'

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

export function TaejaeNow({ locale }: TaejaeNowProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="py-20">
      <div className="mx-auto px-4" style={{ maxWidth: `${MAX_CONTENT_WIDTH}px` }}>
        <h2 className="text-5xl md:text-6xl font-medium mb-12">Taejae Now</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {newsItems.map((item) => (
            <article key={item.id} className="flex flex-col gap-5">
              <div
                className="aspect-[450/281] rounded-3xl bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-medium leading-relaxed">{item.title}</h3>
                <p className="text-lg text-gray-600">{item.date}</p>
              </div>
              <p className="text-base leading-relaxed">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
