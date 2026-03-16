"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth } from "@/lib/gtm";

const milestones = [25, 50, 75, 90];

export default function ScrollDepthTracker() {
  const tracked = useRef<Set<number>>(new Set());

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
  }, []);

  return null;
}
