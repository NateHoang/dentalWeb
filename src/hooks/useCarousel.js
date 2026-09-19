import { useCallback, useEffect, useRef, useState } from "react";

export default function useCarousel(total, { desktopPerPage = 3 } = {}) {
  const [perPage, setPerPage] = useState(1);
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setPerPage(mq.matches ? desktopPerPage : 1);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [desktopPerPage]);

  const maxIndex = Math.max(0, total - perPage);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(
    () => setIndex((i) => (i === 0 ? maxIndex : i - 1)),
    [maxIndex],
  );
  const next = useCallback(
    () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
    [maxIndex],
  );

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 45) (delta < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return {
    index,
    setIndex,
    perPage,
    maxIndex,
    prev,
    next,
    slideWidth: `${100 / perPage}%`,
    offset: `-${index * (100 / perPage)}%`,
    swipeHandlers: { onTouchStart, onTouchEnd },
  };
}
