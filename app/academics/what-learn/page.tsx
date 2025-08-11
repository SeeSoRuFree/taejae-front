'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'
import { useTranslation } from '@/lib/translations'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'
import Image from 'next/image'

const competencies = [
  {
    titleEn: 'Critical Thinking',
    titleKo: '비판적 사고',
    descriptionEn:
      'Critical thinking is the ability to think analytically and systematically, examining information and ideas with depth and precision. You can apply critical thinking to evaluate diverse perspectives, uncover underlying assumptions, and assess the strength of arguments. This empowers you to make informed decisions and solve complex problems with clarity, logic, and confidence.',
    descriptionKo:
      '비판적 사고는 정보와 아이디어를 깊이 있고 정확하게 검토하며 분석적이고 체계적으로 생각하는 능력입니다.',
  },
  {
    titleEn: 'Creative Thinking',
    titleKo: '창의적 사고',
    descriptionEn:
      'Creative thinking is the ability to generate original, innovative, and practical solutions by thinking beyond conventional boundaries. You can develop creative thinking at Taejae by exploring diverse heuristics, practicing problem-solving strategies, and applying fresh ideas in real-world contexts. This enables you to approach challenges with curiosity, embrace bold intellectual risks, and lead meaningful, transformative change.',
    descriptionKo:
      '창의적 사고는 기존의 경계를 넘어 독창적이고 혁신적이며 실용적인 해결책을 생성하는 능력입니다.',
  },
  {
    titleEn: 'Self-Directed Learning',
    titleKo: '자기주도적 학습',
    descriptionEn:
      "Self-directed learning is the ability to take initiative, set goals, and manage your own learning process in a purposeful and reflective way. Throughout your academic journey at Taejae, you'll develop this skill by identifying your learning needs, seeking out resources, and regularly assessing your progress—both inside and outside the classroom. In the end, you will become a lifelong learner, ready to adapt to new challenges and pursue personal and professional growth with independence and confidence.",
    descriptionKo:
      '자기주도적 학습은 주도권을 잡고 목표를 설정하며 목적의식을 갖고 성찰적으로 자신만의 학습 과정을 관리하는 능력입니다.',
  },
  {
    titleEn: 'Communication & Collaboration',
    titleKo: '소통과 협업',
    descriptionEn:
      'Communication and collaboration involve the ability to express ideas clearly, listen actively, and work effectively with others to achieve shared goals.',
    descriptionKo:
      '소통과 협업은 아이디어를 명확하게 표현하고 적극적으로 듣고 공동 목표 달성을 위해 타인과 효과적으로 협력하는 능력입니다.',
  },
  {
    titleEn: 'Diversity & Empathy',
    titleKo: '다양성과 공감',
    descriptionEn:
      'Diversity and empathy involve understanding, respecting, and valuing different perspectives, backgrounds, and experiences while developing the ability to connect with others on a deeper level.',
    descriptionKo:
      '다양성과 공감은 서로 다른 관점, 배경, 경험을 이해하고 존중하며 가치를 인정하는 동시에 타인과 더 깊은 차원에서 연결하는 능력을 개발하는 것입니다.',
  },
  {
    titleEn: 'Global Harmony & Sustainability',
    titleKo: '글로벌 조화와 지속가능성',
    descriptionEn:
      "Global harmony and sustainability involve understanding the interconnectedness of environmental, social, and economic systems and acting responsibly to promote their long-term well-being. At Taejae, you'll cultivate this competency by studying sustainable practices, reflecting on global challenges, and designing innovative solutions that balance the needs of people and the planet. This prepares you to make decisions that foster a sustainable future and contribute positively to communities worldwide.",
    descriptionKo:
      '글로벌 조화와 지속가능성은 환경적, 사회적, 경제적 시스템의 상호 연결성을 이해하고 장기적 안녕을 촉진하기 위해 책임감 있게 행동하는 것입니다.',
  },
]

