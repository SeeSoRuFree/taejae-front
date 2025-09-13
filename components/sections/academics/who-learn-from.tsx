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
      <div className="flex flex-col h-[222px] items-end justify-between relative shrink-0 w-full">
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
    <section className="w-full bg-white pt-[66px]">
      {/* Title and Description Section - Matching Figma Design */}
      <div className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-[50px] py-[100px]">
          <div className="flex flex-col gap-[100px] items-center justify-start">
            {/* Title */}
            <div className="flex items-start justify-start px-0 py-2.5 w-full">
              <div className="max-w-[720px]">
                <div className="font-['EB_Garamond'] font-normal text-[#111111] text-[64px] tracking-[-1.28px] w-full">
                  <p className="leading-[1.1]">
                    {locale === 'ko' ? (
                      <>
                        <span>누구에게</span>
                        <span className="text-[#1da597]">{` 배우나?`}</span>
                      </>
                    ) : (
                      <>
                        <span>Who do you</span>
                        <span className="text-[#1da597]">{` learn from?`}</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="flex items-start justify-start px-0 py-2.5 w-full">
              <div className="max-w-[840px]">
                <div className="font-['Rethink_Sans'] font-normal leading-[1.5] text-[#111111] text-[20px] tracking-[-0.6px]">
                  <p className="mb-0">{t('academics.whoLearnFrom.hero.description1')}</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">{t('academics.whoLearnFrom.hero.description2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Faculty Image */}
      <div className="w-full aspect-[1920/640] relative">
        <Image
          src="/assets/academics/faculty/main-hero.png"
          alt="Faculty group photo"
          fill
          className="object-cover"
        />
      </div>

      {/* Meet Our World-renowned Faculty Section - Figma Layout */}
      <div className="max-w-[1440px] mx-auto px-[50px] py-[100px]">
        <div className="flex items-start justify-between">
          {/* Section Title - Left Side */}
          <div className="max-w-[633px] basis-0 grow">
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
                    <div key={member.id} className="basis-0 grow">
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
