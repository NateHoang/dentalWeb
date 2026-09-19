import { IconShield, IconSparkle, IconClock } from "../../components/ui/Icons";

const ITEMS = [
  {
    icon: IconSparkle,
    title: "Digital imaging",
    text: "Describe the imaging used in your clinic and what it means for a visit.",
  },
  {
    icon: IconShield,
    title: "Infection control",
    text: "Explain sterilization and safety standards in plain language.",
  },
  {
    icon: IconClock,
    title: "Chairside efficiency",
    text: "Note anything that shortens a visit or reduces repeat appointments.",
  },
];

export default function OurTechnology() {
  return (
    <section id="technology" className="scroll-mt-28 bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight text-teal-900">
          Our Technology
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-teal-800/80">
          Keep this factual — describe equipment the clinic actually has, and
          avoid claiming better outcomes than a conventional approach.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl bg-teal-50/70 p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-teal-800">
                <Icon size={22} />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-teal-900">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-teal-800/75">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
