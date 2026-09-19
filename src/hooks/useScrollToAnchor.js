import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToAnchor() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          const offsetTop = element.offsetTop - 100; // 100px offset for sticky navbar
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}
