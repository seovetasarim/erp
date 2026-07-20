"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const getScrollY = () => {
  if (typeof window === "undefined") return 0;
  try {
    const smoother = ScrollSmoother.get();
    if (smoother) return smoother.scrollTop();
  } catch {
    // ignore
  }
  return window.scrollY || document.documentElement.scrollTop || 0;
};

const useStickyHeader = (offset = 20) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const sync = () => {
      setIsSticky(getScrollY() > offset);
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: sync,
      onRefresh: sync,
    });

    return () => {
      window.removeEventListener("scroll", sync);
      trigger.kill();
    };
  }, [offset]);

  return isSticky;
};

export default useStickyHeader;
