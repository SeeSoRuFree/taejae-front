'use client'

import { useLocaleStore } from '@/lib/store/locale-store'
import type { Locale } from '@/lib/types/locale'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocaleStore()

  const handleChange = (newLocale: Locale) => {
    setLocale(newLocale)
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleChange('ko')}
        className={`px-3 py-1 rounded ${
          locale === 'ko' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        한국어
      </button>
      <button
        onClick={() => handleChange('en')}
        className={`px-3 py-1 rounded ${
          locale === 'en' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        English
      </button>
    </div>
  )
}
