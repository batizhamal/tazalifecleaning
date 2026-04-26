import { useTranslations } from 'next-intl';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const CATEGORY_KEYS = ['apartments', 'offices', 'upholstery', 'additional'] as const;

export default function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className="bg-bg-light py-16 sm:py-20">
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
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.1}
          amount={0.15}
        >
          {CATEGORY_KEYS.map((key) => (
            <StaggerItem key={key} className="h-full">
              <a
                href="#contact"
                className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue/10 text-3xl transition-colors group-hover:bg-brand-blue/15"
                  aria-hidden
                >
                  {t(`categories.${key}.icon`)}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {t(`categories.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t(`categories.${key}.description`)}
                </p>
                <div className="mt-auto pt-5">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                    {t('ctaButton')}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
