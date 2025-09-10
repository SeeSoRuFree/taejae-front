'use client'

import { Locale } from '@/lib/types/locale'

interface PhilosophySectionProps {
  locale: Locale
}

export function PhilosophySection({ locale }: PhilosophySectionProps) {
  return (
    <section className="w-full px-12 py-2.5">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[960px]">
          <p className="font-['Rethink_Sans'] text-[20px] font-normal leading-[1.5] tracking-[-0.6px] text-[#111111]">
            {locale === 'ko' ? (
              <>
                우리의 교육 철학은 글로벌 조화와 지속가능성을 위한 당신의 비판적이고 창의적인 사고를
                육성하는 것입니다. 우리는 빠르게 변화하는 세계를 탐색하고 형성할 비전, 민첩성,
                그리고 성실성을 갖춘 글로벌 리더로 당신을 양성하는 데 전념하고 있습니다.
                <br />
                <br />
                인류를 하나로 묶는 교육의 힘에 대한 우리의 믿음에 기반하여, 우리는 동서양 문화를
                연결하고, 지속 가능한 미래에 기여하며, 공감과 혁신으로 이끄는 리더로 당신을 양성하는
                데 전념하고 있습니다.
              </>
            ) : (
              <>
                It is our educational philosophy to foster your critical and creative thinking for
                global harmony and sustainability. We are committed to nurturing you as global
                leaders equipped with the vision, agility, and integrity to navigate and shape a
                rapidly evolving world.
                <br />
                <br />
                Grounded in our belief in the power of education to unite humanity, we are committed
                to nurturing you into a leader who bridges Eastern and Western cultures, contributes
                to a sustainable future, and leads with empathy and innovation.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
