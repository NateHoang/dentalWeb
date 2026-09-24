import { IconTooth } from "../../components/ui/Icons";
import photo from "../../assets/me.jpg";

export default function MeetNathan() {
  return (
    <section id="meet-nathan" className="scroll-mt-28 bg-white px-4 py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-[2.5rem] bg-emerald-200/50 lg:block" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-teal-100">
            <img
              src={photo}
              alt="Dr. Hoang"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-teal-900">
            Meet Doctor Hoang
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-teal-800/80">
            <p>
              Nathan is a dental student at California Northstate University,
              expected to graduate in 2029. Before dentistry, he studied
              computer science at UC Santa Barbara, where he developed a strong
              foundation in problem-solving and precision—skills that translate
              directly to clinical work.
            </p>
            <p>
              His background in technology shapes how he approaches dentistry:
              methodical, detail-oriented, and focused on clear communication.
              He believes patients deserve to understand what's happening in
              their mouth and why, without jargon or condescension. That's how
              trust gets built.
            </p>
            <p>
              Nathan is working toward specialization after graduation and is
              committed to providing the highest standard of care in a teaching
              clinic environment, where each treatment is supervised by licensed
              faculty and checked at every step. This means your appointment may
              take longer than you expect—but it also means more thorough care
              and more time for your questions. When he's not in the clinic,
              you'll find him thinking about the next way to improve patient
              experience, whether that's through better explanations, smarter
              scheduling, or technology that actually helps instead of getting
              in the way.
            </p>
          </div>
          <p className="mt-8 rounded-2xl bg-emerald-50 p-5 text-sm leading-relaxed text-teal-800">
            Treatment availability depends on clinical assessment and school
            guidelines.
          </p>
        </div>
      </div>
    </section>
  );
}
