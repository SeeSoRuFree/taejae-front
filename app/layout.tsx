import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Taejae University',
  description: 'The Next Answer - Taejae University Official Website',
  keywords: 'Taejae University, 태제대학교, education, university',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
