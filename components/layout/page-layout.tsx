'use client'

import { ReactNode } from 'react'
import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'
import { ErrorBoundary } from '@/components/error/error-boundary'
import { useLocaleStore } from '@/lib/store/locale-store'

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

export function PageLayout({ children, className }: PageLayoutProps) {
  const locale = useLocaleStore((state) => state.locale)

  return (
    <div className="bg-white flex flex-col items-center justify-start relative w-full min-h-screen">
      <ErrorBoundary>
        <Header locale={locale} />
      </ErrorBoundary>

      <ErrorBoundary>
        <main className={className || 'w-full'}>{children}</main>
      </ErrorBoundary>

      <ErrorBoundary>
        <Footer locale={locale} />
      </ErrorBoundary>
    </div>
  )
}
