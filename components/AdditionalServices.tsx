import { useTranslations } from 'next-intl';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const ADDITIONAL_KEYS = [
  'balcony',
  'windowsOutside',
  'ozone',
  'kitchenInside',
  'wardrobesInside',
] as const;

export default function AdditionalServices() {
  const t = useTranslations('additional');

  return (
    <section id="additional" className="bg-white py-16 sm:py-20">
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
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          stagger={0.08}
          amount={0.15}
        >
          {ADDITIONAL_KEYS.map((key) => (
            <StaggerItem key={key} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-slate-100 bg-bg-light p-5 transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-md">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm"
                  aria-hidden
                >
                  {t(`items.${key}.icon`)}
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {t(`items.${key}.description`)}
                </p>
                <div className="mt-auto pt-4">
                  <span className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                    {t('priceLabel')}
                  </span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.1} className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-brand-blue px-7 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-blue/90"
          >
            {t('ctaButton')}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
