'use client';

import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import {
  trackContact,
  trackContactClick,
  type ContactMethod,
  type LinkTarget,
} from '@/lib/analytics';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  method: ContactMethod;
};

function isModifiedClick(e: MouseEvent<HTMLAnchorElement>): boolean {
  return (
    e.button !== 0 ||
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey ||
    e.altKey
  );
}

export default function ContactLink({ method, onClick, children, ...rest }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    if (e.defaultPrevented) return;

    const href = e.currentTarget.href;

    // Cmd/Ctrl/middle-click — let the browser open in a new tab natively
    // and just fire the (non-blocking) tracking events.
    if (isModifiedClick(e) || !href) {
      trackContact(method);
      return;
    }

    e.preventDefault();
    const target = (rest.target as LinkTarget | undefined) ?? '_self';
    trackContactClick(method, href, target);
  };

  return (
    <a {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}
