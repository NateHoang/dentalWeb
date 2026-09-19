import { Link } from "react-router-dom";
import { STEPS } from "../../data/site";
import Reviews from "../Reviews";

export default function PatientExperience() {
  return (
    <section id="experience" className="scroll-mt-28 px-4 pt-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight text-teal-900">
          Patient Experience
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-teal-800/80">
          What a visit looks like from the first message to the follow-up.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="rounded-3xl bg-teal-800/95 p-8 text-white"
            >
              <span className="text-sm font-semibold text-emerald-200">
                Step {s.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-teal-50/85">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/#contact"
            className="inline-block rounded-full bg-teal-800 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-900/20 transition hover:bg-teal-900"
          >
            Request an Appointment
          </Link>
        </div>
      </div>

      <Reviews />
    </section>
  );
}
