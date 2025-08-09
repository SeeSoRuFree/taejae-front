import localFont from 'next/font/local'

// Instrument Sans 폰트 설정
// 폰트 파일이 없는 경우, Google Fonts나 로컬 파일로 교체 필요
export const instrumentSans = localFont({
  src: [
    {
      path: '../public/fonts/InstrumentSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/InstrumentSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/InstrumentSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/InstrumentSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-instrument-sans',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
})

// 폰트가 없을 때 사용할 대체 설정
// Google Fonts를 사용하려면 다음과 같이 설정:
// import { Inter } from 'next/font/google'
// export const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
// })
