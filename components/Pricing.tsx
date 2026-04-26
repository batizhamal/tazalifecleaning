import { useTranslations } from 'next-intl';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

type PricingKey = 'regular' | 'general' | 'renovation' | 'movein';

const PRICING_KEYS: { key: PricingKey; popular?: boolean }[] = [
  { key: 'regular' },
  { key: 'general', popular: true },
  { key: 'renovation' },
  { key: 'movein' },
];

const FEATURE_INDEXES = [0, 1, 2, 3] as const;

export default function Pricing() {
  const t = useTranslations('pricing');

  return (
    <section id="pricing" className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t('heading')}
            </h2>
            <p className="mt-3 text-base text-slate-600">{t('subheading')}</p>
          </div>
        </AnimatedSection>

        <StaggerContainer
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
          stagger={0.1}
          amount={0.1}
        >
          {PRICING_KEYS.map(({ key, popular }) => (
            <StaggerItem key={key} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
                  popular
                    ? 'border-brand-blue/40 ring-2 ring-brand-blue/30'
                    : 'border-slate-100'
                }`}
              >
                {popular && (
                  <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-brand-blue px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    {t('popularBadge')}
                  </span>
                )}

                <h3 className="text-base font-semibold text-slate-700">
                  {t(`items.${key}.title`)}
                </h3>

                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-sm text-slate-500">{t('fromLabel')}</span>
                  <span className="text-3xl font-extrabold text-brand-blue">
                    {t(`items.${key}.price`)}
                  </span>
                  <span className="text-sm font-semibold text-slate-700">
                    {t('perSqm')}
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-600">
                  {t(`items.${key}.description`)}
                </p>

                <div className="my-5 h-px bg-slate-100" />

                <p className="text-sm font-semibold text-slate-900">
                  {t('includesLabel')}
                </p>
                <ul className="mt-3 flex flex-1 flex-col gap-2.5">
                  {FEATURE_INDEXES.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3a6aad"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 flex-shrink-0"
                        aria-hidden
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{t(`items.${key}.features.${i}`)}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-6 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-colors ${
                    popular
                      ? 'bg-brand-blue text-white hover:bg-brand-blue/90'
                      : 'border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
                  }`}
                >
                  {t('ctaButton')}
                </a>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
