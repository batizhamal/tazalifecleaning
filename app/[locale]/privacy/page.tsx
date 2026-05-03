import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContacts from '@/components/FloatingContacts';

const SITE_URL = 'https://www.tazalifecleaning.kz';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!locales.includes(locale as Locale)) notFound();

  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'privacy' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: `${SITE_URL}/${locale}/privacy`,
      languages: {
        ru: '/ru/privacy',
        kk: '/kz/privacy',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

type ParagraphBlock = { type: 'p'; text: string };
type ListBlock = { type: 'ul'; items: string[] };
type Block = ParagraphBlock | ListBlock;

type Section = {
  heading: string;
  blocks: Block[];
};

export default async function PrivacyPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();

  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'privacy' });
  const sections = t.raw('sections') as Section[];

  return (
    <>
      <Navbar />
      <main className="bg-bg-light">
        <article className="container-page py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center text-sm font-medium text-brand-blue transition-colors hover:opacity-80"
            >
              {t('backToHome')}
            </Link>

            <header className="mt-6 border-b border-slate-200 pb-6">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {t('title')}
              </h1>
              <p className="mt-2 text-sm text-slate-500">{t('lastUpdated')}</p>
            </header>

            <div className="mt-8 space-y-8 text-slate-700">
              {sections.map((section, idx) => (
                <section key={idx} className="space-y-3">
                  <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    {section.heading}
                  </h2>

                  {section.blocks.map((block, bIdx) => {
                    if (block.type === 'p') {
                      return (
                        <p key={bIdx} className="leading-relaxed">
                          {block.text}
                        </p>
                      );
                    }
                    return (
                      <ul
                        key={bIdx}
                        className="list-disc space-y-1.5 pl-6 leading-relaxed marker:text-brand-blue"
                      >
                        {block.items.map((item, iIdx) => (
                          <li key={iIdx}>{item}</li>
                        ))}
                      </ul>
                    );
                  })}
                </section>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingContacts />
    </>
  );
}
