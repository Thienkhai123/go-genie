import { createI18n } from 'vue-i18n';
import vi from './vi';
import en from './en';

const savedLocale = localStorage.getItem('locale') || 'vi';

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'vi',
  messages: { vi, en },
});

export const availableLocales = [
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
];
