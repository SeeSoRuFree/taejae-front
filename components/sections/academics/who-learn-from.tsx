'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import Image from 'next/image'

interface WhoLearnFromProps {
  locale: Locale
}

interface FacultyMember {
  id: string
  name: string
  degree: string
  fieldEn: string
  fieldKo: string
  universityEn: string
  universityKo: string
  image: string
  links: {
    research?: string
    linkedin?: string
    portfolio?: string
  }
}

const facultyMembers: FacultyMember[] = [
  {
    id: 'david-hazard',
    name: 'David Hazard',
    degree: 'Ph D.',
    fieldEn: 'Chinese Language and Culture',
    fieldKo: '중국어 및 중국문화',
    universityEn: 'Stanford Univ.',
    universityKo: '스탠포드 대학교',
    image: '/assets/academics/faculty/david-hazard.png',
    links: {
      research: '#',
      linkedin: '#',
      portfolio: '#',
    },
  },
  {
    id: 'steve-justice',
    name: 'Steve Justice',
    degree: 'Ph D.',
    fieldEn: 'Creative Writing',
    fieldKo: '창작 문학',
    universityEn: 'Univ. of Nottingham',
    universityKo: '노팅엄 대학교',
    image: '/assets/academics/faculty/steve-justice.png',
    links: {
      research: '#',
      linkedin: '#',
    },
  },
  {
    id: 'jiyoung-kwahk',
    name: 'Jiyoung Kwahk',
    degree: 'Ph D.',
    fieldEn: 'Industrial Engineering',
    fieldKo: '산업공학',
    universityEn: 'POSTECH',
    universityKo: 'POSTECH',
    image: '/assets/academics/faculty/jiyoung-kwahk.png',
    links: {
      research: '#',
      linkedin: '#',
      portfolio: '#',
    },
  },
  {
    id: 'hee-eun-helen-lee',
    name: 'Hee Eun Helen Lee',
    degree: 'Ph D.',
    fieldEn: 'Comparative literature (Minor in Music History)',
    fieldKo: '비교문학 (음악사 부전공)',
    universityEn: 'Univ. of Washington',
    universityKo: '워싱턴 대학교',
    image: '/assets/academics/faculty/hee-eun-helen-lee.png',
    links: {
      research: '#',
      linkedin: '#',
    },
  },
  {
    id: 'sarah-kim',
    name: 'Sarah Kim',
    degree: 'Ph D.',
    fieldEn: 'International Relations',
    fieldKo: '국제관계학',
    universityEn: 'Harvard Univ.',
    universityKo: '하버드 대학교',
    image: '/assets/academics/faculty/faculty-05.png',
    links: {
      research: '#',
      linkedin: '#',
    },
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    degree: 'Ph D.',
    fieldEn: 'Computer Science',
    fieldKo: '컴퓨터과학',
    universityEn: 'MIT',
    universityKo: 'MIT',
    image: '/assets/academics/faculty/faculty-06.png',
    links: {
      research: '#',
      linkedin: '#',
      portfolio: '#',
    },
  },
  {
    id: 'elena-rodriguez',
    name: 'Elena Rodriguez',
    degree: 'Ph D.',
    fieldEn: 'Environmental Science',
    fieldKo: '환경과학',
    universityEn: 'UC Berkeley',
    universityKo: 'UC 버클리',
    image: '/assets/academics/faculty/faculty-07.png',
    links: {
      research: '#',
      linkedin: '#',
    },
  },
  {
    id: 'james-thompson',
    name: 'James Thompson',
    degree: 'Ph D.',
    fieldEn: 'Economics',
    fieldKo: '경제학',
    universityEn: 'Oxford Univ.',
    universityKo: '옥스포드 대학교',
    image: '/assets/academics/faculty/faculty-08.png',
    links: {
      research: '#',
      linkedin: '#',
    },
  },
  {
    id: 'maria-santos',
    name: 'Maria Santos',
    degree: 'Ph D.',
    fieldEn: 'Psychology',
    fieldKo: '심리학',
    universityEn: 'Yale Univ.',
    universityKo: '예일 대학교',
    image: '/assets/academics/faculty/faculty-09.png',
    links: {
      research: '#',
      linkedin: '#',
    },
  },
  {
    id: 'robert-wilson',
    name: 'Robert Wilson',
    degree: 'Ph D.',
    fieldEn: 'Philosophy',
    fieldKo: '철학',
    universityEn: 'Princeton Univ.',
    universityKo: '프린스턴 대학교',
    image: '/assets/academics/faculty/faculty-10.png',
    links: {
      research: '#',
      portfolio: '#',
    },
  },
  {
    id: 'lisa-park',
    name: 'Lisa Park',
    degree: 'Ph D.',
    fieldEn: 'Biomedical Engineering',
    fieldKo: '생체의공학',
    universityEn: 'Johns Hopkins Univ.',
    universityKo: '존스홉킨스 대학교',
    image: '/assets/academics/faculty/faculty-11.png',
    links: {
      research: '#',
      linkedin: '#',
    },
  },
  {
    id: 'david-brown',
    name: 'David Brown',
    degree: 'Ph D.',
    fieldEn: 'History',
    fieldKo: '역사학',
    universityEn: 'Cambridge Univ.',
    universityKo: '케임브리지 대학교',
    image: '/assets/academics/faculty/faculty-12.png',
    links: {
      research: '#',
      linkedin: '#',
    },
  },
  {
    id: 'anna-johnson',
    name: 'Anna Johnson',
    degree: 'Ph D.',
    fieldEn: 'Mathematics',
    fieldKo: '수학',
    universityEn: 'Caltech',
    universityKo: 'Caltech',
    image: '/assets/academics/faculty/faculty-13.png',
    links: {
      research: '#',
      linkedin: '#',
      portfolio: '#',
    },
  },
]

