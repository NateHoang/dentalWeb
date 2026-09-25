import { SITE } from "../data/site.js";

export default function Accessibility() {
  const updated = "September 2026";

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold text-teal-900">Accessibility</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>

        <div className="mt-8 space-y-8 text-sm leading-7 text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-teal-900">
              Our commitment
            </h2>
            <p className="mt-2">
              We want everyone to be able to use this website and to reach us
              easily. We aim to meet the Web Content Accessibility Guidelines
              (WCAG) 2.2 at Level AA, and we treat accessibility as something we
              keep working on rather than a box we have ticked.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">
              What we have done
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Written content in plain, everyday language</li>
              <li>Colour combinations chosen to meet contrast requirements</li>
              <li>Text that can be resized without breaking the layout</li>
              <li>Images given descriptive alternative text</li>
              <li>All interactive elements reachable and usable by keyboard</li>
              <li>Consistent headings and page structure to aid navigation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">
              Known limitations
            </h2>
            <p className="mt-2">
              Some diagrams on this site use colour to distinguish different
              types of tooth decay. These are labelled in the surrounding text,
              but if you rely on a screen reader or cannot distinguish the
              colours, the written description is the reliable source. If any
              figure on the site is unclear to you, please tell us and we will
              describe it directly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">
              Accessing care
            </h2>
            <p className="mt-2">
              If you have a disability, a communication need, or require any
              adjustment to attend an appointment — including extra time, a
              quiet space, a companion, or a written summary afterwards — please
              let us know when you book. We will do what we can to accommodate
              you, and we would rather hear about a need in advance than have
              you struggle in silence.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">
              Telling us about a problem
            </h2>
            <p className="mt-2">
              If something on this website is difficult to use, or you find a
              barrier we have missed, please get in touch. Describe the page and
              the difficulty, and we will look into it and respond. Feedback
              about accessibility is genuinely welcome — it is one of the main
              ways we improve.
            </p>
            <p className="mt-2">
              You can reach us at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-teal-700 underline hover:text-teal-900"
              >
                {SITE.email}
              </a>{" "}
              or by phone at {SITE.phoneDisplay}.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
