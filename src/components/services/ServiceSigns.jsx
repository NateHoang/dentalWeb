import { useState } from "react";
import useInView from "../../hooks/useInView.js";

export default function ServiceSigns({ signs }) {
  const [ref, inView] = useInView(0.15);
  const [openSign, setOpenSign] = useState(null);

  if (!signs) return null;

  const active = openSign !== null ? signs.items[openSign] : null;

  return (
    <section ref={ref} className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-teal-900 sm:text-4xl">
            {signs.heading}
          </h2>
          <div className="space-y-4">
            <p className="leading-relaxed text-teal-800/80">{signs.lead}</p>
            <p className="font-semibold text-teal-900">{signs.prompt}</p>
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {signs.items.map((sign, i) => (
            <li
              key={sign.label}
              style={{ transitionDelay: inView ? `${i * 70}ms` : "0ms" }}
              className={`transition-all duration-500 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenSign(openSign === i ? null : i)}
                aria-expanded={openSign === i}
                className={`w-full cursor-pointer rounded-2xl px-5 py-4 text-center text-sm font-medium text-teal-800 ring-1 transition ${
                  openSign === i
                    ? "bg-emerald-100 ring-teal-700/25"
                    : "bg-emerald-50/80 ring-teal-900/5 hover:bg-emerald-100/80"
                }`}
              >
                {sign.label}
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm leading-relaxed text-teal-800/70">
          {signs.note}{" "}
          <span className="text-teal-800/50">
            Tap any sign above to see what causes it.
          </span>
        </p>

        {active && (
          <div className="mt-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-teal-900/5 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-teal-900">
                {active.label}
              </h3>
              <button
                type="button"
                onClick={() => setOpenSign(null)}
                className="cursor-pointer text-xs font-semibold text-teal-700 transition hover:text-teal-900"
              >
                Close
              </button>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-teal-700/70">
              Why it happens
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-teal-800/85">
              {active.why}
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-teal-700/70">
              What we do about it
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-teal-800/85">
              {active.what}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
