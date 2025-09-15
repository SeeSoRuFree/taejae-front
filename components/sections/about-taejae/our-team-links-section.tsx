'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLocaleStore } from '@/lib/store/locale-store'
import { useTranslation } from '@/lib/translations'
import { ASSETS } from '@/lib/constants/assets'

interface TeamLink {
  href: string
  label: string
}

export default function OurTeamLinksSection() {
  const locale = useLocaleStore((state) => state.locale)
  const { t } = useTranslation(locale)

  const teamLinks: TeamLink[][] = [
    [
      { href: '/about-taejae/leadership', label: 'Leadership' },
      { href: '/about-taejae/board-of-trustees', label: 'Board of Trustees' },
      { href: '/about-taejae/eminent-professors', label: 'Eminent Professors' },
      { href: '/about-taejae/administrative-professors', label: 'Administrative Professors' },
    ],
    [
      { href: '/about-taejae/global-partners', label: 'Global Partners' },
    ],
    [
      { href: '/about-taejae/taejae-now', label: 'Taejae Now' },
      { href: '/about-taejae/press-media', label: 'Press & Media' },
    ],
  ]

  return (
    <section className="w-full bg-gray-100 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-no-repeat opacity-40"
          style={{ 
            backgroundImage: `url(${ASSETS.BACKGROUNDS.OUR_TEAM_SECTION_BG})`,
            backgroundSize: '80%',
            backgroundPosition: 'center 0%'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-[50px] py-[100px] mobile:px-6 mobile:py-16">
        <div className="flex gap-12 items-start justify-start relative w-full lg:flex-row flex-col mobile:gap-8">
          {teamLinks.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="basis-0 box-border flex flex-col gap-6 grow items-start justify-start max-w-[840px] min-h-px min-w-px pb-0 pt-6 px-0 relative border-t border-black"
            >
              {column.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className="group flex gap-[33px] items-center justify-start leading-[0] relative w-full hover:bg-black/5 transition-all duration-200 px-2 py-1 -mx-2 -my-1 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <div className="font-eb-garamond font-medium relative text-[#111111] text-[32px] tracking-[-0.64px] leading-[1.3] w-[364px] mobile:w-full mobile:text-[28px] group-hover:text-primary-600 transition-colors">
                    {link.label}
                  </div>
                  <div 
                    className="font-sans font-normal relative text-black text-[20px] tracking-[-1px] leading-[1.21] group-hover:translate-x-1 transition-transform mobile:text-[18px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                    aria-hidden="true"
                  >
                    →
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
