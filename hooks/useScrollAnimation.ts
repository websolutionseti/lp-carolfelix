"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export interface ScrollAnimationOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  className?: string;
  stagger?: boolean;
}

// Check for reduced motion preference
const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = [0.1, 0.3, 0.7],
    rootMargin = "0px 0px -10% 0px",
    triggerOnce = true,
    delay = 0,
    className = "fade-in",
    stagger = false,
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (prefersReducedMotion()) {
        setIsVisible(true);
        setHasAnimated(true);
        return;
      }

      if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setIsVisible(true);
          if (triggerOnce) {
            setHasAnimated(true);
          }

          // Add performance optimization classes
          const element = elementRef.current;
          if (element) {
            element.classList.add("animate-element");
            requestAnimationFrame(() => {
              element.classList.add("visible");
            });
          }
        }, delay);
      } else if (!triggerOnce && !entry.isIntersecting) {
        setIsVisible(false);
        const element = elementRef.current;
        if (element) {
          element.classList.remove("visible");
        }
      }
    },
    [triggerOnce, delay, hasAnimated],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      // Add base animation class
      currentElement.classList.add(className);
      observer.observe(currentElement);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (currentElement) {
        observer.unobserve(currentElement);
        // Clean up animation classes
        currentElement.classList.remove(
          "animate-element",
          "visible",
          className,
        );
      }
    };
  }, [threshold, rootMargin, handleIntersection, className]);

  // Clean up on visibility change
  useEffect(() => {
    if (isVisible && hasAnimated) {
      const element = elementRef.current;
      if (element) {
        // Remove will-change after animation completes
        const timeout = setTimeout(() => {
          element.classList.add("animation-complete");
          element.classList.remove("animate-element");
        }, 600);

        return () => clearTimeout(timeout);
      }
    }
  }, [isVisible, hasAnimated]);

  return { elementRef, isVisible };
};

export const useStaggeredAnimation = (
  itemCount: number,
  staggerDelay: number = 100,
  options: Partial<ScrollAnimationOptions> = {},
) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false),
  );
  const containerRef = useRef<HTMLElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const {
    threshold = 0.1,
    rootMargin = "0px 0px -20% 0px",
    triggerOnce = true,
  } = options;

  useEffect(() => {
    // Early return for reduced motion
    if (prefersReducedMotion()) {
      setVisibleItems(new Array(itemCount).fill(true));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const container = containerRef.current;
          if (container) {
            container.classList.add("stagger-container");
          }

          // Clear any existing timeouts
          timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
          timeoutsRef.current = [];

          // Animate items with stagger
          for (let i = 0; i < itemCount; i++) {
            const timeout = setTimeout(() => {
              setVisibleItems((prev) => {
                const newState = [...prev];
                newState[i] = true;
                return newState;
              });

              // Add visible class to specific item
              const items = container?.querySelectorAll(".stagger-item");
              if (items && items[i]) {
                requestAnimationFrame(() => {
                  items[i].classList.add("visible");
                });
              }
            }, i * staggerDelay);

            timeoutsRef.current.push(timeout);
          }

          if (triggerOnce) {
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin },
    );

    const currentElement = containerRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [itemCount, staggerDelay, threshold, rootMargin, triggerOnce]);

  return { containerRef, visibleItems };
};

// Hook for parallax effect with performance optimization
export const useParallaxEffect = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let ticking = false;

    const updateParallax = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;

      element.style.transform = `translate3d(0, ${parallax}px, 0)`;

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return elementRef;
};
