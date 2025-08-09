'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import Image from 'next/image'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'

interface GlobalCampusesProps {
  locale: Locale
}

const imgVectorWorldMap =
  'http://localhost:3845/assets/c8ae60ac8d8e56cbec72dcfc80f8e401907843d4.png'

export function GlobalCampuses({ locale }: GlobalCampusesProps) {
  const { t } = useTranslation(locale)

  return (
    <section className="py-20">
      <div className="mx-auto px-4" style={{ maxWidth: `${MAX_CONTENT_WIDTH}px` }}>
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-medium leading-tight">
            Global
            <br />
            Campuses
          </h2>
        </div>

        <div className="relative w-full" style={{ aspectRatio: '1410 / 799.7' }}>
          <div className="relative w-full h-full max-w-[1400px] mx-auto">
            <Image
              src={imgVectorWorldMap}
              alt="World map"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute top-[40%] left-[55%] -translate-x-1/2 bg-[#7B7986] rounded-3xl px-8 py-6 w-[285px] shadow-lg">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-5xl md:text-6xl font-medium">Korea</h3>
                <p className="text-white text-2xl md:text-3xl font-medium">Seoul</p>
                <p className="text-gray-300 text-lg md:text-xl font-medium">Harmony & Balance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
