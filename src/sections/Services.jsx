import { SERVICES, STEPS } from "../data/site.js";
import ServiceCard from "../components/cards/ServiceCard.jsx";
import StepCard from "../components/cards/StepCard.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";

export default function Services() {
  return (
    <section id="services" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Care tailored to your needs" />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <StepCard key={s.n} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
