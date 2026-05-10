"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

export const PENDING_SCROLL_STORAGE_KEY = "pending-scroll-section";

export function useSectionNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateToSection = useCallback(
    (sectionId: string) => {
      if (pathname === "/") {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return;
      }

      sessionStorage.setItem(PENDING_SCROLL_STORAGE_KEY, sectionId);
      router.push("/", { scroll: false });
    },
    [pathname, router],
  );

  return { navigateToSection };
}
