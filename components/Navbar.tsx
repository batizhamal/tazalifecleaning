import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

const SECTION_IDS = {
  services: 'services',
  pricing: 'pricing',
  whyUs: 'why-us',
  howItWorks: 'how-it-works',
  contact: 'contact',
} as const;

export default function Navbar() {
  const t = useTranslations('navbar');
  const locale = useLocale();

  const links = [
    { href: `#${SECTION_IDS.services}`, label: t('services') },
    { href: `#${SECTION_IDS.pricing}`, label: t('pricing') },
    { href: `#${SECTION_IDS.whyUs}`, label: t('whyUs') },
    { href: `#${SECTION_IDS.howItWorks}`, label: t('howItWorks') },
    { href: `#${SECTION_IDS.contact}`, label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 shadow-nav backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-page flex h-16 items-center gap-4">
        <Link href={`/${locale}`} className="flex items-center gap-2" aria-label="Taza Life Cleaning">
          <Image
            src="/logo.png"
            alt="Taza Life Cleaning"
            width={300}
            height={100}
            priority
            loading="eager"
            className="h-16 w-auto"
          />
        </Link>

        <div className="ml-auto flex items-center gap-4 md:gap-6">
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-brand-blue"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <LanguageSwitcher />
          <MobileMenu links={links} openLabel={t('menuOpen')} closeLabel={t('menuClose')} />
        </div>
      </div>
    </header>
  );
}
