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

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = messages

    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
    }

    return typeof value === 'string' ? value : key
  }

  return { t, messages }
}
