import { useTranslations } from 'next-intl';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const STEPS = ['step1', 'step2', 'step3'] as const;

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  return (
    <section id="how-it-works" className="bg-bg-light py-16 sm:py-20">
      <div className="container-page">
        <AnimatedSection>
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t('heading')}
          </h2>
        </AnimatedSection>

        <StaggerContainer
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
          stagger={0.18}
          amount={0.2}
        >
          {STEPS.map((key, idx) => (
            <StaggerItem key={key} className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-xl font-bold text-white shadow-sm">
                {idx + 1}
              </div>
              {idx < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-1/2 top-7 hidden h-0.5 w-full -translate-y-1/2 translate-x-7 bg-brand-blue/30 md:block"
                />
              )}
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {t(`steps.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {t(`steps.${key}.description`)}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
