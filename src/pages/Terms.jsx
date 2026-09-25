import { SITE } from "../data/site.js"; // adjust depth if needed

export default function Terms() {
  const updated = "September 2026";

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold text-teal-900">Terms of Use</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>

        <div className="mt-8 space-y-8 text-sm leading-7 text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-teal-900">
              About this website
            </h2>
            <p className="mt-2">
              This website is provided by {SITE.name}, a dental student clinic
              operating under licensed faculty supervision at {SITE.school}. By
              using the site, you agree to the terms set out below. If you do
              not agree with them, please do not use the site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">
              Information, not medical advice
            </h2>
            <p className="mt-2">
              The content on this site is general information about dental
              treatment. It is written to help you understand what different
              procedures involve, and it is not a diagnosis, a treatment plan,
              or a substitute for an examination by a qualified clinician.
            </p>
            <p className="mt-2">
              Everyone's teeth are different. A description that applies to one
              person may be entirely wrong for another. Do not act on anything
              you read here without speaking to a dentist about your own
              situation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">Emergencies</h2>
            <p className="mt-2">
              This website is not for emergencies and is not monitored around
              the clock. If you have severe pain, facial swelling, difficulty
              swallowing or breathing, uncontrolled bleeding, or a dental injury
              from trauma, seek urgent care — contact an emergency dental
              service or your nearest hospital rather than submitting a form
              here. Do not wait for a reply.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">
              Appointments and enquiries
            </h2>
            <p className="mt-2">
              Sending an appointment request through this site does not create a
              dentist–patient relationship and does not guarantee an appointment
              at any particular time. Appointments are confirmed separately.
              Because this is a teaching clinic, procedures are performed by
              students under faculty supervision, and timelines may be longer
              than in a private practice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">
              Accuracy and availability
            </h2>
            <p className="mt-2">
              We try to keep the content accurate and current, but we do not
              warrant that everything on the site is complete, up to date, or
              free from error. We may change, move, or remove content at any
              time, and we do not guarantee that the site will always be
              available or free from interruption.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">
              Limitation of liability
            </h2>
            <p className="mt-2">
              To the extent permitted by law, we are not liable for any loss or
              damage arising from your use of, or reliance on, the information
              on this website. Nothing in these terms limits any liability that
              cannot be limited by law, including in relation to clinical care
              provided to patients.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">
              Content and ownership
            </h2>
            <p className="mt-2">
              The text, diagrams, and images on this site belong to {SITE.name}
              or are used with permission, and are provided for your personal
              use. Please do not reproduce or republish them without asking
              first.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">
              Changes to these terms
            </h2>
            <p className="mt-2">
              We may update these terms from time to time. The version published
              on this page is the one that applies, and the "last updated" date
              above shows when it last changed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-teal-900">Contact</h2>
            <p className="mt-2">
              Questions about these terms can be sent to{" "}
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
