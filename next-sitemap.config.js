/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://tazalife.kz',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: './out',
  alternateRefs: [
    {
      href: 'https://tazalife.kz/ru',
      hreflang: 'ru',
    },
    {
      href: 'https://tazalife.kz/kz',
      hreflang: 'kk',
    },
  ],
  additionalPaths: async (config) => [
    await config.transform(config, '/ru'),
    await config.transform(config, '/kz'),
  ],
  exclude: ['/'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
