import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToHash(offset = 96) {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    const id = hash.slice(1);
    const frame = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });

    return () => cancelAnimationFrame(frame);
  }, [hash, pathname, offset]);
}
