"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackScrollDepth, pushEvent } from "@/lib/gtm";

const milestones = [25, 50, 75, 90];

export default function ScrollDepthTracker() {
  const tracked = useRef<Set<number>>(new Set());
  const pathname = usePathname();

  // Reset milestones on route change
  useEffect(() => {
    tracked.current.clear();
  }, [pathname]);

  // W10: Scroll depth milestones
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );

      for (const milestone of milestones) {
        if (scrollPercent >= milestone && !tracked.current.has(milestone)) {
          tracked.current.add(milestone);
          trackScrollDepth(milestone);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // W10: Track key section visibility (micro-conversions)
  useEffect(() => {
    const sections = [
      { selector: "#agendar", name: "form_section" },
      { selector: "[data-track-section='packages']", name: "packages_section" },
      { selector: "[data-track-section='products']", name: "products_section" },
      { selector: "[data-track-section='faq']", name: "faq_section" },
      { selector: "[data-track-section='testimonials']", name: "testimonials_section" },
    ];

    const seen = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const name = (entry.target as HTMLElement).dataset.trackSection
              || entry.target.id
              || "unknown";
            if (!seen.has(name)) {
              seen.add(name);
              pushEvent({ event: "section_view", section_name: name, page_path: pathname });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    // Wait for DOM to settle
    const timer = setTimeout(() => {
      sections.forEach(({ selector }) => {
        const el = document.querySelector(selector);
        if (el) observer.observe(el);
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  // W5: Push remarketing audience signals based on page category
  useEffect(() => {
    let category = "other";
    if (pathname === "/") category = "homepage";
    else if (pathname.includes("aires") || pathname.includes("todo-incluido")) category = "aires";
    else if (pathname.includes("termos")) category = "termos";
    else if (pathname.includes("mantencion")) category = "mantencion";
    else if (pathname.includes("blog")) category = "blog";

    pushEvent({
      event: "page_category",
      page_category: category,
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
