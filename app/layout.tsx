import type { Metadata } from 'next'
import { EB_Garamond, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Taejae University',
  description: 'The Next Answer - Taejae University Official Website',
  keywords: 'Taejae University, 태제대학교, education, university',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${ebGaramond.variable} ${inter.variable} ${playfairDisplay.variable}`}>
        {children}
      </body>
    </html>
  )
}
