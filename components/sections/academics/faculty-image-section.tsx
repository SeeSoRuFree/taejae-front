'use client'

import Image from 'next/image'

export function FacultyImageSection() {
  return (
    <section className="w-full aspect-[1920/640] relative">
      <Image
        src="/assets/academics/faculty/main-hero.png"
        alt="Faculty group photo"
        fill
        className="object-cover"
      />
    </section>
  )
}
