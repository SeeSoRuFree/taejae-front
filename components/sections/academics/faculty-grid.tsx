'use client'

import { useTranslation } from '@/lib/translations'
import { Locale } from '@/lib/types/locale'
import Image from 'next/image'

interface FacultyMember {
  name: string
  nameKo?: string
  degree: string
  field: string
  fieldKo?: string
  subField?: string // For minor specialization like "(Minor in Music History)"
  subFieldKo?: string
  university: string
  universityKo?: string
  image: string
  linkedIn?: string
  website?: string
  youtube?: string
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
    image: '/assets/academics/faculty/faculty-01.png',
    website: 'https://example.com',
    linkedIn: 'https://linkedin.com/in/david-hazard',
    youtube: 'https://youtube.com/@david-hazard',
  },
  {
    name: 'Steve Justice',
    nameKo: '스티브 저스티스',
    degree: 'Ph D.',
    field: 'Creative Writing',
    fieldKo: '창의적 글쓰기',
    university: 'Univ. of Nottingham',
    universityKo: '노팅엄 대학교',
    image: '/assets/academics/faculty/faculty-02.png',
    website: 'https://example.com',
    linkedIn: 'https://linkedin.com/in/steve-justice',
  },
  {
    name: 'Jiyoung Kwahk',
    nameKo: '곽지영',
    degree: 'Ph D.',
    field: 'Industrial Engineering',
    fieldKo: '산업공학',
    university: 'POSTECH',
    universityKo: '포스텍',
    image: '/assets/academics/faculty/faculty-03.png',
    website: 'https://example.com',
    linkedIn: 'https://linkedin.com/in/jiyoung-kwahk',
    youtube: 'https://youtube.com/@jiyoung-kwahk',
  },
  {
    name: 'Hee Eun Helen Lee',
    nameKo: '이희은',
    degree: 'Ph D.',
    field: 'Comparative literature',
    fieldKo: '비교문학',
    subField: '(Minor in Music History)',
    subFieldKo: '(음악사 부전공)',
    university: 'Univ. of Washington',
    universityKo: '워싱턴 대학교',
    image: '/assets/academics/faculty/faculty-04.png',
    website: 'https://example.com',
    linkedIn: 'https://linkedin.com/in/hee-eun-helen-lee',
  },
  {
    name: 'Alex Morrison',
    nameKo: '알렉스 모리슨',
    degree: 'Ph D.',
    field: 'Chinese Language and Culture',
    fieldKo: '중국어 및 중국 문화',
    university: 'Stanford Univ.',
    universityKo: '스탠포드 대학교',
    image: '/assets/academics/faculty/faculty-05.png',
    website: 'https://example.com',
    linkedIn: 'https://linkedin.com/in/alex-morrison',
    youtube: 'https://youtube.com/@alex-morrison',
  },
  {
    name: 'Catherine Green',
    nameKo: '캐서린 그린',
    degree: 'Ph D.',
    field: 'Creative Writing',
    fieldKo: '창의적 글쓰기',
    university: 'Univ. of Nottingham',
    universityKo: '노팅엄 대학교',
    image: '/assets/academics/faculty/faculty-06.png',
    website: 'https://example.com',
    linkedIn: 'https://linkedin.com/in/catherine-green',
  },
  {
    name: 'Michael Chen',
    nameKo: '마이클 첸',
    degree: 'Ph D.',
    field: 'Chinese Language and Culture',
    fieldKo: '중국어 및 중국 문화',
    university: 'Stanford Univ.',
    universityKo: '스탠포드 대학교',
    image: '/assets/academics/faculty/faculty-07.png',
    website: 'https://example.com',
    linkedIn: 'https://linkedin.com/in/michael-chen',
    youtube: 'https://youtube.com/@michael-chen',
  },
  {
    name: 'Sarah Johnson',
    nameKo: '사라 존슨',
    degree: 'Ph D.',
    field: 'Creative Writing',
    fieldKo: '창의적 글쓰기',
    university: 'Univ. of Nottingham',
    universityKo: '노팅엄 대학교',
    image: '/assets/academics/faculty/faculty-08.png',
    website: 'https://example.com',
    linkedIn: 'https://linkedin.com/in/sarah-johnson',
  },
  {
    name: 'Robert Kim',
    nameKo: '로버트 김',
    degree: 'Ph D.',
    field: 'Chinese Language and Culture',
    fieldKo: '중국어 및 중국 문화',
    university: 'Stanford Univ.',
    universityKo: '스탠포드 대학교',
    image: '/assets/academics/faculty/faculty-09.png',
    website: 'https://example.com',
    linkedIn: 'https://linkedin.com/in/robert-kim',
    youtube: 'https://youtube.com/@robert-kim',
  },
  {
    name: 'Emma Wilson',
    nameKo: '에마 윌슨',
    degree: 'Ph D.',
    field: 'Creative Writing',
    fieldKo: '창의적 글쓰기',
    university: 'Univ. of Nottingham',
    universityKo: '노팅엄 대학교',
    image: '/assets/academics/faculty/faculty-10.png',
    website: 'https://example.com',
    linkedIn: 'https://linkedin.com/in/emma-wilson',
  },
  {
    name: 'James Park',
    nameKo: '제임스 박',
    degree: 'Ph D.',
    field: 'Chinese Language and Culture',
    fieldKo: '중국어 및 중국 문화',
    university: 'Stanford Univ.',
    universityKo: '스탠포드 대학교',
    image: '/assets/academics/faculty/faculty-11.png',
    website: 'https://example.com',
    linkedIn: 'https://linkedin.com/in/james-park',
    youtube: 'https://youtube.com/@james-park',
  },
  {
    name: 'Lisa Taylor',
    nameKo: '리사 테일러',
    degree: 'Ph D.',
    field: 'Creative Writing',
    fieldKo: '창의적 글쓰기',
    university: 'Univ. of Nottingham',
    universityKo: '노팅엄 대학교',
    image: '/assets/academics/faculty/faculty-12.png',
    website: 'https://example.com',
    linkedIn: 'https://linkedin.com/in/lisa-taylor',
  },
  {
    name: 'Thomas Lee',
    nameKo: '토마스 리',
    degree: 'Ph D.',
    field: 'Chinese Language and Culture',
    fieldKo: '중국어 및 중국 문화',
    university: 'Stanford Univ.',
    universityKo: '스탠포드 대학교',
    image: '/assets/academics/faculty/faculty-13.png',
    website: 'https://example.com',
    linkedIn: 'https://linkedin.com/in/thomas-lee',
    youtube: 'https://youtube.com/@thomas-lee',
  },
]

