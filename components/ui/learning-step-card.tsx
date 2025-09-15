'use client'

interface LearningStepCardProps {
  title: string
  subtitle: string
  className?: string
}

export function LearningStepCard({ title, subtitle, className = '' }: LearningStepCardProps) {
  return (
    <div className={`relative w-[461px] h-[200px] rounded-[24px] mobile:w-full ${className}`} style={{ background: 'linear-gradient(180deg, rgba(39, 125, 62, 0.09) 0%, rgba(41, 132, 65, 0.16) 100%)' }}>
      <div className="content-stretch flex flex-col font-normal gap-4 items-center justify-center leading-[0] overflow-clip relative size-full text-[#111111] text-nowrap mobile:text-wrap">
        <div className="font-eb-garamond relative shrink-0 text-[44px] tracking-[-0.88px] mobile:text-[32px] mobile:text-center">
          <p className="leading-[1.1] text-nowrap whitespace-pre mobile:text-wrap">
            {title}
          </p>
        </div>
        <div className="font-rethink-sans relative shrink-0 text-[16px] tracking-[-0.48px] mobile:text-center">
          <p className="leading-[1.5] text-nowrap whitespace-pre mobile:text-wrap">
            {subtitle}
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  )
}