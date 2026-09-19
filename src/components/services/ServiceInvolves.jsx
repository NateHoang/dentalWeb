import { IconShield } from "../ui/Icons";

export default function ServiceInvolves({ points }) {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-teal-900/5">
        <h2 className="text-lg font-semibold text-teal-900">
          What this involves
        </h2>
        <ul className="mt-6 space-y-4">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-teal-800">
                <IconShield size={14} />
              </span>
              <span className="leading-relaxed text-teal-800/85">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
