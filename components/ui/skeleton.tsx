'use client'

import { cva, type VariantProps } from 'class-variance-authority'

const skeletonVariants = cva('animate-pulse rounded-md bg-gray-200', {
  variants: {
    variant: {
      default: 'bg-gray-200',
      card: 'bg-gray-200 rounded-lg',
      text: 'bg-gray-200 rounded',
      circular: 'bg-gray-200 rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface SkeletonProps extends VariantProps<typeof skeletonVariants> {
  className?: string
  style?: React.CSSProperties
}

export function Skeleton({ variant, className, style }: SkeletonProps) {
  return <div className={skeletonVariants({ variant, className })} style={style} />
}

// Pre-built skeleton components
export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
        />
      ))}
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="space-y-4 rounded-lg border p-6">
      <div className="flex items-center space-x-4">
        <Skeleton variant="circular" className="h-12 w-12" />
        <div className="space-y-2">
          <Skeleton variant="text" className="h-4 w-32" />
          <Skeleton variant="text" className="h-3 w-24" />
        </div>
      </div>
      <TextSkeleton lines={3} />
    </div>
  )
}

export function ImageSkeleton({ aspectRatio = '16/9' }: { aspectRatio?: string }) {
  return <Skeleton variant="card" className="w-full" style={{ aspectRatio }} />
}

export function FacultyCardSkeleton() {
  return (
    <div className="flex flex-col space-y-4">
      {/* Profile Image Skeleton */}
      <ImageSkeleton aspectRatio="305/301" />

      {/* Content Skeleton */}
      <div className="flex flex-col space-y-4">
        <div className="space-y-2">
          {/* Name */}
          <Skeleton variant="text" className="h-6 w-32" />
          {/* Degree */}
          <Skeleton variant="text" className="h-4 w-16" />
        </div>

        <div className="space-y-2">
          {/* Field */}
          <Skeleton variant="text" className="h-4 w-40" />
          {/* University */}
          <Skeleton variant="text" className="h-4 w-36" />
        </div>

        {/* Social Links */}
        <div className="flex gap-2">
          <Skeleton variant="circular" className="h-8 w-8" />
          <Skeleton variant="circular" className="h-8 w-8" />
          <Skeleton variant="circular" className="h-8 w-8" />
        </div>
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="space-y-8 py-16">
      {/* Title skeleton */}
      <div className="space-y-4">
        <Skeleton variant="text" className="h-12 w-3/4" />
        <Skeleton variant="text" className="h-12 w-1/2" />
      </div>

      {/* Description skeleton */}
      <div className="space-y-3">
        <TextSkeleton lines={4} />
      </div>
    </div>
  )
}
