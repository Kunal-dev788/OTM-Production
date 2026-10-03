"use client";

import { gsap } from "gsap";
import { useEffect } from "react";

const WHEEL_MULTIPLIER = 1;
const SCROLL_DURATION = 0.55;

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      return;
    }

    const scrollPosition = { y: window.scrollY };
    let targetY = scrollPosition.y;
    let isGsapScrolling = false;

    const getMaxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const applyScrollPosition = () => {
      window.scrollTo(0, scrollPosition.y);
    };

    const animateTo = (nextY: number) => {
      targetY = Math.min(getMaxScroll(), Math.max(0, nextY));
      isGsapScrolling = true;

      gsap.killTweensOf(scrollPosition);
      gsap.to(scrollPosition, {
        duration: SCROLL_DURATION,
        ease: "power3.out",
        onComplete: () => {
          isGsapScrolling = false;
          scrollPosition.y = window.scrollY;
          targetY = scrollPosition.y;
        },
        onUpdate: applyScrollPosition,
        overwrite: true,
        y: targetY,
      });
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.defaultPrevented) {
        return;
      }

      const eventTarget = event.target instanceof Element ? event.target : null;

      if (eventTarget?.closest("input, textarea, select, [data-native-scroll]")) {
        return;
      }

      const deltaMultiplier =
        event.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? 16
          : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
            ? window.innerHeight
            : 1;
      const deltaY = event.deltaY * deltaMultiplier;

      if (deltaY === 0 || getMaxScroll() === 0) {
        return;
      }

      event.preventDefault();
      animateTo(targetY + deltaY * WHEEL_MULTIPLIER);
    };

    const handleAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const eventTarget = event.target instanceof Element ? event.target : null;
      const anchor = eventTarget?.closest<HTMLAnchorElement>("a[data-scroll-target]");
      const targetId = anchor?.dataset.scrollTarget;

      if (!targetId) {
        return;
      }

      const section = document.getElementById(targetId);

      if (!section) {
        return;
      }

      event.preventDefault();
      animateTo(window.scrollY + section.getBoundingClientRect().top);
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    };

    const syncNativeScroll = () => {
      if (!isGsapScrolling) {
        scrollPosition.y = window.scrollY;
        targetY = scrollPosition.y;
      }
    };

    const clampAfterResize = () => {
      targetY = Math.min(targetY, getMaxScroll());
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", syncNativeScroll, { passive: true });
    window.addEventListener("resize", clampAfterResize, { passive: true });
    document.addEventListener("click", handleAnchorClick, true);

    return () => {
      gsap.killTweensOf(scrollPosition);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", syncNativeScroll);
      window.removeEventListener("resize", clampAfterResize);
      document.removeEventListener("click", handleAnchorClick, true);
    };
  }, []);

  return null;
}
