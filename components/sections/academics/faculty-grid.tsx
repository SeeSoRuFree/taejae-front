'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'
import Image from 'next/image'

interface FacultyMember {
  name: string
  nameKo?: string
  degree: string
  field: string
  fieldKo?: string
  university: string
  universityKo?: string
  image: string
  linkedIn?: string
}

interface FacultyGridProps {
  locale: Locale
}

const facultyMembers: FacultyMember[] = [
  {
    name: 'David Hazard',
    nameKo: '데이비드 하자드',
    degree: 'Ph D.',
    field: 'Chinese Language and Culture',
    fieldKo: '중국어 및 중국 문화',
    university: 'Stanford Univ.',
    universityKo: '스탠포드 대학교',
    image: '/assets/faculty-placeholder-1.png',
  },
  {
    name: 'Steve Justice',
    nameKo: '스티브 저스티스',
    degree: 'Ph D.',
    field: 'Creative Writing',
    fieldKo: '창의적 글쓰기',
    university: 'Univ. of Nottingham',
    universityKo: '노팅엄 대학교',
    image: '/assets/faculty-placeholder-2.png',
  },
  {
    name: 'Jiyoung Kwahk',
    nameKo: '곽지영',
    degree: 'Ph D.',
    field: 'Industrial Engineering',
    fieldKo: '산업공학',
    university: 'POSTECH',
    universityKo: '포스텍',
    image: '/assets/faculty-placeholder-1.png',
  },
  {
    name: 'Hee Eun Helen Lee',
    nameKo: '이희은',
    degree: 'Ph D.',
    field: 'Comparative literature',
    fieldKo: '비교문학',
    university: 'Univ. of Washington',
    universityKo: '워싱턴 대학교',
    image: '/assets/faculty-placeholder-2.png',
  },
  {
    name: 'Alex L.',
    nameKo: '알렉스 L.',
    degree: 'Ph D.',
    field: 'Chinese Language and Culture',
    fieldKo: '중국어 및 중국 문화',
    university: 'Stanford Univ.',
    universityKo: '스탠포드 대학교',
    image: '/assets/faculty-placeholder-1.png',
  },
  {
    name: 'Cathy G.',
    nameKo: '캐시 G.',
    degree: 'Ph D.',
    field: 'Chinese Language and Culture',
    fieldKo: '중국어 및 중국 문화',
    university: 'Stanford Univ.',
    universityKo: '스탠포드 대학교',
    image: '/assets/faculty-placeholder-2.png',
  },
]

function FacultyCard({ member, locale }: { member: FacultyMember; locale: Locale }) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={member.image}
          alt={locale === 'ko' && member.nameKo ? member.nameKo : member.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-7 py-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-[22px] font-medium tracking-[-0.66px] text-black">
              {locale === 'ko' && member.nameKo ? member.nameKo : member.name}
            </h3>
            <p className="text-[16px] font-normal tracking-[-0.48px] text-black">{member.degree}</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[16px] font-normal tracking-[-0.48px] text-black leading-[1.1]">
              {locale === 'ko' && member.fieldKo ? member.fieldKo : member.field}
            </p>
            <p className="text-[16px] font-normal tracking-[-0.48px] text-black leading-[1.1]">
              {locale === 'ko' && member.universityKo ? member.universityKo : member.university}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Image
            src="/assets/linkedin-icon.svg"
            alt="LinkedIn"
            width={44}
            height={44}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          />
        </div>
      </div>
    </div>
  )
}

export function FacultyGrid({ locale }: FacultyGridProps) {
  const { t } = useTranslation(locale)

  const groupedFaculty = []
  for (let i = 0; i < facultyMembers.length; i += 2) {
    groupedFaculty.push(facultyMembers.slice(i, i + 2))
  }

  return (
    <section className="relative w-full pb-20 md:pb-24 lg:pb-32">
      <div className="mx-auto px-4 md:px-6 lg:px-8" style={{ maxWidth: MAX_CONTENT_WIDTH }}>
        <div className="flex flex-col gap-10">
          <div className="relative h-px w-full">
            <Image src="/assets/divider-line.svg" alt="" fill className="object-cover" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
            <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-tight tracking-[-2px] md:tracking-[-3.2px] text-black flex-shrink-0 lg:max-w-[633px]">
              {locale === 'ko' ? '세계적인 교수진을 만나보세요' : 'Meet Our World-renowned Faculty'}
            </h2>

            <div className="flex-1 w-full">
              <div className="flex flex-col gap-10">
                {groupedFaculty.map((row, rowIndex) => (
                  <div key={rowIndex}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {row.map((member, index) => (
                        <FacultyCard key={`${rowIndex}-${index}`} member={member} locale={locale} />
                      ))}
                    </div>

                    {rowIndex < groupedFaculty.length - 1 && (
                      <div className="relative h-px w-full mt-10">
                        <Image
                          src="/assets/divider-line.svg"
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex justify-center pt-10">
                  <button className="relative w-11 h-11 rounded-full border-[1.5px] border-black bg-white hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <Image
                      src="/assets/plus-icon.svg"
                      alt={locale === 'ko' ? '더 보기' : 'View More'}
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
