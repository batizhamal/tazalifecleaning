import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import Analytics from '@/components/Analytics';
import '../globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

const SITE_URL = 'https://www.tazalifecleaning.kz';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!locales.includes(locale as Locale)) notFound();

  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    metadataBase: new URL(SITE_URL),
    title: t('title'),
    description: t('description'),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        ru: '/ru',
        kk: '/kz',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${SITE_URL}/${locale}`,
      siteName: 'Taza Life Cleaning',
      locale: locale === 'kz' ? 'kk_KZ' : 'ru_RU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}

const PRICING_ITEMS = [
  { key: 'regular', price: 300 },
  { key: 'general', price: 700 },
  { key: 'renovation', price: 800 },
  { key: 'movein', price: 700 },
] as const;

async function buildJsonLd(locale: string) {
  const meta = await getTranslations({ locale, namespace: 'meta' });
  const c = await getTranslations({ locale, namespace: 'common' });
  const pricing = await getTranslations({ locale, namespace: 'pricing' });

  return {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    '@id': `${SITE_URL}/#business`,
    name: 'Taza Life Cleaning',
    description: meta('description'),
    url: `${SITE_URL}/${locale}`,
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/logo.png`,
    telephone: [c('phone'), c('phoneSecondary')],
    priceRange: '₸₸',
    address: {
      '@type': 'PostalAddress',
      addressLocality: c('city'),
      addressCountry: 'KZ',
    },
    areaServed: {
      '@type': 'City',
      name: c('city'),
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '21:00',
      },
    ],
    sameAs: [c('instagramUrl'), c('whatsappLink')],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: pricing('heading'),
      itemListElement: PRICING_ITEMS.map((item) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: pricing(`items.${item.key}.title`),
          description: pricing(`items.${item.key}.description`),
        },
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: item.price,
          priceCurrency: 'KZT',
          unitCode: 'MTK',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: 1,
            unitCode: 'MTK',
          },
        },
      })),
    },
  };
}

export default async function LocaleLayout({ children, params: { locale } }: LayoutProps) {
  if (!locales.includes(locale as Locale)) notFound();

  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  const jsonLd = await buildJsonLd(locale);

  return (
    <html lang={locale === 'kz' ? 'kk' : locale} className={inter.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
