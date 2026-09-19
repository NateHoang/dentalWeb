import { REVIEWS } from "../data/site.js";
import useCarousel from "../hooks/useCarousel.js";
import ReviewCard from "../components/cards/ReviewCard.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import {
  IconChevronLeft,
  IconChevronRight,
} from "../components/icons/index.jsx";

const arrowClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-teal-800 shadow-md ring-1 ring-teal-900/10 transition hover:bg-teal-50";

export default function Reviews() {
  const {
    index,
    setIndex,
    maxIndex,
    prev,
    next,
    slideWidth,
    offset,
    swipeHandlers,
  } = useCarousel(REVIEWS.length);

  return (
    <section id="reviews" className="overflow-hidden px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="center"
          title="Patient experiences"
          subtitle="Sample layout — replace with genuine, approved reviews."
        />

        <div className="mt-12 flex items-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous reviews"
            className={arrowClass}
          >
            <IconChevronLeft size={20} />
          </button>

          <div className="flex-1 overflow-hidden" {...swipeHandlers}>
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${offset})` }}
            >
              {REVIEWS.map((r, i) => (
                <div
                  key={i}
                  className="shrink-0 px-2"
                  style={{ width: slideWidth }}
                >
                  <ReviewCard {...r} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next reviews"
            className={arrowClass}
          >
            <IconChevronRight size={20} />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 cursor-pointer rounded-full transition-all hover:bg-teal-700 ${
                i === index ? "w-7 bg-teal-800" : "w-2.5 bg-teal-900/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
