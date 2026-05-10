"use client";

import { PENDING_SCROLL_STORAGE_KEY } from "@/hooks/useSectionNavigation";
import { useEffect } from "react";

/** Runs on the homepage after navigation from other routes; reads sessionStorage and smooth-scrolls. */
export function PendingSectionScroll() {
  useEffect(() => {
    const sectionId = sessionStorage.getItem(PENDING_SCROLL_STORAGE_KEY);
    if (!sectionId) return;

    sessionStorage.removeItem(PENDING_SCROLL_STORAGE_KEY);

    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, []);

  return null;
}
