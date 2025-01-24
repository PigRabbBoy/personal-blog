import { siteConfig } from '../config'
import type I18nKey from './i18nKey'
import { en } from './languages/en'
import { ja } from './languages/ja'
import { th } from './languages/th'

export type Translation = {
  [K in I18nKey]: string
}

const defaultTranslation = en

const map: { [key: string]: Translation } = {
  en_us: en,
  en_gb: en,
  en_au: en,
  ja: ja,
  ja_jp: ja,
  th: th,
  th_th: th,
}

export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || defaultTranslation
}

export function i18n(key: I18nKey): string {
  const lang = siteConfig.lang || 'en'
  return getTranslation(lang)[key]
}
