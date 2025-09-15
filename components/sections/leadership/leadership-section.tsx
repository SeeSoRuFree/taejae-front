'use client'

import LeaderCard from '@/components/ui/leader-card'
import LeaderModal from '@/components/modals/leader-modal'
import Image from 'next/image'
import { useModalStore } from '@/lib/store/modal-store'

export default function LeadershipSection() {
  const { openModal } = useModalStore()

  const leaders = [
    {
      id: 'chang-gul-cho',
      name: 'Chang-Gul Cho',
      title: 'Founder and Honorary Chair Of Taejae University',
      image: '/assets/chang-gul-cho.png',
      biography: `<p className="mb-4"><strong>Chang-gul Cho</strong> is a visionary Korean entrepreneur best known as the founder of Hanssem, South Korea's leading home furnishing and kitchen brand, established in 1970. He revolutionized Korean households by introducing modern Western-style kitchens. Beyond his business achievements, Cho has devoted himself to reshaping the future of education in Korea.</p>

<p className="mb-4">In 2023, Cho committed ₩300 billion of his personal fortune to establish Taejae University, Korea's first newly licensed four-year hybrid university in over a decade. As Chairman of the Board, he founded the Taejae University Foundation to realize a bold vision for higher education, one that cultivates global leaders equipped to navigate the digital revolution, environmental challenges, and a shifting geopolitical order.</p>

<p className="mb-4">Cho draws inspiration from philanthropic pioneers such as Andrew Carnegie, John D. Rockefeller, and Cornelius Vanderbilt, whose investments in education helped define global leadership for generations. He envisions Taejae University continuing this legacy, nurturing Korean talent with a transformative global impact from day one.</p>

<p className="mb-4">Rejecting the limitations of traditional lecture-based education, Cho champions an active, experiential model. He emphasizes small, seminar-style learning environments and a globally distributed curriculum designed to foster convergence thinking, creativity, and real-world problem solving. Under his leadership, Taejae's Global Rotation Program immerses students in diverse cultural and academic settings across seven campuses around the world, reinforcing his belief that true leadership is rooted in global perspective and hands-on experience.</p>

<p>Chang-gul Cho's legacy in education is grounded in his unwavering commitment to innovative, student-centered learning. Through his philanthropic leadership, he has created Taejae University as a platform to empower Korean youth to become bold, creative, and globally engaged leaders who are ready to shape the future in times of profound transformation.</p>`,
      learnMoreUrl: '#'
    },
    {
      id: 'doh-yeon-kim',
      name: 'Doh-Yeon Kim',
      title: 'Board Chair Of Taejae University',
      image: '/assets/doh-yeon-kim.png',
      biography: `<p>Board Chair of Taejae University with extensive experience in education and leadership.</p>`,
      learnMoreUrl: '#'
    },
    {
      id: 'jaeho-yeom',
      name: 'Jaeho Yeom',
      title: 'President Of Taejae University',
      image: '/assets/jaeho-yeom.png',
      biography: `<p>President of Taejae University, leading the institution's innovative educational mission.</p>`,
      learnMoreUrl: '#'
    }
  ]

  const handleViewDetails = (leaderId: string) => {
    const leader = leaders.find(l => l.id === leaderId)
    if (leader) {
      openModal(leader)
    }
  }

  return (
    <>
      <section className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-12 pb-[100px] mobile:px-6 mobile:pb-16">
          <div className="flex flex-col gap-14 items-start justify-center relative w-full">
            {leaders.map((leader) => (
              <LeaderCard
                key={leader.id}
                name={leader.name}
                title={leader.title}
                image={leader.image}
                onViewDetails={() => handleViewDetails(leader.id)}
              />
            ))}
          </div>
        </div>
      
        {/* Dividers */}
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-[-0.53px] left-0 right-0 top-[-0.53px]">
            <Image 
              src="/assets/divider.svg" 
              alt="" 
              width={1920} 
              height={1} 
              className="block max-w-none w-full h-auto"
            />
          </div>
        </div>
        
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-[-0.53px] left-0 right-0 top-[-0.53px]">
            <Image 
              src="/assets/divider.svg" 
              alt="" 
              width={1920} 
              height={1} 
              className="block max-w-none w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Leader Modal */}
      <LeaderModal />
    </>
  )
}