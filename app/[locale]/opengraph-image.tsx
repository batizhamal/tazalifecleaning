import { ImageResponse } from 'next/og';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';

export const alt = 'Taza Life Cleaning';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const meta = await getTranslations({ locale, namespace: 'meta' });
  const c = await getTranslations({ locale, namespace: 'common' });

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background:
            'linear-gradient(135deg, #3a6aad 0%, #4a8bbd 55%, #7ab8d9 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 32,
            opacity: 0.95,
            letterSpacing: 0.5,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: 'rgba(255,255,255,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            T
          </div>
          <div style={{ fontWeight: 600 }}>Taza Life Cleaning</div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            {meta('title')}
          </div>
          <div
            style={{
              fontSize: 30,
              opacity: 0.9,
              maxWidth: 980,
              lineHeight: 1.3,
            }}
          >
            {meta('description')}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 26,
            opacity: 0.95,
          }}
        >
          <div style={{ display: 'flex', gap: 24 }}>
            <span>{c('phoneDisplay')}</span>
            <span style={{ opacity: 0.6 }}>·</span>
            <span>{c('city')}</span>
          </div>
          <div style={{ opacity: 0.85 }}>www.tazalifecleaning.kz</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