function FacultyCard({ member, locale }: { member: FacultyMember; locale: Locale }) {
  return (
    <div className="flex flex-col items-start w-full">
      {/* 이미지 - 피그마의 aspect-[305/301] 비율 적용 */}
      <div className="relative aspect-[305/301] w-full overflow-hidden bg-gray-100 bg-center bg-cover bg-no-repeat">
        <Image
          src={member.image}
          alt={locale === 'ko' && member.nameKo ? member.nameKo : member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* 콘텐츠 - 피그마의 정확한 높이와 레이아웃 */}
      <div className="flex flex-col items-end justify-between w-full h-[222px]">
        {/* 텍스트 섹션 - 피그마와 정확히 동일한 구조 */}
        <div className="box-border flex flex-col gap-[30px] items-start justify-start px-0 py-4 w-full">
          {/* 이름과 학위 */}
          <div className="flex flex-col font-normal gap-1 items-start justify-start leading-[0] tracking-[-0.48px] w-full">
            <div className="font-['EB_Garamond',sans-serif] text-[#111111] text-[24px] w-full">
              <p className="leading-[1.3]">
                {locale === 'ko' && member.nameKo ? member.nameKo : member.name}
              </p>
            </div>
            <div className="font-['Rethink_Sans',sans-serif] text-[#5B5B5B] text-[16px] w-full">
              <p className="leading-[1.5]">{member.degree}</p>
            </div>
          </div>

          {/* 전공과 대학 */}
          <div className="flex flex-col font-['Rethink_Sans',sans-serif] font-normal gap-1 items-start justify-start leading-[0] text-[#111111] text-[16px] tracking-[-0.48px] w-full">
            <div className="min-w-full" style={{ width: 'min-content' }}>
              <p className="leading-[1.5]">
                {locale === 'ko' && member.fieldKo ? member.fieldKo : member.field}
              </p>
            </div>
            {member.subField && (
              <div className="min-w-full" style={{ width: 'min-content' }}>
                <p className="leading-[1.5]">
                  {locale === 'ko' && member.subFieldKo ? member.subFieldKo : member.subField}
                </p>
              </div>
            )}
            <div className="text-nowrap">
              <p className="leading-[1.5] whitespace-pre">
                {locale === 'ko' && member.universityKo ? member.universityKo : member.university}
              </p>
            </div>
          </div>
        </div>

        {/* 소셜 링크 */}
        <div className="flex gap-2 items-start justify-start">
          {member.website && (
            <div className="w-8 h-8 cursor-pointer hover:opacity-70 transition-opacity">
              <Image
                src="/assets/icons/social/icon-website.svg"
                alt="Website"
                width={32}
                height={32}
                className="block max-w-none"
              />
            </div>
          )}
          {member.linkedIn && (
            <div className="w-8 h-8 cursor-pointer hover:opacity-70 transition-opacity">
              <Image
                src="/assets/icons/social/icon-linkedin.svg"
                alt="LinkedIn"
                width={32}
                height={32}
                className="block max-w-none"
              />
            </div>
          )}
          {member.youtube && (
            <div className="w-8 h-8 cursor-pointer hover:opacity-70 transition-opacity">
              <Image
                src="/assets/icons/social/icon-youtube.svg"
                alt="YouTube"
                width={32}
                height={32}
                className="block max-w-none"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function FacultyGrid({ locale }: FacultyGridProps) {
  const groupedFaculty = []
  for (let i = 0; i < facultyMembers.length; i += 2) {
    groupedFaculty.push(facultyMembers.slice(i, i + 2))
  }

  return (
    <div className="bg-white box-border flex flex-col gap-[100px] items-center justify-start px-[50px] py-[100px] w-full">
      <div className="flex items-start justify-between w-full">
        {/* 제목 - 피그마 디자인과 정확히 일치 */}
        <div className="basis-0 font-['EB_Garamond',sans-serif] font-normal grow leading-[0] max-w-[633px] text-[#111111] text-[44px] tracking-[-0.88px]">
          <p className="leading-[1.1]">
            <span>
              {locale === 'ko' ? '세계적인 ' : 'Meet Our '}
              <br aria-hidden="true" />
            </span>
            <span className="text-[#1da597]">
              {locale === 'ko' ? '교수진을 만나보세요' : 'World-renowned Faculty'}
            </span>
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="basis-0 flex flex-col gap-[41px] grow items-start justify-center">
          {groupedFaculty.map((row, rowIndex) => (
            <div key={rowIndex}>
              <div className="flex gap-5 items-start justify-start w-full">
                {row.map((member, index) => (
                  <div
                    key={`${rowIndex}-${index}`}
                    className="basis-0 flex flex-col grow items-start justify-start"
                  >
                    <FacultyCard member={member} locale={locale} />
                  </div>
                ))}
              </div>

              {rowIndex < groupedFaculty.length - 1 && (
                <div className="h-0 w-full relative mt-[41px]">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                    <Image
                      src="/assets/divider-line.svg"
                      alt=""
                      fill
                      className="block max-w-none"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
