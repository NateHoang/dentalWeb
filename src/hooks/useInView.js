import { useEffect, useRef, useState } from "react";

export default function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);

    const fallback = setTimeout(() => setInView(true), 1200);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, inView];
}
