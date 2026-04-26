'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { locales } from '@/i18n';

type LocaleCode = (typeof locales)[number];

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a13.5 13.5 0 0 1 0 18" />
      <path d="M12 3a13.5 13.5 0 0 0 0 18" />
    </svg>
  );
}

export default function LanguageSwitcher() {
  const t = useTranslations('languageSwitcher');
  const locale = useLocale() as LocaleCode;
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale: LocaleCode = locale === 'ru' ? 'kz' : 'ru';

  const toggle = () => {
    const segments = pathname.split('/');
    if (locales.includes(segments[1] as LocaleCode)) {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }
    const newPath = segments.join('/') || `/${nextLocale}`;
    router.replace(newPath);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t('toggleAria')}
      title={t('toggleAria')}
      className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-blue hover:text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-1"
    >
      <GlobeIcon className="h-4 w-4" />
      <span>{t(locale)}</span>
    </button>
  );
}
