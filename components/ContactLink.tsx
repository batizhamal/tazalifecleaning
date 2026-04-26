'use client';

import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { trackContact, type ContactMethod } from '@/lib/analytics';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  method: ContactMethod;
};

export default function ContactLink({ method, onClick, children, ...rest }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    trackContact(method);
    onClick?.(e);
  };

  return (
    <a {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}
