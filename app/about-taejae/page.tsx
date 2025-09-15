import { Metadata } from 'next'
import { PageLayout } from '@/components/layout/page-layout'
import AboutTaejaeHero from '@/components/sections/about-taejae/about-taejae-hero'
import FacultyImageSection from '@/components/sections/about-taejae/faculty-image-section'
import OurTeamLinksSection from '@/components/sections/about-taejae/our-team-links-section'
import Image from 'next/image'
import { ASSETS } from '@/lib/constants/assets'

export const metadata: Metadata = {
  title: 'About Taejae | Taejae University',
  description: 'Learn about Taejae University\'s mission, vision, and commitment to transformative education for the 21st century.',
  keywords: 'about taejae, university mission, leadership, faculty, global education',
}

export default function AboutTaejaePage() {
  return (
    <PageLayout>
      <main className="flex flex-col items-center justify-start relative size-full">
        {/* About Taejae Hero Section */}
        <AboutTaejaeHero />

        {/* Faculty Image Section */}
        <FacultyImageSection />

        {/* Our Team Links Section */}
        <OurTeamLinksSection />

        {/* Divider Elements (as per Figma design) */}
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-[-0.53px] left-0 right-0 top-[-0.53px]">
            <Image
              src={ASSETS.UI.DIVIDER}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
        
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-[-0.53px] left-0 right-0 top-[-0.53px]">
            <Image
              src={ASSETS.UI.DIVIDER}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
