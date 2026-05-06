import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Taza Life Cleaning',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootRedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta httpEquiv="refresh" content="0; url=/ru/" />
        <link rel="canonical" href="https://www.tazalifecleaning.kz/ru/" />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "window.location.replace('/ru/');",
          }}
        />
        {children}
      </body>
    </html>
  );
}
