import { Fragment } from 'react';
import { useTranslations } from 'next-intl';
import AnimatedSection from './AnimatedSection';

type ColumnKey = 'regular' | 'general' | 'renovation';

type Row = {
  key: string;
  regular: boolean;
  general: boolean;
  renovation: boolean;
};

type Group = {
  groupKey: 'common' | 'kitchen' | 'bathroom';
  rows: Row[];
};

const GROUPS: Group[] = [
  {
    groupKey: 'common',
    rows: [
      { key: 'dustAccessible', regular: true, general: true, renovation: true },
      { key: 'carpets', regular: true, general: true, renovation: false },
      { key: 'floors', regular: true, general: true, renovation: true },
      { key: 'doors', regular: true, general: true, renovation: true },
      { key: 'mirrors', regular: false, general: true, renovation: true },
      { key: 'windowsInside', regular: false, general: true, renovation: true },
      { key: 'radiators', regular: false, general: true, renovation: true },
      { key: 'wallsCeiling', regular: false, general: false, renovation: true },
    ],
  },
  {
    groupKey: 'kitchen',
    rows: [
      { key: 'cabinetsAppliances', regular: true, general: true, renovation: true },
      { key: 'backsplash', regular: false, general: true, renovation: true },
      { key: 'hood', regular: false, general: true, renovation: false },
    ],
  },
  {
    groupKey: 'bathroom',
    rows: [
      { key: 'fixtures', regular: true, general: true, renovation: true },
      { key: 'tile', regular: false, general: true, renovation: true },
    ],
  },
];

const NOTE_KEYS = ['rooms', 'wcBalcony', 'appliancesInside', 'winterWindows'] as const;

const COLUMNS: ColumnKey[] = ['regular', 'general', 'renovation'];

function CheckIcon() {
  return (
    <span
      className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue/15"
      aria-hidden
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3a6aad"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

function DashIcon() {
  return (
    <span
      className="inline-block h-1 w-3 rounded-full bg-slate-300"
      aria-hidden
    />
  );
}

export default function WhatIncluded() {
  const t = useTranslations('included');
  const tPricing = useTranslations('pricing');

  return (
    <section id="included" className="bg-bg-light py-16 sm:py-20">
      <div className="container-page">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t('heading')}
            </h2>
            <p className="mt-3 text-base text-slate-600">{t('subheading')}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={0.1}
          className="mt-10 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/80">
                  <th
                    scope="col"
                    className="px-5 py-4 text-left text-sm font-semibold text-slate-900 sm:px-6"
                  >
                    {t('groups.common.title')}
                  </th>
                  {COLUMNS.map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-slate-900 sm:px-4"
                    >
                      {t(`columns.${col}`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {GROUPS.map((group, gi) => (
                  <Fragment key={group.groupKey}>
                    {gi > 0 && (
                      <tr className="bg-slate-50/60">
                        <th
                          scope="row"
                          colSpan={4}
                          className="px-5 py-3 text-left text-sm font-semibold text-slate-900 sm:px-6"
                        >
                          {t(`groups.${group.groupKey}.title`)}
                        </th>
                      </tr>
                    )}
                    {group.rows.map((row) => (
                      <tr
                        key={`${group.groupKey}-${row.key}`}
                        className="border-t border-slate-100"
                      >
                        <td className="px-5 py-3 text-sm text-slate-700 sm:px-6">
                          {t(`groups.${group.groupKey}.rows.${row.key}`)}
                        </td>
                        {COLUMNS.map((col) => (
                          <td
                            key={col}
                            className="px-3 py-3 text-center sm:px-4"
                          >
                            <span className="sr-only">
                              {row[col] ? t('yes') : t('no')}
                            </span>
                            {row[col] ? <CheckIcon /> : <DashIcon />}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-slate-100 bg-slate-50/60">
                  <td className="px-5 py-4 sm:px-6" />
                  {COLUMNS.map((col) => (
                    <td key={col} className="px-3 py-4 text-center sm:px-4">
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-brand-blue bg-white px-4 py-2 text-xs font-semibold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white sm:text-sm"
                      >
                        {t('ctaPrefix')} {tPricing('fromLabel')} {tPricing(`items.${col}.price`)} {tPricing('perSqm')}
                      </a>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={0.15}
          className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-6"
        >
          <p className="text-sm font-semibold text-amber-900">
            {t('notesTitle')}
          </p>
          <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            {NOTE_KEYS.map((key) => (
              <li key={key} className="flex items-start gap-2">
                <span
                  className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500"
                  aria-hidden
                />
                <span>{t(`notes.${key}`)}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
