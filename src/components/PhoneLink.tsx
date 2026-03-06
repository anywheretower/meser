"use client";

import { trackPhoneClick } from "@/lib/gtm";

export default function PhoneLink({
  href,
  location,
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { location: string }) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackPhoneClick(location)}
      {...props}
    >
      {children}
    </a>
  );
}
