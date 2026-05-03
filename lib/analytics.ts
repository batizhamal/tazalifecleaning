declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type ContactMethod = 'phone' | 'whatsapp';
export type LinkTarget = '_self' | '_blank';

const GADS_CONVERSION = process.env.NEXT_PUBLIC_GADS_CONVERSION;

const EVENT_TIMEOUT_MS = 2000;

function fireGa4Lead(method: ContactMethod): void {
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

export function trackContact(method: ContactMethod): void {
  fireGa4Lead(method);

  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('event', 'conversion_event_purchase', {
    method,
    event_timeout: EVENT_TIMEOUT_MS,
  });
}

/**
 * Fires lead + conversion events, then navigates to `url` once the event has
 * been sent (or after EVENT_TIMEOUT_MS, whichever is sooner). Mirrors Google's
 * recommended `gtagSendEvent` delayed-navigation pattern so conversion hits
 * are not lost when the browser leaves the page (tel:, wa.me, etc.).
 */
export function trackContactClick(
  method: ContactMethod,
  url: string,
  target: LinkTarget = '_self',
): void {
  // For new tabs we must open the window synchronously inside the user
  // gesture, otherwise popup blockers will kill it after the async delay.
  const popup = target === '_blank' ? window.open('about:blank', '_blank') : null;

  const navigate = () => {
    if (target === '_blank') {
      if (popup) {
        popup.location.href = url;
      } else {
        // Popup blocked — fall back to same-tab navigation
        window.location.href = url;
      }
    } else {
      window.location.href = url;
    }
  };

  fireGa4Lead(method);

  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    navigate();
    return;
  }

  let navigated = false;
  const navigateOnce = () => {
    if (navigated) return;
    navigated = true;
    navigate();
  };

  window.gtag('event', 'conversion_event_purchase', {
    method,
    event_callback: navigateOnce,
    event_timeout: EVENT_TIMEOUT_MS,
  });

  // Safety net: if the callback never fires (e.g. blocked tracker), navigate
  // anyway shortly after the timeout so UX never feels broken.
  window.setTimeout(navigateOnce, EVENT_TIMEOUT_MS + 200);
}