interface FacultyCardProps {
  member: FacultyMember
  locale: Locale
}

function FacultyCard({ member, locale }: FacultyCardProps) {
  return (
    <div className="flex flex-col">
      {/* Profile Image */}
      <div className="aspect-[305/301] relative mb-4">
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col h-[222px] items-start justify-between relative shrink-0 w-full">
        <div className="flex flex-col gap-[30px] py-4">
          {/* Name and Degree */}
          <div className="flex flex-col gap-1">
            <h3 className="font-['EB_Garamond'] text-[24px] font-normal leading-[1.3] tracking-[-0.48px] text-[#111111]">
              {member.name}
            </h3>
            <p className="font-['Rethink_Sans'] text-[16px] font-normal leading-[1.5] text-[#5b5b5b]">
              {member.degree}
            </p>
          </div>

          {/* Field and University */}
          <div className="flex flex-col gap-1">
            <p className="font-['Rethink_Sans'] text-[16px] font-normal leading-[1.5] tracking-[-0.48px] text-[#111111]">
              {locale === 'ko' ? member.fieldKo : member.fieldEn}
            </p>
            <p className="font-['Rethink_Sans'] text-[16px] font-normal leading-[1.5] tracking-[-0.48px] text-[#111111]">
              {locale === 'ko' ? member.universityKo : member.universityEn}
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-2 items-start shrink-0">
          {member.links.research && (
            <a href={member.links.research} className="w-8 h-8">
              <Image
                src="/assets/icons/social/research-icon.svg"
                alt="Research"
                width={32}
                height={32}
                className="w-full h-full"
              />
            </a>
          )}
          {member.links.linkedin && (
            <a href={member.links.linkedin} className="w-8 h-8">
              <Image
                src="/assets/icons/social/linkedin-icon.svg"
                alt="LinkedIn"
                width={32}
                height={32}
                className="w-full h-full"
              />
            </a>
          )}
          {member.links.portfolio && (
            <a href={member.links.portfolio} className="w-8 h-8">
              <Image
                src="/assets/icons/social/portfolio-icon.svg"
                alt="Portfolio"
                width={32}
                height={32}
                className="w-full h-full"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function WhoLearnFrom({ locale }: WhoLearnFromProps) {
  const { t } = useTranslation(locale)

  // Create 2x2 grid layout
  const facultyRows = []
  for (let i = 0; i < facultyMembers.length; i += 2) {
    facultyRows.push(facultyMembers.slice(i, i + 2))
  }

  return (
    <section className="w-full bg-white">
      {/* Meet Our World-renowned Faculty Section - Figma Layout */}
      <div className="max-w-[1440px] mx-auto px-[50px] py-[100px]">
        <div className="flex items-start justify-between">
          {/* Section Title - Left Side */}
          <div className="w-full basis-0 grow">
            <h2 className="font-['EB_Garamond'] text-[44px] font-normal leading-[1.1] tracking-[-0.88px] text-[#111111]">
              <span>Meet Our</span>
              <br />
              <span className="text-[#1da597]">World-renowned Faculty</span>
            </h2>
          </div>

          {/* Faculty Grid - Right Side */}
          <div className="basis-0 grow flex flex-col gap-[41px] ml-10">
            {facultyRows.map((row, rowIndex) => (
              <div key={rowIndex}>
                <div className="flex gap-5">
                  {row.map((member) => (
                    <div key={member.id} className="flex-1 max-w-[305px]">
                      <FacultyCard member={member} locale={locale} />
                    </div>
                  ))}
                </div>
                {/* Divider - except after the last row */}
                {rowIndex < facultyRows.length - 1 && (
                  <div className="w-full h-px bg-[#e5e5e5] my-[41px]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
