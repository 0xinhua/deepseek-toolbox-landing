import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // 支持的所有语言列表
  locales: ['en', 'zh'],

  // 默认语言
  defaultLocale: 'en',
  
  // Only show locale prefix when it's not the default locale
  localePrefix: 'as-needed'
});