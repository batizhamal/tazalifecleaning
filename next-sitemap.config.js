/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.tazalifecleaning.kz',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: './out',
  alternateRefs: [
    {
      href: 'https://www.tazalifecleaning.kz/ru',
      hreflang: 'ru',
    },
    {
      href: 'https://www.tazalifecleaning.kz/kz',
      hreflang: 'kk',
    },
  ],
  additionalPaths: async (config) => [
    await config.transform(config, '/ru'),
    await config.transform(config, '/kz'),
    await config.transform(config, '/ru/privacy'),
    await config.transform(config, '/kz/privacy'),
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
