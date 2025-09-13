'use client'

import Image from 'next/image'

export function SocialImageSection() {
  return (
    <section className="w-full h-[480px] overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src="/assets/academics/img_social_main-lg.png"
          alt="Students collaborating in social learning environment"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  )
}
