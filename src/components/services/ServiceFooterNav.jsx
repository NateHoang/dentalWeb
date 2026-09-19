import { Link } from "react-router-dom";
import { IconChevronLeft, IconChevronRight } from "../ui/Icons";

export default function ServiceFooterNav({ title, prev, next }) {
  return (
    <section className="px-4 pb-20 pt-4">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/#contact"
          className="block rounded-full bg-teal-800 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-teal-900/20 transition hover:bg-teal-900"
        >
          Ask about {title.toLowerCase()}
        </Link>

        <div className="mt-10 flex flex-col gap-4 border-t border-teal-900/10 pt-8 sm:flex-row sm:justify-between">
          {prev ? (
            <Link
              to={`/services/${prev.slug}`}
              className="flex items-center gap-2 text-sm font-semibold text-teal-800 transition hover:text-teal-900"
            >
              <IconChevronLeft size={16} />
              {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to={`/services/${next.slug}`}
              className="flex items-center gap-2 text-sm font-semibold text-teal-800 transition hover:text-teal-900 sm:ml-auto"
            >
              {next.title}
              <IconChevronRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
