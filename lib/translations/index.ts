import koMessages from '@/messages/ko.json'
import enMessages from '@/messages/en.json'
import type { Locale } from '@/lib/types/locale'

const translations = {
  ko: koMessages,
  en: enMessages,
}

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.ko
}

export function useTranslation(locale: Locale) {
  const messages = getTranslations(locale)

  const t = (key: string): any => {
    const keys = key.split('.')
    let value: any = messages

    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        // Try fallback to Korean if current locale is not Korean
        if (locale !== 'ko') {
          const fallbackValue = getFallbackTranslation(key, 'ko')
          if (fallbackValue !== key) {
            console.warn(`Translation key not found for ${locale}: ${key}, using Korean fallback`)
            return fallbackValue
          }
        }

        console.warn(`Translation key not found: ${key}`)
        // Return a more user-friendly fallback
        return `[Missing: ${key}]`
      }
    }

    return value
  }

  const getFallbackTranslation = (key: string, fallbackLocale: Locale): string => {
    const fallbackMessages = getTranslations(fallbackLocale)
    const keys = key.split('.')
    let value: any = fallbackMessages

    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        return key
      }
    }

    return typeof value === 'string' ? value : key
  }

  return { t, messages }
}