function HeroSection({ locale }: { locale: string }) {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto px-4 md:px-6 lg:px-8" style={{ maxWidth: MAX_CONTENT_WIDTH }}>
        <div className="max-w-[720px]">
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-tight tracking-[-2px] md:tracking-[-3.2px] text-black mb-12">
            {locale === 'ko' ? '무엇을 배우나?' : 'What do you learn?'}
          </h1>
        </div>

        <div className="max-w-[840px]">
          <div className="text-[18px] md:text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-black space-y-5">
            <p>
              {locale === 'ko'
                ? '태제대학교에서의 학습은 전통적인 공부를 넘어서는 것입니다—급변하는 세계에서 번영할 수 있는 사람이 되는 것입니다.'
                : "At Taejae University, learning goes beyond traditional study—it's about becoming a person who can thrive in a rapidly changing world."}
            </p>
            <p>
              {locale === 'ko'
                ? '우리의 커리큘럼은 학문적 실습과 일상 실습을 모두 형성하는 6가지 핵심 역량을 중심으로 설계되었습니다: 비판적 사고, 창의적 사고, 자기주도적 학습, 소통과 협업, 다양성과 공감, 글로벌 조화와 지속가능성. 이러한 가치들은 단순한 이상이 아닙니다—교실 수업부터 기관 전략까지 우리가 내리는 모든 결정을 이끕니다.'
                : 'Our curriculum is designed around six core competencies that shape both our academic and everyday practices: Critical Thinking, Creative Thinking, Self-Directed Learning, Communication & Collaboration, Diversity & Empathy, and Global Harmony & Sustainability. These values are not just ideals—they guide every decision we make, from classroom instruction to institutional strategy.'}
            </p>
            <p>
              {locale === 'ko'
                ? '혁신 기초 학교에서의 첫 해에, 여러분은 비판적이고 창의적으로 사고하고, 자신의 학습에 주도권을 갖고, 전 세계의 동료들과 협력하는 능력을 개발할 것입니다. 숙련된 소통자, 팀 플레이어, 그리고 자비로운 세계 시민으로 성장하면서, 여러분은 학문적 여정을 위한 강력한 토대를 마련하게 될 것입니다.'
                : "In your first year at the School of Innovation Foundations, you'll develop the ability to think critically and creatively, take ownership of your learning, and collaborate with peers from around the world. As you grow into a skilled communicator, team player, and compassionate global citizen, you'll lay a strong foundation for your academic journey."}
            </p>
            <p>
              {locale === 'ko'
                ? '2년차부터는 미래 융합 전공 학교를 통해 학문적 경로에 맞춤화된 전문 프로그램을 추구하면서 6가지 핵심 역량을 더욱 심화시킬 것입니다. 실제 문제에 도전하든 대담한 아이디어를 탐구하든, 여러분은 급변하는 세상의 속도를 따라가는 것뿐만 아니라 미래를 이끌어갈 수 있도록 준비될 것입니다.'
                : "From your second year onward, through the School of Future Convergence Major, you'll deepen the six core competencies while pursuing specialized programs tailored to your academic pathway. Whether you're addressing real-world challenges or exploring bold ideas, you'll be equipped not just to keep pace with a rapidly changing world—but to lead it into the future."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CompetenciesDiagram({ locale }: { locale: string }) {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto px-4 md:px-6 lg:px-8" style={{ maxWidth: MAX_CONTENT_WIDTH }}>
        <div className="max-w-[720px] mb-12">
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-tight tracking-[-2px] md:tracking-[-3.2px] text-black">
            {locale === 'ko' ? '6가지 핵심 역량은 무엇인가?' : 'What are six competencies?'}
          </h2>
        </div>

        <div className="flex justify-center mb-16">
          <div className="relative w-[707px] h-[707px]">
            {/* Hexagon diagram container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[596px] h-[596px]">
                {/* Background ellipse */}
                <Image
                  src="/assets/ellipse-shape.svg"
                  alt=""
                  width={596}
                  height={596}
                  className="absolute inset-0"
                />
                {/* Mask overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/assets/mask-shape.png"
                    alt=""
                    width={615}
                    height={615}
                    className="relative"
                  />
                </div>
                {/* Color overlay with mask */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    maskImage: 'url(/assets/update-color.png)',
                    maskSize: '615px 615px',
                    maskPosition: 'center',
                    maskRepeat: 'no-repeat',
                  }}
                >
                  <div className="w-[540px] h-[540px] rounded-full bg-[#B69FFF] mix-blend-overlay"></div>
                </div>
              </div>
            </div>

            {/* Competency labels positioned around the hexagon */}
            <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2">
              <div className="text-center text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black whitespace-nowrap">
                {locale === 'ko' ? '비판적 사고' : 'Critical Thinking'}
              </div>
            </div>

            <div className="absolute top-[150px] right-[80px]">
              <div className="text-center text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black whitespace-nowrap">
                {locale === 'ko' ? '창의적 사고' : 'Creative Thinking'}
              </div>
            </div>

            <div className="absolute bottom-[150px] right-[80px]">
              <div className="text-center text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black whitespace-nowrap">
                {locale === 'ko' ? (
                  '소통과 협업'
                ) : (
                  <>
                    Communication
                    <br />& Collaboration
                  </>
                )}
              </div>
            </div>

            <div className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2">
              <div className="text-center text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black whitespace-nowrap">
                {locale === 'ko' ? '다양성과 공감' : 'Diversity & Empathy'}
              </div>
            </div>

            <div className="absolute bottom-[150px] left-[80px]">
              <div className="text-center text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black whitespace-nowrap">
                {locale === 'ko' ? '자기주도적 학습' : 'Self-Directed Learning'}
              </div>
            </div>

            <div className="absolute top-[150px] left-[60px]">
              <div className="text-center text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black whitespace-nowrap">
                {locale === 'ko' ? (
                  <>
                    글로벌 조화와
                    <br />
                    지속가능성
                  </>
                ) : (
                  <>
                    Global Harmony
                    <br />& Sustainability
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Competency details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1380px]">
          {competencies.map((competency, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-[22px] font-medium leading-[1.35] tracking-[-0.66px] text-black">
                {locale === 'ko' ? competency.titleKo : competency.titleEn}
              </h3>
              <p className="text-[20px] font-normal leading-[1.35] tracking-[-0.6px] text-black">
                {locale === 'ko' ? competency.descriptionKo : competency.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function InterdisciplinarySection({ locale }: { locale: string }) {
  return (
    <>
      <div className="w-full">
        <Image
          src="/assets/divider-what-learn.svg"
          alt=""
          width={1920}
          height={1}
          className="w-full h-auto"
        />
      </div>

      <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto px-4 md:px-6 lg:px-8" style={{ maxWidth: MAX_CONTENT_WIDTH }}>
          <div className="mb-16">
            <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-tight tracking-[-2px] md:tracking-[-3.2px] text-black max-w-[1040px]">
              {locale === 'ko'
                ? '학제간 여정이 실제로 어떤 모습인지 궁금하신가요?'
                : 'Curious about what an interdisciplinary journey really looks like?'}
            </h2>
          </div>

          <div className="mb-12">
            <h3 className="text-[37px] font-medium leading-[1.3] tracking-[-1.11px] text-black max-w-[840px]">
              {locale === 'ko'
                ? '태제 스쿼드가 들려주는 이야기를 들어보세요.'
                : 'Hear what the Taejae Squad has to say.'}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Video placeholders - these would be actual embedded videos */}
            <div className="aspect-[3/2] bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-6 border-r-0 border-t-4 border-b-4 border-l-white border-t-transparent border-b-transparent ml-1"></div>
              </div>
            </div>

            <div className="aspect-[3/2] bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-6 border-r-0 border-t-4 border-b-4 border-l-white border-t-transparent border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default function WhatLearnPage() {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen bg-white">
        <HeroSection locale={locale} />
        <CompetenciesDiagram locale={locale} />
        <InterdisciplinarySection locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  )
}
