'use client'

import { cva, type VariantProps } from 'class-variance-authority'

const loadingVariants = cva(
  'animate-spin rounded-full border-solid border-current border-r-transparent',
  {
    variants: {
      size: {
        sm: 'h-4 w-4 border-2',
        md: 'h-8 w-8 border-2',
        lg: 'h-12 w-12 border-3',
        xl: 'h-16 w-16 border-4',
      },
      color: {
        primary: 'text-primary-600',
        secondary: 'text-secondary-600',
        gray: 'text-gray-400',
        white: 'text-white',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  }
)

export interface LoadingSpinnerProps extends VariantProps<typeof loadingVariants> {
  className?: string
}

export function LoadingSpinner({ size, color, className }: LoadingSpinnerProps) {
  return <div className={loadingVariants({ size, color, className })} />
}

// Page-level loading component
export function PageLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <LoadingSpinner size="xl" />
        <p className="mt-4 text-lg text-gray-600">로딩 중...</p>
      </div>
    </div>
  )
}

// Section loading with text
export function SectionLoading({ message = '로딩 중...' }: { message?: string }) {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-2 text-gray-600">{message}</p>
      </div>
    </div>
  )
}

// Inline loading for buttons
export function InlineLoading({ size = 'sm' }: { size?: 'sm' | 'md' }) {
  return <LoadingSpinner size={size} color="white" />
}
