import { useState, useEffect, useRef } from "react";

// Triggers when element enters viewport
export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect(); // fire once
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}

// Animate skill bar width when in view
export function useSkillBar(pct) {
  const [width, setWidth] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) setWidth(pct);
  }, [inView, pct]);

  return [ref, width];
}

// Fade-up animation with optional delay
export function useFadeIn(delay = 0) {
  const [ref, inView] = useInView({ threshold: 0.08 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) setTimeout(() => setVisible(true), delay);
  }, [inView, delay]);

  return [ref, visible];
}
