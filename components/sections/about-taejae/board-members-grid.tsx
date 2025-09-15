'use client'

import { useState } from 'react'
import BoardMemberCard from '@/components/ui/board-member-card'
import BoardMemberModal from '@/components/modals/board-member-modal'
import { useLocaleStore } from '@/lib/store/locale-store'
import { useTranslation } from '@/lib/translations'

interface BoardMember {
  id: string
  name: string
  role: string
  image: string
  current: string[]
  past: string[]
  hasVideo?: boolean
}

export default function BoardMembersGrid() {
  const locale = useLocaleStore((state) => state.locale)
  const { t } = useTranslation(locale)
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleMemberClick = (member: BoardMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMember(null)
  }

  // Board members data extracted from Figma
  const boardMembers: BoardMember[] = [
    {
      id: '1',
      name: 'Doh-Yeon Kim',
      role: 'Board Chair',
      image: '/assets/board-member-1.png',
      current: ['Board Chair of Taejae University'],
      past: ['Previous leadership positions']
    },
    {
      id: '2', 
      name: 'Jaeho Yeom',
      role: 'Board Chair',
      image: '/assets/board-member-2.png',
      current: ['President of Taejae University'],
      past: ['Academic and leadership background']
    },
    {
      id: '3',
      name: 'Yonghak Kim', 
      role: 'Board Member',
      image: '/assets/yonghak-kim-profile.png',
      current: [
        'Board chair of SK Telecom',
        'Professor Emeritus, Sociology, Yonsei University',
        'Board Member of the Public Welfare Committee at Samsung Life Insurance'
      ],
      past: [
        '18th President of Yonsei University',
        'Ph.D. in Sociology, University of Chicago'
      ],
      hasVideo: true
    },
    {
      id: '4',
      name: 'Myunghee Kim',
      role: 'Board Chair', 
      image: '/assets/board-member-4.png',
      current: ['Board Chair position'],
      past: ['Previous experience']
    },
    {
      id: '5',
      name: 'Yongjik Kim',
      role: 'Board Chair',
      image: '/assets/board-member-5.png',
      current: ['Board Chair position'],
      past: ['Previous experience']
    },
    {
      id: '6',
      name: 'Junghye Roe',
      role: 'Board Chair',
      image: '/assets/board-member-6.png',
      current: ['Board Chair position'],
      past: ['Previous experience']
    },
    {
      id: '7',
      name: 'Jonghoon Kim',
      role: 'Board Chair',
      image: '/assets/board-member-7.png',
      current: ['Board Chair position'],
      past: ['Previous experience']
    },
    {
      id: '8',
      name: 'Namjoon Cho', 
      role: 'Board Chair',
      image: '/assets/board-member-8.png',
      current: ['Board Chair position'],
      past: ['Previous experience']
    },
    {
      id: '9',
      name: 'Haecheon Choi',
      role: 'Board Chair',
      image: '/assets/board-member-9.png',
      current: ['Board Chair position'],
      past: ['Previous experience']
    },
    {
      id: '10',
      name: 'Kyungchan Min',
      role: 'Board Chair', 
      image: '/assets/board-member-10.png',
      current: ['Board Chair position'],
      past: ['Previous experience']
    },
    {
      id: '11',
      name: 'Seunghoon Lee',
      role: 'Board Chair',
      image: '/assets/board-member-11.png',
      current: ['Board Chair position'],
      past: ['Previous experience']
    }
  ]


  // Group members into rows of 3
  const memberRows = []
  for (let i = 0; i < boardMembers.length; i += 3) {
    memberRows.push(boardMembers.slice(i, i + 3))
  }

  return (
    <section className="relative w-full pb-[100px] mobile:pb-16">
      <div className="max-w-[1440px] mx-auto px-12 mobile:px-6">
        <div className="flex flex-col gap-14 mobile:gap-10">
          {memberRows.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-5 mobile:gap-8 justify-items-center"
            >
              {row.map((member) => (
                <BoardMemberCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  hasVideo={member.hasVideo}
                  onVideoPlay={() => handleMemberClick(member)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Dividers - matching Figma design */}
      <div className="w-full h-[1px] mt-[100px] mobile:mt-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>
      <div className="w-full h-[1px] mt-[1px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="h-[1px] bg-gray-200"></div>
        </div>
      </div>
      
      {/* Board Member Modal */}
      <BoardMemberModal
        isOpen={isModalOpen}
        member={selectedMember}
        onClose={handleCloseModal}
      />
    </section>
  )
}
