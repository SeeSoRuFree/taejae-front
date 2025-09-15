import Image from 'next/image'

interface SectionDividerProps {
  className?: string
}

export default function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`w-full h-0 relative ${className}`}>
      <div className="absolute inset-y-[-0.53px] left-0 right-0">
        <Image
          src="/assets/section-divider.svg"
          alt="Section divider"
          fill
          className="block max-w-none"
        />
      </div>
    </div>
  )
}
