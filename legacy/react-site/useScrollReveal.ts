import { useEffect, type RefObject } from "react";

export function useScrollReveal(
  containerRef: RefObject<HTMLElement | null>,
  options?: { threshold?: number; rootMargin?: string }
) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const threshold = options?.threshold ?? 0.15;
    const rootMargin = options?.rootMargin ?? "0px 0px -40px 0px";

    const targets = root.querySelectorAll(".reveal, .reveal-scale");
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerRef, options?.threshold, options?.rootMargin]);
}
