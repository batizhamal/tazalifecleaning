import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.066 2.876 1.215 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
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
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
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
      <path d="M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M9 21c4-4 8-8 8-12A8 8 0 1 0 1 9c0 4 4 8 8 12Z" transform="translate(3,0)" />
    </svg>
  );
}

export default function Footer() {
  const t = useTranslations('footer');
  const c = useTranslations('common');
  const locale = useLocale();

  const phone = c('phone');
  const phoneDisplay = c('phoneDisplay');
  const phoneSecondary = c('phoneSecondary');
  const phoneSecondaryDisplay = c('phoneSecondaryDisplay');
  const whatsappLink = c('whatsappLink');
  const instagramUrl = c('instagramUrl');
  const workingHours = c('workingHours');
  const address = c('address');

  return (
    <footer className="bg-brand-blue py-12 pb-24 text-slate-200 md:pb-12">
      <div className="container-page">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-5">
            <p className="text-xl font-semibold text-white">Taza Life Cleaning</p>
            <p className="text-sm text-white/70">{t('tagline')}</p>
            <p className="text-sm text-white/70">{t('description')}</p>
            <div className="flex items-center gap-1.5 text-sm text-white/70">
              <PinIcon className="h-5 w-5" />
              <span>{address}</span>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('whatsapp')}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('instagram')}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:max-w-xs md:items-end md:text-right">
          <div className="flex flex-col gap-2 pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                {t('phonesLabel')}
              </p>
              <a
                href={`tel:${phone}`}
                className="text-lg font-semibold text-white transition-opacity hover:opacity-80"
              >
                {phoneDisplay}
              </a>
              <a
                href={`tel:${phoneSecondary}`}
                className="text-lg font-semibold text-white transition-opacity hover:opacity-80"
              >
                {phoneSecondaryDisplay}
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-white/70">
              <ClockIcon className="h-5 w-5" />
              <span>{workingHours}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{t('copyright')}</p>
          <p className="max-w-md sm:text-right">{t('seoText')}</p>
        </div>
      </div>
    </footer>
  );
}
