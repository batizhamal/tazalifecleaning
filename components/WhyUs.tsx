import { useTranslations } from 'next-intl';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const FEATURE_KEYS = ['fast', 'eco', 'guarantee'] as const;

export default function WhyUs() {
  const t = useTranslations('whyUs');

  return (
    <section id="why-us" className="bg-brand-blue py-16 text-white sm:py-20">
      <div className="container-page">
        <AnimatedSection>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            {t('heading')}
          </h2>
        </AnimatedSection>

        <StaggerContainer
          className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3"
          stagger={0.15}
          amount={0.2}
        >
          {FEATURE_KEYS.map((key) => (
            <StaggerItem key={key} className="text-center">
              <div
                className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-3xl"
                aria-hidden
              >
                {t(`items.${key}.icon`)}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{t(`items.${key}.title`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                {t(`items.${key}.description`)}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
