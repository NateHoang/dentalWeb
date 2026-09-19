import { Link } from "react-router-dom";
import { IconChevronRight } from "../ui/Icons";

export default function ServiceLinkCard({ slug, title, blurb }) {
  return (
    <Link
      to={`/services/${slug}`}
      className="group flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-teal-900/5 transition hover:shadow-md hover:ring-teal-900/10"
    >
      <h3 className="text-lg font-semibold text-teal-900">{title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-teal-800/75">{blurb}</p>
      <span className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-teal-700">
        Learn more
        <IconChevronRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
