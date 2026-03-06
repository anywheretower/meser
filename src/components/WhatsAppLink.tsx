"use client";

import { trackWhatsAppClick } from "@/lib/gtm";

export default function WhatsAppLink({
  href,
  location,
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { location: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackWhatsAppClick(location)}
      {...props}
    >
      {children}
    </a>
  );
}
