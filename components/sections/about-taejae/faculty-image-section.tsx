'use client'

import Image from 'next/image'
import { useLocaleStore } from '@/lib/store/locale-store'
import { useTranslation } from '@/lib/translations'
import { ASSETS } from '@/lib/constants/assets'

export default function FacultyImageSection() {
  const locale = useLocaleStore((state) => state.locale)
  const { t } = useTranslation(locale)

  return (
    <section className="aspect-[1920/640] bg-center bg-cover bg-no-repeat shrink-0 w-full relative">
      <Image
        src={ASSETS.ABOUT_TAEJAE.FACULTY_MAIN}
        alt={t('about.faculty.image.alt')}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
    </section>
  )
}
