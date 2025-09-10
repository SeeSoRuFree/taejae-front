'use client'

import Image from 'next/image'

export function SocialImageSection() {
  return (
    <section className="w-full h-[480px] overflow-hidden max-w-[1440px] mx-auto">
      <div className="relative w-full h-full">
        <Image
          src="/assets/social-main.png"
          alt="Students collaborating"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  )
}
