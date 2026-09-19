import { HERO_ASSURANCES } from "../data/site.js";
import { ICONS, IconTooth } from "../components/icons/index.jsx";
import Button from "../components/ui/Button.jsx";

function AssuranceStrip() {
  return (
    <div className="mx-auto mt-16 grid max-w-6xl gap-4 rounded-3xl bg-white/70 p-6 sm:grid-cols-3">
      {HERO_ASSURANCES.map(({ icon, label }) => {
        const Icon = ICONS[icon];
        return (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-teal-800">
              {Icon && <Icon size={18} />}
            </span>
            <span className="text-sm font-medium text-teal-900">{label}</span>
          </div>
        );
      })}
    </div>
  );
}

function HeroPortrait() {
  return (
    <div className="relative">
      <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-[2.5rem] bg-emerald-200/50 lg:block" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-teal-100">
        {/* Replace with your own photo:
            import photo from "../assets/me.jpg";
            <img src={photo} alt="" className="h-full w-full object-cover" /> */}
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-teal-700">
          <IconTooth size={56} />
          <p className="px-8 text-center text-sm">Add your photo here</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="px-4 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-teal-700">
            SUPERVISED STUDENT DENTAL CARE
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-teal-900 sm:text-5xl">
            A healthier smile starts with a conversation.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-teal-800/80">
            I am a dental student providing care in a teaching clinic under
            licensed faculty supervision. Tell me what is bothering you and we
            will figure out the next step together.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#contact" size="lg">
              Request an Appointment
            </Button>
            <a
              href="/about#meet-nathan"
              className="text-sm font-semibold text-teal-800 underline decoration-emerald-300 decoration-2 underline-offset-4"
            >
              Meet your student dentist
            </a>
          </div>
        </div>

        <HeroPortrait />
      </div>

      <AssuranceStrip />
    </section>
  );
}
