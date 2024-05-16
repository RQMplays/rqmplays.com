'use client'

import { useLocale, useTranslations } from 'next-intl'
import { locales, usePathname, useRouter } from '@/navigation'
import { ChangeEvent, useTransition } from 'react'

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher')
  const currentLocale = useLocale()

  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()

  function onChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    startTransition(() => router.replace(pathname, { locale: nextLocale }))
  }

  return (
    <select
      defaultValue={currentLocale}
      disabled={isPending}
      onChange={onChange}
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {t(locale)}
        </option>
      ))}
    </select>
  )
}
