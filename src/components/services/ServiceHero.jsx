import { Link } from "react-router-dom";
import { IconChevronLeft } from "../ui/Icons";

export default function ServiceHero({ title, intro }) {
  return (
    <section className="px-4 pt-16 sm:pt-20">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 transition hover:text-teal-900"
        >
          <IconChevronLeft size={16} />
          All services
        </Link>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-teal-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-teal-800/80">{intro}</p>
      </div>
    </section>
  );
}
