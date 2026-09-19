import { Link } from "react-router-dom";
import { SERVICES_CONTENT } from "../data/services";
import ServiceLinkCard from "../components/cards/ServiceLinkCard";
import SectionHeading from "../components/ui/SectionHeading";
import { STEPS } from "../data/site";
import StepCard from "../components/cards/StepCard";

export default function Services() {
  return (
    <>
      <section className="px-4 pb-4 pt-16 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-teal-700">
            SERVICES
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-teal-900 sm:text-5xl">
            Care tailored to your needs
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-teal-800/80">
            Below is the range of treatment provided in the teaching clinic
            where I work. What I can personally deliver depends on my stage of
            training and on faculty assessment, and I will always tell you
            plainly which category your situation falls into.
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_CONTENT.map((service) => (
            <ServiceLinkCard key={service.slug} {...service} />
          ))}
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="How an appointment works" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <StepCard key={step.n} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-4">
        <div className="mx-auto max-w-3xl rounded-3xl bg-emerald-50 p-8 text-center">
          <h2 className="text-xl font-semibold text-teal-900">
            Not sure which of these you need?
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-teal-800/80">
            That is normal, and working it out is part of the appointment.
            Describe what you are noticing and we will start there.
          </p>
          <Link
            to="/#contact"
            className="mt-7 inline-block rounded-full bg-teal-800 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-900/20 transition hover:bg-teal-900"
          >
            Request an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
