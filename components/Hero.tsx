import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { StaggerContainer, StaggerItem } from './AnimatedSection';
import HeroImage from './HeroImage';
import ContactLink from './ContactLink';

const STAT_KEYS = ['coverage', 'eco', 'guarantee'] as const;

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

function PhoneIcon({ className }: { className?: string }) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.95.36 1.88.7 2.77a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.31-1.31a2 2 0 0 1 2.11-.45c.89.34 1.82.57 2.77.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Hero() {
  const t = useTranslations('hero');
  const c = useTranslations('common');

  const whatsappLink = c('whatsappLink');
  const phone = c('phone');
  const phoneDisplay = c('phoneDisplay');
  const phoneSecondary = c('phoneSecondary');
  const phoneSecondaryDisplay = c('phoneSecondaryDisplay');

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white"
    >
      <div className="container-page relative py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <StaggerContainer
            className="flex flex-col gap-4 text-center md:text-left lg:max-w-[460px]"
            stagger={0.1}
            amount={0.3}
          >

            <StaggerItem>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {t('headline')}
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-base text-slate-600 sm:text-lg">
                {t('subheadline')}
              </p>
            </StaggerItem>

            <StaggerItem>
              <dl className="mt-2 grid grid-cols-3 gap-3 md:gap-6">
                {STAT_KEYS.map((key) => (
                  <div key={key} className="flex flex-col">
                    <dt className="text-lg font-extrabold text-brand-blue sm:text-xl">
                      {t(`stats.${key}.value`)}
                    </dt>
                    <dd className="mt-1 text-xs leading-snug text-slate-600 sm:text-sm">
                      {t(`stats.${key}.label`)}
                    </dd>
                  </div>
                ))}
              </dl>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap md:items-start md:justify-start">
                <ContactLink
                  method="phone"
                  href={`tel:${phone}`}
                  className="inline-flex items-center gap-1.5 text-base font-semibold text-slate-900 transition-colors hover:text-brand-blue sm:text-lg"
                >
                  <PhoneIcon className="h-4 w-4 text-brand-blue" />
                  {phoneDisplay}
                </ContactLink>
                <span className="hidden text-slate-300 sm:inline" aria-hidden>
                  ·
                </span>
                <ContactLink
                  method="phone"
                  href={`tel:${phoneSecondary}`}
                  className="inline-flex items-center gap-1.5 text-base font-semibold text-slate-900 transition-colors hover:text-brand-blue sm:text-lg"
                >
                  <PhoneIcon className="h-4 w-4 text-brand-blue" />
                  {phoneSecondaryDisplay}
                </ContactLink>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-1 flex justify-center md:justify-start">
                <ContactLink
                  method="whatsapp"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-blue/90 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {t('whatsappButton')}
                </ContactLink>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <HeroImage src="/hero.png" alt={t('headline')} />
        </div>
      </div>
    </section>
  );
}
