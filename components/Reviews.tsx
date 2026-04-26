import { useTranslations } from 'next-intl';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const REVIEW_KEYS = ['review1', 'review2', 'review3'] as const;

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-brand-sky" aria-label="5 / 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78L1.58 7.62l5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

// TODO: replace with real reviews
export default function Reviews() {
  const t = useTranslations('reviews');

  return (
    <section id="reviews" className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <AnimatedSection>
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t('heading')}
          </h2>
        </AnimatedSection>

        <StaggerContainer
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
          stagger={0.12}
          amount={0.2}
        >
          {REVIEW_KEYS.map((key) => (
            <StaggerItem
              key={key}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-bg-light p-6 shadow-sm"
            >
              <figure className="flex h-full flex-col">
                <Stars />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                  “{t(`items.${key}.text`)}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-slate-900">
                  {t(`items.${key}.name`)}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
