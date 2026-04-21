"use client";

// R39: Agrupa los 5 componentes client-side no-críticos en un solo bundle
// lazy, en vez de 5 chunks independientes generando waterfalls de JS.
// Se carga via `next/dynamic` desde el layout root.

import StickyCTA from "./StickyCTA";
import SocialSidebar from "./SocialSidebar";
import RouteChangeTracker from "./RouteChangeTracker";
import ScrollDepthTracker from "./ScrollDepthTracker";
import ExitIntentPopup from "./ExitIntentPopup";

export default function ClientEnhancements() {
  return (
    <>
      <StickyCTA />
      <SocialSidebar />
      <RouteChangeTracker />
      <ScrollDepthTracker />
      <ExitIntentPopup />
    </>
  );
}
