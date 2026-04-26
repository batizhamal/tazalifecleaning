declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type ContactMethod = 'phone' | 'whatsapp';

const GADS_CONVERSION = process.env.NEXT_PUBLIC_GADS_CONVERSION;

export function trackContact(method: ContactMethod): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('event', 'generate_lead', {
    method,
    event_category: 'contact',
    event_label: method,
  });

  if (GADS_CONVERSION) {
    window.gtag('event', 'conversion', {
      send_to: GADS_CONVERSION,
      conversion_method: method,
    });
  }
}
