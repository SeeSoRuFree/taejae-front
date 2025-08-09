'use client'

import { useEffect, useState, ReactNode } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import { MAX_CONTENT_WIDTH } from '@/lib/constants/layout'

interface AdaptiveCarouselProps {
  children: ReactNode[]
  itemWidth: number
  gap?: number
  maxWidth?: number
  carouselOptions?: EmblaOptionsType
  className?: string
  containerClassName?: string
}

export function AdaptiveCarousel({
  children,
  itemWidth,
  gap = 20,
  maxWidth = MAX_CONTENT_WIDTH,
  carouselOptions = {},
  className = '',
  containerClassName = '',
}: AdaptiveCarouselProps) {
  const [needsCarousel, setNeedsCarousel] = useState(false)

  const defaultCarouselOptions: EmblaOptionsType = {
    align: 'start',
    loop: false,
    skipSnaps: false,
    containScroll: 'trimSnaps',
    dragFree: false,
    watchDrag: true,
    ...carouselOptions,
  }

  const [emblaRef] = useEmblaCarousel(defaultCarouselOptions)

  useEffect(() => {
    const checkCarouselNeed = () => {
      const itemCount = children.length
      // Total width needed = itemWidth * count + gap * (count - 1) + padding
      const totalWidthNeeded = itemWidth * itemCount + gap * (itemCount - 1) + 32
      const viewportWidth = window.innerWidth
      const availableWidth = Math.min(viewportWidth, maxWidth)
      setNeedsCarousel(availableWidth < totalWidthNeeded)
    }

    checkCarouselNeed()
    window.addEventListener('resize', checkCarouselNeed)
    return () => window.removeEventListener('resize', checkCarouselNeed)
  }, [children.length, itemWidth, gap, maxWidth])

  if (needsCarousel) {
    return (
      <div className={`overflow-hidden ${containerClassName}`} ref={emblaRef}>
        <div className={`flex ${className}`} style={{ gap: `${gap}px` }}>
          {children.map((child, index) => (
            <div key={index} className="flex-none" style={{ width: `${itemWidth}px` }}>
              {child}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`flex ${className}`} style={{ gap: `${gap}px` }}>
      {children.map((child, index) => (
        <div key={index} className="flex-none" style={{ width: `${itemWidth}px` }}>
          {child}
        </div>
      ))}
    </div>
  )
}
